import type { Metadata } from "next";
import Image from "next/image";
import { CertificateButton } from "@/components/layout/CertificateButton";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { HubCard } from "@/components/ui/HubCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ENGAGEMENT_MODELS, FAQS, HUBS, PROCESS_STEPS, TEAM } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, personGraphJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "EL-HUB VENTURES is a web and mobile engineering partner at 12 Garba A Idris St, Kado, Abuja, with hubs in Canada, the UK, and Cameroon.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="About"
        title="A delivery firm for operators who need production software."
        description="We combine product engineering, design, cloud, and technical SEO. Headquarters in Abuja, with commercial hubs in Canada, the United Kingdom, and Cameroon."
        primaryCta={{ href: "/contact", label: "Start a project" }}
      />
      <AnswerCapsule>
        EL-HUB VENTURES is a web and mobile engineering firm at 12 Garba A Idris St, Kado, Abuja 900108, Nigeria, with
        commercial hubs in Canada, the United Kingdom, and Cameroon. The team ships production software, cloud
        infrastructure, and technical SEO programs for operators who need measurable delivery rather than agency theatre.
      </AnswerCapsule>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="How we work" title="A four-stage delivery cadence." />
          <h2 className="sr-only">How does delivery work?</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 50} as="li" className="border-t border-gold-soft pt-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">{step.number}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-rule bg-paper-raised py-20">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="The people running delivery."
            description="Internal leadership. Delivery examples on the Work page are separate from these profiles."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TEAM.map((member, index) => (
              <Reveal key={member.name} delay={index * 50} as="article" className="card-surface group p-6">
                <div className="img-zoom mb-5">
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    width={640}
                    height={400}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-gold">{member.role}</p>
                <p className="mt-3 text-ink-muted">{member.bio}</p>
                <p className="mt-4 text-xs text-ink-muted">{member.credentials.join(" · ")}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Engagement" title="Commercial models." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <Reveal key={model.title} delay={index * 50} as="article" className="card-surface p-6">
                <h3 className="font-display text-2xl text-ink">{model.title}</h3>
                <p className="mt-3 text-ink-muted">{model.body}</p>
                <p className="mt-5 font-semibold text-ink">{model.price}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Communication: weekly sprint demos, async daily updates, bi-weekly leadership check-ins.
            Support SLA: critical in 1 hour, high in 4 hours, standard next business day.
          </p>
        </Container>
      </section>

      <section className="border-y border-rule bg-paper-raised py-20">
        <Container>
          <SectionHeader eyebrow="Offices" title="Four hubs, one delivery team." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HUBS.map((hub, index) => (
              <Reveal key={hub.code} delay={index * 50}>
                <HubCard hub={hub} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Registered in Nigeria. <CertificateButton />
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Partnership"
            title="Structured investment partnerships."
            description="For founders who want a governed partnership rather than a one-off build. Terms cover reporting cadence, confidentiality, and exit conditions."
          />
          <p className="mt-8">
            <a href="/contact" className="text-sm font-semibold text-ink hover:text-gold">
              Discuss partnership terms
            </a>
          </p>
        </Container>
      </section>

      <section className="border-t border-rule py-20">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Common questions." />
          <div className="mt-10">
            <FaqList />
          </div>
        </Container>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <JsonLd data={faqJsonLd(FAQS)} />
      {personGraphJsonLd().map((person) => (
        <JsonLd key={person.name as string} data={person} />
      ))}
    </>
  );
}
