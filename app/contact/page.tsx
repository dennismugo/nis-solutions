import React from "react";
import type { Metadata } from "next";
import ContactFormClient from "@/components/contact/ContactFormClient";
import BasetenPatternDivider from "@/components/sections/BasetenPatternDivider";
import { CONTACT_COPY } from "@/data/contactCopy";
import { LAST_REVIEWED } from "@/data/aboutCopy";
import { BRAND } from "@/data/copydeck";

export const metadata: Metadata = {
  title: CONTACT_COPY.seoTitle,
  description: CONTACT_COPY.metaDescription,
  alternates: {
    canonical: "https://nileictsolutions.com/contact",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ solution?: string; brief?: string }>;
}) {
  const { solution, brief } = await searchParams;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://nileictsolutions.com/contact#webpage",
        url: "https://nileictsolutions.com/contact",
        name: CONTACT_COPY.seoTitle,
        description: CONTACT_COPY.metaDescription,
        dateModified: LAST_REVIEWED.iso,
        mainEntity: {
          "@type": "Organization",
          name: BRAND.name,
          telephone: "+254795121583",
          email: BRAND.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Posta Building, Tom Mboya Street",
            addressLocality: "Nairobi",
            addressRegion: "Nairobi",
            addressCountry: "KE",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:00",
              closes: "13:00",
            },
          ],
        },
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
            name: "Contact",
            item: "https://nileictsolutions.com/contact",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: CONTACT_COPY.faqs.map((faq) => ({
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
      <ContactFormClient initialSolution={solution} initialBrief={brief} />
      <BasetenPatternDivider />
    </>
  );
}
