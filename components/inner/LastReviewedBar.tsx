import React from "react";
import Link from "next/link";
import { LAST_REVIEWED } from "@/data/aboutCopy";

export default function LastReviewedBar({
  pageLabel,
  dateDisplay = LAST_REVIEWED.display,
}: {
  pageLabel: string;
  dateDisplay?: string;
}) {
  return (
    <div className="bg-[#EAF0FF] border-y border-nis-navy/15 py-3.5">
      <div className="ns-container-large flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-nis-navy/80">
        <div>
          <span>Nile ICT Solutions · Posta Building, Tom Mboya Street, Nairobi, Kenya</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span>
            {pageLabel} · Last reviewed:{" "}
            <strong className="text-nis-navy">{dateDisplay}</strong>
          </span>
          <Link
            href="/contact"
            className="text-[#001B9B] hover:text-[#E6602C] underline underline-offset-4 transition-colors"
          >
            Request current scope details
          </Link>
        </div>
      </div>
    </div>
  );
}
