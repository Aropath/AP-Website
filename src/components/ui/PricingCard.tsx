"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp } from "@/animations/variants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  billingInterval: "monthly" | "annually";
}

export function PricingCard({ plan, index, billingInterval }: PricingCardProps) {
  // Compute price based on billing interval (15% discount for annual, i.e., $79 -> $67)
  const displayPrice = plan.price === "custom" 
    ? "custom"
    : plan.id === "professional" && billingInterval === "annually"
      ? 67
      : plan.price;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "relative flex flex-col rounded-xl3 border p-8 transition-transform duration-300",
        plan.highlighted
          ? "border-saffron-logo/80 bg-ink text-bg shadow-card lg:scale-[1.04] z-10 border-2"
          : "border-line bg-card text-ink shadow-soft"
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-saffron-logo px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
          Most popular
        </span>
      )}

      <h3 className="font-display text-xl font-medium">{plan.name}</h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          plan.highlighted ? "text-bg/70" : "text-ink-muted"
        )}
      >
        {plan.tagline}
      </p>

      {/* Why teams pick this note */}
      {plan.highlighted && (
        <p className="mt-2 text-[11px] font-medium text-saffron/90 italic leading-snug">
          Why teams pick this: Best for small-to-medium teams focused on active conversion optimization.
        </p>
      )}

      <div className="mt-6 flex items-baseline gap-1">
        {displayPrice === "custom" ? (
          <span className="font-display text-3xl font-medium">Custom</span>
        ) : (
          <>
            <span className="font-display text-4xl font-medium">
              ${displayPrice}
            </span>
            <span
              className={cn(
                "text-sm",
                plan.highlighted ? "text-bg/60" : "text-ink-muted"
              )}
            >
              /month
            </span>
          </>
        )}
      </div>

      {plan.id === "professional" && billingInterval === "annually" && (
        <span className={cn("text-[10px] font-medium mt-1.5", plan.highlighted ? "text-saffron" : "text-ink-muted")}>
          Billed annually ($804/year) — save $144
        </span>
      )}

      <Button
        variant={plan.highlighted ? "accent" : "outline"}
        className={cn(
          "mt-7 w-full",
          !plan.highlighted && "border-line"
        )}
        withArrow
      >
        {plan.cta}
      </Button>

      <ul className="mt-8 flex flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                plan.highlighted ? "text-saffron-logo" : "text-ink"
              )}
            />
            <span className={plan.highlighted ? "text-bg/85" : "text-ink-muted"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
