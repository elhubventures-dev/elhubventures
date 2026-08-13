import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CALENDLY_URL } from "@/lib/site";

export function CtaBand({
  title = "Ready to brief a delivery partner?",
  description = "Share the problem, timeline, and constraints. We return a scoped proposal within 48 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-rule bg-ink py-16 text-paper">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl leading-tight">{title}</h2>
          <p className="mt-3 text-paper/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Start a project</Button>
          <Button href={CALENDLY_URL} variant="inverse" external>
            Book a call
          </Button>
        </div>
      </Container>
    </section>
  );
}
