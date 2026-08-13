"use client";

import { useEffect, useRef, useState } from "react";
import { HUBS } from "@/lib/site";

const OPTIONS = HUBS.filter((hub) => "whatsapp" in hub && hub.whatsapp).map((hub) => ({
  label: hub.name,
  phone: "phone" in hub ? hub.phone : "",
  href: "whatsapp" in hub ? hub.whatsapp : "",
}));

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-30">
      {open ? (
        <div
          id="whatsapp-menu"
          className="absolute bottom-[calc(100%+0.75rem)] right-0 w-64 border border-rule bg-paper-raised p-4"
          role="dialog"
          aria-label="Chat with customer service"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <p className="text-sm font-semibold text-ink">Chat with customer service</p>
            <button
              type="button"
              className="shrink-0 text-lg leading-none text-ink-muted hover:text-ink"
              aria-label="Close WhatsApp options"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className="-mx-4">
            {OPTIONS.map((option) => (
              <li key={option.href}>
                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-ink-muted transition duration-150 hover:bg-gold-soft hover:text-ink"
                >
                  <strong className="block text-ink">{option.label}</strong>
                  {option.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-paper"
        aria-expanded={open}
        aria-controls="whatsapp-menu"
        aria-label={open ? "Close WhatsApp contact options" : "Open WhatsApp contact options"}
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.57 0 .3 5.28.3 11.78c0 2.07.54 4.09 1.57 5.86L0 24l6.56-1.84a11.75 11.75 0 0 0 5.52 1.41h.01c6.5 0 11.78-5.28 11.78-11.79 0-3.15-1.23-6.11-3.35-8.3zm-8.44 18.1h-.01a9.8 9.8 0 0 1-4.98-1.36l-.36-.21-3.89 1.09 1.04-3.79-.24-.39a9.79 9.79 0 0 1-1.5-5.16c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.94c0 5.41-4.41 9.82-9.82 9.82zm5.39-7.35c-.29-.14-1.73-.85-2-.95-.27-.1-.47-.14-.67.15-.2.29-.77.95-.95 1.15-.17.2-.34.22-.63.08-.29-.14-1.23-.45-2.34-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.14-.67-1.6-.92-2.2-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.51.08-.78.37-.27.29-1.03 1.01-1.03 2.45 0 1.44 1.05 2.82 1.19 3.02.14.2 2.06 3.15 5 4.42.7.3 1.24.47 1.67.6.7.22 1.34.19 1.85.12.56-.08 1.73-.71 1.97-1.4.24-.7.24-1.29.17-1.41-.07-.12-.26-.2-.55-.34z" />
        </svg>
      </button>
    </div>
  );
}
