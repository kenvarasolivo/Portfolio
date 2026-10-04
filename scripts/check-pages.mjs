import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { translations } from '../src/i18n.js';

const files = ['index.html', 'projects.html', 'about.html', 'show-up.html', 'questime.html', 'chattrolley.html'];
const issues = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const [, key] of html.matchAll(/data-i18n="([^"]+)"/g)) {
    if (!translations[key]?.en || !translations[key]?.de) issues.push(`${file}: missing translation ${key}`);
  }
  for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|\/)/.test(href)) continue;
    const relative = href.split('#')[0];
    const local = relative ? path.resolve(relative.startsWith('images/') ? 'public' : path.dirname(file), relative) : path.resolve(file);
    try {
      await access(local);
      const fragment = href.split('#')[1];
      if (fragment && local.endsWith('.html')) {
        const target = relative ? await readFile(local, 'utf8') : html;
        const ids = [...target.matchAll(/id="([^"]+)"/g)].map(match => match[1]);
        if (!ids.includes(fragment)) issues.push(`${file}: missing anchor ${href}`);
      }
    } catch { issues.push(`${file}: missing local link ${href}`); }
  }
}
if (issues.length) {
  process.stderr.write(issues.join('\n') + '\n');
  process.exitCode = 1;
} else {
  process.stdout.write(`${files.length} pages: translation keys and local links OK\n`);
}
