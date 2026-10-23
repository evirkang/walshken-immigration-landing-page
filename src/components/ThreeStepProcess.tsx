import React from "react";
import { Calendar, FileCheck2, MessageSquareText } from "lucide-react";
import { PAGE_COPY } from "@/config/site";
import BookingButton from "./BookingButton";

interface ThreeStepProcessProps {
  ctaLabel?: string;
}

const STEP_ICONS = [Calendar, FileCheck2, MessageSquareText];

export default function ThreeStepProcess({ ctaLabel }: ThreeStepProcessProps) {
  return (
    <section
      aria-labelledby="steps-heading"
      className="border-t border-neutral-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#D40000] uppercase sm:text-sm">
            {PAGE_COPY.section07Steps.eyebrow}
          </p>
          <h2
            id="steps-heading"
            className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[38px] sm:leading-tight"
          >
            {PAGE_COPY.section07Steps.headline}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PAGE_COPY.section07Steps.steps.map((step, idx) => {
            const IconComponent = STEP_ICONS[idx] || Calendar;
            return (
              <div
                key={step.stepNumber}
                className="relative flex flex-col rounded-2xl border border-[#D8B79B] bg-[#FEE6BA]/20 p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-black px-3.5 py-1 text-xs font-bold tracking-wider text-[#FEE6BA] uppercase">
                    {step.stepNumber}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#D40000] shadow-2xs">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-black">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-[#444444]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <div className="w-full sm:w-auto">
            <BookingButton
              placement="section_07_three_steps"
              label={ctaLabel || PAGE_COPY.section07Steps.cta}
              fullWidthMobile={true}
            />
          </div>
          <p className="mt-3 text-base font-medium text-[#444444]">
            {PAGE_COPY.section07Steps.supportingLine}
          </p>
        </div>
      </div>
    </section>
  );
}