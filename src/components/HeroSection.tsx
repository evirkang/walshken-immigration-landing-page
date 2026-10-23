"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  ShieldCheck,
  CalendarCheck,
  Building2,
  Scale,
} from "lucide-react";
import { PAGE_COPY, SITE_CONFIG } from "@/config/site";
import BookingButton from "./BookingButton";

interface HeroSectionProps {
  headlineVariant?: "A" | "B";
  ctaLabel?: string;
  feeVariant?: "A" | "B";
}

export default function HeroSection({
  headlineVariant = "A",
  ctaLabel,
  feeVariant = "A",
}: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const h1Content =
    headlineVariant === "B"
      ? SITE_CONFIG.experiments.heroHeadline.B
      : SITE_CONFIG.experiments.heroHeadline.A;

  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-[#D8B79B]/40 bg-gradient-to-b from-[#FEE6BA]/30 via-white to-white pt-6 pb-14 sm:pt-12 sm:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Desktop 55% Left Column (7 of 12 cols) | Mobile Order: Eyebrow -> H1 -> Supporting -> Description -> Price -> CTA -> Benefits */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* 1. Location Eyebrow */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D8B79B] bg-[#FEE6BA]/60 px-3.5 py-1.5 text-xs font-bold tracking-wider text-black uppercase">
              <MapPin
                className="h-3.5 w-3.5 shrink-0 text-[#D40000]"
                aria-hidden="true"
              />
              <span>{PAGE_COPY.section03Hero.eyebrow}</span>
            </div>

            {/* 2. Main Headline (H1) */}
            <h1
              id="hero-heading"
              className="mt-4 font-heading text-[34px] leading-[1.15] font-extrabold tracking-tight text-black sm:text-[44px] lg:text-[52px]"
            >
              <span className="block">{h1Content.line1}</span>
              <span className="mt-1 block">{h1Content.line2}</span>
            </h1>

            {/* 3. Supporting Headline */}
            <p className="mt-3 font-heading text-xl font-bold text-[#D40000] sm:text-2xl">
              {PAGE_COPY.section03Hero.supportingHeadline}
            </p>

            {/* 4. Short Explanation */}
            <div className="mt-4 space-y-3 text-base leading-relaxed text-[#444444] sm:text-[18px]">
              <p>{PAGE_COPY.section03Hero.descriptionParagraph1}</p>
              <p className="font-medium text-black">
                {PAGE_COPY.section03Hero.descriptionParagraph2}
              </p>
            </div>

            {/* 5. Price Highlight & 6. Primary CTA (Kept above/near fold on mobile before benefits) */}
            <div className="mt-6 flex flex-col gap-4">
              {feeVariant === "B" ? (
                <div className="inline-flex w-fit items-center gap-3 rounded-xl border-2 border-black bg-[#FEE6BA] px-5 py-3 shadow-xs">
                  <span className="font-heading text-2xl font-extrabold text-black">
                    $50 CAD
                  </span>
                  <span className="h-5 w-px bg-black/20" aria-hidden="true" />
                  <span className="text-sm font-bold text-black uppercase tracking-wide">
                    Immigration Consultation
                  </span>
                </div>
              ) : (
                <div className="inline-flex w-fit items-center gap-2.5 rounded-lg border border-[#D8B79B] bg-[#FEE6BA]/50 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D40000]" />
                  <span className="font-heading text-base font-extrabold text-black sm:text-lg">
                    {PAGE_COPY.section03Hero.priceHighlight}
                  </span>
                </div>
              )}

              <div
                id="hero-primary-cta"
                className="flex flex-col items-start gap-2.5"
              >
                <BookingButton
                  placement="hero_primary"
                  label={ctaLabel || PAGE_COPY.section03Hero.primaryButton}
                  fullWidthMobile={true}
                  size="lg"
                />
                <p className="text-xs font-medium text-[#444444] sm:text-sm">
                  {PAGE_COPY.section03Hero.microcopy}
                </p>
              </div>
            </div>

            {/* 7. Three Benefits List */}
            <ul
              aria-label="Key consultation benefits"
              className="mt-6 space-y-2.5 border-t border-neutral-200 pt-5"
            >
              {PAGE_COPY.section03Hero.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base text-[#444444]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#D40000]"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Trust-identification box */}
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-[#D8B79B]/60 bg-white p-3.5 text-xs text-[#444444] shadow-2xs sm:text-sm">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-[#D40000]"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-black">
                  Immigration consultations with{" "}
                  <span className="font-bold">
                    {SITE_CONFIG.rcicDetails.fullLegalName}
                  </span>
                  , CICC Licence No.{" "}
                  <span className="font-bold">
                    {SITE_CONFIG.rcicDetails.licenceNumber}
                  </span>
                  .
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop 45% Right Column (5 of 12 cols) | 8. Mobile Order: Visual with Floating $50 Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-[#D8B79B] bg-white shadow-lg lg:max-w-none">
              {/* Top Visual Banner representing the Mississauga Consultation Practice */}
              <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-black p-6 text-white sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#FEE6BA] uppercase backdrop-blur-xs">
                    <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Mississauga Office
                  </span>
                  <span className="text-xs font-medium text-neutral-300">
                    Suite 101
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-widest text-[#D8B79B] uppercase">
                    Walshken Immigration Services
                  </p>
                  <h2 className="mt-1.5 font-heading text-2xl font-bold text-white sm:text-3xl">
                    Professional RCIC Consultation
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    30 Topflight Drive, Suite 101
                    <br />
                    Mississauga, ON L5S 0A8
                  </p>
                </div>

                {/* Floating $50 Card */}
                <div className="mt-6 rounded-xl border border-[#D8B79B] bg-white p-5 text-black shadow-md">
                  <div className="flex items-baseline justify-between border-b border-neutral-100 pb-3">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#444444] uppercase">
                        Initial Consultation Fee
                      </span>
                      <p className="mt-0.5 font-heading text-3xl font-extrabold text-black sm:text-4xl">
                        $50 <span className="text-lg font-bold">CAD</span>
                      </p>
                    </div>
                    <span className="rounded-full bg-[#FEE6BA] px-3 py-1 text-xs font-bold text-black">
                      By Appointment
                    </span>
                  </div>

                  <div className="mt-3.5 space-y-2.5 text-xs text-[#444444] sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <Scale
                        className="h-4 w-4 shrink-0 text-[#D40000]"
                        aria-hidden="true"
                      />
                      <span>
                        Regulated Canadian Immigration Consultant (RCIC)
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CalendarCheck
                        className="h-4 w-4 shrink-0 text-[#D40000]"
                        aria-hidden="true"
                      />
                      <span>
                        Direct online scheduling for Mississauga &amp; GTA
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Consultation Topics Summary */}
              <div className="bg-[#FEE6BA]/35 p-5 sm:p-6">
                <p className="text-xs font-bold tracking-wider text-black uppercase">
                  Common Consultation Matters:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs font-medium text-[#444444] sm:text-sm">
                  <div className="rounded-lg border border-[#D8B79B]/50 bg-white px-3 py-2">
                    • Work Permit Extensions
                  </div>
                  <div className="rounded-lg border border-[#D8B79B]/50 bg-white px-3 py-2">
                    • Status Restoration
                  </div>
                  <div className="rounded-lg border border-[#D8B79B]/50 bg-white px-3 py-2">
                    • Maintained Status
                  </div>
                  <div className="rounded-lg border border-[#D8B79B]/50 bg-white px-3 py-2">
                    • PR Pathways
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}