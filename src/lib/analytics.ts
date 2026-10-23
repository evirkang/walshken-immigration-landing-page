"use client";

import { SITE_CONFIG } from "@/config/site";

export type AnalyticsEventName =
  | "landing_page_view"
  | "booking_cta_click"
  | "calendly_booking_started"
  | "consultation_booked"
  | "consultation_payment_completed"
  | "consultation_cancelled"
  | "consultation_rescheduled";

export interface UtmParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface AnalyticsPayload {
  cta_placement?: string;
  landing_page_url?: string;
  timestamp?: string;
  experiment_variant?: string;
  dedup_key?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const UTM_STORAGE_KEY = "walshken_mississauga_utms";
const DEDUP_STORAGE_KEY = "walshken_dispatched_events";

export function captureAndPersistUtms(): UtmParameters {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);
  const utmKeys: (keyof UtmParameters)[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  const foundUtms: UtmParameters = {};
  let hasNewUtms = false;

  utmKeys.forEach((key) => {
    const val = searchParams.get(key);
    if (val && val.trim().length > 0) {
      // Strip any accidental email or sensitive string patterns
      if (!val.includes("@")) {
        foundUtms[key] = val.trim().slice(0, 120);
        hasNewUtms = true;
      }
    }
  });

  if (hasNewUtms) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(foundUtms));
    } catch {
      // Ignore storage quota errors in restricted mobile browsers
    }
    return foundUtms;
  }

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UtmParameters;
    }
  } catch {
    // Ignore storage read errors
  }

  return {};
}

export function buildCalendlyUrl(ctaPlacement?: string): string {
  const baseUrl = SITE_CONFIG.primaryBookingUrl;
  if (typeof window === "undefined") return baseUrl;

  try {
    const url = new URL(baseUrl);
    const utms = captureAndPersistUtms();

    Object.entries(utms).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });

    if (ctaPlacement && !url.searchParams.get("utm_content")) {
      url.searchParams.set("utm_content", ctaPlacement);
    }

    return url.toString();
  } catch {
    return baseUrl;
  }
}

function isDuplicateEvent(dedupKey?: string): boolean {
  if (!dedupKey || typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(DEDUP_STORAGE_KEY);
    const list: string[] = raw ? JSON.parse(raw) : [];
    if (list.includes(dedupKey)) {
      return true;
    }
    list.push(dedupKey);
    sessionStorage.setItem(DEDUP_STORAGE_KEY, JSON.stringify(list));
    return false;
  } catch {
    return false;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {}
): void {
  if (typeof window === "undefined") return;

  if (payload.dedup_key && isDuplicateEvent(payload.dedup_key)) {
    return;
  }

  const utms = captureAndPersistUtms();
  const safePayload: Record<string, string | undefined> = {
    event: eventName,
    cta_placement: payload.cta_placement,
    landing_page_url:
      payload.landing_page_url ||
      `${window.location.origin}${window.location.pathname}`,
    timestamp: payload.timestamp || new Date().toISOString(),
    experiment_variant: payload.experiment_variant,
    utm_source: payload.utm_source || utms.utm_source,
    utm_medium: payload.utm_medium || utms.utm_medium,
    utm_campaign: payload.utm_campaign || utms.utm_campaign,
    utm_content: payload.utm_content || utms.utm_content,
    utm_term: payload.utm_term || utms.utm_term,
  };

  // Push to Google Tag Manager dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(safePayload);

  // Push to GA4 gtag if present
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, safePayload);
  }

  // Push to consented Meta Pixel if present (never treat CTA click as completed booking)
  if (typeof window.fbq === "function") {
    if (eventName === "booking_cta_click") {
      window.fbq("trackCustom", "BookingCTAClick", {
        cta_placement: safePayload.cta_placement,
      });
    } else if (eventName === "consultation_booked") {
      window.fbq("track", "Schedule", {
        currency: "CAD",
        value: 50.0,
      });
    } else if (eventName === "consultation_payment_completed") {
      window.fbq("track", "Purchase", {
        currency: "CAD",
        value: 50.0,
      });
    }
  }
}