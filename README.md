# Aropath — Marketing Website

A production-quality, four-page marketing site for **Aropath**, built with the
Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Stack

- **Next.js 14** (App Router, Server Components by default)
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling, with a small custom design-token layer
- **Framer Motion** for UI motion (fades, hovers, cards, accordions, pricing)
- **GSAP + ScrollTrigger** for the hero text reveal and scroll-linked reveals
- **Lenis** for smooth scrolling, bridged to GSAP's ScrollTrigger
- **lucide-react** for icons
- **react-hook-form + zod** wired up and ready for any form you add (contact,
  waitlist, etc. — none of the four pages required a submitted form, so no
  form is mounted yet)

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

The project builds cleanly (`npm run build`) and statically prerenders all
four routes.

## Pages

| Route        | File                        |
|--------------|------------------------------|
| Home         | `src/app/page.tsx`            |
| Features     | `src/app/features/page.tsx`   |
| Docs         | `src/app/docs/page.tsx`       |
| Pricing      | `src/app/pricing/page.tsx`    |

## Folder structure

```
src/
  app/            Route segments, layout, metadata, sitemap
  components/
    ui/           Small reusable primitives (Button, Accordion, PricingCard, ...)
    layout/        Navbar, Footer, Container, CTASection, PageHero, ...
    home/          Home-page-only sections
    features/      Features-page-only sections
    docs/          Docs-page-only sections
    pricing/       Pricing-page-only sections
  hooks/          useLenis, useMousePosition, useScrollDirection
  animations/      Framer Motion variants + GSAP helpers
  lib/            cn() and small utilities
  types/          Shared TypeScript interfaces
  constants/      All page copy and structured content, kept out of components
```

Every component has a single responsibility, and page files (`app/**/page.tsx`)
only ever import and arrange section components — no inline markup.

## Design system

The palette, spacing, and radii are defined once in `tailwind.config.ts`
(`saffron`, `bg`, `card`, `ink`, `line`, plus the `display-2xl / xl / lg`
type scale) and consumed everywhere through Tailwind utility classes — no
inline styles, no ad-hoc hex codes in components.

**Signature element:** the `PathTrail` component (`src/components/ui/PathTrail.tsx`)
is a literal nod to the product name — a single drawn route with a marker
that travels along it as you scroll. It appears behind the About section on
the homepage and can be reused as a divider anywhere a "step" or "journey"
needs a visual anchor.

### Fonts

The brief calls for Satoshi, General Sans, and Inter. Satoshi and General
Sans are licensed via Fontshare rather than Google Fonts, so this project
**self-hosts** them instead of fetching from a CDN at build time:

1. Download the Satoshi and General Sans variable `.woff2` files (and, if
   you want monospace docs code blocks to match, JetBrains Mono).
2. Drop them into `public/fonts/` using these exact names (or update the
   `@font-face` paths in `src/app/globals.css`):
   - `Satoshi-Variable.woff2`
   - `GeneralSans-Variable.woff2`
   - `JetBrainsMono-Variable.woff2`

Until those files are added, the site falls back gracefully to a close
system-font stack, so nothing breaks or blocks on a missing asset — it just
won't look pixel-identical to the intended type until the licensed files are
in place.

## Motion conventions

- **Framer Motion**: fade/slide/scale on scroll-into-view, hover states on
  cards and buttons, the accordion open/close, and the mobile menu.
- **GSAP**: the hero's word-by-word text reveal (`splitTextReveal`) and the
  Lenis ↔ ScrollTrigger bridge (`useLenis`). Reduced-motion is respected in
  both systems.

## Content

All copy lives in `src/constants/*.ts`, written in a premium register adjacent to Stripe/Anthropic, and aligned with the copywriting and layouts of the mockup provided at `https://p5p7dp.csb.app/`. The product is positioned as **AroPath** — an AI-Native Website Analytics platform that converts raw visitor data into a prioritized, AI-written growth checklist to increase website revenue.

Swap these files to change copy without touching any component.

## Known follow-ups before shipping to production

- Add the real Satoshi / General Sans / JetBrains Mono font files (see above).
- Replace the placeholder OG image / social card if you want a custom one.
- Wire the "Get Started" and "Talk to Sales" buttons to real destinations.
- Swap `TRUSTED_COMPANIES` and testimonial names for real, permissioned logos
  and quotes before launch.
