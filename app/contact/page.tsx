import type { Metadata } from "next";
import Script from "next/script";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { HubCard } from "@/components/ui/HubCard";
import { PageHero } from "@/components/ui/PageHero";
import { HUBS, SITE_EMAIL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with EL-HUB VENTURES for your next web, mobile, or cloud project. Nigeria HQ plus Canada, UK, and Cameroon hubs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need to ship."
        description="Share scope, timeline, and constraints. We reply with a roadmap and a proposal — usually within 48 hours."
      />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl text-ink">Offices</h2>
            <p className="mt-3 text-ink-muted">
              General inquiries:{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="text-ink hover:text-gold">
                {SITE_EMAIL}
              </a>
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {HUBS.map((hub) => (
                <HubCard key={hub.code} hub={hub} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink">Project brief</h2>
            <p className="mt-3 mb-6 text-ink-muted">Required fields help us scope a useful first reply.</p>
            <ContactForm />
          </div>
        </Container>
      </section>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}
