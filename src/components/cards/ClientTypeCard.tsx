"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Landmark,
  KeyRound,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { ClientType } from "@/types";

// Icon mapping for dynamic icon loading
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Landmark,
  KeyRound,
  TrendingUp
};

interface ClientTypeCardProps {
  client: ClientType;
  variant?: "compact" | "full";
}

export function ClientTypeCard({ client, variant = "compact" }: ClientTypeCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = iconMap[client.icon] || Building2;

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-surface-200 rounded-xl shadow-card p-6 flex flex-col h-full hover:border-blue/40 hover:shadow-card-hover transition-all duration-300"
      >
        {/* Icon */}
        <div className="mb-4">
          <IconComponent className="w-10 h-10 text-blue" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-navy mb-3">
          {client.title}
        </h3>

        {/* Description */}
        <p className="font-body text-text-muted text-sm mb-4 line-clamp-2">
          {client.description}
        </p>

        {/* Benefits List */}
        <ul className="space-y-2 mt-auto">
          {client.benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-text-muted text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  }

  // Full variant (for clients page)
  return (
    <div className="flex flex-col">
      {/* Icon */}
      <div className="mb-4">
        <IconComponent className="w-12 h-12 text-blue" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
        {client.title}
      </h3>

      {/* Description */}
      <p className="font-body text-text-muted text-lg mb-6">
        {client.description}
      </p>

      {/* Benefits List */}
      <ul className="space-y-3">
        {client.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-text-muted">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
