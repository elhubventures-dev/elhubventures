export type ServiceSeo = {
  slug: string;
  answer: string;
  longDescription: string;
  definitions: { term: string; meaning: string }[];
  faqs: { question: string; answer: string }[];
};

export const SERVICE_SEO: ServiceSeo[] = [
  {
    slug: "web-development",
    answer:
      "A web development agency designs, builds, and maintains production websites and web applications. EL-HUB VENTURES delivers React and Next.js products from Nigeria HQ for teams in Nigeria, the USA, Canada, and the UK, with technical SEO baked into the architecture.",
    longDescription:
      "Founders searching for a web development agency in Nigeria or a custom web application partner in the USA usually need more than a brochure site. They need a stack that can take traffic, accept payments, expose APIs, and stay maintainable after launch. We scope frontend and backend together: Next.js or React on the client, Node.js or Python services, and PostgreSQL or MongoDB depending on the data model. Progressive web apps cover offline and installable experiences when a native store listing is not required yet. Enterprise work includes authenticated portals, operational tooling, and integrations that must not become a pile of one-off scripts. Every engagement includes information architecture, Core Web Vitals targets, and a handover so your team owns the code. If you already have a site, we audit crawlability and performance before rewriting. Delivery follows discover, design, develop, then deploy with CI/CD so releases stay routine.",
    definitions: [
      {
        term: "Web application",
        meaning:
          "Software delivered in the browser with authenticated workflows, APIs, and a database — not a static marketing page.",
      },
      {
        term: "Technical SEO",
        meaning:
          "Crawl, index, speed, and structured-data work that lets search engines and AI engines understand the product.",
      },
    ],
    faqs: [
      {
        question: "What is included in a custom web development engagement?",
        answer:
          "Discovery, UX, frontend, backend or CMS, staging, production deploy, analytics, and a documented handover. SEO foundations are included on marketing surfaces.",
      },
      {
        question: "Do you rebuild existing sites or only greenfield products?",
        answer:
          "Both. We migrate URLs with 301s, preserve ranking pages, and replace fragile stacks when the audit shows rewrite is cheaper than patching.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    answer:
      "Custom mobile app development covers native iOS and Android or a shared React Native or Flutter codebase. EL-HUB VENTURES ships MVPs through store launch for USA, Canada, and Nigeria teams, including App Store and Play Store submission support.",
    longDescription:
      "Choosing native Swift/Kotlin versus Flutter or React Native is a commercial decision, not a fashion one. Native is right when platform APIs, performance, or store positioning demand it. Cross-platform is right when one product team must ship iOS and Android on the same budget and the UI can share a design system. We start with product scope, security, and offline rules, then prototype the critical flows before engineering. Launch work includes store listings, privacy questionnaires, crash reporting, and a release train. Security practices include secure storage, TLS, and least-privilege APIs. After launch we can retain for iteration, ASO, and backend scale.",
    definitions: [
      {
        term: "MVP",
        meaning: "The smallest shippable product that tests a paying workflow, not a pile of unused features.",
      },
      {
        term: "Cross-platform",
        meaning: "One codebase (Flutter or React Native) compiled to iOS and Android when shared UI is acceptable.",
      },
    ],
    faqs: [
      {
        question: "Should we choose Flutter or React Native in 2026?",
        answer:
          "Flutter fits custom UI and consistent motion; React Native fits teams already deep in React. We recommend after mapping talent, libraries, and store constraints — see our comparison insight.",
      },
      {
        question: "Do you submit to the App Store and Play Store?",
        answer: "Yes. We prepare listings, screenshots, privacy labels, and the first production binaries with you.",
      },
    ],
  },
  {
    slug: "ecommerce-saas",
    answer:
      "E-commerce and SaaS development means catalog, checkout, tenancy, and billing that support recurring revenue. EL-HUB VENTURES builds Next.js storefronts and multi-tenant products with Stripe-class payments for Nigeria and USA operators.",
    longDescription:
      "Commerce work fails when checkout, tax, inventory, and fulfillment are treated as afterthoughts. SaaS work fails when tenancy and billing are bolted on. We design catalog models, role-based access, subscription states, and webhook-safe payment flows up front. Multi-currency and local payment methods matter for Nigeria and international buyers. Integrations to CRM, ERP, or logistics stay behind stable APIs. Performance and SEO for category and product URLs are part of the same delivery, not a later marketing ticket.",
    definitions: [
      {
        term: "Multi-tenant SaaS",
        meaning: "One application instance serving many customers with isolated data and configuration per tenant.",
      },
      {
        term: "Storefront",
        meaning: "The customer-facing catalog, cart, and checkout experience connected to inventory and payments.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate from Shopify or a custom cart?",
        answer:
          "Yes. We map products, customers, and URLs, then 301 old paths so organic equity is not discarded.",
      },
      {
        question: "Do you handle subscription billing?",
        answer: "Yes. We implement plan changes, dunning, taxes, and admin reporting against a payment provider you control.",
      },
    ],
  },
  {
    slug: "ai-data-solutions",
    answer:
      "AI and data solutions at EL-HUB VENTURES are operational: assistants with business rules, forecasting models, and dashboards. We serve Nigeria and international operators who need decisions, not demo chat widgets.",
    longDescription:
      "Useful AI sits on clean data, retrieval rules, and evaluation — not a public chatbot pasted into a footer. We define what the assistant may say, which systems it may call, and how humans review exceptions. Predictive work starts with the decision the model must change. Dashboards expose live KPIs with access control. WhatsApp or web agents are scoped with consent, logging, and fallback to a human. We do not claim unmeasured accuracy; we instrument quality and iterate.",
    definitions: [
      {
        term: "Retrieval-augmented generation",
        meaning: "Answering from your documents or APIs instead of unconstrained model memory.",
      },
      {
        term: "Operational dashboard",
        meaning: "A live view of KPIs that operators use to act, not a static slide.",
      },
    ],
    faqs: [
      {
        question: "Will you train a custom foundation model?",
        answer:
          "Rarely. Most products need retrieval, fine-tuning of prompts, and evaluation on your tasks — cheaper and safer than training from scratch.",
      },
      {
        question: "Can AI features run on our existing app?",
        answer: "Yes. We add APIs and UI to the current stack when the architecture can support latency and logging requirements.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    answer:
      "UI/UX design services cover research, information architecture, wireframes, and design systems. EL-HUB VENTURES produces conversion-focused interfaces for Nigeria, USA, and Cameroon product teams before engineering starts.",
    longDescription:
      "Design that never ships is theatre. We interview, map journeys, and decide what not to build. Wireframes and prototypes are reviewed with operators, then a Figma system gives engineering tokens, states, and accessibility notes. Responsive and WCAG-oriented patterns are default. Conversion work is measured against funnel steps, not opinions about color. Design systems reduce later redesign cost when the product adds roles or locales.",
    definitions: [
      {
        term: "Design system",
        meaning: "Reusable components, tokens, and rules so product UI stays consistent as teams grow.",
      },
      {
        term: "Information architecture",
        meaning: "How content and tasks are grouped so users and crawlers can find the next step.",
      },
    ],
    faqs: [
      {
        question: "Do engineers work from Figma only?",
        answer: "Figma is the source of visual truth; we also document states, empty views, and error copy for implementation.",
      },
      {
        question: "Can you audit an existing product UX?",
        answer: "Yes. We produce a friction report with prioritized fixes tied to conversion or support load.",
      },
    ],
  },
  {
    slug: "seo-services",
    answer:
      "SEO services here mean technical SEO, keyword mapping, schema, Core Web Vitals, and content architecture for Google and AI answer engines. EL-HUB VENTURES runs retainers for Nigeria, USA, and UK teams that need pipeline, not vanity traffic.",
    longDescription:
      "Technical SEO without content strategy stalls; content without crawlable HTML wastes budget. We crawl, map intent to URLs, implement metadata and structured data, and fix speed and internal links. Generative engine optimization (GEO) uses answer capsules, FAQ schema, and llms.txt so AI systems can cite you. Reporting covers Search Console queries, conversions, and regressions. We do not sell link packages or cloaking. Local SEO is available when NAP and Google Business Profile are in scope.",
    definitions: [
      {
        term: "GEO",
        meaning: "Generative Engine Optimization — structuring content so AI search systems can extract and cite it.",
      },
      {
        term: "Keyword map",
        meaning: "One primary intent per URL plus supporting terms, with gaps flagged for new pages.",
      },
    ],
    faqs: [
      {
        question: "How is this different from buying backlinks?",
        answer:
          "We earn mentions with useful pages and outreach templates. We do not buy PBN or directory spam links.",
      },
      {
        question: "When do rankings move?",
        answer:
          "Technical fixes can show in weeks; competitive head terms often take months. We set baselines in Search Console first.",
      },
    ],
  },
  {
    slug: "digital-strategy",
    answer:
      "Digital transformation strategy is a sequenced technology roadmap: what to modernize, automate, or retire. EL-HUB VENTURES produces fundable plans for Nigeria and USA organizations that cannot freeze operations for a rewrite.",
    longDescription:
      "Strategy work starts with maturity, risk, and cash — not a slide of buzzwords. We assess systems, data, and delivery capacity, then sequence API layers, replacements, and automation so revenue does not stop. Legacy modernization prefers strangler patterns over big-bang cutovers. Workflow automation is scoped to remove manual steps without creating new silos. The output is a roadmap with owners, costs, and decision gates your board can fund.",
    definitions: [
      {
        term: "Legacy modernization",
        meaning: "Replacing or wrapping old systems in stages so the business keeps running.",
      },
      {
        term: "Workflow automation",
        meaning: "Connecting existing tools so humans stop copying data between screens.",
      },
    ],
    faqs: [
      {
        question: "Do you only recommend a rebuild?",
        answer: "No. Many programs start with APIs, observability, and a single high-pain workflow.",
      },
      {
        question: "Can this include SEO and product engineering?",
        answer: "Yes. Strategy often hands off into web, cloud, or growth retainers with the same team.",
      },
    ],
  },
  {
    slug: "training-consulting",
    answer:
      "Corporate tech training and consulting upskills your product, engineering, and growth teams so they can operate what ships. EL-HUB VENTURES runs workshops in Nigeria and remote sessions for international leadership.",
    longDescription:
      "Handover fails when only the vendor understands the system. Workshops cover architecture, SEO operations, cloud basics, or funnel execution depending on the audience. Consulting is advisory on roadmaps, delivery structure, and automation rollout. Sessions are hands-on with your stack where possible, not generic slide decks. We can pair training with a retained engineering squad so learning sticks to real tickets.",
    definitions: [
      {
        term: "Enablement",
        meaning: "Teaching internal teams to run, extend, and govern the systems after launch.",
      },
    ],
    faqs: [
      {
        question: "Are sessions on-site in Abuja?",
        answer: "They can be. Remote and hybrid formats are standard for Canada, UK, and Cameroon hubs.",
      },
      {
        question: "Do you certify attendees?",
        answer: "We issue attendance records. Vendor certifications (AWS, GA4) remain with those bodies.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    answer:
      "Cloud and DevOps consulting covers AWS-ready architecture, containers, and CI/CD. EL-HUB VENTURES helps UK, Canada, and Nigeria teams migrate with rollback paths so releases stop being events.",
    longDescription:
      "Cloud spend without observability is a tax. We design accounts, networking, and environments, then containerize where it helps operators. Terraform and pipelines make infrastructure reviewable. Kubernetes is used when the workload needs it — not as a default. Migrations are phased with documented rollback. Cost reviews sit beside reliability: right-size, cache, and retire idle resources. Security baselines include secrets management, least privilege, and HTTPS everywhere.",
    definitions: [
      {
        term: "CI/CD",
        meaning: "Automated test and deploy pipelines so production changes are small and reversible.",
      },
      {
        term: "Infrastructure as code",
        meaning: "Servers and cloud resources defined in versioned files (for example Terraform), not click-ops.",
      },
    ],
    faqs: [
      {
        question: "Do you only work on AWS?",
        answer: "AWS is common; Azure and Google Cloud are in scope when the client already standardized there.",
      },
      {
        question: "Can you take over an existing Kubernetes cluster?",
        answer: "Yes, after an operations audit: backups, RBAC, ingress, and on-call reality.",
      },
    ],
  },
];

export function getServiceSeo(slug: string) {
  return SERVICE_SEO.find((item) => item.slug === slug);
}
