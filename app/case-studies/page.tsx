import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { CASE_STUDIES } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Delivery examples across web apps, mobile, commerce, and SEO-led growth — metrics-focused snapshots from EL-HUB VENTURES.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Measured delivery. Documented outcomes."
        description="These are delivery examples with stacks, timelines, and before/after metrics. They are not attributed client testimonials."
        primaryCta={{ href: "/contact", label: "Start a project" }}
      />
      <section className="py-20">
        <Container className="space-y-8">
          {CASE_STUDIES.map((study) => (
            <article key={study.slug} className="border border-rule bg-paper-raised p-8">
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
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
