import gsap from "gsap";

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function fadeIn(elements, options = {}) {
  const els = Array.isArray(elements) ? elements.filter(Boolean) : [elements].filter(Boolean);
  if (!els.length) return null;

  if (prefersReducedMotion()) {
    gsap.set(els, { opacity: 1, x: 0, y: 0 });
    return null;
  }

  const tl = gsap.timeline();
  els.forEach((el, i) => {
    tl.from(
      el,
      {
        opacity: 0,
        y: 12,
        duration: 0.3,
        ease: "power2.out",
        delay: i * 0.05,
        ...options,
      },
      i === 0 ? undefined : "<0.1"
    );
  });
  return tl;
}
