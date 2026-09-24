const LEGACY_LABELS: Record<string, string> = {
  education: "Educação",
  artistic: "Músico",
  production: "Produção Cultural",
  milestone: "Reconhecimento",
  cultural: "Produção Cultural",
};

export const SUGGESTED_ACTIVITIES = [
  "Mediação",
  "Músico",
  "Poeta",
  "Produção Cultural",
  "Gestão Cultural",
  "Produção Musical",
  "Produção Geral",
  "Produtor Geral",
  "Apresentação Musical",
  "Cine Clube",
  "Oficinas",
  "Educação",
  "Entrevista",
  "Reconhecimento",
  "Sonorização de Eventos",
];

export function activityLabel(theme: string | undefined): string {
  const value = theme?.trim();
  if (!value) return "Experiência";
  return LEGACY_LABELS[value] ?? value;
}

export function activityOptions(...extra: Array<string | undefined>): string[] {
  const options = new Set(SUGGESTED_ACTIVITIES);
  extra.forEach((value) => {
    const label = value?.trim();
    if (label) options.add(activityLabel(label));
  });
  return [...options].sort((a, b) => a.localeCompare(b, "pt"));
}
