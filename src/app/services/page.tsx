import { ServiceCard } from "@/components/cards/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | MEGAFIXX Home Services LLC",
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
            Our Services
          </h1>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            MEGAFIXX Home Services LLC provides reliable, affordable, and professional property maintenance services throughout Texas. We serve homeowners, landlords, property managers, real estate investors, and commercial clients across the state with solutions designed to protect, preserve, and enhance property value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <ServiceCard service={service} variant="featured" />
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom CTA */}
          <AnimatedSection variant="fadeUp" delay={0.8}>
            <div className="text-center bg-surface-50 rounded-xl p-8 border border-surface-200">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Looking for a Professional Property Maintenance Company in Texas?
              </h2>
              <p className="font-body text-text-muted mb-6 max-w-2xl mx-auto">
                If you&apos;re searching for property maintenance services in Texas — residential, commercial, rental, or investment properties — MEGAFIXX Home Services LLC is your trusted statewide partner.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <p className="font-body text-text-muted mt-6 text-sm">
                📞 (469) 378-9262  |  📧 info@megafixxhomeservices.com
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
