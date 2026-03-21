import { ServiceCard } from "@/components/cards/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | HomeProX Services LLC",
  description: "Professional property maintenance services across Texas including plumbing, gutter cleaning, drywall repair, landscaping, and more.",
  path: "/services"
});

export default function ServicesPage() {
  const heroImageUrl = "/images/heroes/hero-services.jpg";

  return (
    <>
      {/* Page Hero — same overlay and font styles as CTABanner */}
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
            Complete Maintenance Solutions
          </h1>
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-teal/50" />
          </div>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            Seven specialized maintenance areas addressing every property requirement across Texas. From regular maintenance to urgent service calls, we deliver expert results for homes, commercial spaces, and investment portfolios.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Services: Featured Introduction Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <AnimatedSection variant="fadeUp" className="mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Seven Specialized Services
              </h2>
              <p className="font-body text-lg text-text-muted mb-8">
                HomeProX provides specialized support across all property maintenance areas. From preventive maintenance through urgent repairs, we deliver the right solution for your investment.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="inline-flex items-center px-4 py-2 bg-teal/10 border border-teal/20 rounded-full text-sm font-body text-teal">
                  ✓ Statewide Coverage
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-teal/10 border border-teal/20 rounded-full text-sm font-body text-teal">
                  ✓ Licensed & Insured
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-teal/10 border border-teal/20 rounded-full text-sm font-body text-teal">
                  ✓ 24-Hour Response
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Services Gallery Grid - All 7 services */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  variant="fadeUp"
                  delay={index * 0.08}
                >
                  <ServiceCard service={service} variant="featured" />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Bottom CTA - Redesigned */}
          <AnimatedSection variant="fadeUp">
            <div className="bg-charcoal text-white rounded-2xl p-10 md:p-14 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Prepared to Begin?
              </h2>
              <p className="font-body text-surface-200 mb-8 max-w-2xl mx-auto">
                Get a personalized estimate tailored to your property maintenance requirements. We'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <span className="text-surface-300">or</span>
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
