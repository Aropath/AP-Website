import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "Learn how AroPath utilizes cookies and tracking technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookies Policy"
        description="Last updated: July 17, 2026. This policy describes how we use cookies and web tracking technologies."
      />
      <section className="py-24">
        <Container className="max-w-3xl">
          <div className="prose prose-slate max-w-none text-ink-muted [&>h2]:font-display [&>h2]:text-xl [&>h2]:font-medium [&>h2]:text-ink [&>h2]:mt-12 [&>h2]:mb-4 [&>p]:leading-relaxed [&>p]:mb-6">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files placed on your device to store data that can be recalled by a web server. We use cookies and similar identifiers (like localStorage) to recognize returning visitors, session durations, and checkout event links.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              AroPath uses cookies for two main purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
              <li><strong>Essential Credentials:</strong> To store your account login state, workspace tokens, and settings preferences.</li>
              <li><strong>Analytics Attribution:</strong> Used by our tracking script to recognize unique user sessions, tie sequential pageviews together, and attribute actions to specific visitor pathways.</li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>
              We do not permit third-party advertising cookies on our services. Only our internal analytics script and secure sub-processors (like Stripe for checkout billing session storage) place identifiers on your site visitors.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and disable cookies in your browser settings. However, note that if you reject essential login cookies, you will not be able to log in or use the AroPath studio workspace.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
