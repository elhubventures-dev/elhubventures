"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site";

export function FaqList({ items = FAQS }: { items?: readonly { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-rule border-y border-rule">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-display text-lg text-ink">{item.question}</span>
              <span className="text-gold" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="faq-answer pb-5 text-ink-muted">{item.answer}</p>
            ) : (
              <p className="sr-only">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
