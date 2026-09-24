import type { BoardHouse } from "../types/portfolio";
import { extractYear, parsePortfolioDate } from "./dates";

export interface YearGroup {
  year: number;
  houses: BoardHouse[];
}

export function houseImage(house: BoardHouse): string | undefined {
  const candidate = house.data?.flyerUrl || house.style?.icon;
  if (!candidate) return undefined;
  if (
    /^(https?:|data:image\/|\/)/.test(candidate) ||
    candidate.includes("/")
  ) {
    return candidate;
  }
  return undefined;
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
