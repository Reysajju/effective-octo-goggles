import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Settings"
        title="Privacy, notifications, and billing"
        subtitle="Control your trial, enable consent, and manage GDPR requests."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="text-sm text-white/60">Trial status</p>
          <p className="text-4xl font-semibold">12 days left</p>
          <p className="text-sm text-white/70">Add billing info to avoid pauses.</p>
          <form action="/api/forms/submit" method="post" className="mt-4 space-y-3 text-sm text-white/80">
            <input type="hidden" name="form" value="billing" />
            <label className="block">
              <span className="text-xs text-white/60">Plan</span>
              <select className="mt-1 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white" name="plan">
                <option value="grow">Grow</option>
                <option value="scale">Scale</option>
              </select>
            </label>
            <button className="w-full rounded-2xl bg-gradient-to-r from-sky-400 to-violet-500 px-4 py-3 text-sm font-semibold">
              Update plan
            </button>
          </form>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-white/60">Data requests</p>
          <form action="/api/forms/submit" method="post" className="mt-4 space-y-3 text-sm text-white/80">
            <input type="hidden" name="form" value="privacy" />
            <label className="block">
              <span className="text-xs text-white/60">Action</span>
              <select className="mt-1 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white" name="action">
                <option value="export">Export my data</option>
                <option value="delete">Delete my account</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-white/60">Reason (optional)</span>
              <textarea className="mt-1 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white" name="reason" rows={3} />
            </label>
            <button className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold">
              Submit request
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
