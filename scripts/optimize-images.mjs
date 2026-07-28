// Resizes + converts the PNG screenshots in public/images to WebP, in place.
//
// You never need to run this by hand: `npm run dev` and `npm run build` both
// trigger it via npm's pre- hooks. Drop a new screenshot into public/images as
// a .png with the same filename and the next build picks it up.
//
// The .png originals stay in public/images as the editable source of truth.
// They'd normally ship too — Vite copies public/ verbatim — so the Vite config
// strips *.png out of dist/images at the end of the build. Only WebP is served.
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const IMAGES_DIR = path.resolve('public/images');

// Max width per image, at ~2x its largest rendered size for retina.
// The two-up project grid renders cards up to ~800px wide; the exploration
// carousel cards are 360px; the portrait column caps at 384px.
const MAX_WIDTH = {
  'Kenvara_Solivo_Lwie.png': 900,
  'project_cinescope.png': 800,
  'project_laferrari.png': 800,
  'project_kanagawa.png': 800,
  'project_destination_intelligence.png': 800,
  _default: 1600,
};

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

// Read the directory rather than keep a hand-written list — the old hardcoded
// one had drifted out of sync with what was actually on disk.
const sources = (await readdir(IMAGES_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort();

let converted = 0;
let skipped = 0;
let totalBefore = 0;
let totalAfter = 0;

for (const file of sources) {
  const src = path.join(IMAGES_DIR, file);
  const outName = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const out = path.join(IMAGES_DIR, outName);

  const srcStat = await stat(src);

  // Only re-encode when the source is newer than its WebP, so this stays cheap
  // enough to run before every build.
  const outStat = await stat(out).catch(() => null);
  if (outStat && outStat.mtimeMs >= srcStat.mtimeMs) {
    skipped += 1;
    totalBefore += srcStat.size;
    totalAfter += outStat.size;
    continue;
  }

  const img = sharp(src);
  const meta = await img.metadata();
  const maxW = MAX_WIDTH[file] ?? MAX_WIDTH._default;

  await img
    .resize({ width: Math.min(meta.width, maxW), withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(out);

  const after = (await stat(out)).size;
  converted += 1;
  totalBefore += srcStat.size;
  totalAfter += after;
  console.log(
    `  ${file} (${meta.width}px, ${kb(srcStat.size)}) -> ${outName} ` +
      `(${Math.min(meta.width, maxW)}px, ${kb(after)})  ` +
      `${(100 - (after / srcStat.size) * 100).toFixed(0)}% smaller`,
  );
}

console.log(
  `images: ${converted} converted, ${skipped} unchanged — ` +
    `${kb(totalBefore)} of source serves as ${kb(totalAfter)}`,
);
