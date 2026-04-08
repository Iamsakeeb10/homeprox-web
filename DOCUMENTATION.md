# HomeProX Services LLC — Next.js Website Documentation

**Complete technical documentation for developers and AI.** Use this file to understand, extend, or customize the site without requiring live code access.

---

## 1. Project Overview

### 1.1 Company & Audience

| Field                 | Value                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Company**           | HomeProX Services LLC                                                                                                 |
| **Industry**          | Statewide Property Maintenance, Texas                                                                                 |
| **Target audience**   | Property managers, banks, asset managers, real estate investors, REO specialists, portfolio owners                    |
| **Value proposition** | Reliable, professional property maintenance across Texas — residential, commercial, rental, and investment properties |

### 1.2 Tech Stack

| Technology     | Version / Notes                                                                    |
| -------------- | ---------------------------------------------------------------------------------- |
| **Framework**  | Next.js (App Router)                                                               |
| **Language**   | TypeScript (`.tsx` only for components)                                            |
| **Styling**    | Tailwind CSS v4 (theme via `@theme {}` in `globals.css` — no `tailwind.config.ts`) |
| **Animations** | Framer Motion                                                                      |
| **Structure**  | `src/` directory; Turbopack enabled                                                |
| **Linting**    | ESLint configured                                                                  |

### 1.3 Design Philosophy

- **Tone:** Premium B2B, corporate, trustworthy — not a local handyman site.
- **Feel:** Statewide B2B services brand; clean, confident, professional.
- **Backgrounds:** White primary; light gray section alternation (`surface-50`, `surface-100`) for rhythm.
- **Primary dark:** Deep charcoal (`#1F2A33`) for headings, footer, and authority.
- **Primary accent:** Vibrant teal (`#14B8A6`) for CTAs, links, active states, icons, and focus rings.
- **Prestige accent:** Sky blue (`#0EA5E9`) for secondary highlights and badges.
- **Typography:** Outfit (display/accent) + Plus Jakarta Sans (body); bold headlines, generous spacing.
- **Responsiveness:** Mobile-first; breakpoints at `sm`, `md`, `lg`, `xl`, and custom `min-[1131px]` for hero layout.

---

## 2. Folder & File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Navbar, PageWrapper, Footer, ScrollToTop, skip link
│   ├── page.tsx                # Home page: Hero, StatsBar, Services, Clients, WhyChooseUs, QualityProcess, Testimonials, CTABanner, Contact
│   ├── globals.css             # Tailwind v4 @theme, body styles, accent line, focus/selection, keyframes, .hero-texture
│   ├── about/page.tsx          # About: hero, mission, categories, regions, values, CTA
│   ├── services/page.tsx       # Services: hero, featured service grid, CTA
│   ├── clients/page.tsx        # Clients: hero, intro, client types, process, CTA
│   ├── contact/page.tsx        # Contact: hero, ContactForm + contact info cards, trust strip, final CTA
│   ├── quote/page.tsx          # Get a Quote: hero, QuoteForm + side contact info panel, bottom info cards
│   ├── vendors/page.tsx        # Vendors: hero, why partner, onboarding, requirements, services, 4-step application form, FAQ, CTA
│   ├── terms/page.tsx          # Terms & Conditions
│   ├── not-found.tsx           # 404 page
│   ├── loading.tsx             # Global loading spinner
│   ├── api/
│   │   ├── contact/route.ts    # POST handler for contact/quote form
│   │   └── vendor/route.ts    # POST handler for vendor application (FormData, file attachments, Nodemailer)
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav: centered links, inline Get a Quote, right-aligned phone pill, mobile menu
│   │   ├── Footer.tsx          # 4-column footer: logo, Quick Links, Services, Contact; social; copyright
│   │   └── PageWrapper.tsx     # Framer Motion page transition wrapper; scroll reset on route change
│   ├── ui/
│   │   ├── Button.tsx          # Primary / secondary / ghost; sizes sm | md | lg; loading; asChild
│   │   ├── SectionHeading.tsx  # Title, optional subtitle, orange/40 rule; align left | center
│   │   ├── AnimatedSection.tsx # Scroll-triggered fade/slide (fadeUp, fadeLeft, fadeRight, scaleIn); reduced motion support
│   │   └── Skeleton.tsx        # Loading skeleton: text | card | image variant; shimmer
│   ├── sections/
│   │   ├── Hero.tsx            # Home hero: full-screen video background, left headline + CTA, right glass stats card, bottom marquee
│   │   ├── StatsBar.tsx        # Stats strip: 10+ Years, 500+ Properties, Statewide, 100% Insured; count-up animation
│   │   ├── ServicesSection.tsx # SectionHeading + service cards grid + "View All Services" button
│   │   ├── ClientsSection.tsx  # SectionHeading + ClientTypeCard grid + "Learn More About Our Clients"
│   │   ├── WhyChooseUs.tsx     # SectionHeading + feature cards + stats row
│   │   ├── QualityProcess.tsx  # SectionHeading + 3-step process cards (Documentation, Screening, Communication)
│   │   ├── Testimonials.tsx    # SectionHeading + carousel (mobile) / 3-col grid (desktop); dots + arrows
│   │   ├── CTABanner.tsx       # Dark (image + overlay) or light variant; heading, CTA buttons
│   │   ├── ContactSection.tsx  # Home footer CTA: contact info + primary button linking to /quote
│   │   ├── ServicesPageHero.tsx # Optional hero wrapper for services page (image + overlay)
│   │   ├── TestimonialsLazy.tsx # Lazy placeholder for testimonials
│   │   ├── VendorHero.tsx      # Vendors page hero: bg-hero-bg, Apply Now / Vendor Login → #vendor-application
│   │   ├── VendorWhyPartner.tsx # Subtext strip (charcoal) + 4 benefit cards with CheckCircle2
│   │   ├── VendorOnboarding.tsx # 3-step process cards (01 Submit, 02 Review, 03 Work Orders) with connector line
│   │   ├── VendorRequirements.tsx # Required vs Preferred two-column lists (teal/skyblue bars)
│   │   ├── VendorServices.tsx  # 6 service category icon cards (equal height); scaleIn animation
│   │   ├── VendorFAQ.tsx       # Accordion FAQ (4 items); "use client"
│   │   └── VendorCTABanner.tsx # Dark charcoal CTA: "Ready to Join...", Apply Now → #vendor-application
│   ├── cards/
│   │   ├── ServiceCard.tsx     # Service card: image, icon, title, description, features; variants grid | list | featured
│   │   ├── ClientTypeCard.tsx  # Client type: icon, title, description, benefits; variants compact | full
│   │   ├── TestimonialCard.tsx # Quote, stars (skyblue), avatar/initials, name/role
│   │   ├── ClientImage.tsx     # Client image with fallback
│   │   └── TeamPhoto.tsx       # Team/avatar placeholder
│   ├── forms/
│   │   ├── QuoteForm.tsx       # Full quote form: fullName, companyName, email, phone, propertyType, serviceNeeded, location, message, agreeToTerms
│   │   ├── ContactForm.tsx     # Compact contact form: name, email, optional phone, inquiryType, message, agreeToTerms
│   │   └── VendorApplicationForm.tsx # 4-step vendor form: Company Info, Services Offered, Documents & Attachments, Review & Submit; file uploads; POST /api/vendor
│   └── shared/
│       └── ScrollToTop.tsx     # Fixed bottom-right button; visible after 400px scroll; smooth scroll to top
├── hooks/
│   └── useScrollPosition.ts    # Returns window.scrollY; used for scroll-based UI (e.g. navbar state)
├── lib/
│   ├── data/
│   │   ├── services.ts        # services[]: id, title, description, icon, image, slug, features
│   │   ├── clients.ts         # clients[]: id, title, description, icon, image, benefits
│   │   └── testimonials.ts    # testimonials[]: id, name, role, company, content, rating, clientType, avatar
│   ├── metadata.ts            # defaultMetadata, generatePageMetadata(), SITE_URL, Open Graph, Twitter, robots
│   └── utils/
│       ├── formValidation.ts  # validateForm(ContactFormData), validateEmail, validatePhone, validateRequired
│       └── mailer.ts          # Nodemailer transporter shared by contact and vendor APIs
└── types/
    ├── index.ts                # Service, ClientType, NavLink, Testimonial, ContactFormData
    └── vendor.ts               # VendorFormData, VendorFormErrors, VendorFormStep (vendor application)
```

---

## 3. Pages & Routes

| Route         | Purpose                 | Hero                                                                                                                                                | Key sections                                                                                                                                                                                                            | CTA placement                                                                                                  |
| ------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **/**         | Home                    | Full-screen hero: dark video background with charcoal overlays, left text CTA content, right floating glass stats panel, and a bottom marquee strip | StatsBar, Services, Clients, WhyChooseUs, QualityProcess, Testimonials, CTABanner (dark), ContactSection                                                                                                                | Hero (Get a Free Quote, Explore Services, phone contact prompt); each section links; CTABanner; ContactSection |
| **/services** | Services overview       | Solid `bg-hero-bg`, h1 "Our Services", intro paragraph                                                                                              | Featured service grid (ServiceCard featured), "View All Services" button                                                                                                                                                | Bottom CTA area                                                                                                |
| **/clients**  | Who we serve            | Solid `bg-hero-bg`, h1 "Our Clients", tagline                                                                                                       | Intro, client type cards, process steps, "Ready to Partner" CTA                                                                                                                                                         | Learn more link; CTA section with phone/email + Get Started                                                    |
| **/about**    | About company           | Solid `bg-hero-bg`, h1 "About HomeProX...", tagline                                                                                                 | Mission, service categories, coverage map (image + overlay), regions, values, CTA block                                                                                                                                 | Buttons in CTA block                                                                                           |
| **/contact**  | General contact         | Hero with background image + dark overlay, h1 "Contact HomeProX", tagline                                                                           | Two-column layout: contact details (phone, email, coverage, hours) + `ContactForm` card; trust strip; final CTA strip                                                                                                   | Contact links; contact form submit; phone CTA in final strip                                                   |
| **/quote**    | Dedicated quote request | Hero with background image + dark overlay, h1 "Get a Quote", tagline                                                                                | Split layout: `QuoteForm` (left) + contact info panel (right); bottom info cards                                                                                                                                        | QuoteForm submit; phone/email CTAs in side panel                                                               |
| **/vendors**  | Vendor partners         | Solid `bg-hero-bg`, h1 "Join the HomeProX Property Maintenance Network", Apply Now / Vendor Login                                                   | Subtext strip, Why Partner (4 cards), 3-step Onboarding, Requirements (required/preferred), Services We Assign (6 icons), **Vendor Application** (4-step form in `#vendor-application`), FAQ accordion, dark CTA banner | Hero + CTA banner → #vendor-application; form Submit on Step 4                                                 |
| **/terms**    | Terms & Conditions      | Text hero                                                                                                                                           | TOC + content                                                                                                                                                                                                           | —                                                                                                              |
| **404**       | Not found               | —                                                                                                                                                   | Message + Home / Contact buttons                                                                                                                                                                                        | —                                                                                                              |

### 3.1 Clients Page (`/clients`)

- **Purpose:** Explain who HomeProX serves (property managers, financial institutions, real estate professionals, investors) and provide a tailored onboarding path for new client partners.
- **Hero:** Background image with dark charcoal overlay, h1 "Our Clients" and subtitle "Trusted Property Maintenance Partner Across Texas".
- **Main sections:**
  - **Intro:** Two-column layout with narrative about long-term partnerships and a "By The Numbers" stats card (properties maintained, statewide coverage, insurance, years of experience).
  - **Client Types:** Alternating sections for each `ClientType` (text + `ClientTypeCard` on one side, `ClientImage` on the other) with `AnimatedSection` fadeLeft/fadeRight variants.
  - **Why Clients Choose HomeProX:** Four feature cards (Reliability, Quality Workmanship, Scalable Solutions, Professional Communication).
  - **Quality Assurance Process:** Three-step process cards (Detailed Documentation, Vendor & Team Screening, Proactive Communication) with a connecting line on desktop.
  - **Ready to Partner CTA:** Card with headline, supporting copy, phone and email links, and a primary button **"Get Started"**.
  - **Client Onboarding Section:** Anchored at `#client-onboarding`, includes:
    - A charcoal **benefits strip** ("Reliable Vendor Network", "Fast Response Times", "Work Order Transparency", "Photo Documentation", "Scalable Property Maintenance Solutions") with CheckCircle2 icons.
    - Centered `SectionHeading` titled **"Become a HomeProX Client"**.
    - A white card containing the `ClientOnboardingForm`:
      - Captures company info, company type, website, service needs (multi-select checkboxes), portfolio size (pills), property locations, optional notes, and terms consent.
      - Submits via `POST /api/contact` with `formSource: "client-onboarding"`, mapping fields into `ContactFormData`.
- **CTA behavior:**
  - Navbar **"Our Clients"** link routes here.
  - The "Ready to Partner" button uses `Button` with `asChild` + `Link href="#client-onboarding"` so clicking it scrolls to the onboarding form section.

**Inner-page hero pattern (About, Services, Clients, Contact, Vendors):**  
`section` with `h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh]`, `bg-hero-bg`, `pt-28 sm:pt-32`. Content: `text-white` heading, `text-surface-200` subtitle, centered. No background image; solid color only.

---

## 4. Components

### 4.1 Layout

**Navbar** (`src/components/layout/Navbar.tsx`)

- Fixed, full width; `z-50`. Background: `bg-white/98 backdrop-blur-md shadow-navbar border-b border-surface-200`.
- Logo: `/images/logo.png`, `h-14 sm:h-20`, link to `/`.
- Links: Home, Services, Our Clients, Vendor Network, About Us, Contact Us — centered on desktop with `text-charcoal hover:text-teal`; active route: `h-0.5 bg-teal` underline.
- CTA: "Get a Quote" appears as an inline nav link in the centered menu.
- Phone contact: right-aligned teal pill with icon, `(469) 378-9262`, and hover state `bg-teal-dark`.
- Mobile: Hamburger (Menu/X); drawer with the same links, quote link, and a teal phone CTA; `lg:hidden` / `hidden lg:flex`.
- Uses `usePathname()`; no scroll state in current implementation (navbar always solid).

**Footer** (`src/components/layout/Footer.tsx`)

- `bg-charcoal text-white`; top accent: `h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent opacity-40`.
- Grid: 4 columns (1 on mobile, 2 md, 4 lg): (1) Logo + tagline + Fully Insured/Licensed, (2) Quick Links (includes Vendors), (3) Services list, (4) Contact (phone, email, location). Links: `text-surface-300 hover:text-white`. Contact icons: `text-teal`.
- Social row: Facebook, Twitter, LinkedIn, Instagram — `text-surface-300 hover:text-white hover:scale-110`.
- Bottom: copyright, Terms & Conditions link; `border-t border-white/10`.

**PageWrapper** (`src/components/layout/PageWrapper.tsx`)

- Wraps `<main>{children}</main>` in layout. Resets scroll to top on `pathname` change.
- Homepage: no AnimatePresence (direct render).
- Other pages: Framer Motion `AnimatePresence mode="wait"`; enter: `opacity 0→1`, `y: 12→0`; exit: `opacity 0`, `y: -8`. Respects `useReducedMotion()`.

### 4.2 UI

**Button** (`src/components/ui/Button.tsx`)

- **Props:** `variant?: "primary" | "secondary" | "ghost"`, `size?: "sm" | "md" | "lg"`, `loading?`, `asChild?`, `children`, `className`, plus standard button attributes.
- **Variants:** Primary: `bg-teal text-white hover:bg-teal-dark hover:scale-105 shadow-sm hover:shadow-teal-glow`. Secondary: `border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white`. Ghost: `text-teal hover:text-teal-dark hover:underline`.
- **Sizes:** sm `px-4 py-2 text-sm`, md `px-6 py-3 text-base`, lg `px-8 py-4 text-lg`.
- **Loading:** Shows `<Loader2 className="animate-spin" />`. `asChild`: merges styles into child (e.g. `<Link>`).

**SectionHeading** (`src/components/ui/SectionHeading.tsx`)

- **Props:** `title: string`, `subtitle?: string`, `align?: "left" | "center"`, `className?`.
- **Markup:** `h2` with `font-display text-4xl md:text-5xl font-bold text-charcoal`; optional `p` with `font-body text-lg text-text-muted max-w-2xl`; rule: `h-0.5 w-12 bg-teal` + `w-4 bg-surface-300` rounded-full.

**AnimatedSection** (`src/components/ui/AnimatedSection.tsx`)

- **Props:** `children`, `variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn"`, `delay?: number`, `className?`.
- **Behavior:** `motion.div` with `initial="hidden"` `whileInView="visible"`; `viewport: { once: true, margin: "0px 0px 60px 0px", amount: 0.15 }`; `transition: { duration: 0.6, delay, ease: "easeOut" }`.
- **Variants:** fadeUp (y: 50→0), fadeLeft (x: -50→0), fadeRight (x: 50→0), scaleIn (scale 0.8→1). All with opacity 0→1.
- **Reduced motion:** Renders plain `<div>` with no animation.

**ScrollToTop** (`src/components/shared/ScrollToTop.tsx`)

- Visible when `window.scrollY > 400`. Fixed `bottom-8 right-8 z-50`; `bg-teal text-white rounded-full` button, ArrowUp icon; `hover:bg-teal-dark hover:shadow-teal-glow hover:scale-110`.
- AnimatePresence for mount/unmount; `scrollTo({ top: 0, behavior: "smooth" })` on click. Respects `useReducedMotion()`.

### 4.3 Cards

**ServiceCard** (`src/components/cards/ServiceCard.tsx`)

- **Props:** `service: Service`, `variant?: "grid" | "list" | "featured"`.
- **Grid:** Image (h-48) + icon + title + description + features list + "Learn more →" link. Hover: `hover:border-teal/40 hover:shadow-card-hover hover:-translate-y-1`. Icon and link: `text-teal`.
- **Featured:** Larger image, badge ("Featured"), same content pattern. Uses `iconMap` for Lucide icons (Wrench, Droplets, Paintbrush, Sparkles, Leaf, Home, Trash2).
- **Image:** Next.js `Image` with `fill` and `object-cover`; fallback on error. `service.image` (Unsplash URLs).

**ClientTypeCard** (`src/components/cards/ClientTypeCard.tsx`)

- **Props:** `client: ClientType`, `variant?: "compact" | "full"`.
- **Compact:** Icon (`text-teal`), title, description (line-clamp-2), benefits with CheckCircle; hover lift and border/shadow like ServiceCard.
- **Full:** Larger layout with image support. Icons: Building2, Landmark, KeyRound, TrendingUp.

**TestimonialCard** (`src/components/cards/TestimonialCard.tsx`)

- **Props:** `testimonial: Testimonial`.
- **Content:** 5 sky blue stars (`text-skyblue fill-skyblue`), quote (`text-text-muted italic`), avatar (image or initials fallback) with `ring-2 ring-teal/25`, name (`text-charcoal font-semibold`).
- Card: `bg-white border border-surface-200 rounded-xl shadow-card`; `hover:border-teal/40 hover:shadow-card-hover`.

### 4.4 Vendor Page Sections & Form

**VendorHero** (`src/components/sections/VendorHero.tsx`)

- Inner-page hero: `bg-hero-bg`, `hero-texture` overlay, h1 "Join the HomeProX Property Maintenance Network", two CTAs (Apply Now, Vendor Login) linking to `#vendor-application`.

**VendorWhyPartner** (`src/components/sections/VendorWhyPartner.tsx`)

- Charcoal subtext strip; then section "Why Partner With HomeProX?" with 4 benefit cards (CheckCircle2, title, description). Cards: standard border/shadow and hover lift.

**VendorOnboarding** (`src/components/sections/VendorOnboarding.tsx`)

- Section "A Structured Path to Getting Work Orders"; 3 numbered step cards (01 Submit Application, 02 Review & Approval, 03 Start Receiving Work Orders) with desktop connector line; orange/40 circular step numbers.

**VendorRequirements** (`src/components/sections/VendorRequirements.tsx`)

- Two columns: Requirements (teal bar, CheckCircle2, 5 items) and Preferred (sky blue bar, Star, 3 items). AnimatedSection fadeLeft/fadeRight.

**VendorServices** (`src/components/sections/VendorServices.tsx`)

- Grid of 6 service categories (Wrench, RefreshCcw, Leaf, Droplets, Trash2, Shield); each card has icon in `bg-teal-muted`, label; equal height (`h-full`), scaleIn animation.

**VendorFAQ** (`src/components/sections/VendorFAQ.tsx`)

- "use client"; 4 accordion items (openIndex state); ChevronDown rotate when open; SectionHeading "Frequently Asked Questions".

**VendorCTABanner** (`src/components/sections/VendorCTABanner.tsx`)

- Dark section `bg-charcoal`, orange/40 diagonal overlay, top orange/40 rule; heading "Ready to Join the HomeProX Vendor Network?", Apply Now → `#vendor-application`.

**VendorApplicationForm** (`src/components/forms/VendorApplicationForm.tsx`)

- **"use client"**; 4-step form: (1) Company Information — companyName, contactPerson, phone, email, website, yearsInBusiness; (2) Services Offered — service categories (multi-select), coverageAreas, serviceRadius; (3) Compliance & Docs — file uploads (Certificate of Insurance required; License, W9, Background Check optional); (4) Review & Submit — ReviewRow summary with Edit links per section, confirmation notice, Submit. Step indicator (circles + labels); Back / Continue / "Review Application" (step 3) / "Submit Application" (step 4). Validates each step before advancing; submits via `FormData` POST to `/api/vendor`. Success state: CheckCircle2 + thank-you message. Custom dropdown arrows (ChevronDown) for selects; `suppressHydrationWarning` on wrapper for extension-tampered inputs.

---

## 5. Design System

### 5.1 Colors (Tailwind v4 `@theme` in `globals.css`)

| Token            | Hex / Value             | Usage                                |
| ---------------- | ----------------------- | ------------------------------------ |
| `white`          | `#FFFFFF`               | Primary backgrounds, inverse text    |
| `surface-50`     | `#F7F9FA`               | Section alt background               |
| `surface-100`    | `#E9EDF0`               | Cards, form inputs, stats bar        |
| `surface-200`    | `#CBD2D8`               | Card borders, dividers               |
| `surface-300`    | `#AFC2CC`               | Stronger borders                     |
| `charcoal`       | `#1F2A33`               | Headings, footer bg                  |
| `charcoal-light` | `#323F4B`               | Hover on dark                        |
| `charcoal-muted` | `#637381`               | Subdued text on dark                 |
| `teal`           | `#14B8A6`               | Buttons, links, active states, icons |
| `teal-dark`      | `#0D9488`               | Button/link hover                    |
| `teal-light`     | `#E6FFFA`               | Ghost hover bg, focus tint           |
| `teal-muted`     | `rgba(20,184,166,0.12)` | Subtle card/badge tint               |
| `skyblue`        | `#0EA5E9`               | Badge highlights, secondary elements |
| `skyblue-light`  | `#EFF8FF`               | Badge background                     |
| `text-primary`   | `#1F2A33`               | Headings                             |
| `text-body`      | `#3E4C59`               | Body                                 |
| `text-muted`     | `#64748B`               | Captions, placeholders               |
| `text-inverse`   | `#FFFFFF`               | Text on dark                         |
| `hero-bg`        | `#374151`               | Home hero background                 |
| `hero-bg-dark`   | `#1F2937`               | Hero fallback/cards                  |
| `hero-text`      | `#FFFFFF`               | Hero headline                        |
| `hero-muted`     | `#CBD5E1`               | Hero subtitle                        |
| `error`          | `#EF4444`               | Form error                           |
| `success`        | `#22C55E`               | Success state                        |

### 5.2 Fonts

| Variable         | Font                              | Usage                |
| ---------------- | --------------------------------- | -------------------- |
| `--font-display` | Outfit (600, 700, 800)            | Headings             |
| `--font-body`    | Plus Jakarta Sans (400, 500, 600) | Body, descriptions   |
| `--font-accent`  | Outfit                            | Buttons, nav, labels |

Loaded in `layout.tsx` via `next/font/google`: `Outfit`, `Plus_Jakarta_Sans`; applied as CSS variables on `<html>`.

### 5.3 Shadows

| Token               | Value                                                               |
| ------------------- | ------------------------------------------------------------------- |
| `shadow-card`       | `0 1px 3px rgba(31,42,51,0.06), 0 4px 12px rgba(31,42,51,0.05)`     |
| `shadow-card-hover` | `0 4px 16px rgba(20,184,166,0.12), 0 12px 32px rgba(31,42,51,0.10)` |
| `shadow-teal-glow`  | `0 0 0 3px rgba(20,184,166,0.22)`                                   |
| `shadow-navbar`     | `0 1px 0 rgba(31,42,51,0.06), 0 4px 16px rgba(31,42,51,0.08)`       |

### 5.4 Spacing & Breakpoints

- **Section padding:** Typically `py-20 lg:py-28`; some sections use `pt-0` or `pt-12` for tighter top spacing (WhyChooseUs, Testimonials, ClientsSection).
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Breakpoints:** Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px); custom `min-[1131px]` used for hero two-column layout.

### 5.5 Buttons (Summary)

- **Primary:** `bg-teal text-white hover:bg-teal-dark`; rounded-lg; shadow and hover scale/glow.
- **Secondary:** `border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white`.
- **Ghost:** `text-teal hover:text-teal-dark hover:underline`.
- **Pill (hero/nav):** `rounded-full`, same teal fill/hover.

### 5.6 Cards (Summary)

- Base: `bg-white border border-surface-200 rounded-xl shadow-card`.
- Hover: `hover:border-teal/40 hover:shadow-card-hover`; some use `hover:-translate-y-1`.
- Icons and links: `text-teal` / `hover:text-teal-dark`.

---

## 6. Styling & Theming

### 6.1 Tailwind v4 Theme (`globals.css`)

- Single `@import "tailwindcss";` at top. All custom theme in `@theme { }`: colors, fonts, shadows, keyframe names.
- **No** `tailwind.config.ts`; v4 uses CSS-based config only.

### 6.2 Global Styles

- **body:** `background-color: #FFFFFF`, `color: var(--color-text-body)`, `font-family: var(--font-body)`, `overflow-x: hidden`, `-webkit-font-smoothing: antialiased`.
- **body::before:** Fixed 3px top bar; gradient `charcoal → orange/40 → charcoal`; `z-index: 100`.
- **:focus-visible:** `outline: 2px solid var(--color-orange/40)`, `outline-offset: 3px`, `border-radius: 4px`.
- **::selection:** `background: var(--color-orange/40-light)`, `color: var(--color-charcoal)`.

### 6.3 Keyframes

- **fadeUp:** `opacity 0→1`, `translateY(20px)→0`.
- **float:** `translateY(0)→-16px→0`; used for hero cards; `animation: float 4s ease-in-out infinite`.
- **shimmer:** Background position animation for skeleton loading.

### 6.4 Utility Classes

- **.hero-texture:** Diagonal line pattern overlay (60px grid, white 4% opacity).
- **.animate-float:** Applies `float` keyframe.
- **.animate-shimmer:** Shimmer for skeletons.

---

## 7. Data & Content

### 7.1 Services (`src/lib/data/services.ts`)

- **Type:** `Service[]` — `id`, `title`, `description`, `icon` (Lucide name), `image` (URL), `slug`, `features: string[]`.
- **Count:** 7 services (General Maintenance & Minor Plumbing, Gutter Cleaning, Drywall & Painting, Property Cleaning, Landscaping, Siding & Exterior, Property Cleanouts).
- **Images:** Unsplash URLs; e.g. `photo-1558618666-fcd25c85cd64` (plumbing). Icons: Wrench, Droplets, Paintbrush, Sparkles, Leaf, Home, Trash2.

### 7.2 Clients (`src/lib/data/clients.ts`)

- **Type:** `ClientType[]` — `id`, `title`, `description`, `icon`, `image`, `benefits: string[]`.
- **Count:** 4 (Property Management Companies, Financial Institutions & Asset Managers, Real Estate Professionals, Investors & Portfolio Owners).
- **Icons:** Building2, Landmark, KeyRound, TrendingUp. Images: Unsplash.

### 7.3 Testimonials (`src/lib/data/testimonials.ts`)

- **Type:** `Testimonial[]` — `id`, `name`, `role`, `company`, `content`, `rating` (1–5), `clientType`, `avatar` (Pexels URL).
- **Count:** 6. All 5-star. Avatars: Pexels; fallback to initials in UI.

### 7.4 Quote & Contact Forms

**QuoteForm** (`src/components/forms/QuoteForm.tsx`)

- **Location:** Used on `/quote` and can be embedded in sections if needed.
- **Fields:** `fullName`, `companyName`, `email`, `phone`, `propertyType` (Residential, Commercial, Multi-Unit, REO/Bank Owned, Other), `serviceNeeded` (from services list + "Multiple Services"), `location`, `message`, `agreeToTerms`, `formSource?: "quote"`.
- **Validation:** `validateForm()` in `src/lib/utils/formValidation.ts` — required checks, email regex, phone min 10 digits, propertyType/serviceNeeded/location non-empty, message min 10 characters, terms acceptance.
- **Submit:** `POST /api/contact` with JSON body `{ ...formData, formSource: "quote" }`; success shows orange/40-muted success block; errors per field + optional submit error message.
- **UX:** Full-width card layout, field-level error messages, accessible labels/ARIA attributes; terms checkbox links to `/terms`.

**ContactForm** (`src/components/forms/ContactForm.tsx`)

- **Location:** Used on `/contact` inside a card on the right side of the contact layout.
- **Fields:** `name`, `email`, optional `phone`, `inquiryType` (Property Maintenance Service, Client Partnership, Vendor Application, General Inquiry, Support), `message`, `agreeToTerms`.
- **Validation:** Inline validation — required `name`, valid `email` (regex), selected `inquiryType`, message present and at least 10 characters, and terms acceptance.
- **Submit:** Maps to `ContactFormData` shape and sends `POST /api/contact` with:
  - `fullName` from `name`
  - `serviceNeeded` from the selected inquiry label
  - other fields (e.g. `propertyType`, `location`) left empty
  - `agreeToTerms` from checkbox, `formSource: "contact"`
- **UX:** Compact layout with success state (icon + thank-you text), field errors, and a Terms & Conditions checkbox mirroring the quote form.

**/api/contact** (`src/app/api/contact/route.ts`)

- **Input:** `ContactFormData` including optional `formSource?: "quote" | "contact"`.
- **Owner email:** Uses `formSource` to set subject:
  - Quote requests: `"New Quote Request from {fullName}"` with "New Quote Request Received" header.
  - Contact messages: `"New Contact Message from {fullName}"` with "New Contact Message Received" header.
- **Client email:** Confirmation subject/body changes based on `formSource` ("request" vs "message") and includes a short summary (service, propertyType, location).
- **Transport:** Uses shared `transporter` from `@/lib/utils/mailer` and `process.env.CONTACT_EMAIL` / `EMAIL_USER`.

### 7.5 Vendor Application

- **Types:** `src/types/vendor.ts` — `VendorFormData` (companyName, contactPerson, phone, email, website, yearsInBusiness, serviceCategories, coverageAreas, serviceRadius, optional `attachments`, `agreeToTerms`), `VendorFormErrors`, `VendorFormStep`.
- **Form steps:** (1) Company Information, (2) Services Offered (categories match VendorServices labels), (3) Documents & Attachments (PDF/JPG/PNG up to 10MB each, all optional), (4) Review & Submit. In-form validation via `validateStep(step, data)`; Step 4 also validates terms acceptance.
- **Submit:** POST `/api/vendor` with `multipart/form-data`; text fields + any uploaded files appended as `attachment_{index}`. API uses `transporter` from `@/lib/utils/mailer`; sends to `CONTACT_EMAIL` (fallback `EMAIL_USER`). Env: `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`, `CONTACT_EMAIL` (same as contact form).
- **Email:** HTML body with company info, services & coverage, and attachment summary; attachments are sent as Nodemailer attachments. Success log: `[/api/vendor] Vendor application email sent to <address>`.

---

## 8. Hooks & Utilities

### 8.1 useScrollPosition (`src/hooks/useScrollPosition.ts`)

- **Returns:** `number` (current `window.scrollY`).
- **Usage:** Can drive navbar background or other scroll-dependent UI. Listens with `{ passive: true }`; cleans up on unmount.

### 8.2 Form Validation (`src/lib/utils/formValidation.ts`)

- **validateEmail(email):** Non-empty + regex; returns `{ valid, message }`.
- **validatePhone(phone):** Non-empty + ≥10 digits; returns `{ valid, message }`.
- **validateRequired(value, fieldName):** Trim non-empty; returns `{ valid, message }`.
- **validateForm(formData: ContactFormData):** Returns `Record<string, string>` of field errors; used by QuoteForm before submit.

### 8.3 Metadata (`src/lib/metadata.ts`)

- **SITE_URL:** `process.env.NEXT_PUBLIC_SITE_URL || "https://homeproxsvcs.com"`.
- **defaultMetadata:** title template, description, keywords, authors, Open Graph, Twitter, robots.
- **generatePageMetadata({ title, description, path }):** Returns Next.js `Metadata` with canonical, OG, Twitter overrides for each page.

---

## 9. Image Guidelines

- **Component:** Next.js `<Image>` from `next/image`.
- **Remote domains:** `images.unsplash.com`, `images.pexels.com` in `next.config.ts` `images.remotePatterns`.
- **Hero/cards:** Use `fill` with a sized container and `className="object-cover"`; specify `sizes` where appropriate (e.g. `360px` for hero cards).
- **Logo:** `/images/logo.png`; Navbar `priority`; fixed height (e.g. `h-14 sm:h-20`).
- **Alt text:** Always meaningful; decorative images use `alt=""`.
- **Fallback:** ServiceCard, TestimonialCard, ClientImage use `onError` or state to hide image / show placeholder or initials.
- **Aspect ratio:** Hero cards use fixed heights (e.g. `h-[200px] xl:h-[220px]`); service cards use `h-48` image block. Rounded corners: `rounded-xl` / `rounded-2xl` as per design.

---

## 10. SEO & Metadata

- **Per-page:** Each page calls `generatePageMetadata({ title, description, path })` and exports `metadata` (or uses `defaultMetadata` in layout).
- **Layout:** `layout.tsx` exports `metadata: Metadata = defaultMetadata`.
- **Canonical:** Set via `generatePageMetadata` `alternates.canonical`.
- **Headings:** Single `h1` per page (hero); sections use `SectionHeading` (`h2`) and card titles `h3` for structure and accessibility.
- **Skip link:** `<a href="#main-content">Skip to main content</a>` in layout; focus styles (orange/40 outline) for keyboard users.

---

## 11. Animations

- **Scroll-triggered:** `AnimatedSection` with `whileInView`, `viewport: { once: true, margin: "0px 0px 60px 0px", amount: 0.15 }`. Variants: fadeUp, fadeLeft, fadeRight, scaleIn.
- **Cards:** ServiceCard, ClientTypeCard use `motion.div` with `whileHover: { y: -4 }` (or similar) when motion not reduced.
- **StatsBar:** Count-up when in view; `motion.div` with `whileInView` and staggered delay.
- **ScrollToTop:** AnimatePresence; fade/scale on show/hide.
- **Page transitions:** PageWrapper uses AnimatePresence + motion.div for enter/exit (non-home only).
- **Reduced motion:** All Framer usage checks `useReducedMotion()` and either disables animation or uses opacity-only / no transform.

---

## 12. Instructions for Developers

### 12.1 Adding a New Page

1. Create `src/app/your-route/page.tsx`.
2. Export `metadata` via `generatePageMetadata({ title: "...", description: "...", path: "/your-route" })`.
3. Use shared layout (Navbar/Footer from root layout). Optionally use same hero pattern: `section` with `bg-hero-bg`, `h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh]`, `pt-28 sm:pt-32`, and centered `text-white` / `text-surface-200` content.
4. Add route to Navbar `navLinks` and Footer if needed.
5. Update `sitemap.ts` if you want the route in the sitemap.

### 12.2 Adding a New Component

1. Place in `components/layout`, `ui`, `sections`, `cards`, `forms`, or `shared` as appropriate.
2. Use `"use client"` if the component uses hooks, Framer Motion, or browser APIs.
3. Use design tokens: `text-charcoal`, `text-teal`, `bg-surface-50`, `border-surface-200`, `font-display`, `font-body`, `font-accent`, etc.
4. For scroll animations, wrap content in `<AnimatedSection variant="fadeUp">` or use `motion` with `whileInView` and `viewport={{ once: true }}`. Respect `useReducedMotion()`.

### 12.3 Adding a Service

1. Open `src/lib/data/services.ts`.
2. Add an object to `services` array: `id`, `title`, `description`, `icon` (Lucide name present in ServiceCard `iconMap`), `image` (URL), `slug`, `features`.
3. If the icon is new, add it to the `iconMap` in `ServiceCard.tsx` and import the icon from `lucide-react`.

### 12.4 Adding a Client Type

1. Open `src/lib/data/clients.ts`.
2. Add to `clients` array: `id`, `title`, `description`, `icon` (in ClientTypeCard `iconMap`), `image`, `benefits`.
3. If the icon is new, add it to `iconMap` in `ClientTypeCard.tsx`.

### 12.5 Adding a Testimonial

1. Open `src/lib/data/testimonials.ts`.
2. Add to `testimonials` array: `id`, `name`, `role`, `company`, `content`, `rating` (1–5), `clientType`, `avatar` (URL). Use existing `clientType` values for consistency.

### 12.6 Vendor Page

- **Route:** `/vendors`; page in `src/app/vendors/page.tsx`; metadata via `generatePageMetadata({ title: "Vendor Partners", description: "...", path: "/vendors" })`.
- **Sections order:** VendorHero → VendorWhyPartner → VendorOnboarding → VendorRequirements → VendorServices → application section (`id="vendor-application"`) → VendorFAQ → VendorCTABanner. Navbar and Footer include "Vendors" link; sitemap includes `/vendors`.
- **To add a vendor FAQ:** Edit `faqs` array in `src/components/sections/VendorFAQ.tsx` (question/answer objects).
- **To change application steps or fields:** Edit `STEPS`, `SERVICE_CATEGORIES`, and step JSX in `src/components/forms/VendorApplicationForm.tsx`; update `VendorFormData` / `VendorFormErrors` in `src/types/vendor.ts` and `validateStep()`; ensure `/api/vendor` route reads and validates the same fields and sends them in the email.

### 12.7 Following the Design System

- Use only theme colors (no arbitrary hex in class names except where theme does not define a token).
- Use `font-display` for headings, `font-body` for body, `font-accent` for buttons and nav.
- Use `SectionHeading` for section titles. Use `Button` with `variant` and `size`; use `asChild` with `Link` for CTAs.
- Keep spacing consistent: section padding `py-20 lg:py-28` (or reduced top where used); container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Ensure focus and selection styles remain (orange/40 outline, orange/40-light selection). Do not remove `body::before` top accent.

### 12.8 Handling Images

- Use Next.js `Image` with `fill` + `object-cover` in a sized wrapper, or explicit `width`/`height` for fixed dimensions.
- Add new remote hostnames to `next.config.ts` `images.remotePatterns` if using external URLs.
- Provide alt text for all meaningful images; use `alt=""` for decorative.
- Handle errors with `onError` and local state to show placeholder or hide image.

### 12.9 Responsive Layouts

- Mobile-first: base styles for small screens; override with `sm:`, `md:`, `lg:`, `xl:`.
- Hero two-column: use `min-[1131px]:grid-cols-2` (and related classes) so layout switches at 1131px. Below that, single column, centered text.
- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (or similar) for cards. Use consistent gap (e.g. `gap-8`).

---

## 13. Example Snippets

### 13.1 ServiceCard (grid variant)

```tsx
<ServiceCard service={service} variant="grid" />
// service: { id, title, description, icon, image, slug, features }
// Renders: image block, icon, title, description, feature list, "Learn more →" link
// Hover: border-orange/40/40, shadow-card-hover, -translate-y-1
```

### 13.2 ClientTypeCard (compact)

```tsx
<ClientTypeCard client={client} variant="compact" />
// client: { id, title, description, icon, image, benefits }
// Renders: icon, title, description (clamped), benefits with CheckCircle
```

### 13.3 Hero section (inner page)

```tsx
<section className="relative h-[40vh] min-h-[320px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-hero-bg pt-28 sm:pt-32">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 text-center">
    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
      Page Title
    </h1>
    <p className="font-body text-lg text-surface-200 max-w-2xl mx-auto">
      Tagline or short description.
    </p>
  </div>
</section>
```

### 13.4 QuoteForm usage

```tsx
import { QuoteForm } from "@/components/forms/QuoteForm";

// In the dedicated quote page or any CTA section:
<QuoteForm />;
// Form includes: fullName, companyName, email, phone, propertyType, serviceNeeded, location, message, agreeToTerms
// Validates via validateForm(); submits to POST /api/contact with formSource="quote"
// Success: orange/40-muted box with thank-you message
```

### 13.5 SectionHeading

```tsx
<SectionHeading
  title="Why Choose HomeProX"
  subtitle="Built on reliability, quality, and long-term partnerships"
  align="center"
/>
```

### 13.6 AnimatedSection

```tsx
<AnimatedSection variant="fadeUp" delay={0.2}>
  <div>Content that fades/slides up when in view</div>
</AnimatedSection>
```

### 13.7 Vendor page application section

```tsx
// In vendors/page.tsx the form is mounted inside an anchor-targeted section:
<section id="vendor-application" className="py-20 lg:py-28 bg-surface-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <VendorApplicationForm />
  </div>
</section>
// Hero and CTA use <Link href="#vendor-application">Apply Now</Link>
```

---

## 14. Optional Reference

### 14.1 Page / Component Hierarchy (ASCII)

**Home:**

```
layout (Navbar + PageWrapper(main) + Footer + ScrollToTop)
  └── main#main-content
        └── page.tsx (or route segment)
              ├── Hero / StatsBar / divider
              ├── ServicesSection (SectionHeading + ServiceCard grid + Button)
              ├── ClientsSection (SectionHeading + ClientTypeCard grid + Link)
              ├── WhyChooseUs (SectionHeading + feature cards + stats)
              ├── QualityProcess (SectionHeading + step cards)
              ├── Testimonials (SectionHeading + carousel/grid TestimonialCard)
              ├── CTABanner (dark or light)
              └── ContactSection (info + CTA button linking to /quote)
```

**Vendors (`/vendors`):**

```
  └── vendors/page.tsx
        ├── VendorHero (Apply Now / Vendor Login → #vendor-application)
        ├── VendorWhyPartner (subtext strip + 4 benefit cards)
        ├── VendorOnboarding (3-step cards)
        ├── VendorRequirements (required + preferred columns)
        ├── VendorServices (6 icon cards)
        ├── section#vendor-application (VendorApplicationForm: 4 steps, file uploads)
        ├── VendorFAQ (accordion)
        └── VendorCTABanner (Apply Now)
```

### 14.2 Color Utility Mapping (Tailwind class → theme)

| Tailwind class                                         | Theme variable             |
| ------------------------------------------------------ | -------------------------- |
| `bg-white`                                             | `--color-white`            |
| `bg-surface-50` … `bg-surface-300`                     | `--color-surface-*`        |
| `bg-charcoal`, `text-charcoal`                         | `--color-charcoal`         |
| `bg-teal`, `text-teal`, `border-teal`                  | `--color-orange/40`        |
| `hover:bg-teal-dark`                                   | `--color-orange/40-dark`   |
| `text-skyblue`, `fill-skyblue`                         | `--color-skyblue` (badges) |
| `text-text-muted`                                      | `--color-text-muted`       |
| `bg-hero-bg`, `text-hero-text`                         | `--color-hero-*`           |
| `shadow-card`, `shadow-card-hover`, `shadow-teal-glow` | `--shadow-*`               |

### 14.3 Component Variants Summary

| Component       | Prop    | Values                               | Notes                                      |
| --------------- | ------- | ------------------------------------ | ------------------------------------------ |
| Button          | variant | primary, secondary, ghost            | —                                          |
| Button          | size    | sm, md, lg                           | —                                          |
| SectionHeading  | align   | left, center                         | —                                          |
| AnimatedSection | variant | fadeUp, fadeLeft, fadeRight, scaleIn | —                                          |
| ServiceCard     | variant | grid, list, featured                 | grid = default                             |
| ClientTypeCard  | variant | compact, full                        | compact = default                          |
| CTABanner       | variant | dark, light                          | dark = image + overlay; light = surface-50 |

---

_End of documentation. For live implementation details, refer to the source files under `src/`. This document is intended for developers and AI to understand, extend, and customize the HomeProX Services LLC Next.js website._
