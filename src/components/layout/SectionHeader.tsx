"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center rounded-full border border-line bg-card px-3.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-display-lg font-medium text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
