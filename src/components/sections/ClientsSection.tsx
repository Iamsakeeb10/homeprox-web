"use client";

import { ClientTypeCard } from "@/components/cards/ClientTypeCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/data/clients";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClientsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="clients" className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              title="Client Expertise Areas"
              subtitle="Custom solutions for asset managers, banks, brokers, and investment organizations"
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

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ClientTypeCard client={client} variant="compact" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
