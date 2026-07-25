"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface StatisticCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatisticCounter({
  value,
  suffix = "",
  prefix = "",
  label,
}: StatisticCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2.0,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${
            isDecimal ? latest.toFixed(2) : Math.round(latest).toLocaleString("en-US")
          }${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, value, prefix, suffix, isDecimal]);

  return (
    <div className="text-center">
      <p
        ref={ref}
        className="font-display text-display-lg font-medium text-ink"
      >
        {prefix}0{suffix}
      </p>
      <p className="mt-2 text-sm text-ink-muted">{label}</p>
    </div>
  );
}
