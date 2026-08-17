import type { Metadata } from "next";
import Link from "next/link";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { InsightCard } from "@/components/ui/InsightCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { getLivePosts } from "@/lib/posts";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "Resources & Technical Insights",
  description:
    "Technical insights on web architecture, mobile engineering, SEO, cloud DevOps, and digital strategy from EL-HUB VENTURES.",
  path: "/resources",
});

export default function ResourcesPage() {
  const posts = getLivePosts();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/resources" },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Insights"
        title="Resources from live delivery work."
        pullQuote="Architecture, SEO, cloud, and product notes from engagements across Nigeria, North America, the UK, and Cameroon."
      />
      <AnswerCapsule>
        The EL-HUB VENTURES insights hub publishes technical articles on web architecture, mobile engineering, SEO,
        cloud DevOps, and digital strategy. Calendar-gated posts go live on their publish date. Supporting hubs include
        the glossary, FAQ, React vs Flutter comparison, public ICT statistics, and agency vs freelancer.
      </AnswerCapsule>
      <section className="border-b border-rule py-8">
        <Container className="flex flex-wrap gap-4 text-sm">
          <Link href="/resources/glossary" className="font-semibold text-ink hover:text-gold">
            Engineering glossary
          </Link>
          <Link href="/resources/faq" className="font-semibold text-ink hover:text-gold">
            FAQ hub
          </Link>
          <Link href="/resources/react-vs-flutter" className="font-semibold text-ink hover:text-gold">
            React vs Flutter for MVPs
          </Link>
          <Link href="/resources/statistics" className="font-semibold text-ink hover:text-gold">
            Nigeria digital statistics
          </Link>
          <Link href="/resources/agency-vs-freelancer" className="font-semibold text-ink hover:text-gold">
            Agency vs freelancer
          </Link>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          {posts.length === 0 ? (
            <p className="text-ink-muted">Check back soon for the latest technical insights.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Reveal key={post.slug} delay={Math.min(index, 8) * 40}>
                  <InsightCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
    </>
  );
}
