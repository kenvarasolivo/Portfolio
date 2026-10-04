(() => {
  const root = document.documentElement;
  root.classList.add('is-loading');
  root.setAttribute('aria-busy', 'true');

  let released = false;
  const reveal = () => {
    if (released) return;
    released = true;
    clearTimeout(fallback);
    root.classList.remove('is-loading');
    root.removeAttribute('aria-busy');
  };
  // A stalled request must never leave the site inaccessible indefinitely.
  const fallback = setTimeout(reveal, 12000);

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
      requestAnimationFrame(reveal);
    }
  }, { once: true });

  // Cached back/forward navigation must restore the finished page immediately.
  window.addEventListener('pageshow', event => {
    if (event.persisted) reveal();
  });
})();
