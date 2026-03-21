# HomeProX Image Inventory

Comprehensive reference of all images currently used in the project codebase. This is documentation only; no code has been modified.

---

## 1. Global / Layout Images

### 1.1 Logo — Navbar

- **Location:** `src/components/layout/Navbar.tsx`
- **Code Reference:**
  - `Image src="/images/logo.png" alt="HomeProX Services LLC" width={220} height={66} ...`
- **Source:** `/images/logo.png` (local asset)
- **UI Section:** Navbar logo (all pages)

### 1.2 Logo — Footer

- **Location:** `src/components/layout/Footer.tsx`
- **Code Reference:**
  - `Image src="/images/logo.png" alt="HomeProX Services LLC" width={220} height={66} ...`
- **Source:** `/images/logo.png` (local asset)
- **UI Section:** Footer logo (all pages)

### 1.3 Logo — Global Loading Screen

- **Location:** `src/app/loading.tsx`
- **Code Reference:**
  - `Image src="/images/logo.png" alt="HomeProX Services LLC" width={220} height={66} ...`
- **Source:** `/images/logo.png` (local asset)
- **UI Section:** Global loading overlay

### 1.4 Logo — 404 / Not Found Page

- **Location:** `src/app/not-found.tsx`
- **Code Reference:**
  - `Image src="/images/logo.png" alt="HomeProX Services LLC" width={220} height={66} ...`
- **Source:** `/images/logo.png` (local asset)
- **UI Section:** Not-found page header

---

## 2. Homepage Hero Collage Images

### 2.1 Hero Card 1 — General Property Maintenance

- **Location:** `src/components/sections/Hero.tsx`
- **Code Reference:**
  - `HERO_CARD_IMAGES[0].src` used in:
    - `<Image src={HERO_CARD_IMAGES[0].src} alt={HERO_CARD_IMAGES[0].alt} fill className="object-cover" sizes="360px" />`
- **Source:** `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=720&q=80`
- **UI Section:** Home hero — top-right collage card (“General Property Maintenance”)

### 2.2 Hero Card 2 — Gutter Cleaning

- **Location:** `src/components/sections/Hero.tsx`
- **Code Reference:**
  - `HERO_CARD_IMAGES[1].src` used in:
    - `<Image src={HERO_CARD_IMAGES[1].src} ... sizes="360px" />`
- **Source:** `https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=720&q=80`
- **UI Section:** Home hero — middle collage card (“Gutter Cleaning”)

### 2.3 Hero Card 3 — Drywall & Interior Painting

- **Location:** `src/components/sections/Hero.tsx`
- **Code Reference:**
  - `HERO_CARD_IMAGES[2].src` used in:
    - `<Image src={HERO_CARD_IMAGES[2].src} ... sizes="360px" />`
- **Source:** `https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=720&q=80`
- **UI Section:** Home hero — front/bottom collage card (“Drywall & Interior Painting”)

---

## 3. Services Data Images (Used in Service Cards)

These URLs are referenced in `src/lib/data/services.ts` and rendered via `ServiceCard` on the homepage and `/services` page.

### 3.1 Service 1 — General Property Maintenance & Minor Plumbing

- **Location:** `src/lib/data/services.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"`
- **Source:** `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80`
- **UI Section:** Service cards (home services grid; `/services` featured cards)

### 3.2 Service 2 — Gutter Cleaning & Preventative Maintenance

- **Location:** `src/lib/data/services.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=800&q=80"`
- **Source:** `https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=800&q=80`
- **UI Section:** Service cards

### 3.3 Service 3 — Drywall Repair & Interior Painting

- **Location:** `src/lib/data/services.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"`
- **Source:** `https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80`
- **UI Section:** Service cards

### 3.4 Service 4 — Property Cleaning Services

- **Location:** `src/lib/data/services.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80"`
- **Source:** `https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80`
- **UI Section:** Service cards

### 3.5 Service 5 — Landscaping & Exterior Property Maintenance

- **Location:** `src/lib/data/services.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"`
- **Source:** `https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80`
- **UI Section:** Service cards

### 3.6 Service 6 — Siding & Exterior Repairs

- **Location:** `src/lib/data/services.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"`
- **Source:** `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80`
- **UI Section:** Service cards

### 3.7 Service 7 — Property Cleanouts & Debris Removal

- **Location:** `src/lib/data/services.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80"`
- **Source:** `https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=80`
- **UI Section:** Service cards

---

## 4. Client Types Images

Defined in `src/lib/data/clients.ts` and used by `ClientImage` / `ClientTypeCard` on the homepage and `/clients` page.

### 4.1 Client Type 1

- **Location:** `src/lib/data/clients.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"`
- **Source:** `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80`
- **UI Section:** Client type cards (home + `/clients`)

### 4.2 Client Type 2

- **Location:** `src/lib/data/clients.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"`
- **Source:** `https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80`
- **UI Section:** Client type cards

### 4.3 Client Type 3

- **Location:** `src/lib/data/clients.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"`
- **Source:** `https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80`
- **UI Section:** Client type cards

### 4.4 Client Type 4

- **Location:** `src/lib/data/clients.ts`
- **Code Reference:**
  - `image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=900&q=80"`
- **Source:** `https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=900&q=80`
- **UI Section:** Client type cards

---

## 5. Testimonials Avatars

Defined in `src/lib/data/testimonials.ts` and used by `TestimonialCard` on homepage and `/clients`.

### 5.1 Testimonial 1 Avatar

- **Location:** `src/lib/data/testimonials.ts`
- **Code Reference:**
  - `avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"`
- **Source:** `https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150`
- **UI Section:** Testimonials carousel/grid

### 5.2 Testimonial 2 Avatar

- **Location:** `src/lib/data/testimonials.ts`
- **Code Reference:**
  - `avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"`
- **Source:** `https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150`
- **UI Section:** Testimonials

### 5.3 Testimonial 3 Avatar

- **Location:** `src/lib/data/testimonials.ts`
- **Code Reference:**
  - `avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150"`
- **Source:** `https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150`
- **UI Section:** Testimonials

### 5.4 Testimonial 4 Avatar

- **Location:** `src/lib/data/testimonials.ts`
- **Code Reference:**
  - `avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"`
- **Source:** `https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150`
- **UI Section:** Testimonials

### 5.5 Testimonial 5 Avatar

- **Location:** `src/lib/data/testimonials.ts`
- **Code Reference:**
  - `avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150"`
- **Source:** `https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150`
- **UI Section:** Testimonials

### 5.6 Testimonial 6 Avatar

- **Location:** `src/lib/data/testimonials.ts`
- **Code Reference:**
  - `avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150"`
- **Source:** `https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150`
- **UI Section:** Testimonials

---

## 6. Page Hero Background Images

These are large hero/banner images for various top-level pages.

### 6.1 Services Page Hero

- **Location:** `src/app/services/page.tsx`
- **Code Reference:**
  - `const heroImageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={heroImageUrl} alt="Professional property maintenance services" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** `/services` page hero background

### 6.2 Clients Page Hero

- **Location:** `src/app/clients/page.tsx`
- **Code Reference:**
  - `const heroImageUrl = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={heroImageUrl} alt="Property management professionals" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** `/clients` page hero background

### 6.3 About Page Hero

- **Location:** `src/app/about/page.tsx`
- **Code Reference:**
  - `const heroImageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={heroImageUrl} alt="HomeProX professional team at work" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** `/about` page hero background

### 6.4 Quote Page Hero

- **Location:** `src/app/quote/page.tsx`
- **Code Reference:**
  - `const heroImageUrl = "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={heroImageUrl} alt="Get a quote from HomeProX Home Services" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** `/quote` page hero background

### 6.5 Contact Page Hero

- **Location:** `src/app/contact/page.tsx`
- **Code Reference:**
  - `const CONTACT_HERO_IMAGE = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={CONTACT_HERO_IMAGE} alt="Contact HomeProX Home Services" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** `/contact` page hero background

### 6.6 Vendor Page Hero

- **Location:** `src/components/sections/VendorHero.tsx`
- **Code Reference:**
  - `const VENDOR_HERO_IMAGE = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={VENDOR_HERO_IMAGE} alt="Professional property maintenance and vendor network" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** `/vendors` page hero background

### 6.7 Services Page Hero Component

- **Location:** `src/components/sections/ServicesPageHero.tsx`
- **Code Reference:**
  - `const SERVICES_HERO_IMAGE = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={SERVICES_HERO_IMAGE} alt="HomeProX Home Services — property maintenance in Texas" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** Optional/alternate services hero (if used)

---

## 7. About Page “Team” and Coverage Images

### 7.1 Team Photo Card

- **Location:** `src/components/cards/TeamPhoto.tsx`
- **Code Reference:**
  - `const teamImageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80";`
  - `<Image src={teamImageUrl} alt="HomeProX property maintenance team" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80`
- **UI Section:** About page “team”/side image card

### 7.2 Coverage Background Image

- **Location:** `src/app/about/page.tsx`
- **Code Reference:**
  - `const coverageImageUrl = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80";`
  - `<Image src={coverageImageUrl} alt="Texas property maintenance coverage" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80`
- **UI Section:** About page coverage/regions section background

---

## 8. CTA Background / Pattern Images

### 8.1 Dark CTA Banner Background (Home)

- **Location:** `src/components/sections/CTABanner.tsx`
- **Code Reference:**
  - `const backgroundImageUrl = "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80";`
  - `<Image src={backgroundImageUrl} alt="Professional property maintenance services Texas" fill ... />`
- **Source:** `https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80`
- **UI Section:** Home dark CTA banner background

### 8.2 Vendor CTA Banner Pattern Overlay

- **Location:** `src/components/sections/VendorCTABanner.tsx`
- **Code Reference:**
  - Inline style:
    - `backgroundImage: "repeating-linear-gradient(45deg, #E8621A 0, #E8621A 1px, transparent 0, transparent 50%)"`
- **Source:** CSS pattern (no external URL)
- **UI Section:** Vendor page CTA background texture

### 8.3 Home Contact Strip Pattern Overlay

- **Location:** `src/components/sections/ContactSection.tsx`
- **Code Reference:**
  - Inline style:
    - `backgroundImage: "repeating-linear-gradient(45deg, #E8621A 0, #E8621A 1px, transparent 0, transparent 50%)"`
- **Source:** CSS pattern (no external URL)
- **UI Section:** Home “Ready to Get Started?” contact strip background texture

---

## 9. Summary

- **Local images:**
  - `"/images/logo.png"` used in Navbar, Footer, global loading, and 404 page.
- **Remote images:**
  - Unsplash: used for all heroes, service cards, client-type images, about-page imagery, and home hero collage.
  - Pexels: used for all testimonial avatars.
- **CSS-based patterns:**
  - Diagonal orange pattern via `repeating-linear-gradient` in the Vendor CTA banner and home contact strip.

This inventory can be used as a checklist for migrating to local, context-appropriate assets or optimizing image loading strategies.

