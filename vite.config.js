import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  // Static site at repo root. `public/` is copied verbatim into the build,
  // so /images/* paths resolve in both dev and production.
  base: './',
  server: {
    open: true,
    port: 5173,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2018',
  },
});
