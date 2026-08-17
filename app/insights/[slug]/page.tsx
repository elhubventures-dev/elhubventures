import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerCapsule } from "@/components/seo/AnswerCapsule";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { getPost, getPostHtml } from "@/lib/posts";
import { pageMetadata, absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const description = `${post.topic}. Expert insight on ${post.keyword} from ${SITE_NAME}.`.slice(0, 160);
  return pageMetadata({
    title: post.topic,
    description,
    path: `/insights/${post.slug}`,
    type: "article",
  });
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = await getPostHtml(slug);
  if (!html) notFound();

  const publishedISO = new Date(post.publishDate).toISOString().split("T")[0];
  const pageUrl = absoluteUrl(`/insights/${post.slug}`);
  const description = `${post.topic}. Expert insight on ${post.keyword} from ${SITE_NAME}.`.slice(0, 160);
  const pullQuote = post.keyword
    ? `A practical take on ${post.keyword} for operators deciding how to staff, architect, or grow a digital product.`
    : "A practical take for operators deciding how to staff, architect, or grow a digital product.";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.topic,
    description,
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/images/favicon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${pageUrl}#article` },
    image: `${SITE_URL}/assets/images/hero.png`,
    keywords: post.keyword,
  };

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/resources" },
    { name: post.topic, href: `/insights/${post.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <article>
        <PageHero
          eyebrow="Technical insight"
          title={post.topic}
          pullQuote={pullQuote}
          meta={`Published ${post.publishDate}${post.keyword ? ` · ${post.keyword}` : ""} · Last updated ${post.publishDate}`}
          narrow
        />
        <AnswerCapsule>
          {post.topic}. This EL-HUB VENTURES insight covers {post.keyword || "the topic"} for operators deciding how to
          staff, architect, or grow a digital product.
        </AnswerCapsule>
        <Container className="py-16">
          <div className="prose-insight" dangerouslySetInnerHTML={{ __html: html }} />
          <aside className="mt-16 max-w-[42rem] border-y border-rule py-8">
            <h2 className="font-display text-xl text-ink">Explore further</h2>
            <ul className="mt-4 space-y-2 text-ink-muted">
              <li>
                <Link href="/case-studies" className="hover:text-gold">
                  delivery examples and case studies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gold">
                  Insights hub
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Button href="/contact">Start a project</Button>
            </div>
          </aside>
        </Container>
      </article>
      <CtaBand />
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
    </>
  );
}
