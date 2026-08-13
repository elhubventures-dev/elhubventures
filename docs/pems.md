# Pulse Engineering Memory System (PEMS) — Project Record

**PEMS Version:** 1.0  
**Last Updated:** 2026-08-13  
**Updated By:** Pulse Software Studio / Senior Full Stack Engineer  

---

## Context Snapshot

| Field | Value |
|---|---|
| Project | EL-HUB VENTURES Website |
| Current version | 2.0.0 |
| Current sprint / phase | Consulting template rebuild (shipped in repo) |
| Architecture (one line) | Next.js App Router marketing site + contact Route Handler + markdown insights |
| Tech stack (one line) | Next.js 15, React 19, TypeScript, Tailwind CSS v4, Zod, React Hook Form, nodemailer, marked |
| Design system | Consulting-light tokens in `app/globals.css` |
| Primary risks | SEO URL cutover; SMTP env vars; illustrative case studies vs leadership names |
| Open decisions | Real client proof vs labelled delivery examples |
| Recent changes | Static HTML/Express rebuilt as Next.js consulting template |
| Next priorities | Production deploy, Lighthouse pass on live domain, photography refresh |

---

## 1. Project Profile

| Field | Value |
|---|---|
| Name | EL-HUB VENTURES Website |
| Description | Public marketing site for a web/mobile/SEO engineering firm |
| Goals | Qualified project briefs; clear services and work; preserved search URLs |
| Target users | Founders and growth teams in NG, UK, CA, CM, US |
| Industry / domain | Digital product engineering / consulting |
| Key features | Homepage, services, case studies, insights, contact form, theme toggle |
| Phase | Build |
| Ownership | EL-HUB VENTURES / Pulse Software Studio |
| Success metrics | Contact submissions; indexed URLs retained via 301s; a11y/performance ≥ 90 |

---

## 2. Technology Profile

| Layer | Choice | Notes / version |
|---|---|---|
| Language(s) | TypeScript | |
| Web framework | Next.js App Router | 15.x |
| Mobile framework | N/A | |
| Backend | Next.js Route Handlers | `/api/contact` |
| Database | None | Insights from CSV + markdown |
| ORM / data layer | N/A | |
| Auth | None (password prompt on partnership PDF) | |
| Styling | Tailwind CSS v4 + CSS tokens | |
| State / data fetching | Server Components | |
| Forms / validation | React Hook Form + Zod | |
| Animation | CSS transitions only | reduced-motion respected |
| Testing | None yet | |
| CI/CD | Vercel | |
| Hosting | Vercel | |
| AI / LLM (if any) | N/A on the public site | |
| Other services | SMTP (Hostinger), Calendly, GA4 after cookie consent | |

**Documented exceptions to PSEF:** Static marketing site; no Prisma/PostgreSQL/auth in this phase.

---

## 3. Architecture Profile

| Field | Value |
|---|---|
| Architecture style | Feature-light Next.js App Router |
| Folder structure summary | `app/`, `components/`, `content/`, `lib/`, `insights/`, `public/`, `email-templates/` |
| Routing strategy | App Router pages; 301s from legacy `.html` paths |
| API strategy | Route Handler POST `/api/contact` |
| Auth model | None |
| State management | Client components for chrome/forms only |
| Caching strategy | `force-dynamic` on insights/resources |
| Background jobs | Content calendar gates publish dates |
| Multi-tenancy | N/A |
| Key integration points | SMTP, Calendly, GA4 |

**Architecture Decision Records (summary):** 2026-08-13 — rebuild in Next.js rather than restyle static HTML; consulting-light visual system.

---

## 4. Design Profile

| Field | Value |
|---|---|
| Brand / product name | EL-HUB VENTURES |
| Design system name / location | Consulting-light — `app/globals.css` |
| Color tokens (summary or path) | paper `#F6F3EC`, ink `#12151C`, gold `#8A6D14`, rule `#E4DFD4` |
| Typography | Source Serif 4 (display), Inter (UI/body) |
| Spacing / radius conventions | 4/8/12/16/24/32/48/64; radius 4px/8px |
| Component library | `components/ui/*`, `components/layout/*` |
| Icon set | Inline SVG |
| Motion language | 150–200ms opacity/transform; reduced-motion disable |
| Accessibility target | WCAG 2.2 AA |

---

## 5. Engineering Standards

| Convention | Project standard |
|---|---|
| File / component naming | PascalCase components, camelCase functions |
| Branch naming | `feature/`, `bugfix/`, `hotfix/`, `release/` |
| Commit style | Conventional Commits |
| PR / review process | Pulse playbook review checklist |
| Env var naming | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL` |
| Testing expectations | Manual + Lighthouse until a test suite is added |
| Documentation location | `docs/pems.md`, `llms.txt` |

**Exceptions to PSEF:** Express/static HTML retired.

---

## 6. Project Decisions

| Date | Decision | Reasoning | Alternatives considered | Impact |
|---|---|---|---|---|
| 2026-08-13 | Next.js App Router rebuild | Shared chrome, tokens, maintainability | Static HTML restyle | New stack; 301s required |
| 2026-08-13 | Light-first consulting look | Professional B2B UX vs luxury dark template | Keep gold-on-black | New visual identity |
| 2026-08-13 | Case studies labelled as delivery examples | Same names previously used as clients and leadership | Fake testimonials | Trust risk reduced |

---

## 7. Known Constraints

| Type | Constraint |
|---|---|
| Budget / timeline | Rebuild in one implementation pass |
| Technical | Must preserve SMTP contact and calendar-gated markdown |
| Business | SEO URLs must 301 from `.html` |
| Legal / compliance | Cookie consent before GA4 |
| Other | No CMS in v1 |

---

## 8. Active Work

| Field | Value |
|---|---|
| Current sprint / milestone | Consulting template rebuild |
| Open tasks | Live deploy verification |
| Blocked tasks | None |
| Technical debt (active) | Duplicate `assets/` vs `public/assets/`; no automated tests |

---

## 9. Reusable Assets

| Asset | Path / location | Notes |
|---|---|---|
| Components | `components/ui`, `components/layout` | Header, footer, cards, form |
| Services / utilities | `lib/posts.ts`, `lib/contact.ts`, `lib/seo.ts` | |
| Content | `content/services.ts`, `content/case-studies.ts` | |

---

## 10. Risk Register

| Risk | Category | Severity | Mitigation | Status |
|---|---|---|---|---|
| `.html` URLs 404 | Business | High | Permanent redirects in `next.config.ts` | Mitigated |
| SMTP failure after cutover | Technical | High | Same env vars; Node runtime on route | Open |
| Illustrative work read as clients | Business | Medium | Explicit labelling on Work | Mitigated |
| Insights unpublished until rebuild | Technical | Low | `force-dynamic` on resources/insights | Mitigated |

---

## 11. Improvement Backlog

| Idea | Area | Priority | Notes |
|---|---|---|---|
| Automated a11y/Lighthouse CI | Testing | Medium | |
| Real photography | UI | Medium | |
| Drop duplicate root `assets/` | Architecture | Low | Serve only `public/assets` |

---

## 12. Collaboration Notes

| Note | Detail |
|---|---|
| Assumptions | Vercel remains the host |
| External dependencies | Hostinger SMTP, Calendly, GA4 |
| Specialist handoffs | Brand/UX defined in rebuild plan; engineering implemented |

---
