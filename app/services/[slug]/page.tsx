import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PROCESS_STEPS } from "@/lib/site";
import { SERVICES, getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

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

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.outcome}
        primaryCta={{ href: "/contact", label: "Start a project" }}
        secondaryCta={{ href: "/case-studies", label: "See work" }}
      />
      <section className="py-16">
        <Container>
          <Image
            src={service.image}
            alt={`${service.title} illustration`}
            width={1200}
            height={640}
            className="mb-12 max-h-80 w-full object-cover"
          />
          <p className="max-w-3xl text-lg text-ink-muted">{service.summary}</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <article key={capability.title} className="border border-rule bg-paper-raised p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink">{capability.title}</h2>
                <p className="mt-3 text-ink-muted">{capability.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-rule bg-paper-raised py-16">
        <Container>
          <h2 className="font-display text-3xl text-ink">How an engagement runs</h2>
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
      <section className="py-16">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-ink">Related</h2>
            <p className="mt-2 text-ink-muted">
              <Link href="/case-studies" className="hover:text-gold">
                Case studies
              </Link>
              <span className="mx-2">·</span>
              <Link href="/resources" className="hover:text-gold">
                Insights
              </Link>
              <span className="mx-2">·</span>
              <Link href="/services" className="hover:text-gold">
                All services
              </Link>
            </p>
          </div>
          <Button href="/contact">Begin this engagement</Button>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
