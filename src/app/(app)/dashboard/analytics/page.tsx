import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const funnel = [
  { stage: "Visited", value: 1000 },
  { stage: "Started intake", value: 420 },
  { stage: "Completed intake", value: 310 },
  { stage: "Proposal sent", value: 150 },
  { stage: "Booked", value: 72 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Analytics"
        title="Understand what converts"
        subtitle="Track funnel metrics, drop-off points, and proposal velocity."
      />
      <GlassCard>
        <div className="space-y-4">
          {funnel.map((item) => (
            <div key={item.stage}>
              <div className="flex items-center justify-between text-sm text-white/80">
                <p>{item.stage}</p>
                <p>{item.value}</p>
              </div>
              <div className="mt-2 h-3 rounded-full bg-white/10">
                <div className="h-3 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" style={{ width: `${(item.value / 1000) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
