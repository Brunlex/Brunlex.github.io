/**
 * Revela con una transición los elementos marcados con `data-reveal` al entrar en pantalla.
 * Los hijos de un `data-reveal-stagger` reciben un retraso escalonado.
 * Sin JS o con movimiento reducido, todo se ve desde el principio (ver motion.css).
 */
export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger] > *');

  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      (child as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(index, 8) * 70}ms`);
    });
  });

  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (records) => {
      for (const record of records) {
        if (!record.isIntersecting) continue;
        record.target.classList.add('is-visible');
        observer.unobserve(record.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  targets.forEach((target) => observer.observe(target));
}
