import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://axiomintel.online',
  integrations: [mdx(), tailwind({ applyBaseStyles: false }), sitemap()],
  trailingSlash: 'ignore'
});
