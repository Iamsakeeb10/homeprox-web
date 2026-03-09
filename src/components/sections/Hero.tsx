"use client";

import Image from "next/image";
import Link from "next/link";

const HERO_CARD_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=720&q=80",
    alt: "Plumbing and pipe repair"
  },
  {
    src: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=720&q=80",
    alt: "Electrical work"
  },
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=720&q=80",
    alt: "General repairs and handyman"
  }
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-bg">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-32 sm:pb-36">
        <div className="grid grid-cols-1 min-[1131px]:grid-cols-2 min-[1131px]:gap-16 min-[1131px]:items-center">
          {/* Left: Text — centered below 1130px */}
          <div className="flex flex-col items-center min-[1131px]:items-start text-center min-[1131px]:text-left">
            <h1 className="font-display text-4xl sm:text-5xl min-[1131px]:text-6xl font-bold text-hero-text leading-tight mb-6">
              Professional Property
              <br />
              Maintenance has never
              <br />
              been so{" "}
              <span className="relative inline-block text-orange">
                Simple
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-orange rounded-full" />
              </span>
            </h1>

            <p className="font-body text-lg text-hero-muted mb-10 max-w-md leading-relaxed mx-auto min-[1131px]:mx-0">
              We are a team of talented professionals supporting your residential and commercial property management across Texas.
            </p>

            <div className="flex flex-row flex-wrap gap-4 justify-center min-[1131px]:justify-start">
              <Link
                href="/quote"
                className="bg-orange text-white px-8 py-3 rounded-full font-accent font-medium text-base hover:bg-orange-dark hover:scale-105 transition-all duration-300 shadow-md"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-orange text-white px-8 py-3 rounded-full font-accent font-medium text-base hover:bg-orange-dark hover:scale-105 transition-all duration-300 shadow-md"
              >
                View Our Services
              </Link>
              <Link
                href="/clients"
                className="bg-orange text-white px-8 py-3 rounded-full font-accent font-medium text-base hover:bg-orange-dark hover:scale-105 transition-all duration-300 shadow-md"
              >
                Our Clients
              </Link>
            </div>
          </div>

          {/* Hero Cards Collage — full-image cards, pushed down slightly */}
          <div className="hidden min-[1131px]:flex items-center justify-end pt-[38px]">
            <div className="relative w-[480px] xl:w-[520px] h-[440px] xl:h-[460px]">
              {/* Card 1 — back, top-right (full image) */}
              <div
                className="absolute top-0 right-0 w-[340px] xl:w-[360px] h-[200px] xl:h-[220px] rounded-2xl border border-white/10 shadow-2xl z-10 overflow-hidden animate-float"
                style={{ animationDelay: "0s" }}
              >
                <Image
                  src={HERO_CARD_IMAGES[0].src}
                  alt={HERO_CARD_IMAGES[0].alt}
                  fill
                  className="object-cover"
                  sizes="360px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-transparent" />
                <div className="absolute top-0 left-0 right-0 px-4 py-3">
                  <span className="font-accent font-bold text-white text-sm tracking-wide uppercase">Plumbing</span>
                  <p className="text-white/80 text-xs font-body mt-0.5">Leak detection, pipe repair & installation</p>
                </div>
              </div>

              {/* Card 2 — middle (full image) */}
              <div
                className="absolute top-[120px] right-[60px] w-[340px] xl:w-[360px] h-[200px] xl:h-[220px] rounded-2xl border border-white/10 shadow-2xl z-20 overflow-hidden animate-float"
                style={{ animationDelay: "0.7s" }}
              >
                <Image
                  src={HERO_CARD_IMAGES[1].src}
                  alt={HERO_CARD_IMAGES[1].alt}
                  fill
                  className="object-cover"
                  sizes="360px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-transparent" />
                <div className="absolute top-0 left-0 right-0 px-4 py-3">
                  <span className="font-accent font-bold text-white text-sm tracking-wide uppercase">Electrical</span>
                  <p className="text-white/80 text-xs font-body mt-0.5">Wiring, panel upgrades & fixture installs</p>
                </div>
              </div>

              {/* Card 3 — front, bottom-left (full image) */}
              <div
                className="absolute top-[240px] right-[120px] w-[340px] xl:w-[360px] h-[200px] xl:h-[220px] rounded-2xl border border-white/10 shadow-2xl z-30 overflow-hidden animate-float"
                style={{ animationDelay: "1.4s" }}
              >
                <Image
                  src={HERO_CARD_IMAGES[2].src}
                  alt={HERO_CARD_IMAGES[2].alt}
                  fill
                  className="object-cover"
                  sizes="360px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-transparent" />
                <div className="absolute top-0 left-0 right-0 px-4 py-3">
                  <span className="font-accent font-bold text-white text-sm tracking-wide uppercase">General Repairs</span>
                  <p className="text-white/80 text-xs font-body mt-0.5">Drywall, doors, flooring & handyman services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave — transitions into white section below */}
      <div className="absolute bottom-0 left-0 right-0 leading-none z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-24"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
