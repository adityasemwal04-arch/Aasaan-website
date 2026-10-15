/**
 * Asset URL helper ensuring correct relative paths on GitHub Pages, Render, and Localhost
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${clean}`;
};

/**
 * Fallback to original Aasaan live CDN if any local image ever fails to load
 */
export const handleImageError = (e, fallbackPath) => {
  if (e?.currentTarget && fallbackPath) {
    if (e.currentTarget.src !== fallbackPath) {
      e.currentTarget.src = fallbackPath;
    }
  }
};
