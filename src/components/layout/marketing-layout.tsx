import { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

interface MarketingLayoutProps {
  children: ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col gap-12 pb-16">
      <SiteHeader />
      <main className="mx-auto w-[min(1200px,95vw)] flex-1 space-y-16 text-white">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
