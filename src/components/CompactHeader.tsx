import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { PAGE_COPY, SITE_CONFIG } from "@/config/site";
import BookingButton from "./BookingButton";

interface CompactHeaderProps {
  ctaLabel?: string;
}

export default function CompactHeader({ ctaLabel }: CompactHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Official Walshken Immigration Logo */}
        <a
          href="#hero-section"
          aria-label={SITE_CONFIG.companyName}
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D40000] rounded-md"
        >
          <Image
            src="/logo.webp"
            alt={SITE_CONFIG.companyName}
            width={190}
            height={52}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </a>

        {/* Single Primary CTA */}
        <div>
          <BookingButton
            placement="compact_header"
            label={ctaLabel || PAGE_COPY.section02Header.cta}
            size="sm"
          />
        </div>
      </div>

      {/* Prominent RCIC Identification Sub-bar */}
      <div className="border-t border-[#D8B79B]/40 bg-[#FEE6BA]/35 px-4 py-1.5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs text-[#444444] sm:px-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck
              className="h-3.5 w-3.5 shrink-0 text-[#D40000]"
              aria-hidden="true"
            />
            <span>
              Immigration consultations with{" "}
              <strong className="font-semibold text-black">
                {SITE_CONFIG.rcicDetails.fullLegalName}
              </strong>
              , CICC Licence No.{" "}
              <strong className="font-semibold text-black">
                {SITE_CONFIG.rcicDetails.licenceNumber}
              </strong>
              .
            </span>
          </div>
          <a
            href={SITE_CONFIG.ciccRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline decoration-[#D8B79B] underline-offset-2 transition-colors hover:text-[#D40000]"
          >
            Verify on CICC Public Register
          </a>
        </div>
      </div>
    </header>
  );
}