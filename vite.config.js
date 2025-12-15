import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true,         // allows network access
    port: 4321,         // Astro dev port
    strictPort: false,  // allows fallback if port busy
    hmr: {
      host: '127.0.0.1', // fix HMR over ngrok
    },
    allowedHosts: ['.ngrok-free.dev', 'localhost'], // explicitly allow ngrok hosts
  },
});
