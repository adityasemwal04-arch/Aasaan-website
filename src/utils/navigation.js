// Detect base subpath if deployed under a GitHub Pages repo like /Aasaan-website
export function getBasePath() {
  const pathname = window.location.pathname || '/';
  const match = pathname.match(/^(\/[Aa]asaan-[Ww]ebsite)/i);
  return match ? match[1] : '';
}

// Map a pageId to a clean URL path
export function getRoutePath(pageId) {
  const base = getBasePath();
  if (!pageId || pageId === 'home') return base ? `${base}/` : '/';
  if (pageId.startsWith('blog/')) {
    const slug = pageId.replace('blog/', '');
    return `${base}/blog/${slug}`;
  }
  return `${base}/${pageId.replace(/^\//, '')}`;
}

// Parse current URL (pathname primary, hash fallback)
export function parseRoute() {
  const hash = window.location.hash || '';
  let pathname = window.location.pathname || '/';

  // Strip base repository path if present
  const base = getBasePath();
  if (base && pathname.toLowerCase().startsWith(base.toLowerCase())) {
    pathname = pathname.slice(base.length) || '/';
  }

  // If hash is present (e.g. #/awm or #/blog/xyz), support backward compatibility
  let activePath = pathname;
  let hadHash = false;
  if (hash.startsWith('#/')) {
    activePath = hash.slice(1); // remove '#'
    hadHash = true;
  }

  // Remove leading and trailing slashes for clean matching
  const cleaned = activePath.replace(/^\/+|\/+$/g, '').toLowerCase();

  if (cleaned.startsWith('blog/')) {
    const rawSlug = (hadHash ? hash.slice(7) : activePath.replace(/^\/?blog\//i, '')).split('?')[0].split('#')[0].trim();
    return {
      page: 'blog',
      slug: rawSlug || 'manufacturing-engineering',
      hadHash
    };
  }

  if (cleaned === 'login' || cleaned.endsWith('/login')) return { page: 'login', hadHash };
  if (cleaned === 'admin' || cleaned.endsWith('/admin')) return { page: 'admin', hadHash };
  if (cleaned === 'global' || cleaned.endsWith('/global')) return { page: 'global', hadHash };
  if (cleaned === 'lite' || cleaned.endsWith('/lite')) return { page: 'lite', hadHash };
  if (cleaned === 'awm' || cleaned.endsWith('/awm')) return { page: 'awm', hadHash };
  if (cleaned === 'partners' || cleaned === 'partner' || cleaned.endsWith('/partners')) return { page: 'partners', hadHash };

  return { page: 'home', hadHash };
}
