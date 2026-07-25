"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
}

/**
 * Wraps any button/link and nudges it toward the cursor within a small
 * radius, then springs back on mouse leave — a "magnetic" premium detail.
 */
export function MagneticButton({ children, strength = 18 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({
      x: (relX / rect.width) * strength,
      y: (relY / rect.height) * strength,
    });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 14, mass: 0.4 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
