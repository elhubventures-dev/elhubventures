export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  timeline: string;
  stack: string;
  before: string;
  after: string;
  impact: string;
  metrics: string[];
  featured: boolean;
  image: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fintrack-pro",
    title: "Analytics platform modernization",
    sector: "Fintech delivery example",
    timeline: "14 weeks",
    stack: "Next.js, Node.js, PostgreSQL, Redis, AWS",
    before: "4.8s average load, fragmented analytics, 2.1% trial conversion.",
    after: "1.3s load, unified dashboards, 3.5% trial conversion.",
    impact: "Faster onboarding increased paid acquisition and reduced early churn.",
    metrics: ["+68% conversion", "1.3s page load", "99.95% uptime"],
    featured: true,
    image: "/assets/images/portfolio/fintrack-pro.svg",
  },
  {
    slug: "marketedge",
    title: "Checkout and inventory scale",
    sector: "Commerce delivery example",
    timeline: "10 weeks",
    stack: "React, GraphQL, MongoDB, Stripe, Kubernetes",
    before: "58% checkout completion and inventory mismatch during promotions.",
    after: "82% checkout completion with near real-time inventory sync.",
    impact: "Higher order volume and fewer campaign-period support incidents.",
    metrics: ["+42% checkout completion", "10x traffic capacity", "−35% infrastructure cost"],
    featured: true,
    image: "/assets/images/portfolio/marketedge.svg",
  },
  {
    slug: "healthpulse",
    title: "Organic acquisition engine",
    sector: "Health product delivery example",
    timeline: "6-month retainer",
    stack: "Technical SEO, content hub, GA4, Search Console",
    before: "Weak indexing, low visibility, inconsistent lead flow.",
    after: "Structured architecture, ranking gains, and a steadier qualified pipeline.",
    impact: "SEO became a dependable acquisition channel with compounding monthly return.",
    metrics: ["+214% organic traffic", "+51% booked consultations", "Top 3 for 19 keywords"],
    featured: true,
    image: "/assets/images/portfolio/healthpulse.svg",
  },
];

export function getFeaturedCaseStudies() {
  return CASE_STUDIES.filter((study) => study.featured);
}
