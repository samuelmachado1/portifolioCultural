import { useCallback, useEffect, useMemo, useState } from "react";
import type { BoardHouse } from "../types/portfolio";
import { collectMediaRefs, isMediaRef, pruneMedia, resolveMediaUrl } from "../utils/mediaStore";

const STORAGE_KEY = "portfolio-custom-houses";
const HIDDEN_KEY = "portfolio-hidden-houses";

function isStoredHouse(value: unknown): value is BoardHouse {
  if (!value || typeof value !== "object") return false;
  const house = value as BoardHouse;
  return (
    typeof house.id === "string" &&
    (house.type === "experience" || house.type === "milestone") &&
    typeof house.data?.title === "string" &&
    typeof house.data?.date === "string" &&
    typeof house.data?.description === "string"
  );
}

function readCustomHouses(): BoardHouse[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isStoredHouse);
  } catch {
    return [];
  }
}

function writeCustomHouses(houses: BoardHouse[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(houses));
  void pruneMedia(collectMediaRefs(houses));
}

type MediaUrls = Record<string, string>;

/**
 * Troca referências `media:<uuid>` por URLs `blob:` já resolvidas.
 * Referências ainda não carregadas ficam como estão para não perder o dado ao editar.
 */
function hydrateHouse(house: BoardHouse, mediaUrls: MediaUrls): BoardHouse {
  const refs = collectMediaRefs([house]);
  if (refs.size === 0) return house;

  const swap = (value: string | undefined) =>
    value && isMediaRef(value) ? mediaUrls[value] || value : value;
  const swapList = (list: string[] | undefined) => list?.map((item) => swap(item) ?? item);

  return {
    ...house,
    style: { ...house.style, icon: swap(house.style.icon) },
    data: house.data
      ? {
          ...house.data,
          flyerUrl: swap(house.data.flyerUrl),
          eventPhotos: swapList(house.data.eventPhotos),
          videos: swapList(house.data.videos),
          socialLinks: house.data.socialLinks
            ? { ...house.data.socialLinks, video: swap(house.data.socialLinks.video) }
            : undefined,
        }
      : undefined,
  };
}

function readHiddenIds(): string[] {
  try {
    const raw = window.localStorage.getItem(HIDDEN_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is string => typeof id === "string");
  } catch {
    return [];
  }
}

function writeHiddenIds(ids: string[]) {
  window.localStorage.setItem(HIDDEN_KEY, JSON.stringify(ids));
}

function mergeHouses(initial: BoardHouse[], custom: BoardHouse[], hidden: string[]) {
  const hiddenIds = new Set(hidden);
  const overrides = new Map(custom.map((house) => [house.id, house]));
  const initialIds = new Set(initial.map((house) => house.id));
  const base = initial
    .filter((house) => !hiddenIds.has(house.id))
    .map((house) => overrides.get(house.id) ?? house);
  const extras = custom.filter((house) => !initialIds.has(house.id) && !hiddenIds.has(house.id));
  return [...extras, ...base];
}

export const usePortfolio = (initialHouses: BoardHouse[]) => {
  const [selectedHouse, setSelectedHouse] = useState<BoardHouse | null>(null);
  const [customHouses, setCustomHouses] = useState<BoardHouse[]>(() =>
    readCustomHouses()
  );
  const [hiddenIds, setHiddenIds] = useState<string[]>(() => readHiddenIds());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaUrls, setMediaUrls] = useState<MediaUrls>({});

  useEffect(() => {
    void pruneMedia(collectMediaRefs(readCustomHouses()));
  }, []);

  useEffect(() => {
    const missing = [...collectMediaRefs(customHouses)].filter((ref) => !(ref in mediaUrls));
    if (missing.length === 0) return;
    let cancelled = false;
    void Promise.all(
      missing.map(async (ref) => {
        try {
          return [ref, await resolveMediaUrl(ref)] as const;
        } catch {
          // Arquivo ausente: registra vazio para não tentar de novo a cada render.
          return [ref, ""] as const;
        }
      })
    ).then((entries) => {
      if (cancelled) return;
      setMediaUrls((current) => ({ ...current, ...Object.fromEntries(entries) }));
    });
    return () => {
      cancelled = true;
    };
  }, [customHouses, mediaUrls]);

  const hydratedCustomHouses = useMemo(
    () => customHouses.map((house) => hydrateHouse(house, mediaUrls)),
    [customHouses, mediaUrls]
  );

  const houses = useMemo(
    () => mergeHouses(initialHouses, hydratedCustomHouses, hiddenIds),
    [initialHouses, hydratedCustomHouses, hiddenIds]
  );

  const selectHouse = useCallback((house: BoardHouse) => {
    setSelectedHouse(house);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedHouse(null);
  }, []);

  const addCustomHouse = useCallback((house: BoardHouse) => {
    setCustomHouses((current) => {
      const next = [...current, house];
      writeCustomHouses(next);
      return next;
    });
  }, []);

  const updateHouse = useCallback((house: BoardHouse) => {
    setCustomHouses((current) => {
      const next = current.some((item) => item.id === house.id)
        ? current.map((item) => (item.id === house.id ? house : item))
        : [...current, house];
      writeCustomHouses(next);
      return next;
    });
    setHiddenIds((current) => {
      if (!current.includes(house.id)) return current;
      const next = current.filter((id) => id !== house.id);
      writeHiddenIds(next);
      return next;
    });
  }, []);

  const removeHouse = useCallback((id: string) => {
    setCustomHouses((current) => {
      const next = current.filter((house) => house.id !== id);
      writeCustomHouses(next);
      return next;
    });
    if (initialHouses.some((house) => house.id === id)) {
      setHiddenIds((current) => {
        if (current.includes(id)) return current;
        const next = [...current, id];
        writeHiddenIds(next);
        return next;
      });
    }
    setSelectedHouse((current) => {
      if (current?.id !== id) return current;
      setIsModalOpen(false);
      return null;
    });
  }, [initialHouses]);

  return {
    houses,
    customHouses,
    selectedHouse,
    selectHouse,
    closeModal,
    isModalOpen,
    addCustomHouse,
    updateHouse,
    removeHouse,
  };
};
