import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { COMPARISON_FEATURES } from "@/constants/pricing";

export function FeatureComparison() {
  return (
    <section className="py-24">
      <Container size="wide">
        <SectionHeader eyebrow="Compare plans" title="Every plan, side by side" />
        <div className="mt-14 overflow-x-auto rounded-xl2 border border-line shadow-soft">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="px-6 py-4 font-medium">Feature</th>
                <th className="px-6 py-4 font-medium">Starter</th>
                <th className="px-6 py-4 font-medium">Professional</th>
                <th className="px-6 py-4 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-card">
              {COMPARISON_FEATURES.map((row) => (
                <tr key={row.feature}>
                  <td className="px-6 py-4 font-medium text-ink">{row.feature}</td>
                  <td className="px-6 py-4 text-ink-muted">{row.starter}</td>
                  <td className="px-6 py-4 text-ink-muted">{row.professional}</td>
                  <td className="px-6 py-4 text-ink-muted">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
