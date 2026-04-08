import { ServicesSection } from "@/components/sections/ServicesSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | HomeProX Services LLC",
  description:
    "Professional property maintenance services across Texas including plumbing, gutter cleaning, drywall repair, landscaping, and more.",
  path: "/services",
});

export default function ServicesPage() {
  const heroImageUrl = "/images/heroes/hero.jpg";

  return (
    <>
      {/* Page Hero — Centered image background with overlay and centered text */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Professional property maintenance services"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-teal/50" />
          </div>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            Eleven specialized maintenance areas addressing every property
            requirement across Texas. From regular maintenance to urgent service
            calls, we deliver expert results for homes, commercial spaces, and
            investment portfolios.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Services: Introduction Section with Stat Strip */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-Bordered Heading */}
          <AnimatedSection variant="fadeUp" className="mb-12">
            <div className="border-l-4 border-teal pl-6 mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Eleven Specialized Services
              </h2>
              <p className="font-body text-lg text-text-muted max-w-3xl">
                HomeProX provides specialized support across all property
                maintenance areas. From preventive maintenance through urgent
                repairs, we deliver the right solution for your investment.
              </p>
            </div>
          </AnimatedSection>

          {/* Stat Strip with Dividers */}
          <AnimatedSection variant="fadeUp" className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-200 bg-surface-50 rounded-2xl overflow-hidden">
              <div className="px-6 sm:px-8 py-8 text-center">
                <span className="font-display text-teal font-bold text-2xl md:text-3xl block mb-1">
                  Statewide
                </span>
                <p className="font-body text-sm text-text-muted">Coverage</p>
              </div>
              <div className="px-6 sm:px-8 py-8 text-center">
                <span className="font-display text-teal font-bold text-2xl md:text-3xl block mb-1">
                  Licensed
                </span>
                <p className="font-body text-sm text-text-muted">& Insured</p>
              </div>
              <div className="px-6 sm:px-8 py-8 text-center">
                <span className="font-display text-teal font-bold text-2xl md:text-3xl block mb-1">
                  24-Hour
                </span>
                <p className="font-body text-sm text-text-muted">Response</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="mb-16">
            <ServicesSection />
          </div>

          {/* Bottom CTA Banner — Two Column Layout */}
          <AnimatedSection variant="fadeUp">
            <div className="bg-charcoal rounded-2xl p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
              {/* Left: Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Prepared to Begin?
                </h2>
                <p className="font-body text-surface-200">
                  Get a personalized estimate tailored to your property
                  maintenance requirements. We&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              {/* Right: CTA Buttons Stack */}
              <div className="flex flex-col items-center gap-0">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <div className="h-px w-12 bg-teal my-4" />
                <a
                  href="tel:4693789262"
                  className="font-body text-teal hover:text-teal-light transition-colors"
                >
                  (469) 378-9262
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
