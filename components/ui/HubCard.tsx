import { HUBS } from "@/lib/site";

type Hub = (typeof HUBS)[number];

export function HubCard({ hub }: { hub: Hub }) {
  return (
    <article className="border border-rule bg-paper-raised p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{hub.code}</p>
      <h3 className="mt-2 font-display text-xl text-ink">{hub.name}</h3>
      <p className="mt-2 text-sm text-ink-muted">{hub.location}</p>
      <div className="mt-4 flex flex-col gap-1 text-sm">
        {"phone" in hub && hub.phone && hub.phoneHref ? (
          <a href={hub.phoneHref} className="text-ink hover:text-gold">
            {hub.phone}
          </a>
        ) : null}
        <a href={`mailto:${hub.email}`} className="text-ink hover:text-gold">
          {hub.email}
        </a>
      </div>
    </article>
  );
}
