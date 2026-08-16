"use client";

import { trackEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  children,
  className,
  eventName,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName: "click" | "generate_lead";
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        const kind = href.startsWith("mailto:") ? "email" : href.startsWith("tel:") ? "phone" : "outbound";
        trackEvent(eventName, { link_url: href, link_type: kind });
      }}
    >
      {children}
    </a>
  );
}
