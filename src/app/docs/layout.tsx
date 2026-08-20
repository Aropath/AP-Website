import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SearchBar } from "@/components/docs/SearchBar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

export const metadata: Metadata = {
  title: "Docs | AroPath",
  description:
    "Everything you need to install, authenticate, and build with the Aropath API and SDKs.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Container className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <DocsSidebar />
          <div className="min-w-0 flex-1">{children}</div>
        </Container>
      </section>
    </>
  );
}
