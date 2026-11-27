import React from "react";
import Link from "next/link";
import { HOMEPAGE_COPY } from "@/data/copydeck";
import { ArrowRight } from "lucide-react";

export default function TheProblemStory() {
  const { h2, paragraphs, cards } = HOMEPAGE_COPY.problemStory;

  return (
    <section className="ns-section-default bg-[#F5F7FA] hairline-b">
      <div className="ns-container-large space-y-12 lg:space-y-16">
        {/* Top Split Header: Left H2, Right Narrative Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="ns-heading-h2 text-nis-navy">{h2}</h2>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pt-6">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={`ns-text-medium leading-relaxed ${
                  idx === 1
                    ? "font-semibold text-nis-navy"
                    : "text-gray-700"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* 4 Sharp-Bordered Problem-to-Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <Link
              key={card.title}
              href={card.href}
              className="group bg-white border border-nis-navy/15 hover:border-nis-blue transition-colors flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <span className="font-mono text-xs font-semibold text-nis-orange block">
                  0{idx + 1}
                </span>
                <h3 className="ns-heading-h6 text-nis-navy group-hover:text-nis-blue transition-colors">
                  {card.title}
                </h3>
                <p className="ns-text-small text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Jasper-style 1px hairline footer with arrow shift */}
              <div className="px-6 sm:px-7 py-4 border-t border-nis-navy/15 flex items-center justify-between text-xs font-semibold text-nis-blue group-hover:bg-[#EEF2FF] transition-colors">
                <span>{card.action}</span>
                <ArrowRight className="w-4 h-4 text-nis-orange transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
