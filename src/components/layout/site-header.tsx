import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { siteMetadata, primaryNav } from "@/data/site-content";
import { ButtonLink } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-40 mx-auto flex w-[min(1200px,95vw)] items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 text-xl font-bold">
          CF
        </div>
        <div>
          <Link href="/" className="text-lg font-semibold">
            {siteMetadata.name}
          </Link>
          <p className="text-xs text-white/70">{siteMetadata.tagLine}</p>
        </div>
      </div>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white/80 transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <ButtonLink href="/pricing" variant="secondary" size="sm">
          Pricing
        </ButtonLink>
        <ButtonLink href="/signup" size="sm">
          {siteMetadata.trialCopy}
        </ButtonLink>
      </div>
      <button className="md:hidden" aria-label="Open navigation">
        <MenuIcon className="h-6 w-6 text-white" />
      </button>
    </header>
  );
}
