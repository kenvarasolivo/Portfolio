import './style.css';
import { translations } from './i18n.js';

/* ───────────────────────────────────────────────────────────────────────
   1. Sticky nav: transparent over hero, solid once scrolled
   ─────────────────────────────────────────────────────────────────────── */
const nav = document.querySelector('[data-nav]');
const onScroll = () => {
  if (!nav) return;
  nav.classList.toggle('is-scrolled', window.scrollY > 24);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ───────────────────────────────────────────────────────────────────────
   2. Mobile hamburger menu
   ─────────────────────────────────────────────────────────────────────── */
const menuBtn = document.querySelector('[data-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

const setMenu = (open) => {
  if (!mobileMenu || !menuBtn) return;
  mobileMenu.classList.toggle('hidden', !open);
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('overflow-hidden', open);
};

menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  setMenu(!open);
});

// Close the menu after tapping a link
mobileMenu?.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => setMenu(false))
);

/* ───────────────────────────────────────────────────────────────────────
   3. Scroll-reveal via IntersectionObserver
   ─────────────────────────────────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: no IO support → just show everything
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ───────────────────────────────────────────────────────────────────────
   4. Language switch (EN / DE) with localStorage persistence
   ─────────────────────────────────────────────────────────────────────── */
const SUPPORTED = ['en', 'de'];
const STORAGE_KEY = 'lang';

// Stamp the current year into the footer copyright (re-run after each
// translation, since applying footer.rights replaces the [data-year] span).
const setYear = () => {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

const applyLanguage = (lang) => {
  if (!SUPPORTED.includes(lang)) lang = 'en';

  // Swap every translatable element's content.
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = translations[el.dataset.i18n];
    if (entry && entry[lang] != null) el.innerHTML = entry[lang];
  });

  setYear();

  // Reflect the choice on <html lang> and the toggle buttons.
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang-switch] .lang-opt').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* localStorage may be unavailable (private mode) — ignore */
  }
};

// Initial language: saved preference → browser language → English.
const getInitialLang = () => {
  let saved;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  if (SUPPORTED.includes(saved)) return saved;
  return navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en';
};

document.querySelectorAll('[data-lang-switch] .lang-opt').forEach((btn) =>
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang))
);

applyLanguage(getInitialLang());
