import { QuoteForm } from "@/components/forms/QuoteForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Clock, Mail, Map, MapPin, Phone, Tag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Get a Quote | MEGAFIXX Home Services LLC",
  description:
    "Request a free quote for property maintenance across Texas. Fill out the form and we'll get back to you within 24 hours.",
  path: "/quote",
});

export default function QuotePage() {
  const heroImageUrl = "/images/heroes/hero-quote.jpg";

  return (
    <>
      {/* Page Hero — overlay and font styles */}
      <section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Get a quote from MEGAFIXX Home Services"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/72 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get a Quote
          </h1>
          <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
            Let&apos;s talk about your property needs. Fill out the form and we&apos;ll respond within
            24 hours.
          </p>
        </div>
      </section>

      {/* Split Layout: Quote Form + Contact Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Quote Form (60%) */}
            <div className="lg:col-span-3">
              <AnimatedSection variant="fadeLeft">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                  Request a Free Quote
                </h2>
                <p className="font-body text-base sm:text-lg text-text-muted mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <QuoteForm />
              </AnimatedSection>
            </div>

            {/* Right: Contact Info Panel (40%) */}
            <div className="lg:col-span-2">
              <AnimatedSection variant="fadeRight">
                <div className="bg-surface-100 border-l-4 border-orange rounded-lg p-8 h-full">
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <a
                        href="tel:4693789262"
                        className="flex items-center gap-3 font-body text-charcoal hover:text-orange transition-colors duration-300"
                      >
                        <Phone className="w-5 h-5 text-orange flex-shrink-0" aria-hidden="true" />
                        <span>(469) 378-9262</span>
                      </a>
                    </div>

                    <div>
                      <a
                        href="mailto:info@megafixxhomeservices.com"
                        className="flex items-center gap-3 font-body text-charcoal hover:text-orange transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5 text-orange flex-shrink-0" aria-hidden="true" />
                        <span>info@megafixxhomeservices.com</span>
                      </a>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-orange mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-body text-charcoal">
                            815 Table Rock ST, Princeton, TX,75407
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <Map className="w-5 h-5 text-orange mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-body text-charcoal">All of Texas Statewide</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-orange mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-body text-charcoal mb-1">
                            Monday – Friday: 8:00 AM – 6:00 PM
                          </p>
                          <p className="font-body text-charcoal mb-1">Saturday: closed</p>
                          <p className="font-body text-charcoal">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-surface-200">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-3 py-1 bg-surface-200 rounded-full text-xs font-accent text-orange">
                          Fully Insured
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-surface-200 rounded-full text-xs font-accent text-orange">
                          Licensed Professionals
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Info Cards */}
      <section className="py-20 lg:py-28 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Response",
                description: "We respond to all inquiries within 24 hours",
              },
              {
                icon: Tag,
                title: "Free Estimates",
                description: "Get a no-obligation project estimate",
              },
              {
                icon: Map,
                title: "Statewide Coverage",
                description: "We serve all major regions across Texas",
              },
            ].map((card, index) => (
              <AnimatedSection key={card.title} variant="fadeUp" delay={index * 0.1}>
                <div className="bg-white border border-surface-200 rounded-xl p-8 text-center h-full">
                  <card.icon
                    className="w-10 h-10 text-orange mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-text-muted">{card.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
