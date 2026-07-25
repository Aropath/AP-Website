import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SearchBar } from "@/components/docs/SearchBar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsContent } from "@/components/docs/DocsContent";
import { FAQSection } from "@/components/layout/FAQSection";
import { DOCS_FAQ } from "@/constants/docs";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Everything you need to install, authenticate, and build with the Aropath API and SDKs.",
};

export default function DocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Build on Aropath"
        description="Quick starts, API references, and SDKs for every language your team already uses."
      >
        <div className="mt-9 flex justify-center">
          <SearchBar />
        </div>
      </PageHero>

      <section className="pb-28">
        <Container className="flex gap-16">
          <DocsSidebar />
          <div className="min-w-0 flex-1">
            <DocsContent />
          </div>
        </Container>
      </section>

      <FAQSection id="docs-faq" title="Documentation FAQ" items={DOCS_FAQ} />
    </>
  );
}
