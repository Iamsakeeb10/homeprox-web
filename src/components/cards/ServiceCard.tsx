"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Wrench,
  Droplets,
  Paintbrush,
  Sparkles,
  Leaf,
  Home,
  Trash2,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Service } from "@/types";
import { Button } from "@/components/ui/Button";

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
        className="group bg-navy-800 border border-navy-700 rounded-xl overflow-hidden flex flex-col h-full hover:border-gold hover:shadow-gold-glow transition-all duration-300 focus-within:ring-2 focus-within:ring-gold focus-within:outline-none"
      >
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          {!imgError ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-t-xl"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-navy-700 flex items-center justify-center">
              <IconComponent className="w-12 h-12 text-gold" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="mb-4">
            <IconComponent className="w-8 h-8 text-gold" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-bold text-white mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-body text-muted text-sm mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-4 flex-grow">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-muted text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <Link
            href={`/services#${service.slug}`}
            className="mt-auto font-accent text-gold hover:text-orange hover:underline transition-colors duration-300 flex items-center gap-1 group/link focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-800 rounded"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
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
        className="group bg-navy-800 border border-navy-700 rounded-xl overflow-hidden flex flex-col h-full hover:border-gold hover:shadow-gold-glow transition-all duration-300 focus-within:ring-2 focus-within:ring-gold focus-within:outline-none"
      >
        {/* Image */}
        <div className="relative w-full h-64 overflow-hidden">
          {!imgError ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-t-xl"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-navy-700 flex items-center justify-center">
              <IconComponent className="w-16 h-16 text-gold" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="mb-4">
            <IconComponent className="w-10 h-10 text-gold" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-body text-muted mb-4">
            {service.description}
          </p>

          {/* Coverage Note */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-navy-700 rounded-full text-xs font-accent text-gold">
              Available Statewide Across Texas
            </span>
          </div>

          {/* Features List */}
          <ul className="space-y-2 mb-6 flex-grow">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-muted">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button variant="secondary" size="md" className="mt-auto" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  // List variant (for future use)
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 flex flex-col md:flex-row gap-6">
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
          <div className="w-full h-full bg-navy-700 flex items-center justify-center rounded-xl">
            <IconComponent className="w-12 h-12 text-gold" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <IconComponent className="w-8 h-8 text-gold flex-shrink-0" aria-hidden="true" />
          <h3 className="font-display text-2xl font-bold text-white">
            {service.title}
          </h3>
        </div>
        <p className="font-body text-muted mb-4">{service.description}</p>
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-muted text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/services#${service.slug}`}
          className="mt-auto font-accent text-gold hover:text-orange hover:underline transition-colors duration-300 flex items-center gap-1"
        >
          Learn More
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
