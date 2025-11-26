import { MarketingLayout } from "@/components/layout/marketing-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { buildMetadata } from "@/lib/seo";

const clauses = [
  {
    title: "Refund policy",
    copy:
      "If ClientFlow doesn't work for you, cancel within 30 days of a paid subscription and we'll refund the latest charge. Trials are always free.",
  },
  {
    title: "Terms of service",
    copy:
      "Use ClientFlow responsibly, respect client data, and follow the law. We may suspend accounts for abuse or security violations.",
  },
  {
    title: "Service availability",
    copy:
      "We target 99.9% uptime backed by Vercel + Supabase SLAs. Planned maintenance is announced 48 hours in advance.",
  },
  {
    title: "AI usage",
    copy:
      "Gemini requests run server-side with guardrails that block sensitive data from leaving your workspace without consent.",
  },
];

export const metadata = buildMetadata({
  title: "Refunds & Terms",
  description: "Refund guarantee and terms of service for ClientFlow.",
  path: "/refund-terms",
});

export default function RefundTermsPage() {
  return (
    <MarketingLayout>
      <SectionHeading
        eyebrow="Legal"
        title="Refund, terms, and acceptable use"
        subtitle="Straightforward policies so you can trust the platform."
      />
      <div className="mt-10 grid gap-6">
        {clauses.map((clause) => (
          <GlassCard key={clause.title}>
            <h3 className="text-xl font-semibold">{clause.title}</h3>
            <p className="text-sm text-white/70">{clause.copy}</p>
          </GlassCard>
        ))}
      </div>
    </MarketingLayout>
  );
}
