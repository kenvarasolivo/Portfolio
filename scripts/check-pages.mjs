import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { translations } from '../src/i18n.js';

const files = ['index.html', 'projects.html', 'show-up.html', 'questime.html', 'chattrolley.html'];
const issues = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const [, key] of html.matchAll(/data-i18n="([^"]+)"/g)) {
    if (!translations[key]?.en || !translations[key]?.de) issues.push(`${file}: missing translation ${key}`);
  }
  for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#|\/)/.test(href)) continue;
    const relative = href.split('#')[0];
    const local = path.resolve(relative.startsWith('images/') ? 'public' : path.dirname(file), relative);
    try { await access(local); } catch { issues.push(`${file}: missing local link ${href}`); }
  }
}
if (issues.length) {
  process.stderr.write(issues.join('\n') + '\n');
  process.exitCode = 1;
} else {
  process.stdout.write(`${files.length} pages: translation keys and local links OK\n`);
}
