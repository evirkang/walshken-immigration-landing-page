"use client";

import React, { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { captureAndPersistUtms, trackEvent } from "@/lib/analytics";
import AnnouncementBar from "./AnnouncementBar";
import CompactHeader from "./CompactHeader";
import HeroSection from "./HeroSection";
import ProblemCardGrid from "./ProblemCardGrid";
import ServiceCardGrid from "./ServiceCardGrid";
import ConsultationOffer from "./ConsultationOffer";
import ThreeStepProcess from "./ThreeStepProcess";
import CredentialBlock from "./CredentialBlock";
import AddressPanel from "./AddressPanel";
import FAQAccordion from "./FAQAccordion";
import FinalCTA from "./FinalCTA";
import StickyMobileCTA from "./StickyMobileCTA";

export default function LandingPageClient() {
  const [headlineVariant, setHeadlineVariant] = useState<"A" | "B">("A");
  const [ctaVariant, setCtaVariant] = useState<"A" | "B">("A");
  const [feeVariant, setFeeVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    captureAndPersistUtms();

    const params = new URLSearchParams(window.location.search);
    const hVar = params.get("exp_headline") === "B" ? "B" : "A";
    const cVar = params.get("exp_cta") === "B" ? "B" : "A";
    const fVar = params.get("exp_fee") === "B" ? "B" : "A";

    setHeadlineVariant(hVar);
    setCtaVariant(cVar);
    setFeeVariant(fVar);

    trackEvent("landing_page_view", {
      dedup_key: "initial_landing_page_view",
      experiment_variant: `H:${hVar}|C:${cVar}|F:${fVar}`,
    });
  }, []);

  const activeCtaLabel =
    ctaVariant === "B"
      ? SITE_CONFIG.experiments.buttonCopy.B
      : SITE_CONFIG.experiments.buttonCopy.A;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#444444] selection:bg-[#FEE6BA] selection:text-black">
      {/* 01. Announcement Bar */}
      <AnnouncementBar />

      {/* 02. Compact Header */}
      <CompactHeader ctaLabel={activeCtaLabel} />

      {/* Main Conversion Content */}
      <main id="main-content" className="flex-1">
        {/* 03. Hero Section */}
        <HeroSection
          headlineVariant={headlineVariant}
          ctaLabel={activeCtaLabel}
          feeVariant={feeVariant}
        />

        {/* 04. Recognize Visitor's Problem (4 Cards) */}
        <ProblemCardGrid ctaLabel={activeCtaLabel} />

        {/* 05. Four Service Pathways (4 Cards) */}
        <ServiceCardGrid ctaLabel={activeCtaLabel} />

        {/* 06. Dedicated $50 Offer Card */}
        <ConsultationOffer ctaLabel={activeCtaLabel} />

        {/* 07. Three-Step Booking Process */}
        <ThreeStepProcess ctaLabel={activeCtaLabel} />

        {/* 08. Why Walshken & Verified RCIC Credentials */}
        <CredentialBlock />

        {/* 09. Mississauga Office & Map */}
        <AddressPanel ctaLabel={activeCtaLabel} />

        {/* 10. Accessible FAQ Accordion */}
        <FAQAccordion ctaLabel={activeCtaLabel} />
      </main>

      {/* 11. Final Booking Close & 12. Legal Footer */}
      <FinalCTA ctaLabel={activeCtaLabel} />

      {/* Mobile Sticky Booking Bar */}
      <StickyMobileCTA ctaLabel={activeCtaLabel} />
    </div>
  );
}