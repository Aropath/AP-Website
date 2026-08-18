"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PHILOSOPHY_POINTS } from "@/constants/home";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32">
      <Container>
        <SectionHeader
          eyebrow="Philosophy"
          title="Two ideas guide every decision we make"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-2"
        >
          {PHILOSOPHY_POINTS.map((point, i) => {
            const isMission = point.title.toLowerCase() === "mission";
            return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-xl3 border p-9 shadow-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  background: isMission
                    ? "linear-gradient(135deg, #FFF5F6 0%, #FEE2E6 45%, #FECDD3 100%)"
                    : "linear-gradient(135deg, #ECFEFF 0%, #E0F2FE 45%, #EEF2FF 100%)",
                  borderColor: isMission ? "#FECDD3" : "#BAE6FD",
                }}
              >
                {/* Glowing Ambient Mesh Backlight */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80 ${
                    isMission
                      ? "bg-gradient-to-br from-rose-300 via-pink-400 to-red-400"
                      : "bg-gradient-to-br from-teal-300 via-cyan-400 to-indigo-400"
                  }`}
                />

                {/* 3D Fluid Ribbon Graphic Overlay */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90 transition-transform duration-700 ease-out group-hover:scale-105">
                  {isMission ? (
                    /* Mission 3D Ribbon Wave (Rose -> Fuchsia -> Purple) */
                    <svg
                      className="absolute -right-6 -bottom-10 h-72 w-80 transform rotate-[-8deg]"
                      viewBox="0 0 320 280"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="mission-ribbon-1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F43F5E" />
                          <stop offset="50%" stopColor="#E11D48" />
                          <stop offset="100%" stopColor="#9333EA" />
                        </linearGradient>
                        <linearGradient id="mission-ribbon-2" x1="100%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#D946EF" />
                          <stop offset="50%" stopColor="#C084FC" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="mission-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Back Ribbon Layer */}
                      <path
                        d="M 40 240 C 90 200, 150 260, 220 200 C 270 150, 280 80, 310 20 C 310 20, 260 60, 210 110 C 160 160, 110 130, 40 240 Z"
                        fill="url(#mission-ribbon-2)"
                        opacity="0.75"
                      />

                      {/* Main 3D Ribbon Loop */}
                      <path
                        d="M 10 260 C 80 180, 140 120, 190 170 C 240 220, 290 140, 310 50 C 280 90, 220 160, 170 120 C 120 80, 60 180, 10 260 Z"
                        fill="url(#mission-ribbon-1)"
                      />

                      {/* Glossy Specular Edge */}
                      <path
                        d="M 12 258 C 82 178, 142 118, 192 168 C 242 218, 292 138, 308 52"
                        stroke="url(#mission-highlight)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    /* Vision 3D Fluid Wave (Emerald -> Cyan -> Electric Indigo) */
                    <svg
                      className="absolute -right-6 -bottom-10 h-72 w-80 transform rotate-[12deg]"
                      viewBox="0 0 320 280"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="vision-ribbon-1" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="45%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                        <linearGradient id="vision-ribbon-2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="60%" stopColor="#818CF8" stopOpacity="0.75" />
                          <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="vision-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Secondary Flowing Wave */}
                      <path
                        d="M 20 220 C 100 250, 160 170, 230 190 C 290 210, 300 130, 310 30 C 280 80, 240 140, 170 120 C 110 100, 60 160, 20 220 Z"
                        fill="url(#vision-ribbon-2)"
                        opacity="0.8"
                      />

                      {/* Main Fluid 3D Ribbon */}
                      <path
                        d="M 30 270 C 70 190, 130 230, 180 140 C 230 50, 270 90, 310 10 C 270 70, 210 30, 150 120 C 100 200, 50 170, 30 270 Z"
                        fill="url(#vision-ribbon-1)"
                      />

                      {/* Glossy Edge Highlight */}
                      <path
                        d="M 32 268 C 72 188, 132 228, 182 138 C 232 48, 272 88, 308 12"
                        stroke="url(#vision-highlight)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] shadow-soft backdrop-blur-md ${
                        isMission
                          ? "border-rose-300/80 bg-white/80 text-rose-900"
                          : "border-sky-300/80 bg-white/80 text-sky-900"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isMission ? "bg-rose-500" : "bg-cyan-500"
                        } animate-pulse-soft`}
                      />
                      {point.title}
                    </span>
                  </div>

                  <p className="mt-8 font-display text-xl font-medium leading-relaxed text-ink max-w-sm text-balance">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Careers Callout - Commented out for now */}
        {/*
        <motion.div
          id="careers"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-20 max-w-2xl rounded-xl3 border border-line bg-card p-8 text-center shadow-soft"
        >
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-saffron-logo font-semibold">Careers</span>
          <h3 className="mt-2 font-display text-lg font-medium text-ink">We&apos;re growing the path. Join us.</h3>
          <p className="mt-2 text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">
            We are looking for designers, engineers, and product minds who want to build the future of actionable, human-centered analytics.
          </p>
          <div className="mt-5">
            <a href="mailto:careers@aropath.com" className="text-xs font-semibold text-ink underline hover:text-saffron-logo transition-colors">
              View open roles (We&apos;re hiring) →
            </a>
          </div>
        </motion.div>
        */}
      </Container>
    </section>
  );
}
