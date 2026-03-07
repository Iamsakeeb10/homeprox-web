# Website Design Documentation

This document describes the full UI structure and styling of the MEGAFIXX Home Services LLC Next.js website. Use it to improve visual design without changing layout or functionality.

---

## 1. Project Overview

### Framework
- **Next.js** (App Router)
- **React** with TypeScript

### Styling
- **Tailwind CSS** (v4) via `@import "tailwindcss"` and `@theme` in `src/app/globals.css`
- Custom design tokens (colors, fonts, shadows, animations) defined in `@theme`
- No separate CSS framework; utility-first Tailwind only

### Component Structure Overview
- **Layout:** `Navbar`, `Footer`, `PageWrapper` wrap all pages; `ScrollToTop` floating button
- **Sections:** Hero, StatsBar, ServicesSection, ClientsSection, WhyChooseUs, QualityProcess, Testimonials, CTABanner, ContactSection; page-specific heroes (e.g. ServicesPageHero)
- **UI primitives:** Button, SectionHeading, Skeleton, AnimatedSection
- **Cards:** ServiceCard, TestimonialCard, ClientTypeCard, ClientImage, TeamPhoto
- **Forms:** QuoteForm (contact/quote request)

### Routing Structure
| Route | Purpose |
|-------|---------|
| `/` | Home: Hero, Stats, Services, Clients, Why Us, Quality, Testimonials, CTA, Contact |
| `/services` | Services page: hero + services grid + CTA block |
| `/clients` | Clients page: hero + client types + testimonials + CTA |
| `/about` | About page: hero + story + values + regions + team + CTA |
| `/contact` | Contact page: hero + contact info + QuoteForm |
| `/terms` | Terms & Conditions: single-column content |
| (404) | Not Found: centered message + CTAs |
| `loading.tsx` | Global loading UI (logo + spinner) |

---

## 2. Global Layout Structure

### Hierarchy
1. **Root layout** (`app/layout.tsx`)
   - Skip link (sr-only, focus: visible with gold bg)
   - **Navbar** (fixed, full width)
   - **PageWrapper** (wraps `main`; handles route-change scroll + optional page transition)
   - **main#main-content** (children = page content)
   - **Footer** (full width)
   - **ScrollToTop** (fixed bottom-right when scroll > 400px)

2. **Navbar**
   - Fixed `top-0 left-0 right-0 z-50`, `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
   - Height `h-20`; logo left, desktop nav + CTA right; mobile hamburger
   - Unscrolled: transparent; scrolled: `bg-cream-50/95 backdrop-blur-md shadow-lg`
   - Logo link with optional background pill (visible when not scrolled)

3. **Hero (home)**
   - Full-viewport section; background image + overlay; two-column grid (content left, image card right on desktop)

4. **Content Sections**
   - Each section: full width, inner `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
   - Typical section padding: `py-20 lg:py-28`
   - Alternating or consistent `bg-cream-50` / `bg-cream-100` / `bg-cream-200` for visual rhythm

5. **Footer**
   - Full width; 4-column grid on large screens (company, Quick Links, Services, Contact)
   - Top border: `border-t-2 border-gold/20`
   - Social row and bottom bar with copyright + Terms link

6. **Page Containers**
   - Inner pages: no extra wrapper; sections stack with same `max-w-7xl` and padding
   - Terms page: `min-h-screen bg-cream-50 pt-20` with a single content column

### Grid Structures
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (used globally)
- **Section grids:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` (services, features); `grid-cols-1 md:grid-cols-2` (clients, two-column layouts); `lg:grid-cols-4` (footer)
- **Stats bar:** `grid grid-cols-2 md:grid-cols-4 gap-8`

---

## 3. Color Palette

All theme colors are defined in `src/app/globals.css` under `@theme`. Tailwind uses these via `--color-*` and custom shadow variables.

### Primary Color (Accent)
- **Hex:** `#C89B3C`
- **Tailwind:** `bg-gold`, `text-gold`, `border-gold`, `focus:ring-gold`, `fill-gold`
- **Usage:** Primary CTAs, nav active/hover, links, icons, badges, focus rings, footer border accent, scroll-to-top button, star ratings, step numbers (inverse text)

### Secondary Color (Accent Hover)
- **Hex:** `#A67C28`
- **Tailwind:** `gold-dark` — `hover:bg-gold-dark`, `hover:text-gold-dark`
- **Usage:** Hover state for gold buttons and gold links

### Background Colors
| Name | Hex | Tailwind | Usage |
|------|-----|----------|--------|
| Cream 50 | `#FDFAF5` | `bg-cream-50` | Page background (body), hero overlay, section backgrounds, footer logo box, QualityProcess step cards, CTA overlay/fallback |
| Cream 100 | `#F5EFE0` | `bg-cream-100` | Footer background, ContactSection background |
| Cream 200 | `#EDE3CC` | `bg-cream-200` | Cards, stats bar, form inputs, mobile nav, skeleton, ServiceCard/TestimonialCard/ClientTypeCard, CTA fallback |
| Cream 300 | `#E0D4B4` | `bg-cream-300` | Card borders (visual), icon fallback areas, dividers, testimonial dots (inactive), vertical dividers |

### Text Colors
| Name | Hex / ref | Tailwind | Usage |
|------|------------|----------|--------|
| Primary text | Stone 900 | `text-stone-900` | Headings, body copy, nav links, form labels/values, footer text |
| Muted text | `#7A6A52` | `text-muted` | Subtitles, descriptions, placeholders, captions, footer links |
| Accent text | `#C89B3C` | `text-gold` | Links, badges, labels, CTA text on dark |
| On-gold text | `#FDFAF5` | `text-cream-50` | Text on gold (e.g. step numbers, skip link when focused) |

### Border Colors
- **Cream 300:** `border-cream-300` — cards, dividers, form default
- **Gold:** `border-gold` — active/hover emphasis, footer top
- **Gold opacity:** `border-gold/20`, `border-gold/30` — subtle accents (footer, QualityProcess line)
- **Stone:** `border-stone-900/20` — footer logo container

### Hover Colors
- **Links/nav:** `hover:text-gold`
- **Buttons (primary):** `hover:bg-gold-dark hover:scale-105`
- **Buttons (secondary):** `hover:bg-gold hover:text-stone-900`
- **Ghost:** `hover:text-gold-dark hover:underline`
- **Cards:** `hover:border-gold hover:shadow-gold-glow`
- **Footer/social links:** `hover:text-gold`

### Additional
- **Transparent:** Navbar when not scrolled; gradient ends
- **Red (errors):** `border-red-500`, `text-red-400` — form validation
- **Focus ring offset:** `focus:ring-offset-cream-200` for focus visibility

---

## 4. Typography

### Font Families (from `globals.css` and `layout.tsx`)
- **Display:** `Barlow Condensed` — `font-display` — headings, hero headline, section titles
- **Body:** `DM Sans` — `font-body` — paragraphs, form labels, footer copy
- **Accent:** `Barlow` — `font-accent` — nav links, buttons, badges, small caps

Loaded via Next.js Google Fonts: Barlow_Condensed (600, 700, 800), DM_Sans, Barlow (400, 500, 600).

### Font Sizes
- **Hero H1:** `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- **Hero subhead:** `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- **Section H2:** `text-4xl md:text-5xl` (SectionHeading)
- **Section H3:** `text-xl`, `text-2xl md:text-3xl` (cards, blocks)
- **Page H1:** `text-3xl sm:text-4xl lg:text-5xl`
- **Body large:** `text-lg`, `text-base sm:text-lg lg:text-xl`
- **Body default:** `text-base`, `text-sm`
- **Small / captions:** `text-sm`, `text-xs`
- **404 number:** `text-9xl`

### Font Weights
- **Bold:** `font-bold` — all major headings
- **Medium:** `font-medium` — form labels
- **Default:** body and links

### Heading Styles
- **H1:** `font-display font-bold text-stone-900` + responsive size (hero or page)
- **H2:** `font-display text-4xl md:text-5xl font-bold text-stone-900` (SectionHeading); elsewhere `text-3xl md:text-4xl` or similar
- **H3:** `font-display text-xl font-bold text-stone-900 mb-3` (cards); `text-2xl` / `text-3xl` for larger blocks

### Body Text Styles
- **Default:** `font-body text-stone-900` or `text-muted` for secondary
- **Intro/lead:** `font-body text-lg text-muted max-w-2xl`
- **Small:** `font-body text-muted text-sm`

---

## 5. Component Design Breakdown

### Navbar
- **Layout:** Flex, `items-center justify-between h-20` inside `max-w-7xl`
- **Logo:** Left; Image `h-12 sm:h-16` (unscrolled), `h-16 sm:h-[88px]` (scrolled); optional motion background pill
- **Desktop nav:** `hidden lg:flex items-center gap-8`; links with underline animation (`h-0.5 bg-gold`, width 0 → full on hover/active)
- **Links:** `font-accent text-base`; active `text-gold`, default `text-stone-900 hover:text-gold`; `transition-colors duration-300`
- **CTA:** `Button variant="primary" size="sm"` (Get a Quote)
- **Mobile:** Hamburger `lg:hidden`; menu panel `bg-cream-50 border-t border-cream-300`, `px-4 py-6 space-y-4`; full-width primary button
- **Colors:** Transparent or cream-50/95; text stone-900/gold; border cream-300 (mobile)
- **Spacing:** Container `px-4 sm:px-6 lg:px-8`; gap-8 between nav links

### Hero Section (Home)
- **Layout:** `min-h-screen pt-16 sm:pt-20`, grid `grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- **Background:** Full-bleed image; overlay `bg-cream-50/75`; optional gold gradient line `from-gold/40 to-transparent` on right (desktop)
- **Badge:** `inline-flex px-4 py-2 border-2 border-gold rounded-full font-accent text-xs uppercase tracking-wider text-gold`
- **Headline:** `font-display text-4xl…lg:text-7xl font-bold text-stone-900 mb-4`
- **Subheadline:** `font-display text-2xl…lg:text-5xl font-bold text-gold mb-6`
- **Body:** `font-body text-lg text-muted max-w-xl mb-8`
- **CTAs:** `flex flex-col sm:flex-row gap-4` — primary + secondary buttons
- **Trust bar:** Icons `w-5 h-5 text-gold`; text mix of `font-bold text-gold` and `text-muted`
- **Right card (desktop):** Image or fallback `bg-cream-200` with gold icon; `rounded-2xl shadow-2xl`
- **Alignment:** Center on mobile, `lg:text-left` / `lg:justify-start` on desktop

### Feature Sections (Why Choose Us, etc.)
- **Layout:** `grid grid-cols-1 md:grid-cols-2 gap-8` for feature cards
- **Card:** `bg-cream-200 border border-cream-300 rounded-xl p-6 h-full`
- **Icon:** `w-10 h-10 text-gold mb-4`
- **Title:** `font-display text-xl font-bold text-stone-900 mb-3`
- **Description:** `font-body text-muted`
- **Stats row:** Flex/grid with `border-t border-cream-300 pt-8`; values `font-display text-2xl md:text-3xl font-bold text-gold`; labels `font-body text-muted text-sm`; vertical divider `w-px h-12 bg-cream-300`
- **Spacing:** Section `py-20 lg:py-28`; section heading via SectionHeading (`mb-12`)

### Cards / Content Blocks
- **ServiceCard (grid):** `bg-cream-200 border border-cream-300 rounded-xl overflow-hidden`; image `h-48`; content `p-6`; hover `hover:border-gold hover:shadow-gold-glow`; focus `focus-within:ring-2 focus-within:ring-gold`; link `text-gold hover:text-gold-dark`
- **TestimonialCard:** Same base; `p-4 sm:p-6`; stars `text-gold fill-gold`; quote `text-muted italic`; avatar `rounded-full ring-2 ring-gold`
- **ClientTypeCard (compact):** Same cream-200/cream-300 card; icon, title, description, checklist with `CheckCircle` gold
- **QualityProcess step card:** `bg-cream-50 border border-cream-300 rounded-xl p-8 text-center`; number circle `w-16 h-16 rounded-full bg-gold text-cream-50 font-display text-2xl font-bold`
- **Border radius:** `rounded-xl` standard; `rounded-2xl` for hero image and some CTAs; `rounded-full` for badges, avatars, buttons
- **Shadow:** Default cards no shadow; hover `shadow-gold-glow`; loading spinner uses `border` only

### Forms (QuoteForm)
- **Container:** `space-y-6`
- **Labels:** `block font-body text-sm font-medium text-stone-900 mb-2`; required asterisk `text-gold`
- **Inputs:** `w-full px-4 py-3 bg-cream-200 border border-cream-300 rounded-lg text-stone-900 placeholder:text-muted focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300`; error state `border-red-500`
- **Error message:** `mt-1 text-sm text-red-400`
- **Success block:** `bg-gold/20 border border-gold rounded-lg p-4 text-gold`
- **Select:** Same as input; options `bg-cream-200`
- **Buttons:** Primary submit via Button component

### Buttons
- **Base:** `inline-flex items-center justify-center gap-2 font-accent font-medium rounded-lg transition-all duration-300`
- **Primary:** `bg-gold text-stone-900 hover:bg-gold-dark hover:scale-105 shadow-md hover:shadow-gold-glow`
- **Secondary:** `border-2 border-gold text-gold hover:bg-gold hover:text-stone-900 hover:scale-105`
- **Ghost:** `text-gold hover:text-gold-dark hover:underline`
- **Sizes:** sm `px-4 py-2 text-sm`; md `px-6 py-3 text-base`; lg `px-8 py-4 text-lg`
- **Border radius:** `rounded-lg`
- **Disabled:** `disabled:opacity-50 disabled:cursor-not-allowed`

### Footer
- **Layout:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`; main block `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8`
- **Background:** `bg-cream-100 text-stone-900 border-t-2 border-gold/20`
- **Logo:** `inline-flex rounded-lg bg-cream-50 border border-stone-900/20 mb-4`; Image `h-16`
- **Column titles:** `font-display text-lg font-bold mb-4`
- **Links:** `font-body text-muted hover:text-gold transition-colors duration-300`; services column `text-sm`
- **Contact:** Icons `w-4 h-4 text-gold`; text muted with hover gold
- **Social:** `flex justify-center gap-6`; icons `w-5 h-5 text-muted hover:text-gold`
- **Bottom bar:** `border-t border-cream-300 pt-6`; flex column/row `justify-between items-center gap-4`; copyright and Terms link `text-muted text-sm`

---

## 6. Spacing System

- **Container padding:** `px-4 sm:px-6 lg:px-8`
- **Section vertical:** `py-20 lg:py-28` (standard sections); stats bar `py-12 md:py-16`
- **Card padding:** `p-6` (cards), `p-4 sm:p-6` (testimonials), `p-8` (quality steps, CTA blocks)
- **Gap between elements:** `gap-4`, `gap-6`, `gap-8`, `gap-12` (grids and flex)
- **Heading margin:** `mb-4`, `mb-6`, `mb-8`; SectionHeading `mb-12`
- **Container width:** `max-w-7xl` (1280px) site-wide
- **Form:** `space-y-6` between fields; label to input `mb-2`

---

## 7. Responsive Behavior

- **Breakpoints:** Tailwind default (sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px). Primary usage: `sm:`, `md:`, `lg:`.
- **Mobile:** Single column; stacked CTAs; nav in drawer; testimonial carousel; stats 2x2 grid; footer stacked.
- **Tablet (md):** Two-column grids (services, clients, features); footer 2 columns; some typography steps up.
- **Desktop (lg):** Three-column service grid; nav inline; hero two columns with image; footer 4 columns; testimonial grid; full CTA row.
- **Navbar:** `lg:flex` / `lg:hidden` for desktop vs mobile menu.
- **Hero:** Text sizes and alignment switch at `lg:`; right image card `hidden lg:block`.
- **Section padding:** `py-20 lg:py-28` increases on large screens.
- **Page heroes:** `min-h-[40vh] md:min-h-[50vh] lg:min-h-[55vh]`; content padding `py-12 sm:py-16 lg:py-20`.

---

## 8. Tailwind Utility Patterns

### Shadows
- **Custom:** `shadow-gold-glow` (0 0 20px rgba(200,155,60,0.25)); `shadow-card-hover` (0 20px 40px rgba(120,90,40,0.15))
- **Standard:** `shadow-lg` (navbar when scrolled); `shadow-md` (primary button); `shadow-2xl` (hero image card)

### Border Radius
- **Cards/surfaces:** `rounded-xl`
- **Hero image, CTA blocks:** `rounded-2xl`
- **Buttons, inputs:** `rounded-lg`
- **Badges, avatars, dots, scroll button:** `rounded-full`

### Flex / Grid
- **Center content:** `flex items-center justify-center`; with direction `flex-col` on mobile
- **Section layout:** `flex flex-col md:flex-row items-center justify-between gap-8`
- **Grids:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Gap:** `gap-2`, `gap-4`, `gap-6`, `gap-8`, `gap-12`

### Container Widths
- **Main:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Text constraint:** `max-w-xl`, `max-w-2xl` for readability

### Transitions
- **Common:** `transition-colors duration-300`, `transition-all duration-300`
- **Nav underline:** `transition-all duration-300`
- **Button hover:** `duration-300` with scale

### Animations (Framer Motion + CSS)
- **fadeUp:** opacity 0→1, y 50→0 (or 20px)
- **fadeLeft / fadeRight:** x ±50→0
- **scaleIn:** scale 0.8→1
- **CSS:** `fadeUp` 0.6s ease; `float` 3s ease-in-out infinite; `shimmer` for skeleton

---

## 9. UI Improvement Opportunities

Suggestions are visual-only (no layout or functionality changes).

### Color Palette
- **Contrast:** Ensure `text-muted` (#7A6A52) and `text-stone-900` meet WCAG AA on cream backgrounds; consider a slightly darker muted for body paragraphs if needed.
- **Gold consistency:** Gold is used for both primary actions and decorative elements; consider reserving a brighter or more saturated gold only for CTAs to strengthen hierarchy.
- **Cream differentiation:** cream-50, 100, 200 are close in value; a slightly stronger step between 100 and 200 could improve section separation without changing layout.

### Visual Hierarchy
- **Section headings:** Add a subtle gold underline or small icon below SectionHeading to reinforce section start without changing structure.
- **Card hierarchy:** In dense grids (e.g. services), a very light inner shadow or a slightly stronger border on cream-300 could make cards feel more defined.
- **CTA prominence:** The gold gradient CTA banner (variant "gold") could use a touch more contrast (e.g. slightly darker gold-dark in the gradient) so the secondary button stands out more.

### Contrast
- **Focus states:** Keep `focus:ring-gold` and `focus:ring-offset-cream-200`; ensure focus is visible on cream-200 inputs (already good).
- **Error state:** Pair `border-red-500` with a slightly darker red for error text (e.g. red-600) if the current red-400 feels light on cream.

### Shadows
- **Cards:** Apply a very soft default shadow (e.g. a custom `shadow-card` with minimal offset and cream/gold tint) so cards don’t rely only on border; keep `shadow-gold-glow` for hover.
- **Navbar:** When scrolled, a slightly warmer shadow (e.g. cream or gold tint) could align with the rest of the palette.
- **Buttons:** Primary could use a subtle gold-tinted shadow at rest (not only on hover) for depth.

### Gradients
- **Hero accent line:** The `from-gold/40 to-transparent` line is subtle; a slightly wider or stronger gradient could reinforce the brand without changing layout.
- **CTA gold banner:** Fine-tune the `from-gold to-gold-dark` gradient (stops or ratio) so it doesn’t look flat; a hint of a third tone (e.g. cream-50 at one edge) could add depth.

### Hover Effects
- **Cards:** Consider a very slight scale (e.g. 1.01) on card hover in addition to border and shadow for a more responsive feel.
- **Footer links:** Current `hover:text-gold` is clear; adding a short underline or slight bold on hover could improve affordance.
- **Nav links:** The gold underline is strong; ensure motion duration stays under ~300ms for snappy feedback.

---

*End of Design Documentation. Use this document alongside COLORS.md when updating the visual design.*
