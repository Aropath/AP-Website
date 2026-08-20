"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    damping: 35,
    stiffness: 90,
    mass: 0.6,
  });

  const springY = useSpring(y, {
    damping: 35,
    stiffness: 90,
    mass: 0.6,
  });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || reducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-[320px]
        w-[320px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[radial-gradient(circle,rgba(245,233,186,0.22)_0%,rgba(245,233,186,0.12)_32%,rgba(245,233,186,0.05)_55%,rgba(245,233,186,0)_75%)]
        blur-[35px]
      "
      style={{
        left: springX,
        top: springY,
      }}
    />
  );
}