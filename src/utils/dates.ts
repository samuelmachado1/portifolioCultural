const MONTHS: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  marco: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

export function extractYear(dateString: string): number | null {
  const match = dateString.match(/\d{4}/);
  if (!match) return null;
  const year = parseInt(match[0], 10);
  return Number.isNaN(year) ? null : year;
}

export function parsePortfolioDate(dateString: string): Date {
  if (!dateString) return new Date(0);

  const normalized = dateString.split(" - ")[0].trim();

  const fullDateMatch = normalized.match(/(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})/i);
  if (fullDateMatch) {
    const day = parseInt(fullDateMatch[1], 10);
    const month = MONTHS[fullDateMatch[2].toLowerCase()];
    const year = parseInt(fullDateMatch[3], 10);
    if (month !== undefined) return new Date(year, month, day);
  }

  const monthYearMatch = normalized.match(/(\w+)\s+(\d{4})/i);
  if (monthYearMatch) {
    const month = MONTHS[monthYearMatch[1].toLowerCase()];
    const year = parseInt(monthYearMatch[2], 10);
    if (month !== undefined) return new Date(year, month, 1);
  }

  const year = extractYear(normalized);
  if (year !== null) return new Date(year, 0, 1);

  return new Date(0);
}
