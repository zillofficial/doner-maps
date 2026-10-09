(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const topLink = document.querySelector('.back-top');
  let observer;
  const enter = element => {
    element.classList.remove('motion-pending');
    element.classList.add('motion-enter');
    observer?.unobserve(element);
  };
  function observeMotion(root = document) {
    if (reduced.matches || !observer) return;
    root.querySelectorAll('[data-motion]:not([data-motion-observed])').forEach(element => {
      element.dataset.motionObserved = 'true';
      element.style.setProperty('--motion-delay', `${Math.min(600, Math.max(0, Number(element.dataset.delay) || 0))}ms`);
      element.classList.add('motion-pending');
      observer.observe(element);
    });
  }
  if ('IntersectionObserver' in window && !reduced.matches) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) enter(entry.target); });
    }, { threshold: 0.12, rootMargin: '0px 0px -20px 0px' });
    document.documentElement.classList.add('motion-ready');
    window.observeMotion = observeMotion;
    observeMotion();
  }
  reduced.addEventListener('change', event => {
    if (event.matches) {
      observer?.disconnect();
      document.documentElement.classList.remove('motion-ready');
      document.querySelectorAll('.motion-pending').forEach(e => e.classList.remove('motion-pending'));
    }
  });
  let topRaf=0,topVisible=false;
  const updateTop = () => {const next=scrollY>480;if(next===topVisible)return;topVisible=next;cancelAnimationFrame(topRaf);topRaf=requestAnimationFrame(()=>topLink?.classList.toggle('visible',topVisible));};
  window.addEventListener('scroll', updateTop, { passive: true });
  updateTop();
})();
