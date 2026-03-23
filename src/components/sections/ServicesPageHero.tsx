"use client";

import Image from "next/image";
import { useState } from "react";

const PAGE_HERO_IMAGE = "/images/heroes/hero.jpg";

interface ServicesPageHeroProps {
  children: React.ReactNode;
}

export function ServicesPageHero({ children }: ServicesPageHeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[440px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <Image
            src={PAGE_HERO_IMAGE}
            alt="Professional property maintenance services"
            fill
            priority
            className="object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-surface-100 border border-surface-200 flex items-center justify-center">
            <span className="text-charcoal font-display font-bold text-sm">
              Property Maintenance Services
            </span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-10 bg-charcoal/72" />
      <div className="relative z-20">{children}</div>
    </section>
  );
}
