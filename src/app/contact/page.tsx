import { MarketingLayout } from "@/components/layout/marketing-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { contactChannels } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Talk with ClientFlow sales or support, or book time with our product team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <MarketingLayout>
      <SectionHeading
        eyebrow="Contact"
        title="We're here for support, sales, and success"
        subtitle="Reach us via form, SMS, or book a call. We'll reply within one business day."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <GlassCard>
          <form action="/api/forms/submit" method="post" className="space-y-4 text-sm text-white/80">
            <input type="hidden" name="form" value="contact" />
            <label className="block">
              <span className="text-xs text-white/60">Name</span>
              <input
                className="mt-1 w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white"
                name="name"
                placeholder="Taylor Freelance"
                required
              />
            </label>
            <label className="block">
              <span className="text-xs text-white/60">Email</span>
              <input
                className="mt-1 w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white"
                name="email"
                type="email"
                placeholder="you@studio.com"
                required
              />
            </label>
            <label className="block">
              <span className="text-xs text-white/60">Message</span>
              <textarea
                className="mt-1 w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white"
                name="message"
                rows={4}
                placeholder="Tell us about your workflow"
                required
              />
            </label>
            <button className="w-full rounded-2xl bg-gradient-to-r from-sky-400 to-violet-500 px-4 py-3 text-sm font-semibold">
              Send message
            </button>
          </form>
        </GlassCard>
        <div className="space-y-4">
          {contactChannels.map((channel) => (
            <GlassCard key={channel.title}>
              <p className="text-xs uppercase text-white/60">{channel.title}</p>
              <p className="text-lg font-semibold text-white">{channel.detail}</p>
              <p className="text-sm text-white/70">{channel.description}</p>
            </GlassCard>
          ))}
          <GlassCard>
            <p className="text-xs uppercase text-white/60">Book a call</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <p className="text-lg font-semibold text-white">Tue</p>
                <p>2:00 PM</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <p className="text-lg font-semibold text-white">Wed</p>
                <p>11:30 AM</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/60">Powered by ClientFlow calendar — timezone aware.</p>
          </GlassCard>
        </div>
      </div>
    </MarketingLayout>
  );
}
