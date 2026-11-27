import React from "react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FeaturedBusinessSolutions from "@/components/sections/FeaturedBusinessSolutions";
import IndustriesSection from "@/components/sections/IndustriesSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import QuickAnswersSection from "@/components/sections/QuickAnswersSection";
import ClosingCta from "@/components/sections/ClosingCta";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (Edition 2 Copy Deck) */}
      <Hero />

      {/* 2. Dual-Row Monochrome Marquee */}
      <TrustBar />

      {/* 2. Our Solutions: Four Ways Forward */}
      <WhatWeDoSection />

      {/* Dot-Matrix Transition Divider below What We Do */}
      <BasetenPatternDivider />

      {/* 4. Why Organisations Choose Us */}
      <WhyChooseSection />

      {/* Dot-Matrix Transition Divider */}
      <BasetenPatternDivider />

      {/* 5. Featured Business Solutions */}
      <FeaturedBusinessSolutions />

      {/* 6. Industries: We Speak Your Sector's Language */}
      <IndustriesSection />

      {/* 7. How We Work: 5-Stage Path */}
      <HowWeWorkSection />

      {/* Orange Dot-Matrix Transition Divider between How We Work & Testimonials */}
      <BasetenPatternDivider variant="orange" />

      {/* 8. Client Testimonials (4 Cards, Auto-Scrolling, Pause on Hover) */}
      <TestimonialsSection />

      {/* Blue Dot-Matrix Transition Divider above FAQs */}
      <BasetenPatternDivider variant="blue" />

      {/* 9. Questions People Ask Before They Call */}
      <QuickAnswersSection />

      {/* Stepped Dot-Matrix Divider above Closing CTA */}
      <BasetenPatternDivider />

      {/* 10. Split-Screen Editorial Photo CTA (includes Stepped Dot-Matrix Divider below) */}
      <ClosingCta />
    </>
  );
}
