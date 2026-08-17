import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  pullQuote,
  meta,
  narrow = false,
  clearHeader = false,
}: {
  eyebrow?: string;
  title: string;
  /** Manifesto supporting claim — rendered as a gold-ruled pull-quote. */
  pullQuote?: string;
  /** Optional meta line (e.g. insight publish date). */
  meta?: string;
  /** Tighter column for long-form articles. */
  narrow?: boolean;
  /** Clear the fixed site header when this hero is the first content (no breadcrumbs). */
  clearHeader?: boolean;
}) {
  return (
    <section
      className={`mesh-hero border-b border-rule pb-20 sm:pb-24 ${
        clearHeader ? "pt-28 sm:pt-36" : "pt-12 sm:pt-16"
      }`}
    >
      <Container className={narrow ? "max-w-3xl" : "max-w-4xl"}>
        {eyebrow ? (
          <p className="hero-enter mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="hero-enter hero-enter-d1 font-display text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <span
          className="hero-enter hero-enter-d1 mt-8 block h-px w-16 bg-gold"
          aria-hidden="true"
        />
        {pullQuote ? (
          <blockquote className="hero-enter hero-enter-d2 mt-8 max-w-2xl border-l-2 border-gold pl-6">
            <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">{pullQuote}</p>
          </blockquote>
        ) : null}
        {meta ? (
          <p className="hero-enter hero-enter-d3 mt-8 text-sm tracking-wide text-ink-muted">{meta}</p>
        ) : null}
      </Container>
    </section>
  );
}
