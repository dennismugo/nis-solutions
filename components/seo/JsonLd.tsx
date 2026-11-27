import React from "react";
import { BRAND } from "@/data/copydeck";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nileictsolutions.com/#organization",
        name: BRAND.name,
        url: "https://nileictsolutions.com",
        logo: "https://nileictsolutions.com/logo-primary.png",
        description:
          "Nile ICT Solutions helps organisations across Kenya design, build and support the infrastructure, software and business systems their operations depend on.",
        telephone: "+254795121583",
        email: BRAND.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Posta Building, Tom Mboya Street",
          addressLocality: "Nairobi",
          addressRegion: "Nairobi",
          addressCountry: "KE",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nileictsolutions.com/#localbusiness",
        name: BRAND.name,
        image: "https://nileictsolutions.com/logo-primary.png",
        telephone: "+254795121583",
        email: BRAND.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Posta Building, Tom Mboya Street",
          addressLocality: "Nairobi",
          addressRegion: "Nairobi",
          addressCountry: "KE",
        },
        areaServed: [
          { "@type": "City", name: "Nairobi" },
          { "@type": "Country", name: "Kenya" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://nileictsolutions.com/#website",
        url: "https://nileictsolutions.com",
        name: BRAND.name,
        publisher: {
          "@id": "https://nileictsolutions.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
