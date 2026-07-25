import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "System Status",
  description: "Real-time system status and uptime metrics for AroPath services.",
};

const services = [
  { name: "Global Event Collector CDN", status: "Operational", uptime: "99.99%" },
  { name: "Real-time Analytics Engine", status: "Operational", uptime: "99.98%" },
  { name: "AI Insight & Recommendations Processor", status: "Operational", uptime: "100.00%" },
  { name: "Customer Dashboard & API", status: "Operational", uptime: "99.97%" },
];

export default function StatusPage() {
  return (
    <>
      <PageHero
        eyebrow="Status"
        title="System Status"
        description="Check real-time performance and historical uptime metrics for all AroPath systems."
      />
      <section className="pb-28 pt-8">
        <Container className="max-w-2xl">
          <div className="rounded-xl3 border border-line bg-card p-8 shadow-soft">
            <div className="flex items-center gap-4 border-b border-line pb-6">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-logo opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-logo" />
              </span>
              <div>
                <h2 className="font-display text-lg font-medium text-ink">All Systems Operational</h2>
                <p className="text-sm text-ink-muted mt-1">Uptime is monitored globally from multiple locations.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-ink">{service.name}</p>
                    <p className="text-xs text-ink-muted mt-0.5">30-day uptime: {service.uptime}</p>
                  </div>
                  <span className="rounded-full bg-teal-logo/10 px-3 py-1 text-xs font-medium text-teal-logo">
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
