import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import TextRoll from "@/components/ui/TextRoll";
import TextReveal from "@/components/ui/TextReveal";
import ClosingCta from "@/components/sections/ClosingCta";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import InnerPageHero from "@/components/inner/InnerPageHero";
import StackingSolutionCards from "@/components/solutions/StackingSolutionCards";
import HorizontalDeliveryTrack from "@/components/solutions/HorizontalDeliveryTrack";
import BusinessValueShowcase from "@/components/solutions/BusinessValueShowcase";
import BusinessChallengeSplit from "@/components/solutions/BusinessChallengeSplit";
import { SERVICES_PAGES_COPY } from "@/data/servicesCopy";
import { TEN_CORE_SOLUTIONS, type RichSolutionItem } from "@/data/coreSolutionsMaster";
import { getSolutionVisuals } from "@/data/solutionImages";
import { LAST_REVIEWED } from "@/data/aboutCopy";
import { shortenParagraph } from "@/lib/shortenParagraph";
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
  Calendar,
  Check,
  CheckCircle2,
  ClipboardList,
  MessageSquare,
  Info,
} from "lucide-react";

type ServiceCopyKey = keyof typeof SERVICES_PAGES_COPY.items;

interface ServiceConfig {
  canonicalSlug: string;
  title: string;
  pillar: string;
  icon: React.ComponentType<{ className?: string }>;
  copyKey: ServiceCopyKey;
}

const SERVICE_MAP: Record<string, ServiceConfig> = {
  "it-consulting": {
    canonicalSlug: "it-consulting",
    title: "IT Consulting",
    pillar: "Infrastructure and Security",
    icon: Compass,
    copyKey: "itConsulting",
  },
  "ict-infrastructure-networking": {
    canonicalSlug: "ict-infrastructure-networking",
    title: "Infrastructure and Networking",
    pillar: "Infrastructure and Security",
    icon: Network,
    copyKey: "infrastructureNetworking",
  },
  "networking-cabling": {
    canonicalSlug: "ict-infrastructure-networking",
    title: "Infrastructure and Networking",
    pillar: "Infrastructure and Security",
    icon: Network,
    copyKey: "infrastructureNetworking",
  },
  cybersecurity: {
    canonicalSlug: "cybersecurity",
    title: "Cybersecurity",
    pillar: "Infrastructure and Security",
    icon: ShieldCheck,
    copyKey: "cybersecurity",
  },
  "cybersecurity-it-support": {
    canonicalSlug: "cybersecurity",
    title: "Cybersecurity",
    pillar: "Infrastructure and Security",
    icon: ShieldCheck,
    copyKey: "cybersecurity",
  },
  "cctv-security": {
    canonicalSlug: "cctv-security",
    title: "CCTV and Security Systems",
    pillar: "Infrastructure and Security",
    icon: Video,
    copyKey: "cctvSecurity",
  },
  "managed-it-support": {
    canonicalSlug: "managed-it-support",
    title: "Managed IT Support",
    pillar: "Infrastructure and Security",
    icon: Headphones,
    copyKey: "managedItSupport",
  },
  "business-technology-support": {
    canonicalSlug: "managed-it-support",
    title: "Managed IT Support",
    pillar: "Infrastructure and Security",
    icon: Headphones,
    copyKey: "managedItSupport",
  },
  "software-development": {
    canonicalSlug: "software-development",
    title: "Software Development",
    pillar: "Software and Digital",
    icon: Code2,
    copyKey: "softwareDevelopment",
  },
  "enterprise-systems-software": {
    canonicalSlug: "software-development",
    title: "Software Development",
    pillar: "Software and Digital",
    icon: Code2,
    copyKey: "softwareDevelopment",
  },
  "web-mobile-apps": {
    canonicalSlug: "web-mobile-apps",
    title: "Web and Mobile Applications",
    pillar: "Software and Digital",
    icon: Smartphone,
    copyKey: "webMobileApps",
  },
  "digital-solutions": {
    canonicalSlug: "web-mobile-apps",
    title: "Web and Mobile Applications",
    pillar: "Software and Digital",
    icon: Smartphone,
    copyKey: "webMobileApps",
  },
  "website-development": {
    canonicalSlug: "website-development",
    title: "Website Development",
    pillar: "Software and Digital",
    icon: Globe,
    copyKey: "websiteDevelopment",
  },
  "digital-marketing": {
    canonicalSlug: "digital-marketing",
    title: "Digital Marketing",
    pillar: "Software and Digital",
    icon: TrendingUp,
    copyKey: "digitalMarketing",
  },
  "equipment-supply": {
    canonicalSlug: "equipment-supply",
    title: "ICT Equipment Supply",
    pillar: "Equipment and Workplace",
    icon: Cpu,
    copyKey: "equipmentSupply",
  },
  "office-relocation": {
    canonicalSlug: "office-relocation",
    title: "Office Setup and Relocation",
    pillar: "Equipment and Workplace",
    icon: Truck,
    copyKey: "officeRelocation",
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICE_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = SERVICE_MAP[slug];
  if (!config) return {};

  const copy = SERVICES_PAGES_COPY.items[config.copyKey];

  return {
    title: copy.seoTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `https://nileictsolutions.com/services/${config.canonicalSlug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = SERVICE_MAP[slug];

  if (!config) {
    notFound();
  }

  const baseCopy = SERVICES_PAGES_COPY.items[config.copyKey];
  const masterCopy: Partial<RichSolutionItem> | undefined =
    TEN_CORE_SOLUTIONS[config.copyKey];
  const copy = {
    ...baseCopy,
    ...masterCopy,
  };
  const visuals = getSolutionVisuals(config.copyKey);

  const stackModules =
    masterCopy?.modules && masterCopy.modules.length > 0
      ? masterCopy.modules
      : copy.whatWeDo.map((item, idx) => ({
          title: item,
          desc:
            copy.whatYouGet[idx] ||
            `Delivered with clear documentation, quality verification and direct engineering support across Kenya.`,
        }));

  const deliverySteps =
    masterCopy?.engagementSteps && masterCopy.engagementSteps.length > 0
      ? masterCopy.engagementSteps
      : copy.processSteps;

  const whatsappHref = `https://wa.me/254795121583?text=${encodeURIComponent(
    copy.whatsappPrefill
  )}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: config.title,
        serviceType: config.pillar,
        description: copy.answerFirst,
        provider: { "@id": "https://nileictsolutions.com/#organization" },
        areaServed: { "@type": "Country", name: "Kenya" },
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
            name: "Services",
            item: "https://nileictsolutions.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: config.title,
            item: `https://nileictsolutions.com/services/${config.canonicalSlug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faqs.map((faq) => ({
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

      {/* 1. Framed Service Hero — Strictly 2 Buttons: Book a Demo + Lead Generation */}
      <InnerPageHero
        eyebrow={config.pillar}
        h1={copy.h1}
        subheading={shortenParagraph(copy.answerFirst)}
        backHref="/services"
        backLabel="Back to all Technology Services"
        badges={[config.title]}
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
          <Button
            href={`/contact?solution=${encodeURIComponent(
              config.title
            )}&intent=demo&brief=${encodeURIComponent(
              `I would like to book a live demo and consultation for ${config.title}.`
            )}`}
            variant="orange"
            size="lg"
            withArrow
          >
            Book a Demo
          </Button>
          <Button
            href={`/contact?solution=${encodeURIComponent(
              config.title
            )}&intent=quote&brief=${encodeURIComponent(
              `Please prepare a tailored technical assessment, scope and quote for ${config.title}.`
            )}`}
            variant="white"
            size="lg"
          >
            Get a Quote
          </Button>
        </div>
      </InnerPageHero>

      {/* 2A. Jasper-Style Split Section: The Business Challenge (Text Left + Portrait Right) */}
      <BusinessChallengeSplit
        heading={config.title}
        problem={copy.problem}
        challenges={masterCopy?.challenges}
        whoItIsFor={copy.whoItIsFor || masterCopy?.whoItIsFor}
        solutionTitle={config.title}
        portraitSrc={visuals.challengeImage}
        portraitAlt={visuals.challengeAlt}
        waysToEngage={copy.waysToEngage}
      />

      {/* 2B. Jasper-Style Split Section: Business Value (Interactive UI Showcase Left + Boxed-Tick Outcomes Right) */}
      <section className="ns-section-default bg-[#F5F7FA] hairline-b">
        <div className="ns-container-large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <BusinessValueShowcase
                title={config.title}
                category={config.pillar}
                outcomes={copy.whatYouGet}
                capabilities={stackModules.map((m) => m.title)}
                portraitSrc={visuals.valueImage}
                portraitAlt={visuals.valueAlt}
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <TextReveal className="space-y-3">
                <span className="inline-block rounded-none bg-[#EAF0FF] text-[#001B9B] font-mono text-xs font-bold px-2.5 py-1">
                  Business Value
                </span>
                <h2 className="ns-heading-h2 text-nis-navy">
                  {copy.whatYouGetHeading || "What you get"}
                </h2>
              </TextReveal>

              <ul data-animate="stagger-grid" className="space-y-5">
                {copy.whatYouGet.map((val, idx) => {
                  const explanation =
                    stackModules[idx]?.desc ||
                    copy.whatWeDo[idx] ||
                    `Delivered with clear documentation, quality verification and direct engineering support across Kenya.`;
                  return (
                    <li key={val} className="flex items-start gap-3.5">
                      <span className="w-6 h-6 bg-[#EAF0FF] border border-[#001B9B]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#001B9B]" />
                      </span>
                      <div className="space-y-1">
                        <div className="font-sans font-semibold text-base text-nis-navy leading-snug">
                          {val}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {explanation}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {copy.productCategories && (
                <div className="bg-white border border-nis-navy/15 p-5 sm:p-6 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#001B9B] block">
                    What we supply · Genuine &amp; warranted
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-nis-navy">
                    {copy.productCategories.map((cat) => (
                      <div key={cat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#E6602C] shrink-0" />
                        <span>{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Jasper-Inspired Sticky Stacking Capability Deck */}
      <StackingSolutionCards
        eyebrow="Our Service · What We Provide"
        heading={copy.whatWeDoHeading || `How ${config.title} is scoped around your environment.`}
        subtitle="Select or scroll through each capability module below—scoped individually or combined into one accountable engagement."
        modules={stackModules}
        ctaHref={`/contact?solution=${encodeURIComponent(config.title)}`}
        ctaLabel="Get a Quote"
      />

      {/* 4. Horizontal Scroll Delivery Timeline (Desktop Horizontal / Mobile Vertical) */}
      <HorizontalDeliveryTrack
        eyebrow="Transparent Delivery Process"
        heading={masterCopy?.engagementStepsHeading || copy.processHeading}
        subtitle="Clear stages from initial discovery through configuration, testing and ongoing support."
        steps={deliverySteps}
      />

      <BasetenPatternDivider />
      <ClosingCta />
    </>
  );
}
