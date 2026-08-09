import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#002d57",
          hover: "#15202B",
        },    
        saffron: {
          DEFAULT: "#F9EDB7",
          hover: "#F5E5A4",
          logo: "#F2A93B",
        },
        teal: {
          logo: "#3FBFAD",
        },
        bg: {
          DEFAULT: "#FFFDF7",
          secondary: "#FCF8E8",
        },
        card: "#FFFFFF",
        ink: {
          DEFAULT: "#111827",
          muted: "#6B7280",
        },
        line: "#ECE7D3",
      },
      fontFamily: {
        display: ["var(--font-satoshi)", "General Sans", "sans-serif"],
        body: ["var(--font-generalsans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "path-grid": "radial-gradient(circle at 1px 1px, #ECE7D3 1px, transparent 0)",
        "saffron-radial": "radial-gradient(60% 60% at 50% 30%, rgba(249,237,183,0.55) 0%, rgba(249,237,183,0) 70%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17,24,39,0.04), 0 12px 32px -12px rgba(17,24,39,0.08)",
        card: "0 1px 1px rgba(17,24,39,0.03), 0 20px 40px -24px rgba(17,24,39,0.12)",
        glow: "0 0 0 1px rgba(249,237,183,0.6), 0 8px 30px -8px rgba(245,229,164,0.55)",
      },
      dropShadow: {
        luminescent: [
          "0 0 8px rgba(63, 191, 173, 0.8)",
          "0 0 16px rgba(63, 191, 173, 0.4)",
        ],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "dash": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
