"use client";

import { Button } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Hero() {
  const [heroImgError, setHeroImgError] = useState(false);
  const [cardImgError, setCardImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const heroImageUrl = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=85";
  const cardImageUrl = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80";
  
  const containerVariants = shouldReduceMotion ? undefined : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = shouldReduceMotion ? undefined : {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = shouldReduceMotion ? undefined : {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5 }
    }
  };

  const floatAnimation = shouldReduceMotion ? undefined : {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  };

  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!heroImgError ? (
          <Image
            src={heroImageUrl}
            alt="Professional property maintenance across Texas"
            fill
            priority
            className="object-cover"
            onError={() => setHeroImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-surface-100 border border-surface-200 flex items-center justify-center">
            <span className="text-blue text-sm">Professional Property Maintenance</span>
          </div>
        )}
      </div>

      {/* Overlay — navy for contrast and legibility */}
      <div className="absolute inset-0 bg-navy/65 z-10" />

      {/* Accent line (Right Side) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1 bg-gradient-to-l from-blue/30 to-transparent z-20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-blue/10 border border-blue/30 rounded-full font-accent text-xs uppercase tracking-wide text-blue font-medium">
                Texas Statewide Property Maintenance
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              Professional Property Maintenance
            </motion.h1>

            {/* Sub Headline */}
            <motion.p
              variants={itemVariants}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-light mb-6"
            >
              Across Texas
            </motion.p>

            {/* Body Text */}
            <motion.p
              variants={itemVariants}
              className="font-body text-lg text-surface-200 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Trusted by property managers, investors, and financial institutions statewide.
              Reliable. Scalable. Professional.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue" aria-hidden="true" />
                <span className="font-bold text-blue">500+</span>
                <span className="text-surface-200">Properties Maintained</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue" aria-hidden="true" />
                <span className="font-bold text-blue">Texas</span>
                <span className="text-surface-200">Statewide</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue" aria-hidden="true" />
                <span className="font-bold text-blue">Fully</span>
                <span className="text-surface-200">Insured</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Image Card (Desktop Only) */}
          <motion.div
            variants={cardVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="hidden lg:block relative"
          >
            <motion.div
              animate={floatAnimation}
              className="relative w-full max-w-md mx-auto"
            >
              {!cardImgError ? (
                <Image
                  src={cardImageUrl}
                  alt="MEGAFIXX property maintenance professional"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                  onError={() => setCardImgError(true)}
                />
              ) : (
                <div className="bg-surface-100 border border-surface-200 rounded-2xl shadow-2xl aspect-[4/3] flex items-center justify-center">
                  <Wrench className="w-16 h-16 text-blue" aria-hidden="true" />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
