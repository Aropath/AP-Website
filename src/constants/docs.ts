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
      { title: "Help & Support", slug: "help-support" },
      { title: "FAQ", slug: "faq" },
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

// Initialize server-side SDK using your project API key
const aropath = new Aropath({
  apiKey: process.env.AROPATH_API_KEY,
  projectId: "proj_987654321",
});`;

export const QUICKSTART_SNIPPET = `import { Aropath } from "@aropath/sdk";

const tracker = new Aropath({ apiKey: process.env.AROPATH_API_KEY });

// Track a custom checkout event and assign a revenue value
await tracker.track("checkout_completed", {
  value: 79.00,
  currency: "USD",
  items_count: 2,
});

console.log("Event tracked successfully");`;

export const SDK_PYTHON_SNIPPET = `from aropath import AropathClient

client = AropathClient(api_key="YOUR_API_KEY")

# Track custom server event
client.track(
    event_name="checkout_completed",
    properties={"value": 79.00, "currency": "USD", "items_count": 2}
)`;

export const SDK_GO_SNIPPET = `package main

import "github.com/aropath/aropath-go"

func main() {
    client := aropath.NewClient("YOUR_API_KEY")
    client.Track("checkout_completed", map[string]interface{}{
        "value": 79.00,
        "currency": "USD",
    })
}`;

export const SDKS = [
  { name: "Node.js", install: "npm install @aropath/sdk", language: "typescript" },
  { name: "Python", install: "pip install aropath-analytics", language: "python" },
  { name: "Go", install: "go get github.com/aropath/aropath-go", language: "go" },
  { name: "HTML Script", install: `<script src="https://cdn.aropath.com/track.js" data-id="YOUR_TRACKING_ID" async></script>`, language: "html" },
];

export const DOCS_FAQ: FAQItem[] = [
  {
    question: "Do I need a separate API key for the SDK and the script tag?",
    answer: "No. The HTML script tag uses a public tracking ID (tracking_key / trackingId) that is safe to include in client-side HTML. The Node.js, Python, and Go SDKs use secret API keys for authenticated backend operations and raw data exports.",
  },
  {
    question: "What happens if I lose my tracking_key created during project setup?",
    answer: "For security reasons, your tracking_key is displayed only once upon project creation in Settings → SDK & Tracking → New Project. If misplaced, you can generate a new tracking key from your project settings dashboard.",
  },
  {
    question: "How does email verification work for new accounts?",
    answer: "When registering via email and password, a verification link is dispatched to your inbox. You must verify your email address to unlock full project creation, team member management, and workspace preferences. If you authenticate with Google Sign In, your email is verified automatically.",
  },
  {
    question: "How long are team member invitation codes valid?",
    answer: "Invitation codes generated under Add Team Members are valid for 7 days. Once a teammate enters the code during onboarding or under Project Settings → Join Project, they gain access to the shared workspace. Expired codes can be regenerated at any time.",
  },
  {
    question: "What UI preferences can I customize in my AroPath workspace?",
    answer: "You can customize your workspace preferences by selecting your Country (for localized timezone and compliance defaults), UI Accent Color (Teal or Indigo), and Appearance mode (Light or Dark display theme).",
  },
  {
    question: "How are custom events defined and tracked in AroPath?",
    answer: "Custom events are defined dynamically by calling tracker.track('event_name', metadata). You can pass arbitrary event names alongside numeric transaction values, currency codes, item counts, or custom string attributes.",
  },
  {
    question: "What is the impact of the tracking script on my website speed?",
    answer: "The AroPath tracking script tag (track.js) is optimized to load asynchronously with a bundle size of under 3KB. Event delivery resolves in under 30ms via our global edge CDN, ensuring no impact on page rendering or Lighthouse performance scores.",
  },
  {
    question: "How does AroPath generate AI Insights and growth checklists?",
    answer: "AroPath automatically analyzes visitor session pathways, conversion rates, and revenue metrics. The AI Insights engine ranks friction points and scores each growth checklist recommendation with an estimated percentage conversion lift.",
  },
  {
    question: "What time periods are supported for automated PDF reports?",
    answer: "You can generate and export automated PDF summaries for weekly, monthly, quarterly, semi-annually, and annually timeframes. Reports can also be delivered directly to stakeholder email inboxes.",
  },
  {
    question: "Can I rotate my API keys without breaking client script tracking?",
    answer: "Yes. Public website tracking relies on your project's public tracking ID. Rotating backend API keys under Project Settings → API Keys updates server-side SDK authentication without interrupting live client script tag tracking.",
  },
];

