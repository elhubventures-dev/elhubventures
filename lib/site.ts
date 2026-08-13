export const SITE_NAME = "EL-HUB VENTURES";
export const SITE_URL = "https://www.elhubventures.com";
export const SITE_EMAIL = "contact@elhubventures.com";
export const GA_MEASUREMENT_ID = "G-0R31KZCPYT";
export const CALENDLY_URL = "https://calendly.com/contact-elhubventures/30min";

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/elhubventures" },
  { label: "Facebook", href: "https://www.facebook.com/elhubventures" },
  { label: "Instagram", href: "https://www.instagram.com/elhubventures/" },
  { label: "TikTok", href: "https://www.tiktok.com/@elhubventures" },
] as const;

export const HUBS = [
  {
    code: "NG",
    name: "Nigeria (HQ)",
    location: "Abuja 900108, Nigeria",
    phone: "+234 913 937 0513",
    phoneHref: "tel:+2349139370513",
    email: "ng@elhubventures.com",
    whatsapp: "https://wa.me/2349139370513",
  },
  {
    code: "CA",
    name: "Canada",
    location: "Ontario L9T 7P7, Canada",
    email: "cad@elhubventures.com",
  },
  {
    code: "UK",
    name: "United Kingdom",
    location: "Birmingham B20 2BT, UK",
    email: "uk@elhubventures.com",
  },
  {
    code: "CM",
    name: "Cameroon",
    location: "Limbe, Cameroon",
    phone: "+237 6 96 54 18 45",
    phoneHref: "tel:+237696541845",
    email: "cmr@elhubventures.com",
    whatsapp: "https://wa.me/237696541845",
  },
] as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Work" },
  { href: "/resources", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    body: "Deep-dive into your goals, audience, and competitive landscape. We map every requirement before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    body: "Wireframes, prototypes, and pixel-perfect mockups. You see and approve the experience before development begins.",
  },
  {
    number: "03",
    title: "Develop",
    body: "Agile sprints with weekly demos. Clean, tested, production-grade code built on modern architecture patterns.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    body: "Launch day and beyond — CI/CD pipelines, monitoring dashboards, and ongoing optimization to ensure peak performance.",
  },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    title: "Project-based",
    body: "Best for clearly scoped products and deadlines.",
    price: "From $8,000",
  },
  {
    title: "Dedicated team",
    body: "Best for scaling roadmap execution with speed.",
    price: "From $5,500 / month",
  },
  {
    title: "Growth + SEO retainer",
    body: "Best for continuous optimization and inbound growth.",
    price: "From $1,500 / month",
  },
] as const;

export const FAQS = [
  {
    question: "What does EL-HUB VENTURES do?",
    answer:
      "We deliver end-to-end web development, mobile apps, UI/UX, cloud and DevOps, technical SEO, digital strategy, AI-enabled products, and related training — focused on measurable business outcomes.",
  },
  {
    question: "Where is EL-HUB VENTURES located?",
    answer:
      "Headquartered in Abuja, Nigeria, with commercial hubs in Canada, the United Kingdom, and Cameroon. We collaborate remotely with clients across North America, Europe, and Africa.",
  },
  {
    question: "Do you offer technical SEO and GEO-friendly site structure?",
    answer:
      "Yes. Our SEO practice covers audits, keyword mapping, schema markup, Core Web Vitals improvements, and content architecture designed for traditional search and AI-driven answers.",
  },
  {
    question: "Which engagement models do you support?",
    answer:
      "We offer fixed-scope projects, dedicated delivery teams, and growth or SEO retainers so roadmap work stays aligned with your budget and timeline.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Use the contact form to share scope, timeline, and goals — or book a strategy call. We respond with a tailored proposal and next steps.",
  },
] as const;

export const PROOF_STATS = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients served" },
  { value: "5+", label: "Years in delivery" },
  { value: "4", label: "Operating markets" },
] as const;

export const WHY_STATS = [
  { value: "99%", label: "Client satisfaction" },
  { value: "24/7", label: "Support available" },
  { value: "3x", label: "Faster delivery" },
  { value: "100%", label: "Code ownership" },
] as const;

export const WHY_POINTS = [
  {
    title: "Agile & Transparent",
    body: "Weekly demos, real-time dashboards, zero surprises.",
  },
  {
    title: "Performance Obsessed",
    body: "Lighthouse 90+ scores. Sub-second load times. Always.",
  },
  {
    title: "Future-Proof Stack",
    body: "Modern frameworks, clean architecture, easy to maintain and scale.",
  },
  {
    title: "Post-Launch Support",
    body: "Ongoing maintenance, monitoring, and iterative improvement.",
  },
] as const;

export const TRUST_LOGOS = [
  "FinTrack Group",
  "HealthPulse Labs",
  "MarketEdge Commerce",
  "TeamSync Systems",
  "NovaCloud Africa",
] as const;

export const TRUST_QUOTES = [
  { quote: "Execution quality was elite from week one.", author: "Adebayo Ogunlesi, FinTrack Pro" },
  { quote: "Our app launch timeline was cut by nearly half.", author: "Ngozi Kalu, HealthPulse" },
  { quote: "Infrastructure and growth decisions paid off immediately.", author: "Emmanuel Mensah, MarketEdge" },
] as const;

export const SEO_PILLARS = [
  {
    title: "Technical Audit",
    body: "Complete crawl analysis covering indexing, site speed, Core Web Vitals, mobile usability, URL structure, and schema opportunities.",
    badge: "Foundation",
  },
  {
    title: "Keyword Map",
    body: "Intent-driven keyword mapping for core pages, supporting pages, and content clusters designed to capture high-value searches.",
    badge: "Strategy",
  },
  {
    title: "On-Page Fixes",
    body: "Hands-on implementation of optimized metadata, heading hierarchy, internal linking, image SEO, and content alignment updates.",
    badge: "Execution",
  },
  {
    title: "Monthly Reporting",
    body: "Clear monthly performance reports with rankings, traffic trends, lead impact, wins, and next-priority action items.",
    badge: "Optimization",
  },
] as const;

export const PORTFOLIO = [
  {
    title: "FinTrack Pro",
    tag: "Web App",
    body: "Real-time financial analytics dashboard with AI-powered insights and automated reporting.",
    stack: ["React", "Node.js", "PostgreSQL"],
    image: "/assets/images/portfolio/fintrack-pro.svg",
    alt: "Sample dashboard design for FinTrack Pro financial analytics platform",
  },
  {
    title: "HealthPulse",
    tag: "Mobile App",
    body: "Cross-platform health & wellness app with real-time vitals tracking and telemedicine integration.",
    stack: ["Flutter", "Firebase", "ML Kit"],
    image: "/assets/images/portfolio/healthpulse.svg",
    alt: "Sample mobile app design for HealthPulse wellness and telemedicine product",
  },
  {
    title: "MarketEdge",
    tag: "E-Commerce",
    body: "High-performance marketplace with multi-vendor support, real-time inventory, and payment processing.",
    stack: ["Next.js", "Stripe", "MongoDB"],
    image: "/assets/images/portfolio/marketedge.svg",
    alt: "Sample ecommerce marketplace design for MarketEdge multi-vendor platform",
  },
  {
    title: "TeamSync",
    tag: "SaaS Platform",
    body: "Enterprise collaboration platform with real-time project management and automated workflows.",
    stack: ["Vue.js", "GraphQL", "AWS"],
    image: "/assets/images/portfolio/teamsync.svg",
    alt: "Sample SaaS interface design for TeamSync project management platform",
  },
] as const;

export const HOME_CASE_STUDIES = [
  {
    title: "FinTrack Pro Rebuild",
    body: "Re-architected analytics platform for speed and reliability across 120k+ monthly sessions.",
    metrics: ["+68% conversion rate", "1.3s page load", "99.95% uptime"],
  },
  {
    title: "MarketEdge Scale Project",
    body: "Optimized checkout, search, and inventory sync for multi-vendor growth.",
    metrics: ["+42% checkout completion", "10x traffic readiness", "−35% infrastructure cost"],
  },
  {
    title: "HealthPulse Acquisition Engine",
    body: "Combined product improvements with technical SEO and content structure refresh.",
    metrics: ["+214% organic traffic", "+51% booked consultations", "Top 3 for 19 keywords"],
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: "AO",
    quote:
      "EL-HUB didn't just build our app — they engineered our market entry. The team's strategic approach and technical execution exceeded every expectation.",
    name: "Adebayo Ogunlesi",
    role: "CEO, FinTrack Pro",
  },
  {
    initials: "NK",
    quote:
      "From concept to App Store launch in 8 weeks. The cross-platform quality was indistinguishable from native. Absolutely world-class delivery.",
    name: "Ngozi Kalu",
    role: "Founder, HealthPulse",
  },
  {
    initials: "EM",
    quote:
      "Our marketplace handles 10x the traffic we planned for — zero downtime. EL-HUB's architecture decisions saved us months of refactoring.",
    name: "Emmanuel Mensah",
    role: "CTO, MarketEdge",
  },
] as const;

export const PARTNER_BADGES = [
  "AWS Partner Network",
  "Google Analytics Certified Team",
  "Meta Business Partner",
] as const;

export const TRUST_NOTES = [
  { title: "HTTPS secured", body: "All sessions are encrypted in transit." },
  { title: "Data handling", body: "Form data is used only for project communication and service delivery." },
  { title: "Reliability", body: "Dedicated support channels, response SLA, and maintenance plans available." },
] as const;

export const RESOURCE_HIGHLIGHTS = [
  { title: "Technical SEO Checklist for SaaS", body: "How to fix crawling, indexing, and on-page structure fast." },
  { title: "MVP Architecture Playbook", body: "A practical blueprint for shipping fast without tech debt traps." },
  { title: "Conversion UX Patterns", body: "Interface decisions that improve pipeline quality and close rate." },
] as const;

export const TEAM = [
  {
    name: "Adebayo Ogunlesi",
    role: "Product Engineering Lead",
    bio: "12+ years in scalable platform delivery across fintech and enterprise SaaS.",
    image: "/assets/images/team/adebayo-ogunlesi.svg",
    credentials: ["AWS Certified", "Scrum Professional"],
  },
  {
    name: "Ngozi Kalu",
    role: "Design & UX Lead",
    bio: "Leads conversion-focused design systems and customer journey work for high-growth products.",
    image: "/assets/images/team/ngozi-kalu.svg",
    credentials: ["Google UX Certified", "Design Systems"],
  },
  {
    name: "Emmanuel Mensah",
    role: "Growth & SEO Lead",
    bio: "Specializes in technical SEO and full-funnel growth programs tied to revenue goals.",
    image: "/assets/images/team/emmanuel-mensah.svg",
    credentials: ["GA4 Certified", "Technical SEO"],
  },
] as const;
