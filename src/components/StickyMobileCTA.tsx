"use client";

import React, { useEffect, useState } from "react";
import BookingButton from "./BookingButton";
import { SITE_CONFIG } from "@/config/site";

interface StickyMobileCTAProps {
  ctaLabel?: string;
}

export default function StickyMobileCTA({ ctaLabel }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroCta = document.getElementById("hero-primary-cta");
      const bottomZone = document.getElementById("bottom-conversion-zone");

      if (!heroCta) return;

      const heroRect = heroCta.getBoundingClientRect();
      const passedHeroCta = heroRect.bottom < 0;

      let nearBottom = false;
      if (bottomZone) {
        const bottomRect = bottomZone.getBoundingClientRect();
        nearBottom = bottomRect.top < window.innerHeight - 40;
      }

      setIsVisible(passedHeroCta && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Quick Mobile Consultation Booking Bar"
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-[#D8B79B] bg-white/95 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold tracking-wider text-[#444444] uppercase">
            Mississauga Location
          </span>
          <span className="font-heading text-base font-extrabold text-black">
            $50 CAD Consultation
          </span>
        </div>
        <BookingButton
          placement="mobile_sticky_bar"
          label={ctaLabel || SITE_CONFIG.experiments.buttonCopy.A}
          size="sm"
          className="min-h-[46px] px-5"
        />
      </div>
    </div>
  );
}