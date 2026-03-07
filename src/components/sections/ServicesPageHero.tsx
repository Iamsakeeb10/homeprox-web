"use client";

import { useState } from "react";
import Image from "next/image";

const PAGE_HERO_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";

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
            <span className="text-navy font-display font-bold text-sm">
              Property Maintenance Services
            </span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-10 bg-navy/70" />
      <div className="relative z-20">{children}</div>
    </section>
  );
}
