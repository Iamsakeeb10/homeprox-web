"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-surface-50 border-t-2 border-orange/20"
    >
      {/* Subtle diagonal accent overlay (matches vendor CTA pattern, but on light bg) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #E8621A 0, #E8621A 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-8 sm:p-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Ready to Get Started?
              </h2>
              <p className="font-body text-text-muted mb-6">
                Contact us today for a free, no-obligation estimate. Our team will respond
                within 1 business day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-text-muted mb-8">
                <a
                  href="tel:4693789262"
                  className="flex items-center gap-2 font-body hover:text-orange transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-orange" aria-hidden="true" />
                  (469) 378-9262
                </a>
                <a
                  href="mailto:info@megafixxx.com"
                  className="flex items-center gap-2 font-body hover:text-orange transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-orange" aria-hidden="true" />
                  info@megafixxx.com
                </a>
              </div>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div
        className="mt-10 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent opacity-40"
        aria-hidden="true"
      />
    </section>
  );
}
