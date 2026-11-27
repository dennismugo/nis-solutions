import React from "react";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import ClosingCta from "@/components/sections/ClosingCta";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import HalftoneLiquidImage from "@/components/ui/HalftoneLiquidImage";
import { INDUSTRIES_COPY } from "@/data/industriesCopy";
import { LAST_REVIEWED } from "@/data/aboutCopy";

export const metadata: Metadata = {
  title: INDUSTRIES_COPY.seoTitle,
  description: INDUSTRIES_COPY.metaDescription,
  alternates: {
    canonical: "https://nileictsolutions.com/industries",
  },
};

export default function IndustriesPage() {
  const { sectors } = INDUSTRIES_COPY;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://nileictsolutions.com/industries#webpage",
        url: "https://nileictsolutions.com/industries",
        name: INDUSTRIES_COPY.seoTitle,
        description: INDUSTRIES_COPY.metaDescription,
        dateModified: LAST_REVIEWED.iso,
        about: { "@id": "https://nileictsolutions.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nileictsolutions.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: "https://nileictsolutions.com/industries",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. Six Industries — Direct Grid Showcase */}
      <section className="ns-section-default bg-[#001B9B] text-white">
        <div className="ns-container-large space-y-12">
          <TextReveal className="max-w-3xl space-y-3">
            <span className="inline-block rounded-none bg-[#FFE4D4] text-[#00194F] font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
              Six Industries
            </span>
            <h1 className="ns-heading-h2 text-white">
              Sector-specific controls, infrastructure and systems.
            </h1>
          </TextReveal>

          <div
            data-animate="stagger-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sectors.map((sector) => (
              <article
                key={sector.id}
                id={sector.id}
                className="scroll-mt-24 border border-white/20 bg-[#00157A] flex flex-col"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#00194F]">
                  <HalftoneLiquidImage
                    src={sector.imageSrc}
                    alt={sector.imageAlt}
                    objectPositionClass="object-center"
                  />
                </div>
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="text-base sm:text-lg font-sans font-bold text-[#E6602C]">
                      {sector.name}
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl leading-[1.15] tracking-tight text-white">
                      {sector.h1}
                    </h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      href={`/contact?solution=${encodeURIComponent(
                        sector.name
                      )}`}
                      variant="orange"
                      size="sm"
                      withArrow
                    >
                      Talk to Us
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BasetenPatternDivider />
      <ClosingCta />
    </>
  );
}
