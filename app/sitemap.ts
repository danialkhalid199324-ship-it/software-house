import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // "/portfolio" is intentionally omitted from the sitemap while it is hidden
  // from public navigation. The route stays live; re-add it when real work exists.
  const pages = ["", "/services", "/industries", "/about", "/contact"];
  const legal = ["/privacy", "/terms"];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...legal.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
