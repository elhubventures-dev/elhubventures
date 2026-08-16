import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms of service for EL-HUB VENTURES digital services.",
  path: "/terms",
  index: false,
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: April 2026" />
      <section className="py-16">
        <Container className="max-w-3xl space-y-5 text-ink-muted">
          <p>
            By engaging EL-HUB VENTURES, clients agree to project scope, timelines, fees, and delivery terms
            documented in signed proposals or contracts.
          </p>
          <p>
            All intellectual property transfer, payment milestones, support scope, and warranty terms are defined
            per project agreement.
          </p>
          <p>
            EL-HUB VENTURES is not liable for indirect or consequential losses resulting from misuse, third-party
            failures, or unauthorized modifications.
          </p>
          <p>These terms are governed by applicable laws in the operating jurisdiction of the signed agreement.</p>
          <p>
            <Link href="/" className="font-semibold text-ink hover:text-gold">
              Back to homepage
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
