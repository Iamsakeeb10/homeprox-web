"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/data/clients";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import Link from "next/link";

export function ClientsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="clients"
      className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-teal/20 shadow-xl shadow-teal/5 overflow-hidden">
            {/* Header Section with Enhanced Gradient */}
            <div className="p-6 lg:p-8 border-b border-teal/20 bg-gradient-to-br from-teal/15 via-teal/8 to-slate-50/50 relative">
              {/* Decorative sparkle */}
              <div className="absolute top-4 right-4">
                <Sparkles className="w-5 h-5 text-teal/30" />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal/80 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-teal/20">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal">
                    Who We Serve
                  </h3>
                  <p className="font-body text-slate-700 text-sm lg:text-base max-w-3xl leading-relaxed">
                    We partner with property-focused organizations that need a
                    responsive team, consistent quality, and accountable service
                    delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section with Subtle Background */}
            <div className="p-6 lg:p-8 space-y-5 bg-gradient-to-b from-white to-slate-50/50">
              {/* Client Tags with Enhanced Styling */}
              <div className="flex flex-wrap gap-2.5">
                {clients.map((client, index) => (
                  <motion.span
                    key={client.id}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, scale: 1 }
                    }
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="inline-flex items-center rounded-full border-2 border-teal/30 bg-gradient-to-br from-teal/10 to-teal/5 px-4 py-2 font-body text-xs sm:text-sm text-slate-800 font-medium hover:border-teal/50 hover:shadow-md hover:shadow-teal/10 transition-all duration-300 cursor-default"
                  >
                    {client.title}
                  </motion.span>
                ))}
              </div>

              {/* Footer CTA Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t-2 border-teal/15 pt-5 mt-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal rounded-full mt-2 shrink-0" />
                  <p className="font-body text-slate-700 text-sm font-medium">
                    One partner for routine maintenance, turn services, and
                    portfolio-wide support.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal to-teal/90 text-white font-accent font-semibold text-sm rounded-lg hover:from-teal/90 hover:to-teal hover:shadow-lg hover:shadow-teal/25 transition-all duration-300 whitespace-nowrap"
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
