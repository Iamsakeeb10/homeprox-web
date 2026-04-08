# Home Page Hero Section UI Design

## Overview

The Home Page hero section is a full-screen, immersive hero block designed to position HomeProX as a premium statewide property maintenance provider.

- Layout: full-screen hero section with a dark image background and layered overlays.
- Structure: 2-column responsive grid with a main headline/call-to-action column on the left and a feature-stat cards column on the right.
- Visual style: dark charcoal/teal branding, soft blurred glass cards, tinted image overlay, and subtle geometric texture.

## Core Visuals

### Background

- Full-screen background image: `src/images/heroes/hero.jpg`
- Image treatment:
  - `object-cover` to fill the section
  - `brightness-[0.62]` for darkening
  - `contrast-110`
- Overlay:
  - solid gradient overlay from `from-charcoal/80` through `via-charcoal/72` to `to-charcoal/88`
  - additional `.hero-texture` overlay with diagonal line texture at very low opacity
- Top accent line:
  - thin teal gradient bar across the top inside the hero section

### Section Container

- Section classes: `relative min-h-screen flex flex-col bg-hero-bg overflow-hidden pt-20`
- The hero is intentionally stretched to viewport height with room for navigation spacing.

## Content Layout

### Left Column (Text)

- Responsive positioning:
  - centered text on smaller screens
  - left-aligned text on larger screens
- Elements:
  - Eyebrow badge: `Texas Statewide Property Maintenance`
    - uses `bg-teal/15`, border, rounded-full pill style, and animated pulse dot
  - Main headline:
    - H1 text: `Expert Property Maintenance Across Texas`
    - accent color: `text-teal` on the phrase `Across Texas`
  - Body copy:
    - descriptive text focusing on trusted service for property managers, investors, and institutions
  - CTA buttons:
    - primary button: `Get a Free Quote`
    - secondary button: `View Our Services`
    - styled with white text over transparent/dark border on the secondary CTA

### Right Column (Stat Cards)

- Grid of 4 cards arranged as 2 columns
- Each card includes:
  - icon circle with teal accent
  - bold metric value
  - supporting label text
- Metrics:
  1. `500+ Properties Maintained Statewide`
  2. `10+ Years of Industry Leadership`
  3. `100% Fully Certified & Bonded`
  4. `7 Specialized Service Categories`
- Card interaction:
  - subtle fade-up animation using Framer Motion
  - hover state with darker blurred surface and teal border glow
  - cards use `backdrop-blur-md`, `shadow-card`, and `rounded-2xl`

## Bottom Trust Strip

- A full-width bottom bar sits below the hero content.
- Includes light text on a translucent dark background with a soft top border.
- Trust points shown inline:
  - `HomeProX`
  - `Comprehensive Regional Coverage`
  - `Custom Property Solutions`
  - `Professional Portfolio Management`
  - `Institutional Quality Standards`
- Uses responsive separators that appear on `sm` and above.

## Typography & Branding

- Font usage:
  - `font-display` for headings and prominent text
  - `font-accent` for badges and accent copy
  - `font-body` for paragraph text and labels
- Colors:
  - primary dark/charcoal: `--color-charcoal`
  - accent teal: `--color-teal`
  - hero text: `--color-hero-text` (white)
  - muted hero copy: `--color-hero-muted`

## Responsive Behavior

- On smaller screens, the hero uses a single-column layout and centers content.
- On large screens (`min-[1131px]`), the hero switches to two columns with text left and stats right.
- CTA buttons and trust strip adapt to width, keeping spacing and alignment consistent.

## Accessibility & UX

- Uses semantic section and heading structure.
- Clear contrast with light text over dark overlay.
- Buttons are large and easy to tap on mobile.
- Motion respects reduced motion preference using `useReducedMotion()`.

## File Reference

- Component: `src/components/sections/Hero.tsx`
- Home page entry: `src/app/page.tsx`
- CSS: `src/app/globals.css`
