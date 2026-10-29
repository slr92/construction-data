import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-4 text-base leading-relaxed">
            We help contractors get paid for their old job records by licensing them to AI companies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm">
          <Link href="/#how" className="hover:text-paper">How it works</Link>
          <Link href="/buyers" className="hover:text-paper">For AI labs</Link>
          <Link href="/security" className="hover:text-paper">Security</Link>
          <Link href="/partners" className="hover:text-paper">Partners</Link>
          <Link href="/#rights" className="hover:text-paper">Rights review</Link>
          <Link href="/estimate" className="hover:text-paper">Estimate</Link>
          <Link href="/#faq" className="hover:text-paper">FAQ</Link>
          <a href={`mailto:${site.email}`} className="hover:text-paper">Contact</a>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs sm:px-6">
          © {new Date().getFullYear()} {site.name}. Nothing on this site is legal advice.
        </p>
      </div>
    </footer>
  );
}
