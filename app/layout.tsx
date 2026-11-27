import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import GsapScrollOrchestrator from "@/components/ui/GsapScrollOrchestrator";
import NileChatWidget from "@/components/chat/NileChatWidget";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nileictsolutions.com"),
  title: {
    default: "Nile ICT Solutions | Enterprise ICT, Software & Technology in Kenya",
    template: "%s",
  },
  description:
    "Secure ICT infrastructure, enterprise software, business systems and digital solutions for organisations across Kenya. Discover how Nile ICT Solutions can support your business.",
  keywords: [
    "ICT solutions in Kenya",
    "enterprise IT consulting",
    "core banking software",
    "insurance management systems",
    "custom software development",
    "cybersecurity services",
    "network infrastructure",
    "document management systems",
    "CCTV installation Nairobi",
    "network cabling Nairobi",
    "ICT equipment suppliers Nairobi",
  ],
  authors: [{ name: "Nile ICT Solutions" }],
  creator: "Nile ICT Solutions",
  publisher: "Nile ICT Solutions",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://nileictsolutions.com",
    siteName: "Nile ICT Solutions",
    title: "Nile ICT Solutions | Enterprise ICT, Software & Technology in Kenya",
    description:
      "Secure ICT infrastructure, enterprise software, business systems and digital solutions for organisations across Kenya. Discover how Nile ICT Solutions can support your business.",
    images: [
      {
        url: "/logo-primary.png",
        width: 1200,
        height: 630,
        alt: "Nile ICT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nile ICT Solutions | Enterprise ICT, Software & Technology in Kenya",
    description:
      "Secure ICT infrastructure, enterprise software, business systems and digital solutions for organisations across Kenya. Discover how Nile ICT Solutions can support your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body
        className="font-sans bg-white text-nis-navy min-h-screen flex flex-col selection:bg-nis-blue selection:text-white"
      >
        <JsonLd />
        <Navbar />
        <GsapScrollOrchestrator>
          <main className="flex-1 w-full">{children}</main>
        </GsapScrollOrchestrator>
        <Footer />
        <NileChatWidget />
      </body>
    </html>
  );
}
