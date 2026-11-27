import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import ClosingCta from "@/components/sections/ClosingCta";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import InnerPageHero from "@/components/inner/InnerPageHero";
import SteppedFlipBand from "@/components/about/SteppedFlipBand";
import AboutByTheNumbers from "@/components/about/AboutByTheNumbers";
import FiveReasonsDeck from "@/components/about/FiveReasonsDeck";
import ChallengeEditorialPortrait from "@/components/solutions/ChallengeEditorialPortrait";
import { ABOUT_COPY, LAST_REVIEWED } from "@/data/aboutCopy";
import {
  ArrowRight,
  Compass,
  Eye,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: ABOUT_COPY.seoTitle,
  description: ABOUT_COPY.metaDescription,
  alternates: {
    canonical: "https://nileictsolutions.com/about",
  },
};

export default function AboutPage() {
  const {
    hero,
    whoWeAre,
    mission,
    vision,
    promise,
    principles,
    whyStay,
    whatWeDo,
  } = ABOUT_COPY;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://nileictsolutions.com/about#webpage",
        url: "https://nileictsolutions.com/about",
        name: ABOUT_COPY.seoTitle,
        description: ABOUT_COPY.metaDescription,
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
            name: "About Nile ICT Solutions",
            item: "https://nileictsolutions.com/about",
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

      {/* 1. Framed Command-Style About Hero */}
      <InnerPageHero
        eyebrow={hero.eyebrow}
        h1={hero.h1}
        subheading={hero.subheading}
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <Button href="/contact" variant="orange" size="lg" withArrow>
            {hero.primaryCta}
          </Button>
          <a
            href="#how-we-work"
            className="inline-flex items-center justify-center font-sans font-semibold text-base px-6 py-3.5 gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all"
          >
            <span>{hero.secondaryCta}</span>
            <ArrowRight className="w-4 h-4 text-[#FFE4D4]" />
          </a>
        </div>
      </InnerPageHero>

      {/* Stepped 3D Scroll-Flipping Color Transition Band (Chande-inspired, Nile ICT Palette -> Dark Blue Bottom) */}
      <SteppedFlipBand />

      {/* 2. Who We Are — Editorial Copy & Portrait Showcase */}
      <section className="ns-section-default bg-white hairline-b">
        <div className="ns-container-large grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
            <TextReveal className="space-y-4">
              <span className="inline-block w-fit rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
                {whoWeAre.eyebrow}
              </span>

              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.12] tracking-[-0.03em] text-nis-navy">
                Built for{" "}
                <span className="text-[#001B9B] font-medium underline decoration-dotted decoration-[#E6602C] decoration-[3px] underline-offset-[10px]">
                  practical, reliable execution
                </span>{" "}
                across Kenya.
              </h2>
            </TextReveal>

            <div data-animate="reveal-item" className="space-y-4 pt-1">
              {whoWeAre.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 1
                      ? "ns-text-regular text-gray-600 italic"
                      : "ns-text-medium text-nis-navy/85"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div
              data-animate="reveal-item"
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button href="/contact" variant="primary" size="md">
                Talk to Our Team
              </Button>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0111A2] hover:text-[#F85508] transition-colors"
              >
                <span>Browse our solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ChallengeEditorialPortrait
              src="/images/about-who-we-are.jpg"
              alt="Nile ICT Solutions team specialist working on a laptop in Nairobi"
            />
          </div>
        </div>

        <div className="ns-container-large">
          <AboutByTheNumbers />
        </div>
      </section>

      {/* 4. Mission, Vision, Promise */}
      <section className="relative overflow-hidden ns-section-default bg-gradient-to-br from-[#001166] via-[#001478] to-[#000C42] text-white hairline-b">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,240,255,0.12),transparent_55%)]"
        />
        <div className="relative z-10 ns-container-large">
          <div
            data-animate="stagger-grid"
            className="grid grid-cols-1 lg:grid-cols-3 border border-white/20 divide-y lg:divide-y-0 lg:divide-x divide-white/20"
          >
            {[
              { ...mission, Icon: Target },
              { ...vision, Icon: Eye },
              { ...promise, Icon: ShieldCheck },
            ].map(({ label, text, Icon }) => (
              <div
                key={label}
                className="group bg-[#0111A2]/90 hover:bg-[#001B9B] p-8 sm:p-9 space-y-5 transition-colors"
              >
                <div className="w-14 h-14 bg-[#F85508] text-white shadow-[0_10px_24px_rgba(248,85,8,0.28)] flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
                  <Icon className="w-7 h-7 stroke-[2]" />
                </div>
                <div className="space-y-2.5">
                  <h3 className="font-heading font-normal text-2xl sm:text-[1.75rem] leading-[1.15] tracking-[-0.02em] text-white">
                    {label}
                  </h3>
                  <p className="font-sans text-sm sm:text-[15px] text-white/85 leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BasetenPatternDivider />

      {/* 5. Six Values We Work By (Maze Clean Warm-Stone Value Cards) */}
      <section className="ns-section-default bg-[#F7F5F2] hairline-b">
        <div className="ns-container-large space-y-12">
          <TextReveal className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded bg-white border border-slate-300/80 text-nis-navy font-mono text-[11px] uppercase tracking-wider font-medium px-2.5 py-1">
              <span className="w-1.5 h-1.5 bg-[#F85508]" />
              <span>{principles.eyebrow}</span>
            </span>
            <h2 className="ns-heading-h2 text-nis-navy">{principles.h2}</h2>
          </TextReveal>

          <div
            data-animate="stagger-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {principles.items.map((item, idx) => {
              const VALUE_ICONS = [
                Compass,
                ShieldCheck,
                Zap,
                Layers,
                Sparkles,
                HeartHandshake,
              ];
              const ValueIcon = VALUE_ICONS[idx % VALUE_ICONS.length];
              const iconBg =
                idx % 2 === 0
                  ? "bg-[#EEF2FF] text-[#0111A2]"
                  : "bg-[#FFF1EA] text-[#F85508]";

              return (
                <div
                  key={item.num}
                  className="bg-white rounded-xl border border-slate-200/80 p-7 sm:p-8 shadow-[0_12px_30px_-16px_rgba(0,25,79,0.08)] hover:shadow-[0_20px_44px_-16px_rgba(1,17,162,0.14)] hover:-translate-y-0.5 transition-all space-y-4"
                >
                  <div>
                    <span
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}
                    >
                      <ValueIcon className="w-5 h-5 stroke-[1.75]" />
                    </span>
                  </div>
                  <h3 className="font-heading font-normal text-xl sm:text-2xl text-nis-navy">
                    {item.title}
                  </h3>
                  <p className="ns-text-small text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Five Reasons Clients Stay — Stacked Depth Deck + Drifting Marquee */}
      <FiveReasonsDeck
        eyebrow={whyStay.eyebrow}
        heading={whyStay.h2}
        items={whyStay.items}
      />

      <BasetenPatternDivider variant="orange" />

      {/* 7. What We Do + Who We Work With + Data Stewardship */}
      <section className="ns-section-default bg-[#F5F7FA] hairline-b">
        <div className="ns-container-large space-y-12">
          <TextReveal className="max-w-3xl space-y-3">
            <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs sm:text-[13px] font-medium px-2.5 py-1">
              {whatWeDo.eyebrow}
            </span>
            <h2 className="ns-heading-h2 text-nis-navy">{whatWeDo.h2}</h2>
          </TextReveal>

          <div
            data-animate="stagger-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:items-start gap-4 lg:pb-8"
          >
            {whatWeDo.items.map((cap, idx) => {
              const staggerOffsets = [
                "lg:mt-0",
                "lg:mt-8",
                "lg:mt-3",
                "lg:mt-10",
                "lg:mt-4",
              ];
              return (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className={`group bg-[#0111A2] border border-white/15 hover:bg-[#000E88] hover:border-[#F85508] hover:-translate-y-1.5 p-6 min-h-[290px] flex flex-col justify-between space-y-5 transition-all duration-300 ${
                    staggerOffsets[idx % staggerOffsets.length]
                  }`}
                >
                  <div className="space-y-3">
                    <span className="inline-block font-mono text-xs font-bold bg-[#F85508] text-white px-2 py-0.5">
                      0{idx + 1}
                    </span>
                    <h3 className="font-sans text-base font-semibold text-white group-hover:text-[#FFE4D4] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-white/85 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-[#FFE4D4]">
                    <span>{cap.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F85508] transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <BasetenPatternDivider />
      <ClosingCta />
    </>
  );
}
