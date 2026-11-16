/** Prefix a public or internal path with Astro `base` (e.g. GitHub project pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

export function absoluteSiteUrl(siteUrl: string | undefined, pathname: string): string | undefined {
  if (!siteUrl) return undefined;
  const origin = siteUrl.replace(/\/$/, '');
  if (pathname === '/' || pathname === '') return `${origin}/`;
  return `${origin}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}
