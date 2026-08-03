import { defineConfig } from 'vite';
import { readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The .png screenshots in public/images are the editable source: you replace
// one and `npm run build` re-encodes it to .webp (see scripts/optimize-images).
// But public/ is copied verbatim, so the originals would ship alongside the
// WebP — ~11 MB of dead weight nobody downloads. Drop them from the output.
const stripSourcePngs = () => ({
  name: 'strip-source-pngs',
  apply: 'build',
  async closeBundle() {
    const dir = path.resolve('dist/images');
    const files = await readdir(dir).catch(() => []);
    const pngs = files.filter((f) => /\.(png|jpe?g)$/i.test(f));
    await Promise.all(pngs.map((f) => unlink(path.join(dir, f))));
    if (pngs.length) console.log(`  stripped ${pngs.length} source images from dist/images`);
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [stripSourcePngs()],
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
    // Two entry points: the home page and the full project index. Without
    // listing projects.html here Vite only builds index.html and the second
    // page ships unprocessed (raw /src/main.js reference and all).
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        projects: path.resolve(__dirname, 'projects.html'),
      },
    },
  },
});
