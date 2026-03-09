"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface CTABannerProps {
  variant?: "dark" | "light";
}

export function CTABanner({ variant = "dark" }: CTABannerProps) {
  const [imgError, setImgError] = useState(false);
  const backgroundImageUrl = "/images/cta/cta-banner-bg.jpg";

  if (variant === "light") {
    return (
      <section className="py-20 lg:py-28 bg-surface-50 border-y border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Looking for a Trusted Maintenance Partner?
              </h2>
              <p className="font-body text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                MEGAFIXX Home Services LLC is ready to serve your properties across Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  // Dark variant (default) — image with charcoal overlay
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <Image
            src={backgroundImageUrl}
            alt="Professional property maintenance services Texas"
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-charcoal" />
        )}
      </div>

      <div className="absolute inset-0 bg-charcoal/72 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Protect Your Properties?
              </h2>
              <p className="font-body text-lg text-surface-200 max-w-2xl">
                Partner with Texas&apos;s trusted property maintenance team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <a
                href="tel:4693789262"
                className="inline-flex items-center justify-center gap-2 font-accent font-medium rounded-lg transition-all duration-300 border-2 border-white/40 text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg"
              >
                Call Now: (469) 378-9262
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
