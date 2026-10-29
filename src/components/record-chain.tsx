// Hero illustration: one project's linked records, from tender to final account.
// Figures are illustrative, not from a real project.
const steps = [
  { tag: "TENDER", label: "Tender sum", detail: "Mid-rise residential, 6 storeys", value: "£14.62m" },
  { tag: "RFI-212", label: "Site query", detail: "Structure vs. M&E clash at level 4 transfer slab", value: "Answered in 6 days" },
  { tag: "VAR-031", label: "Variation", detail: "Reroute ductwork, add beam penetrations", value: "+£146,300 · +9 days EOT" },
  { tag: "FINAL", label: "Final account", detail: "Agreed Q3 2023", value: "£15.13m · +3.5%" },
];

export function RecordChain() {
  return (
    <div className="border border-line bg-card shadow-[0_1px_0_rgb(22_24_28/0.04),0_24px_48px_-24px_rgb(22_24_28/0.25)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Example job</span>
        <span className="font-mono text-[11px] text-muted">GBP</span>
      </div>
      <ol className="relative px-5 py-2">
        <span aria-hidden="true" className="absolute top-8 bottom-8 left-[33px] w-px bg-line" />
        {steps.map((step) => (
          <li key={step.tag} className="relative flex gap-4 py-3.5">
            <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 border-2 border-accent bg-card" style={{ marginLeft: 1 }} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-medium text-ink">
                  <span className="font-mono text-xs text-accent">{step.tag}</span>
                  <span className="ml-2">{step.label}</span>
                </p>
                <p className="font-mono text-xs text-ink-soft">{step.value}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="border-t border-line bg-paper/60 px-5 py-3 text-xs text-muted">
        Buyers pay most when they can follow one job from tender to final account.
      </div>
    </div>
  );
}
