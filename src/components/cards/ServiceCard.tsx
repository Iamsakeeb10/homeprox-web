"use client";

import { Button } from "@/components/ui/Button";
import { Service } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
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
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Icon mapping for dynamic icon loading
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Droplets,
  Paintbrush,
  Sparkles,
  Leaf,
  Home,
  Trash2
};

interface ServiceCardProps {
  service: Service;
  variant?: "grid" | "list" | "featured";
}

export function ServiceCard({ service, variant = "grid" }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = iconMap[service.icon] || Wrench;

  if (variant === "grid") {
    return (
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.3 }}
        className="group bg-white border border-surface-200 rounded-2xl overflow-hidden flex flex-col h-full shadow-card hover:border-teal/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-teal focus-within:outline-none"
      >
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          {!imgError ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-t-2xl"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-surface-200 flex items-center justify-center">
              <IconComponent className="w-12 h-12 text-teal" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-teal-muted flex items-center justify-center mb-3">
            <IconComponent className="w-5 h-5 text-teal" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-bold text-charcoal mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-body text-text-muted text-sm mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-4 flex-grow">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-text-muted text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <Link
            href={`/services#${service.slug}`}
            className="mt-auto font-accent text-teal hover:text-teal-dark font-medium hover:underline transition-colors duration-300 flex items-center gap-1 group/link focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-surface-100 rounded"
          >
            Learn More
            <ArrowRight className="w-4 h-4 text-teal transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    );
  }

  if (variant === "featured") {
    return (
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.3 }}
        className="group bg-white border border-surface-200 rounded-2xl overflow-hidden flex flex-col h-full shadow-card hover:border-teal/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-teal focus-within:outline-none"
      >
        {/* Image */}
        <div className="relative w-full h-64 overflow-hidden">
          {!imgError ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-t-2xl"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-surface-200 flex items-center justify-center">
              <IconComponent className="w-16 h-16 text-teal" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center mb-4">
            <IconComponent className="w-6 h-6 text-teal" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-body text-text-muted mb-4">
            {service.description}
          </p>

          {/* Coverage Note — prestige badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-skyblue-light rounded-full text-xs font-accent text-skyblue">
              Available Statewide Across Texas
            </span>
          </div>

          {/* Features List */}
          <ul className="space-y-2 mb-6 flex-grow">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-text-muted">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button variant="secondary" size="md" className="mt-auto" asChild>
            <Link href="/contact?tab=quote">Get a Quote</Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  // List variant (for future use)
  return (
    <div className="bg-white border border-surface-200 rounded-xl shadow-card p-6 flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
        {!imgError ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover rounded-xl"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-surface-200 flex items-center justify-center rounded-xl">
            <IconComponent className="w-12 h-12 text-teal" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <IconComponent className="w-8 h-8 text-teal flex-shrink-0" aria-hidden="true" />
          <h3 className="font-display text-2xl font-bold text-charcoal">
            {service.title}
          </h3>
        </div>
        <p className="font-body text-text-muted mb-4">{service.description}</p>
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-text-muted text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/services#${service.slug}`}
          className="mt-auto font-accent text-teal hover:text-teal-dark font-medium hover:underline transition-colors duration-300 flex items-center gap-1"
        >
          Learn More
          <ArrowRight className="w-4 h-4 text-teal" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
