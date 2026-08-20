"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { siWhatsapp, siGmail } from "simple-icons";
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
            {/* =========================
                WHATSAPP
            ========================= */}
            <motion.a
              href="#"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]/10"
              aria-label="Contact on WhatsApp"
              title="WhatsApp"
            >
              <svg
                role="img"
                aria-label="WhatsApp"
                viewBox="0 0 24 24"
                className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                fill="currentColor"
                style={{ color: "#25D366" }}
              >
                <path d={siWhatsapp.path} />
              </svg>
            </motion.a>

            {/* =========================
                PHONE
            ========================= */}
            <motion.a
              href="#"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-[#0D1524] hover:bg-[#0D1524]/10"
              aria-label="Call Us"
              title="Call Us"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-[#0D1524] transition-transform duration-200 group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.5 1.5 0 011.53-.36c.99.33 2.05.5 3.14.5A1.92 1.92 0 0122 17.24v3.2A1.56 1.56 0 0120.44 22C10.29 22 2 13.71 2 3.56A1.56 1.56 0 013.56 2h3.2A1.92 1.92 0 018.5 3.92c0 1.09.17 2.15.5 3.14a1.5 1.5 0 01-.36 1.53l-2.02 2.2z" />
              </svg>
            </motion.a>

            {/* =========================
                GMAIL
            ========================= */}
            <motion.a
              href="#"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-[#EA4335] hover:bg-[#EA4335]/10"
              aria-label="Email Us"
              title="Gmail"
            >
              <svg
                role="img"
                aria-label="Gmail"
                viewBox="0 0 24 24"
                className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                fill="currentColor"
                style={{ color: "#EA4335" }}
              >
                <path d={siGmail.path} />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================
          MAIN CONTACT BUTTON
      ========================= */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-card transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40",
          open
            ? "border border-line bg-card text-ink hover:bg-saffron/20"
            : "bg-[#0D1524] text-white hover:-translate-y-1 hover:shadow-lg"
        )}
        aria-label="Open contact menu"
        aria-expanded={open}
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