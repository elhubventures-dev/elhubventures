import type { Metadata } from "next";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/content/case-studies";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Delivery examples across web apps, mobile, commerce, and SEO-led growth — metrics-focused snapshots from EL-HUB VENTURES.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/case-studies" },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Work"
        title="Measured delivery. Documented outcomes."
        pullQuote="These are delivery examples with stacks, timelines, and before/after metrics. They are not attributed client testimonials."
      />
      <AnswerCapsule>
        EL-HUB VENTURES case studies are labelled delivery examples with stacks, timelines, and before/after metrics.
        They illustrate how web, mobile, commerce, and SEO programs are run — they are not attributed client
        testimonials.
      </AnswerCapsule>
      <section className="py-20">
        <Container className="space-y-8">
          {CASE_STUDIES.map((study, index) => (
            <Reveal key={study.slug} delay={Math.min(index, 6) * 40} as="article" className="card-surface p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{study.sector}</p>
              <h2 className="mt-3 font-display text-3xl text-ink">{study.title}</h2>
              <p className="mt-4 text-sm text-ink-muted">
                <strong className="text-ink">Timeline:</strong> {study.timeline}
                <span className="mx-2">·</span>
                <strong className="text-ink">Stack:</strong> {study.stack}
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <p className="text-ink-muted">
                  <strong className="block text-ink">Before</strong>
                  {study.before}
                </p>
                <p className="text-ink-muted">
                  <strong className="block text-ink">After</strong>
                  {study.after}
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.metrics.map((metric) => (
                  <li key={metric} className="border border-rule px-3 py-1 text-sm text-ink">
                    {metric}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-ink-muted">
                <strong className="text-ink">Business impact:</strong> {study.impact}
              </p>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
    </>
  );
}
