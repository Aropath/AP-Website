"use client";

import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

/**
 * Tracks scroll direction and current scroll position so the navbar
 * can hide on scroll-down and reappear on scroll-up.
 */
export function useScrollDirection() {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) > 4) {
        setDirection(delta > 0 ? "down" : "up");
        lastY = currentY;
      }
      setScrolled(currentY > 24);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, scrolled };
}
