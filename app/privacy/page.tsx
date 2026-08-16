import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for EL-HUB VENTURES. Learn how we collect, use, and protect your data.",
  path: "/privacy",
  index: false,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: April 2026" />
      <section className="py-16">
        <Container className="max-w-3xl space-y-5 text-ink-muted">
          <p>
            EL-HUB VENTURES collects contact details and project information submitted through this website to
            respond to inquiries, provide services, and improve delivery quality.
          </p>
          <p>
            We do not sell personal information. We may use trusted third-party processors for communication,
            analytics, and service delivery.
          </p>
          <p>
            You may request access, correction, or deletion of your data by emailing{" "}
            <a href="mailto:contact@elhubventures.com" className="text-ink hover:text-gold">
              contact@elhubventures.com
            </a>
            .
          </p>
          <p>By using this website, you agree to this policy.</p>
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
