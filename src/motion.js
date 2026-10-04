// Content stays visible without JavaScript or animation support.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const animations = new Set();

// Browsers may skip a native transition during rapid navigation or restoration.
for (const eventName of ['pageswap', 'pagereveal']) {
  window.addEventListener(eventName, (event) => {
    event.viewTransition?.ready.catch(() => {});
  });
}

if ('IntersectionObserver' in window && 'animate' in Element.prototype) {
  const observer = new IntersectionObserver((entries) => {
    let stagger = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) continue;
      const animation = entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: 480,
          delay: Math.min(stagger++ * 55, 165),
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'backwards',
        },
      );
      animations.add(animation);
      animation.finished.then(
        () => animations.delete(animation),
        () => animations.delete(animation),
      );
    }
  }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll([
    '.section-heading', '.work-item', '.personal-layout', '.story-layout',
    '.journey-heading', '.journey-place', '.values-grid > div',
    '.approach-list article', '.contact-title', '.case-story-grid',
    '.case-decision-grid article', '.case-close-grid',
  ].join(',')).forEach((element) => observer.observe(element));

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }
  });
  // Back/forward restoration should show the saved page immediately.
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) animations.forEach((animation) => animation.cancel());
  });
}
