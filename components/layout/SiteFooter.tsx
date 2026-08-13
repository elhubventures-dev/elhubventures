import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Container } from "@/components/ui/Container";
import { ProtectedDocLink } from "@/components/layout/ProtectedDocLink";
import { SERVICES } from "@/content/services";
import { HUBS, SITE_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper-raised">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo size="footer" />
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            Architecting premium digital solutions for ambitious leaders. Code. Connect. Conquer.
          </p>
          <a href={`mailto:${SITE_EMAIL}`} className="mt-4 inline-block text-sm text-ink hover:text-gold">
            {SITE_EMAIL}
          </a>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Services</h2>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-ink-muted hover:text-ink">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-ink-muted hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="text-ink-muted hover:text-ink">
                Work
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-ink-muted hover:text-ink">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink-muted hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-ink-muted hover:text-ink">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-ink-muted hover:text-ink">
                Terms
              </Link>
            </li>
            <li>
              <ProtectedDocLink href="/assets/docs/ElHub_Investment_Agreement.pdf">
                Investment agreement
              </ProtectedDocLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Offices</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            {HUBS.map((hub) => (
              <li key={hub.code}>
                <span className="text-ink">{hub.name}</span>
                <br />
                {hub.location}
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-6" />
        </div>
      </Container>
      <div className="border-t border-rule py-5">
        <Container className="text-center text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} EL-HUB VENTURES. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
