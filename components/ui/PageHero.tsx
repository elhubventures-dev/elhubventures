import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="mesh-hero border-b border-rule pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="max-w-3xl">
        {eyebrow ? (
          <p className="hero-enter mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        ) : null}
        <h1 className="hero-enter hero-enter-d1 font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
        {description ? (
          <p className="hero-enter hero-enter-d2 mt-5 max-w-2xl text-lg text-ink-muted">{description}</p>
        ) : null}
        {primaryCta || secondaryCta ? (
          <div className="hero-enter hero-enter-d3 mt-8 flex flex-wrap gap-3">
            {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
