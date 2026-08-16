import Image from "next/image";
import Link from "next/link";
import { CertificateButton } from "@/components/layout/CertificateButton";
import { ProtectedDocLink } from "@/components/layout/ProtectedDocLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { InsightCard } from "@/components/ui/InsightCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getFeaturedServices } from "@/content/services";
import { getLatestPosts } from "@/lib/posts";
import {
  HOME_CASE_STUDIES,
  PARTNER_BADGES,
  PORTFOLIO,
  PROCESS_STEPS,
  PROOF_STATS,
  RESOURCE_HIGHLIGHTS,
  SEO_PILLARS,
  TEAM,
  TESTIMONIALS,
  TRUST_LOGOS,
  TRUST_NOTES,
  TRUST_QUOTES,
  WHY_POINTS,
  WHY_STATS,
  ENGAGEMENT_MODELS,
  FAQS,
} from "@/lib/site";
import { faqJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const services = getFeaturedServices();
  const insights = getLatestPosts(3);

  return (
    <>
      <section className="mesh-hero border-b border-rule pt-28 sm:pt-36">
        <Container className="max-w-4xl pb-16 text-center sm:pb-20">
          <p className="hero-enter mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Nigeria · Canada · United Kingdom · Cameroon
          </p>
          <h1 className="hero-enter hero-enter-d1 font-display text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
            Code. Connect.
            <span className="block text-gold">Conquer.</span>
          </h1>
          <span className="hero-rule mx-auto mt-8 block h-px w-16 bg-gold" aria-hidden="true" />
          <p className="hero-enter hero-enter-d2 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            EL-HUB VENTURES designs, ships, and scales production web and mobile products — then grows
            them with technical SEO — for founders and operators building from Nigeria into global
            markets.
          </p>
          <div className="hero-enter hero-enter-d3 mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact">Start a project</Button>
            <Button href="#portfolio" variant="secondary">
              View our work
            </Button>
          </div>
          <p className="hero-enter hero-enter-d3 mt-6 text-sm text-ink-muted">
            Registered in Nigeria. <CertificateButton label="View CAC certificate" />
          </p>
        </Container>
        <div className="border-t border-rule">
          <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
            {PROOF_STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 60} className="text-center">
                <p className="font-display text-3xl text-ink sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </Reveal>
            ))}
          </Container>
        </div>
      </section>

      <section id="answer" className="border-b border-rule py-8" aria-label="Quick Answer">
        <Container>
          <p className="max-w-4xl text-sm text-ink-muted sm:text-base">
            <strong className="text-ink">Quick Answer:</strong> EL-HUB VENTURES is a web and mobile app
            development agency that designs, builds, and scales production-grade websites and apps while
            running technical SEO programs—serving founders and enterprises from Nigeria (HQ) plus Canada,
            the UK, Cameroon, and international markets.
          </p>
        </Container>
      </section>

      <section className="border-b border-rule py-12">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Trusted by teams building serious digital products
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            {TRUST_LOGOS.map((logo) => (
              <li key={logo}>{logo}</li>
            ))}
          </ul>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {TRUST_QUOTES.map((item, index) => (
              <Reveal key={item.author} delay={index * 60} as="blockquote" className="border-l-2 border-gold pl-4">
                <p className="text-ink">“{item.quote}”</p>
                <footer className="mt-2 text-sm text-ink-muted">{item.author}</footer>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="py-20">
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Services that drive growth."
            description="From concept to deployment, we deliver end-to-end digital solutions engineered for scale."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/services" className="text-sm font-semibold text-ink hover:text-gold">
              View all services
            </Link>
          </p>
        </Container>
      </section>

      <section id="seo" className="border-y border-rule bg-paper-raised py-20">
        <Container>
          <SectionHeader
            eyebrow="SEO growth engine"
            title="Dedicated SEO services that compound results."
            description="A structured SEO execution system built to improve visibility, rankings, and qualified inbound leads month over month. We combine technical SEO, content strategy, and continuous optimization so the right audience can find you."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEO_PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 50} as="article" className="card-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{pillar.badge}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="why-us" className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Why EL-HUB"
              title="Built different. Built to last."
              description="We don't just write code — we engineer market dominance. Every project is treated as a strategic asset designed to scale."
            />
            <ul className="mt-8 space-y-5">
              {WHY_POINTS.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span className="mt-0.5 text-gold" aria-hidden>
                    ✓
                  </span>
                  <div>
                    <strong className="text-ink">{point.title}</strong>
                    <p className="text-ink-muted">{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {WHY_STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 50} className="card-surface p-6">
                <p className="font-display text-3xl text-ink sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="border-y border-rule bg-paper-raised py-20">
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="From vision to victory."
            description="A battle-tested process refined over hundreds of successful launches."
          />
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

      <section id="portfolio" className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Our work"
            title="Projects that speak volumes."
            description="A selection of recent builds that showcase our craft and capability."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PORTFOLIO.map((item, index) => (
              <Reveal key={item.title} delay={index * 50} as="article" className="card-surface group overflow-hidden">
                <div className="img-zoom">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={480}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{item.tag}</p>
                  <h3 className="mt-3 font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-ink-muted">{item.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span key={tech} className="border border-rule px-2 py-1 text-xs text-ink-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="case-studies" className="border-y border-rule bg-paper-raised py-20">
        <Container>
          <SectionHeader
            eyebrow="Case studies"
            title="Results that move revenue."
            description="Not just launches. Real business outcomes backed by measurable delivery."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {HOME_CASE_STUDIES.map((study, index) => (
              <Reveal key={study.title} delay={index * 50} as="article" className="card-surface p-6">
                <h3 className="font-display text-2xl text-ink">{study.title}</h3>
                <p className="mt-3 text-ink-muted">{study.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <li key={metric} className="border border-rule px-2 py-1 text-xs text-ink">
                      {metric}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="mt-8">
            <Button href="/case-studies" variant="secondary">
              View full case studies
            </Button>
          </p>
        </Container>
      </section>

      <section id="engagement-models" className="py-20">
        <Container>
          <SectionHeader eyebrow="Engagement models" title="Flexible delivery, clear commercials." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <Reveal key={model.title} delay={index * 50} as="article" className="card-surface p-6">
                <h3 className="font-display text-2xl text-ink">{model.title}</h3>
                <p className="mt-3 text-ink-muted">{model.body}</p>
                <p className="mt-5 font-semibold text-ink">{model.price}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 space-y-2 text-sm text-ink-muted">
            <p>
              <strong className="text-ink">Communication cadence:</strong> Weekly sprint demos, async daily
              updates, bi-weekly leadership check-ins.
            </p>
            <p>
              <strong className="text-ink">Support SLA:</strong> Critical: 1 hour response, High: 4 hours,
              Standard: next business day.
            </p>
          </div>
        </Container>
      </section>

      <section id="testimonials" className="border-y border-rule bg-paper-raised py-20">
        <Container>
          <SectionHeader eyebrow="Client voices" title="Trusted by ambitious leaders." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} delay={index * 50} as="article" className="card-surface p-6">
                <p className="text-gold" aria-label="5 star rating">
                  ★★★★★
                </p>
                <p className="mt-4 text-ink">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-gold text-sm font-semibold text-paper">
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{item.name}</p>
                    <p className="text-sm text-ink-muted">{item.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="team" className="py-20">
        <Container>
          <SectionHeader eyebrow="Leadership team" title="Builders, strategists, problem solvers." />
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
          <ul className="mt-8 flex flex-wrap gap-3 text-sm text-ink-muted">
            {PARTNER_BADGES.map((badge) => (
              <li key={badge} className="border border-rule px-3 py-2">
                {badge}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="partnership" className="border-y border-rule bg-paper-raised py-20">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Partnership opportunities"
            title="Partner with EL-HUB Ventures."
            description="We collaborate with founders and growth-ready businesses through structured investment partnerships with clear obligations, governance, and ROI expectations."
          />
          <p className="mt-6 text-ink-muted">
            Our partnership framework covers investment terms, performance reporting cadence,
            confidentiality, collateral provisions, dispute resolution, and early exit conditions to
            protect all parties.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProtectedDocLink
              href="/assets/docs/ElHub_Investment_Agreement.pdf"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold tracking-wide text-paper hover:opacity-90"
            >
              Download investment agreement (PDF)
            </ProtectedDocLink>
            <Button href="/contact" variant="secondary">
              Discuss partnership terms
            </Button>
          </div>
        </Container>
      </section>

      <section id="resources" className="py-20">
        <Container>
          <SectionHeader eyebrow="Resources" title="Insights from real delivery work." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {insights.length > 0
              ? insights.map((post, index) => (
                  <Reveal key={post.slug} delay={index * 50}>
                    <InsightCard post={post} />
                  </Reveal>
                ))
              : RESOURCE_HIGHLIGHTS.map((item, index) => (
                  <Reveal key={item.title} delay={index * 50} as="article" className="card-surface p-6">
                    <h3 className="font-display text-xl text-ink">{item.title}</h3>
                    <p className="mt-3 text-ink-muted">{item.body}</p>
                  </Reveal>
                ))}
          </div>
          <p className="mt-8">
            <Link href="/resources" className="text-sm font-semibold text-ink hover:text-gold">
              Browse resource library
            </Link>
          </p>
        </Container>
      </section>

      <section id="faq" className="border-t border-rule py-20">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions."
            description="Straight answers about how we work, where we operate, and how to engage EL-HUB VENTURES."
          />
          <div className="mt-10">
            <FaqList />
          </div>
        </Container>
      </section>

      <section className="border-t border-rule py-8" aria-label="Security and data handling notice">
        <Container className="grid gap-4 text-sm text-ink-muted sm:grid-cols-3">
          {TRUST_NOTES.map((note) => (
            <p key={note.title}>
              <strong className="text-ink">{note.title}:</strong> {note.body}
            </p>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Get a proposal in 48 hours."
        description="Share the problem, timeline, and constraints. We return a scoped proposal within two business days."
      />
      <JsonLd data={faqJsonLd(FAQS)} />
    </>
  );
}
