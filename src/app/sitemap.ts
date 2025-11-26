import type { MetadataRoute } from "next";
import { siteMetadata } from "@/data/site-content";

const routes = [
  "/",
  "/features",
  "/pricing",
  "/docs",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
  "/refund-terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteMetadata.url}${route}`,
    changefreq: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
