"use client";

import { useState } from "react";
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
  iconBgClassName?: string;
  iconClassName?: string;
  flipOnClick?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
  iconBgClassName,
  iconClassName,
  flipOnClick = false,
}: FeatureCardProps) {
  const [flipped, setFlipped] = useState(false);

  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      whileHover={!flipOnClick ? { y: -4 } : undefined}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      className={cn(
        "group",
        flipOnClick && "h-[320px]",
        className
      )}
    >
      {flipOnClick ? (
        <button
          type="button"
          onClick={() => setFlipped((prev) => !prev)}
          aria-label={`${flipped ? "Hide" : "View"} details for ${title}`}
          className="h-full w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5DB29D] focus-visible:ring-offset-4"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateY: flipped ? 180 : 0,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* =========================
                FRONT
            ========================= */}
            <div
              className={cn(
                "absolute inset-0 overflow-hidden rounded-xl2",
                "border bg-card shadow-soft",
                "transition-all duration-300",
                "group-hover:-translate-y-1 group-hover:shadow-md",
                "border-[#5DB29D]/60 group-hover:border-[#5DB29D]"
              )}
              style={{
                backfaceVisibility: "hidden",
              }}
            >

              {/* Decorative oversized icon */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 opacity-[0.045]"
                aria-hidden="true"
              >
                <Icon
                  className="h-40 w-40 text-[#5DB29D]"
                  strokeWidth={1.2}
                />
              </div>

              {/* ICON */}
              <div
                className={cn(
                  "absolute left-7 top-7 flex h-12 w-12 items-center justify-center rounded-xl",
                  "shadow-sm",
                  iconBgClassName || "bg-[#5DB29D]"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5",
                    iconClassName || "text-white"
                  )}
                  strokeWidth={1.75}
                />
              </div>

              {/* TITLE */}
              <div className="absolute inset-x-7 bottom-16">
                <h3 className="max-w-[90%] font-display text-xl font-medium leading-tight text-ink">
                  {title}
                </h3>
              </div>

              {/* CLICK INDICATOR */}
              <div className="absolute bottom-7 left-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                <span>Explore</span>

                <span
                  className="text-[#5DB29D] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </div>

            {/* =========================
                BACK
            ========================= */}
            <div
              className={cn(
                "absolute inset-0 overflow-hidden rounded-xl2",
                "border bg-card p-7 shadow-soft",
                "border-[#5DB29D]/60"
              )}
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >

              {/* Background decoration */}
              <div
                className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.045]"
                aria-hidden="true"
              >
                <Icon
                  className="h-36 w-36 text-[#5DB29D]"
                  strokeWidth={1.2}
                />
              </div>

              {/* ICON */}
              <div
                className={cn(
                  "relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm",
                  iconBgClassName || "bg-[#5DB29D]"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5",
                    iconClassName || "text-white"
                  )}
                  strokeWidth={1.75}
                />
              </div>

              {/* TITLE */}
              <h3 className="relative font-display text-lg font-medium text-ink">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                {description}
              </p>

              {/* BACK INDICATOR */}
              <div className="absolute bottom-6 right-7 text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                Click to flip back
              </div>
            </div>
          </motion.div>
        </button>
      ) : (
        /* =========================
           NORMAL CARD
        ========================= */
        <div
          className={cn(
            "rounded-xl2 border border-line bg-card p-7 shadow-soft",
            "transition-all duration-300",
            "hover:-translate-y-1 hover:border-saffron-hover hover:shadow-md",
            className
          )}
        >
          <div
            className={cn(
              "mb-5 flex h-11 w-11 items-center justify-center rounded-xl",
              iconBgClassName ||
                "bg-saffron/50 group-hover:bg-saffron"
            )}
          >
            <Icon
              className={cn(
                "h-5 w-5",
                iconClassName || "text-ink"
              )}
              strokeWidth={1.75}
            />
          </div>

          <h3 className="font-display text-lg font-medium text-ink">
            {title}
          </h3>

          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
            {description}
          </p>
        </div>
      )}
    </motion.div>
  );
}