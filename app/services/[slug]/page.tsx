import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { getServiceSeo } from "@/content/serviceSeo";
import { SERVICES, getService } from "@/content/services";
import { PROCESS_STEPS } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  professionalServiceJsonLd,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const seo = getServiceSeo(slug);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.outcome}
        primaryCta={{ href: "/contact", label: "Start a project" }}
        secondaryCta={{ href: "/case-studies", label: "See work" }}
      />
      {seo ? <AnswerCapsule>{seo.answer}</AnswerCapsule> : null}
      <section className="py-16">
        <Container>
          <Image
            src={service.image}
            alt={`${service.title} at EL-HUB VENTURES`}
            width={1200}
            height={640}
            priority
            className="mb-12 max-h-80 w-full object-cover"
          />
          <h2 className="font-display text-3xl text-ink">What does {service.title.toLowerCase()} include?</h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-muted">{service.summary}</p>
          {seo ? <p className="mt-6 max-w-3xl text-ink-muted">{seo.longDescription}</p> : null}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <article key={capability.title} className="border border-rule bg-paper-raised p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink">{capability.title}</h3>
                <p className="mt-3 text-ink-muted">{capability.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      {seo?.definitions.length ? (
        <section id="definitions" className="border-t border-rule py-16">
          <Container>
            <h2 className="font-display text-3xl text-ink">How do we define the core terms?</h2>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {seo.definitions.map((item) => (
                <div key={item.term} className="border border-rule bg-paper-raised p-6">
                  <dt className="font-display text-xl text-ink">{item.term}</dt>
                  <dd className="mt-3 text-ink-muted">{item.meaning}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}
      <section className="border-y border-rule bg-paper-raised py-16">
        <Container>
          <h2 className="font-display text-3xl text-ink">How does an engagement run?</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <li key={step.number}>
                <p className="text-xs font-semibold text-gold">{step.number}</p>
                <h3 className="mt-2 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      {seo?.faqs.length ? (
        <section id="faq" className="py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl text-ink">FAQs about {service.title.toLowerCase()}</h2>
            <div className="mt-8">
              <FaqList items={seo.faqs} />
            </div>
          </Container>
        </section>
      ) : null}
      <section className="py-16">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-ink">Where should you go next?</h2>
            <p className="mt-2 text-ink-muted">
              <Link href="/case-studies" className="hover:text-gold">
                delivery examples and case studies
              </Link>
              <span className="mx-2">·</span>
              <Link href="/resources" className="hover:text-gold">
                technical insights hub
              </Link>
              <span className="mx-2">·</span>
              <Link href="/services" className="hover:text-gold">
                all digital services
              </Link>
              <span className="mx-2">·</span>
              <Link href="/contact" className="hover:text-gold">
                start a project brief
              </Link>
            </p>
          </div>
          <Button href="/contact">Begin this engagement</Button>
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <JsonLd
        data={professionalServiceJsonLd({
          name: service.title,
          description: service.seoDescription,
          path: `/services/${service.slug}`,
        })}
      />
      {seo ? <JsonLd data={faqJsonLd(seo.faqs)} /> : null}
    </>
  );
}
