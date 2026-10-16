/**
 * Detect base path for GitHub Pages, Localhost, Render, custom domains, or file://
 */
export const getBaseUrl = () => {
  if (typeof window === 'undefined') return '/';
  
  if (window.location.protocol === 'file:') {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const pagePaths = ['services', 'about', 'awm', 'lite', 'global', 'partners', 'login', 'admin', 'blog'];
    let pageDepth = 0;
    for (let i = segments.length - 1; i >= 0; i--) {
      if (pagePaths.includes(segments[i])) {
        pageDepth = segments.length - i;
        break;
      }
    }
    return pageDepth > 0 ? '../'.repeat(pageDepth) : './';
  }

  const pathname = window.location.pathname || '';
  if (pathname.includes('/Aasaan-website')) {
    return '/Aasaan-website/';
  }
  if (window.location.hostname.endsWith('github.io')) {
    const firstSegment = pathname.split('/').filter(Boolean)[0];
    if (firstSegment) return `/${firstSegment}/`;
  }

  return '/';
};

/**
 * Asset URL helper ensuring correct paths on GitHub Pages, Render, and Localhost
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = getBaseUrl();
  return `${base}${clean}`;
};

/**
 * Get logo URL for connected tools
 */
export const getToolLogoUrl = (dir, logoNum) => {
  return getAssetUrl(`tools/${dir}/logo_${logoNum}.png`);
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

