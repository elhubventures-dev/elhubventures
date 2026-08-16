import { HUBS, HQ_NAP, SITE_EMAIL, SITE_NAME, SITE_URL, SOCIAL_LINKS, TEAM } from "@/lib/site";

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  index?: boolean;
}) {
  const url = absoluteUrl(path);
  const image = absoluteUrl("/assets/images/og-default.png");
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
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE_NAME} — web, mobile, and technical SEO` }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index,
      follow: index,
      "max-image-preview": "large" as const,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
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
        email: SITE_EMAIL,
        telephone: "+2349139370513",
        sameAs: SOCIAL_LINKS.map((link) => link.href),
        address: {
          "@type": "PostalAddress",
          streetAddress: HQ_NAP.streetAddress,
          addressLocality: HQ_NAP.addressLocality,
          addressRegion: HQ_NAP.addressRegion,
          postalCode: HQ_NAP.postalCode,
          addressCountry: HQ_NAP.addressCountry,
        },
        areaServed: [
          { "@type": "Country", name: "Nigeria" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Cameroon" },
          { "@type": "Country", name: "United States" },
        ],
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

export function localBusinessJsonLd() {
  const ng = HUBS[0];
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/assets/images/og-default.png`,
    telephone: ng.phone,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: HQ_NAP.streetAddress,
      addressLocality: HQ_NAP.addressLocality,
      addressRegion: HQ_NAP.addressRegion,
      postalCode: HQ_NAP.postalCode,
      addressCountry: HQ_NAP.addressCountry,
    },
    areaServed: ["NG", "CA", "GB", "CM", "US"],
    priceRange: "$$",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${HQ_NAP.mapsQuery}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function personGraphJsonLd() {
  return TEAM.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: absoluteUrl("/about"),
    image: absoluteUrl(member.image),
  }));
}

export function professionalServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${name} — ${SITE_NAME}`,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["NG", "CA", "GB", "CM", "US"],
  };
}
