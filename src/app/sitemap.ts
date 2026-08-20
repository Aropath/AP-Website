import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aropath.com";
  const routes = [
    "",
    "/features",
    "/docs",
    "/docs/quick-start",
    "/docs/installation",
    "/docs/authentication",
    "/docs/api-reference",
    "/docs/sdks",
    "/docs/guides",
    "/docs/best-practices",
    "/docs/changelog",
    "/docs/help-support",
    "/docs/faq",
    "/pricing",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/docs") ? 0.7 : 0.8,
  }));
}
