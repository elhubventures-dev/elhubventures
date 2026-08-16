import { Container } from "@/components/ui/Container";

export function AnswerCapsule({ children }: { children: React.ReactNode }) {
  return (
    <section id="answer" className="border-b border-rule py-8" aria-label="Quick Answer">
      <Container>
        <p className="max-w-4xl text-sm text-ink-muted sm:text-base">
          <strong className="text-ink">Quick Answer:</strong> {children}
        </p>
      </Container>
    </section>
  );
}
