import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service and platform usage guidelines for AroPath.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: July 17, 2026. Please read these terms carefully before using our platform."
      />
      <section className="py-24">
        <Container className="max-w-3xl">
          <div className="prose prose-slate max-w-none text-ink-muted [&>h2]:font-display [&>h2]:text-xl [&>h2]:font-medium [&>h2]:text-ink [&>h2]:mt-12 [&>h2]:mb-4 [&>p]:leading-relaxed [&>p]:mb-6">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using AroPath, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using our services.
            </p>

            <h2>2. Account Registration and Security</h2>
            <p>
              To use the platform, you must create a secure account. You are responsible for keeping your account passwords and API keys secure. Any action taken under your credentials is your responsibility.
            </p>

            <h2>3. License and Restrictions</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access our platform and integrate our tracking scripts onto your websites. You may not:
            </p>
            <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
              <li>Reverse engineer or decompile the tracking SDK or API.</li>
              <li>Use the services to collect personal information from individuals under 13 years old.</li>
              <li>Exceed the usage volumes (visits, active scripts) allowed in your pricing plan.</li>
            </ul>

            <h2>4. Payments and Billing</h2>
            <p>
              Paid plans are billed in advance on a recurring monthly or annual basis. All fees are non-refundable unless stated otherwise. If you exceed your plan&apos;s visit limit, we reserve the right to prompt an upgrade or temporarily pause collection.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              AroPath is provided &quot;as is&quot; without warranties of any kind. We are not liable for any lost revenue, site downtime, or data loss associated with the integration of our scripts.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Delaware, without regard to conflict of laws principles.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
