import { SITE_NAME, SITE_URL } from "@/lib/site";

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}) {
  const url = absoluteUrl(path);
  const image = absoluteUrl("/assets/images/hero.png");
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/images/favicon.png`,
          width: 512,
          height: 512,
        },
        description:
          "Web and mobile app development agency delivering scalable engineering, cloud infrastructure, and technical SEO for teams worldwide.",
        email: "contact@elhubventures.com",
        sameAs: [
          "https://www.linkedin.com/company/elhubventures",
          "https://www.facebook.com/elhubventures",
          "https://www.instagram.com/elhubventures/",
          "https://www.tiktok.com/@elhubventures",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abuja",
          postalCode: "900108",
          addressCountry: "NG",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}
