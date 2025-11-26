import { Brain, LayoutPanelTop, Files, LineChart, MessageSquareMore, Timer } from "lucide-react";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { siteMetadata, guidedFlow } from "@/data/site-content";

export const metadata = buildMetadata({
  title: "Features",
  description: "AI proposals, smart intake forms, calendar booking, realtime chat, analytics, and storage inside one ClientFlow workspace.",
  path: "/features",
});

const featureSections = [
  {
    icon: <Brain className="h-6 w-6 text-sky-200" />,
    title: "AI proposals that sound like you",
    copy:
      "Gemini studies your templates, tone, and deliverables to generate proposals with pricing, milestones, and signature blocks.",
    bullets: [
      "Tone + length controls",
      "Markup + comment mode",
      "Proposal view + signature tracking",
    ],
  },
  {
    icon: <LayoutPanelTop className="h-6 w-6 text-violet-200" />,
    title: "Smart intake forms",
    copy:
      "Launch forms in minutes with drag-and-drop fields, conditional sections, and branded glass panels that convert better than PDFs.",
    bullets: ["File upload + approvals", "Templates for 6 industries", "Embed anywhere"],
  },
  {
    icon: <Timer className="h-6 w-6 text-cyan-200" />,
    title: "Calendar & scheduling",
    copy: "Offer 1:1, multi-step, and VIP booking flows with buffers, reminders, and auto-created video links.",
    bullets: ["Timezone intelligence", "SMS + email reminders", "Upcoming timeline"],
  },
  {
    icon: <Files className="h-6 w-6 text-emerald-200" />,
    title: "File hub",
    copy: "Supabase Storage keeps client files, redlines, and signed PDFs in one shared drawer with history.",
    bullets: ["Version history", "Inline approvals", "Granular permissions"],
  },
  {
    icon: <MessageSquareMore className="h-6 w-6 text-rose-200" />,
    title: "Realtime chat & nudges",
    copy: "Every lead gets a contextual chat thread with typing indicators, push notifications, and proposal references.",
    bullets: ["In-app & email", "AI drafted replies", "Auto nudges"],
  },
  {
    icon: <LineChart className="h-6 w-6 text-indigo-200" />,
    title: "Lead analytics",
    copy: "See drop-off points, proposal acceptance, booked revenue, and intake response heatmaps.",
    bullets: ["Funnels + cohorts", "Export CSV", "API-ready"],
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: siteMetadata.name,
  url: `${siteMetadata.url}/features`,
  description: "ClientFlow feature overview",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "49",
  },
};

export default function FeaturesPage() {
  return (
    <MarketingLayout>
      <JsonLd data={productJsonLd} />
      <SectionHeading
        eyebrow="Product tour"
        title="ClientFlow is the entire intake → proposal → schedule flow"
        subtitle="From the first form to the signed proposal, every surface syncs over Supabase so nothing slips."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {featureSections.map((section) => (
          <GlassCard key={section.title}>
            {section.icon}
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <p className="text-white/70">{section.copy}</p>
            <ul className="mt-4 space-y-1 text-sm text-white/70">
              {section.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      <section className="mt-16 grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-10 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Motion storytelling"
            title="Scroll reveals every milestone"
            subtitle="Your landing converts with scroll-triggered demos that animate AI proposals, calendar booking, and file uploads."
          />
          <p className="mt-4 text-white/70">
            Glass cards animate with blur + light, and a cursor halo guides visitors to interactive tiles. Every CTA supports keyboard navigation for accessibility.
          </p>
          <Button className="mt-6">See interactive demo</Button>
        </div>
        <div className="space-y-4">
          {guidedFlow.map((step, idx) => (
            <GlassCard key={step.title} className="flex items-start gap-3">
              <span className="mt-1 text-sm text-white/60">0{idx + 1}</span>
              <div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="text-sm text-white/60">{step.body}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="rounded-[36px] border border-white/10 bg-gradient-to-r from-sky-500/20 to-violet-500/20 p-10 text-center">
        <h2 className="text-3xl font-semibold">AI copilots meet high-trust UI</h2>
        <p className="mt-4 text-white/80">
          Ship your intake OS, personalize the experience, and let Gemini handle the heavy writing.
        </p>
        <Button className="mt-6">Start trial</Button>
      </section>
    </MarketingLayout>
  );
}
