import { CodeBlock } from "@/components/ui/CodeBlock";
import {
  INSTALL_SNIPPET,
  AUTH_SNIPPET,
  QUICKSTART_SNIPPET,
  SDKS,
  HTML_SNIPPET,
} from "@/constants/docs";
import { LifeBuoy, Mail, MessageSquare } from "lucide-react";

function DocsBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 border-b border-line py-12 first:pt-0 last:border-b-0">
      <h2 className="font-display text-2xl font-medium text-ink">{title}</h2>
      <div className="mt-5 flex flex-col gap-5 text-[1.02rem] leading-relaxed text-ink-muted">
        {children}
      </div>
    </div>
  );
}

export function DocsContent() {
  return (
    <div>
      <DocsBlock id="quick-start" title="Quick start">
        <p>
          Drop our lightweight tracking script in your HTML header or call our Node.js SDK to stream visitor session and conversion events in minutes.
        </p>
        <CodeBlock code={QUICKSTART_SNIPPET} language="typescript" />
      </DocsBlock>

      <DocsBlock id="installation" title="Installation">
        <p>Choose the installation path that matches your tech stack. For standard websites, use our CDN script. For single-page apps or backend routing, install our npm package.</p>
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">HTML Script Tag</p>
          <CodeBlock code={HTML_SNIPPET} language="html" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">SDK Node Package</p>
          <CodeBlock code={INSTALL_SNIPPET} language="bash" />
        </div>
      </DocsBlock>

      <DocsBlock id="authentication" title="Authentication">
        <p>
          SDK requests are authenticated via your project API keys. Public tracking script requests use your project&apos;s public tracking ID, which is safe to expose in client-side HTML.
        </p>
        <CodeBlock code={AUTH_SNIPPET} language="typescript" />
      </DocsBlock>

      <DocsBlock id="api-reference" title="API reference">
        <p>
          Our REST API allows you to send events directly from your backend servers, fetch growth checklists programmatically, or export monthly reports.
        </p>
        <div className="overflow-hidden rounded-xl2 border border-line">
          <table className="w-full text-sm">
            <thead className="bg-bg-secondary text-left text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="px-4 py-3">Endpoint</th>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-card">
              <tr>
                <td className="px-4 py-3 font-mono text-xs">/v1/events/track</td>
                <td className="px-4 py-3">POST</td>
                <td className="px-4 py-3">Tracks a custom conversion event with transaction value.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">/v1/insights</td>
                <td className="px-4 py-3">GET</td>
                <td className="px-4 py-3">Retrieves prioritized growth checklist recommendations.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">/v1/reports</td>
                <td className="px-4 py-3">GET</td>
                <td className="px-4 py-3">Lists and downloads generated weekly and monthly PDF reports.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBlock>

      <DocsBlock id="sdks" title="SDKs">
        <p>Integrate directly using official libraries for popular languages and tools.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {SDKS.map((sdk) => (
            <div key={sdk.name} className="rounded-xl2 border border-line bg-card p-4">
              <p className="font-display text-sm font-medium text-ink">{sdk.name}</p>
              <code className="mt-1.5 block font-mono text-xs text-ink-muted leading-relaxed break-all">
                {sdk.install}
              </code>
            </div>
          ))}
        </div>
      </DocsBlock>

      <DocsBlock id="guides" title="Guides & Tutorials">
        <p>
          Step-by-step guides for common analytical flows: e-commerce checkout optimization, SaaS registration flow analysis, and setting up automated client-ready PDF summaries.
        </p>
      </DocsBlock>

      <DocsBlock id="best-practices" title="Best practices">
        <p>
          Load the client script tag asynchronously to avoid blocking page rendering, rotate API keys periodically for security, and attach numeric transaction values to purchase events to generate accurate ROI calculations.
        </p>
      </DocsBlock>

      <DocsBlock id="changelog" title="Changelog">
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <span className="font-mono text-xs font-semibold text-teal-logo uppercase">v1.2.0 · July 2026</span>
            <p className="mt-1 text-ink font-medium">Added automatic funnel bottleneck scoring</p>
            <p className="text-ink-muted text-xs">AI Insights engine now scores all checklist recommendations with estimated percentage conversion lifts.</p>
          </div>
          <div className="border-t border-line pt-4">
            <span className="font-mono text-xs font-semibold text-ink-muted uppercase">v1.1.5 · June 2026</span>
            <p className="mt-1 text-ink font-medium">CDN Script optimization</p>
            <p className="text-ink-muted text-xs">Reduced tracking script file size to 2.8KB, improving performance and Lighthouse scores.</p>
          </div>
        </div>
      </DocsBlock>

      <DocsBlock id="help" title="Help & Support">
        <div className="grid gap-4 sm:grid-cols-3">
          <a href="mailto:support@aropath.com" className="flex flex-col items-start gap-2 rounded-xl2 border border-line bg-card p-5 transition-colors hover:border-saffron-hover">
            <MessageSquare className="h-5 w-5 text-ink" />
            <span className="font-display text-sm font-medium text-ink">Community forum</span>
          </a>
          <a href="mailto:support@aropath.com" className="flex flex-col items-start gap-2 rounded-xl2 border border-line bg-card p-5 transition-colors hover:border-saffron-hover">
            <Mail className="h-5 w-5 text-ink" />
            <span className="font-display text-sm font-medium text-ink">Email support</span>
          </a>
          <a href="mailto:support@aropath.com" className="flex flex-col items-start gap-2 rounded-xl2 border border-line bg-card p-5 transition-colors hover:border-saffron-hover">
            <LifeBuoy className="h-5 w-5 text-ink" />
            <span className="font-display text-sm font-medium text-ink">Dedicated SLA</span>
          </a>
        </div>
      </DocsBlock>
    </div>
  );
}
