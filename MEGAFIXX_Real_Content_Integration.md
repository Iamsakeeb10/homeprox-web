# MEGAFIXX Home Services LLC — Real Content Integration Prompts
### Replace All Dummy/Placeholder Content with Real Client-Provided Copy

---

> **How to Use These Prompts:**
> - The website is already fully built (all 9 chunks complete).
> - These prompts replace any dummy/placeholder text with real client-provided content.
> - Feed each Content Chunk **one at a time** to Cursor in a fresh conversation.
> - Always use `@codebase` at the start so Cursor has full context of existing files.
> - Run `npm run dev` after each chunk to verify nothing broke.
> - Do NOT change any styling, Tailwind classes, layout, or component structure.
>   **Only update text content.**

---

## CONTENT CHUNK A — Services Data & Services Page

```
The MEGAFIXX website is fully built (all 9 chunks complete).
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content in the services data file and
services page with the real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

1. UPDATE src/lib/data/services.ts

Replace the title, description, and features fields for all 7 services:

SERVICE 1:
  title: "General Property Maintenance & Minor Plumbing"
  slug: "general-maintenance"
  icon: "Wrench"
  description: "Prevent costly repairs with routine and responsive property
  maintenance. We keep residential and commercial properties operating
  efficiently year-round."
  features: [
    "Leaking faucet repairs",
    "Running toilet fixes",
    "Clogged drain service",
    "Fixture replacement",
    "Minor plumbing maintenance",
    "General repair work"
  ]

SERVICE 2:
  title: "Gutter Cleaning & Preventative Maintenance"
  slug: "gutter-cleaning"
  icon: "Droplets"
  description: "Protect your property from water damage and foundation
  issues. Texas weather demands proactive property care."
  features: [
    "Gutter debris removal",
    "Downspout clearing",
    "Drainage inspection",
    "Seasonal preventative maintenance"
  ]

SERVICE 3:
  title: "Drywall Repair & Interior Painting"
  slug: "drywall-painting"
  icon: "Paintbrush"
  description: "Maintain a clean, professional interior. Ideal for rental
  turnovers and investment properties."
  features: [
    "Drywall patching",
    "Water damage repair",
    "Interior painting",
    "Texture matching",
    "Rental property refresh"
  ]

SERVICE 4:
  title: "Property Cleaning Services"
  slug: "property-cleaning"
  icon: "Sparkles"
  description: "Professional cleaning solutions for landlords, commercial
  spaces, and property managers across Texas."
  features: [
    "Move-in / move-out cleaning",
    "Deep cleaning",
    "Post-renovation cleaning",
    "Routine maintenance cleaning"
  ]

SERVICE 5:
  title: "Landscaping & Exterior Property Maintenance"
  slug: "landscaping"
  icon: "Leaf"
  description: "Improve curb appeal and long-term property value with
  professional exterior maintenance."
  features: [
    "Lawn maintenance",
    "Hedge trimming",
    "Seasonal yard cleanups",
    "Exterior upkeep services"
  ]

SERVICE 6:
  title: "Siding & Exterior Repairs"
  slug: "siding-exterior"
  icon: "Home"
  description: "Durable solutions designed for Texas conditions. Protect
  your investment with professional exterior repair."
  features: [
    "Siding repair",
    "Panel replacement",
    "Storm damage repair",
    "Exterior structural maintenance"
  ]

SERVICE 7:
  title: "Property Cleanouts & Debris Removal"
  slug: "property-cleanouts"
  icon: "Trash2"
  description: "Fast, reliable cleanout service across Texas for rental
  turnovers, foreclosures, and general junk removal."
  features: [
    "Full property cleanouts",
    "Furniture & debris removal",
    "Garage & shed clearing",
    "Estate cleanouts",
    "Junk hauling"
  ]

2. UPDATE src/app/services/page.tsx

Replace the page intro paragraph with:
  "MEGAFIXX Home Services LLC provides reliable, affordable, and professional
  property maintenance services throughout Texas. We serve homeowners,
  landlords, property managers, real estate investors, and commercial clients
  across the state with solutions designed to protect, preserve, and enhance
  property value."

Replace the breadcrumb: "Home > Services"

Replace the bottom CTA section with:
  Heading: "Looking for a Professional Property Maintenance Company in Texas?"
  Body: "If you're searching for property maintenance services in Texas —
  residential, commercial, rental, or investment properties — MEGAFIXX Home
  Services LLC is your trusted statewide partner."
  Button: "Get a Free Quote"
  Contact line below button:
    "📞 (469) 378-9262  |  📧 info@megafixxhomeservices.com"

Replace the coverage note on each service card with:
  "Available Statewide Across Texas"

3. VERIFY
- npm run dev runs with zero errors
- All 7 service cards on homepage show real descriptions
- /services page shows real intro paragraph
- All 7 featured service cards on /services page show real titles, descriptions, features
- Bottom CTA on /services shows real content
- No TypeScript errors
```

---

## CONTENT CHUNK B — Clients Data & Clients Page

```
The MEGAFIXX website is fully built (all 9 chunks complete).
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content in the clients data file and
clients page with the real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

1. UPDATE src/lib/data/clients.ts

Replace the title, description, and benefits fields for all 4 client types:

CLIENT TYPE 1:
  title: "Property Management Companies"
  icon: "Building2"
  description: "We support residential and commercial property managers by
  ensuring properties remain well-maintained, code-compliant, market-ready,
  and tenant-safe. From routine maintenance to emergency repairs, we help
  reduce vacancy time and protect asset value."
  benefits: [
    "Reliable vendor partnerships",
    "Scalable maintenance programs",
    "Fast vacancy turnaround"
  ]

CLIENT TYPE 2:
  title: "Financial Institutions & Asset Managers"
  icon: "Landmark"
  description: "We work with banks, mortgage servicers, REO departments,
  investment groups, and asset management firms. Our team delivers
  inspections, repairs, and property preservation services that safeguard
  assets and maintain compliance standards."
  benefits: [
    "REO property specialists",
    "Documented before/after reporting",
    "Compliant work practices"
  ]

CLIENT TYPE 3:
  title: "Real Estate Professionals"
  icon: "KeyRound"
  description: "We assist real estate agents, brokers, REO specialists,
  and investors by preparing properties for listing, resale, or lease with
  fast turnaround and professional presentation."
  benefits: [
    "Pre-listing preparation",
    "Quick turnaround times",
    "Professional results"
  ]

CLIENT TYPE 4:
  title: "Investors & Portfolio Owners"
  icon: "TrendingUp"
  description: "We provide scalable property maintenance solutions for
  single-family rentals, multi-unit properties, large rental portfolios,
  and fix-and-flip investors. Our goal is to simplify maintenance while
  protecting long-term profitability."
  benefits: [
    "Portfolio-scale servicing",
    "Consistent quality across properties",
    "Single point of contact"
  ]

2. UPDATE src/app/clients/page.tsx

Page hero:
  H1: "Our Clients"
  Subtitle: "Trusted Property Maintenance Partner Across Texas"
  Breadcrumb: "Home > Our Clients"

Intro section:
  Heading: "Building Long-Term Partnerships"
  Paragraph 1: "At MEGAFIXX Home Services LLC, we take pride in building
  long-term partnerships with clients across Texas. Our reputation is built
  on reliability, professional execution, and consistent performance across
  residential and commercial properties."
  Paragraph 2: "We understand that every property represents an investment
  — and we treat it accordingly. Many of our clients rely on us to manage
  routine property maintenance, emergency service calls, turnover repairs,
  preservation services, and compliance inspections."
  Quote callout: "We build relationships based on performance, accountability,
  and trust."

Intro stat card (right side) — 4 stats:
  "500+" / "Properties Maintained"
  "Texas" / "Statewide Coverage"
  "100%" / "Fully Insured"
  "10+" / "Years Experience"

"Why Clients Choose MEGAFIXX" section — 4 cards:

  Card 1 — Reliability:
    Icon: Clock (lucide)
    Title: "Reliability"
    Body: "We understand that time is critical. Our team responds quickly,
    meets deadlines, and ensures projects move forward without delays."

  Card 2 — Quality Workmanship:
    Icon: Award (lucide)
    Title: "Quality Workmanship"
    Body: "Every service is completed with attention to detail and durability
    in mind. We focus on long-term solutions — not temporary fixes."

  Card 3 — Scalable Solutions:
    Icon: BarChart (lucide)
    Title: "Scalable Solutions"
    Body: "Whether you need one-time repairs or ongoing maintenance contracts,
    we tailor our services to fit your operational needs."

  Card 4 — Professional Communication:
    Icon: MessageSquare (lucide)
    Title: "Professional Communication"
    Body: "We maintain clear communication before, during, and after each
    project. Our clients stay informed at every stage."

Quality Assurance Process section — 3 steps:

  Step 1 — Detailed Documentation:
    Icon: Camera (lucide)
    Title: "Detailed Documentation"
    Body: "We provide before photos, progress documentation, and completion
    photos. This ensures transparency, accountability, and verifiable results."

  Step 2 — Vendor & Team Screening:
    Icon: ShieldCheck (lucide)
    Title: "Vendor & Team Screening"
    Body: "We conduct thorough background checks and verify qualifications
    to ensure that only professional and trustworthy team members represent
    MEGAFIXX on your property."

  Step 3 — Proactive Communication:
    Icon: Bell (lucide)
    Title: "Proactive Communication"
    Body: "We notify stakeholders before service visits and provide status
    updates throughout the job lifecycle. Upon completion, we follow up to
    confirm satisfaction."

Bottom CTA banner:
  Heading: "Ready to Partner with MEGAFIXX?"
  Body: "At MEGAFIXX Home Services LLC, our clients are at the center of
  everything we do. We are committed to exceeding expectations and delivering
  consistent, professional property maintenance services across Texas."
  Phone: "(469) 378-9262"
  Email: "info@megafixxhomeservices.com"
  Button: "Get Started"

SEO metadata:
  title: "Our Clients | MEGAFIXX Home Services LLC"
  description: "Trusted property maintenance partner for property managers,
  financial institutions, real estate professionals, and investors across Texas."

3. VERIFY
- npm run dev runs with zero errors
- All 4 client type cards on homepage show real descriptions and benefits
- /clients page hero shows correct heading and subtitle
- Intro section shows real paragraphs and quote callout
- All 4 alternating client sections show real content from clients.ts
- "Why Clients Choose MEGAFIXX" shows all 4 real feature cards
- Quality Assurance 3-step process shows real descriptions
- Bottom CTA shows real content with phone and email
- No TypeScript errors
```

---

## CONTENT CHUNK C — About Page

```
The MEGAFIXX website is fully built (all 9 chunks complete).
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content on the About page with the
real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

UPDATE src/app/about/page.tsx:

1. PAGE HERO
  H1: "About MEGAFIXX Home Services LLC"
  Subtitle: "Texas-based. Statewide reach. Built for serious property operators."
  Breadcrumb: "Home > About"

2. MISSION STATEMENT SECTION
  H2: "Our Mission"

  Paragraph 1:
    "MEGAFIXX Home Services LLC is a Texas-based statewide property
    maintenance partner built for property managers, investors, financial
    institutions, and real estate professionals. We provide reliable,
    affordable, and professional maintenance services throughout Texas —
    designed to protect, preserve, and enhance property value."

  Paragraph 2:
    "Many of our clients rely on us to manage routine property maintenance,
    emergency service calls, turnover repairs, preservation services, and
    compliance inspections."

  Quote callout (styled prominently):
    "We understand that every property represents an investment — and we
    treat it accordingly."

  CTA buttons:
    Primary: "View Our Services" → /services
    Secondary: "Contact Us" → /contact

3. WHAT WE DO SECTION
  H2: "What We Do"
  Intro: "Comprehensive property maintenance solutions across Texas —
  from routine upkeep to full property cleanouts."

  3 category cards:

  Card 1 — Interior Services:
    Icon: Paintbrush (lucide)
    Title: "Interior Services"
    Body: "Drywall repair, interior painting, property cleaning, and minor
    plumbing maintenance for residential and commercial properties."

  Card 2 — Exterior Services:
    Icon: Home (lucide)
    Title: "Exterior Services"
    Body: "Gutter cleaning, siding repair, landscaping, and exterior
    maintenance to protect and enhance property curb appeal."

  Card 3 — Property Cleanouts:
    Icon: Trash2 (lucide)
    Title: "Property Cleanouts"
    Body: "Full property cleanouts, debris removal, and junk hauling for
    rental turnovers, foreclosures, and estate properties."

4. COVERAGE SECTION
  H2: "Serving Clients Across Texas"
  Body: "No matter where your property is located in Texas, MEGAFIXX Home
  Services LLC delivers dependable maintenance solutions."

  Region badges (5):
    North Texas | Central Texas | East Texas | West Texas | South Texas

  Cities line:
    "Major cities: Dallas, Houston, Austin, San Antonio"

5. VALUES SECTION
  H2: "Our Values"

  Card 1 — Integrity:
    Icon: ShieldCheck (lucide)
    Title: "Integrity"
    Body: "We operate with full transparency — honest pricing, clear
    timelines, and no hidden fees."

  Card 2 — Reliability:
    Icon: Clock (lucide)
    Title: "Reliability"
    Body: "We show up, meet deadlines, and deliver what we promise.
    Every time, on every property."

  Card 3 — Quality:
    Icon: Award (lucide)
    Title: "Quality"
    Body: "We take pride in our work. Every job is completed to a
    professional standard with lasting results."

6. BOTTOM CTA BANNER
  Heading: "Ready to Protect Your Properties?"
  Subtext: "Partner with Texas's trusted property maintenance team."
  Button 1: "Get a Free Quote" → /contact
  Button 2: "Call Now: (469) 378-9262" → tel:4693789262

7. SEO METADATA
  title: "About Us | MEGAFIXX Home Services LLC"
  description: "Texas-based statewide property maintenance company serving
  property managers, investors, banks, and real estate professionals across
  Texas. Reliable, insured, and professional."

8. VERIFY
- npm run dev runs with zero errors
- Hero shows correct real heading and subtitle
- Mission section shows both paragraphs and the quote callout
- "What We Do" shows 3 real category cards with real body text
- Coverage section shows all 5 region badges and cities line
- Values section shows 3 real value cards
- Bottom CTA shows correct heading and buttons with real phone number
- No TypeScript errors
```

---

## CONTENT CHUNK D — Homepage Sections

```
The MEGAFIXX website is fully built (all 9 chunks complete).
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content in homepage section components
with the real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

1. src/components/sections/Hero.tsx
  Badge pill: "Texas Statewide Property Maintenance"
  H1: "Professional Property Maintenance"
  Gold sub-headline: "Across Texas"
  Body text: "Trusted by property managers, investors, and financial
  institutions statewide. Reliable. Scalable. Professional."
  Primary CTA button: "Get a Free Quote"
  Secondary CTA button: "View Our Services"
  Trust bar (3 items):
    Item 1: "500+ Properties Maintained"
    Item 2: "Texas Statewide"
    Item 3: "Fully Insured"

2. src/components/sections/StatsBar.tsx
  Stat 1: value="10+" label="Years Experience"
  Stat 2: value="500+" label="Properties Maintained"
  Stat 3: value="Statewide" label="Texas Coverage"
  Stat 4: value="100%" label="Fully Insured"

3. src/components/sections/ServicesSection.tsx
  Section heading title: "Our Services"
  Section heading subtitle: "Comprehensive property maintenance solutions
  across Texas"
  Button text below grid: "View All Services →"

4. src/components/sections/ClientsSection.tsx
  Section heading title: "Who We Serve"
  Section heading subtitle: "Trusted by property professionals across Texas"
  Link text below grid: "Learn More About Our Clients →"

5. src/components/sections/WhyChooseUs.tsx
  Section heading title: "Why Choose MEGAFIXX"
  Section heading subtitle: "Built on reliability, quality, and long-term
  partnerships"

  Feature card 1:
    Icon: Clock (lucide)
    Title: "Reliability"
    Body: "We understand that time is critical. Our team responds quickly,
    meets deadlines, and ensures projects move forward without delays."

  Feature card 2:
    Icon: Award (lucide)
    Title: "Quality Workmanship"
    Body: "Every service is completed with attention to detail and durability
    in mind. We focus on long-term solutions — not temporary fixes."

  Feature card 3:
    Icon: BarChart (lucide)
    Title: "Scalable Solutions"
    Body: "Whether you need one-time repairs or ongoing maintenance contracts,
    we tailor our services to fit your operational needs."

  Feature card 4:
    Icon: MessageSquare (lucide)
    Title: "Professional Communication"
    Body: "We maintain clear communication before, during, and after each
    project. Our clients stay informed at every stage."

  Stats row below cards:
    "10+ Years" | "500+ Properties" | "Statewide" | "Fully Insured"

6. src/components/sections/QualityProcess.tsx
  Section heading title: "Our Quality Assurance Process"
  Section heading subtitle: "Maintaining high standards across Texas requires
  structured processes."

  Step 1:
    Number badge: "01"
    Icon: Camera (lucide)
    Title: "Detailed Documentation"
    Body: "We provide before photos, progress documentation, and completion
    photos. This ensures transparency, accountability, and verifiable results."

  Step 2:
    Number badge: "02"
    Icon: ShieldCheck (lucide)
    Title: "Vendor & Team Screening"
    Body: "We conduct thorough background checks and verify qualifications
    to ensure that only professional and trustworthy team members represent
    MEGAFIXX on your property."

  Step 3:
    Number badge: "03"
    Icon: Bell (lucide)
    Title: "Proactive Communication"
    Body: "We notify stakeholders before service visits and provide status
    updates throughout the job lifecycle. Upon completion, we follow up to
    confirm satisfaction."

7. src/components/sections/CTABanner.tsx

  Dark variant (homepage):
    H2: "Ready to Protect Your Properties?"
    Subtext: "Partner with Texas's trusted property maintenance team."
    Button 1: "Get a Free Quote"
    Button 2: "Call Now: (469) 378-9262"

  Gold variant (used at bottom of /services and /clients pages):
    H2: "Looking for a Trusted Maintenance Partner?"
    Subtext: "MEGAFIXX Home Services LLC is ready to serve your properties
    across Texas."
    Button: "Contact Us Today"

8. src/components/sections/ContactSection.tsx (compact homepage strip)
  Heading: "Ready to Get Started?"
  Subtext: "Contact us today for a free, no-obligation estimate."
  Phone: "(469) 378-9262"
  Email: "info@megafixxhomeservices.com"
  Button: "Get a Free Quote"

9. src/app/page.tsx — SEO METADATA
  title: "MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance"
  description: "Professional property maintenance services across Texas.
  Serving property managers, investors, banks, and REO departments statewide.
  Reliable, insured, and scalable."

10. VERIFY
- npm run dev runs with zero errors
- Hero badge, headline, sub-headline, body text, buttons, and trust bar all
  show real content
- Stats bar shows correct numbers and labels
- Services section heading/subtitle correct
- Who We Serve heading/subtitle correct
- Why Choose Us shows all 4 real feature card descriptions
- Quality Process shows all 3 real step descriptions
- CTA Banner (dark) shows correct heading and phone number
- Contact strip shows real phone and email
- No TypeScript errors
```

---

## CONTENT CHUNK E — Contact Page & Footer

```
The MEGAFIXX website is fully built (all 9 chunks complete).
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content on the contact page, quote form,
and footer with the real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

1. src/app/contact/page.tsx

  Page hero:
    H1: "Contact MEGAFIXX"
    Subtitle: "Let's talk about your property needs"
    Breadcrumb: "Home > Contact"

  Contact info panel (right side of form):
    Heading: "Get In Touch"
    Phone: (469) 378-9262 — clickable tel:4693789262
    Email: info@megafixxhomeservices.com — clickable mailto:
    Location: Collin County, Texas
    Serving: "All of Texas Statewide"
    Hours:
      Monday – Friday: 8:00 AM – 6:00 PM
      Saturday: closed
      Sunday: Closed
    Badges: "Fully Insured" | "Licensed Professionals"

  Bottom 3 info cards:
    Card 1: Icon=Clock  Title="Fast Response"
      Body: "We respond to all inquiries within 24 hours"
    Card 2: Icon=Tag    Title="Free Estimates"
      Body: "Get a no-obligation project estimate"
    Card 3: Icon=Map    Title="Statewide Coverage"
      Body: "We serve all major regions across Texas"

  SEO metadata:
    title: "Contact Us | MEGAFIXX Home Services LLC"
    description: "Contact MEGAFIXX Home Services LLC for professional
    property maintenance across Texas. Call (469) 378-9262 or email
    info@megafixxhomeservices.com for a free estimate."

2. src/components/forms/QuoteForm.tsx

  Form heading: "Request a Free Quote"
  Form subtext: "Fill out the form below and we'll get back to you
  within 24 hours."

  Field labels (verify these match exactly):
    "Full Name *"
    "Company Name (Optional)"
    "Email Address *"
    "Phone Number *"
    "Property Type *"
    "Service Needed *"
    "Property Location / City, TX *"
    "Message / Project Details *"

  Property Type dropdown options (in this order):
    Select Property Type (placeholder/disabled)
    Residential
    Commercial
    Multi-Unit
    REO/Bank Owned
    Other

  Service Needed dropdown options (in this order):
    Select a Service (placeholder/disabled)
    General Property Maintenance & Minor Plumbing
    Gutter Cleaning & Preventative Maintenance
    Drywall Repair & Interior Painting
    Property Cleaning Services
    Landscaping & Exterior Property Maintenance
    Siding & Exterior Repairs
    Property Cleanouts & Debris Removal
    Multiple Services

  Submit button: "Send Request"

  Success message heading: "Thank you!"
  Success message body: "We'll be in touch within 24 hours. Our team at
  MEGAFIXX Home Services LLC will review your request and contact you shortly."

3. src/components/layout/Footer.tsx

  Column 1 — Company:
    Logo text: "MEGAFIXX"
    Tagline below logo: "Home Services LLC"
    Description: "Texas-based statewide property maintenance company.
    Serving property managers, investors, and financial institutions
    across Texas."

  Column 2 — Quick Links (verify labels and hrefs):
    Home → /
    Services → /services
    Our Clients → /clients
    About → /about
    Contact → /contact

  Column 3 — Services (all link to /services):
    General Maintenance
    Gutter Cleaning
    Drywall & Painting
    Property Cleaning
    Landscaping
    Siding & Exterior
    Property Cleanouts

  Column 4 — Contact:
    Heading: "Contact Us"
    Phone: (469) 378-9262 — clickable tel:4693789262
    Email: info@megafixxhomeservices.com — clickable mailto:
    Location: Collin County, TX

  Bottom bar:
    Left: "© 2026 MEGAFIXX Home Services LLC. All rights reserved."
    Right link: "Terms & Conditions" → /terms

4. VERIFY
- npm run dev runs with zero errors
- Contact page hero shows correct heading and subtitle
- Contact info panel shows correct phone, email, location, hours, and badges
- Quote form shows correct heading, subtext, all field labels
- Both dropdown menus have correct options in correct order
- Success message shows correct real text
- Footer column 1 shows correct company description
- Footer column 4 shows correct phone and email
- Footer bottom bar shows copyright 2026 and T&C link
- All phone numbers are clickable (tel:) links
- All email addresses are clickable (mailto:) links
- No TypeScript errors
```

---

## CONTENT CHUNK F — Terms & Conditions Page (Full Real Legal Content)

```
The MEGAFIXX website is fully built (all 9 chunks complete).
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder content on the Terms & Conditions page at
src/app/terms/page.tsx with the full real legal content below.
Do NOT change any styling, layout, or Tailwind classes — only update text.

If src/app/terms/page.tsx does not exist yet, create it now with this layout:
- bg-navy-950, clean readable layout, no hero image
- "Last Updated: February 24, 2026" displayed prominently below the H1
- Table of contents sidebar (desktop) / inline (mobile) with anchor links
- Each section has an id="" for anchor navigation
- No CTA sections on this page

SEO METADATA:
  title: "Terms & Conditions | MEGAFIXX Home Services LLC"
  description: "Terms and Conditions for MEGAFIXX Home Services LLC.
  Governing use of our website and services. Collin County, Texas."

PAGE HEADER:
  H1: "Terms & Conditions"
  "Last Updated: February 24, 2026"

TABLE OF CONTENTS anchor links:
  1. Acceptance of Terms          → #acceptance
  2. Website Services             → #website-services
  3. User Responsibilities        → #user-responsibilities
  4. Privacy                      → #privacy
  5. Acceptable Use               → #acceptable-use
  6. Service Estimates & Contracts → #estimates
  7. Third-Party Services         → #third-party
  8. Intellectual Property        → #ip
  9. Limitation of Liability      → #liability
  10. Disclaimer of Warranties    → #warranties
  11. Indemnification             → #indemnification
  12. Governing Law               → #governing-law
  13. Copyright & Contact         → #copyright
  14. Miscellaneous               → #miscellaneous

SECTION CONTENT (use exact text as provided):

Section 1 (id="acceptance"):
  H2: "1. Acceptance of Terms"
  Body: "By accessing or using the MEGAFIXX Home Services LLC website
  ("Website"), you agree to be bound by these Terms & Conditions and our
  Privacy Policy. If you do not agree with any part of these terms, please
  do not use this Website."
  "We reserve the right to update or modify these Terms at any time without
  prior notice. Continued use of the Website constitutes acceptance of any
  changes."

Section 2 (id="website-services"):
  H2: "2. Website Services"
  Body: "This Website is provided for informational purposes regarding
  handyman, renovation, maintenance, and related home services offered by
  MEGAFIXX Home Services LLC."
  "All content and services are provided on an "AS IS" basis. We reserve
  the right to modify, suspend, or discontinue any portion of the Website
  at any time without notice."
  "We are not responsible for:"
  Bullet list:
    - "Temporary unavailability of the Website"
    - "Technical errors"
    - "Inaccurate or outdated information"

Section 3 (id="user-responsibilities"):
  H2: "3. User Responsibilities"
  Body: "If you submit information through contact forms, service requests,
  or account registration:"
  Bullet list:
    - "You agree to provide accurate and truthful information."
    - "You are responsible for maintaining confidentiality of any login
      credentials."
    - "You must notify us immediately of unauthorized use of your account."

Section 4 (id="privacy"):
  H2: "4. Privacy"
  Body: "Any personal information collected through this Website is handled
  in accordance with our Privacy Policy. We do not sell personal information."

Section 5 (id="acceptable-use"):
  H2: "5. Acceptable Use"
  Body: "You agree not to:"
  Bullet list:
    - "Use this Website for unlawful purposes"
    - "Submit false, misleading, defamatory, or harmful content"
    - "Attempt to interfere with Website functionality"
    - "Upload viruses or malicious software"
    - "Engage in spam or unauthorized marketing"
  "We reserve the right to restrict access for violations of these Terms."

Section 6 (id="estimates"):
  H2: "6. Service Estimates & Contracts"
  Body: "All project estimates provided via the Website or email are:"
  Bullet list:
    - "Non-binding until confirmed in writing"
    - "Subject to on-site inspection"
    - "Subject to material cost changes"
    - "Subject to availability of labor and scheduling"
  "A separate written service agreement may be required for project execution."

Section 7 (id="third-party"):
  H2: "7. Third-Party Services"
  Body: "This Website may reference third-party products, materials, or
  services. MEGAFIXX Home Services LLC is not responsible for third-party
  representations, warranties, or performance."

Section 8 (id="ip"):
  H2: "8. Intellectual Property"
  Body: "All content on this Website — including logos, text, images,
  service descriptions, and branding — is the property of MEGAFIXX Home
  Services LLC and may not be reproduced without written permission."

Section 9 (id="liability"):
  H2: "9. Limitation of Liability"
  Body: "To the fullest extent permitted by Texas law, MEGAFIXX Home
  Services LLC shall not be liable for:"
  Bullet list:
    - "Direct or indirect damages"
    - "Loss of profits"
    - "Property damage beyond contract scope"
    - "Delays caused by weather, supply chain, or third parties"
    - "Consequential or incidental damages"
  "Your use of this Website is at your own risk."

Section 10 (id="warranties"):
  H2: "10. Disclaimer of Warranties"
  Body: "The Website and its content are provided without warranties of any
  kind, either express or implied, including but not limited to:"
  Bullet list:
    - "Merchantability"
    - "Fitness for a particular purpose"
    - "Non-infringement"
  "We do not guarantee uninterrupted, error-free, or secure Website access."

Section 11 (id="indemnification"):
  H2: "11. Indemnification"
  Body: "You agree to indemnify and hold harmless MEGAFIXX Home Services LLC,
  its owners, employees, contractors, and affiliates from any claims, damages,
  or legal expenses arising from your misuse of the Website or violation of
  these Terms."

Section 12 (id="governing-law"):
  H2: "12. Governing Law"
  Body: "These Terms shall be governed by the laws of the State of Texas.
  Any disputes shall be resolved in courts located in Collin County, Texas."

Section 13 (id="copyright"):
  H2: "13. Copyright & Contact"
  Body: "If you believe any material on this Website infringes your
  intellectual property rights, please contact:"

  Contact table (styled as a simple table or card):
  | Method   | Contact Detail                    |
  | Email    | info@megafixxhomeservices.com     |
  | Phone    | (469) 378-9262                    |
  | Location | Collin County, Texas              |

  Make email a clickable mailto: link.
  Make phone a clickable tel: link.

Section 14 (id="miscellaneous"):
  H2: "14. Miscellaneous"
  Body: "If any provision of these Terms is deemed invalid or unenforceable,
  the remaining provisions shall remain in full force."
  "Failure to enforce any provision shall not constitute a waiver of rights."

VERIFY
- npm run dev runs with zero errors
- /terms page renders with all 14 sections
- "Last Updated: February 24, 2026" is prominently displayed below the H1
- Table of contents sidebar anchor links all scroll to correct sections
- Footer "Terms & Conditions" link resolves to /terms
- Section 13 email and phone are clickable links
- No TypeScript errors
```

---

## CONTENT CHUNK G — Final Content Audit & Full Verification

```
The MEGAFIXX website is fully built and all real content has been integrated
(Content Chunks A through F complete).

Use @codebase to do a thorough audit of every file.

TASK: Search the entire codebase for any remaining dummy or placeholder
content, replace it with the correct real content, then run a full
verification pass.

1. SEARCH FOR AND REPLACE ALL PLACEHOLDER PATTERNS

Search every .tsx and .ts file for the following and fix any found:

Text patterns to eliminate:
  - Any text containing "lorem ipsum" (case-insensitive)
  - Any text containing "placeholder"
  - Any text containing "Your Company" or "Company Name"
  - Any text containing "dummy"
  - Any email other than: info@megafixxhomeservices.com
  - Any phone number other than: (469) 378-9262
  - Any URL containing megafixx other than: https://megafixxhomeservices.com
  - Any address / location other than "Collin County, Texas" or "Texas"
  - Any copyright year other than 2026
  - Any "Home Services" tagline that doesn't include "LLC"
  - Any heading that reads "Heading" or "Title" or "Subtitle" without
    real content

2. VERIFY CONTACT DETAILS ARE CONSISTENT SITE-WIDE

Every page, every component — confirm:
  Company:      MEGAFIXX Home Services LLC
  Phone:        (469) 378-9262
  Email:        info@megafixxhomeservices.com
  Location:     Collin County, Texas
  Service area: All of Texas Statewide
  Website URL:  https://megafixxhomeservices.com
  Copyright:    © 2026 MEGAFIXX Home Services LLC

3. VERIFY ALL PAGE SEO METADATA

Confirm generateMetadata is correct on each page:

  / (homepage):
    title: "MEGAFIXX Home Services LLC | Texas Statewide Property Maintenance"
    description: "Professional property maintenance services across Texas.
    Serving property managers, investors, banks, and REO departments statewide."

  /services:
    title: "Our Services | MEGAFIXX Home Services LLC"
    description: "Professional property maintenance services across Texas
    including plumbing, gutter cleaning, drywall repair, landscaping, and more."

  /clients:
    title: "Our Clients | MEGAFIXX Home Services LLC"
    description: "Trusted property maintenance partner for property managers,
    financial institutions, real estate professionals, and investors across Texas."

  /about:
    title: "About Us | MEGAFIXX Home Services LLC"
    description: "Texas-based statewide property maintenance company serving
    property managers, investors, banks, and real estate professionals."

  /contact:
    title: "Contact Us | MEGAFIXX Home Services LLC"
    description: "Contact MEGAFIXX Home Services LLC for a free estimate.
    Call (469) 378-9262 or email info@megafixxhomeservices.com."

  /terms:
    title: "Terms & Conditions | MEGAFIXX Home Services LLC"
    description: "Terms and Conditions for MEGAFIXX Home Services LLC.
    Governing use of our website and services. Collin County, Texas."

4. VERIFY ALL INTERNAL LINKS WORK

  Navbar:
    Home → /
    Services → /services
    Our Clients → /clients
    About → /about
    Contact → /contact
    "Get a Quote" button → /contact

  Footer:
    All Quick Links column links correct
    All Services column links go to /services
    "Terms & Conditions" → /terms
    Phone number → tel:4693789262
    Email → mailto:info@megafixxhomeservices.com

  Homepage CTAs:
    "Get a Free Quote" → /contact
    "View Our Services" → /services
    "Learn More About Our Clients →" → /clients

  About page:
    "View Services" → /services
    "Contact Us" → /contact

  404 page:
    "Go Home" → /
    "Contact Us" → /contact

5. FINAL BUILD TEST

Run: npm run build

Expected result:
  - Zero TypeScript errors
  - Zero ESLint errors
  - Zero build warnings
  - All 6 routes compile: /, /services, /clients, /about, /contact, /terms

6. FINAL BROWSER CHECKLIST

With npm run dev running, verify each page:

  Homepage (/):
    [ ] Badge pill shows "Texas Statewide Property Maintenance"
    [ ] H1 shows "Professional Property Maintenance"
    [ ] Gold sub-headline shows "Across Texas"
    [ ] Stats bar shows correct 4 stats
    [ ] All 7 service cards show real titles and descriptions
    [ ] All 4 client type cards show real titles and descriptions
    [ ] Why Choose Us shows 4 real feature cards
    [ ] Quality Process shows 3 real steps
    [ ] CTA Banner shows correct heading and phone number
    [ ] Contact strip shows correct phone and email

  /services:
    [ ] Intro paragraph is real content (not lorem ipsum)
    [ ] All 7 service cards show real titles, descriptions, features
    [ ] Bottom CTA shows real content and phone/email

  /clients:
    [ ] Intro section shows real paragraphs and quote callout
    [ ] All 4 alternating client sections show real content
    [ ] "Why Clients Choose MEGAFIXX" 4 cards show real descriptions
    [ ] Quality Assurance 3-step process shows real descriptions
    [ ] Bottom CTA shows correct phone and email

  /about:
    [ ] Mission section shows both real paragraphs and quote
    [ ] "What We Do" shows 3 real category cards
    [ ] Coverage section shows 5 region badges + cities line
    [ ] Values shows 3 real value cards

  /contact:
    [ ] Form heading: "Request a Free Quote"
    [ ] All 8 field labels correct
    [ ] Property Type dropdown has 5 options + placeholder
    [ ] Service Needed dropdown has 8 options + placeholder
    [ ] Contact panel shows correct phone, email, hours, badges
    [ ] 3 bottom info cards show correct real text

  /terms:
    [ ] H1: "Terms & Conditions"
    [ ] "Last Updated: February 24, 2026" visible
    [ ] All 14 sections present with correct headings
    [ ] TOC sidebar anchor links work
    [ ] Section 13 email and phone are clickable

  Navbar & Footer (all pages):
    [ ] Phone numbers are clickable on mobile
    [ ] Email addresses open mail client
    [ ] Footer copyright shows 2026
    [ ] "Terms & Conditions" footer link goes to /terms
    [ ] No broken links anywhere

Report back listing every placeholder found and replaced, and confirm
npm run build completes with zero errors.
```

---

## QUICK REFERENCE — All Real Content At A Glance

| Item | Real Value |
|---|---|
| Company Name | MEGAFIXX Home Services LLC |
| Phone | (469) 378-9262 |
| Email | info@megafixxhomeservices.com |
| Location | Collin County, Texas |
| Service Area | All of Texas Statewide |
| Website | https://megafixxhomeservices.com |
| T&C Last Updated | February 24, 2026 |
| Copyright Year | 2026 |
| Governing Law | State of Texas, Collin County courts |
| Total Services | 7 |
| Total Client Types | 4 |
| Total T&C Sections | 14 |

---

## TIPS FOR USING THESE PROMPTS WITH CURSOR

1. Run Content Chunks **A through F first**, then run Chunk G as the final audit.
2. Use `@codebase` at the start of **every conversation** so Cursor sees all files.
3. Run `npm run dev` after every chunk — catch issues immediately.
4. If Cursor starts changing styles or layout, stop it and say:
   *"Do NOT change any Tailwind classes, styling, or component structure.
   Only update the text content as specified."*
5. If Cursor misses a section, say:
   *"You missed [section name] — please update it now using the exact text
   from the chunk instructions."*
6. Run `npm run build` after Chunk G to confirm zero errors before deployment.
7. The order matters: A (services data) → B (clients data) → C (about page) →
   D (homepage sections) → E (contact + footer) → F (T&C page) → G (audit).
