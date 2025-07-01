/**
 * Resolve asset paths considering the base URL in production
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, BASE_URL is usually '/'
  // In production with GitHub Pages, it's '/portifolioCultural/'
  const baseUrl = import.meta.env.BASE_URL || "/";

  return `${baseUrl}${cleanPath}`;
}

/**
 * Specifically for public assets
 */
export function getPublicAssetPath(path: string): string {
  return getAssetPath(path);
}
