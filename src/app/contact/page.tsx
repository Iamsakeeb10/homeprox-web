import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Phone,
  Mail,
  MapPin,
  Map,
  Clock,
  Tag,
  ShieldCheck
} from "lucide-react";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | MEGAFIXX Home Services LLC",
  description: "Get in touch with MEGAFIXX for professional property maintenance services. Serving all of Texas statewide.",
  path: "/contact"
});

export default function ContactPage() {
  const heroImageUrl = "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80";

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Contact MEGAFIXX Home Services"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-950/75 z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="font-body text-muted hover:text-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li className="font-body text-gold">Contact</li>
            </ol>
          </nav>

          {/* H1 */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact MEGAFIXX
          </h1>
          <p className="font-body text-xl text-muted max-w-3xl">
            Let&apos;s talk about your property needs
          </p>
        </div>
      </section>

      {/* Split Layout: Form + Contact Info */}
      <section className="py-20 lg:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Quote Form (60%) */}
            <div className="lg:col-span-3">
              <AnimatedSection variant="fadeLeft">
                <h2 className="font-display text-3xl font-bold text-white mb-6">
                  Request a Quote
                </h2>
                <QuoteForm />
              </AnimatedSection>
            </div>

            {/* Right: Contact Info Panel (40%) */}
            <div className="lg:col-span-2">
              <AnimatedSection variant="fadeRight">
                <div className="bg-navy-800 border-l-4 border-gold rounded-lg p-8 h-full">
                  <h3 className="font-display text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div>
                      <a
                        href="tel:4693789262"
                        className="flex items-center gap-3 font-body text-white hover:text-gold transition-colors duration-300"
                      >
                        <Phone className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                        <span>(469) 378-9262</span>
                      </a>
                    </div>

                    {/* Email */}
                    <div>
                      <a
                        href="mailto:info@megafixxhomeservices.com"
                        className="flex items-center gap-3 font-body text-white hover:text-gold transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                        <span>info@megafixxhomeservices.com</span>
                      </a>
                    </div>

                    {/* Location */}
                    <div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-body text-white">Collin County, Texas</p>
                        </div>
                      </div>
                    </div>

                    {/* Serving */}
                    <div>
                      <div className="flex items-start gap-3">
                        <Map className="w-5 h-5 text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-body text-white">All of Texas Statewide</p>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-body text-white mb-1">Mon–Fri 8AM–6PM</p>
                          <p className="font-body text-white mb-1">Sat 9AM–4PM</p>
                          <p className="font-body text-white">Sun Closed</p>
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="pt-4 border-t border-navy-700">
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-3 py-1 bg-navy-700 rounded-full text-xs font-accent text-gold">
                          Fully Insured
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-navy-700 rounded-full text-xs font-accent text-gold">
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
      <section className="py-20 lg:py-28 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Response",
                description: "We respond within 24 hours"
              },
              {
                icon: Tag,
                title: "Free Estimates",
                description: "No-obligation project estimate"
              },
              {
                icon: Map,
                title: "Statewide Coverage",
                description: "All major regions across Texas"
              }
            ].map((card, index) => (
              <AnimatedSection
                key={card.title}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-navy-950 border border-navy-700 rounded-xl p-8 text-center h-full">
                  <card.icon className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-muted">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
