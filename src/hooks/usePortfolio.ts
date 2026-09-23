import { useCallback, useMemo, useState } from "react";
import type { BoardHouse } from "../types/portfolio";

const STORAGE_KEY = "portfolio-custom-houses";

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
}

export const usePortfolio = (initialHouses: BoardHouse[]) => {
  const [selectedHouse, setSelectedHouse] = useState<BoardHouse | null>(null);
  const [customHouses, setCustomHouses] = useState<BoardHouse[]>(() =>
    readCustomHouses()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const houses = useMemo(
    () => [...initialHouses, ...customHouses],
    [initialHouses, customHouses]
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

  const removeCustomHouse = useCallback((id: string) => {
    setCustomHouses((current) => {
      const next = current.filter((house) => house.id !== id);
      writeCustomHouses(next);
      return next;
    });
    setSelectedHouse((current) => {
      if (current?.id !== id) return current;
      setIsModalOpen(false);
      return null;
    });
  }, []);

  return {
    houses,
    customHouses,
    selectedHouse,
    selectHouse,
    closeModal,
    isModalOpen,
    addCustomHouse,
    removeCustomHouse,
  };
};
