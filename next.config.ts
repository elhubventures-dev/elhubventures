import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  outputFileTracingIncludes: {
    "/resources": ["./insights/**/*.md", "./content_calendar.csv"],
    "/resources/glossary": ["./content/serviceSeo.ts"],
    "/insights/[slug]": ["./insights/**/*.md", "./content_calendar.csv"],
    "/sitemap.xml": ["./insights/**/*.md", "./content_calendar.csv"],
    "/api/contact": ["./email-templates/**"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/case-studies.html", destination: "/case-studies", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/services/index.html", destination: "/services", permanent: true },
      { source: "/services/:slug.html", destination: "/services/:slug", permanent: true },
      { source: "/resources/index.html", destination: "/resources", permanent: true },
      { source: "/insights", destination: "/resources", permanent: true },
      { source: "/insights/", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
