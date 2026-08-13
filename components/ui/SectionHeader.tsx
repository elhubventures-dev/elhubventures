export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-ink-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
