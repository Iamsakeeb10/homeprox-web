# Home Page Hero Section UI Design

## Overview

The Home Page hero is a bold, full-screen video hero designed for a premium B2B property maintenance brand.

- Layout: full viewport-height video hero with dark overlays and a glass-panel feature card.
- Structure: left-focused headline and CTAs, right-side floating glass card on large screens, bottom marquee strip.
- Visual style: charcoal/teal contrast, blurred glass surfaces, subtle diagonal texture, and a polished motion-driven entrance.

## Core Visuals

### Background

- Full-screen video background: `/videos/hero.mp4`
- Video treatment:
  - `object-cover` to fill the section
  - dark overlay with `bg-charcoal/72`
  - vignette gradient from `from-charcoal/60 via-charcoal/30 to-charcoal/55`
- Overlay:
  - `.hero-texture` diagonal line texture overlay on top of the video
  - bottom gradient panel so the marquee strip transitions cleanly
- Top accent line:
  - thin horizontal teal gradient bar across the top of the hero section

### Section Container

- Section wrapper: `relative flex flex-col bg-hero-bg-dark overflow-hidden pt-20`
- Height is locked to `100dvh` so the hero and marquee occupy the viewport cleanly.

## Content Layout

### Left Column (Primary Messaging)

- Heading area designed for large, dramatic copy with strong hierarchy.
- Elements:
  - Eyebrow: `Texas Statewide Property Maintenance` inside a pill-shaped badge with teal pulse dot and subtle border.
  - Headline: stacked text with `Expert Property`, `Maintenance Services`, and a secondary `Across Texas` line.
  - Subheadline: trusted by property managers, investors, banks, and institutions for reliable statewide maintenance.
  - CTA row:
    - primary button: `Get a Free Quote`
    - secondary button: `Explore Services`
  - Trust chips row:
    - `Licensed & Insured`
    - `Fast Scheduling`
    - `Photo Docs`
    - `Statewide Coverage`
  - Quick contact strip:
    - phone icon + supporting copy with same-day response call link

### Right Column (Glass Feature Panel)

- Visible only on `lg` and above.
- Styled as a floating glass card with blurred background, charcoal-tinted panel, white border, and shadow.
- Header: `HomeProX Services` label + `Why Clients Choose Us` title with a live indicator pill.
- Stats grid:
  - `500+ Properties Maintained`
  - `10+ Years of Leadership`
  - `100% Certified & Bonded`
  - `7 Service Categories`
- Highlights list: four service-focus items with teal check icons.
- Card footer CTA: `Request a free property assessment`.

## Bottom Marquee Strip

- Full-width strip pinned to the bottom of the hero.
- Uses edge fade masks on both sides for a smooth visual transition.
- Includes a continuous marquee of service items and company differentiators.
- Reduced-motion mode falls back to a wrapped list of items instead of animation.

## Typography & Branding

- Font usage:
  - `font-display` for the main headline and stat values
  - `font-accent` for badges, labels, and CTA highlights
  - `font-body` for subheadings, copy, chips, and lists
- Colors:
  - primary dark: `--color-hero-bg-dark` / `--color-charcoal`
  - accent teal: `--color-teal`
  - hero text: `--color-hero-text` (white)
  - muted body: `--color-hero-muted`

## Responsive Behavior

- Mobile: content stacks in a single column with centered layout.
- Desktop: two-column layout with text on the left and a large glass card on the right.
- The marquee remains visible at the bottom across breakpoints.

## Accessibility & UX

- Motion transitions respect `useReducedMotion()`.
- Text contrast is high over dark backgrounds and overlays.
- Buttons are large and accessible for mobile tap targets.
- The hero uses semantic section structure and meaningful link targets.

## File Reference

- Component: `src/components/sections/Hero.tsx`
- Home page entry: `src/app/page.tsx`
- CSS: `src/app/globals.css`
