import type { Metadata } from "next";
import Link from "next/link";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICE_GROUPS, SERVICES } from "@/content/services";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Digital Services",
  description:
    "Explore EL-HUB VENTURES services: web development, mobile apps, UI/UX, SEO, cloud and DevOps, AI, e-commerce, SaaS, and corporate training.",
  path: "/services",
});

export default function ServicesIndexPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Services"
        title="Product, experience, growth, and platform."
        pullQuote="End-to-end delivery from discovery through launch and retainers. Pick a practice, or start with a brief."
      />
      <AnswerCapsule>
        EL-HUB VENTURES services cover product (web, mobile, commerce, AI), experience (UI/UX), growth (SEO and
        strategy), and platform (cloud and DevOps). Each practice ships with a documented handover and optional retainer.
      </AnswerCapsule>
      <section className="py-20">
        <Container className="space-y-16">
          {SERVICE_GROUPS.map((group) => {
            const items = SERVICES.filter((service) => service.group === group.id);
            return (
              <div key={group.id}>
                <h2 className="font-display text-3xl text-ink">{group.label}</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, index) => (
                    <Reveal key={service.slug} delay={index * 50}>
                      <ServiceCard service={service} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
          <p className="text-sm text-ink-muted">
            Looking for a specific outcome?{" "}
            <Link href="/contact" className="font-semibold text-ink hover:text-gold">
              Send a brief
            </Link>
            .
          </p>
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
    </>
  );
}
