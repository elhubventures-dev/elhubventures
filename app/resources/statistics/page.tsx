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
  title: "Nigeria digital statistics: how to read public ICT data",
  description:
    "How operators should use ITU, World Bank, and NBS figures when briefing a web development agency in Nigeria — with live source links, not invented metrics.",
  path: "/resources/statistics",
  type: "article",
});

const FAQS = [
  {
    question: "Can an agency quote a single “Nigeria internet penetration” number in a pitch?",
    answer:
      "Only if they name the publisher, year, and indicator. ITU and the World Bank publish overlapping series that can differ by vintage. Link the source; do not round unaudited marketing claims into a headline.",
  },
  {
    question: "Where should we look first?",
    answer:
      "ITU country dashboards and the World Bank indicator Individuals using the Internet (% of population). For Nigeria-specific survey releases, use the National Bureau of Statistics.",
  },
  {
    question: "Do EL-HUB VENTURES project counts replace public statistics?",
    answer:
      "No. Delivery examples on this site are labelled as such. Public ICT series describe markets; they do not prove a vendor’s win rate.",
  },
];

export default function StatisticsPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/resources" },
    { name: "Statistics", href: "/resources/statistics" },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Statistics"
        title="What do public reports actually say about digital access in Nigeria?"
        pullQuote="A reading guide for operators who are briefed with impressive percentages. Every figure below is tied to a live publisher URL."
      />
      <AnswerCapsule>
        Treat market statistics as sourced time series, not as proof that a web development agency in Nigeria can
        deliver. ITU estimated that 35% of Nigeria’s population used the Internet in 2022. Always re-check the World
        Bank and ITU pages for the latest year before you put a number in a board pack.
      </AnswerCapsule>
      <section className="py-16">
        <Container className="max-w-3xl space-y-8 text-ink-muted">
          <h2 className="font-display text-3xl text-ink">What do ITU and the World Bank publish?</h2>
          <p>
            The International Telecommunication Union compiles ICT access and use indicators, including individuals
            using the Internet. Nigeria’s Digital Development Dashboard states{" "}
            <strong className="text-ink">individuals using the Internet, total (2022, ITU estimate): 35%</strong>. Read
            the PDF yourself:{" "}
            <a
              className="font-semibold text-ink hover:text-gold"
              href="https://www.itu.int/en/ITU-D/Statistics/Documents/DDD/ddd_NGA.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              ITU Digital Development Dashboard — Nigeria (PDF)
            </a>
            . ITU’s global statistics landing page is{" "}
            <a
              className="font-semibold text-ink hover:text-gold"
              href="https://www.itu.int/en/ITU-D/Statistics/pages/stat/default.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              ITU Statistics
            </a>
            .
          </p>
          <p>
            The World Bank republishes the ITU series as indicator{" "}
            <code className="text-ink">IT.NET.USER.ZS</code> (individuals using the Internet, % of population). Open the
            latest country year on{" "}
            <a
              className="font-semibold text-ink hover:text-gold"
              href="https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=NG"
              rel="noopener noreferrer"
              target="_blank"
            >
              World Bank — Individuals using the Internet (Nigeria)
            </a>
            . If the year on that page is newer than 2022, use that vintage in your memo and cite the date you accessed
            it.
          </p>
          <p>
            For Nigeria-produced survey and economic releases, start at the{" "}
            <a
              className="font-semibold text-ink hover:text-gold"
              href="https://www.nigerianstat.gov.ng/"
              rel="noopener noreferrer"
              target="_blank"
            >
              National Bureau of Statistics
            </a>
            . Do not scrape a slide from an agency pitch and treat it as NBS.
          </p>

          <h2 className="font-display text-3xl text-ink">How should operators read agency “project count” claims?</h2>
          <p>
            Public ICT indicators describe <em>access and use in a population</em>. They do not measure software quality,
            conversion, or whether a vendor shipped on time. When a{" "}
            <Link href="/services/web-development" className="font-semibold text-ink hover:text-gold">
              web development agency in Nigeria
            </Link>{" "}
            quotes “50+ projects” or “99% satisfaction,” ask for the definition (what counts as a project, who was
            surveyed, over which period). EL-HUB VENTURES labels delivery examples on the{" "}
            <Link href="/case-studies" className="font-semibold text-ink hover:text-gold">
              work page
            </Link>{" "}
            so they are not mistaken for audited market statistics.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Prefer a named indicator, publisher, and year over a round marketing percentage.</li>
            <li>Separate demand (who is online) from delivery (who can build a production system).</li>
            <li>Re-pull World Bank/ITU before annual planning; series revise.</li>
          </ul>

          <h2 className="font-display text-3xl text-ink">What this page will not do</h2>
          <p>
            We will not invent traffic, GDP-digital, or “agency market size” numbers. If a figure is not on the linked
            pages, it does not belong in a citation-ready brief. For implementation work, start from{" "}
            <Link href="/contact" className="font-semibold text-ink hover:text-gold">
              a project brief
            </Link>
            .
          </p>
        </Container>
      </section>
      <section id="faq" className="border-t border-rule py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl text-ink">FAQs about using statistics in pitches</h2>
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
