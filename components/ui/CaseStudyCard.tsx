import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col border border-rule bg-paper-raised p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{study.sector}</p>
      <h3 className="mt-3 font-display text-2xl text-ink">{study.title}</h3>
      <p className="mt-3 text-ink-muted">{study.impact}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {study.metrics.map((metric) => (
          <li key={metric} className="border border-rule px-2 py-1 text-xs text-ink">
            {metric}
          </li>
        ))}
      </ul>
      <Link
        href="/case-studies"
        className="mt-6 text-sm font-semibold text-ink underline-offset-4 hover:text-gold hover:underline"
      >
        Read the work
      </Link>
    </article>
  );
}
