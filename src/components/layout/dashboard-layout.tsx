import Link from "next/link";
import { ReactNode } from "react";
import { siteMetadata } from "@/data/site-content";

const dashboardNav = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/leads", label: "Leads" },
  { href: "/dashboard/forms", label: "Intake Forms" },
  { href: "/dashboard/proposals", label: "Proposals" },
  { href: "/dashboard/calendar", label: "Calendar" },
  { href: "/dashboard/files", label: "Files" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/settings", label: "Settings" },
];

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="mx-auto flex min-h-screen w-[min(1300px,95vw)] gap-6 py-10">
      <aside className="sticky top-8 hidden h-[90vh] w-64 flex-col rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70 backdrop-blur lg:flex">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">{siteMetadata.name}</p>
          <p className="text-lg font-semibold text-white">Command</p>
          <p className="text-xs text-white/60">Trial: 12 days left</p>
        </div>
        <nav className="mt-8 space-y-2 text-sm">
          {dashboardNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition hover:border-white/20 hover:bg-white/5"
            >
              <span>{item.label}</span>
              <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-2 rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/20 to-violet-500/30 p-4 text-white">
          <p className="text-sm font-semibold">Upgrade now</p>
          <p className="text-xs text-white/80">Unlock unlimited AI proposals after your trial ends.</p>
          <Link href="/pricing" className="text-xs font-semibold text-sky-200 hover:underline">
            Compare plans →
          </Link>
        </div>
      </aside>
      <div className="flex-1 space-y-8 text-white">
        {children}
      </div>
    </div>
  );
}
