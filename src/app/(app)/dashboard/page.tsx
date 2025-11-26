import { Bell, CalendarDays } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { onboardingJourney } from "@/data/site-content";

const metrics = [
  { label: "New leads", value: "18", delta: "+32%", tone: "text-emerald-300" },
  { label: "Proposal accept rate", value: "72%", delta: "+6%", tone: "text-emerald-300" },
  { label: "Time to book", value: "11h", delta: "-2h", tone: "text-emerald-300" },
  { label: "Files shared", value: "58", delta: "+12", tone: "text-sky-300" },
];

const realtime = [
  { actor: "Nova Studio", event: "opened proposal", time: "2m ago" },
  { actor: "Hayes Legal", event: "uploaded files", time: "6m ago" },
  { actor: "Maru Copy", event: "booked intro call", time: "12m ago" },
];

export default function DashboardHomePage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Workspace"
        title="Morning, Taylor. Here's your conversion desk"
        subtitle="Track leads, proposals, and upcoming meetings from one dashboard."
      />
      <div className="grid gap-4 lg:grid-cols-4">
        {metrics.map((metric) => (
          <GlassCard key={metric.label}>
            <p className="text-sm text-white/60">{metric.label}</p>
            <p className="text-4xl font-semibold">{metric.value}</p>
            <p className={`text-xs ${metric.tone}`}>{metric.delta}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-white/60">Realtime activity</p>
              <h3 className="text-2xl font-semibold">Lead presence</h3>
            </div>
            <Button variant="secondary" size="sm">
              Share proposal
            </Button>
          </div>
          <div className="mt-6 space-y-4">
            {realtime.map((item) => (
              <div key={item.actor} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{item.actor}</p>
                  <p className="text-xs text-white/60">{item.event}</p>
                </div>
                <p className="text-xs text-white/60">{item.time}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <p className="text-sm uppercase text-white/60">Notifications</p>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-3">
              <Bell className="h-5 w-5 text-sky-200" />
              Browser push enabled
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-3">
              <CalendarDays className="h-5 w-5 text-violet-200" />
              SMS reminders scheduled
            </div>
            <div className="rounded-2xl border border-white/10 p-3 text-white/60">
              Personalization: show “Create proposal” CTA
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="text-sm uppercase text-white/60">Onboarding wizard</p>
          <div className="mt-4 space-y-4">
            {onboardingJourney.map((step, idx) => (
              <label key={step.title} className="flex items-start gap-4">
                <input type="checkbox" defaultChecked={idx < 2} className="mt-1" />
                <div>
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="text-xs text-white/60">{step.copy}</p>
                </div>
              </label>
            ))}
          </div>
          <Button className="mt-4" size="sm">
            Continue setup
          </Button>
        </GlassCard>
        <GlassCard>
          <p className="text-sm uppercase text-white/60">Trial status</p>
          <p className="text-4xl font-semibold">12 days left</p>
          <p className="text-sm text-white/70">Upgrade now to keep AI proposals and realtime chat active.</p>
          <Button className="mt-4" variant="secondary">
            Upgrade plan
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
