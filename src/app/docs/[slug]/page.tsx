import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicContent } from "@/components/docs/DocsContent";
import { DOCS_NAV } from "@/constants/docs";

interface TopicPageProps {
  params: { slug: string };
}

const VALID_SLUGS = [
  "quick-start",
  "installation",
  "authentica tion",
  "api-reference",
  "sdks",
  "guides",
  "best-practices",
  "changelog",
  "help-support",
  "faq",
];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: TopicPageProps): Metadata {
  const { slug } = params;

  let title = "Documentation";
  for (const section of DOCS_NAV) {
    const found = section.items.find((item) => item.slug === slug);
    if (found) {
      title = found.title;
      break;
    }
  }

  return {
    title: `${title} | AroPath Docs`,
    description: `${title} documentation for AroPath analytics and session tracking platform.`,
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const { slug } = params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  return <TopicContent slug={slug} />;
}
