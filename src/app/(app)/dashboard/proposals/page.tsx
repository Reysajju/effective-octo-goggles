import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProposalGenerator } from "@/components/dashboard/proposal-generator";

export default function ProposalsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="AI proposals"
        title="Generate, edit, and send"
        subtitle="Gemini powers proposal drafts with version history and signature tracking."
      />
      <GlassCard>
        <ProposalGenerator />
      </GlassCard>
    </div>
  );
}
