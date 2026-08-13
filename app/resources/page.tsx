import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { InsightCard } from "@/components/ui/InsightCard";
import { PageHero } from "@/components/ui/PageHero";
import { getLivePosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "Resources & Technical Insights",
  description:
    "Technical insights on web architecture, mobile engineering, SEO, cloud DevOps, and digital strategy from EL-HUB VENTURES.",
  path: "/resources",
});

export default function ResourcesPage() {
  const posts = getLivePosts();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Resources from live delivery work."
        description="Architecture, SEO, cloud, and product notes from engagements across Nigeria, North America, the UK, and Cameroon."
      />
      <section className="py-20">
        <Container>
          {posts.length === 0 ? (
            <p className="text-ink-muted">Check back soon for the latest technical insights.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <InsightCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
