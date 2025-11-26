import { Check } from "lucide-react";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { pricingTiers, faqEntries } from "@/data/site-content";
import { buildFaqJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description: "Transparent pricing for ClientFlow — start with a 14-day free trial, upgrade when automations become essential.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <MarketingLayout>
      <JsonLd data={buildFaqJsonLd(faqEntries)} />
      <SectionHeading
        eyebrow="Pricing"
        title="Try-first trial, predictable pricing"
        subtitle="Start in minutes, keep everything after trial. Upgrade only when you are ready."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <GlassCard key={tier.name} className={tier.featured ? "border-white/50 bg-white/15" : ""}>
            <p className="text-xs uppercase text-white/60">{tier.cadence}</p>
            <h3 className="text-2xl font-semibold">{tier.name}</h3>
            <p className="text-4xl font-semibold">{tier.price}</p>
            <p className="text-sm text-white/70">{tier.description}</p>
            <Button className="mt-4" variant={tier.featured ? "primary" : "secondary"}>
              {tier.cta}
            </Button>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-300" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      <section className="mt-16 grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-10 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Trial billing"
            title="14 days, no card, full platform"
            subtitle="Your workspace persists after the trial so leads never lose context."
          />
          <p className="mt-4 text-white/70">
            Add Stripe billing at any time. Usage-based AI credits can be added on top of any tier. Enterprise plans include SOC 2 reports, DPA, and custom RLS policies.
          </p>
        </div>
        <div>
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <p className="text-sm text-white/60">Cost projection</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-semibold text-white">$49</p>
                <p className="text-xs text-white/60">Solo consultants</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">$89</p>
                <p className="text-xs text-white/60">Studios & pods</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/60">Gemini credits: $4 per 50 proposals. Storage overages: $0.03/GB.</p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="FAQ" title="All the answers" subtitle="GDPR, billing, and CTA best practices." />
        <div className="mt-8 grid gap-4">
          {faqEntries.map((faq) => (
            <GlassCard key={faq.question}>
              <p className="text-sm font-semibold">{faq.question}</p>
              <p className="text-sm text-white/70">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-sky-500/20 to-violet-500/20 p-10 text-center">
        <h2 className="text-3xl font-semibold">Need custom rollout?</h2>
        <p className="mt-4 text-white/80">
          Contact sales for concierge onboarding, DPA paperwork, and premium support SLAs.
        </p>
        <Button className="mt-6">Talk to sales</Button>
      </section>
    </MarketingLayout>
  );
}
