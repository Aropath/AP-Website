import { Container } from "@/components/layout/Container";
import { StatisticCounter } from "@/components/ui/StatisticCounter";
import { STATS } from "@/constants/home";

export function Statistics() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-2 gap-10 rounded-xl3 border border-line bg-card px-8 py-14 shadow-soft sm:grid-cols-4">
          {STATS.map((stat) => (
            <StatisticCounter key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
