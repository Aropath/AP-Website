"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Phone,
  MessageCircle,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            {/* WhatsApp */}
            <motion.a
              href="#"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]/10"
              aria-label="Contact on WhatsApp"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5 text-[#111827] transition-colors group-hover:text-[#25D366]" />
            </motion.a>

            {/* Call */}
            <motion.a
              href="#"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-saffron-hover hover:bg-saffron/10"
              aria-label="Call Us"
              title="Call Us"
            >
              <Phone className="h-5 w-5 text-[#111827] transition-colors group-hover:text-saffron-hover" />
            </motion.a>

            {/* Email */}
            <motion.a
              href="#"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-teal-logo hover:bg-teal-logo/10"
              aria-label="Email Us"
              title="Email Us"
            >
              <Mail className="h-5 w-5 text-[#111827] transition-colors group-hover:text-teal-logo" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main contact button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-card transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40",
          open
            ? "border border-line bg-card text-ink hover:bg-saffron/20"
            : "bg-[#0D1524] text-white hover:-translate-y-1 hover:shadow-lg"
        )}
        aria-label="Open contact menu"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}