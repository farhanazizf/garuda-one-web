import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const site = process.env.PUBLIC_SITE_URL;

export default defineConfig({
  ...(site ? { site } : {}),
  integrations: [react()],
});
