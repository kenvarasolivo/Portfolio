(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  root.classList.add('is-loading');
  root.setAttribute('aria-busy', 'true');

  let released = false;
  const reveal = (immediate = false) => {
    if (released) return;
    released = true;
    clearTimeout(fallback);
    root.classList.remove('is-loading');
    root.removeAttribute('aria-busy');
    const curtain = document.querySelector('.page-loader');
    if (immediate || reducedMotion.matches || !curtain?.animate) return;

    root.classList.add('is-page-entering');
    const animation = curtain.animate(
      [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
      { duration: 720, easing: 'cubic-bezier(0.76, 0, 0.24, 1)', fill: 'both' },
    );
    const finish = () => {
      root.classList.remove('is-page-entering');
      animation.cancel();
    };
    animation.finished.then(finish, finish);
  };
  // A stalled request must never leave the site inaccessible indefinitely.
  const fallback = setTimeout(() => reveal(), 12000);

  async function imageReady(image) {
    // Visible archive thumbnails can otherwise remain lazy behind the cover.
    image.loading = 'eager';
    if (!image.complete) {
      await new Promise(resolve => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      });
    }
    if (image.naturalWidth && image.decode) {
      try { await image.decode(); } catch { /* Failed images do not trap visitors. */ }
    }
  }

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const images = [...document.querySelectorAll('main img')].filter(image => {
        if (image.fetchPriority === 'high') return true;
        const imageRect = image.getBoundingClientRect();
        // Unloaded thumbnails have no intrinsic height yet; their frame does.
        const rect = imageRect.height > 0
          ? imageRect
          : image.parentElement.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 &&
          rect.top < innerHeight && rect.bottom > 0;
      });
      // Font readiness is bounded; images still finish loading and decoding.
      const fonts = document.fonts
        ? Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 1200))])
        : Promise.resolve();
      await Promise.all([...images.map(imageReady), fonts]);
    } finally {
      requestAnimationFrame(() => reveal());
    }
  }, { once: true });

  // Keep real document navigation, including history, downloads, and new tabs.
  let navigating = false;
  document.addEventListener('click', async event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
        event.ctrlKey || event.shiftKey || event.altKey || reducedMotion.matches) return;
    const link = event.target.closest?.('a[href]');
    if (!link || link.hasAttribute('download') ||
        (link.target && link.target !== '_self')) return;
    const destination = new URL(link.href, location.href);
    if (destination.origin !== location.origin ||
        !destination.pathname.endsWith('.html') ||
        (destination.pathname === location.pathname && destination.search === location.search)) return;
    const curtain = document.querySelector('.page-loader');
    if (!curtain?.animate || root.classList.contains('is-loading') ||
        root.classList.contains('is-page-entering')) return;
    event.preventDefault();
    if (navigating) return;
    navigating = true;
    root.classList.add('is-page-leaving');
    root.setAttribute('aria-busy', 'true');
    const animation = curtain.animate(
      [{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }],
      { duration: 420, easing: 'cubic-bezier(0.76, 0, 0.24, 1)', fill: 'both' },
    );
    try { await animation.finished; } catch { /* Navigation still proceeds. */ }
    location.assign(destination.href);
  });

  // A cached document may contain the curtain from its outgoing animation.
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    navigating = false;
    reveal(true);
    document.querySelector('.page-loader')?.getAnimations().forEach(animation => animation.cancel());
    root.classList.remove('is-loading', 'is-page-entering', 'is-page-leaving');
    root.removeAttribute('aria-busy');
  });
})();
