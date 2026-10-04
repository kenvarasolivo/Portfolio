// Resizes + converts the PNG screenshots in public/images to WebP, in place.
//
// You never need to run this by hand: `npm run dev` and `npm run build` both
// trigger it via npm's pre- hooks. Drop a new screenshot into public/images as
// a .png with the same filename and the next build picks it up.
//
// The .png originals stay in public/images as the editable source of truth.
// They'd normally ship too - Vite copies public/ verbatim - so the Vite config
// strips *.png out of dist/images at the end of the build. Only WebP is served.
//
// Every image is re-encoded on every run, deliberately. This used to skip any
// image whose .webp was newer than its .png, which broke on CI: actions/checkout
// stamps every file with the checkout time, so a freshly swapped screenshot
// looked no newer than the stale .webp committed beside it and the old image
// shipped. Re-encoding takes a few seconds - far cheaper than shipping the wrong
// picture. Don't reintroduce an mtime check.
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const IMAGES_DIR = path.resolve('public/images');

// Max width per image, at ~2x its largest rendered size for retina.
// The two-up project grid renders cards up to ~800px wide; the exploration
// carousel cards are 360px; the portrait column caps at 384px.
const MAX_WIDTH = {
  'formalken.png': 900,
  'project/cinescope.png': 800,
  'project/laferrari.png': 800,
  'project/kanagawa.png': 800,
  'project/elsewhere.png': 800,
  _default: 1600,
};

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

// Read the directory rather than keep a hand-written list - the old hardcoded
// one had drifted out of sync with what was actually on disk.
async function findSources(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  const sources = [];
  for (const entry of entries) {
    const relative = prefix + entry.name;
    if (entry.isDirectory()) {
      sources.push(...await findSources(path.join(dir, entry.name), `${relative}/`));
    } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
      sources.push(relative);
    }
  }
  return sources;
}

const sources = (await findSources(IMAGES_DIR)).sort();

let converted = 0;
let totalBefore = 0;
let totalAfter = 0;

for (const file of sources) {
  const src = path.join(IMAGES_DIR, file);
  const outName = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const out = path.join(IMAGES_DIR, outName);

  const srcStat = await stat(src);

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
  `images: ${converted} converted - ` +
    `${kb(totalBefore)} of source serves as ${kb(totalAfter)}`,
);
