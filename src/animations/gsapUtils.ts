import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Splits a heading into individual word spans and reveals them with a
 * staggered rise + blur-out, used for the hero's GSAP text reveal.
 */
export function splitTextReveal(
  el: HTMLElement,
  options: { delay?: number } = {}
) {
  const words = el.textContent?.split(" ") ?? [];
  el.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block will-change-transform">${word}&nbsp;</span></span>`
    )
    .join(" ");

  const inner = el.querySelectorAll<HTMLElement>("span > span");

  return gsap.fromTo(
    inner,
    { yPercent: 110, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.045,
      delay: options.delay ?? 0,
    }
  );
}

/** Generic scroll-triggered section reveal, respects reduced motion. */
export function sectionReveal(
  el: HTMLElement,
  vars: gsap.TweenVars = {}
) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    gsap.set(el, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
      },
      ...vars,
    }
  );
}
