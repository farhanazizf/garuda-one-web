import type { APIRoute } from 'astro';

const pagePairs = [
  { id: '/', en: '/en/' },
  { id: '/tentang/', en: '/en/tentang/' },
  { id: '/kolaborasi/', en: '/en/kolaborasi/' },
] as const;

const escapeXml = (value: string) =>
  value.replace(/[<>&"']/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&apos;',
    };
    return entities[character] ?? character;
  });

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL(import.meta.env.PUBLIC_SITE_URL || 'https://garudaone.web.id');
  const entries = pagePairs.flatMap(({ id, en }) => {
    const idUrl = escapeXml(new URL(id, siteUrl).href);
    const enUrl = escapeXml(new URL(en, siteUrl).href);
    const alternates = [
      `<xhtml:link rel="alternate" hreflang="id" href="${idUrl}" />`,
      `<xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`,
      `<xhtml:link rel="alternate" hreflang="x-default" href="${idUrl}" />`,
    ].join('\n    ');

    return [idUrl, enUrl].map(
      (url) => `  <url>\n    <loc>${url}</loc>\n    ${alternates}\n  </url>`,
    );
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
