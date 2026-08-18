import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { TRUSTED_COMPANIES } from "@/constants/home";

export function TrustedCompanies() {
  return (
    <section className="border-y border-line/70 py-24">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
        Trusted by operations teams at
      </p>
      <LogoMarquee items={TRUSTED_COMPANIES} />
    </section>
  );
}
