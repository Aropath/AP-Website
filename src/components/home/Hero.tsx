"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { splitTextReveal } from "@/animations/gsapUtils";
import { fadeUp } from "@/animations/variants";

const FLOATING_CARDS = [
  { icon: Sparkles, label: "Draft response", detail: "Auto-generated, awaiting review", style: "left-[4%] top-[18%]" },
  { icon: GitBranch, label: "Workflow live", detail: "Invoice intake · v3", style: "right-[2%] top-[8%]" },
  { icon: ShieldCheck, label: "Approved", detail: "by Priya R. · 2m ago", style: "right-[6%] bottom-[12%]" },
];

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const tween = splitTextReveal(headingRef.current, { delay: 0.15 });
      return () => {
        tween.kill();
      };
    }
  }, []);

  return (
    <section
      id="hero-bounds"
      className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      <div className="absolute inset-0 bg-path-grid bg-[size:22px_22px] opacity-[0.35]" aria-hidden="true" />
      <GradientBlob className="left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 opacity-80" />
      <CursorGlow boundsId="hero-bounds" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-soft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-hover" />
            Now generally available for enterprise teams
          </motion.span>

          <h1
            ref={headingRef}
            className="max-w-4xl font-display text-display-2xl font-medium text-ink text-balance"
          >
            Stop reading dashboards. Start following a path to revenue.
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            AroPath turns raw visitor data into a prioritized, AI-written growth plan — so every week you know exactly what to fix next and why it matters to revenue.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              <Button variant="accent" size="lg" withArrow>
                Get Started Free
              </Button>
            </MagneticButton>
            <Button variant="outline" size="lg">
              <span>Watch a 2-min demo</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-ink-muted/85 font-medium"
          >
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
          </motion.div>
        </div>

        {/* Stylized Dashboard Mockup Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 hidden max-w-4xl overflow-hidden rounded-xl3 border border-line bg-card/80 p-5 shadow-card backdrop-blur-md sm:block"
        >
          {/* Mock Window Controls & URL bar */}
          <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-saffron-logo/30" />
              <span className="h-3 w-3 rounded-full bg-line" />
              <span className="h-3 w-3 rounded-full bg-teal-logo/30" />
            </div>
            <div className="rounded-md border border-line bg-bg/50 px-6 py-1 text-center font-mono text-[10px] text-ink-muted w-72">
              aropath.com/dashboard
            </div>
            <div className="w-10" />
          </div>

          {/* Mock Dashboard Grid */}
          <div className="grid grid-cols-3 gap-6 text-left">
            {/* Left Column: Metrics Overview */}
            <div className="col-span-1 border-r border-line pr-6 flex flex-col gap-5">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ink-muted">Uptime Status</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-2 w-2 rounded-full bg-teal-logo animate-pulse-soft" />
                  <span className="text-sm font-medium text-ink">99.98% Operational</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ink-muted">Active Sites</span>
                <p className="text-2xl font-display font-medium text-ink mt-0.5">2,400+</p>
              </div>
              <div className="rounded-xl2 bg-bg-secondary/70 p-4 border border-line">
                <span className="text-[10px] uppercase tracking-wider text-ink-muted">Weekly Traffic</span>
                <div className="flex items-end gap-1.5 h-16 mt-2">
                  {[20, 35, 15, 45, 60, 30, 75, 40, 50, 85, 45].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-saffron-logo/65 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: AI Action Checklist */}
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="font-display text-sm font-medium text-ink font-semibold">AroPath Growth Checklist</h3>
                <span className="rounded-full bg-saffron-logo/25 px-2 py-0.5 text-[10px] font-medium text-saffron-logo">
                  3 recommendations
                </span>
              </div>

              <div className="flex flex-col gap-3 mt-1">
                {[
                  {
                    title: "Optimize checkout page image weights",
                    lift: "+12.4% Est. conversion lift",
                    done: true,
                  },
                  {
                    title: "Fix render-blocking scripts on homepage",
                    lift: "+8.2% Est. conversion lift",
                    done: false,
                  },
                  {
                    title: "Resolve pricing table mobile layout drop-off",
                    lift: "+4.5% Est. conversion lift",
                    done: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3.5 rounded-xl2 border ${
                      item.done
                        ? "border-line bg-bg/30 opacity-70"
                        : "border-saffron-logo/30 bg-saffron/10 shadow-soft"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs font-semibold ${
                          item.done
                            ? "bg-teal-logo/15 border-teal-logo text-teal-logo"
                            : "border-saffron-logo text-saffron-logo"
                        }`}
                      >
                        {item.done ? "✓" : ""}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-ink leading-tight">{item.title}</p>
                        <p className="text-[10px] text-ink-muted mt-0.5">{item.lift}</p>
                      </div>
                    </div>
                    {!item.done && (
                      <span className="text-[10px] font-semibold text-saffron-logo underline cursor-pointer">
                        Get Fix
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2 text-ink-muted sm:mt-8"
        >
          <span className="text-xs uppercase tracking-[0.14em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-pulse-soft" />
        </motion.div>
      </Container>
    </section>
  );
}
