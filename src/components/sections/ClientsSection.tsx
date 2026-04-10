"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/data/clients";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export function ClientsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="clients"
      className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-surface-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              title="Client Expertise Areas"
              subtitle="Concise, reliable support for organizations managing property assets across Texas."
              align="left"
            />
            <Link
              href="/clients"
              className="inline-flex items-center gap-1 text-teal font-medium text-sm hover:gap-2 transition-all duration-300 whitespace-nowrap"
            >
              Our Clients
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl border border-surface-200 shadow-card overflow-hidden">
            <div className="p-6 lg:p-8 border-b border-surface-200 bg-gradient-to-r from-teal/5 via-white to-white">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 bg-teal-muted rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-teal" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    Who We Serve
                  </h3>
                  <p className="font-body text-text-muted text-sm lg:text-base max-w-3xl">
                    We partner with property-focused organizations that need a
                    responsive team, consistent quality, and accountable service
                    delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8 space-y-5">
              <div className="flex flex-wrap gap-2.5">
                {clients.map((client) => (
                  <span
                    key={client.id}
                    className="inline-flex items-center rounded-full border border-surface-200 bg-surface-50 px-3 py-1.5 font-body text-xs sm:text-sm text-charcoal"
                  >
                    {client.title}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-surface-200 pt-5">
                <p className="font-body text-text-muted text-sm">
                  One partner for routine maintenance, turn services, and
                  portfolio-wide support.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-teal font-accent font-medium text-sm hover:text-teal-dark transition-colors duration-300 whitespace-nowrap"
                >
                  Discuss Your Needs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
