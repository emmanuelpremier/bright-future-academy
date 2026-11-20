"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { admissionsPage } from "@/lib/school";

export default function AdmissionsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-y border-border">
      {admissionsPage.faq.items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex min-h-[44px] w-full items-center justify-between gap-4 rounded-lg py-4 text-left font-heading text-lg font-medium tracking-[-0.02em] text-navy transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              <span>{item.question}</span>
              <Plus
                size={16}
                aria-hidden="true"
                className={`shrink-0 text-gold transition-transform duration-300 motion-reduce:transition-none ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-slate">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
