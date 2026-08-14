"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft saffron glow that follows the cursor across the hero section.
 * Disabled on touch devices and for users who prefer reduced motion.
 */
export function CursorGlow({ boundsId }: { boundsId: string }) {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Only enable glow when mouse is strictly within hero bounds
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        x.set(mouseX);
        y.set(mouseY);
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleLeave = () => {
      setIsHovering(false);
    };

    bounds.addEventListener("mousemove", handleMove);
    bounds.addEventListener("mouseleave", handleLeave);
    window.addEventListener("scroll", handleLeave, { passive: true });

    return () => {
      bounds.removeEventListener("mousemove", handleMove);
      bounds.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("scroll", handleLeave);
    };
  }, [enabled, boundsId, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovering ? 0.85 : 0 }}
      transition={{ duration: 0.3 }}
      className="
pointer-events-none
absolute
h-[300px]
w-[300px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-gradient-to-r
from-[lightgoldenrodyellow]/80
via-[#f7e7a3]/70
to-[lightgoldenrodyellow]/80
blur-[95px]
"
      style={{ left: springX, top: springY }}
    />
  );
}
