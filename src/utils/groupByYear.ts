import type { BoardHouse } from "../types/portfolio";
import { extractYear, parsePortfolioDate } from "./dates";

export interface YearGroup {
  year: number;
  houses: BoardHouse[];
}

const VIDEO_SOURCE = /\.(mov|mp4|webm|m4v)(\?.*)?$/i;

function isImageSource(candidate: string): boolean {
  if (VIDEO_SOURCE.test(candidate)) return false;
  return (
    /^(https?:|data:image\/|blob:|\/)/.test(candidate) ||
    candidate.includes("/")
  );
}

export function houseImage(house: BoardHouse): string | undefined {
  const candidate = house.data?.flyerUrl || house.style?.icon;
  if (!candidate) return undefined;
  return isImageSource(candidate) ? candidate : undefined;
}

/**
 * Todas as imagens exibíveis de uma casa, sem repetição.
 * A primeira é sempre a mesma retornada por `houseImage`.
 */
export function houseImages(house: BoardHouse): string[] {
  const candidates = [
    house.data?.flyerUrl,
    house.style?.icon,
    ...(house.data?.eventPhotos ?? []),
  ];
  const images: string[] = [];
  candidates.forEach((candidate) => {
    const source = candidate?.trim();
    if (!source || !isImageSource(source) || images.includes(source)) return;
    images.push(source);
  });
  return images;
}

export function groupHousesByYear(houses: BoardHouse[]): YearGroup[] {
  const grouped = new Map<number, BoardHouse[]>();

  houses.forEach((house) => {
    const year = extractYear(house.data?.date ?? "");
    if (year === null) return;
    const current = grouped.get(year) ?? [];
    current.push(house);
    grouped.set(year, current);
  });

  return [...grouped.entries()]
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([year, yearHouses]) => ({
      year,
      houses: [...yearHouses].sort(
        (a, b) =>
          parsePortfolioDate(b.data?.date ?? "").getTime() -
          parsePortfolioDate(a.data?.date ?? "").getTime()
      ),
    }));
}
