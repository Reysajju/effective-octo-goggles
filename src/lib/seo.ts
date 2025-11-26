import type { Metadata } from "next";
import { siteMetadata } from "@/data/site-content";

export const baseUrl = siteMetadata.url;

interface BuildMetadataProps {
  title: string;
  description: string;
  path?: string;
}

export const buildMetadata = ({ title, description, path = "/" }: BuildMetadataProps): Metadata => ({
  title: `${title} · ${siteMetadata.name}`,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${baseUrl}${path}`,
    siteName: siteMetadata.name,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteMetadata.name} preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteMetadata.twitter,
    title,
    description,
    images: [siteMetadata.ogImage],
  },
  alternates: {
    canonical: `${baseUrl}${path}`,
  },
});

export const buildSaasJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteMetadata.name,
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "USD",
    description: "Subscription tiers with 14-day trial",
  },
  url: siteMetadata.url,
  description: siteMetadata.description,
});

export const buildFaqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
