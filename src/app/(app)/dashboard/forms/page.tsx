import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const formFields = [
  "Project summary",
  "Budget range",
  "Timeline",
  "Reference files",
];

export default function FormsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Intake forms"
        title="Drag, drop, ship"
        subtitle="Build branded intake forms with conditional steps, uploads, and AI hints."
      />
      <GlassCard>
        <p className="text-sm text-white/60">Form: Website refresh</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {formFields.map((field) => (
            <div key={field} className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-sm font-semibold text-white">{field}</p>
              <p className="text-xs text-white/60">Required</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
