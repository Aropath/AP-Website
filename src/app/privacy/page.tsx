import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection guidelines for AroPath.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: July 17, 2026. Learn how we collect, process, and protect your website visitor data."
      />
      <section className="pb-28 pt-8">
        <Container className="max-w-3xl">
          <div className="prose prose-slate max-w-none text-ink-muted [&>h2]:font-display [&>h2]:text-xl [&>h2]:font-medium [&>h2]:text-ink [&>h2]:mt-12 [&>h2]:mb-4 [&>p]:leading-relaxed [&>p]:mb-6">
            <h2>1. Introduction</h2>
            <p>
              AroPath (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our website analytics and growth-planning platform.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect information to provide better services to all our users. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
              <li><strong>Account Information:</strong> When you sign up, we collect your name, email address, billing information, and credentials.</li>
              <li><strong>Website Visitor Data:</strong> Through our SDK and tracking scripts, we collect anonymous visitor session activity, pageviews, conversion events, and device metadata to compute analytics.</li>
              <li><strong>Service Usage Data:</strong> We record access logs, settings modifications, and API call volumes for security, performance auditing, and billing calculations.</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>
              We use the collected data to operate our analytics platform, score session outcomes, generate prioritized growth checklist items, compile weekly/monthly reports, and prevent fraud or system abuse.
            </p>

            <h2>4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, rent, or trade your personal or visitor data. We share information only with trusted sub-processors necessary to run our infrastructure (e.g., cloud hosts, payment gateways) or as required by law.
            </p>

            <h2>5. Security</h2>
            <p>
              All customer and visitor data is encrypted in transit and at rest using industry-standard cryptography (TLS 1.3 and AES-256). We enforce strict authorization controls on all databases and API endpoints.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Depending on your location (e.g., under the GDPR or CCPA), you may have rights to access, update, delete, or export your account information. You can manage these preferences directly in your dashboard or by contacting support.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
