import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services | MEGAFIXX Home Services LLC",
  description: "Professional property maintenance services across Texas including plumbing, gutter cleaning, drywall repair, landscaping, and more.",
  path: "/services"
});

export default function ServicesPage() {
  const heroImageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Professional property maintenance services"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-950/75 z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          {/* H1 */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>

          {/* Intro Paragraph */}
          <p className="font-body text-lg text-muted max-w-3xl">
            MEGAFIXX Home Services LLC provides reliable, affordable, and professional property maintenance services throughout Texas. We serve homeowners, landlords, property managers, real estate investors, and commercial clients across the state with solutions designed to protect, preserve, and enhance property value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-navy-950">
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
            <div className="text-center bg-navy-800 rounded-xl p-8 border border-navy-700">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Looking for a Professional Property Maintenance Company in Texas?
              </h2>
              <p className="font-body text-muted mb-6 max-w-2xl mx-auto">
                If you&apos;re searching for property maintenance services in Texas — residential, commercial, rental, or investment properties — MEGAFIXX Home Services LLC is your trusted statewide partner.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <p className="font-body text-muted mt-6 text-sm">
                📞 (469) 378-9262  |  📧 info@megafixxhomeservices.com
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
