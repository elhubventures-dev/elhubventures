import type { Metadata } from "next";
import Image from "next/image";
import { CertificateButton } from "@/components/layout/CertificateButton";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
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
        pullQuote="We combine product engineering, design, cloud, and technical SEO. Headquarters in Abuja, with commercial hubs in Canada, the United Kingdom, and Cameroon."
      />
      <AnswerCapsule>
        EL-HUB VENTURES is a web and mobile engineering firm at 12 Garba A Idris St, Kado, Abuja 900108, Nigeria, with
        commercial hubs in Canada, the United Kingdom, and Cameroon. The team ships production software, cloud
        infrastructure, and technical SEO programs for operators who need measurable delivery rather than agency theatre.
      </AnswerCapsule>

      <section className="py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">How we work</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            A four-stage delivery cadence.
          </h2>
          <ol className="mt-12 divide-y divide-rule border-y border-rule sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 50}
                as="li"
                className="py-6 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">{step.number}</p>
                <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-rule py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Leadership</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">The people running delivery.</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Internal leadership. Delivery examples on the Work page are separate from these profiles.
          </p>
          <ul className="mt-12 divide-y divide-rule border-y border-rule">
            {TEAM.map((member, index) => (
              <Reveal key={member.name} delay={index * 50} as="li" className="grid gap-6 py-10 lg:grid-cols-[12rem_1fr]">
                <div className="img-zoom">
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    width={640}
                    height={400}
                    className="h-40 w-full object-cover lg:h-36"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-gold">{member.role}</p>
                  <p className="mt-3 max-w-2xl text-ink-muted">{member.bio}</p>
                  <p className="mt-4 text-xs text-ink-muted">{member.credentials.join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Engagement</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Commercial models.</h2>
          <ol className="mt-12 divide-y divide-rule border-y border-rule">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <Reveal
                key={model.title}
                delay={index * 50}
                as="li"
                className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr_auto]"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-ink">{model.title}</h3>
                  <p className="mt-3 max-w-2xl text-ink-muted">{model.body}</p>
                </div>
                <p className="font-semibold text-ink sm:text-right">{model.price}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-8 text-sm text-ink-muted">
            Communication: weekly sprint demos, async daily updates, bi-weekly leadership check-ins. Support SLA:
            critical in 1 hour, high in 4 hours, standard next business day.
          </p>
        </Container>
      </section>

      <section className="border-y border-rule py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Offices</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Four hubs, one delivery team.</h2>
          <dl className="mt-12 divide-y divide-rule border-y border-rule">
            {HUBS.map((hub) => (
              <div key={hub.code} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
                <dt className="font-display text-xl text-ink">
                  {hub.name}
                  <span className="mt-1 block text-xs font-sans font-semibold uppercase tracking-[0.16em] text-gold">
                    {hub.code}
                  </span>
                </dt>
                <dd className="text-ink-muted">
                  <p>{hub.location}</p>
                  {"phone" in hub && hub.phone ? <p className="mt-2 text-sm">{hub.phone}</p> : null}
                  <a href={`mailto:${hub.email}`} className="mt-1 inline-block text-sm text-ink hover:text-gold">
                    {hub.email}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ink-muted">
            Registered in Nigeria. <CertificateButton />
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Partnership</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Structured investment partnerships.
          </h2>
          <blockquote className="mt-8 border-l-2 border-gold pl-6">
            <p className="font-display text-xl leading-relaxed text-ink">
              For founders who want a governed partnership rather than a one-off build. Terms cover reporting cadence,
              confidentiality, and exit conditions.
            </p>
          </blockquote>
          <p className="mt-8">
            <a href="/contact" className="text-sm font-semibold text-ink hover:text-gold">
              Discuss partnership terms
            </a>
          </p>
        </Container>
      </section>

      <section className="border-t border-rule py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Common questions.</h2>
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
