"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  className = ""
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px 60px 0px", amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
