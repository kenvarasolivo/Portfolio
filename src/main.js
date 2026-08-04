import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './style.css';
import { translations } from './i18n.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ───────────────────────────────────────────────────────────────────────
   1. Smooth ("heavy") scrolling
   Lenis damps the raw wheel/key input toward a target position instead of
   jumping to it. The low lerp is what gives the page mass: input starts the
   movement, momentum finishes it.
   ─────────────────────────────────────────────────────────────────────── */
const lenis = reduceMotion
  ? null
  : new Lenis({
      lerp: 0.075, // lower = heavier glide (Lenis default is 0.1)
      wheelMultiplier: 0.85, // slight resistance, so one flick travels less
      touchMultiplier: 1.5,
      // Let the explorations carousel and the mobile menu scroll themselves.
      allowNestedScroll: true,
    });

if (lenis) {
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

/* ───────────────────────────────────────────────────────────────────────
   2. Scroll-linked chrome: nav state, progress rail, parallax
   All of it runs off one scroll callback so there's a single read of layout
   per frame rather than one per feature.
   ─────────────────────────────────────────────────────────────────────── */
const nav = document.querySelector('[data-nav]');
const navBar = nav?.querySelector('nav'); // the bar itself, not the mobile panel
const progressBar = document.querySelector('[data-scroll-progress]');
const heroContent = document.querySelector('[data-hero]');
// The projects section runs on black, where the solid-white scrolled nav reads
// as a mistake. Its bounds drive a third nav state.
const darkSection = document.querySelector('#work');
// How far into the section's transition wash the nav flips, as a fraction of
// the viewport. The wash bands are 24vh, so 0.12 is their midpoint.
const DARK_INSET = 0.09;

// Statement that paints itself dark as it crosses the screen. Left null under
// reduced motion so the CSS default (fully dark) stands.
const fillEl = reduceMotion ? null : document.querySelector('[data-scroll-fill]');
// Where in the viewport the fill starts and finishes, as fractions of its
// height measured from the top. It completes above centre on purpose — a line
// that only lands once it's leaving reads as lagging behind the scroll.
const FILL_START = 0.85;
const FILL_END = 0.35;

// Elements that drift against the scroll. data-parallax holds the strength:
// 0 = pinned to the page, 1 = pinned to the viewport.
const parallaxItems = reduceMotion
  ? []
  : [...document.querySelectorAll('[data-parallax]')].map((el) => ({
      el,
      speed: parseFloat(el.dataset.parallax) || 0.06,
      visible: false,
    }));

if (parallaxItems.length) {
  const parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const item = parallaxItems.find((i) => i.el === entry.target);
        if (item) item.visible = entry.isIntersecting;
      });
    },
    // Generous margin so an element is already tracking before it's on screen.
    { rootMargin: '25% 0px' }
  );
  parallaxItems.forEach((item) => parallaxObserver.observe(item.el));
}

// Layout reads are cached here and refreshed only when the page actually
// changes size, so the scroll handler itself never touches layout.
let scrollRange = 0;
let darkTop = 0;
let darkBottom = 0;
let navHeight = 64;
let fillTop = 0;
let fillHeight = 0;
const measure = () => {
  scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  if (navBar) navHeight = navBar.offsetHeight;

  if (darkSection) {
    const rect = darkSection.getBoundingClientRect();
    darkTop = rect.top + window.scrollY;
    darkBottom = darkTop + rect.height;
  }

  if (fillEl) {
    const rect = fillEl.getBoundingClientRect();
    fillTop = rect.top + window.scrollY;
    fillHeight = rect.height;
  }

  parallaxItems.forEach((item) => {
    // Clear the drift first: a transformed rect would fold the previous frame's
    // offset back into the measurement.
    item.el.style.transform = '';
    const rect = item.el.getBoundingClientRect();
    item.center = rect.top + window.scrollY + rect.height / 2;
  });
};

const onScroll = () => {
  const y = window.scrollY;

  nav?.classList.toggle('is-scrolled', y > 24);

  // Switch at the midpoint of the h-[24vh] transition bands rather than after
  // they've fully cleared: the bar is bg-black/70, so it darkens whatever sits
  // behind it, and white text stays above 8:1 contrast even over the pale end
  // of the wash. Waiting for solid black just made the change feel late.
  // Raise DARK_INSET toward 0.24 to switch later, lower it to switch earlier.
  if (nav && darkSection) {
    const fade = window.innerHeight * DARK_INSET;
    // The inset delays the switch to the middle of the wash band above the
    // section. On the all-projects page there is no band — the page opens
    // straight onto black — so entering has to take effect at 0, or the nav
    // flashes its white scrolled state over a black page for ~60px.
    const enter = darkTop < 1 ? 0 : fade;
    nav.classList.toggle(
      'is-dark',
      y >= darkTop + enter && y <= darkBottom - fade - navHeight
    );
  }

  if (progressBar) {
    const progress = scrollRange > 0 ? Math.min(y / scrollRange, 1) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  }

  // Hero drifts up slower than the page and dissolves — the page slides out
  // from under it rather than the hero simply leaving.
  if (heroContent && !reduceMotion) {
    const travel = Math.min(y / window.innerHeight, 1);
    heroContent.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
    heroContent.style.opacity = String(Math.max(1 - travel * 1.35, 0));
  }

  // The statement's own top, tracked from FILL_START down to where its bottom
  // reaches FILL_END — so the fill is driven by the whole block passing the
  // band, not by a single point on it.
  if (fillEl) {
    const vh = window.innerHeight;
    const top = fillTop - y;
    const from = vh * FILL_START;
    const to = vh * FILL_END - fillHeight;
    const p = from === to ? 1 : Math.min(Math.max((from - top) / (from - to), 0), 1);
    // -22% → 100%: see the .scroll-fill comment for why it starts off-screen.
    fillEl.style.setProperty('--fill', `${(p * 122 - 22).toFixed(1)}%`);
  }

  parallaxItems.forEach((item) => {
    if (!item.visible) return;
    // Distance from viewport centre → the drift passes through zero exactly as
    // the element crosses the middle of the screen.
    const offset = item.center - y - window.innerHeight / 2;
    item.el.style.transform = `translate3d(0, ${(-offset * item.speed).toFixed(2)}px, 0)`;
  });
};

measure();
onScroll();

// Lazy images and the webfont both change page height after first paint, which
// would leave the progress rail reading against a stale range. Watch the body,
// not just the window.
const remeasure = () => {
  measure();
  onScroll();
};
window.addEventListener('resize', remeasure);
if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(document.body);

if (lenis) lenis.on('scroll', onScroll);
else window.addEventListener('scroll', onScroll, { passive: true });

/* ───────────────────────────────────────────────────────────────────────
   3. Mobile hamburger menu
   ─────────────────────────────────────────────────────────────────────── */
const menuBtn = document.querySelector('[data-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

const setMenu = (open) => {
  if (!mobileMenu || !menuBtn) return;
  mobileMenu.classList.toggle('hidden', !open);
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('overflow-hidden', open);
  // `overflow-hidden` alone won't stop Lenis — it drives scroll itself.
  if (open) lenis?.stop();
  else lenis?.start();
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
   4. In-page links: a long, weighted glide instead of a jump
   Delegated so it also covers the skip link and the footer nav. Lenis reads
   the page's scroll-padding-top, so sections still clear the sticky nav.
   ─────────────────────────────────────────────────────────────────────── */
if (lenis) {
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href^="#"]');
    const hash = link?.getAttribute('href');
    if (!hash || hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    lenis.scrollTo(target, {
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 4), // quart-out: arrives, then settles
      // Native anchor navigation moves focus; preventDefault would otherwise
      // strand keyboard users (including on the skip link) at the top of the
      // document with the page scrolled elsewhere.
      onComplete: () => {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      },
    });
    history.replaceState(null, '', hash);
  });
}

/* ───────────────────────────────────────────────────────────────────────
   5. Scroll-reveal via IntersectionObserver
   Anything crossing 82% of the viewport height reveals. Elements that cross
   together are treated as one batch and staggered in reading order, so grids
   and card rows cascade instead of appearing all at once — that cascade is
   most of what separates a considered reveal from a plain fade-in.
   ─────────────────────────────────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const STAGGER_MS = 100;
const MAX_STAGGER_STEPS = 4; // cap the tail so late items don't lag visibly

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top ||
            a.boundingClientRect.left - b.boundingClientRect.left
        )
        .forEach((entry, index) => {
          const el = entry.target;

          // An inline --rv-delay means the markup choreographs this element
          // (the hero sequence); leave those alone.
          if (!el.style.getPropertyValue('--rv-delay')) {
            const step = Math.min(index, MAX_STAGGER_STEPS);
            el.style.setProperty('--rv-delay', `${step * STAGGER_MS}ms`);
          }

          el.classList.add('is-visible');
          // Release the compositor layer once this element has landed. Guard on
          // e.target: transitionend bubbles, and these cards contain children
          // with their own transform transitions.
          const settle = (e) => {
            if (e.target !== el || e.propertyName !== 'transform') return;
            el.classList.add('is-settled');
            el.removeEventListener('transitionend', settle);
          };
          el.addEventListener('transitionend', settle);
          observer.unobserve(el);
        });
    },
    { threshold: 0, rootMargin: '0px 0px -18% 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: no IO support → just show everything
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ───────────────────────────────────────────────────────────────────────
   6. Language switch (EN / DE) with localStorage persistence
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
