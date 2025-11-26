import { Sparkles, CalendarHeart, MessageCircle, Activity, ArrowUpRight } from "lucide-react";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { GlassCard } from "@/components/ui/glass-card";
import { Button, ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import {
  siteMetadata,
  featureHighlights,
  guidedFlow,
  onboardingJourney,
  blogPosts,
} from "@/data/site-content";
import { buildMetadata, buildSaasJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: siteMetadata.name,
  description: siteMetadata.description,
  path: "/",
});

const iconMap = {
  sparkles: <Sparkles className="h-6 w-6 text-sky-200" />,
  form: <MessageCircle className="h-6 w-6 text-violet-200" />,
  calendar: <CalendarHeart className="h-6 w-6 text-cyan-200" />,
  activity: <Activity className="h-6 w-6 text-emerald-200" />,
};

const proof = ["FastCompany", "YC Founders", "Stripe Atlas", "Supabase", "Vercel"];

export default function HomePage() {
  return (
    <MarketingLayout>
      <JsonLd data={buildSaasJsonLd()} />
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-10 text-white shadow-2xl shadow-sky-900/30">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">Client intake OS</p>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row">
          <div className="space-y-6 lg:w-1/2">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Close clients faster — without the busywork.
            </h1>
            <p className="text-lg text-white/80">
              ClientFlow blends AI proposals, automated intake, and one-click scheduling inside a glassmorphism workspace built for freelancers and solo consultants.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>Start 14-day trial</Button>
              <Button variant="secondary">Watch 30s preview</Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              {proof.map((brand) => (
                <span key={brand} className="rounded-full border border-white/15 px-4 py-1">
                  Trusted by {brand}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase text-white/60">Realtime client desk</p>
              <div className="mt-4 grid gap-4">
                {guidedFlow.map((step) => (
                  <GlassCard key={step.title}>
                    <p className="text-xs uppercase tracking-[0.4em] text-sky-200">{step.step}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="text-sm text-white/70">{step.body}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/60" />
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Why ClientFlow"
          title="Every surface is designed for conversion"
          subtitle="Glassmorphism UI, AI copilots, and realtime presence keep leads moving from intake to paid project."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featureHighlights.map((feature) => (
            <GlassCard key={feature.title} className="card-glow">
              {iconMap[feature.icon as keyof typeof iconMap]}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Smart onboarding"
            title="Try-first trial, full power included"
            subtitle="Pick a template, connect calendar, and ClientFlow spins up a sample lead journey so you can feel the speed in minutes."
          />
          <ul className="mt-6 space-y-4 text-white/80">
            {onboardingJourney.map((step, idx) => (
              <li key={step.title} className="flex gap-4">
                <span className="mt-1 h-8 w-8 rounded-full bg-white/10 text-center text-sm leading-8 text-white/80">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-base font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-white/60">{step.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-white/80">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">AI proposal preview</p>
          <div className="mt-4 space-y-4">
            <GlassCard>
              <p className="text-xs text-white/60">Lead</p>
              <p className="text-lg font-semibold">Nova Studio → Brand refresh</p>
              <p className="text-sm text-white/60">Status: Reviewing proposal</p>
            </GlassCard>
            <GlassCard>
              <p className="text-xs text-white/60">Gemini output</p>
              <p>
                "Hey Nova team! Based on your goals, we recommend a 3-week sprint that tackles positioning, visual identity, and a launch-ready landing."
              </p>
              <p className="text-xs text-emerald-300">Realtime: client opened proposal 2m ago</p>
            </GlassCard>
            <div className="rounded-2xl border border-white/15 bg-black/10 p-4 text-white/70">
              <p className="text-xs uppercase text-white/50">Analytics</p>
              <div className="mt-3 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-semibold text-white">42</p>
                  <p className="text-xs">Leads this week</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">68%</p>
                  <p className="text-xs">Proposal acceptance</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">12h</p>
                  <p className="text-xs">Time to book</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Resources"
          title="Content that trains your funnel"
          subtitle="SEO-ready blog posts and docs help you ship faster and grow organic traffic."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post) => (
            <GlassCard key={post.title}>
              <p className="text-xs uppercase text-white/60">{post.category}</p>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-white/60">{post.estimate}</p>
            </GlassCard>
          ))}
        </div>
        <ButtonLink href="/blog" className="mt-6 inline-flex" variant="secondary">
          View resources
        </ButtonLink>
      </section>

      <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-sky-500/20 via-transparent to-violet-600/30 p-10 text-center">
        <h2 className="text-3xl font-semibold">Ready to run a try-first trial?</h2>
        <p className="mt-4 text-lg text-white/80">
          Sign up, invite one client, and watch intake → proposal → booking happen in under an hour.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button>Start trial</Button>
          <Button variant="secondary">See live demo</Button>
        </div>
      </section>
    </MarketingLayout>
  );
}
