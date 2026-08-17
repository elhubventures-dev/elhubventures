import type { Metadata } from "next";
import Link from "next/link";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Web development agency vs freelancer in Nigeria",
  description:
    "When to hire a freelancer versus a delivery firm like EL-HUB VENTURES: scope, handover, SEO, and risk — not a smear on independent specialists.",
  path: "/resources/agency-vs-freelancer",
});

const FAQS = [
  {
    question: "Can we mix a freelancer and a delivery firm?",
    answer:
      "Yes. A specialist (for example a brand illustrator) can sit beside a firm that owns architecture, QA, and launch. Write who owns production incidents in the contract.",
  },
  {
    question: "Is an agency always more expensive?",
    answer:
      "Hourly rates can look higher. Total cost includes rework, missing SEO, and a product nobody can deploy. Compare a scoped proposal to a freelancer’s hours plus your own project management.",
  },
  {
    question: "When should we stay with a freelancer?",
    answer:
      "When one skill is the whole job, the interface is agreed, and you can accept the bus factor of a single person.",
  },
];

export default function AgencyVsFreelancerPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/resources" },
    { name: "Agency vs freelancer", href: "/resources/agency-vs-freelancer" },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Comparison"
        title="Web development agency vs freelancer in Nigeria: which model fits?"
        pullQuote="A commercial choice, not a moral one. EL-HUB VENTURES is a delivery firm; many excellent specialists work independently."
      />
      <AnswerCapsule>
        Hire a freelancer when one well-scoped skill is the whole job. Hire a delivery firm when you need product,
        design, engineering, cloud, and handover under one accountable process. Mix both when a specialist fills a
        gap the firm does not staff.
      </AnswerCapsule>
      <section className="py-16">
        <Container className="max-w-3xl space-y-8">
          <h2 className="font-display text-3xl text-ink">When is a freelancer the right commercial choice?</h2>
          <p className="text-ink-muted">
            Independent specialists are a fit for a landing-page refresh, a single integration, or a design pass when
            you already have production access and someone in-house who can merge the work. You buy speed and a named
            craftsperson. You also buy a single point of failure: holidays, illness, and competing clients.
          </p>
          <h2 className="font-display text-3xl text-ink">When does a delivery firm reduce risk?</h2>
          <p className="text-ink-muted">
            A{" "}
            <Link href="/about" className="font-semibold text-ink hover:text-gold">
              delivery firm
            </Link>{" "}
            is the better default when the product has more than one discipline: web or mobile, identity, payments,
            technical SEO, and a release train. EL-HUB VENTURES runs discover → design → develop → deploy, documents
            the stack, and can retain for growth. That costs more than a weekend WordPress edit. It is cheaper than
            rebuilding an undocumented MVP six months later.
          </p>
          <h2 className="font-display text-3xl text-ink">How do the two models compare?</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule text-left">
                <th className="py-3 pr-4">Dimension</th>
                <th className="py-3 pr-4">Freelancer</th>
                <th className="py-3">Delivery firm</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 text-ink">Scope</td>
                <td className="py-3 pr-4">One skill, agreed interface</td>
                <td className="py-3">Multi-discipline, written process</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 text-ink">Handover</td>
                <td className="py-3 pr-4">Depends on the individual</td>
                <td className="py-3">Repos, environments, runbooks expected</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-3 pr-4 text-ink">SEO / GEO</td>
                <td className="py-3 pr-4">Often extra</td>
                <td className="py-3">Can be in the same engagement</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-ink">Bus factor</td>
                <td className="py-3 pr-4">One person</td>
                <td className="py-3">Team coverage, still verify named leads</td>
              </tr>
            </tbody>
          </table>
          <p className="text-ink-muted">
            Ready to scope either path?{" "}
            <Link href="/contact" className="font-semibold text-ink hover:text-gold">
              Send a brief
            </Link>
            . If the job is clearly one craft, we will say so rather than force a retainer.
          </p>
        </Container>
      </section>
      <section id="faq" className="border-t border-rule py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl text-ink">FAQs about mixing both models</h2>
          <div className="mt-8">
            <FaqList items={FAQS} />
          </div>
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <JsonLd data={faqJsonLd(FAQS)} />
    </>
  );
}
