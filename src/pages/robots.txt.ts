import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL(import.meta.env.PUBLIC_SITE_URL || 'https://garudaone.web.id');
  const sitemapUrl = new URL('sitemap.xml', siteUrl);
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
