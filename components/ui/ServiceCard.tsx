import Link from "next/link";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{service.shortTitle}</p>
      <h3 className="mt-3 font-display text-2xl text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-ink-muted">{service.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="border border-rule px-2 py-1 text-xs text-ink-muted">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 text-sm font-semibold text-ink underline-offset-4 hover:text-gold hover:underline"
      >
        Explore service
      </Link>
    </article>
  );
}
