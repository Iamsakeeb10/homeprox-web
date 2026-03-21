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
      <section className="py-24 lg:py-32 bg-white border-y border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Quality Maintenance, Reliable Operations
              </h2>
              <p className="font-body text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                See how HomeProX delivers results across Texas properties and portfolios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <span className="hidden sm:block text-text-muted/30 text-sm">or</span>
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
    <section className="relative py-24 lg:py-32 overflow-hidden border-t border-teal/20">
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
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Protect Your Properties?
            </h2>
            <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto mb-8">
              Partner with Texas&apos;s trusted property maintenance team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <span className="hidden sm:block text-white/30 text-sm">or</span>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:4693789262">
                  Call Now: (469) 378-9262
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
