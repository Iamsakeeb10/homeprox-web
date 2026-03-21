"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const contactItems = [
    { icon: Phone, label: "Phone", value: "(469) 378-9262", href: "tel:4693789262" },
    { icon: Mail, label: "Email", value: "info@homeproxsvcs.com", href: "mailto:info@homeproxsvcs.com" },
    { icon: MapPin, label: "Location", value: "Serving Texas Statewide", href: null },
    { icon: Clock, label: "Hours", value: "Available 7 days a week", href: null },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Subtle diagonal accent overlay (matches vendor CTA pattern, but on light bg) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #14B8A6 0, #14B8A6 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-surface-200 rounded-2xl shadow-card p-8 sm:p-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">
                Tell Us About Your Property Maintenance Requirements
              </h2>
              <p className="font-body text-text-muted mb-8 text-center">
                Contact our team with questions, project details, or collaboration ideas. We respond quickly and adapt to your schedule.
              </p>
              
              {/* Contact Info with Left Border Accents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3 pl-3 border-l-2 border-teal/40">
                      <Icon className="text-teal mt-0.5 w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-body text-sm text-text-muted">{item.label}</div>
                        <div className="font-body font-medium text-charcoal">{item.value}</div>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={index} href={item.href} className="hover:opacity-80 transition-opacity duration-300">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <Button variant="primary" size="lg" className="w-full" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
