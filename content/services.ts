export type ServiceGroup = "product" | "experience" | "growth" | "platform";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  group: ServiceGroup;
  featured: boolean;
  summary: string;
  outcome: string;
  capabilities: { title: string; body: string }[];
  tags: string[];
  image: string;
  seoTitle: string;
  seoDescription: string;
};

export const SERVICE_GROUPS: { id: ServiceGroup; label: string }[] = [
  { id: "product", label: "Product" },
  { id: "experience", label: "Experience" },
  { id: "growth", label: "Growth" },
  { id: "platform", label: "Platform" },
];

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web",
    group: "product",
    featured: true,
    summary:
      "Fast, maintainable websites and web applications built on modern frontend and backend architecture.",
    outcome:
      "Custom websites and web applications on scalable frontend and backend architectures.",
    capabilities: [
      {
        title: "Full-stack development",
        body: "React, Next.js, Node.js, and Python architectures designed to scale with your product.",
      },
      {
        title: "Progressive web apps",
        body: "Offline-capable web applications with native-like performance on any device.",
      },
      {
        title: "Enterprise systems",
        body: "Secure API integrations, operational tooling, and database design on PostgreSQL or MongoDB.",
      },
    ],
    tags: ["React", "Next.js", "Node.js"],
    image: "/assets/images/services/web-development.png",
    seoTitle: "Web Development Agency Nigeria & USA",
    seoDescription:
      "Custom websites and web applications for teams in Nigeria, the USA, and Canada — built on scalable frontend architectures.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    group: "product",
    featured: true,
    summary:
      "Native and cross-platform apps for iOS and Android, from MVP through App Store launch.",
    outcome: "iOS, Android, and cross-platform products with a consistent, production-grade experience.",
    capabilities: [
      {
        title: "iOS",
        body: "Native iPhone and iPad apps in Swift and SwiftUI, including App Store optimization.",
      },
      {
        title: "Android",
        body: "Kotlin applications following Material Design, with Play Store launch support.",
      },
      {
        title: "Cross-platform",
        body: "React Native and Flutter when a shared codebase is the right commercial choice.",
      },
    ],
    tags: ["Flutter", "React Native", "Swift"],
    image: "/assets/images/services/mobile-app-development.png",
    seoTitle: "Custom Mobile App Development USA & Canada",
    seoDescription:
      "Native and cross-platform mobile applications for iOS and Android, delivered for teams in the USA, Canada, and Nigeria.",
  },
  {
    slug: "ecommerce-saas",
    title: "E-Commerce & SaaS",
    shortTitle: "Commerce & SaaS",
    group: "product",
    featured: false,
    summary: "Storefronts, multi-tenant SaaS, billing, and integrations that support recurring revenue.",
    outcome: "Commerce and SaaS platforms with catalog, tenancy, and billing designed for growth.",
    capabilities: [
      {
        title: "Custom storefronts",
        body: "Catalog management, multi-currency checkout, and conversion-focused funnels.",
      },
      {
        title: "SaaS products",
        body: "Multi-tenancy, authentication, and subscription billing on cloud-native architecture.",
      },
      {
        title: "Integrations",
        body: "CRM, ERP, marketplace, and logistics connections without fragile one-off scripts.",
      },
    ],
    tags: ["Next.js", "Stripe", "SaaS"],
    image: "/assets/images/services/ecommerce-saas.png",
    seoTitle: "E-Commerce & SaaS Platform Development",
    seoDescription:
      "Custom e-commerce and multi-tenant SaaS platforms for teams in Nigeria and the USA.",
  },
  {
    slug: "ai-data-solutions",
    title: "AI & Data Solutions",
    shortTitle: "AI & Data",
    group: "product",
    featured: false,
    summary: "Practical AI features, analytics, and dashboards tied to operational decisions.",
    outcome: "AI assistants, forecasting models, and executive dashboards grounded in your data.",
    capabilities: [
      {
        title: "Assistants and chatbots",
        body: "Context-aware agents for web and WhatsApp that stay within defined business rules.",
      },
      {
        title: "Predictive analytics",
        body: "Forecasting and customer-behavior models used for planning, not decoration.",
      },
      {
        title: "Visualization",
        body: "Interactive dashboards for executives and operators who need live KPIs.",
      },
    ],
    tags: ["AI", "Analytics", "Dashboards"],
    image: "/assets/images/services/ai-data-solutions.png",
    seoTitle: "AI & Data Solutions Nigeria",
    seoDescription:
      "AI assistants, predictive analytics, and data visualization for operators in Nigeria and international markets.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    group: "experience",
    featured: true,
    summary: "Research, information architecture, and design systems that reduce friction and convert.",
    outcome: "Usable interfaces and design systems that support conversion and long-term product work.",
    capabilities: [
      {
        title: "Research & strategy",
        body: "Interviews, personas, and journey maps that inform what to build — and what not to.",
      },
      {
        title: "UX design",
        body: "Information architecture, wireframes, and interactive prototypes before engineering.",
      },
      {
        title: "UI & systems",
        body: "Visual systems in Figma with accessible, responsive interaction patterns.",
      },
    ],
    tags: ["Figma", "Prototyping", "Design systems"],
    image: "/assets/images/services/ui-ux-design.png",
    seoTitle: "UX/UI Design Services Nigeria, USA & Cameroon",
    seoDescription:
      "User research, UX architecture, and UI design systems for startups and operators across Nigeria, the USA, and Cameroon.",
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    group: "growth",
    featured: true,
    summary: "Technical SEO, content structure, and reporting that compound qualified inbound leads.",
    outcome: "Audits, keyword maps, on-page implementation, and monthly reporting tied to pipeline.",
    capabilities: [
      {
        title: "Technical & organic SEO",
        body: "Crawl analysis, schema, content clusters, Core Web Vitals, and on-page structure.",
      },
      {
        title: "Funnel design",
        body: "Intent mapping from search to conversion paths across core and supporting pages.",
      },
      {
        title: "Nurture & reporting",
        body: "CRM-aligned sequences and monthly rankings, traffic, and lead reporting.",
      },
    ],
    tags: ["Technical SEO", "On-page", "Schema"],
    image: "/assets/images/services/seo-services.png",
    seoTitle: "SEO & Sales Funnel Services Nigeria, USA & UK",
    seoDescription:
      "Technical SEO, keyword mapping, and conversion-focused content structure for teams in Nigeria, the USA, and the UK.",
  },
  {
    slug: "digital-strategy",
    title: "Digital Transformation & Strategy",
    shortTitle: "Strategy",
    group: "growth",
    featured: true,
    summary: "Roadmaps, modernization plans, and automation that reduce operational risk.",
    outcome: "Phased technology roadmaps, legacy modernization, and workflow automation.",
    capabilities: [
      {
        title: "Strategy & roadmapping",
        body: "Maturity assessments that produce a sequenced, fundable technology plan.",
      },
      {
        title: "Legacy modernization",
        body: "API layers and staged replacement of systems that are blocking growth.",
      },
      {
        title: "Workflow automation",
        body: "RPA and native integrations that remove manual work without creating new silos.",
      },
    ],
    tags: ["Roadmaps", "Modernization", "Automation"],
    image: "/assets/images/services/digital-strategy.png",
    seoTitle: "Digital Transformation Strategy Nigeria & USA",
    seoDescription:
      "Digital strategy, legacy modernization, and workflow automation for organizations in Nigeria and the USA.",
  },
  {
    slug: "training-consulting",
    title: "Training & Consulting",
    shortTitle: "Training",
    group: "growth",
    featured: false,
    summary: "Team upskilling and advisory for product, engineering, and growth leaders.",
    outcome: "Hands-on training and advisory so internal teams can operate the systems we ship.",
    capabilities: [
      {
        title: "Growth training",
        body: "Workshops on funnels, digital marketing execution, and scaling software architecture.",
      },
      {
        title: "Technical mastery",
        body: "Hands-on sessions covering web/app development, AI, data, and cloud operations.",
      },
      {
        title: "Corporate consulting",
        body: "Advisory on tech roadmaps, delivery structure, and automation rollout.",
      },
    ],
    tags: ["Workshops", "Advisory", "Enablement"],
    image: "/assets/images/services/training-consulting.png",
    seoTitle: "Corporate Tech Training & Consulting Nigeria",
    seoDescription:
      "Technical training and consulting for leadership and delivery teams in Nigeria and international markets.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud",
    group: "platform",
    featured: true,
    summary: "Cloud architecture, containers, and CI/CD that keep products reliable in production.",
    outcome: "AWS-ready infrastructure, container platforms, and deployment automation.",
    capabilities: [
      {
        title: "Architecture & migration",
        body: "Phased moves to AWS, Azure, or Google Cloud with a documented rollback path.",
      },
      {
        title: "Containers",
        body: "Docker and Kubernetes setups that operators can actually run.",
      },
      {
        title: "CI/CD & IaC",
        body: "Terraform and pipelines that make releases routine instead of events.",
      },
    ],
    tags: ["AWS", "Docker", "Kubernetes"],
    image: "/assets/images/services/cloud-devops.png",
    seoTitle: "Cloud & DevOps Solutions UK & Canada",
    seoDescription:
      "Cloud architecture, containerization, and DevOps automation for teams in the UK, Canada, and Nigeria.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getFeaturedServices() {
  return SERVICES.filter((service) => service.featured);
}

export function servicesByGroup() {
  return SERVICE_GROUPS.map((group) => ({
    ...group,
    services: SERVICES.filter((service) => service.group === group.id),
  }));
}
