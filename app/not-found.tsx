import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, Compass, MessageSquare, ArrowRight } from "lucide-react";
import { BRAND } from "@/data/copydeck";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F9FAFB] px-4 py-20">
      <div className="max-w-xl mx-auto text-center space-y-8 bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-card">
        <div className="w-16 h-16 rounded-2xl bg-nis-blue/10 text-nis-blue flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-nis-orange">
            Error 404
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-nis-navy-950">
            This page took a wrong turn.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto">
            The page you’re looking for may have moved. Try one of these, or tell us what you were after and we’ll point you the right way.
          </p>
        </div>

        {/* 404 Direct Hub Links */}
        <div className="grid grid-cols-2 gap-3 text-left">
          <Link
            href="/solutions"
            className="p-4 rounded-xl border border-gray-200 bg-[#F9FAFB] hover:border-nis-blue/40 hover:bg-white transition-all group"
          >
            <span className="font-heading font-bold text-sm text-nis-navy-950 group-hover:text-nis-blue flex items-center justify-between">
              <span>Solutions</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-nis-blue transition-all" />
            </span>
            <span className="text-xs text-gray-500 mt-1 block">
              Core banking & enterprise tools
            </span>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-xl border border-gray-200 bg-[#F9FAFB] hover:border-nis-blue/40 hover:bg-white transition-all group"
          >
            <span className="font-heading font-bold text-sm text-nis-navy-950 group-hover:text-nis-blue flex items-center justify-between">
              <span>Services</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-nis-blue transition-all" />
            </span>
            <span className="text-xs text-gray-500 mt-1 block">
              Cabling, CCTV & cybersecurity
            </span>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-xl border border-gray-200 bg-[#F9FAFB] hover:border-nis-blue/40 hover:bg-white transition-all group"
          >
            <span className="font-heading font-bold text-sm text-nis-navy-950 group-hover:text-nis-blue flex items-center justify-between">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-nis-blue transition-all" />
            </span>
            <span className="text-xs text-gray-500 mt-1 block">
              Start a conversation
            </span>
          </Link>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-3">
          <Button href="/" variant="primary" size="sm" withArrow>
            Return to Homepage
          </Button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:text-emerald-700 p-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
