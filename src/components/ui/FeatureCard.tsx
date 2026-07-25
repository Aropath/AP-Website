"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group rounded-xl2 border border-line bg-card p-7 shadow-soft transition-colors duration-300 hover:border-saffron-hover",
        className
      )}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/50 transition-colors duration-300 group-hover:bg-saffron">
        <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
        {description}
      </p>
    </motion.div>
  );
}
