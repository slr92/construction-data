import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./logo";
import { ButtonLink } from "./button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/estimate" size="sm">
          Get an estimate
        </ButtonLink>
      </div>
    </header>
  );
}
