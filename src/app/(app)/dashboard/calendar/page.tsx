import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

const slots = [
  { time: "9:00 AM", status: "Booked by Nova" },
  { time: "11:30 AM", status: "Available" },
  { time: "2:00 PM", status: "Booked by Maru" },
  { time: "4:30 PM", status: "Available" },
];

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Calendar"
        title="One-click booking"
        subtitle="Smart availability with buffers, reminders, and timezone awareness."
      />
      <GlassCard>
        <div className="grid gap-4 md:grid-cols-2">
          {slots.map((slot) => (
            <div key={slot.time} className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-lg font-semibold">{slot.time}</p>
              <p className="text-sm text-white/60">{slot.status}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
