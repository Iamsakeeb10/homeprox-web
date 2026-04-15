# HomeProX Home Services LLC — Cursor-Ready Chunked Prompts

### Next.js 16 | TypeScript | Tailwind CSS v4 | App Router | Production Grade

---

> **How to Use These Prompts:**
>
> - Feed each chunk **one at a time** to Cursor.
> - Always attach the reference website URL and demo images when prompted to do so.
> - Wait for each chunk to fully complete before moving to the next.
> - Each chunk is self-contained with context so Cursor won't lose focus.

---

## PRE-PROMPT (Read Before Starting)

> **Paste this before Chunk 1 in Cursor Chat as a "Project Context" message:**

```
PROJECT CONTEXT — READ THIS BEFORE STARTING:

We are building a production-grade, fully responsive Next.js 16 website for:

Company: HomeProX Services LLC
Industry: Statewide Property Maintenance | Texas
Target Clients: Property managers, banks, asset managers, real estate investors, REO specialists, portfolio owners

Tech Stack:
- Next.js 16 with App Router
- TypeScript (.tsx files only)
- Tailwind CSS v4 (CSS-based config via @theme {} in globals.css — NO tailwind.config.ts)
- Framer Motion for animations
- src/ directory structure
- Turbopack enabled
- ESLint configured

Design Philosophy (INSPIRED BY VERISK.COM):
- Professional, modern, trustworthy — NOT a local handyman site
- Feels like a statewide B2B services brand — clean corporate like Verisk
- Light/white primary backgrounds with deep navy accents (NOT an all-dark site)
- Deep navy top navigation bar (fixed, like Verisk)
- Bold, confident typography — large headlines, generous whitespace
- Gold/amber as the primary brand accent color (used sparingly on CTAs, highlights)
- Section backgrounds alternate: white → light gray (#F8F9FA) → white for rhythm
- Card grids with image or icon, clean borders, subtle hover shadows
- "Learn more →" arrow link pattern on all cards (Verisk-style)
- Smooth scroll animations, micro-interactions, hover effects
- Fully responsive: mobile-first, tablet, desktop, widescreen

[ATTACH YOUR REFERENCE WEBSITE URL AND DEMO IMAGES HERE]
```

https://www.verisk.com/

---

## CHUNK 1 — Project Structure, Global Layout & Design System

```
We are building the HomeProX Home Services LLC website.
Refer to the project context already provided and the reference website/images attached.

IMPORTANT COMPATIBILITY NOTES — READ BEFORE WRITING ANY CODE:
- This project uses Next.js 16 (not 14) with App Router
- This project uses Tailwind CSS v4 — there is NO tailwind.config.ts file
- In Tailwind v4, all custom theme configuration goes inside globals.css using @theme {}
- globals.css already contains: @import "tailwindcss"
- Do NOT create a tailwind.config.ts file — it will be ignored in v4
- Use next/font/google (already available) — do NOT use @next/font

TASK: Set up the global design system, layout, fonts, and theme.

1. FOLDER STRUCTURE
The following already exist — do not recreate them:
  src/app/          src/components/
  src/lib/          src/types/
  src/hooks/

Create these sub-folders and files:
src/
├── app/
│   ├── layout.tsx              ← Root layout (replace existing)
│   ├── page.tsx                ← Already blank ✓
│   ├── globals.css             ← Already exists — extend it
│   ├── about/page.tsx          ← Empty placeholder
│   ├── services/page.tsx       ← Empty placeholder
│   ├── clients/page.tsx        ← Empty placeholder
│   ├── contact/page.tsx        ← Empty placeholder
│   └── not-found.tsx           ← 404 placeholder
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx     ← Framer Motion page transition wrapper
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   └── AnimatedSection.tsx ← Scroll-triggered fade/slide-up wrapper
│   └── shared/
│       └── ScrollToTop.tsx
├── lib/
│   └── data/
│       ├── services.ts         ← All service data (typed)
│       └── clients.ts          ← Client types data (typed)
├── types/
│   └── index.ts                ← Shared TypeScript interfaces
└── hooks/
    └── useScrollPosition.ts    ← Custom hook for scroll-based effects

2. DESIGN SYSTEM — globals.css (Tailwind v4 syntax)

Keep the existing @import "tailwindcss" at the top.
Add the full design system below it using @theme {} and CSS variables.
Do NOT use tailwind.config.ts — this is the only place theme config lives in v4.

@import "tailwindcss";

@theme {
  /* Colors */
  --color-navy-950: #0A0F1E;
  --color-navy-900: #1A2340;
  --color-navy-800: #111827;
  --color-navy-700: #1F2D47;
  --color-gold:     #C89B3C;
  --color-orange:   #E07B39;
  --color-muted:    #A0AEC0;

  /* Fonts */
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-accent:  'Barlow', sans-serif;

  /* Box shadows */
  --shadow-gold-glow:   0 0 20px rgba(200, 155, 60, 0.3);
  --shadow-card-hover:  0 20px 40px rgba(0, 0, 0, 0.4);

  /* Keyframe animations */
  --animate-fade-up: fadeUp 0.6s ease forwards;
  --animate-float:   float 3s ease-in-out infinite;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

In all components and pages, reference these as Tailwind utility classes:
  bg-navy-950, bg-navy-800, bg-gold, text-gold, text-muted,
  shadow-gold-glow, shadow-card-hover, font-display, font-body, etc.

3. FONTS — src/app/layout.tsx
Use next/font/google (NOT @next/font):

import { Barlow_Condensed, DM_Sans, Barlow } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-accent',
})

Apply all three font variables to the <html> tag className in layout.tsx.
Wrap children in the PageWrapper component.

4. NAVBAR (src/components/layout/Navbar.tsx)
- Fixed top, full width
- Background: transparent on top of hero → transitions to bg-navy-950 with
  backdrop-blur on scroll (use useScrollPosition hook)
- Logo: "HomeProX" in font-display bold + "Home Services LLC" smaller below
- Nav Links: Home | Services | Our Clients | About | Contact
- CTA Button right side: "Get a Quote" — bg-gold, rounded, hover fill effect
- Mobile: hamburger icon (lucide-react Menu/X), animated slide-down drawer menu
- Smooth transition animations using Framer Motion
- Active link underline indicator using usePathname

5. FOOTER (src/components/layout/Footer.tsx)
- Background: bg-navy-950
- 4-column grid (collapses to 2 on tablet, 1 on mobile):
  Col 1: Logo + company tagline + short description
  Col 2: Quick Links (all nav pages)
  Col 3: Services list (linked)
  Col 4: Contact info — phone, email, "Collin County, TX" location badge
- Social icons row (lucide-react icons)
- Bottom bar: copyright + "Terms & Conditions" link
- Subtle top border with gold gradient accent line

6. REUSABLE COMPONENTS

Button.tsx:
- variant prop: "primary" (bg-gold fill) | "secondary" (outline gold) | "ghost" (text only)
- size prop: "sm" | "md" | "lg"
- Hover: scale + background fill transition (transition-all duration-300)
- Loading state support (spinner icon)
- Accepts className override

SectionHeading.tsx:
- Props: title (string), subtitle (string), align ("left" | "center")
- Title: font-display, bold, text-white, large
- Subtitle: font-body, text-muted, smaller
- Optional gold accent bar/line below title

AnimatedSection.tsx:
- Wraps children with Framer Motion whileInView
- Variants: fadeUp | fadeLeft | fadeRight | scaleIn
- Props: variant, delay, className
- viewport: { once: true } — fires only once

ScrollToTop.tsx:
- Appears after scrolling 400px down
- Fixed bottom-right, bg-gold circle, ArrowUp icon (lucide-react)
- Framer Motion fade-in/fade-out
- Smooth scroll to top on click

7. PAGE WRAPPER (PageWrapper.tsx)
- "use client" directive
- Framer Motion AnimatePresence for route transitions
- Fade + slight upward movement transition on page enter

8. HOOKS

useScrollPosition.ts:
- Returns current scroll Y position
- Used by Navbar to detect when to switch from transparent to solid background
- Use "use client" directive

9. TYPES (src/types/index.ts)
Define and export these interfaces:

export interface Service {
  id: string
  title: string
  description: string
  icon: string        // lucide-react icon name
  image: string       // Unsplash URL
  slug: string
  features: string[]
}

export interface ClientType {
  id: string
  title: string
  description: string
  icon: string        // lucide-react icon name
  image: string       // Unsplash URL
  benefits: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number      // 1–5
  clientType: "property-manager" | "investor" | "real-estate" | "financial"
  avatar: string      // Pexels URL
}

export interface ContactFormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  propertyType: string
  serviceNeeded: string
  location: string
  message: string
}

10. DATA FILES

src/lib/data/services.ts — export a typed Service[] array for all 7 services:

Services list with image URLs:
- General Property Maintenance & Minor Plumbing
  icon: "Wrench"
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  features: Leaking faucet repairs, Running toilet fixes, Clogged drain service, Fixture replacement, Minor plumbing maintenance

- Gutter Cleaning
  icon: "Droplets"
  image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=800&q=80"
  features: Full gutter clearing, Downspout flushing, Debris removal, Flow testing, Seasonal maintenance

- Drywall Repair & Interior Painting
  icon: "Paintbrush"
  image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
  features: Hole & crack patching, Texture matching, Interior painting, Touch-up work, Surface prep

- Property Cleaning
  icon: "Sparkles"
  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
  features: Move-in/move-out cleans, Deep cleaning, Post-construction cleanup, Recurring maintenance cleans

- Landscaping & Exterior
  icon: "Leaf"
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
  features: Lawn mowing, Edging & trimming, Shrub pruning, Leaf removal, Seasonal cleanup

- Siding & Exterior Repairs
  icon: "Home"
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  features: Siding panel replacement, Caulking & sealing, Fascia & soffit repair, Exterior patching, Weather damage repair

- Property Cleanouts
  icon: "Trash2"
  image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80"
  features: Full property cleanouts, Furniture & debris removal, Garage & shed clearing, Estate cleanouts, Junk hauling

src/lib/data/clients.ts — export a typed ClientType[] array:

- Property Management Companies
  icon: "Building2"
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
  benefits: Reliable vendor partnerships, Scalable maintenance programs, Fast vacancy turnaround

- Financial Institutions & Asset Managers
  icon: "Landmark"
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
  benefits: REO property specialists, Documented before/after reporting, Compliant work practices

- Real Estate Professionals
  icon: "KeyRound"
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"
  benefits: Pre-listing preparation, Quick turnaround times, Professional results

- Investors & Portfolio Owners
  icon: "TrendingUp"
  image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=900&q=80"
  benefits: Portfolio-scale servicing, Consistent quality across properties, Single point of contact

11. next.config.ts — IMAGE DOMAINS
Update next.config.ts to allow Unsplash and Pexels images:

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
}

export default nextConfig

12. GLOBAL IMAGE RULES
Apply these rules to every image component built throughout the entire project:
- NEVER use <img> tags — always use Next.js <Image /> component
- Every image must have descriptive alt text (no empty alt="")
- Above-fold images: priority={true}
- Below-fold images: loading="lazy" (Next.js default)
- All card images: fixed aspect ratio container (aspect-video or aspect-[4/3])
- All background images: fill prop + object-cover inside a relative positioned container
- All avatar images: explicit width={48} height={48} rounded-full object-cover
- On image load error — implement onError fallback on every external image:

  const [imgError, setImgError] = useState(false)
  {!imgError ? (
    <Image src={url} onError={() => setImgError(true)} ... />
  ) : (
    <div className="bg-navy-800 flex items-center justify-center ...">
      <span className="text-gold text-xs">{fallbackText}</span>
    </div>
  )}

IMPORTANT RULES:
- All files must be .tsx or .ts only. No .js files.
- "use client" only where hooks or browser APIs are used (useState, useEffect, usePathname, etc.)
- Server Components by default for all pages.
- No hardcoded hex color values in JSX — use Tailwind classes (bg-gold, text-navy-950, etc.)
- All props must have TypeScript types — no 'any' anywhere.
- Mobile-first responsive design on every component.
- Do NOT create tailwind.config.ts — theme lives in globals.css @theme {} only.
- Confirm npm run dev compiles with zero errors before marking complete.
```

---

## CHUNK 2 — Hero Section & Homepage Above the Fold

```
We are continuing the HomeProX Home Services LLC Next.js 16 website.
All existing project structure, design system, Navbar, and Footer from Chunk 1 are already in place.

COMPATIBILITY REMINDER:
- Tailwind v4 — use @theme {} classes (bg-navy-950, text-gold, etc.), no tailwind.config.ts
- next/font/google is already configured in layout.tsx
- No hardcoded hex values in JSX

[ATTACH REFERENCE WEBSITE URL AND DEMO IMAGES AGAIN HERE]

TASK: Build the Hero Section and the full above-the-fold homepage experience,
including all real photography.

FILE: src/app/page.tsx (start building) + src/components/sections/Hero.tsx

1. HERO SECTION (Full Viewport Height)

Layout:
- Full screen height (min-h-screen)
- Layered background using a real photo:
  (a) Full-width background image using Next.js <Image /> with fill + object-cover
  (b) Dark navy overlay on top: absolute inset-0 bg-navy-950/75 (z-10)
  (c) Gold accent diagonal line or shape element (decorative, right side, z-20)
- Content z-30, centered-left aligned on desktop, centered on mobile

Background image:
https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=85
Alt: "Professional property maintenance across Texas"
priority={true} — above the fold
Layer order: image (z-0) → dark overlay (z-10) → content (z-20)

Content:
- Badge/Label pill at top: "Texas Statewide Property Maintenance" — small, gold border,
  uppercase, font-accent
- Main Headline (H1): "Professional Property Maintenance" — font-display, text-5xl → text-7xl,
  text-white, bold
- Sub Headline: "Across Texas" — font-display, text-gold, slightly smaller
- Body text: "Trusted by property managers, investors, and financial institutions statewide.
  Reliable. Scalable. Professional." — font-body, text-muted, max-w-xl
- CTA Buttons row:
  Primary: "Get a Free Quote" — Button variant="primary" size="lg"
  Secondary: "View Our Services" — Button variant="secondary" size="lg"
- Trust bar below buttons: 3 inline stats with icons:
  "500+ Properties Maintained" | "Texas Statewide" | "Fully Insured"
  Each with a small lucide-react icon, number bold text-gold, label text-muted

Right Side (desktop only):
- Real image card showing a professional maintenance worker on a job
- Use Next.js <Image /> — rounded-2xl, shadow-2xl, object-cover
- Image URL:
  https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80
  Alt: "HomeProX property maintenance professional"
- Implement imgError fallback (solid dark card with Wrench icon centered)
- Subtle floating animation (gentle up-down loop using Framer Motion animate)

Animations (Framer Motion):
- Staggered entrance: badge → headline → body → buttons → stats (each with 0.1s delay)
- Right side card: slides in from right with slight delay
- All animations must respect useReducedMotion() — skip animations if true

2. STATS BAR SECTION (src/components/sections/StatsBar.tsx)
Below hero, full-width bg-navy-800:
- 4 stats in a horizontal row (2x2 grid on mobile):
  "10+ Years Experience" | "500+ Properties" | "Statewide Coverage" | "100% Insured"
- Each stat: large text-gold number/value, text-white label,
  subtle top border-t border-gold accent
- Scroll-triggered count-up animation for numbers (Framer Motion or CSS)

3. HOME PAGE STRUCTURE
In src/app/page.tsx, import and render:
- <Hero />
- <StatsBar />
- {/* Services Section - Chunk 3 */}
- {/* Who We Serve Section - Chunk 4 */}
- {/* Why Choose Us Section - Chunk 5 */}
- {/* Testimonials - Chunk 6 */}
- {/* CTA Banner - Chunk 7 */}

RULES:
- Hero must look premium and B2B professional, not like a local handyman site
- No lorem ipsum — use real HomeProX content from the project context
- Fully responsive: test breakpoints sm, md, lg, xl, 2xl
- All images follow global image rules from Chunk 1
```

---

## CHUNK 3 — Services Section (Homepage) & Full Services Page

```
Continuing HomeProX Home Services LLC. Chunks 1 & 2 are complete.

COMPATIBILITY REMINDER:
- Tailwind v4 — use @theme {} classes only, no tailwind.config.ts
- No hardcoded hex values in JSX

[ATTACH REFERENCE WEBSITE URL AND DEMO IMAGES]

TASK: Build the Services preview section for the homepage AND the full /services page,
including real photography on every service card.

FILES:
- src/components/sections/ServicesSection.tsx  ← Homepage preview
- src/app/services/page.tsx                    ← Full services page
- src/components/cards/ServiceCard.tsx         ← Reusable service card

1. SERVICE CARD (ServiceCard.tsx)
Props: service: Service, variant: "grid" | "list" | "featured"

Grid variant (homepage):
- bg-navy-800 card with subtle border border-navy-700
- TOP of card: real photo image thumbnail
  - Full card width, height ~200px, object-cover, rounded-t-xl
  - Use Next.js <Image /> with the service.image URL
  - Implement imgError fallback: solid bg-navy-700 panel with service icon centered in text-gold
- Icon below image: large lucide-react icon, text-gold
- Title: font-display, text-white, bold
- Description: font-body, text-muted, 2-3 lines
- Feature list: 3-4 items with gold CheckCircle icon from lucide-react
- Bottom: "Learn More →" ghost link — hover:text-gold, hover:underline
- Hover: card lifts (translateY -4px), border-gold, shadow-gold-glow
- Framer Motion whileHover for smooth lift

Featured variant:
- Larger card with background gradient
- Larger image header (~260px height)
- Shows complete features list
- CTA button included

2. SERVICES DATA
services.ts already has all 7 services with image URLs from Chunk 1.
Verify all fields are present: id, title, description, icon, image, slug, features.

3. SERVICES SECTION — HOMEPAGE (ServicesSection.tsx)
- SectionHeading: title="Our Services"
  subtitle="Comprehensive property maintenance solutions across Texas"
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- All 7 services using ServiceCard (grid variant)
- "View All Services →" Button variant="secondary" below grid (centered)
- AnimatedSection wrapper for scroll-triggered entrance
- Each card staggers in with 0.08s delay per card (Framer Motion)

4. FULL SERVICES PAGE (src/app/services/page.tsx)

Page hero with background image:
- Relative container, min-h-[40vh]
- Next.js <Image /> fill + object-cover, priority={true}
- Image URL:
  https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80
  Alt: "Professional property maintenance services"
- Dark overlay: absolute inset-0 bg-navy-950/75
- H1: "Our Services" (z-10, relative)
- Breadcrumb: Home > Services
- Intro paragraph: professional description of HomeProX's offerings

Services grid:
- All 7 ServiceCard components (featured variant)
- Coverage note per card: "Available Statewide Across Texas"

Bottom CTA: "Need a Custom Maintenance Plan?" with Button variant="primary"
generateMetadata for SEO:
  title: "Our Services | HomeProX Home Services LLC"
  description: "Professional property maintenance services across Texas..."

RULES:
- Service cards keyboard-accessible (visible focus styles)
- All cards same height (flex flex-col + mt-auto on button)
- All content pulled from data files — no hardcoded text in components
- Smooth stagger animations on scroll entry
- All images follow global image rules from Chunk 1
```

---

## CHUNK 4 — "Who We Serve" / Our Clients Section & Full Clients Page

```
Continuing HomeProX Home Services LLC. Chunks 1–3 are complete.

COMPATIBILITY REMINDER:
- Tailwind v4 — use @theme {} classes only, no tailwind.config.ts
- No hardcoded hex values in JSX

[ATTACH REFERENCE WEBSITE URL AND DEMO IMAGES]

TASK: Build the "Who We Serve" homepage section and the full /clients page,
including real photography in all alternating sections.

FILES:
- src/components/sections/ClientsSection.tsx   ← Homepage section
- src/app/clients/page.tsx                     ← Full clients page
- src/components/cards/ClientTypeCard.tsx      ← Reusable client card

1. CLIENTS DATA
clients.ts already has all 4 client types with image URLs from Chunk 1.
Verify all fields are present: id, title, description, icon, image, benefits.

2. CLIENT TYPE CARD (ClientTypeCard.tsx)
- bg-navy-800 card, border-navy-700
- Hover: border-gold, translateY -4px lift
- Icon: large, text-gold, from lucide-react
- Benefits: CheckCircle icon text-gold per item
- Variants: "compact" (homepage) | "full" (clients page)

3. WHO WE SERVE — HOMEPAGE SECTION (ClientsSection.tsx)
- SectionHeading: title="Who We Serve"
- 4 client types in 2x2 grid (desktop), 1 column (mobile) — compact variant
- Each card: icon, title, 2-line description, 3 key benefits
- "Learn More About Our Clients →" link below grid

4. FULL CLIENTS PAGE (/clients)
This is a KEY page — make it look like the reference website's client/partner page.

a) Page Hero with background image:
- Image URL:
  https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80
  Alt: "Property management professionals"
- Next.js <Image /> fill + object-cover, priority={true}
- Dark overlay: absolute inset-0 bg-navy-950/75
- H1: "Our Clients"
- Subtitle: "Trusted Property Maintenance Partner Across Texas"

b) Intro Section
- "At HomeProX Home Services LLC, we take pride in building long-term partnerships..."
- Left: text content; Right: dark stat card with key numbers

c) Client Type Sections — alternating left-right layout with real photos:
For each client type:
- One side: icon + title + description + benefits list
- Other side: real photo from client.image
  - rounded-2xl, shadow-2xl, object-cover
  - Wrap in overflow-hidden — hover: scale-105 transition-transform duration-500
  - Implement imgError fallback: dark card with client icon centered
- Alternates layout: odd = text left / photo right, even = photo left / text right
  (stacked on mobile)

d) "Why Clients Choose HomeProX" Section
4-column feature grid:
Reliability | Quality Workmanship | Scalable Solutions | Professional Communication
Each: lucide icon (text-gold), title, description paragraph

e) Quality Assurance Process Section
3-step horizontal timeline (desktop) / vertical (mobile):
1. Detailed Documentation — Camera icon
2. Vendor & Team Screening — ShieldCheck icon
3. Proactive Communication — Bell icon
Each step: gold number badge (01, 02, 03), icon, title, description
Horizontal connecting line between steps on desktop (border-t border-gold/30)
Stagger animate in left-to-right on scroll

f) "Ready to Partner?" CTA Banner
- bg-navy-900 with gold accent border or gradient
- "Ready to Partner with HomeProX?"
- Phone + email displayed prominently
- Button variant="primary": "Get Started"

ANIMATIONS:
- All sections use AnimatedSection wrapper
- Alternating sections: odd slides from left, even from right
- Timeline steps stagger sequentially
- Feature cards stagger from bottom

RULES:
- Real content only — no placeholder text
- All data from src/lib/data/clients.ts
- Semantic HTML: sections, articles, h2/h3 hierarchy
- generateMetadata for /clients SEO
- All images follow global image rules from Chunk 1
```

---

## CHUNK 5 — "Why Choose Us" Section, About Page & Trust Elements

```
Continuing HomeProX Home Services LLC. Chunks 1–4 are complete.

COMPATIBILITY REMINDER:
- Tailwind v4 — use @theme {} classes only, no tailwind.config.ts
- No hardcoded hex values in JSX

[ATTACH REFERENCE WEBSITE URL AND DEMO IMAGES]

TASK: Build the "Why Choose Us" homepage section, the full /about page, and
trust-building elements — including all real photography for the About page.

FILES:
- src/components/sections/WhyChooseUs.tsx
- src/components/sections/QualityProcess.tsx
- src/app/about/page.tsx

1. WHY CHOOSE US SECTION (WhyChooseUs.tsx)
Layout: bg-navy-950 with subtle CSS pattern overlay
- SectionHeading centered: title="Why Choose HomeProX"
  subtitle="Built on reliability, quality, and long-term partnerships"

4 feature cards in 2x2 grid (desktop), 1 column (mobile):
Each card — bg-navy-800, border-navy-700, no hover needed:
1. Reliability — Clock icon — "We respond quickly, meet deadlines, and keep projects moving..."
2. Quality Workmanship — Award icon — "Every service completed with attention to detail..."
3. Scalable Solutions — BarChart icon — "One-time repairs or ongoing contracts, tailored to your needs..."
4. Professional Communication — MessageSquare icon — "Clear updates before, during, and after every project..."

Below cards: centered stat row with vertical dividers (desktop):
"10+ Years" | "500+ Properties" | "Statewide" | "Fully Insured"

2. QUALITY ASSURANCE PROCESS (QualityProcess.tsx)
3-step horizontal timeline (desktop) / vertical (mobile):
- Step 1: "Detailed Documentation" — Camera icon
- Step 2: "Team Screening" — ShieldCheck icon
- Step 3: "Proactive Communication" — Megaphone icon

Each step:
- Gold step number circle: 01, 02, 03
- lucide-react icon, text-gold
- Title: font-display, text-white, bold
- Description: font-body, text-muted
- Horizontal connecting line on desktop: border-t border-gold/30

Scroll-triggered: stagger animate left-to-right

3. ABOUT PAGE (/about)

a) Page Hero with background image:
- Image URL:
  https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80
  Alt: "HomeProX professional team at work"
- Next.js <Image /> fill + object-cover, priority={true}
- Dark overlay: absolute inset-0 bg-navy-950/75
- H1: "About HomeProX Home Services LLC"
- Subtitle: "Texas-based. Statewide reach. Built for serious property operators."

b) Mission Statement Section — split layout with real photo:
Left (60%):
  H2: "Our Mission"
  Paragraph: trusted statewide property maintenance partner
  "We understand that every property represents an investment — and we treat it accordingly."
  2 CTAs: Button variant="primary" "View Services" + Button variant="secondary" "Contact Us"

Right (40%): real team photo
  Image URL:
  https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80
  Alt: "HomeProX professional team"
  Styling: rounded-2xl, shadow-xl, object-cover, full height
  Implement imgError fallback: dark card with "M" initial badge in text-gold

c) What We Do Section
3-column card overview of service categories with lucide icons

d) Coverage Section — full-width background image with dark overlay:
"Serving Clients Across Texas"
- Background image:
  https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80
  Alt: "Texas property maintenance coverage"
- Next.js <Image /> fill + object-cover (z-0)
- Dark overlay: absolute inset-0 bg-navy-950/80 (z-10)
- Content (z-20): styled region grid:
  North Texas | Central Texas | East Texas | West Texas | South Texas
  + "Major cities: Dallas, Houston, Austin, San Antonio"
- Each region: dark badge/pill, hover:border-gold

e) Values Section
3 horizontal cards: "Integrity" | "Reliability" | "Quality"
Each with a brief sentence and lucide icon

f) CTA Banner at bottom (dark variant)

RULES:
- About page must feel premium, not generic
- Framer Motion stagger animations throughout
- Proper ARIA roles and heading hierarchy (h1 → h2 → h3)
- No lorem ipsum — real content only
- generateMetadata for /about SEO
- All images follow global image rules from Chunk 1
```

---

## CHUNK 6 — Contact Page, Quote Form & Contact Components

```
Continuing HomeProX Home Services LLC. Chunks 1–5 are complete.

COMPATIBILITY REMINDER:
- Tailwind v4 — use @theme {} classes only, no tailwind.config.ts
- No hardcoded hex values in JSX

[ATTACH REFERENCE WEBSITE URL AND DEMO IMAGES]

TASK: Build the full /contact page and reusable contact components.

FILES:
- src/app/contact/page.tsx
- src/components/sections/ContactSection.tsx   ← Compact version for homepage
- src/components/forms/QuoteForm.tsx
- src/lib/utils/formValidation.ts

1. CONTACT PAGE LAYOUT (/contact)

a) Page Hero with background image:
- Image URL:
  https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80
  Alt: "Contact HomeProX Home Services"
- Next.js <Image /> fill + object-cover, priority={true}
- Dark overlay: absolute inset-0 bg-navy-950/75
- H1: "Contact HomeProX"
- Subtitle: "Let's talk about your property needs"
- Breadcrumb: Home > Contact

b) Split layout (desktop: 60/40, mobile: stacked)

LEFT — Quote Request Form (QuoteForm.tsx) — "use client":
Fields (all typed against ContactFormData interface):
- Full Name (required)
- Company Name (optional)
- Email Address (required, email format)
- Phone Number (required, format validation)
- Property Type (select): Residential | Commercial | Multi-Unit | REO/Bank Owned | Other
- Service Needed (select): all 7 services + "Multiple Services"
- Property Location / City, TX (required)
- Message / Project Details (textarea, min 10 chars)
- Submit: Button variant="primary" full width — "Send Request" with loading state

Form behavior:
- useState for all fields
- Client-side validation — red error messages below each field
- On submit success: inline message "Thank you! We'll be in touch within 24 hours."
- Input styles: bg-navy-800, focus:ring-gold, text-white, placeholder:text-muted
- All inputs: proper <label>, aria-describedby pointing to error id

RIGHT — Contact Info Panel:
bg-navy-800 card with left border border-l-4 border-gold:
- Phone: (469) 378-9262 — Phone icon, clickable tel: link
- Email: info@homeproxsvcs.com — Mail icon, clickable mailto: link
- Location: Collin County, Texas — MapPin icon
- Serving: "All of Texas Statewide" — Map icon
- Hours: Monday – Friday: 8:00 AM – 6:00 PM (CST) | Saturday: closed | Sunday: Closed
- "Fully Insured" badge + "Licensed Professionals" badge in text-gold

c) Bottom: 3 horizontal info cards
- "Fast Response" — Clock icon — "We respond within 24 hours"
- "Free Estimates" — Tag icon — "No-obligation project estimate"
- "Statewide Coverage" — Map icon — "All major regions across Texas"

2. FORM VALIDATION (src/lib/utils/formValidation.ts)
Export typed validation functions:
- validateEmail(email: string): { valid: boolean; message: string }
- validatePhone(phone: string): { valid: boolean; message: string }
- validateRequired(value: string, fieldName: string): { valid: boolean; message: string }
- validateForm(formData: ContactFormData): Record<string, string>

3. CONTACT SECTION FOR HOMEPAGE (ContactSection.tsx)
Compact strip for homepage:
- bg-navy-900 background
- Left: "Ready to get started?" heading + phone + email
- Right: Button variant="primary" "Get a Free Quote" → links to /contact
- AnimatedSection scroll entry

RULES:
- "use client" on QuoteForm only
- Full keyboard navigation (tab through all fields)
- aria-live="polite" region for form errors (screen reader accessible)
- No external form libraries — pure React useState
- Mobile: form stacks above contact info panel
```

---

## CHUNK 7 — Testimonials, CTA Banner & Homepage Assembly

```
Continuing HomeProX Home Services LLC. Chunks 1–6 are complete.

COMPATIBILITY REMINDER:
- Tailwind v4 — use @theme {} classes only, no tailwind.config.ts
- No hardcoded hex values in JSX

[ATTACH REFERENCE WEBSITE URL AND DEMO IMAGES]

TASK: Build Testimonials section, CTA Banner, and fully assemble the homepage —
including real avatar photography and a background image on the CTA banner.

FILES:
- src/components/sections/Testimonials.tsx
- src/components/sections/CTABanner.tsx
- src/components/cards/TestimonialCard.tsx
- src/lib/data/testimonials.ts
- src/app/page.tsx  ← Final complete homepage assembly

1. TESTIMONIALS DATA (src/lib/data/testimonials.ts)
Export a typed Testimonial[] array with 6 objects.
Write realistic, professional B2B property maintenance testimonials.

Avatar URLs (Pexels headshots):

Sarah M. — Property Operations Manager — property-manager:
  avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"
  content: "HomeProX has been an outstanding maintenance partner. They reduced our vacancy turnaround by 40% and the quality is consistently excellent across all our properties."

David K. — REO Asset Manager, Regional Bank — financial:
  avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
  content: "Handling REO properties requires a vendor we can trust completely. HomeProX delivers detailed documentation and reliable work every single time."

Jennifer L. — Real Estate Broker — real-estate:
  avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150"
  content: "Pre-listing prep has never been easier. HomeProX gets properties show-ready fast and the results speak for themselves at closing."

Marcus T. — Portfolio Investor — investor:
  avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
  content: "Managing a portfolio across Texas used to mean juggling multiple vendors. HomeProX handles everything with one point of contact and consistent results."

Rachel C. — Property Manager — property-manager:
  avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150"
  content: "The communication alone sets them apart. We always know what's happening, when it's happening, and what it cost. Incredibly professional operation."

Brian W. — Real Estate Agent — real-estate:
  avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150"
  content: "I refer HomeProX to every investor client I work with. Fast, reliable, and they make properties look great for the market."

2. TESTIMONIAL CARD (TestimonialCard.tsx)
- bg-navy-800, border border-navy-700
- Top: 5 filled Star icons, text-gold
- Quote: italic, text-muted, font-body
- Bottom row:
  - Real avatar: Next.js <Image /> width={48} height={48} rounded-full object-cover
    ring-2 ring-gold
  - imgError fallback: initials circle bg-gold text-navy-950
  - Name: text-white font-bold
  - Role + company: text-muted text-sm
- Hover: border-gold transition

3. TESTIMONIALS SECTION (Testimonials.tsx)
- "use client" — carousel requires client interaction
- SectionHeading: title="What Our Clients Say"
  subtitle="Trusted by property professionals across Texas"
- Mobile: horizontal scroll-snap carousel with indicator dots
- Desktop: 3-column grid (all 6 visible, or 2 rows of 3)
- Navigation arrows (ChevronLeft / ChevronRight from lucide-react)
- Auto-play every 5 seconds — pause on hover
- Touch swipe support via Framer Motion drag

4. CTA BANNER (CTABanner.tsx)
Full-width, variants: "dark" | "gold"

Dark variant (default):
- Real background photo with dark overlay:
  Image URL:
  https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80
  Alt: "Professional property maintenance services Texas"
  Next.js <Image /> fill + object-cover (z-0)
  Overlay: absolute inset-0 bg-navy-950/85 (z-10) — navy still dominates
  Content: relative z-20
- Left: H2 "Ready to Protect Your Properties?" + subtitle
- Right: Button variant="primary" "Get a Free Quote"
        + Button variant="secondary" "Call Now: (469) 378-9262"
- imgError fallback: solid bg-navy-950

Gold variant:
- bg-gradient-to-r from-gold to-orange, dark text
- Used at end of /services and /clients pages

5. HOMEPAGE FINAL ASSEMBLY (src/app/page.tsx)
Render all sections in order:
1. <Hero />
2. <StatsBar />
3. <ServicesSection />       id="services"
4. <ClientsSection />        id="clients"
5. <WhyChooseUs />           id="why-us"
6. <QualityProcess />
7. <Testimonials />
8. <CTABanner variant="dark" />
9. <ContactSection />        id="contact"

Consistent section padding: py-20 lg:py-28

generateMetadata:
  title: "HomeProX Home Services LLC | Texas Statewide Property Maintenance"
  description: "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide."

RULES:
- No hydration errors — server/client components properly separated
- Testimonials carousel works on touch devices (Framer Motion drag)
- All sections use AnimatedSection scroll trigger wrapper
- Section id attributes set for anchor link navigation
- All images follow global image rules from Chunk 1
```

---

## CHUNK 8 — 404 Page, Loading States, SEO & Performance Polish

```
Continuing HomeProX Home Services LLC. Chunks 1–7 are complete.

COMPATIBILITY REMINDER:
- Tailwind v4 — use @theme {} classes only, no tailwind.config.ts
- No hardcoded hex values in JSX

TASK: Build the 404 page, loading states, global SEO setup, and full performance polish pass.

FILES:
- src/app/not-found.tsx
- src/app/loading.tsx
- src/components/ui/Skeleton.tsx
- src/app/sitemap.ts
- src/app/robots.ts
- src/lib/metadata.ts

1. 404 PAGE (not-found.tsx)
- bg-navy-950, centered content
- "404" — font-display, text-gold, text-9xl
- H1: "Page Not Found"
- Subtitle: "The property you're looking for doesn't exist or has moved."
- Button variant="primary" "Go Home" + Button variant="secondary" "Contact Us"
- Subtle CSS keyframe animated background element
- Fully responsive

2. LOADING STATES

loading.tsx:
- Full-screen bg-navy-950 overlay with "HomeProX" logo centered
- Pulsing gold ring animation (CSS animate-pulse or custom keyframe)

Skeleton.tsx:
- Props: width, height, className, variant ("text" | "card" | "image")
- Dark shimmer: bg-navy-800 → bg-navy-700 shimmer sweep
- Use for service cards and testimonials during loading state

3. SEO (src/lib/metadata.ts)
- SITE_URL constant
- defaultMetadata object: title template, description, og:image, twitter card
- generatePageMetadata({ title, description, path }) function
- Apply to all pages via generateMetadata export

4. SITEMAP (sitemap.ts)
Pages: /, /services, /clients, /about, /contact
Typed SitemapEntry array for Next.js App Router

5. ROBOTS (robots.ts)
Allow all, include sitemap URL

6. PERFORMANCE & POLISH PASS

a) Image Audit:
- All next/image components have correct fill or width/height, alt, priority flag
- Hero images (all pages): priority={true}
- imgError fallbacks on every external image component
- No broken images (check Network tab)
- No Next.js Image domain errors in console

b) Accessibility Audit:
- All interactive elements have accessible names
- WCAG AA contrast: text-gold on bg-navy-950 must pass
- Skip navigation link at top of layout.tsx
- Focus trap in mobile navbar drawer
- All icons: aria-hidden={true} + visible or sr-only adjacent text

c) Animation Performance:
- All Framer Motion animations use only transform and opacity (GPU composited)
- will-change="transform" where needed
- useReducedMotion() check on every animated component:
  import { useReducedMotion } from "framer-motion"
  const shouldReduceMotion = useReducedMotion()
  // skip or simplify animations if true

d) TypeScript Strict:
- No 'any' types — replace all with proper interfaces
- All component props fully typed
- All data arrays typed with imported interfaces from src/types/index.ts

e) Code Splitting:
- Testimonials carousel: dynamic import with ssr: false
  const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false })

f) Console Cleanup:
- Remove all console.log statements
- Zero TypeScript errors
- Zero ESLint warnings

g) Tailwind v4 Cleanup:
- No arbitrary color values (use @theme {} tokens)
- Consistent spacing scale throughout
- No duplicate utility classes

FINAL CHECKLIST:
[ ] All 5 pages render without errors
[ ] Navbar shows correct active page on all routes
[ ] Mobile menu opens/closes correctly
[ ] Quote form validates all fields correctly
[ ] Scroll-to-top button appears/disappears
[ ] All animations trigger on scroll
[ ] Dark theme consistent across all pages
[ ] No hydration errors in console
[ ] All TypeScript errors resolved
[ ] All images have alt text and error fallbacks
[ ] No broken images in Network tab
```

---

## CHUNK 9 — Final Integration, Responsive QA & Production Readiness

```
Continuing HomeProX Home Services LLC. Chunks 1–8 are complete.

TASK: Final integration pass, full responsive QA, and production readiness check.
Do NOT add new features — only fix, refine, and verify.

1. RESPONSIVE QA PASS

Mobile (375px — iPhone SE):
- Navbar: hamburger works, no overflow
- Hero: text readable, buttons stack vertically, background image crops well
- All cards: full width, proper padding, images display correctly
- Forms: full width inputs, no horizontal scroll
- Footer: single column, readable

Tablet (768px — iPad):
- Navbar: consistent mobile or desktop layout
- Service cards: 2-column grid with images
- Client sections: stacked with more padding
- Contact page: form full width

Desktop (1280px):
- Full layout as designed
- Max-width container: max-w-7xl mx-auto px-6
- Alternating image/text sections correct

Wide (1536px+):
- Content stays within max-w-7xl
- Background images don't pixelate
- No layout breaks

2. NAVIGATION AUDIT
- All Next.js Link components resolve correctly
- usePathname active state on all nav links
- "Get a Quote" links to /contact
- Footer links all work
- Back-to-top button works on all pages
- Mobile menu closes on link click

3. CROSS-PAGE CONSISTENCY AUDIT
- Section padding: py-20 lg:py-28 on all major sections
- font-display used consistently for all headings
- Button variants match Button.tsx — no one-off styled buttons
- All gold elements: text-gold / bg-gold (same token, #C89B3C)
- AnimatedSection on every major section
- Footer identical on all pages
- Navbar identical on all pages
- All page heroes: background image + dark overlay pattern

4. TERMS & CONDITIONS PAGE (bonus)
src/app/terms/page.tsx:
- bg-navy-950, clean readable layout, no hero image
- Render T&C legal content
- Table of contents sidebar (desktop) with anchor links
- "Last Updated: February 24, 2026" prominent
- Footer link "Terms & Conditions" works

5. FINAL PRODUCTION READINESS

a) .env.local.example:
  NEXT_PUBLIC_SITE_URL=https://homeproxsvcs.com

b) next.config.ts verify:
  - remotePatterns for images.unsplash.com and images.pexels.com present
  - Security headers: X-Frame-Options, X-Content-Type-Options

c) package.json scripts:
  "dev": "next dev --turbo"
  "build": "next build"
  "start": "next start"
  "lint": "next lint"

d) README.md:
  - Project overview
  - Tech stack (Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion)
  - How to run: npm install → npm run dev
  - Folder structure overview
  - Environment variables
  - Image credits: Unsplash & Pexels (free for commercial use)

6. FINAL VISUAL REFINEMENT
- Add subtle SVG noise texture overlay to hero (CSS only)
- All hover states: transition-all duration-300
- CTABanner has unique visual treatment vs other sections
- Navbar "HomeProX" logo crisp at all scroll states
- All hover image scale effects contained by overflow-hidden wrappers

FINAL DELIVERABLE CHECK:
✅ 6 pages: Home, Services, Clients, About, Contact, Terms
✅ Responsive navbar with mobile drawer
✅ Hero with real background photo + staggered animations
✅ 7 services with real photo thumbnails
✅ 4 client sections with real alternating photos
✅ About page with team photo + coverage background image
✅ Contact form (client-side) with hero background image
✅ Testimonials carousel with real avatar headshots
✅ CTA banner with real background photo
✅ Scroll animations on all sections
✅ Scroll-to-top button
✅ 404 page + loading states
✅ SEO metadata, sitemap, robots.txt
✅ Zero TypeScript errors
✅ Zero console errors
✅ Mobile-first, fully responsive
✅ npm run build succeeds
✅ No broken images anywhere
```

---

## QUICK REFERENCE — Design Tokens

| Token          | Value            | Tailwind Class              | Usage                       |
| -------------- | ---------------- | --------------------------- | --------------------------- |
| Primary Dark   | `#0A0F1E`        | `bg-navy-950`               | Page backgrounds            |
| Secondary Navy | `#1A2340`        | `bg-navy-900`               | Section backgrounds         |
| Surface        | `#111827`        | `bg-navy-800`               | Cards                       |
| Border         | `#1F2D47`        | `border-navy-700`           | Card borders                |
| Accent Gold    | `#C89B3C`        | `bg-gold` / `text-gold`     | Primary accent, icons, CTAs |
| Accent Orange  | `#E07B39`        | `bg-orange` / `text-orange` | CTA hover, warm accents     |
| Text Primary   | `#FFFFFF`        | `text-white`                | Headings                    |
| Text Secondary | `#A0AEC0`        | `text-muted`                | Body, labels                |
| Display Font   | Barlow Condensed | `font-display`              | All headings                |
| Body Font      | DM Sans          | `font-body`                 | All body text               |

> All tokens defined in `globals.css` under `@theme {}` — no tailwind.config.ts needed.

---

## QUICK REFERENCE — Image URLs by Section

| Section                         | Source   | Full URL                                                                                             |
| ------------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| Hero background                 | Unsplash | `https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=85`      |
| Hero right card                 | Unsplash | `https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80`       |
| Service: Maintenance & Plumbing | Unsplash | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80`          |
| Service: Gutter Cleaning        | Unsplash | `https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=800&q=80`       |
| Service: Drywall & Painting     | Unsplash | `https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80`          |
| Service: Property Cleaning      | Unsplash | `https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80`       |
| Service: Landscaping            | Unsplash | `https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80`       |
| Service: Siding & Exterior      | Unsplash | `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80`       |
| Service: Cleanouts              | Unsplash | `https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80`       |
| Client: Property Mgmt           | Unsplash | `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80`       |
| Client: Financial               | Unsplash | `https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80`          |
| Client: Real Estate             | Unsplash | `https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80`          |
| Client: Investors               | Unsplash | `https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=900&q=80`       |
| About: Team                     | Unsplash | `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80`       |
| About: Coverage bg              | Unsplash | `https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80`      |
| CTA Banner                      | Unsplash | `https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80`      |
| Page Hero: Services             | Unsplash | `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80`      |
| Page Hero: Clients              | Unsplash | `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80`      |
| Page Hero: About                | Unsplash | `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80`      |
| Page Hero: Contact              | Unsplash | `https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80`      |
| Avatar: Sarah M.                | Pexels   | `https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150` |
| Avatar: David K.                | Pexels   | `https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150` |
| Avatar: Jennifer L.             | Pexels   | `https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150` |
| Avatar: Marcus T.               | Pexels   | `https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150` |
| Avatar: Rachel C.               | Pexels   | `https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150` |
| Avatar: Brian W.                | Pexels   | `https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150` |

---

## TIPS FOR USING WITH CURSOR

1. **Start fresh conversation** for each chunk — paste project context first, then the chunk.
2. **Attach reference URL and images** every time (Cursor can see them).
3. If Cursor tries to create `tailwind.config.ts`, stop it immediately and say:
   _"This project uses Tailwind v4. Do not create tailwind.config.ts. All theme config lives in globals.css inside @theme {}."_
4. If Cursor skips something, say: _"You missed [X] from the chunk instructions — please implement it now."_
5. After each chunk: run `npm run dev` and screenshot any issues for Cursor to fix.
6. Before Chunk 9, run `npm run build` and paste any errors back to Cursor.
7. Use `@codebase` in Cursor to give it full context when fixing cross-file issues.
8. **Image tip:** If an Unsplash/Pexels image fails to load in dev, check the Network tab — confirm `remotePatterns` in next.config.ts matches the exact hostname.
