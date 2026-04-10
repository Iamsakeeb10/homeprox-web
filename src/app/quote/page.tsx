import { QuoteForm } from "@/components/forms/QuoteForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Tag } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Get a Quote | HomeProX Services LLC",
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
            alt="Get a quote from HomeProX Services"
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
            Let&apos;s talk about your property needs. Fill out the form and
            we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Split Layout: Quote Form (Full Width) + Floating Info */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <AnimatedSection variant="fadeLeft">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
                  Request Your Quote
                </h2>
                <p className="font-body text-base sm:text-lg text-text-muted mb-10">
                  Tell us about your property needs and we'll provide a
                  customized quote within 24 hours. No hidden fees—just
                  transparent, professional pricing.
                </p>
                <QuoteForm />
              </AnimatedSection>
            </div>

            {/* Right: Stacked Info Boxes */}
            <div className="lg:col-span-1">
              <AnimatedSection variant="fadeRight" className="space-y-6">
                {/* Quick Contact */}
                <div className="bg-surface-50 rounded-2xl p-6 border border-surface-200">
                  <h3 className="font-display text-lg font-bold text-charcoal mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:6822773555 "
                      className="flex items-center gap-3 font-body text-charcoal hover:text-teal transition-colors duration-300"
                    >
                      <Phone
                        className="w-5 h-5 text-teal flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm">(682) 277-3555</span>
                    </a>

                    <a
                      href="mailto:info@homeproxsvcs.com"
                      className="flex items-center gap-3 font-body text-charcoal hover:text-teal transition-colors duration-300"
                    >
                      <Mail
                        className="w-5 h-5 text-teal flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm">info@homeproxsvcs.com</span>
                    </a>
                  </div>
                </div>

                {/* Service Coverage */}
                <div className="bg-teal/5 rounded-2xl p-6 border border-teal/20">
                  <h3 className="font-display text-lg font-bold text-charcoal mb-4">
                    Service Area
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin
                        className="w-4 h-4 text-teal mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-text-muted">
                        All of Texas Statewide
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock
                        className="w-4 h-4 text-teal mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-text-muted">
                        M-F: 8am–6pm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-surface-50 rounded-2xl p-6 border border-surface-200">
                  <h3 className="font-display text-sm font-bold text-charcoal uppercase tracking-wider mb-4">
                    Why HomeProX
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-teal font-bold">✓</span>
                      <span className="font-body text-sm text-charcoal">
                        Fully Insured
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-teal font-bold">✓</span>
                      <span className="font-body text-sm text-charcoal">
                        Licensed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-teal font-bold">✓</span>
                      <span className="font-body text-sm text-charcoal">
                        10+ Years
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Info Cards - Redesigned */}
      <section className="py-24 lg:py-32 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-12 text-center">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Fast Response",
                description: "We respond to all inquiries within 24 hours",
              },
              {
                icon: Tag,
                title: "Transparent Pricing",
                description: "No hidden fees. What you see is what you pay",
              },
              {
                icon: CheckCircle2,
                title: "Professional Service",
                description: "Licensed, insured, and fully trained teams",
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimatedSection
                  key={card.title}
                  variant="fadeUp"
                  delay={index * 0.1}
                >
                  <div className="bg-white rounded-2xl p-8 border border-surface-200 text-center hover:border-teal/40 hover:shadow-card transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-teal" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                      {card.title}
                    </h3>
                    <p className="font-body text-text-muted">
                      {card.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
