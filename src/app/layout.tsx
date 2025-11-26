import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/data/site-content";
import { CookieConsent } from "@/components/common/cookie-consent";
import { CursorGlow } from "@/components/common/cursor-glow";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: {
    default: `${siteMetadata.name} · ${siteMetadata.tagLine}`,
    template: `%s · ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    type: "website",
    title: siteMetadata.name,
    description: siteMetadata.description,
    url: siteMetadata.url,
    images: [{ url: siteMetadata.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    site: siteMetadata.twitter,
  },
};

export const viewport: Viewport = {
  themeColor: "#071428",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} cursor-glow antialiased`}>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,255,0.45),transparent_50%)]" />
        <CursorGlow />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
