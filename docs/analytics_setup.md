# Analytics setup

## Implemented in code

- GA4 measurement ID `G-0R31KZCPYT` loads only after cookie consent (`CookieBanner`).
- Event `generate_lead` fires on successful contact form submit (`method=contact_form`).
- Event `click` fires on `mailto:` and `tel:` via `TrackedLink`.
- GTM is **not** required; gtag.js is sufficient. Add GTM later only if marketing needs a tag container.

## Owner: Google Analytics 4

Property: `elhubventures-bda9d` (measurement ID already in code).

Baseline 9–15 Aug 2026: 2 active users, 48 events, **0 key events**.

In Admin → Events, mark `generate_lead` as a key event so form submits appear on Home.

## Owner: Google Search Console

1. Add DNS TXT verification for `elhubventures.com`.
2. Set preferred host `https://www.elhubventures.com`.
3. Submit `https://www.elhubventures.com/sitemap.xml`.
4. Link GA4 property to GSC.
5. Enable email alerts for coverage and CWV.

## After deploy

```bash
npm run seo:ping
```

Pings Google and Bing sitemap endpoints.

## Conversion events to confirm in GA4 Admin

| Event | Trigger |
|---|---|
| generate_lead | Contact form success |
| click | Phone / email / outbound tracked links |
| lead_form_submit | dataLayer duplicate of form success |
