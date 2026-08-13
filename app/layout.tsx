import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyCta } from "@/components/layout/StickyCta";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { organizationJsonLd, pageMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Web & Mobile App Development Agency",
    description:
      "EL-HUB VENTURES builds scalable web apps, mobile products, and technical SEO programs for teams in Nigeria, the USA, the UK, and globally.",
    path: "/",
  }),
  metadataBase: new URL("https://www.elhubventures.com"),
  icons: { icon: "/assets/images/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = organizationJsonLd();

  return (
    <html lang="en" data-theme="light" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <CookieBanner />
          <StickyCta />
          <WhatsAppWidget />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
