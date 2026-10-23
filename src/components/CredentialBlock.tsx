import React from "react";
import {
  ShieldCheck,
  UserCheck,
  MessageCircle,
  ExternalLink,
  Award,
} from "lucide-react";
import { PAGE_COPY, SITE_CONFIG } from "@/config/site";

const PILLAR_ICONS = [ShieldCheck, UserCheck, MessageCircle];

export default function CredentialBlock() {
  return (
    <section
      aria-labelledby="why-walshken-heading"
      className="border-t border-[#D8B79B]/50 bg-[#FEE6BA]/25 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Why Walshken Copy */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest text-[#D40000] uppercase sm:text-sm">
              {PAGE_COPY.section08WhyWalshken.eyebrow}
            </p>
            <h2
              id="why-walshken-heading"
              className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-black sm:text-[38px] sm:leading-tight"
            >
              {PAGE_COPY.section08WhyWalshken.headline}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#444444] sm:text-[18px]">
              {PAGE_COPY.section08WhyWalshken.descriptionParagraphs.map(
                (paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                )
              )}
            </div>

            {/* Three Trust Pillars */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {PAGE_COPY.section08WhyWalshken.pillars.map((pillar, idx) => {
                const IconComponent = PILLAR_ICONS[idx] || ShieldCheck;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-[#D8B79B] bg-white p-5 shadow-2xs"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEE6BA] text-[#D40000]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-black">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#444444]">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Verified Credential Component */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-black bg-white p-6 shadow-md sm:p-8">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D40000] text-white">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#D40000] uppercase">
                    Authorized Regulatory Oversight
                  </span>
                  <h3 className="font-heading text-xl font-extrabold text-black">
                    Verified RCIC Credentials
                  </h3>
                </div>
              </div>

              <dl className="mt-5 space-y-4 text-sm sm:text-base">
                <div className="rounded-lg bg-[#FEE6BA]/35 p-3.5">
                  <dt className="text-xs font-bold tracking-wider text-[#444444] uppercase">
                    Responsible Regulated Canadian Immigration Consultant
                  </dt>
                  <dd className="mt-1 font-heading text-lg font-extrabold text-black">
                    {SITE_CONFIG.rcicDetails.fullLegalName}
                  </dd>
                </div>

                <div className="rounded-lg bg-[#FEE6BA]/35 p-3.5">
                  <dt className="text-xs font-bold tracking-wider text-[#444444] uppercase">
                    CICC Licence Number
                  </dt>
                  <dd className="mt-1 font-heading text-lg font-extrabold text-black">
                    {SITE_CONFIG.rcicDetails.licenceNumber}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 text-xs leading-relaxed text-[#444444] sm:text-sm">
                Regulated Canadian Immigration Consultants (RCICs) are licensed
                by the College of Immigration and Citizenship Consultants (CICC)
                to provide Canadian immigration advice and representation.
              </p>

              <div className="mt-6">
                <a
                  href={SITE_CONFIG.ciccRegisterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  <span>Verify Status on CICC Public Register</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}