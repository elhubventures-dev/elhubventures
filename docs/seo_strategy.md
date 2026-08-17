# SEO + GEO strategy — EL-HUB VENTURES

**Site:** https://www.elhubventures.com  
**Stack:** Next.js 15 App Router  
**Research mode:** hybrid (no paid APIs until GSC/Ahrefs exports are pasted)  
**Last updated:** 2026-08-16 (sitemap Success on GSC + Bing — 30 URLs discovered)

## Locked inputs

- Niche: web/mobile engineering + technical SEO
- Language: English only (Section 10 skipped)
- Geo: Nigeria HQ — 12 Garba A Idris St, Kado, Abuja 900108; hubs CA, UK, CM; area served includes US

## Section log

| Section | Status | Notes |
|---|---|---|
| 0 Audit | Complete | GSC 12m: 20 clicks, 898 impressions, 2.2% CTR, pos 5.7; 3 valid URLs |
| 1 Keywords | Complete (qualitative) | Volume/KD blank |
| 2 Technical | Complete | OG 1200×630, CSP, legal noindex |
| 3 On-page | Complete | Answer capsules, internal links, service depth |
| 4 Schema | Complete | Org, LocalBusiness, FAQ, Breadcrumb, Person, ProfessionalService, BlogPosting, HowTo |
| 5 GEO | Complete | Glossary, FAQ hub, React vs Flutter |
| 6 Local | GBP verified; NAP synced in schema/contact | Complete profile, photos, weekly posts, more reviews |
| 7 Content | Complete | Calendar columns + 4 briefs |
| 8 Analytics | GA4 live (2 users / 7d, 0 key events) | Mark generate_lead as a key event |
| 9 Links | Infra only | No outreach sent |
| 10 i18n | Skipped | English-only |
| 11 CI | Complete | `seo-check.yml`, `seo:audit`, `seo:ping` |
| 12 Close-out | See `.tmp/seo` checklist |

## GSC / Bing baseline (ingested)

See `.tmp/seo/gsc_ingest.md`. Earlier Coverage: 3 valid indexed URLs, 15 discovered-not-indexed.

**Sitemap (16 Aug 2026):** both GSC and Bing report `https://www.elhubventures.com/sitemap.xml` as **Success**, last read/crawl same day, **30 pages discovered** (was 18). Discovery ≠ indexing — next step is URL Inspection on money pages.

## Owner tasks (not done in repo)

1. ~~Resubmit sitemap~~ — done (GSC + Bing, 30 URLs).
2. Request indexing on canonicals: `/`, `/services`, `/contact`, `/about`, `/resources`, `/services/web-development`, `/services/seo-services`, live insight slugs. Skip `.html` / `http://`.
3. Confirm apex → www 301 (apex still receives impressions).
4. Paste PageSpeed / Lighthouse JSON for CWV.
5. Finish GBP profile strength: services, photos, weekly posts; ask for reviews (3 × 5.0 today).
6. Push the **same** NAP to Bing Places, Apple Maps, directories.
7. In GA4 Admin, mark `generate_lead` as a key event (currently 0 key events).
8. Merchant Center is **3/6 complete**. Do not finish Shopping unless you sell SKU products.

## GBP (verified 2026-08-16)

- Listing name on Google: `El-Hub Ventures` (title case; keep this on GBP)
- Status: Verified · category: Software company in Abuja
- Address: 12 Garba A Idris St, Kado, Abuja Municipal Area, Abuja 900108, FCT
- Phone on GBP: 0913 937 0513 (same as +234 913 937 0513)
- Reviews: 5.0 from 3 reviews · ~244 customer interactions
- Profile strength: incomplete (complete info, photos, posts)
- Business Manager: EL-HUB VENTURES `om-5635804241535219152` linked to this GBP
- Site/schema NAP now matches this street address

## In-repo leftovers (this pass)

Done: homepage title leads with EL-HUB VENTURES; sitemap lastmod 2026-08-16; `/resources/statistics`; `/resources/agency-vs-freelancer`.

Remaining work is **Google-only** (list above). Do not treat Merchant Center or Ahrefs as blocking the deploy.

## International (Section 10)

Do not add `/en/` or hreflang until a second language is funded.
