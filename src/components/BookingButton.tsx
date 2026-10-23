"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { buildCalendlyUrl, trackEvent } from "@/lib/analytics";

interface BookingButtonProps {
  placement: string;
  label?: string;
  className?: string;
  fullWidthMobile?: boolean;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

export default function BookingButton({
  placement,
  label = SITE_CONFIG.experiments.buttonCopy.A,
  className = "",
  fullWidthMobile = false,
  size = "lg",
  ariaLabel,
}: BookingButtonProps) {
  const [href, setHref] = useState<string>(SITE_CONFIG.primaryBookingUrl);

  useEffect(() => {
    setHref(buildCalendlyUrl(placement));
  }, [placement]);

  const handleClick = () => {
    trackEvent("booking_cta_click", {
      cta_placement: placement,
      timestamp: new Date().toISOString(),
    });
  };

  const sizeStyles = {
    sm: "min-h-[44px] px-4 py-2.5 text-sm sm:text-base",
    md: "min-h-[48px] px-6 py-3 text-base",
    lg: "min-h-[52px] px-7 py-3.5 text-base sm:text-[18px]",
  }[size];

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        ariaLabel ||
        `${label} - Schedule your CAD $50 immigration consultation in Mississauga`
      }
      className={`group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#D40000] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#b50000] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D40000] focus-visible:ring-offset-2 active:scale-[0.99] ${sizeStyles} ${
        fullWidthMobile ? "w-full sm:w-auto" : ""
      } ${className}`}
    >
      <span>{label}</span>
      <ArrowRight
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}