import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const leads = [
  { name: "Nova Studio", source: "Website", status: "Proposal sent", score: "88" },
  { name: "Hayes Legal", source: "Refer", status: "Needs follow-up", score: "74" },
  { name: "Maru Copy", source: "DM", status: "Booked intro", score: "91" },
];

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading eyebrow="Leads" title="Unified intake" subtitle="All channels pipe into one queue with auto scoring." />
      <div className="space-y-4">
        {leads.map((lead) => (
          <GlassCard key={lead.name} className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">{lead.name}</p>
              <p className="text-sm text-white/60">{lead.source}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/80">{lead.status}</p>
              <p className="text-xs text-emerald-300">Score {lead.score}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
