"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PathTrailProps {
  className?: string;
}

/**
 * The signature motif for AROPATH: a single continuous route drawn once
 * per section, with a marker that travels along it as the user scrolls
 * through that section. A quiet, literal nod to "the path" rather than
 * a generic decorative line.
 */
export function PathTrail({ className }: PathTrailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const dashOffset = useTransform(progress, [0, 1], [1000, 0]);
  const markerProgress = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M10 0 C 60 80, -10 160, 40 240 S 90 400, 30 480 S -5 560, 50 600"
          stroke="#ECE7D3"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.path
          d="M10 0 C 60 80, -10 160, 40 240 S 90 400, 30 480 S -5 560, 50 600"
          stroke="#F5E5A4"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1000"
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
      <motion.div
        className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink shadow-glow"
        style={{
          offsetPath:
            "path('M10 0 C 60 80, -10 160, 40 240 S 90 400, 30 480 S -5 560, 50 600')",
          offsetDistance: useTransform(markerProgress, (v) => `${v * 100}%`),
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}
