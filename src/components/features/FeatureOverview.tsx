"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURE_OVERVIEW, AI_CAPABILITIES } from "@/constants/features";

type AIItem = typeof AI_CAPABILITIES[number];

export function FeatureOverview() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Overview"
          title="Precision and intention, carried through everything."
          description="AroPath works across software, insight, and product. Different disciplines, the same level of care."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_OVERVIEW.map((f, i) => (
            <FeatureCard
              key={f.title}
              {...f}
              index={i}
              flipOnClick
              className="border-[#5DB29D]/60 hover:border-[#5DB29D]"
              iconBgClassName="bg-[#5DB29D]"
              iconClassName="text-white"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function AICapabilityRow({ item, index, onClick }: { item: AIItem; index: number; onClick: () => void }) {
  const number = (index + 1).toString().padStart(2, "0");
  const Icon = item.icon;

  return (
    <motion.button
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      onClick={onClick}
      className="group relative flex w-full items-center justify-between rounded-xl2 border border-line bg-card px-6 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#A78BFA] hover:shadow-soft md:px-8 md:py-6"
    >
      <div className="flex items-center gap-5 md:gap-8">
        <span className="font-display text-4xl font-bold text-ink/5 transition-colors duration-300 group-hover:text-[#A78BFA]/10 md:text-5xl">
          {number}
        </span>
        
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#A78BFA] text-white transition-colors duration-300">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-lg font-medium text-ink md:text-xl">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="ml-4 shrink-0">
        <ArrowRight className="h-5 w-5 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#A78BFA]" />
      </div>
    </motion.button>
  );
}

function AIModal({ item, onClose }: { item: AIItem; onClose: () => void }) {
  const Icon = item.icon;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-md overflow-hidden rounded-xl2 border border-line bg-card p-8 shadow-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-ink-muted transition-colors hover:hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#A78BFA]">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
        </div>

        <h3 id="modal-title" className="mb-3 font-display text-2xl font-medium text-ink">
          {item.title}
        </h3>
        
        <p className="text-base leading-relaxed text-ink-muted">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export function AICapabilities() {
  const [selectedItem, setSelectedItem] = useState<AIItem | null>(null);

  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="AI Capabilities"
          title="Intelligent Products for Modern Teams"
          description="From AI-powered analytics to intelligent websites and business tools, every AroPath product is designed to simplify work and help people move faster with confidence."
        />

        <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-4">
          {AI_CAPABILITIES.map((f, i) => (
            <AICapabilityRow
              key={f.title}
              item={f}
              index={i}
              onClick={() => setSelectedItem(f)}
            />
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedItem && (
          <AIModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}