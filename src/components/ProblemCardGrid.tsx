import React from "react";
import { Clock, AlertCircle, Briefcase, Compass } from "lucide-react";
import { PAGE_COPY } from "@/config/site";
import BookingButton from "./BookingButton";

interface ProblemCardGridProps {
  ctaLabel?: string;
}

const CARD_ICONS = [Clock, AlertCircle, Briefcase, Compass];

export default function ProblemCardGrid({ ctaLabel }: ProblemCardGridProps) {
  return (
    <section
      aria-labelledby="problems-heading"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#D40000] uppercase sm:text-sm">
            {PAGE_COPY.section04Problems.eyebrow}
          </p>
          <h2
            id="problems-heading"
            className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[38px] sm:leading-tight"
          >
            {PAGE_COPY.section04Problems.headline}
          </h2>
          <div className="mt-4 space-y-2 text-base leading-relaxed text-[#444444] sm:text-[18px]">
            <p>{PAGE_COPY.section04Problems.descriptionParagraph1}</p>
            <p>{PAGE_COPY.section04Problems.descriptionParagraph2}</p>
          </div>
        </div>

        {/* 4 Problem Recognition Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAGE_COPY.section04Problems.cards.map((card, idx) => {
            const IconComponent = CARD_ICONS[idx] || Clock;
            return (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-xl border border-[#D8B79B]/60 bg-[#FEE6BA]/20 p-6 transition-all duration-200 hover:border-[#D8B79B] hover:bg-[#FEE6BA]/35 hover:shadow-sm"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FEE6BA] text-[#D40000]">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-black">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#444444]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement + CTA */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <p className="font-heading text-lg font-bold text-black sm:text-xl">
            {PAGE_COPY.section04Problems.closingStatement}
          </p>
          <div className="mt-5 w-full sm:w-auto">
            <BookingButton
              placement="section_04_problem_recognition"
              label={ctaLabel || PAGE_COPY.section04Problems.cta}
              fullWidthMobile={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}