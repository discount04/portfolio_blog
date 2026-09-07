import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://discount04.github.io',
  integrations: [sitemap()],
});
