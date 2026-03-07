# MEGAFIXX Home Services — Complete Visual Redesign Documentation

> **Theme Direction:** Clean professional white — Architectural minimalism meets premium service brand.
> Sharp contrasts, refined navy accents, generous whitespace, and subtle depth cues that communicate trust and precision.

---

## 1. Design Philosophy

The new identity moves away from warm creams and gold-heavy UI toward a **crisp white + deep navy + steel blue** palette — the visual language of premium service companies (think high-end contractors, property management, and facility services firms). Gold is retired as a primary brand color and repositioned as a **selective prestige accent only** — used sparingly on key badges, star ratings, and top-tier CTA moments.

**Core Principles:**
- White is the dominant surface. Everything else supports it.
- Navy anchors headings and the footer; it conveys authority.
- Steel blue is the interactive/action color — links, hover states, buttons.
- Gold survives as a prestige whisper — not a background or border system.
- Typography becomes more editorial: a condensed geometric display font paired with a refined sans-serif body.

---

## 2. New Color Palette

Replace **all** `@theme` color tokens in `src/app/globals.css`.

### Full Token Replacement

```css
@theme {
  /* === PRIMARY SURFACES === */
  --color-white:        #FFFFFF;   /* Pure page background */
  --color-surface-50:   #F8F9FB;   /* Section alt background (near-white cool) */
  --color-surface-100:  #EFF2F7;   /* Cards, form inputs, stats bar */
  --color-surface-200:  #E2E8F2;   /* Card borders, dividers, skeleton */
  --color-surface-300:  #C8D3E6;   /* Stronger borders, inactive elements */

  /* === NAVY (Primary Brand Dark) === */
  --color-navy:         #0F1F3D;   /* Primary headings, footer bg, strong CTAs */
  --color-navy-light:   #1A3260;   /* Hover/active nav, secondary headings */
  --color-navy-muted:   #3D557A;   /* Subdued navy — subheadings, icons on dark */

  /* === STEEL BLUE (Interactive / Action Color) === */
  --color-blue:         #2563EB;   /* Buttons, links, focus rings, active states */
  --color-blue-dark:    #1D4ED8;   /* Button hover, link hover */
  --color-blue-light:   #EFF6FF;   /* Button ghost bg hover, form focus bg tint */

  /* === GOLD (Prestige Accent — use sparingly) === */
  --color-gold:         #C89B3C;   /* Stars, prestige badge only */
  --color-gold-light:   #FEF3C7;   /* Badge background behind gold text */

  /* === TEXT === */
  --color-text-primary: #0F1F3D;   /* All headings (= navy) */
  --color-text-body:    #374151;   /* Body paragraphs */
  --color-text-muted:   #6B7280;   /* Captions, placeholders, subtitles */
  --color-text-inverse: #FFFFFF;   /* Text on navy/blue backgrounds */

  /* === UTILITY === */
  --color-error:        #DC2626;   /* Form errors */
  --color-success:      #16A34A;   /* Form success */
  --color-divider:      #E2E8F2;   /* Horizontal rules, table lines */

  /* === SHADOWS === */
  --shadow-card:        0 1px 3px rgba(15,31,61,0.06), 0 4px 12px rgba(15,31,61,0.06);
  --shadow-card-hover:  0 4px 16px rgba(15,31,61,0.12), 0 12px 32px rgba(15,31,61,0.08);
  --shadow-blue-glow:   0 0 0 3px rgba(37,99,235,0.20);
  --shadow-navbar:      0 1px 0 rgba(15,31,61,0.06), 0 4px 16px rgba(15,31,61,0.08);
}
```

### Color Usage Map

| Old Token | New Token | Rationale |
|-----------|-----------|-----------|
| `bg-cream-50` | `bg-white` | Pure white page surface |
| `bg-cream-100` | `bg-surface-50` | Near-white cool section alt |
| `bg-cream-200` | `bg-surface-100` | Cards and inputs |
| `bg-cream-300` | `bg-surface-200` | Borders and dividers |
| `text-muted` | `text-text-muted` (→ `#6B7280`) | Neutral gray instead of warm brown |
| `bg-gold` | `bg-blue` | Primary action color (buttons) |
| `hover:bg-gold-dark` | `hover:bg-blue-dark` | Button hover |
| `text-gold` (links) | `text-blue` | Clickable text |
| `border-gold` | `border-blue` | Focus and active borders |
| `text-gold` (decorative) | `text-gold` (stars/badges only) | Gold kept as prestige accent only |
| `bg-cream-100` (footer) | `bg-navy` | Rich navy footer |
| `text-stone-900` (headings) | `text-navy` | Navy replaces stone-900 for headings |

---

## 3. Typography — Updated

### Font Stack Changes

**Replace in `app/layout.tsx`:**

```typescript
// REMOVE
import { Barlow_Condensed, DM_Sans, Barlow } from 'next/font/google'

// ADD
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'

const display = Outfit({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
})

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})
```

**Update `@theme` in globals.css:**
```css
--font-display: 'Outfit', sans-serif;   /* Geometric, modern, confident */
--font-body:    'Plus Jakarta Sans', sans-serif; /* Clean, humanist, readable */
--font-accent:  'Outfit', sans-serif;   /* Unified — no third font needed */
```

> **Why Outfit + Plus Jakarta Sans?**
> Outfit is geometric without feeling cold — sharp for headings, strong at any weight.
> Plus Jakarta Sans has excellent readability at small sizes and a slightly humanist touch that warms the UI.

### Heading Style Changes

- All `font-display` stays — only the font family changes.
- `font-accent` — consolidate to also use Outfit (remove Barlow references).
- `text-stone-900` on headings → `text-navy` everywhere.
- Hero H1 color: `text-navy` (not stone).
- Gold subheadline in hero: **remove**. Use `text-blue` or `text-navy-muted` for the second headline.

---

## 4. Component-by-Component Changes

### 4.1 Global CSS (`globals.css`)

```css
body {
  background-color: var(--color-white);
  color: var(--color-text-body);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

/* Thin top accent line — brand signature */
body::before {
  content: '';
  display: block;
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-navy) 0%, var(--color-blue) 60%, var(--color-navy) 100%);
  z-index: 100;
}
```

---

### 4.2 Navbar

**Current:** Transparent → cream-50/95 on scroll. Gold active states.

**New design:**
```
Unscrolled:  bg-white/90  backdrop-blur-md  border-b border-transparent
Scrolled:    bg-white/98  backdrop-blur-md  shadow-navbar  border-b border-surface-200
```

**Token changes:**
- `text-stone-900` → `text-navy` (all links)
- `hover:text-gold` → `hover:text-blue`
- Active underline: `bg-gold` → `bg-blue`
- CTA Button: `bg-blue text-white` (was gold)
- Mobile menu: `bg-white border-t border-surface-200`

**Logo pill:** Remove the optional background pill entirely. On white background it's unnecessary.

---

### 4.3 Hero Section (Home)

**Current:** Background image + `bg-cream-50/75` overlay. Right card with `bg-cream-200` fallback.

**New design — two approaches, choose one:**

**Option A — Split layout with no image overlay (recommended for professional look):**
```
Left half:   bg-white  (content column)
Right half:  bg-navy   (image column — image placed here as object-cover with no overlay needed)
Separator:   absolute vertical gradient  from-blue/30 to-transparent
```

**Option B — Full-bleed image with sharper overlay:**
```
Overlay:    bg-navy/70  (replaces cream-50/75 — much sharper, higher contrast)
All text:   text-white
Subhead:    text-blue-light or text-surface-100
Badge:      border-blue/60  text-blue-light
```

**Badge style (both options):**
```
Old: border-2 border-gold rounded-full text-gold
New: bg-blue/10 border border-blue/30 rounded-full text-blue font-medium tracking-wide
```

**Hero CTAs:**
```
Primary:   bg-blue text-white hover:bg-blue-dark  (replaces gold)
Secondary: border-2 border-navy text-navy hover:bg-navy hover:text-white  (replaces gold outline)
```

**Trust bar icons:** `text-blue` (was `text-gold`)

**Right image card fallback:**
```
Old: bg-cream-200 with gold icon
New: bg-surface-100 border border-surface-200 with blue icon
```

---

### 4.4 StatsBar

```
Old: bg-cream-200  text-gold (values)
New: bg-surface-50  text-navy (values)  text-text-muted (labels)
     border-y border-surface-200
     vertical dividers: bg-surface-300
```

Stat numbers: `font-display text-3xl font-bold text-navy`

---

### 4.5 Section Headings (SectionHeading component)

**Add a blue rule under the heading:**
```tsx
// After the H2, add:
<div className="mt-4 flex items-center gap-3">
  <span className="block h-0.5 w-12 bg-blue rounded-full" />
  <span className="block h-0.5 w-4 bg-surface-300 rounded-full" />
</div>
```

This replaces any gold decorative accents under headings.

Heading color: `text-navy` (was `text-stone-900`)
Subtitle text: `text-text-muted`

---

### 4.6 ServicesSection / ServiceCard

```
Card:     bg-white border border-surface-200 rounded-xl shadow-card
Hover:    hover:border-blue/40 hover:shadow-card-hover  hover:-translate-y-1
Image:    object-cover h-48  (no change)
Title:    text-navy font-display font-bold
Desc:     text-text-muted
Link:     text-blue hover:text-blue-dark  font-medium
Icon/arrow: text-blue
```

Remove: `hover:shadow-gold-glow` → `hover:shadow-card-hover`

---

### 4.7 Why Choose Us / Feature Cards

```
Section bg:  bg-surface-50
Card:        bg-white border border-surface-200 rounded-xl p-6 shadow-card
Icon:        text-blue  (was text-gold)
Title:       text-navy
Description: text-text-body

Stats row (below the grid):
  border-t border-surface-200
  Values:  text-navy font-display text-3xl font-bold
  Labels:  text-text-muted text-sm
  Divider: bg-surface-300
```

---

### 4.8 QualityProcess

```
Section bg:   bg-white
Connector line: bg-surface-200  (was gold/30)

Step card:    bg-surface-50 border border-surface-200 rounded-xl p-8 text-center
              hover:border-blue/30 hover:shadow-card

Step number circle:
  Old: bg-gold text-cream-50
  New: bg-navy text-white
  OR:  ring-2 ring-blue bg-blue/10 text-blue  (for lighter feel)
```

---

### 4.9 Testimonials

```
Card:   bg-white border border-surface-200 rounded-xl shadow-card
Stars:  text-gold fill-gold  ← KEEP gold here (prestige accent = star ratings ✓)
Quote:  text-text-muted italic
Avatar: ring-2 ring-blue/30  (was ring-gold)
Name:   text-navy font-semibold
Role:   text-text-muted text-sm

Carousel dots:
  Active:   bg-blue
  Inactive: bg-surface-200
```

---

### 4.10 CTABanner

**Replace gold gradient entirely:**

```
Variant "primary" / "navy":
  bg: bg-navy
  text: text-white
  heading: text-white
  subtext: text-surface-200
  Primary button: bg-blue text-white hover:bg-blue-dark
  Secondary button: border-2 border-white/40 text-white hover:bg-white hover:text-navy

Variant "blue":
  bg: bg-blue
  text: text-white
  Primary button: bg-white text-blue hover:bg-surface-50
  Secondary button: border-2 border-white/50 text-white hover:bg-white/10

Variant "light":
  bg: bg-surface-50 border-y border-surface-200
  heading: text-navy
  Primary button: bg-blue text-white
  Secondary button: border-2 border-navy text-navy hover:bg-navy hover:text-white
```

Remove all `from-gold to-gold-dark` gradient variants.

---

### 4.11 ContactSection / QuoteForm

```
Section bg:  bg-surface-50

Labels:      text-navy text-sm font-medium  (was stone-900)
Required *:  text-blue  (was text-gold)

Inputs:
  bg-white border border-surface-200 rounded-lg
  focus:ring-2 focus:ring-blue focus:border-blue
  placeholder:text-text-muted
  text-text-primary
  (remove bg-cream-200 — inputs are white on surface-50 background)

Error:       border-error text-error
Success:     bg-blue/10 border border-blue/30 text-blue rounded-lg p-4

Submit button: bg-blue text-white hover:bg-blue-dark (full width, rounded-lg)
```

---

### 4.12 ClientsSection / ClientTypeCard

```
Card:      bg-white border border-surface-200 rounded-xl
Hover:     hover:border-blue/40 hover:shadow-card-hover
Icon:      text-blue
Title:     text-navy
Desc:      text-text-muted
Checklist: CheckCircle icon  text-blue  (was text-gold)
```

---

### 4.13 Footer

**Complete redesign — navy background:**

```
Outer:       bg-navy text-white  border-t-0  (remove gold border)
Inner:       max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16

Logo container: bg-navy-light border border-white/10 rounded-xl inline-flex p-2
                (or use white logo variant if available)

Column titles:  text-white font-display font-bold text-lg mb-4

Links:
  text-surface-300 hover:text-white transition-colors duration-200
  (was text-muted hover:text-gold)

Contact row icons:  text-blue  (maintains interaction color on dark)

Social icons:
  text-surface-300 hover:text-white
  On hover: gentle scale-110

Divider (top of bottom bar):
  border-t border-white/10  (was border-cream-300)

Copyright text:  text-surface-300 text-sm
Terms link:      text-surface-300 hover:text-white underline-offset-2 hover:underline
```

**Bottom bar accent strip (optional — adds polish):**
```css
.footer-accent {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-blue), transparent);
  opacity: 0.4;
}
```

---

### 4.14 Buttons (Button component)

```tsx
// Primary
"bg-blue text-white hover:bg-blue-dark hover:scale-105 shadow-sm hover:shadow-blue-glow"

// Secondary
"border-2 border-navy text-navy hover:bg-navy hover:text-white hover:scale-105"

// Ghost
"text-blue hover:text-blue-dark hover:underline underline-offset-4"

// On dark backgrounds (inside CTABanner/Footer)
"bg-white text-navy hover:bg-surface-50"
// or
"border-2 border-white/50 text-white hover:bg-white hover:text-navy"
```

Remove: all `bg-gold`, `hover:bg-gold-dark`, `border-gold`, `text-gold` from button variants.

---

### 4.15 ScrollToTop Button

```
Old: bg-gold text-stone-900
New: bg-blue text-white hover:bg-blue-dark shadow-md hover:shadow-blue-glow
```

---

### 4.16 Page Heroes (inner pages: /services, /clients, /about, /contact)

**Current:** Background image + overlay, cream tones.

**New:**
```
Option A — Clean header with no image:
  bg-navy  text-white
  Breadcrumb / tagline: text-blue-light or text-surface-200
  min-h-[32vh] flex items-end pb-12 (shorter and sharper)

Option B — Image retained, improved overlay:
  overlay: bg-navy/75  (replaces cream overlay — stronger, no washed-out effect)
  All text: text-white
  Tagline: text-surface-200
  Badge: bg-white/10 border border-white/20 text-white
```

**Recommended: Option A** for /contact and /about (no image needed — navy bg is cleaner and more professional). Option B for /services and /clients where imagery reinforces the service.

---

### 4.17 404 Page

```
"404" number:  text-surface-100  (barely visible watermark)
               with text-navy at reduced opacity: text-navy/10
Heading:       text-navy
Body:          text-text-muted
CTAs:          Primary blue + Secondary navy outline
```

---

### 4.18 Loading UI

```
Spinner border:  border-surface-200  with border-t-blue  (replaces any gold spinner)
Logo:            centered, normal
```

---

### 4.19 AnimatedSection

No changes to motion values. Update:
- `fadeUp` stays, keep y offsets.
- Ensure no gold-colored placeholder states exist during skeleton load.

**Skeleton:**
```
bg-surface-100  (shimmer animation stays)
shimmer gradient: from-surface-100 via-surface-50 to-surface-100
```

---

## 5. Background Images — Overlay Fix

The cream overlay was washing out images. These new overlay values restore vibrancy:

| Section | Old Overlay | New Overlay |
|---------|-------------|-------------|
| Home Hero | `bg-cream-50/75` | `bg-navy/65` — Option B; or remove for Option A split |
| Page Heroes | `bg-cream-50/70` | `bg-navy/70` |
| CTA Banner | `from-gold to-gold-dark` | `bg-navy` solid OR `bg-blue` solid |
| Any section with image bg | Any cream overlay | `bg-navy/60` minimum |

**Rule:** Never use a light/warm overlay on background images. Dark navy overlays preserve image contrast and improve text legibility. Minimum opacity: 60%.

---

## 6. Spacing — No Changes Required

The existing spacing system (`py-20 lg:py-28`, `max-w-7xl`, `gap-8`, etc.) is well-constructed and should be preserved entirely. The redesign is purely about color and typographic tokens.

---

## 7. Accent Details to Add

These small details elevate the design without touching layout:

### Section divider pattern
Between alternating sections, instead of relying purely on background color shifts, add:
```html
<div class="h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
```

### Card top accent bar (optional — for hero cards / featured items)
```html
<div class="h-1 bg-blue rounded-t-xl absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" />
```

### Focus ring global update
```css
/* globals.css */
:focus-visible {
  outline: 2px solid var(--color-blue);
  outline-offset: 3px;
  border-radius: 4px;
}
```

### Selection color
```css
::selection {
  background-color: var(--color-blue-light);
  color: var(--color-navy);
}
```

---

## 8. Quick-Reference: All Token Replacements

| Find (old) | Replace with (new) |
|------------|-------------------|
| `bg-cream-50` | `bg-white` |
| `bg-cream-100` | `bg-surface-50` |
| `bg-cream-200` | `bg-surface-100` |
| `bg-cream-300` | `bg-surface-200` |
| `border-cream-300` | `border-surface-200` |
| `text-muted` | `text-text-muted` |
| `text-stone-900` | `text-navy` (headings) or `text-text-body` (body) |
| `bg-gold` | `bg-blue` |
| `text-gold` (interactive) | `text-blue` |
| `border-gold` (interactive) | `border-blue` |
| `hover:bg-gold-dark` | `hover:bg-blue-dark` |
| `hover:text-gold` | `hover:text-blue` |
| `focus:ring-gold` | `focus:ring-blue` |
| `shadow-gold-glow` | `shadow-card-hover` |
| `ring-gold` | `ring-blue/30` |
| `from-gold to-gold-dark` (CTA) | `bg-navy` (solid) |
| `text-gold` (stars only) | `text-gold fill-gold` ✅ KEEP |
| Footer `bg-cream-100` | `bg-navy` |

---

## 9. Implementation Checklist

- [ ] Update `@theme` tokens in `globals.css` (Section 2)
- [ ] Update font imports in `layout.tsx` (Section 3)
- [ ] Update `globals.css` body styles + accent line (Section 4.1)
- [ ] Update Navbar colors and CTA button (Section 4.2)
- [ ] Update Hero overlay, badge, and CTA buttons (Section 4.3)
- [ ] Update StatsBar (Section 4.4)
- [ ] Add blue rule to SectionHeading (Section 4.5)
- [ ] Update all cards: ServiceCard, FeatureCard, ClientTypeCard (4.6, 4.7, 4.12)
- [ ] Update QualityProcess step numbers (Section 4.8)
- [ ] Update Testimonials dots and avatar rings (Section 4.9)
- [ ] Replace CTABanner gradient (Section 4.10)
- [ ] Update ContactSection form inputs (Section 4.11)
- [ ] Update Footer to navy theme (Section 4.13)
- [ ] Update Button component variants (Section 4.14)
- [ ] Update ScrollToTop button (Section 4.15)
- [ ] Update Page Heroes (Section 4.16)
- [ ] Update 404 page (Section 4.17)
- [ ] Update Loading/Skeleton (Section 4.18)
- [ ] Update all background image overlays (Section 5)
- [ ] Add accent details (Section 7)

---

*End of Redesign Documentation — MEGAFIXX Home Services LLC*
