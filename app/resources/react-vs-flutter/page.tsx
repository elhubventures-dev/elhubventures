import type { Metadata } from "next";
import Link from "next/link";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "React vs Flutter for MVP 2026",
  description:
    "Compare React Native and Flutter for an MVP: talent, UI, stores, and when EL-HUB VENTURES recommends each stack.",
  path: "/resources/react-vs-flutter",
});

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to choose React Native vs Flutter for an MVP",
  description: "A practical sequence for picking a cross-platform stack before engineering starts.",
  step: [
    { "@type": "HowToStep", name: "List must-have device APIs", text: "Camera, background location, Bluetooth, or payments that require native modules." },
    { "@type": "HowToStep", name: "Map the team’s existing skills", text: "React shops usually ship faster on React Native; Dart/Flutter shops keep one visual language." },
    { "@type": "HowToStep", name: "Prototype the hardest screen", text: "Motion-heavy or custom-canvas UI often favors Flutter; web-shared components favor React Native." },
    { "@type": "HowToStep", name: "Price store and backend work", text: "Include listings, CI, and API work so the MVP budget is honest." },
  ],
};

export default function ComparisonPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/resources" },
    { name: "React vs Flutter", href: "/resources/react-vs-flutter" },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Comparison"
        title="React Native vs Flutter: which stack fits an MVP in 2026?"
        pullQuote="A decision page for founders, not a framework war. EL-HUB VENTURES implements both."
      />
      <AnswerCapsule>
        Choose Flutter when you need a highly custom, consistent UI on iOS and Android from one codebase. Choose React
        Native when your team already ships React on the web and wants shared talent and libraries. Native Swift/Kotlin
        still wins when a single platform or deep OS APIs dominate the product.
      </AnswerCapsule>
      <section className="py-16">
        <Container className="max-w-3xl space-y-8">
          <h2 className="font-display text-3xl text-ink">How do the two options compare?</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule text-left">
                <th className="py-3 pr-4">Dimension</th>
                <th className="py-3 pr-4">React Native</th>
                <th className="py-3">Flutter</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 text-ink">Language</td>
                <td className="py-3 pr-4">JavaScript / TypeScript</td>
                <td className="py-3">Dart</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 text-ink">UI model</td>
                <td className="py-3 pr-4">Native components + JS bridge / new architecture</td>
                <td className="py-3">Skia-rendered widgets</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 text-ink">Best fit</td>
                <td className="py-3 pr-4">Teams already on React</td>
                <td className="py-3">Custom motion and visual consistency</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-ink">When to skip both</td>
                <td className="py-3 pr-4" colSpan={2}>
                  Platform-exclusive products, heavy AR, or OS features that are painful to wrap.
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="font-display text-3xl text-ink">How should you decide in four steps?</h2>
          <ol className="list-decimal space-y-3 pl-5 text-ink-muted">
            <li>List must-have device APIs.</li>
            <li>Map existing engineering skills.</li>
            <li>Prototype the hardest screen.</li>
            <li>Include store listing and backend cost in the MVP budget.</li>
          </ol>
          <p className="text-ink-muted">
            Related:{" "}
            <Link href="/services/mobile-app-development" className="font-semibold text-ink hover:text-gold">
              mobile app development
            </Link>
            ,{" "}
            <Link href="/services/web-development" className="font-semibold text-ink hover:text-gold">
              web development
            </Link>
            , and the{" "}
            <Link href="/contact" className="font-semibold text-ink hover:text-gold">
              project brief
            </Link>
            .
          </p>
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <JsonLd data={howTo} />
    </>
  );
}
