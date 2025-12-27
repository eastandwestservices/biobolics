import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',   // Important: build pure static site
  site: 'https://dprobo.com', // Your domain
});
