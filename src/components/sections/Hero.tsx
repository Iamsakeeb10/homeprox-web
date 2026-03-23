"use client";

import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, CalendarCheck, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HERO_STATS = [
  { icon: Building2, value: "500+", label: "Properties Maintained Statewide" },
  { icon: CalendarCheck, value: "10+", label: "Years of Industry Leadership" },
  { icon: ShieldCheck, value: "100%", label: "Fully Certified & Bonded" },
  { icon: Wrench, value: "7", label: "Specialized Service Categories" },
];

const HERO_IMAGE_URL = "/images/heroes/hero.jpg";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col bg-hero-bg overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE_URL}
          alt="HomeProX team providing statewide property maintenance services"
          fill
          priority
          className="object-cover object-center brightness-[0.62] contrast-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/72 to-charcoal/88 z-10" />

      {/* Subtle texture overlay — diagonal lines, low opacity */}
      <div className="hero-texture absolute inset-0 z-10 pointer-events-none" />

      {/* Teal top accent line */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />

      {/* Main content grid */}
      <div className="relative z-20 flex-1 flex items-center">
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
                Expert Property Maintenance{" "}
                <span className="text-teal">Across Texas</span>
              </h1>

              {/* Body copy */}
              <p className="font-body text-lg text-hero-muted max-w-xl mx-auto min-[1131px]:mx-0 leading-relaxed">
                Keeping your properties in top condition, anywhere in Texas.
                Trusted by property managers, investors, and institutions for
                fast, reliable, and high-quality service.
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
            </div>

            {/* RIGHT: Stat cards grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="bg-charcoal/5 border border-white/25 rounded-2xl p-5 lg:p-6 flex flex-col gap-3 backdrop-blur-md shadow-card hover:bg-charcoal/45 hover:border-teal/40 transition-all duration-300 group"
                >
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                    <stat.icon className="w-5 h-5 text-teal" />
                  </div>
                  {/* Big number */}
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  {/* Label */}
                  <div className="font-body text-sm text-surface-200 leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Trust strip */}
      <div className="relative z-20 border-t border-white/10 bg-charcoal/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-surface-300">
            <span className="font-accent font-semibold text-white tracking-wide">
              HomeProX
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            {[
              "Comprehensive Regional Coverage",
              "Custom Property Solutions",
              "Professional Portfolio Management",
              "Institutional Quality Standards",
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
