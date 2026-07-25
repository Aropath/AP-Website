"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft saffron glow that follows the cursor across the hero section.
 * Disabled on touch devices and for users who prefer reduced motion.
 */
export function CursorGlow({ boundsId }: { boundsId: string }) {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 120, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 120, mass: 0.5 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!isTouch && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const bounds = document.getElementById(boundsId);
    if (!bounds) return;

    const handleMove = (e: MouseEvent) => {
      const rect = bounds.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };

    bounds.addEventListener("mousemove", handleMove);
    return () => bounds.removeEventListener("mousemove", handleMove);
  }, [enabled, boundsId, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron/40 blur-[90px]"
      style={{ left: springX, top: springY }}
    />
  );
}
