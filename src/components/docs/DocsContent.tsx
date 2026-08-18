import { CodeBlock } from "@/components/ui/CodeBlock";
import { Accordion } from "@/components/ui/Accordion";
import {
  INSTALL_SNIPPET,
  AUTH_SNIPPET,
  QUICKSTART_SNIPPET,
  SDKS,
  HTML_SNIPPET,
  DOCS_FAQ,
  SDK_PYTHON_SNIPPET,
  SDK_GO_SNIPPET,
} from "@/constants/docs";
import {
  LifeBuoy,
  Mail,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Shield,
  Key,
  Users,
  FileText,
  Terminal,
  Settings,
  Zap,
  BookOpen,
  Sparkles,
  ArrowRight,
  Code2,
  Lock,
  UserPlus,
  Check,
  Activity,
  Layers,
  Globe,
  HelpCircle,
  Clock,
  Database,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export function DocsBlock({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="pb-12 pt-0">
      <h2 className="font-display text-2xl font-medium text-ink">{title}</h2>
      <div className="mt-5 flex flex-col gap-6 text-[1.02rem] leading-relaxed text-ink-muted">
        {children}
      </div>
    </div>
  );
}

export function QuickStartContent() {
  return (
    <DocsBlock id="quick-start" title="Quick Start Guide">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        Follow this 7-step setup guide to register your account, create your first project, secure your tracking key, embed the session tracker, set workspace preferences, and configure team access.
      </p>

      <div className="mt-4 flex flex-col gap-6">
        {/* Step 01 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              01
            </span>
            <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
              Create your account
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            Sign up for an AroPath account using your email address and password, or authenticate instantly by continuing with Google Sign In.
          </p>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Sign up with email/password or continue with 1-click Google OAuth.</li>
            <li>If registering via email, verify your email address via the confirmation link sent to your inbox.</li>
            <li>Sign in to access your project setup dashboard.</li>
          </ul>
        </div>

        {/* Step 02 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              02
            </span>
            <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
              Create your project
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            Navigate to <strong className="text-amber-950 dark:text-amber-100 font-semibold">Settings → SDK & Tracking → New Project</strong> in your workspace dashboard.
          </p>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Enter your Project Name (e.g. Production Web App).</li>
            <li>Optionally specify your primary website domain for referrer tracking.</li>
            <li>Click <strong className="text-amber-950 dark:text-amber-100 font-semibold">Create Project</strong> to generate your workspace credentials.</li>
          </ul>
        </div>

        {/* Step 03 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              03
            </span>
            <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0" />
              Save your tracking key
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            Save your <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/25 px-1.5 py-0.5 rounded border border-amber-500/40 font-semibold">tracking_key</code> immediately upon creation. It is displayed only once for security reasons and cannot be retrieved later.
          </p>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Copy your public <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/25 px-1.5 py-0.5 rounded border border-amber-500/40 font-semibold">tracking_key</code> to a secure location before leaving the creation page.</li>
            <li>If misplaced, a new key must be generated under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Project Settings → SDK & Tracking</strong>, which requires updating HTML script tags on live sites.</li>
          </ul>
        </div>

        {/* Step 04 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              04
            </span>
            <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
              Install the tracker
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            Add the AroPath tracking script snippet directly inside the <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">&lt;head&gt;</code> element of your website or application.
          </p>
          <div className="my-1">
            <CodeBlock code={HTML_SNIPPET} language="html" />
          </div>
          <p className="text-xs text-amber-900/90 dark:text-amber-200/90">
            Once embedded, visitor session tracking automatically activates and streams live pageviews, duration, scroll depth, and interaction telemetry to your dashboard.
          </p>
        </div>

        {/* Step 05 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              05
            </span>
            <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
              Set your preferences
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            Tailor your AroPath workspace settings to match your regional and aesthetic preferences under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Settings → Preferences</strong>:
          </p>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-none">
            <li className="flex items-center gap-2">
              <span className="font-semibold text-amber-950 dark:text-amber-100">Country:</span> Select your country for timezone and regional compliance defaults.
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold text-amber-950 dark:text-amber-100">Accent color:</span> Choose your UI theme accent (<span className="text-teal-logo font-medium">Teal</span> or <span className="text-indigo-500 font-medium">Indigo</span>).
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold text-amber-950 dark:text-amber-100">Appearance:</span> Select your preferred display theme (<span className="text-amber-950 dark:text-amber-100 font-medium">Light</span> or <span className="text-amber-950 dark:text-amber-100 font-medium">Dark</span>).
            </li>
          </ul>
        </div>

        {/* Step 06 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              06
            </span>
            <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
              Add team members
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            Invite teammates to collaborate on your AroPath project:
          </p>
          <ol className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-decimal pl-4">
            <li>Open your username menu from the sidebar.</li>
            <li>Select <strong className="text-amber-950 dark:text-amber-100 font-semibold">Add Team Members</strong>.</li>
            <li>Generate an invitation code (valid for 7 days).</li>
            <li>Once accepted, invited members will appear under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Manage Team Members</strong>.</li>
          </ol>
        </div>

        {/* Step 07 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              07
            </span>
            <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
              Join a project
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
            If you are joining an existing team project rather than creating a new one:
          </p>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Obtain the 7-day invitation code from your project administrator.</li>
            <li>Enter the code during initial account onboarding or under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Project Settings → Join Project</strong>.</li>
            <li>Upon verification, your account will gain access to the shared project analytics workspace.</li>
          </ul>
        </div>
      </div>
    </DocsBlock>
  );
}

export function InstallationContent() {
  return (
    <DocsBlock id="installation" title="Installation & Deployment Guide">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        AroPath offers flexible integration paths tailored to your application architecture. Choose between our lightweight client CDN script tag for static and frontend web analytics, or our official SDK packages for server-side Node.js, Python, and Go applications.
      </p>

      {/* HTML Script Tag */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
            <Globe className="h-5 w-5 text-amber-700 dark:text-amber-400" />
            1. Client HTML Script Tag (CDN)
          </h3>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-900 dark:text-amber-300 font-bold border border-amber-500/40">
            &lt; 3KB • &lt; 30ms Latency
          </span>
        </div>
        <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
          Recommended for standard websites, landing pages, WordPress, Webflow, and custom frontends. Paste the snippet directly inside the <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">&lt;head&gt;</code> element of your website HTML.
        </p>
        <CodeBlock code={HTML_SNIPPET} language="html" />
        <div className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 pl-1">
          <p>• The <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1 py-0.5 rounded border border-amber-500/30 font-semibold">async</code> attribute guarantees non-blocking script loading so page render performance is unaffected.</p>
          <p>• Replace <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1 py-0.5 rounded border border-amber-500/30 font-semibold">YOUR_TRACKING_ID</code> with your project&apos;s public tracking ID.</p>
          <p>• Automatically records pageviews, session duration, scroll depth, engagement metrics, and interaction telemetry.</p>
        </div>
      </div>

      {/* Node Package Manager */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          2. Node Package Manager (@aropath/sdk)
        </h3>
        <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
          For modern React, Next.js, Vue, or Node.js server applications, install our official npm SDK.
        </p>
        <CodeBlock code={INSTALL_SNIPPET} language="bash" />
        <div className="text-xs text-amber-900/90 dark:text-amber-200/90 flex flex-wrap gap-3 pt-1">
          <span className="font-mono text-xs bg-amber-500/20 text-amber-950 dark:text-amber-100 px-2.5 py-1 rounded border border-amber-500/30 font-semibold">yarn add @aropath/sdk</span>
          <span className="font-mono text-xs bg-amber-500/20 text-amber-950 dark:text-amber-100 px-2.5 py-1 rounded border border-amber-500/30 font-semibold">pnpm add @aropath/sdk</span>
        </div>
      </div>

      {/* Framework Integration */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
          <Layers className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          3. Next.js App Router Integration
        </h3>
        <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
          In Next.js App Router applications, embed the script using Next.js <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">Script</code> component inside your root <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">app/layout.tsx</code> file:
        </p>
        <CodeBlock
          code={`import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.aropath.com/track.js"
          data-id={process.env.NEXT_PUBLIC_AROPATH_TRACKING_ID}
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}`}
          language="typescript"
        />
      </div>

      {/* Verification */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3.5">
        <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          Installation Verification & Network Audit
        </h3>
        <p className="text-xs leading-relaxed text-amber-900/90 dark:text-amber-200/90">
          After embedding the tracker, open your browser Developer Tools (F12) and inspect the Network tab. Filter for requests to <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">track.js</code> or <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">/v1/events</code>. You should see HTTP 200 OK responses with active session telemetry streaming to your AroPath dashboard.
        </p>
      </div>
    </DocsBlock>
  );
}

export function AuthenticationContent() {
  return (
    <DocsBlock id="authentication" title="Authentication & Key Security">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        AroPath uses a multi-tiered security model that distinguishes between public client tracking identifiers and secret server-side API keys. This architecture protects workspace administration while enabling client-side analytics collection without risk.
      </p>

      {/* Account Flow */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          Full Account Authentication Flow
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/20 p-4 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase">Step 01</span>
            <p className="font-display text-sm font-medium text-amber-950 dark:text-amber-100">Sign Up & OAuth</p>
            <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
              Register using email/password or authenticate instantly with 1-click Google Sign In.
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/20 p-4 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase">Step 02</span>
            <p className="font-display text-sm font-medium text-amber-950 dark:text-amber-100">Email Verification</p>
            <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
              For direct email signups, click the verification link sent to your inbox to unlock project creation.
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/20 p-4 space-y-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase">Step 03</span>
            <p className="font-display text-sm font-medium text-amber-950 dark:text-amber-100">Sign In & Access</p>
            <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
              Log in anytime with email credentials or Google OAuth to manage projects and team invitations.
            </p>
          </div>
        </div>
      </div>

      {/* Keys Explained */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
          <Key className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          Project Key Architecture & Terminology
        </h3>

        <div className="divide-y divide-amber-500/20">
          <div className="py-3.5 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-amber-950 dark:text-amber-100 px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 rounded">
                tracking_key / trackingId
              </span>
              <span className="text-xs text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider">Public Identifier</span>
            </div>
            <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
              Generated upon project creation under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Settings → SDK & Tracking → New Project</strong>. Displayed ONCE upon creation for security. Used in public HTML script tags (<code className="font-mono text-xs">data-id=&quot;YOUR_TRACKING_ID&quot;</code>). Safe to expose in frontend client code.
            </p>
          </div>

          <div className="pt-4 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-amber-950 dark:text-amber-100 px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 rounded">
                AROPATH_API_KEY
              </span>
              <span className="text-xs text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider">Secret Key</span>
            </div>
            <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
              Secret API key used for server-side Node.js, Python, and Go SDKs and REST API endpoints (<code className="font-mono text-xs">/v1/events/track</code>, <code className="font-mono text-xs">/v1/insights</code>, <code className="font-mono text-xs">/v1/reports</code>). Must be kept secret in server environment variables and never exposed in client code.
            </p>
          </div>
        </div>
      </div>

      {/* Server Initialization Code */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Server-Side SDK Authentication Example
        </p>
        <CodeBlock code={AUTH_SNIPPET} language="typescript" />
      </div>

      {/* Security Best Practices */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3.5">
        <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          Key Security & Rotation Protocol
        </h3>
        <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
          <li>Never commit secret API keys to public repositories or client-side JavaScript bundles.</li>
          <li>Store API keys in environment variables (e.g. <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">.env.local</code> or secret vault).</li>
          <li>If an API key is accidentally compromised, navigate to <strong className="text-amber-950 dark:text-amber-100 font-semibold">Project Settings → API Keys</strong> to generate a new key and revoke the compromised credential instantly.</li>
        </ul>
      </div>
    </DocsBlock>
  );
}

export function ApiReferenceContent() {
  return (
    <DocsBlock id="api-reference" title="REST API Reference">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        The AroPath REST API enables programmatic event tracking from backend services, extraction of AI-generated growth insights, and automated PDF report downloads.
      </p>

      {/* Base URL & Auth */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300">Base Endpoint</span>
          <p className="font-mono text-sm text-amber-950 dark:text-amber-100 font-semibold mt-0.5">https://api.aropath.com/v1</p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300">Authentication Header</span>
          <p className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-3 py-1 rounded border border-amber-500/30 font-semibold mt-0.5">
            Authorization: Bearer YOUR_API_KEY
          </p>
        </div>
      </div>

      {/* Endpoints Table */}
      <div className="overflow-hidden rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 shadow-soft">
        <table className="w-full text-sm">
          <thead className="bg-amber-500/20 text-left text-xs uppercase tracking-wide text-amber-950 dark:text-amber-100 border-b border-amber-500/30">
            <tr>
              <th className="px-4 py-3 font-mono font-bold">Endpoint</th>
              <th className="px-4 py-3 font-mono font-bold">Method</th>
              <th className="px-4 py-3 font-mono font-bold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-500/20">
            <tr>
              <td className="px-4 py-3 font-mono text-xs font-bold text-amber-950 dark:text-amber-100">/v1/events/track</td>
              <td className="px-4 py-3"><span className="px-2 py-0.5 text-[10px] font-bold font-mono rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40">POST</span></td>
              <td className="px-4 py-3 text-xs text-amber-900/90 dark:text-amber-200">Track custom conversion events, checkouts, and monetary transaction values.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs font-bold text-amber-950 dark:text-amber-100">/v1/insights</td>
              <td className="px-4 py-3"><span className="px-2 py-0.5 text-[10px] font-bold font-mono rounded bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-500/40">GET</span></td>
              <td className="px-4 py-3 text-xs text-amber-900/90 dark:text-amber-200">Retrieve prioritized growth checklist items and bottleneck score predictions.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs font-bold text-amber-950 dark:text-amber-100">/v1/reports</td>
              <td className="px-4 py-3"><span className="px-2 py-0.5 text-[10px] font-bold font-mono rounded bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-500/40">GET</span></td>
              <td className="px-4 py-3 text-xs text-amber-900/90 dark:text-amber-200">Query and download automated PDF summary reports (weekly, monthly, quarterly, semi-annually, annually).</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs font-bold text-amber-950 dark:text-amber-100">/v1/projects/invite</td>
              <td className="px-4 py-3"><span className="px-2 py-0.5 text-[10px] font-bold font-mono rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40">POST</span></td>
              <td className="px-4 py-3 text-xs text-amber-900/90 dark:text-amber-200">Generate a 7-day team member invitation code for shared project access.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Detailed Spec: POST /v1/events/track */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs font-bold font-mono rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40">
            POST
          </span>
          <h3 className="font-mono text-sm font-semibold text-amber-950 dark:text-amber-100">/v1/events/track</h3>
        </div>
        <p className="text-xs text-amber-900/90 dark:text-amber-200 leading-relaxed">
          Submit backend conversion events. Payload includes event name, monetary transaction value, currency code, and item breakdown.
        </p>
        <CodeBlock
          code={`curl -X POST https://api.aropath.com/v1/events/track \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "checkout_completed",
    "value": 79.00,
    "currency": "USD",
    "items_count": 2,
    "user_id": "usr_123456"
  }'`}
          language="bash"
        />
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300">Response (200 OK)</p>
          <CodeBlock
            code={`{
  "success": true,
  "event_id": "evt_9988776655",
  "timestamp": "2026-08-15T21:30:00Z"
}`}
            language="json"
          />
        </div>
      </div>

      {/* HTTP Error Codes */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3.5">
        <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">HTTP Status Codes & Rate Limits</h3>
        <p className="text-xs text-amber-900/90 dark:text-amber-200 leading-relaxed">
          The API enforces a rate limit of 1,000 requests per minute per project key.
        </p>
        <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 flex justify-between">
            <span className="font-mono font-bold text-amber-950 dark:text-amber-100">200 OK</span>
            <span className="text-amber-900/90 dark:text-amber-200">Request succeeded</span>
          </div>
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 flex justify-between">
            <span className="font-mono font-bold text-amber-800 dark:text-amber-300">400 Bad Request</span>
            <span className="text-amber-900/90 dark:text-amber-200">Invalid payload JSON</span>
          </div>
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 flex justify-between">
            <span className="font-mono font-bold text-amber-950 dark:text-amber-100">401 Unauthorized</span>
            <span className="text-amber-900/90 dark:text-amber-200">Missing/invalid API key</span>
          </div>
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 flex justify-between">
            <span className="font-mono font-bold text-amber-950 dark:text-amber-100">429 Rate Limited</span>
            <span className="text-amber-900/90 dark:text-amber-200">Exceeded 1,000 req/min</span>
          </div>
        </div>
      </div>
    </DocsBlock>
  );
}

export function SdksContent() {
  return (
    <DocsBlock id="sdks" title="SDKs & Client Libraries">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        Integrate AroPath seamlessly into your software stack using our official server SDKs and client tracking libraries.
      </p>

      {/* SDK Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {SDKS.map((sdk) => (
          <div key={sdk.name} className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-display text-base font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                {sdk.name}
              </p>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 bg-amber-500/20 border border-amber-500/40 rounded text-amber-900 dark:text-amber-300 font-bold">
                Official
              </span>
            </div>
            <CodeBlock code={sdk.install} language={sdk.language} />
          </div>
        ))}
      </div>

      {/* Detailed Snippets */}
      <div className="space-y-6 pt-2">
        {/* Node.js SDK */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3.5">
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
            <Terminal className="h-5 w-5 text-amber-700 dark:text-amber-400" />
            Node.js / TypeScript SDK (@aropath/sdk)
          </h3>
          <p className="text-xs text-amber-900/90 dark:text-amber-200 leading-relaxed">
            Initialize the tracker with your secret API key to record backend conversions, track custom checkout flows, or push offline customer events.
          </p>
          <CodeBlock code={QUICKSTART_SNIPPET} language="typescript" />
        </div>

        {/* Python SDK */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3.5">
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-amber-700 dark:text-amber-400" />
            Python SDK (aropath-analytics)
          </h3>
          <CodeBlock code={SDK_PYTHON_SNIPPET} language="python" />
        </div>

        {/* Go SDK */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3.5">
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-amber-700 dark:text-amber-400" />
            Go SDK (aropath-go)
          </h3>
          <CodeBlock code={SDK_GO_SNIPPET} language="go" />
        </div>
      </div>

      {/* SDK Feature Comparison */}
      <div className="overflow-hidden rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 shadow-soft">
        <div className="px-6 py-4 border-b border-amber-500/30 bg-amber-500/20">
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">SDK Feature Comparison Matrix</h3>
        </div>
        <table className="w-full text-xs">
          <thead className="bg-amber-500/10 text-left uppercase tracking-wide text-amber-900 dark:text-amber-300 border-b border-amber-500/30 font-mono font-bold">
            <tr>
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">HTML Script Tag</th>
              <th className="px-4 py-3">Node.js SDK</th>
              <th className="px-4 py-3">Python / Go SDKs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-500/20">
            <tr>
              <td className="px-4 py-3 font-semibold text-amber-950 dark:text-amber-100">Auto Visitor Session Tracking</td>
              <td className="px-4 py-3 text-emerald-800 dark:text-emerald-300 font-bold">✓ Included</td>
              <td className="px-4 py-3 text-amber-900/80 dark:text-amber-200/80">Manual Event</td>
              <td className="px-4 py-3 text-amber-900/80 dark:text-amber-200/80">Manual Event</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-amber-950 dark:text-amber-100">Custom Event Tracking</td>
              <td className="px-4 py-3 text-emerald-800 dark:text-emerald-300 font-bold">✓ Supported</td>
              <td className="px-4 py-3 text-emerald-800 dark:text-emerald-300 font-bold">✓ Supported</td>
              <td className="px-4 py-3 text-emerald-800 dark:text-emerald-300 font-bold">✓ Supported</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-amber-950 dark:text-amber-100">Revenue Transaction Values</td>
              <td className="px-4 py-3 text-emerald-800 dark:text-emerald-300 font-bold">✓ Supported</td>
              <td className="px-4 py-3 text-emerald-800 dark:text-emerald-300 font-bold">✓ Supported</td>
              <td className="px-4 py-3 text-emerald-800 dark:text-emerald-300 font-bold">✓ Supported</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-amber-950 dark:text-amber-100">Authentication Credential</td>
              <td className="px-4 py-3 font-mono text-[11px] text-amber-900/90 dark:text-amber-200">Public tracking_key</td>
              <td className="px-4 py-3 font-mono text-[11px] text-amber-900/90 dark:text-amber-200">Secret AROPATH_API_KEY</td>
              <td className="px-4 py-3 font-mono text-[11px] text-amber-900/90 dark:text-amber-200">Secret AROPATH_API_KEY</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsBlock>
  );
}

export function GuidesContent() {
  return (
    <DocsBlock id="guides" title="Guides & Tutorials">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        Step-by-step implementation tutorials for common analytical flows: e-commerce checkout optimization, SaaS registration flow analysis, automated PDF reports, and team collaboration.
      </p>

      {/* Guide 1 */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1 uppercase">
            Guide 01
          </span>
          <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
            E-Commerce Checkout & Revenue Optimization
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
          Learn how to track checkout steps, attach monetary transaction values, and calculate ROI with automated funnel bottleneck scoring.
        </p>
        <ol className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-decimal pl-4">
          <li>Embed the client script tag inside your store template <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">&lt;head&gt;</code>.</li>
          <li>Trigger custom events on cart additions: <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">tracker.track(&quot;cart_viewed&quot;)</code>.</li>
          <li>On successful checkout, pass the transaction value and item count:
            <code className="font-mono text-xs text-amber-950 dark:text-amber-100 block mt-1.5 p-2.5 bg-amber-500/20 rounded border border-amber-500/30">
              tracker.track(&quot;checkout_completed&quot;, &#123; value: 79.00, currency: &quot;USD&quot;, items_count: 2 &#125;);
            </code>
          </li>
          <li>Open <strong className="text-amber-950 dark:text-amber-100 font-semibold">Dashboard → AI Insights</strong> to view predicted percentage conversion lifts for your checkout steps.</li>
        </ol>
      </div>

      {/* Guide 2 */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1 uppercase">
            Guide 02
          </span>
          <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
            SaaS Registration & Onboarding Analysis
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
          Analyze user sign-up drop-offs and track email verification conversions across your SaaS onboarding flow.
        </p>
        <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
          <li>Track initial sign-up page view and form submission events.</li>
          <li>For direct email registrations, verify user email confirmation link clicks before initiating workspace setup.</li>
          <li>Track first-time feature activation steps to understand retention levers.</li>
        </ul>
      </div>

      {/* Guide 3 */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1 uppercase">
            Guide 03
          </span>
          <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
            Automated Executive PDF Reports Setup
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
          Configure weekly and monthly PDF summary reports sent directly to your stakeholders without manual formatting effort.
        </p>
        <ol className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-decimal pl-4">
          <li>Navigate to <strong className="text-amber-950 dark:text-amber-100 font-semibold">Project Settings → Automated Reports</strong>.</li>
          <li>Select delivery frequency: <strong className="text-amber-950 dark:text-amber-100 font-semibold">Weekly, Monthly, Quarterly, Semi-Annually, or Annually</strong>.</li>
          <li>Add recipient email addresses or download generated PDF reports on demand.</li>
        </ol>
      </div>

      {/* Guide 4 */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1 uppercase">
            Guide 04
          </span>
          <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100">
            Team Member Onboarding & Workspace Customization
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-amber-900/90 dark:text-amber-200">
          Manage team access and customize your project workspace appearance:
        </p>
        <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
          <li>Generate a 7-day invitation code under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Username Menu → Add Team Members</strong>.</li>
          <li>Teammates redeem the 7-day code during account onboarding or under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Project Settings → Join Project</strong>.</li>
          <li>Set workspace preferences: Country selector, Accent Color (<span className="text-teal-logo font-medium">Teal</span> or <span className="text-indigo-500 font-medium">Indigo</span>), and Appearance mode (<span className="text-amber-950 dark:text-amber-100 font-medium">Light</span> or <span className="text-amber-950 dark:text-amber-100 font-medium">Dark</span>).</li>
        </ul>
      </div>
    </DocsBlock>
  );
}

export function BestPracticesContent() {
  return (
    <DocsBlock id="best-practices" title="Best Practices">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        Follow these core principles to maximize analytics data quality, maintain sub-30ms site loading speeds, and preserve key security.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Practice 1 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 shadow-soft space-y-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Zap className="h-5 w-5" />
            <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">1. Non-Blocking Async Loading</h3>
          </div>
          <p className="text-xs leading-relaxed text-amber-900/90 dark:text-amber-200">
            Always add the <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">async</code> attribute to the HTML script tag. This ensures the 2.8KB bundle executes asynchronously, keeping initial page render times under 30ms and preserving perfect 100 Lighthouse performance scores.
          </p>
        </div>

        {/* Practice 2 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 shadow-soft space-y-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Lock className="h-5 w-5" />
            <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">2. Key Isolation & Rotation</h3>
          </div>
          <p className="text-xs leading-relaxed text-amber-900/90 dark:text-amber-200">
            Keep public <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">tracking_key</code> strings on public client script tags while keeping secret API keys secured on backend servers. Rotate API keys periodically under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Project Settings → API Keys</strong>.
          </p>
        </div>

        {/* Practice 3 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 shadow-soft space-y-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Sparkles className="h-5 w-5" />
            <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">3. Standardized Event Naming</h3>
          </div>
          <p className="text-xs leading-relaxed text-amber-900/90 dark:text-amber-200">
            Use lowercase snake_case for custom event names (e.g. <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">checkout_completed</code>, <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">signup_submitted</code>). Attach exact numeric transaction values to purchase events for accurate AI revenue forecasts.
          </p>
        </div>

        {/* Practice 4 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 shadow-soft space-y-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Shield className="h-5 w-5" />
            <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">4. Privacy & Compliance</h3>
          </div>
          <p className="text-xs leading-relaxed text-amber-900/90 dark:text-amber-200">
            Configure your workspace Country setting for proper regional compliance and time zone formatting. Ensure no unhashed sensitive personal data is sent in custom event metadata payload strings.
          </p>
        </div>
      </div>
    </DocsBlock>
  );
}

export function ChangelogContent() {
  return (
    <DocsBlock id="changelog" title="Platform Changelog">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        Stay up to date with new features, performance enhancements, and SDK updates to the AroPath analytics and session platform.
      </p>

      <div className="space-y-6 pt-2">
        {/* Release v1.2.0 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              v1.2.0 · July 2026
            </span>
            <span className="text-xs text-amber-800 dark:text-amber-300 font-bold">Latest Release</span>
          </div>
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">
            Automatic Funnel Bottleneck Scoring & Multi-Period Reports
          </h3>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>AI Insights engine now scores all checklist recommendations with estimated percentage conversion lifts.</li>
            <li>Added automated exportable PDF reports across weekly, monthly, quarterly, semi-annually, and annually timeframes.</li>
            <li>Enhanced real-time session timeline charts in dashboard workspace.</li>
          </ul>
        </div>

        {/* Release v1.1.5 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              v1.1.5 · June 2026
            </span>
          </div>
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">
            CDN Tracking Script Optimization
          </h3>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Reduced CDN tracking script file size to 2.8KB compressed.</li>
            <li>Optimized global edge network routing for sub-30ms event reporting response times.</li>
          </ul>
        </div>

        {/* Release v1.1.0 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              v1.1.0 · May 2026
            </span>
          </div>
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">
            Team Member Invitations & Workspace Preferences
          </h3>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Introduced 7-day invitation code system for inviting team members under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Add Team Members</strong>.</li>
            <li>Added workspace preference controls: Country selector, Accent Color theme (<span className="text-teal-logo font-medium">Teal</span> / <span className="text-indigo-500 font-medium">Indigo</span>), and Appearance theme (<span className="text-amber-950 dark:text-amber-100 font-medium">Light</span> / <span className="text-amber-950 dark:text-amber-100 font-medium">Dark</span>).</li>
          </ul>
        </div>

        {/* Release v1.0.4 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              v1.0.4 · April 2026
            </span>
          </div>
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">
            Multi-Language SDK Suite Launch
          </h3>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Released official Python (<code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">aropath-analytics</code>) and Go (<code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">aropath-go</code>) libraries alongside the Node.js package (<code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">@aropath/sdk</code>).</li>
          </ul>
        </div>

        {/* Release v1.0.0 */}
        <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-amber-900 dark:text-amber-300 uppercase bg-amber-500/20 border border-amber-500/40 rounded-md px-2.5 py-1">
              v1.0.0 · March 2026
            </span>
          </div>
          <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">
            Initial Platform Release
          </h3>
          <ul className="text-xs text-amber-900/90 dark:text-amber-200/90 space-y-2 list-disc pl-4">
            <li>Public launch of AroPath session analytics, email verification, Google OAuth Sign In, and project key security architecture.</li>
          </ul>
        </div>
      </div>
    </DocsBlock>
  );
}

export function HelpSupportContent() {
  return (
    <DocsBlock id="help-support" title="Help & Support">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed">
        Need assistance setting up AroPath, integrating an SDK, or managing team access? Our support team and developer resources are available to help.
      </p>

      {/* Support Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <a
          href="mailto:support@aropath.com"
          className="flex flex-col items-start gap-3 rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 transition-colors hover:border-amber-500/60 shadow-soft group"
        >
          <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <span className="font-display text-base font-medium text-amber-950 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
              Community Forum
            </span>
            <p className="mt-1 text-xs leading-relaxed text-amber-900/90 dark:text-amber-200">
              Connect with other developers, share custom event tracking snippets, and browse questions.
            </p>
          </div>
        </a>

        <a
          href="mailto:support@aropath.com"
          className="flex flex-col items-start gap-3 rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 transition-colors hover:border-amber-500/60 shadow-soft group"
        >
          <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <span className="font-display text-base font-medium text-amber-950 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
              Email Support
            </span>
            <p className="mt-1 text-xs leading-relaxed text-amber-900/90 dark:text-amber-200">
              Reach out directly to support@aropath.com for account, integration, or billing questions.
            </p>
          </div>
        </a>

        <a
          href="mailto:support@aropath.com"
          className="flex flex-col items-start gap-3 rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 transition-colors hover:border-amber-500/60 shadow-soft group"
        >
          <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            <LifeBuoy className="h-5 w-5" />
          </div>
          <div>
            <span className="font-display text-base font-medium text-amber-950 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
              Dedicated SLA
            </span>
            <p className="mt-1 text-xs leading-relaxed text-amber-900/90 dark:text-amber-200">
              Priority ticketing, architecture reviews, and guaranteed response times for enterprise teams.
            </p>
          </div>
        </a>
      </div>

      {/* Common Resolutions */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4 pt-4">
        <h3 className="font-display text-lg font-medium text-amber-950 dark:text-amber-100 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-amber-700 dark:text-amber-400" />
          Troubleshooting Common Setup Issues
        </h3>

        <div className="space-y-4 divide-y divide-amber-500/20 text-xs">
          <div className="pt-2 space-y-1">
            <p className="font-semibold text-amber-950 dark:text-amber-100">Lost tracking_key after project creation</p>
            <p className="text-amber-900/90 dark:text-amber-200 leading-relaxed">
              If your initial <code className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 font-semibold">tracking_key</code> was misplaced, generate a new key under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Settings → SDK & Tracking</strong> and update your site script tag.
            </p>
          </div>

          <div className="pt-4 space-y-1">
            <p className="font-semibold text-amber-950 dark:text-amber-100">Expired team member invitation code</p>
            <p className="text-amber-900/90 dark:text-amber-200 leading-relaxed">
              Invitation codes expire after 7 days. If a code expires before your teammate accepts, generate a fresh code under <strong className="text-amber-950 dark:text-amber-100 font-semibold">Add Team Members</strong>.
            </p>
          </div>

          <div className="pt-4 space-y-1">
            <p className="font-semibold text-amber-950 dark:text-amber-100">Email verification link missing</p>
            <p className="text-amber-900/90 dark:text-amber-200 leading-relaxed">
              Check your spam or junk folder. If you registered using Google Sign In, email verification is handled automatically and no confirmation link is required.
            </p>
          </div>
        </div>
      </div>
    </DocsBlock>
  );
}

export function FaqContent() {
  return (
    <DocsBlock id="faq" title="Frequently Asked Questions">
      <p className="text-ink-muted text-[1.02rem] leading-relaxed mb-4">
        Answers to common questions about installing, authenticating, configuring workspace preferences, and building with the AroPath API and SDKs.
      </p>

      {/* Accordion in darker/warm card container */}
      <div className="rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 shadow-soft p-2">
        <Accordion items={DOCS_FAQ} />
      </div>

      {/* FAQ Categories Overview Card */}
      <div className="mt-8 rounded-xl2 border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/25 p-6 sm:p-7 shadow-soft space-y-4">
        <h3 className="font-display text-base font-medium text-amber-950 dark:text-amber-100">
          FAQ Quick Reference Categories
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 space-y-1">
            <p className="font-bold text-amber-950 dark:text-amber-100">Installation & CDN Script</p>
            <p className="text-amber-900/90 dark:text-amber-200">Asynchronous loading, sub-30ms edge latency, &lt;3KB file size, domain tracking.</p>
          </div>
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 space-y-1">
            <p className="font-bold text-amber-950 dark:text-amber-100">Authentication & Security</p>
            <p className="text-amber-900/90 dark:text-amber-200">Public tracking_key vs secret AROPATH_API_KEY, key rotation, email verification.</p>
          </div>
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 space-y-1">
            <p className="font-bold text-amber-950 dark:text-amber-100">Team Collaboration</p>
            <p className="text-amber-900/90 dark:text-amber-200">7-day invitation codes, joining projects, workspace preferences (Country, Teal/Indigo, Light/Dark).</p>
          </div>
          <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/20 space-y-1">
            <p className="font-bold text-amber-950 dark:text-amber-100">Analytics & Reporting</p>
            <p className="text-amber-900/90 dark:text-amber-200">AI Insights conversion lift scoring, automated weekly/monthly/quarterly/annual PDF exportable reports.</p>
          </div>
        </div>
      </div>
    </DocsBlock>
  );
}

const TOPIC_MAP: Record<string, React.ComponentType> = {
  "quick-start": QuickStartContent,
  installation: InstallationContent,
  authentication: AuthenticationContent,
  "api-reference": ApiReferenceContent,
  sdks: SdksContent,
  guides: GuidesContent,
  "best-practices": BestPracticesContent,
  changelog: ChangelogContent,
  "help-support": HelpSupportContent,
  help: HelpSupportContent,
  faq: FaqContent,
};

export function TopicContent({ slug }: { slug: string }) {
  const Component = TOPIC_MAP[slug];
  if (!Component) {
    return (
      <div className="py-12">
        <h2 className="font-display text-2xl font-medium text-ink">Topic Not Found</h2>
        <p className="mt-3 text-ink-muted">The requested documentation section could not be found.</p>
      </div>
    );
  }
  return <Component />;
}

