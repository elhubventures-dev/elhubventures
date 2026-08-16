import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { getLivePosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2026-08-16");
  const staticRoutes = [
    "",
    "/contact",
    "/about",
    "/case-studies",
    "/resources",
    "/resources/glossary",
    "/resources/faq",
    "/resources/react-vs-flutter",
    "/resources/statistics",
    "/resources/agency-vs-freelancer",
    "/services",
  ];

  const serviceEntries = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const insightEntries = getLivePosts().map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route || "/"}`,
      lastModified: lastMod,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/contact" || route === "/services" ? 0.9 : 0.8,
    })),
    ...serviceEntries,
    ...insightEntries,
  ];
}
