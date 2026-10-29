// Hero illustration: one project's linked records, from bid to final cost.
// Figures are illustrative, not from a real project.
const steps = [
  { tag: "EST", label: "Bid estimate", detail: "Mid-rise residential, 6 storeys", value: "$18.42M" },
  { tag: "RFI-212", label: "Field question", detail: "Structural vs. MEP clash at L4 transfer slab", value: "Answered in 6 days" },
  { tag: "CO-031", label: "Change order", detail: "Reroute ductwork, add beam penetrations", value: "+$184,300 · +9 days" },
  { tag: "FINAL", label: "Final cost", detail: "Closed out Q3 2023", value: "$19.06M · +3.5%" },
];

export function RecordChain() {
  return (
    <div className="border border-line bg-card shadow-[0_1px_0_rgb(22_24_28/0.04),0_24px_48px_-24px_rgb(22_24_28/0.25)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Example record chain</span>
        <span className="font-mono text-[11px] text-muted">Project 0417</span>
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
        Records that link like this are what buyers pay most for.
      </div>
    </div>
  );
}
