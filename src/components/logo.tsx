import { site } from "@/lib/site";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="1" y="1" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className={inverted ? "text-paper" : "text-ink"} />
        <path d="M6 11.5l3.2 3.2L16 7.8" fill="none" stroke="#d9480f" strokeWidth="2.4" strokeLinecap="square" />
      </svg>
      <span className={`text-[17px] font-semibold tracking-tight ${inverted ? "text-paper" : "text-ink"}`}>
        <span className="hidden sm:inline">{site.name}</span>
        <span className="sm:hidden">{site.shortName}</span>
      </span>
    </span>
  );
}
