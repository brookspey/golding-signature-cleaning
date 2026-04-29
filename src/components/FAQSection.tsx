"use client";

import { useState } from "react";
import type { FAQ } from "@/data/types";

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="pr-4 font-semibold text-navy">{faq.question}</span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-gold transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <p className="pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
