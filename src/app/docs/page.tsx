import { MarketingLayout } from "@/components/layout/marketing-layout";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { docsTopics, analyticsEvents, acceptanceTests } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Docs",
  description: "ClientFlow documentation: onboarding, AI proposals, intake forms, APIs, GDPR, and analytics events.",
  path: "/docs",
});

const apiSnippet = `POST /api/ai/generate-proposal
Authorization: Bearer <token>
{
  "leadId": "lead_123",
  "scope": "Brand identity refresh",
  "tone": "friendly"
}`;

export default function DocsPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "ClientFlow Docs",
          about: "Supabase, Gemini, and Next.js powered intake platform",
        }}
      />
      <SectionHeading
        eyebrow="Docs & FAQ"
        title="Build, launch, and scale ClientFlow"
        subtitle="Everything from Supabase schema to API payloads and GDPR controls."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {docsTopics.map((topic) => (
          <GlassCard key={topic.title}>
            <h3 className="text-xl font-semibold">{topic.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {topic.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      <section className="mt-16 grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-10 md:grid-cols-2">
        <GlassCard>
          <p className="text-xs uppercase text-white/60">API snippet</p>
          <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-black/20 p-6 font-mono text-sm text-white/80">
            {apiSnippet}
          </pre>
        </GlassCard>
        <GlassCard>
          <p className="text-xs uppercase text-white/60">Analytics events schema</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {analyticsEvents.map((event) => (
              <li key={event}>• {event}</li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <section>
        <SectionHeading
          eyebrow="Quality"
          title="Acceptance tests"
          subtitle="Every release should cover the happy paths below."
        />
        <div className="mt-6 grid gap-4">
          {acceptanceTests.map((test) => (
            <GlassCard key={test}>{test}</GlassCard>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
