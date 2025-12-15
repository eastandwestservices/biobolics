import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://biobolics-astro.vercel.app', // your Vercel domain
  output: 'static',                             // must be 'static'
  integrations: [tailwind(), sitemap()],
});
