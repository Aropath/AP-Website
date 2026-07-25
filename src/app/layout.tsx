import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const SITE_URL = "https://aropath.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AroPath — The path from data to revenue",
    template: "%s · AroPath",
  },
  description:
    "AroPath is the AI-native website analytics platform that automatically tracks user sessions and conversion drop-offs to generate a prioritized, actionable growth plan to lift site revenue.",
  keywords: [
    "AI website analytics",
    "conversion optimization",
    "funnel analysis",
    "session tracking",
    "AroPath",
  ],
  openGraph: {
    title: "AroPath — The path from data to revenue",
    description:
      "Track visitor sessions, pinpoint conversion drop-offs, and receive an automated AI growth plan to increase revenue.",
    url: SITE_URL,
    siteName: "AroPath",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AroPath Analytics Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AroPath — The path from data to revenue",
    description:
      "Track visitor sessions, pinpoint conversion drop-offs, and receive an automated AI growth plan to increase revenue.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg font-body text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
