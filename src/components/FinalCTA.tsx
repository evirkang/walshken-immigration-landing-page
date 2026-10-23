"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Globe, ExternalLink } from "lucide-react";
import { PAGE_COPY, SITE_CONFIG } from "@/config/site";
import BookingButton from "./BookingButton";

interface FinalCTAProps {
  ctaLabel?: string;
}

export default function FinalCTA({ ctaLabel }: FinalCTAProps) {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div id="bottom-conversion-zone">
      {/* Section 11 - Final Booking Close */}
      <section
        aria-labelledby="final-cta-heading"
        className="border-t-2 border-black bg-[#FEE6BA] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[42px] sm:leading-tight"
          >
            {PAGE_COPY.section11FinalClose.headline}
          </h2>
          <p className="mt-3 font-heading text-2xl font-bold text-[#D40000] sm:text-3xl">
            {PAGE_COPY.section11FinalClose.supportingHeadline}
          </p>

          <div className="mx-auto mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-[#444444] sm:text-[18px]">
            <p>{PAGE_COPY.section11FinalClose.descriptionParagraph1}</p>
            <p className="font-semibold text-black">
              {PAGE_COPY.section11FinalClose.descriptionParagraph2}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center">
            <BookingButton
              placement="section_11_final_close"
              label={ctaLabel || PAGE_COPY.section11FinalClose.cta}
              fullWidthMobile={true}
              size="lg"
            />
            <p className="mt-3 text-sm font-medium text-[#444444]">
              {PAGE_COPY.section11FinalClose.microcopy}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-black sm:text-sm">
              <MapPin className="h-4 w-4 text-[#D40000]" aria-hidden="true" />
              <span>{PAGE_COPY.section11FinalClose.locationReminder}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12 - Footer and Legal Links */}
      <footer className="bg-black pt-12 pb-24 text-white sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-12">
            {/* Company Info & Logo */}
            <div className="md:col-span-5">
              <div className="inline-block rounded-lg bg-white px-3.5 py-2">
                <Image
                  src="/logo.webp"
                  alt={PAGE_COPY.section12Footer.companyLabel}
                  width={180}
                  height={48}
                  className="h-9 w-auto object-contain sm:h-10"
                />
              </div>
              <p className="mt-3 font-heading text-base font-bold text-white">
                {PAGE_COPY.section12Footer.companyLabel}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-300">
                {PAGE_COPY.section12Footer.footerCopy}
              </p>
            </div>

            {/* Contact & Mississauga Office */}
            <div className="md:col-span-4">
              <h3 className="font-heading text-sm font-bold tracking-wider text-[#FEE6BA] uppercase">
                Mississauga Location &amp; Contact
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#D40000]"
                    aria-hidden="true"
                  />
                  <span>{PAGE_COPY.section12Footer.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail
                    className="h-4 w-4 shrink-0 text-[#D40000]"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${PAGE_COPY.section12Footer.email}`}
                    className="underline underline-offset-2 transition-colors hover:text-[#FEE6BA]"
                  >
                    {PAGE_COPY.section12Footer.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe
                    className="h-4 w-4 shrink-0 text-[#D40000]"
                    aria-hidden="true"
                  />
                  <a
                    href={SITE_CONFIG.corporateWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-[#FEE6BA]"
                  >
                    {PAGE_COPY.section12Footer.websiteLabel}
                  </a>
                </li>
              </ul>
            </div>

            {/* Required Legal & Compliance Links */}
            <div className="md:col-span-3">
              <h3 className="font-heading text-sm font-bold tracking-wider text-[#FEE6BA] uppercase">
                Required Links
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-300">
                <li>
                  <a
                    href={SITE_CONFIG.privacyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FEE6BA]"
                  >
                    <span>Privacy Policy</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.termsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FEE6BA]"
                  >
                    <span>Terms and Conditions</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.ciccRegisterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FEE6BA]"
                  >
                    <span>CICC Public Register</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.corporateWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FEE6BA]"
                  >
                    <span>Corporate Website</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Identification & Legal Disclaimer */}
          <div className="mt-8 space-y-4 text-xs leading-relaxed text-neutral-400">
            <p className="font-medium text-neutral-200">
              Immigration services provided by authorized representatives.
              Responsible RCIC(s): {SITE_CONFIG.rcicDetails.footerSummary}.
            </p>
            <p>{PAGE_COPY.section12Footer.disclaimer}</p>
            <p className="pt-2 text-neutral-500">
              &copy; {currentYear} {PAGE_COPY.section12Footer.companyLabel}. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}