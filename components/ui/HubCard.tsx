import { TrackedLink } from "@/components/seo/TrackedLink";
import { HUBS } from "@/lib/site";

type Hub = (typeof HUBS)[number];

export function HubCard({ hub }: { hub: Hub }) {
  return (
    <article className="card-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{hub.code}</p>
      <h3 className="mt-2 font-display text-xl text-ink">{hub.name}</h3>
      <p className="mt-2 text-sm text-ink-muted">{hub.location}</p>
      <div className="mt-4 flex flex-col gap-1 text-sm">
        {"phone" in hub && hub.phone && hub.phoneHref ? (
          <TrackedLink href={hub.phoneHref} eventName="click" className="text-ink hover:text-gold">
            {hub.phone}
          </TrackedLink>
        ) : null}
        <TrackedLink href={`mailto:${hub.email}`} eventName="click" className="text-ink hover:text-gold">
          {hub.email}
        </TrackedLink>
      </div>
    </article>
  );
}
