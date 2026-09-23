import React, { useEffect, useMemo, useRef, useState } from "react";
import type { BoardHouse } from "../../types/portfolio";
import { extractYear } from "../../utils/dates";
import { groupHousesByYear, houseImage, type YearGroup } from "../../utils/groupByYear";
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
  focusYear?: { year: number; token: number } | null;
}

const HOUSE_COLORS = ["#1f6b45", "#b42318", "#c47b12", "#6b3a1f", "#0e6b5c", "#8c2f39"];

function excerpt(text: string, max = 280) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

function pointOnTrack(index: number, total: number) {
  const safeTotal = Math.max(total, 1);
  const theta = Math.PI - (index / safeTotal) * Math.PI * 2;
  return {
    x: 50 + 41 * Math.cos(theta),
    y: 50 + 38 * Math.sin(theta),
  };
}

function useNarrowBoard() {
  const query = "(max-width: 760px)";
  const [narrow, setNarrow] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setNarrow(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return narrow;
}

interface YearTokenProps {
  group: YearGroup;
  index: number;
  total: number;
  active: boolean;
  selected: boolean;
  onSelect: (year: number) => void;
}

const YearToken: React.FC<YearTokenProps> = ({
  group,
  index,
  total,
  active,
  selected,
  onSelect,
}) => {
  const image = group.houses.map(houseImage).find(Boolean);
  const point = pointOnTrack(index, total);

  return (
    <button
      id={`year-house-${group.year}`}
      type="button"
      className={`year-token${active ? " year-token--active" : ""}${selected ? " year-token--selected" : ""}`}
      style={{
        left: `${point.x}%`,
        top: `${point.y}%`,
        "--house-accent": HOUSE_COLORS[index % HOUSE_COLORS.length],
        "--house-image": image ? `url("${image.replace(/"/g, "")}")` : "none",
      } as React.CSSProperties}
      aria-expanded={active}
      aria-label={`${group.year}, ${group.houses.length} registros`}
      onClick={() => onSelect(group.year)}
    >
      {index === 0 && <span className="year-token__start">Início</span>}
      <span className="year-token__year">{group.year}</span>
      <span className="year-token__count">{group.houses.length}</span>
    </button>
  );
};

interface YearRecordsProps {
  group: YearGroup;
  selectedHouse: BoardHouse | null;
  onHouseClick: (house: BoardHouse) => void;
  onClose?: () => void;
}

const YearRecords: React.FC<YearRecordsProps> = ({
  group,
  selectedHouse,
  onHouseClick,
  onClose,
}) => (
  <div className="year-panel">
    <div className="year-panel__header">
      <div>
        <p className="year-panel__kicker">Casa</p>
        <h2 className="year-panel__title">{group.year}</h2>
      </div>
      {onClose && (
        <button type="button" className="year-panel__close" onClick={onClose}>
          Voltar
        </button>
      )}
    </div>
    <p className="year-panel__meta">
      {group.houses.length} {group.houses.length === 1 ? "registro" : "registros"} neste período
    </p>
    <ul className="year-panel__list">
      {group.houses.map((house) => {
        const image = houseImage(house);
        const isSelected = selectedHouse?.id === house.id;
        return (
          <li key={house.id}>
            <button
              type="button"
              className={`year-record${isSelected ? " year-record--selected" : ""}`}
              onClick={() => onHouseClick(house)}
            >
              {image ? (
                <img src={image} alt="" className="year-record__image" />
              ) : (
                <span className="year-record__fallback" aria-hidden="true" />
              )}
              <span className="year-record__text">
                <strong>{house.data?.title}</strong>
                <small>{house.data?.date}</small>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

interface CenterProfileProps {
  profile: BoardProfile;
}

const CenterProfile: React.FC<CenterProfileProps> = ({ profile }) => (
  <div className="board-profile">
    <img src={profile.avatarSrc} alt={profile.name} className="board-profile__avatar" />
    <h2 className="board-profile__name">{profile.name}</h2>
    {profile.alternativeNames.length > 0 && (
      <p className="board-profile__aka">
        Por vezes citado como {profile.alternativeNames.join(", ")}
      </p>
    )}
    <p className="board-profile__years">
      Atua no campo da cultura há {profile.yearsActive} anos.
    </p>
    <p className="board-profile__bio">{excerpt(profile.biography)}</p>
    <div className="board-profile__contacts">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span>{profile.phone}</span>
    </div>
  </div>
);

export const Board: React.FC<BoardProps> = ({
  houses,
  onHouseClick,
  selectedHouse,
  profile,
  focusYear,
}) => {
  const groups = useMemo(() => groupHousesByYear(houses), [houses]);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const narrow = useNarrowBoard();
  const seenFocus = useRef<number | null>(null);

  useEffect(() => {
    if (!focusYear || focusYear.token === seenFocus.current) return;
    if (!groups.some((group) => group.year === focusYear.year)) return;
    seenFocus.current = focusYear.token;
    setActiveYear(focusYear.year);
    document.getElementById(`year-house-${focusYear.year}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [focusYear, groups]);

  useEffect(() => {
    if (activeYear != null && !groups.some((group) => group.year === activeYear)) {
      setActiveYear(null);
    }
  }, [activeYear, groups]);

  useEffect(() => {
    if (activeYear == null || selectedHouse) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveYear(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeYear, selectedHouse]);

  const activeGroup = groups.find((group) => group.year === activeYear) ?? null;
  const selectedYear = extractYear(selectedHouse?.data?.date ?? "");

  const toggleYear = (year: number) => {
    setActiveYear((current) => (current === year ? null : year));
  };

  if (groups.length === 0) {
    return (
      <section className="game-board" aria-label="Tabuleiro cronológico">
        <p className="game-board__empty">Nenhum registro neste filtro.</p>
      </section>
    );
  }

  return (
    <section className="game-board" aria-label="Tabuleiro cronológico">
      <p className="game-board__direction">
        {narrow
          ? "Cada casa é um ano, do mais antigo ao mais recente."
          : "Cada casa é um ano, do mais antigo ao mais recente, no sentido horário."}
      </p>

      {narrow ? (
        <ol className="year-track">
          {groups.map((group, index) => {
            const image = group.houses.map(houseImage).find(Boolean);
            const open = activeYear === group.year;
            return (
              <li key={group.year} className="year-track__stop">
                <button
                  id={`year-house-${group.year}`}
                  type="button"
                  className={`year-stop${open ? " year-stop--active" : ""}`}
                  style={{
                    "--house-accent": HOUSE_COLORS[index % HOUSE_COLORS.length],
                    "--house-image": image ? `url("${image.replace(/"/g, "")}")` : "none",
                  } as React.CSSProperties}
                  aria-expanded={open}
                  onClick={() => toggleYear(group.year)}
                >
                  <span className="year-stop__year">{group.year}</span>
                  <span className="year-stop__count">
                    {group.houses.length} {group.houses.length === 1 ? "registro" : "registros"}
                  </span>
                </button>
                {open && (
                  <YearRecords
                    group={group}
                    selectedHouse={selectedHouse}
                    onHouseClick={onHouseClick}
                  />
                )}
              </li>
            );
          })}
        </ol>
      ) : (
        <div className="game-board__ring">
          <div className="game-board__track" aria-hidden="true" />
          {groups.map((group, index) => (
            <YearToken
              key={group.year}
              group={group}
              index={index}
              total={groups.length}
              active={activeYear === group.year}
              selected={selectedYear === group.year}
              onSelect={toggleYear}
            />
          ))}
          <div className="game-board__center">
            {activeGroup ? (
              <YearRecords
                group={activeGroup}
                selectedHouse={selectedHouse}
                onHouseClick={onHouseClick}
                onClose={() => setActiveYear(null)}
              />
            ) : (
              <CenterProfile profile={profile} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
