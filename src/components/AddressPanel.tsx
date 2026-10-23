import React from "react";
import { MapPin, Navigation, CalendarClock } from "lucide-react";
import { PAGE_COPY, SITE_CONFIG } from "@/config/site";
import BookingButton from "./BookingButton";

interface AddressPanelProps {
  ctaLabel?: string;
}

export default function AddressPanel({ ctaLabel }: AddressPanelProps) {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Address Details & CTAs */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold tracking-widest text-[#D40000] uppercase sm:text-sm">
              {PAGE_COPY.section09Location.eyebrow}
            </p>
            <h2
              id="location-heading"
              className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[38px] sm:leading-tight"
            >
              {PAGE_COPY.section09Location.headline}
            </h2>

            <div className="mt-4 space-y-3 text-base leading-relaxed text-[#444444] sm:text-[18px]">
              <p>{PAGE_COPY.section09Location.descriptionParagraph1}</p>
              <p>{PAGE_COPY.section09Location.descriptionParagraph2}</p>
            </div>

            {/* Clear Address Card */}
            <div className="mt-6 rounded-2xl border border-[#D8B79B] bg-[#FEE6BA]/30 p-6">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D40000] text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <address className="not-italic">
                  <p className="font-heading text-lg font-extrabold text-black">
                    {SITE_CONFIG.location.label}
                  </p>
                  <p className="mt-1 text-base text-[#444444]">
                    {SITE_CONFIG.location.street}
                  </p>
                  <p className="text-base text-[#444444]">
                    {SITE_CONFIG.location.cityProvincePostal}
                  </p>
                  <p className="text-base text-[#444444]">
                    {SITE_CONFIG.location.country}
                  </p>
                </address>
              </div>

              <div className="mt-4 flex items-start gap-2.5 border-t border-[#D8B79B]/60 pt-4 text-sm font-medium text-black">
                <CalendarClock
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D40000]"
                  aria-hidden="true"
                />
                <p>{PAGE_COPY.section09Location.supportingCopy}</p>
              </div>
            </div>

            {/* Primary CTA & Get Directions Map CTA */}
            <div className="mt-6 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <BookingButton
                placement="section_09_mississauga_office"
                label={ctaLabel || PAGE_COPY.section09Location.primaryCta}
                fullWidthMobile={true}
              />

              <a
                href={SITE_CONFIG.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Directions to 30 Topflight Drive, Suite 101, Mississauga on Google Maps"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-6 py-3.5 text-base font-semibold text-black transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                <span>{PAGE_COPY.section09Location.mapCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-[#D8B79B] bg-neutral-100 shadow-md">
              <iframe
                title="Walshken Immigration Services Mississauga Location - 30 Topflight Drive, Suite 101"
                src={SITE_CONFIG.location.googleMapsEmbedUrl}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}