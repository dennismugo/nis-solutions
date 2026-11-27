import React from "react";

interface LogoAsset {
  src: string;
  alt: string;
  heightClass: string;
  label?: string;
}

const ROW_ONE_LOGOS: LogoAsset[] = [
  {
    src: "/images/logos/safaricom.png",
    alt: "Safaricom",
    heightClass: "h-6 sm:h-7",
  },
  {
    src: "/images/logos/mpesa.svg",
    alt: "M-PESA",
    heightClass: "h-8 sm:h-9",
  },
  {
    src: "/images/logos/equity.png",
    alt: "Equity Group",
    heightClass: "h-8 sm:h-9",
  },
  {
    src: "/images/logos/ncba.svg",
    alt: "NCBA Bank Kenya",
    heightClass: "h-7 sm:h-8",
  },
  {
    src: "/images/logos/dtb.png",
    alt: "Diamond Trust Bank (DTB)",
    heightClass: "h-6 sm:h-7",
  },
  {
    src: "/images/logos/stima.webp",
    alt: "Stima DT SACCO",
    heightClass: "h-8 sm:h-9",
  },
];

const ROW_TWO_LOGOS: LogoAsset[] = [
  {
    src: "/images/logos/jubilee.png",
    alt: "Jubilee Insurance Group",
    heightClass: "h-8 sm:h-9",
  },
  {
    src: "/images/logos/britam.png",
    alt: "Britam Kenya",
    heightClass: "h-6 sm:h-7",
  },
  {
    src: "/images/logos/cic.png",
    alt: "CIC Insurance Group",
    heightClass: "h-8 sm:h-9",
  },
  {
    src: "/images/logos/apa.png",
    alt: "APA Insurance Kenya",
    heightClass: "h-8 sm:h-9",
  },
  {
    src: "/images/logos/serena.svg",
    alt: "Serena Hotels Kenya",
    heightClass: "h-7 sm:h-8",
    label: "SERENA",
  },
  {
    src: "/images/logos/eabl.png",
    alt: "East African Breweries (EABL)",
    heightClass: "h-6 sm:h-7",
  },
];

function LogoTrackRow({ items }: { items: LogoAsset[] }) {
  return (
    <div className="flex items-center gap-12 sm:gap-16 px-6 sm:px-8 shrink-0">
      {items.map((logo) => (
        <div
          key={logo.alt}
          className="inline-flex items-center gap-2.5 shrink-0 opacity-95 hover:opacity-100 transition-opacity duration-300 select-none"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className={`${logo.heightClass} w-auto object-contain`}
          />
          {logo.label && (
            <span className="font-heading text-base tracking-[0.06em] text-[#1E2433]">
              {logo.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section
      className="bg-white py-10 sm:py-12 overflow-hidden select-none"
      aria-label="Kenyan enterprises and industry landscape"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div
          className="space-y-8"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Row 1: Smooth Left-Moving Official Kenyan Logo Strip */}
          <div className="group overflow-hidden">
            <div className="animate-nis-marquee flex items-center">
              <LogoTrackRow items={ROW_ONE_LOGOS} />
              <LogoTrackRow items={ROW_ONE_LOGOS} />
              <LogoTrackRow items={ROW_ONE_LOGOS} />
              <LogoTrackRow items={ROW_ONE_LOGOS} />
            </div>
          </div>

          {/* Row 2: Smooth Right-Moving Official Kenyan Logo Strip */}
          <div className="group overflow-hidden">
            <div className="animate-nis-marquee-reverse flex items-center">
              <LogoTrackRow items={ROW_TWO_LOGOS} />
              <LogoTrackRow items={ROW_TWO_LOGOS} />
              <LogoTrackRow items={ROW_TWO_LOGOS} />
              <LogoTrackRow items={ROW_TWO_LOGOS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
