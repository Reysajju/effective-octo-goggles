import { MarketingLayout } from "@/components/layout/marketing-layout";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog & Resources",
  description: "Playbooks, templates, and SEO resources to help freelance consultants run a high-converting intake funnel.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <MarketingLayout>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "ClientFlow Resources",
          url: "https://clientflow.app/blog",
        }}
      />
      <SectionHeading
        eyebrow="Resources"
        title="SEO content library"
        subtitle="Launch ready-to-publish posts focused on intake, AI proposals, and scheduling."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <GlassCard key={post.title}>
            <p className="text-xs uppercase text-white/60">{post.category}</p>
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-white/60">{post.estimate}</p>
            <Button variant="ghost" size="sm" className="mt-4">
              Draft in CMS →
            </Button>
          </GlassCard>
        ))}
      </div>
    </MarketingLayout>
  );
}
