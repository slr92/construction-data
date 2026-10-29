type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  inverted?: boolean;
};

export function Eyebrow({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) {
  return (
    <p className={`font-mono text-xs font-medium uppercase tracking-[0.14em] ${inverted ? "text-blueprint" : "text-accent"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, inverted = false }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <Eyebrow inverted={inverted}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${inverted ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${inverted ? "text-paper/70" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}
