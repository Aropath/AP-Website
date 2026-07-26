"use client";

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
    <section id="contact" className="relative overflow-hidden py-28 border-t border-line">
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
              <Button variant="accent" size="lg" withArrow>
                Get Started Free
              </Button>
            </MagneticButton>
            <Button variant="outline" size="lg">
              Talk to Sales
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-ink-muted/85 font-medium">
            <div className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>SOC 2 Type II</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-line" />
            <div className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span>GDPR Compliant</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>No credit card required</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
