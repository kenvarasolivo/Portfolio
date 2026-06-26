import './style.css';

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
   4. Footer year
   ─────────────────────────────────────────────────────────────────────── */
const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();
