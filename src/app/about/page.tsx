import { MarketingLayout } from "@/components/layout/marketing-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

const milestones = [
  {
    title: "Concept",
    detail: "Freelancers complained about messy intake, so we built a command center.",
    date: "2023 Q4",
  },
  {
    title: "Supabase foundation",
    detail: "RLS-first schema plus realtime feed shipped to private alpha.",
    date: "2024 Q1",
  },
  {
    title: "AI proposals",
    detail: "Gemini generation + editor, 5x faster close times.",
    date: "2024 Q2",
  },
  {
    title: "Trial-first launch",
    detail: "Public marketing site + analytics instrumentation.",
    date: "2024 Q4",
  },
];

export const metadata = buildMetadata({
  title: "About",
  description: "Meet the ClientFlow team building the modern intake operating system for freelance consultants.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <MarketingLayout>
      <SectionHeading
        eyebrow="Mission"
        title="We're obsessed with helping independents close confidently"
        subtitle="ClientFlow is built by a distributed team across NYC, Austin, and Porto. We blend product, AI, and compliance expertise."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <GlassCard>
          <p className="text-sm text-white/80">
            Independent service businesses deserve the same conversion stack as enterprise sales teams. We're building the most delightful, compliant intake OS so freelancers can focus on craft.
          </p>
          <Button variant="secondary" size="sm" className="mt-4">
            Join the community →
          </Button>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-white/80">
            Backed by operators from Supabase, Calendly, and Stripe, we care deeply about open standards, security, and speed. We ship weekly and share transparent roadmaps.
          </p>
        </GlassCard>
      </div>
      <section>
        <SectionHeading eyebrow="Milestones" title="Roadmap" subtitle="We build in public." />
        <div className="mt-6 grid gap-4">
          {milestones.map((item) => (
            <GlassCard key={item.title}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-white/70">{item.detail}</p>
                </div>
                <p className="text-xs text-white/60">{item.date}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
