"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { direction, scrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        animate={{ y: direction === "down" && scrolled && !mobileOpen ? -96 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
            scrolled
              ? "border border-line/80 bg-bg/70 shadow-soft backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink" aria-label="AroPath home">
            <svg className="h-6 w-6" viewBox="0 0 26 26" fill="none">
              <path
                d="M2 20 C 7 20, 7 8, 12 8 C 17 8, 15 16, 20 16 C 22.5 16, 23 13, 24 11"
                className="stroke-saffron-logo"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="24" cy="11" r="2" className="fill-teal-logo" />
            </svg>
            <span>AroPath</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-saffron/60 text-ink"
                    : "text-ink-muted hover:bg-saffron/30 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button variant="accent" size="sm" withArrow>
              Get Started
            </Button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 rounded-xl2 border border-line bg-card p-5 shadow-card md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-saffron/30"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4">
              <Button variant="outline" size="sm">Contact</Button>
              <Button variant="accent" size="sm" withArrow>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
