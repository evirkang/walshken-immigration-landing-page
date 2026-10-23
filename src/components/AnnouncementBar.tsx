import React from "react";
import { MapPin } from "lucide-react";
import { PAGE_COPY } from "@/config/site";

export default function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Location and Consultation Fee Announcement"
      className="w-full bg-[#D40000] px-4 py-2.5 text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-xs font-semibold tracking-wide sm:text-sm">
        <MapPin className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
        <span>{PAGE_COPY.section01Announcement.text}</span>
      </div>
    </div>
  );
}