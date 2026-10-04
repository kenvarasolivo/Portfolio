import './case-study.css';
import './editorial.css';
import { translations } from './i18n.js';

const supported = ['en', 'de'];
let saved;
try { saved = localStorage.getItem('lang'); } catch { /* Storage can be unavailable. */ }
const initial = supported.includes(saved) ? saved : 'en';

function applyLanguage(lang) {
  if (!supported.includes(lang)) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translations[element.dataset.i18n]?.[lang];
    if (value != null) element.innerHTML = value;
  });
  document.querySelectorAll('[data-lang-switch] button').forEach((button) => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  try { localStorage.setItem('lang', lang); } catch { /* Storage can be unavailable. */ }
}

document.querySelectorAll('[data-lang-switch] button').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});
applyLanguage(initial);
