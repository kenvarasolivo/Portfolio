import { defineConfig } from 'vite';
import { readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The .png screenshots in public/images are the editable source: you replace
// one and `npm run build` re-encodes it to .webp (see scripts/optimize-images).
// But public/ is copied verbatim, so the originals would ship alongside the
// WebP. Drop them from the output, including project subfolders.
const stripSourcePngs = () => ({
  name: 'strip-source-pngs',
  apply: 'build',
  async closeBundle() {
    const dir = path.resolve('dist/images');
    async function stripSources(folder) {
      const entries = await readdir(folder, { withFileTypes: true });
      let count = 0;
      for (const entry of entries) {
        const file = path.join(folder, entry.name);
        if (entry.isDirectory()) {
          count += await stripSources(file);
        } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
          await unlink(file);
          count += 1;
        }
      }
      return count;
    }
    const count = await stripSources(dir);
    if (count) console.log(`  stripped ${count} source images from dist/images`);
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
        showUp: path.resolve(__dirname, 'show-up.html'),
        questime: path.resolve(__dirname, 'questime.html'),
        chattrolley: path.resolve(__dirname, 'chattrolley.html'),
      },
    },
  },
});
