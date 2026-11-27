import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TextRoll from "@/components/ui/TextRoll";
import TextReveal from "@/components/ui/TextReveal";
import ClosingCta from "@/components/sections/ClosingCta";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import HorizontalDeliveryTrack from "@/components/solutions/HorizontalDeliveryTrack";
import { SERVICES_PAGES_COPY } from "@/data/servicesCopy";
import { SOLUTIONS_PAGES_COPY } from "@/data/solutionsCopy";
import { TEN_CORE_SOLUTIONS } from "@/data/coreSolutionsMaster";
import { LAST_REVIEWED } from "@/data/aboutCopy";
import {
  Network,
  ShieldCheck,
  Video,
  Headphones,
  Code2,
  Smartphone,
  Globe,
  TrendingUp,
  Cpu,
  Truck,
  Compass,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: SERVICES_PAGES_COPY.overview.seoTitle,
  description: SERVICES_PAGES_COPY.overview.metaDescription,
  alternates: {
    canonical: "https://nileictsolutions.com/services",
  },
};

const serviceGroups = [
  {
    id: "infrastructure",
    eyebrow: "01 · Infrastructure and Security",
    title: "Infrastructure, Cybersecurity, Surveillance & Managed Support",
    items: [
      {
        slug: "it-consulting",
        title: "IT Consulting",
        copy: TEN_CORE_SOLUTIONS.itConsulting,
        icon: Compass,
      },
      {
        slug: "ict-infrastructure-networking",
        title: "Infrastructure and Networking",
        copy: TEN_CORE_SOLUTIONS.infrastructureNetworking,
        icon: Network,
      },
      {
        slug: "cybersecurity",
        title: "Cybersecurity",
        copy: TEN_CORE_SOLUTIONS.cybersecurity,
        icon: ShieldCheck,
      },
      {
        slug: "cctv-security",
        title: "CCTV and Security Systems",
        copy: TEN_CORE_SOLUTIONS.cctvSecurity,
        icon: Video,
      },
      {
        slug: "managed-it-support",
        title: "Managed IT Support",
        copy: SERVICES_PAGES_COPY.items.managedItSupport,
        icon: Headphones,
      },
    ],
  },
  {
    id: "software",
    eyebrow: "02 · Software and Digital",
    title: "Software Engineering, Apps, Websites & Digital Growth",
    items: [
      {
        slug: "software-development",
        title: "Software Development",
        copy: TEN_CORE_SOLUTIONS.softwareDevelopment,
        icon: Code2,
      },
      {
        slug: "web-mobile-apps",
        title: "Web and Mobile Applications",
        copy: TEN_CORE_SOLUTIONS.webMobileApps,
        icon: Smartphone,
      },
      {
        slug: "website-development",
        title: "Website Development",
        copy: TEN_CORE_SOLUTIONS.websiteDevelopment,
        icon: Globe,
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        copy: TEN_CORE_SOLUTIONS.digitalMarketing,
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "equipment",
    eyebrow: "03 · Equipment and Workplace",
    title: "Genuine ICT Equipment, Furniture & Office Setup",
    items: [
      {
        slug: "equipment-supply",
        title: "ICT Equipment Supply",
        copy: TEN_CORE_SOLUTIONS.equipmentSupply,
        icon: Cpu,
      },
      {
        slug: "office-relocation",
        title: "Office Setup and Relocation",
        copy: TEN_CORE_SOLUTIONS.officeRelocation,
        icon: Truck,
      },
    ],
  },
];

export default function ServicesPage() {
  const { overview } = SERVICES_PAGES_COPY;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://nileictsolutions.com/services#webpage",
        url: "https://nileictsolutions.com/services",
        name: overview.seoTitle,
        description: overview.metaDescription,
        dateModified: LAST_REVIEWED.iso,
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
            name: "ICT Services",
            item: "https://nileictsolutions.com/services",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: overview.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. Horizontal Interactive Delivery Timeline (Direct Page Entry) */}
      <HorizontalDeliveryTrack
        eyebrow="Technology Services"
        heading={overview.h1}
        subtitle="We assess first, plan clearly, integrate carefully and stay accountable after go-live."
        steps={SOLUTIONS_PAGES_COPY.overview.processSteps}
        asH1
      />

      {/* 3. Categorized Services Directory (All 3 Edition 5 Groups) */}
      <section className="ns-section-default bg-[#F5F7FA] hairline-b">
        <div className="ns-container-large space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.eyebrow} id={group.id} className="scroll-mt-24 space-y-8">
              <TextReveal className="max-w-3xl space-y-2.5">
                <span className="inline-block rounded-none bg-[#FFE4D4] text-nis-navy font-mono text-xs font-medium px-2.5 py-1">
                  {group.eyebrow}
                </span>
                <h2 className="ns-heading-h3 text-nis-navy">{group.title}</h2>
              </TextReveal>

              <div
                data-animate="stagger-grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {group.items.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group bg-white border border-nis-navy/15 hover:border-[#001B9B] transition-colors flex flex-col justify-between"
                    >
                      <div className="p-7 space-y-4">
                        <div className="w-11 h-11 bg-[#E8EEFF] border border-[#001B9B]/15 flex items-center justify-center text-[#001B9B] group-hover:bg-[#001B9B] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="font-sans text-lg font-semibold text-nis-navy group-hover:text-[#001B9B] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs font-heading text-nis-navy/75 leading-snug">
                            &ldquo;{service.copy.h1}&rdquo;
                          </p>
                        </div>

                        <p className="ns-text-small text-gray-600 line-clamp-3 leading-relaxed">
                          {service.copy.answerFirst}
                        </p>
                      </div>

                      <div className="px-7 py-4 border-t border-nis-navy/15 flex items-center justify-between text-xs font-semibold text-[#001B9B] group-hover:bg-[#EAF0FF] transition-colors">
                        <TextRoll>Explore service</TextRoll>
                        <ArrowRight className="w-4 h-4 text-[#E6602C] transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BasetenPatternDivider />
      <ClosingCta />
    </>
  );
}
