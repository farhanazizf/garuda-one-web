import { withBase } from '../utils/paths';
import type { Locale, PageSlug } from './locales';
import { DEFAULT_LOCALE } from './locales';

const SLUG_TO_SEGMENT: Record<PageSlug, string> = {
  home: '',
  about: 'tentang/',
  partnership: 'kolaborasi/',
};

/** Public path for a page in the given locale (respects Astro base). */
export function localePagePath(locale: Locale, page: PageSlug): string {
  const segment = SLUG_TO_SEGMENT[page];
  if (locale === DEFAULT_LOCALE) return withBase(segment);
  return withBase(`en/${segment}`);
}

/** Canonical pathname (no origin), e.g. `/en/tentang/` for GitHub Pages site URL join. */
export function localeCanonicalPath(locale: Locale, page: PageSlug): string {
  const segment = SLUG_TO_SEGMENT[page];
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
  const prefix = locale === DEFAULT_LOCALE ? '' : '/en';
  const tail = segment ? `/${segment.replace(/\/$/, '')}/` : '/';
  if (!base) return `${prefix}${tail}`.replace('//', '/') || '/';
  return `${base}${prefix}${tail}`.replace(/\/\//g, '/');
}

export function pageSlugFromUrl(pathname: string): PageSlug {
  const base = import.meta.env.BASE_URL.replace(/^\//, '').replace(/\/$/, '');
  let p = pathname;
  if (base && p.startsWith(`/${base}`)) p = p.slice(base.length + 1) || '/';
  p = p.replace(/^\//, '').replace(/\/$/, '');
  if (p === '' || p === 'en') return 'home';
  if (p === 'tentang' || p === 'en/tentang') return 'about';
  if (p === 'kolaborasi' || p === 'en/kolaborasi') return 'partnership';
  return 'home';
}

export function localeFromUrl(pathname: string): Locale {
  const base = import.meta.env.BASE_URL.replace(/^\//, '').replace(/\/$/, '');
  let p = pathname;
  if (base && p.startsWith(`/${base}`)) p = p.slice(base.length + 1) || '/';
  p = p.replace(/^\//, '');
  return p.startsWith('en/') || p === 'en' ? 'en' : 'id';
}
