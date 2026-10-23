import React from "react";
import { Check } from "lucide-react";
import { PAGE_COPY } from "@/config/site";
import BookingButton from "./BookingButton";

interface ServiceCardGridProps {
  ctaLabel?: string;
}

export default function ServiceCardGrid({ ctaLabel }: ServiceCardGridProps) {
  return (
    <section
      aria-labelledby="services-heading"
      className="border-y border-[#D8B79B]/40 bg-[#FEE6BA]/25 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#D40000] uppercase sm:text-sm">
            {PAGE_COPY.section05Services.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[38px] sm:leading-tight"
          >
            {PAGE_COPY.section05Services.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#444444] sm:text-[18px]">
            {PAGE_COPY.section05Services.description}
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PAGE_COPY.section05Services.cards.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-[#D8B79B] bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md sm:p-8"
            >
              <div>
                <span className="inline-block rounded-md bg-[#FEE6BA] px-3 py-1 text-xs font-bold tracking-wide text-black uppercase">
                  {service.tag}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-extrabold text-black">
                  {service.headline}
                </h3>

                <div className="mt-3 space-y-2.5 text-base leading-relaxed text-[#444444]">
                  {service.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Card Highlights */}
                <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-xs font-bold tracking-wider text-black uppercase">
                    Consultation Highlights:
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {service.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-sm font-medium text-[#444444] sm:text-base"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#D40000]"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <BookingButton
                  placement={`service_card_${service.id}`}
                  label={ctaLabel || service.cta}
                  fullWidthMobile={true}
                  size="md"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Section Close */}
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-[#D8B79B] bg-white p-6 text-center sm:p-8">
          <p className="font-heading text-lg font-bold text-black sm:text-xl">
            {PAGE_COPY.section05Services.sectionClose}
          </p>
          <div className="mt-5 w-full sm:w-auto">
            <BookingButton
              placement="section_05_services_close"
              label={ctaLabel || PAGE_COPY.section05Services.sectionButton}
              fullWidthMobile={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}