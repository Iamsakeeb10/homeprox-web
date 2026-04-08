"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Droplets,
  Home,
  Leaf,
  Paintbrush,
  Sparkles,
  Trash2,
  Wrench
} from "lucide-react";

// Icon mapping for service cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Droplets,
  Paintbrush,
  Sparkles,
  Leaf,
  Home,
  Trash2,
  CheckCircle
};

function ServiceCard({
  service,
  index,
  shouldReduceMotion,
}: {
  service: (typeof services)[number];
  index: number;
  shouldReduceMotion: boolean;
}) {
  const [imgError, setImgError] = React.useState(false);
  const [showAllFeatures, setShowAllFeatures] = React.useState(false);
  const IconComponent = iconMap[service.icon] || Wrench;
  const hasImage = Boolean(service.image?.trim()) && !imgError;
  const visibleFeatures = showAllFeatures ? service.features : service.features.slice(0, 3);

  return (
    <motion.div
      key={service.id}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="h-full"
    >
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row h-full shadow-card hover:border-teal/40 hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1">
        <div className="relative w-full sm:w-2/5 h-48 sm:h-auto sm:min-h-[280px] flex-shrink-0">
          {hasImage ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-surface-100 border-r border-surface-200 flex flex-col items-center justify-center text-center p-4">
              <IconComponent className="w-10 h-10 text-teal mb-2" aria-hidden="true" />
              <p className="font-body text-sm text-text-muted">Image needed</p>
              <p className="font-body text-xs text-text-muted/80">
                Add local service image
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col p-4 sm:p-5 w-full sm:w-3/5 min-h-[280px]">
          <div className="w-8 h-8 rounded-lg bg-teal-muted flex items-center justify-center mb-2">
            <IconComponent className="w-4 h-4 text-teal" aria-hidden="true" />
          </div>

          <h3 className="font-display text-base sm:text-lg font-bold text-charcoal mb-2 line-clamp-2">
            {service.title}
          </h3>

          <p className="font-body text-text-muted text-sm mb-3 line-clamp-2">
            {service.description}
          </p>

          <div
            className={`mb-2 overflow-hidden transition-all duration-300 ${
              showAllFeatures ? "max-h-40" : "max-h-20"
            }`}
          >
            <ul
              className={`space-y-1.5 pr-1 ${
                showAllFeatures ? "overflow-y-auto max-h-40" : "overflow-hidden"
              }`}
            >
              {visibleFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle
                    className="w-3.5 h-3.5 text-teal mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-body text-text-muted text-xs">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.features.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAllFeatures((prev) => !prev)}
              className="self-start mb-3 font-body text-xs text-teal hover:text-teal-dark transition-colors"
            >
              {showAllFeatures ? "See less" : "See more"}
            </button>
          )}

          <div className="mt-auto">
            <Link
              href={`/services#${service.slug}`}
              className="inline-flex items-center gap-1 font-accent text-teal hover:text-teal-dark font-medium hover:underline transition-colors duration-300 text-sm group/link focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-white rounded"
            >
              Learn More
              <ArrowRight
                className="w-3.5 h-3.5 text-teal transition-transform duration-300 group-hover/link:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              title="Service Offerings"
              subtitle="Specialized maintenance solutions tailored to address comprehensive property requirements across Texas"
              align="left"
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-teal font-medium text-sm hover:gap-2 transition-all duration-300 whitespace-nowrap"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Services Grid — Row-Based Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
