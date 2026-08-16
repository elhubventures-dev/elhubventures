import Link from "next/link";
import type { InsightPost } from "@/lib/posts";

export function InsightCard({ post }: { post: InsightPost }) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <p className="text-xs text-ink-muted">{post.publishDate}</p>
      <h3 className="mt-3 font-display text-xl text-ink">{post.topic}</h3>
      {post.keyword ? <p className="mt-3 text-sm text-ink-muted">Focus: {post.keyword}</p> : null}
      <Link
        href={`/insights/${post.slug}`}
        className="mt-6 text-sm font-semibold text-ink underline-offset-4 hover:text-gold hover:underline"
      >
        Read insight
      </Link>
    </article>
  );
}
