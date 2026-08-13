"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GA_MEASUREMENT_ID } from "@/lib/site";

function loadGoogleAnalytics() {
  if (document.getElementById("ga4-script") || !GA_MEASUREMENT_ID) return;
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem("cookieConsentAccepted") === "yes";
    if (accepted) {
      loadGoogleAnalytics();
      return;
    }
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper p-4"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          We use analytics cookies to improve performance and user experience. See our{" "}
          <a href="/privacy" className="text-ink underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <Button
          onClick={() => {
            window.localStorage.setItem("cookieConsentAccepted", "yes");
            setVisible(false);
            loadGoogleAnalytics();
          }}
        >
          Accept
        </Button>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}
