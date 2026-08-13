"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SERVICE_GROUPS, SERVICES } from "@/content/services";
import { NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-150 ${
        scrolled || menuOpen ? "border-rule bg-paper/95 backdrop-blur-md" : "border-transparent bg-paper/80"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <BrandLogo priority />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`rounded-sm px-3 py-2 text-sm font-medium transition duration-150 hover:bg-gold-soft hover:text-ink ${
                servicesOpen ? "bg-gold-soft text-ink" : "text-ink-muted"
              }`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full w-[36rem] border border-rule bg-paper-raised p-5">
                <div className="grid grid-cols-2 gap-6">
                  {SERVICE_GROUPS.map((group) => (
                    <div key={group.id}>
                      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                        {group.label}
                      </p>
                      <ul>
                        {SERVICES.filter((service) => service.group === group.id).map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block rounded-sm px-2 py-1.5 text-sm text-ink-muted transition duration-150 hover:bg-gold-soft hover:text-ink"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="mt-4 inline-block rounded-sm px-2 py-1.5 text-sm font-semibold text-ink transition duration-150 hover:bg-gold-soft hover:text-gold"
                >
                  View all services
                </Link>
              </div>
            ) : null}
          </div>
          {NAV_LINKS.filter((link) => link.label !== "Services").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-sm px-3 py-2 text-sm font-medium transition duration-150 hover:bg-gold-soft hover:text-ink ${
                pathname === link.href ? "bg-gold-soft text-ink" : "text-ink-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact">Start a project</Button>
          <SocialLinks />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <SocialLinks className="hidden sm:flex" />
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`block h-px w-5 bg-ink transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-ink transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-ink transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div id={menuId} className="border-t border-rule bg-paper lg:hidden">
          <Container className="flex max-h-[calc(100vh-4rem)] flex-col gap-5 overflow-y-auto py-6">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.id}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">{group.label}</p>
                <ul className="space-y-2">
                  {SERVICES.filter((service) => service.group === group.id).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block rounded-sm px-2 py-1.5 text-ink transition duration-150 hover:bg-gold-soft"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {NAV_LINKS.filter((link) => link.label !== "Services").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-1.5 text-lg text-ink transition duration-150 hover:bg-gold-soft"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact">Start a project</Button>
            <SocialLinks />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
