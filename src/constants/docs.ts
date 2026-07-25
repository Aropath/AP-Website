import type { DocsSection, FAQItem } from "@/types";

export const DOCS_NAV: DocsSection[] = [
  {
    title: "Get Started",
    slug: "get-started",
    items: [
      { title: "Quick start", slug: "quick-start" },
      { title: "Installation", slug: "installation" },
      { title: "Authentication", slug: "authentication" },
    ],
  },
  {
    title: "Reference",
    slug: "reference",
    items: [
      { title: "API reference", slug: "api-reference" },
      { title: "SDKs", slug: "sdks" },
    ],
  },
  {
    title: "Learn",
    slug: "learn",
    items: [
      { title: "Guides & Tutorials", slug: "guides" },
      { title: "Best practices", slug: "best-practices" },
    ],
  },
  {
    title: "Support",
    slug: "support",
    items: [
      { title: "Changelog", slug: "changelog" },
      { title: "Help & Support", slug: "help" },
    ],
  },
];

export const INSTALL_SNIPPET = `npm install @aropath/sdk`;

export const HTML_SNIPPET = `<!-- Place this snippet in the <head> of your site -->
<script
  src="https://cdn.aropath.com/track.js"
  data-id="YOUR_TRACKING_ID"
  async
></script>`;

export const AUTH_SNIPPET = `import { Aropath } from "@aropath/sdk";

const tracker = new Aropath({
  trackingId: "YOUR_TRACKING_ID",
});`;

export const QUICKSTART_SNIPPET = `import { Aropath } from "@aropath/sdk";

const tracker = new Aropath({ trackingId: "YOUR_TRACKING_ID" });

// Track a custom checkout event and assign a revenue value
await tracker.track("checkout_completed", {
  value: 79.00,
  currency: "USD",
  items_count: 2,
});

console.log("Event tracked successfully");`;

export const SDKS = [
  { name: "Node.js", install: "npm install @aropath/sdk" },
  { name: "Python", install: "pip install aropath-analytics" },
  { name: "Go", install: "go get github.com/aropath/aropath-go" },
  { name: "HTML Script", install: `<script src="https://cdn.aropath.com/track.js" data-id="YOUR_ID" async></script>` },
];

export const DOCS_FAQ: FAQItem[] = [
  {
    question: "Do I need a separate API key for the SDK and the script tag?",
    answer: "No. The script tag uses a public tracking ID that is safe to expose in your HTML. Node/Python SDKs use standard API keys for secure backend operations.",
  },
  {
    question: "How are custom events defined?",
    answer: "Custom events can be defined dynamically by passing a string name and an optional metadata object containing numeric values, counts, or categories.",
  },
  {
    question: "What is the average latency of the tracking script?",
    answer: "Our tracking script is optimized to load asynchronously and weighs less than 3KB. Event reporting resolves in less than 30ms via our global edge network.",
  },
];
