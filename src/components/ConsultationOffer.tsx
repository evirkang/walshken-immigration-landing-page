import React from "react";
import { CheckCircle2, Info } from "lucide-react";
import { PAGE_COPY } from "@/config/site";
import BookingButton from "./BookingButton";

interface ConsultationOfferProps {
  ctaLabel?: string;
}

export default function ConsultationOffer({
  ctaLabel,
}: ConsultationOfferProps) {
  return (
    <section
      aria-labelledby="offer-heading"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border-2 border-black bg-[#FEE6BA]/35 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left / Main Offer Content */}
            <div className="p-6 sm:p-10 lg:col-span-7">
              <p className="text-xs font-bold tracking-widest text-[#D40000] uppercase sm:text-sm">
                {PAGE_COPY.section06Offer.eyebrow}
              </p>
              <h2
                id="offer-heading"
                className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[38px] sm:leading-tight"
              >
                {PAGE_COPY.section06Offer.headline}
              </h2>

              <div className="mt-4 space-y-3 text-base leading-relaxed text-[#444444] sm:text-[18px]">
                <p>{PAGE_COPY.section06Offer.descriptionParagraph1}</p>
                <p>{PAGE_COPY.section06Offer.descriptionParagraph2}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-heading text-lg font-bold text-black">
                  {PAGE_COPY.section06Offer.includedHeading}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {PAGE_COPY.section06Offer.includedItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base text-[#444444]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#D40000]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right High-Contrast Price Display Box */}
            <div className="flex flex-col justify-between border-t border-black/15 bg-white p-6 sm:p-10 lg:col-span-5 lg:border-t-0 lg:border-l">
              <div>
                <span className="inline-block rounded-md bg-[#FEE6BA] px-3 py-1 text-xs font-bold tracking-wider text-black uppercase">
                  {PAGE_COPY.section06Offer.label}
                </span>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-extrabold tracking-tight text-black sm:text-6xl">
                    {PAGE_COPY.section06Offer.priceDisplay}
                  </span>
                </div>

                <p className="mt-2 text-xs font-medium text-[#444444]">
                  {PAGE_COPY.section06Offer.taxNote}
                </p>

                <div className="mt-6">
                  <BookingButton
                    placement="section_06_offer_card"
                    label={ctaLabel || PAGE_COPY.section06Offer.button}
                    fullWidthMobile={true}
                    className="w-full"
                    size="lg"
                  />
                </div>
              </div>

              {/* Required Fee Scope Disclosure Below Button */}
              <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-xs leading-relaxed text-[#444444]">
                <div className="flex items-start gap-2">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-black"
                    aria-hidden="true"
                  />
                  <p>{PAGE_COPY.section06Offer.feeDisclosure}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}