"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { PricingCard } from "@/components/ui/PricingCard";
import { PRICING_PLANS } from "@/constants/pricing";

export function PricingCards() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annually">("monthly");

  return (
    <section className="py-24">
      <Container>
        {/* Billing Toggle */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative inline-flex items-center gap-1 rounded-full border border-line bg-bg-secondary/70 p-1 shadow-soft">
            <button
              onClick={() => setBillingInterval("monthly")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                billingInterval === "monthly"
                  ? "bg-ink text-bg shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingInterval("annually")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                billingInterval === "annually"
                  ? "bg-ink text-bg shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Annual billing <span className="text-teal-logo ml-1 font-bold">Save 15%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={i}
              billingInterval={billingInterval}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
