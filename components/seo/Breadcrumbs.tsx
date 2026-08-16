import Link from "next/link";
import { Container } from "@/components/ui/Container";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-rule bg-paper">
      <Container>
        <ol className="flex flex-wrap gap-2 py-3 text-xs text-ink-muted">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden>/</span> : null}
                {last ? (
                  <span className="text-ink">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:text-gold">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
