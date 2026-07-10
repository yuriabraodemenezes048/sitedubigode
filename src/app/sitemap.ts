import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, freq: "weekly" as const },
    { path: "/orcamento", priority: 0.9, freq: "monthly" as const },
    { path: "/politica-de-privacidade", priority: 0.3, freq: "yearly" as const },
    { path: "/politica-de-cookies", priority: 0.3, freq: "yearly" as const },
    { path: "/termos-de-uso", priority: 0.3, freq: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
