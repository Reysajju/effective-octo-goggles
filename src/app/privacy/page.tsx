import { MarketingLayout } from "@/components/layout/marketing-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { buildMetadata } from "@/lib/seo";

const privacySections = [
  {
    title: "Data collection",
    copy:
      "We store account information (name, email, company), lead data, proposal content, and audit logs required to deliver the service. We never sell data.",
  },
  {
    title: "GDPR & CCPA",
    copy:
      "Supabase provides encryption at rest and RLS policies to ensure workspace isolation. EU resident data stays in EU regions when configured.",
  },
  {
    title: "Cookies & tracking",
    copy:
      "Analytics cookies load only after consent. Marketing cookies are optional. Necessary cookies handle auth, CSRF, and localization.",
  },
  {
    title: "Data retention",
    copy:
      "Account data is retained for 90 days after cancellation unless you request immediate deletion. Files are purged from Supabase Storage at deletion time.",
  },
];

export const metadata = buildMetadata({
  title: "Privacy policy",
  description: "GDPR-ready privacy policy for ClientFlow. Learn how we process data, manage cookies, and honor export/delete requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <MarketingLayout>
      <SectionHeading
        eyebrow="Privacy"
        title="Built with security, privacy, and consent in mind"
        subtitle="ClientFlow follows GDPR, CCPA, and SOC 2 best practices."
      />
      <div className="mt-10 grid gap-6">
        {privacySections.map((section) => (
          <GlassCard key={section.title}>
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <p className="text-sm text-white/70">{section.copy}</p>
          </GlassCard>
        ))}
      </div>
      <GlassCard>
        <p className="text-sm text-white/70">
          To request data export or deletion, email privacy@clientflow.app or submit the in-app request under Settings → Privacy. We'll confirm within 72 hours and complete the request within 30 days.
        </p>
      </GlassCard>
    </MarketingLayout>
  );
}
