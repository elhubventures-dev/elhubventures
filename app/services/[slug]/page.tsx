import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
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
      <PageHero eyebrow="Service" title={service.title} pullQuote={service.outcome} />
      {seo ? <AnswerCapsule>{seo.answer}</AnswerCapsule> : null}

      <div className="border-b border-rule bg-paper-raised">
        <Container className="py-10 sm:py-12">
          <Image
            src={service.image}
            alt={`${service.title} at EL-HUB VENTURES`}
            width={1200}
            height={640}
            priority
            className="h-auto w-full object-contain"
          />
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-3xl text-ink">
            What does {service.title.toLowerCase()} include?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-muted">{service.summary}</p>
          {seo ? <p className="mt-6 max-w-3xl text-ink-muted">{seo.longDescription}</p> : null}
          <ol className="mt-12 divide-y divide-rule border-y border-rule">
            {service.capabilities.map((capability, index) => (
              <li key={capability.title} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-ink">{capability.title}</h3>
                  <p className="mt-3 max-w-2xl text-ink-muted">{capability.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {seo?.definitions.length ? (
        <section id="definitions" className="border-t border-rule py-16">
          <Container>
            <h2 className="font-display text-3xl text-ink">How do we define the core terms?</h2>
            <dl className="mt-8 divide-y divide-rule border-y border-rule">
              {seo.definitions.map((item) => (
                <div key={item.term} className="grid gap-3 py-6 sm:grid-cols-[14rem_1fr]">
                  <dt className="font-display text-xl text-ink">{item.term}</dt>
                  <dd className="text-ink-muted">{item.meaning}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}

      <section className="border-y border-rule py-16">
        <Container>
          <h2 className="font-display text-3xl text-ink">How does an engagement run?</h2>
          <ol className="mt-10 divide-y divide-rule border-y border-rule sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {PROCESS_STEPS.map((step) => (
              <li key={step.number} className="py-6 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">{step.number}</p>
                <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {seo?.faqs.length ? (
        <section id="faq" className="py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl text-ink">
              FAQs about {service.title.toLowerCase()}
            </h2>
            <div className="mt-8">
              <FaqList items={seo.faqs} />
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title={`Ready to brief ${service.shortTitle.toLowerCase()} work?`}
        description="Share the problem, timeline, and constraints. We return a scoped proposal within 48 hours."
      />
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
