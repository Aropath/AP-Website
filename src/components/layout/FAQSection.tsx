import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  id?: string;
  title?: string;
  items: FAQItem[];
}

export function FAQSection({
  id = "faq",
  title = "Frequently asked questions",
  items,
}: FAQSectionProps) {
  return (
    <section id={id} className="py-24">
      <Container size="narrow">
        <SectionHeader eyebrow="FAQ" title={title} />
        <div className="mt-14">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
