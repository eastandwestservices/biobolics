import { defineConfig } from "astro/config";
import path from 'path';
import { fileURLToPath } from 'url';

import react from '@astrojs/react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
      }
    }
  },

  integrations: [react()]
});