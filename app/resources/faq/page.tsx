import type { Metadata } from "next";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { SERVICE_SEO } from "@/content/serviceSeo";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { FAQS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "FAQ Hub",
  description:
    "Answers about EL-HUB VENTURES services, locations, SEO, engagement models, and how to start a project.",
  path: "/resources/faq",
});

export default function FaqHubPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/resources" },
    { name: "FAQ", href: "/resources/faq" },
  ];
  const items = [...FAQS, ...SERVICE_SEO.flatMap((s) => s.faqs)];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="FAQ"
        title="What do operators usually ask before a brief?"
        description="Company questions plus service-specific answers. Schema is attached so search and AI engines can extract Q&A pairs."
      />
      <AnswerCapsule>
        EL-HUB VENTURES is a Nigeria-headquartered web and mobile engineering firm with hubs in Canada, the UK, and
        Cameroon. This hub compiles company FAQs and service FAQs in one crawlable page with FAQPage structured data.
      </AnswerCapsule>
      <section id="faq" className="py-16">
        <Container className="max-w-3xl">
          <FaqList items={items} />
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <JsonLd data={faqJsonLd(items)} />
    </>
  );
}
