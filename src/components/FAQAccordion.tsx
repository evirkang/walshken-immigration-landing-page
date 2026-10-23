"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PAGE_COPY } from "@/config/site";
import BookingButton from "./BookingButton";

interface FAQAccordionProps {
  ctaLabel?: string;
}

export default function FAQAccordion({ ctaLabel }: FAQAccordionProps) {
  // First FAQ open by default per Section 10 specification
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-[#D8B79B]/50 bg-[#FEE6BA]/20 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-[#D40000] uppercase sm:text-sm">
            {PAGE_COPY.section10Faq.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[38px] sm:leading-tight"
          >
            {PAGE_COPY.section10Faq.headline}
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="mt-10 space-y-3.5">
          {PAGE_COPY.section10Faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-trigger-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-[#D8B79B] bg-white transition-shadow duration-200 hover:shadow-2xs"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-bold text-black transition-colors hover:bg-[#FEE6BA]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D40000] focus-visible:ring-inset sm:px-6 sm:text-lg"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#D40000] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={
                    isOpen
                      ? "border-t border-neutral-100 px-5 pt-3 pb-5 text-base leading-relaxed text-[#444444] sm:px-6"
                      : "hidden"
                  }
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* End-of-FAQ Conversion Box */}
        <div className="mt-12 rounded-2xl border border-[#D8B79B] bg-white p-6 text-center shadow-xs sm:p-8">
          <h3 className="font-heading text-2xl font-extrabold text-black">
            {PAGE_COPY.section10Faq.endHeadline}
          </h3>
          <p className="mt-2 text-base font-medium text-[#444444] sm:text-lg">
            {PAGE_COPY.section10Faq.supportingText}
          </p>
          <div className="mt-5">
            <BookingButton
              placement="section_10_faq_bottom"
              label={ctaLabel || PAGE_COPY.section10Faq.cta}
              fullWidthMobile={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}