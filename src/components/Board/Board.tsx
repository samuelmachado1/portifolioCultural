import React, { useEffect, useMemo, useRef, useState } from "react";
import type { BoardHouse } from "../../types/portfolio";
import { groupHousesByYear, houseImage, houseImages } from "../../utils/groupByYear";
import "./Board.css";

export interface BoardProfile {
  name: string;
  biography: string;
  yearsActive: number;
  email: string;
  phone: string;
  avatarSrc: string;
  alternativeNames: string[];
}

interface BoardProps {
  houses: BoardHouse[];
  onHouseClick: (house: BoardHouse) => void;
  selectedHouse: BoardHouse | null;
  profile: BoardProfile;
  focusHouse?: { id: string; token: number } | null;
}

type YearCell = { kind: "year"; year: number; key: string; accent: string };
type StopCell = { kind: "stop"; house: BoardHouse; key: string; accent: string; year: number };
type PathCell = YearCell | StopCell;

const HOUSE_COLORS = ["var(--matrix)", "var(--gold)", "var(--coral)", "var(--black)"];

/** Tempo que cada imagem fica em cena enquanto o card está "vivo". */
const FRAME_MS = 1800;
/** Cards com uma única imagem (ou nenhuma) ficam vivos por este mínimo de quadros. */
const MIN_FRAMES = 2;
/** Cards com muitas fotos não monopolizam o ciclo além deste limite. */
const MAX_FRAMES = 5;

function liveFrames(house: BoardHouse) {
  return Math.max(MIN_FRAMES, Math.min(MAX_FRAMES, houseImages(house).length));
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

/**
 * Mantém um único card "vivo" por vez, seguindo a ordem cronológica do
 * tabuleiro. O card vivo percorre suas imagens quadro a quadro e, ao fim,
 * passa o bastão para o próximo; ao chegar no último, volta ao início.
 */
function useLiveStop(stops: StopCell[]) {
  const reducedMotion = usePrefersReducedMotion();
  const [live, setLive] = useState({ stop: 0, frame: 0 });

  useEffect(() => {
    setLive({ stop: 0, frame: 0 });
  }, [stops]);

  useEffect(() => {
    if (reducedMotion || stops.length === 0) return;
    const id = window.setInterval(() => {
      setLive((current) => {
        const house = stops[current.stop]?.house;
        const frames = house ? liveFrames(house) : MIN_FRAMES;
        if (current.frame + 1 < frames) {
          return { stop: current.stop, frame: current.frame + 1 };
        }
        return { stop: (current.stop + 1) % stops.length, frame: 0 };
      });
    }, FRAME_MS);
    return () => window.clearInterval(id);
  }, [stops, reducedMotion]);

  if (reducedMotion) return null;
  const cell = stops[live.stop];
  if (!cell) return null;
  const images = houseImages(cell.house);
  return {
    id: cell.house.id,
    image: images.length > 0 ? images[live.frame % images.length] : undefined,
    durationMs: liveFrames(cell.house) * FRAME_MS,
  };
}

function useColumns() {
  const [columns, setColumns] = useState(8);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width <= 560) setColumns(3);
      else if (width <= 900) setColumns(5);
      else setColumns(8);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

function snakeSlot(index: number, columns: number) {
  const row = Math.floor(index / columns);
  const offset = index % columns;
  const col = row % 2 === 0 ? offset + 1 : columns - offset;
  return { row: row + 1, col };
}

function pathArrow(index: number, total: number, columns: number) {
  if (index >= total - 1) return null;
  const row = Math.floor(index / columns);
  const endOfRow = index % columns === columns - 1;
  if (endOfRow) return "down";
  return row % 2 === 0 ? "right" : "left";
}

export const Board: React.FC<BoardProps> = ({
  houses,
  onHouseClick,
  selectedHouse,
  profile,
  focusHouse,
}) => {
  const columns = useColumns();
  const seenFocus = useRef<number | null>(null);
  const groups = useMemo(() => groupHousesByYear(houses), [houses]);
  const cells = useMemo<PathCell[]>(() => {
    const next: PathCell[] = [];
    groups.forEach((group, groupIndex) => {
      const accent = HOUSE_COLORS[groupIndex % HOUSE_COLORS.length];
      next.push({ kind: "year", year: group.year, key: `year-${group.year}`, accent });
      group.houses.forEach((house) => {
        next.push({ kind: "stop", house, key: house.id, accent, year: group.year });
      });
    });
    return next;
  }, [groups]);
  const stops = useMemo(
    () => cells.filter((cell): cell is StopCell => cell.kind === "stop"),
    [cells]
  );
  const live = useLiveStop(stops);

  useEffect(() => {
    if (!focusHouse || focusHouse.token === seenFocus.current) return;
    const node = document.getElementById(`stop-${focusHouse.id}`);
    if (!node) return;
    seenFocus.current = focusHouse.token;
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusHouse, cells]);

  return (
    <section className="game-board" aria-label="Tabuleiro cronológico">
      <aside className="life-player">
        <img src={profile.avatarSrc} alt={profile.name} className="life-player__avatar" />
        <div className="life-player__copy">
          <h2>{profile.name}</h2>
          {profile.alternativeNames.length > 0 && (
            <p className="life-player__aka">
              Por vezes citado como {profile.alternativeNames.join(", ")}
            </p>
          )}
          <p className="life-player__years">
            Atua no campo da cultura há {profile.yearsActive} anos.
          </p>
          <p className="life-player__bio">{profile.biography}</p>
          <div className="life-player__contacts">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.phone}</span>
          </div>
        </div>
      </aside>

      <p className="game-board__direction">
        Cada casa é um momento da trajetória. Siga as setas, da experiência mais recente à mais antiga.
      </p>

      {cells.length === 0 ? (
        <p className="game-board__empty">Nenhum registro neste filtro.</p>
      ) : (
        <div
          className="life-board"
          style={{ "--cols": columns } as React.CSSProperties}
        >
          {cells.map((cell, index) => {
            const slot = snakeSlot(index, columns);
            const arrow = pathArrow(index, cells.length, columns);
            const onBlack = cell.accent === "var(--black)";
            const nextCell = cells[index + 1];
            const linked = Boolean(arrow && nextCell && nextCell.year === cell.year);
            const placement = {
              gridRow: slot.row,
              gridColumn: slot.col,
              "--house-accent": cell.accent,
            } as React.CSSProperties;

            if (cell.kind === "year") {
              return (
                <div
                  key={cell.key}
                  id={`year-house-${cell.year}`}
                  className={`life-year${onBlack ? " life-year--black" : ""}`}
                  style={placement}
                  aria-label={`Ano ${cell.year}`}
                >
                  {index === 0 && <span className="life-year__start">Agora</span>}
                  <span className="life-year__label">‹{cell.year}</span>
                  {linked && arrow && (
                    <span className={`life-link life-link--${arrow}${onBlack ? " life-link--black" : ""}`} aria-hidden="true" />
                  )}
                  {arrow && <span className={`life-arrow life-arrow--${arrow}`} aria-hidden="true" />}
                </div>
              );
            }

            const image = houseImage(cell.house);
            const selected = selectedHouse?.id === cell.house.id;
            const isLive = live?.id === cell.house.id;
            return (
              <button
                key={cell.key}
                id={`stop-${cell.house.id}`}
                type="button"
                className={`life-stop${image ? " life-stop--photo" : ""}${onBlack ? " life-stop--black" : ""}${selected ? " life-stop--selected" : ""}${isLive ? " life-stop--live" : ""}`}
                style={{
                  ...placement,
                  "--house-image": image ? `url("${image.replace(/"/g, "")}")` : "none",
                } as React.CSSProperties}
                aria-label={`${cell.house.data?.title ?? "Registro"}, ${cell.house.data?.date ?? ""}`}
                onClick={() => onHouseClick(cell.house)}
              >
                {isLive && live?.image && (
                  <span
                    key={live.image}
                    className="life-stop__frame"
                    style={{
                      "--frame-image": `url("${live.image.replace(/"/g, "")}")`,
                      "--frame-ms": `${live.durationMs}ms`,
                    } as React.CSSProperties}
                    aria-hidden="true"
                  />
                )}
                <span className="life-stop__title">{cell.house.data?.title}</span>
                {linked && arrow && (
                  <span className={`life-link life-link--${arrow}${onBlack ? " life-link--black" : ""}`} aria-hidden="true" />
                )}
                {arrow && <span className={`life-arrow life-arrow--${arrow}`} aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};
