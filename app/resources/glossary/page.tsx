import type { Metadata } from "next";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SERVICE_SEO } from "@/content/serviceSeo";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Digital Product Glossary",
  description:
    "Short definitions of web development, SEO, GEO, SaaS, CI/CD, and related terms used across EL-HUB VENTURES services.",
  path: "/resources/glossary",
});

const EXTRA = [
  {
    term: "Generative Engine Optimization (GEO)",
    meaning:
      "Structuring pages with answer capsules, FAQ schema, and crawlable HTML so AI search systems can cite the source.",
  },
  {
    term: "Core Web Vitals",
    meaning: "Google’s field metrics for LCP, INP, and CLS that affect search quality and user experience.",
  },
  {
    term: "Canonical URL",
    meaning: "The preferred version of a page when similar URLs exist; search engines should index this one.",
  },
];

export default function GlossaryPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/resources" },
    { name: "Glossary", href: "/resources/glossary" },
  ];
  const terms = [...SERVICE_SEO.flatMap((s) => s.definitions), ...EXTRA].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Glossary"
        title="What do these engineering and SEO terms mean?"
        description="100–200 word definitions are summarized here so humans and AI crawlers share the same vocabulary."
      />
      <AnswerCapsule>
        This glossary defines the product, cloud, and SEO terms EL-HUB VENTURES uses on service and insight pages. Each
        entry is a plain-language definition intended for operators and for generative search citation.
      </AnswerCapsule>
      <section className="py-16">
        <Container>
          <dl className="grid gap-6 sm:grid-cols-2">
            {terms.map((item) => (
              <div key={item.term} id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="border border-rule p-6">
                <dt className="font-display text-xl text-ink">{item.term}</dt>
                <dd className="mt-3 text-ink-muted">{item.meaning}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
    </>
  );
}
