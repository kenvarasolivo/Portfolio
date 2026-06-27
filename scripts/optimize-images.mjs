// One-off image optimizer: resize + convert source images to WebP.
// Run with: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const IMAGES_DIR = path.resolve('public/images');

// Per-image max display width (we render ~2x for retina sharpness).
// Project cards display ~550px wide -> 1200px source. Portrait is small -> 900px.
const MAX_WIDTH = {
  'Kenvara_Solivo_Lwie.PNG': 900,
  _default: 1200,
};

// Only these are actually referenced on the page.
const TARGETS = [
  'project_fluen.png',
  'project_align.png',
  'project_chatbot.png',
  'project_cinescope.png',
  'project_laferrari.png',
  'project_kanagawa.jpg',
  'project_destination_intelligence.png',
  'Kenvara_Solivo_Lwie.PNG',
];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

for (const file of TARGETS) {
  const src = path.join(IMAGES_DIR, file);
  const outName = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const out = path.join(IMAGES_DIR, outName);

  const before = (await stat(src)).size;
  const img = sharp(src);
  const meta = await img.metadata();
  const maxW = MAX_WIDTH[file] ?? MAX_WIDTH._default;

  await img
    .resize({ width: Math.min(meta.width, maxW), withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(out);

  const after = (await stat(out)).size;
  console.log(
    `${file} (${meta.width}px, ${kb(before)}) -> ${outName} ` +
      `(${Math.min(meta.width, maxW)}px, ${kb(after)})  ` +
      `${(100 - (after / before) * 100).toFixed(0)}% smaller`,
  );
}
