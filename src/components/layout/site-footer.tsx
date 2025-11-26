import Link from "next/link";
import { primaryNav, siteMetadata, deploymentChecklist } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 w-[min(1200px,95vw)] rounded-3xl border border-white/10 bg-white/5 p-10 text-white/80 backdrop-blur">
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Intake to win</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{siteMetadata.tagLine}</h3>
          <p className="mt-4 max-w-xl text-white/70">
            ClientFlow keeps every step — intake, proposals, chat, files, analytics — inside one glassmorphism workspace so you close clients faster.
          </p>
        </div>
        <div className="grid gap-4 text-sm">
          <h4 className="text-white/60">Launch checklist</h4>
          <ul className="space-y-2 text-white/70">
            {deploymentChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/refund-terms" className="hover:text-white">
            Refund & Terms
          </Link>
        </div>
        <p>© {new Date().getFullYear()} {siteMetadata.name}. Built on Supabase, Gemini, and Vercel.</p>
      </div>
    </footer>
  );
}
