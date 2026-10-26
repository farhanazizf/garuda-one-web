import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const site = process.env.PUBLIC_SITE_URL;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  ...(site ? { site } : {}),
  base,
  integrations: [react()],
});
