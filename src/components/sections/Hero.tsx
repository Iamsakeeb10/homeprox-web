"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  CalendarCheck,
  ShieldCheck,
  Wrench,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const HERO_STATS = [
  { icon: Building2, value: "500+", label: "Properties Maintained Statewide" },
  { icon: CalendarCheck, value: "10+", label: "Years of Trusted Service" },
  { icon: ShieldCheck, value: "100%", label: "Insured & Licensed Operations" },
  { icon: Wrench, value: "7", label: "Core Maintenance Services" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col bg-hero-bg overflow-hidden pt-20">
      {/* Subtle texture overlay — diagonal lines, low opacity */}
      <div className="hero-texture absolute inset-0 pointer-events-none" />

      {/* Teal top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />

      {/* Main content grid */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 min-[1131px]:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT: Text column */}
            <div className="flex flex-col gap-6 text-center min-[1131px]:text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 self-center min-[1131px]:self-start bg-teal/15 border border-teal/30 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="font-accent text-sm font-medium text-teal tracking-wide uppercase">
                  Texas Statewide Property Maintenance
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Professional Property Care,{" "}
                <span className="text-teal">Across All of Texas</span>
              </h1>

              {/* Body copy */}
              <p className="font-body text-lg text-hero-muted max-w-xl mx-auto min-[1131px]:mx-0 leading-relaxed">
                HomeProX delivers reliable maintenance, fast turnarounds, and full
                documentation for property managers, banks, investors, and real
                estate professionals — statewide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center min-[1131px]:justify-start mt-2">
                <Button size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>

              {/* Trust micro-row: icons + short labels */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center min-[1131px]:justify-start mt-2">
                {[
                  { icon: ShieldCheck, label: "Fully Insured & Licensed" },
                  { icon: MapPin, label: "All Texas Markets" },
                  { icon: Clock, label: "Fast Response" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm text-surface-300"
                  >
                    <Icon className="w-4 h-4 text-teal flex-shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Stat cards grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={
                    prefersReducedMotion
                      ? {}
                      : { opacity: 0, y: 24 }
                  }
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { opacity: 1, y: 0 }
                  }
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 flex flex-col gap-3 hover:bg-white/10 hover:border-teal/30 transition-all duration-300 group"
                >
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center group-hover:bg-teal/25 transition-colors">
                    <stat.icon className="w-5 h-5 text-teal" />
                  </div>
                  {/* Big number */}
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  {/* Label */}
                  <div className="font-body text-sm text-surface-300 leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Trust strip */}
      <div className="relative z-10 border-t border-white/10 bg-charcoal/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-surface-300">
            <span className="font-accent font-semibold text-white tracking-wide">
              HomeProX
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            {[
              "Statewide Texas Coverage",
              "Residential & Commercial",
              "REO & Bank-Owned Properties",
              "Property Manager Preferred",
            ].map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && (
                  <span className="hidden sm:block w-px h-4 bg-white/20" />
                )}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
