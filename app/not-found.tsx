import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">404</p>
        <h1 className="mt-4 font-display text-4xl text-ink">That page is not here.</h1>
        <p className="mt-4 text-ink-muted">
          The resource may have moved. Try the homepage, or send a brief if you were looking for delivery help.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/">Home</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/resources" className="text-ink-muted hover:text-ink">
            Insights library
          </Link>
        </p>
      </Container>
    </section>
  );
}
