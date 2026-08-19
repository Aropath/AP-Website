"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GradientBlob } from "@/components/ui/GradientBlob";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to unlock your next growth path?",
  description = "Get set up in minutes, and let AroPath show you exactly what to build, fix, or ship next — all pointed toward real growth.",
}: CTASectionProps) {
  return (
    <section
  id="contact"
  className="relative min-h-[calc(100vh-88px)] flex items-center overflow-hidden py-20"
>
      <GradientBlob className="left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 opacity-70" />

      <Container size="narrow" className="relative text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="font-display text-display-lg font-medium text-balance text-ink">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-ink-muted">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Button variant="navy" size="lg" withArrow>
                Get Started Free
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Link href="/contact">
                <Button
                  variant="glass"
                  size="lg"
                  className="border border-black hover:-translate-y-1"
                >
                  <span>Talk to Sales</span>
                </Button>
              </Link>
            </MagneticButton>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            <div className="flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-100/75 px-4 py-1.5 text-sky-950 shadow-soft backdrop-blur-sm transition-all hover:bg-sky-200/70">
              <svg
                className="h-3.5 w-3.5 fill-none stroke-current text-sky-700"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <line x1="3" y1="3" x2="21" y2="21" strokeWidth="2.2" />
              </svg>
              <span>No credit card required</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-100/75 px-4 py-1.5 text-sky-950 shadow-soft backdrop-blur-sm transition-all hover:bg-sky-200/70">
              <svg
                className="h-3.5 w-3.5 fill-none stroke-current text-sky-700"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>SOC 2 Type II</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-100/75 px-4 py-1.5 text-sky-950 shadow-soft backdrop-blur-sm transition-all hover:bg-sky-200/70">
              <svg
                className="h-3.5 w-3.5 fill-none stroke-current text-sky-700"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}