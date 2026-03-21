# HomeProX Home Services LLC — Final Real Content Integration Prompts
### Complete Client-Approved Copy | Use These Chunks in Cursor to Replace All Placeholder Text

---

> **How to Use:**
> - Feed each chunk **one at a time** in a fresh Cursor Chat.
> - Always type `@codebase` first so Cursor sees all existing files.
> - Run `npm run dev` after each chunk to verify nothing broke.
> - Do NOT change any styling, Tailwind classes, layout, or component structure.
>   **Only update text content.**
> - Order: A → B → C → D → E → F → G (audit last)

---

## CONTENT CHUNK A — Services Data & Services Page

```
The HomeProX website is fully built.
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
  "HomeProX Home Services LLC provides reliable, affordable, and professional
  property maintenance services throughout Texas. We serve homeowners,
  landlords, property managers, real estate investors, and commercial clients
  across the state with solutions designed to protect, preserve, and enhance
  property value."

Add this secondary paragraph below the intro:
  "If you're looking for a trusted property maintenance company in Texas,
  we are ready to help."

Replace the breadcrumb: "Home > Services"

Coverage regions section — add or update with this content:
  Heading: "Serving Clients Across Texas"
  Body: "We provide property maintenance services throughout:"
  Region list:
    - North Texas
    - Central Texas
    - East Texas
    - West Texas
    - South Texas
    - Major metropolitan areas including Dallas, Houston, Austin, and San Antonio
  Closing line: "No matter where your property is located in Texas,
  HomeProX Home Services LLC delivers dependable maintenance solutions."

"Why Choose" strip on services page — update with:
  ✔ Texas-based property maintenance company
  ✔ Residential & commercial expertise
  ✔ Investor & rental property specialists
  ✔ Fully insured
  ✔ Transparent pricing
  ✔ Reliable scheduling statewide

Replace the bottom CTA section with:
  Heading: "Looking for a Professional Property Maintenance Company in Texas?"
  Body: "If you're searching for property maintenance services in Texas —
  residential, commercial, rental, or investment properties — HomeProX Home
  Services LLC is your trusted statewide partner."
  Body line 2 (search intent keywords — render as plain paragraph):
    "Property maintenance services Texas | Commercial property maintenance Texas |
    Rental property maintenance Texas | Investment property maintenance Texas |
    Statewide property maintenance provider"
  Button: "Get a Free Quote"
  Contact line below button:
    "📞 (469) 378-9262  |  📧 info@homeproxsvcs.com"

Replace the coverage note on each service card with:
  "Available Statewide Across Texas"

3. VERIFY
- All 7 service cards on homepage show real descriptions
- /services page shows real intro paragraph and secondary paragraph
- All 7 featured service cards show real titles, descriptions, features
- Regions section shows all 6 items including major cities line
- Bottom CTA shows real content
- No TypeScript errors
```

---

## CONTENT CHUNK B — Clients Data & Clients Page

```
The HomeProX website is fully built.
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
  Paragraph 1: "At HomeProX Home Services LLC, we take pride in building
  long-term partnerships with clients across Texas. Our reputation is built
  on reliability, professional execution, and consistent performance across
  residential and commercial properties."
  Paragraph 2: "We understand that every property represents an investment
  — and we treat it accordingly. Many of our clients rely on us to manage
  routine property maintenance, emergency service calls, turnover repairs,
  preservation services, and compliance inspections."
  Quote callout: "We build relationships based on performance,
  accountability, and trust."

Intro stat card (right side) — 4 stats:
  "500+" / "Properties Maintained"
  "Texas" / "Statewide Coverage"
  "100%" / "Fully Insured"
  "10+" / "Years Experience"

"Why Clients Choose HomeProX" section — 4 cards:

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

  Step 1:
    Icon: Camera (lucide)
    Title: "Detailed Documentation"
    Body: "We provide before photos, progress documentation, and completion
    photos. This ensures transparency, accountability, and verifiable results."

  Step 2:
    Icon: ShieldCheck (lucide)
    Title: "Vendor & Team Screening"
    Body: "We conduct thorough background checks and verify qualifications
    to ensure that only professional and trustworthy team members represent
    HomeProX on your property."

  Step 3:
    Icon: Bell (lucide)
    Title: "Proactive Communication"
    Body: "We notify stakeholders before service visits and provide status
    updates throughout the job lifecycle. Upon completion, we follow up to
    confirm satisfaction."

"A Property Maintenance Partner You Can Trust" section:
  Heading: "A Property Maintenance Partner You Can Trust"
  Body: "At HomeProX Home Services LLC, our clients are at the center of
  everything we do. We are committed to exceeding expectations and delivering
  consistent, professional property maintenance services across Texas."

Bottom CTA banner:
  Heading: "Ready to Partner with HomeProX?"
  Body: "At HomeProX Home Services LLC, our clients are at the center of
  everything we do. We are committed to exceeding expectations and delivering
  consistent, professional property maintenance services across Texas."
  Phone: "(469) 378-9262"
  Email: "info@homeproxsvcs.com"
  Button: "Get Started"

Client Onboarding Form section (id="client-onboarding"):
  Benefits strip labels (5 items):
    "Reliable Vendor Network"
    "Fast Response Times"
    "Work Order Transparency"
    "Photo Documentation"
    "Scalable Property Maintenance Solutions"

  SectionHeading title: "Become a HomeProX Client"
  SectionHeading subtitle: "Partner with HomeProX for reliable property
  maintenance and field service support. Our team supports property managers,
  investors, asset managers, and organizations across residential and
  commercial portfolios."

  Form confirmation message after submit:
    "Thank you for your interest in partnering with HomeProX.
    Our team will review your request and contact you within 1 business day."

SEO metadata:
  title: "Our Clients | HomeProX Home Services LLC"
  description: "Trusted property maintenance partner for property managers,
  financial institutions, real estate professionals, and investors across Texas."

3. VERIFY
- All 4 client type cards on homepage show real descriptions and benefits
- /clients page hero shows correct heading and subtitle
- Intro section shows real paragraphs and quote callout
- All 4 alternating client sections show real content
- "Why Clients Choose HomeProX" shows all 4 real feature cards
- Quality Assurance 3-step process shows real descriptions
- "Partner You Can Trust" section shows real copy
- Bottom CTA shows real content with phone and email
- Benefits strip above form shows all 5 real labels
- No TypeScript errors
```

---

## CONTENT CHUNK C — About Page

```
The HomeProX website is fully built.
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content on the About page with the
real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

UPDATE src/app/about/page.tsx:

1. PAGE HERO
  H1: "About HomeProX Home Services LLC"
  Subtitle: "Texas-based. Statewide reach. Built for serious property operators."
  Breadcrumb: "Home > About"

2. MISSION STATEMENT SECTION
  H2: "Our Mission"

  Paragraph 1:
    "HomeProX Home Services LLC is a Texas-based statewide property
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
  Body: "No matter where your property is located in Texas, HomeProX Home
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
  title: "About Us | HomeProX Home Services LLC"
  description: "Texas-based statewide property maintenance company serving
  property managers, investors, banks, and real estate professionals across
  Texas. Reliable, insured, and professional."

8. VERIFY
- Hero shows correct heading and subtitle
- Mission section shows both paragraphs and the quote callout
- "What We Do" shows 3 real category cards
- Coverage section shows all 5 region badges and cities line
- Values section shows 3 real value cards
- Bottom CTA shows correct heading and buttons with real phone number
- No TypeScript errors
```

---

## CONTENT CHUNK D — Homepage Sections

```
The HomeProX website is fully built.
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content in homepage section components
with the real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

1. src/components/sections/Hero.tsx
  Badge pill: "Texas Statewide Property Maintenance"
  H1: "Professional Property Maintenance"
  Sub-headline (accent color): "Across Texas"
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
  Section heading title: "Why Choose HomeProX"
  Section heading subtitle: "Responsive property maintenance backed by
  dependable service and professional support."

  Feature card 1:
    Icon: Clock (lucide)
    Title: "Fast Response"
    Body: "Quick scheduling and efficient communication. We understand
    that time is critical — our team responds promptly and ensures
    projects move forward without delays."

  Feature card 2:
    Icon: Award (lucide)
    Title: "Reliable Quality"
    Body: "Work completed with care, consistency, and attention to detail.
    Every service is done with durability in mind — long-term solutions,
    not temporary fixes."

  Feature card 3:
    Icon: BarChart (lucide)
    Title: "Scalable Support"
    Body: "Flexible solutions for one property or an entire portfolio.
    Whether you need one-time repairs or ongoing maintenance contracts,
    we tailor our services to your needs."

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
    HomeProX on your property."

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

  Light/gold variant (used at bottom of /services and /clients pages):
    H2: "Looking for a Trusted Maintenance Partner?"
    Subtext: "HomeProX Home Services LLC is ready to serve your properties
    across Texas."
    Button: "Contact Us Today"

8. src/components/sections/ContactSection.tsx (compact homepage strip)
  Heading: "Ready to Get Started?"
  Subtext: "Contact us today for a free, no-obligation estimate."
  Phone: "(469) 378-9262"
  Email: "info@homeproxsvcs.com"
  Button: "Get a Free Quote"

9. src/app/page.tsx — SEO METADATA
  title: "HomeProX Home Services LLC | Texas Statewide Property Maintenance"
  description: "Professional property maintenance services across Texas.
  Serving property managers, investors, banks, and REO departments statewide.
  Reliable, insured, and scalable."

10. VERIFY
- Hero badge, headline, sub-headline, body, buttons, and trust bar show real content
- Stats bar shows correct numbers and labels
- Services section heading/subtitle correct
- Who We Serve heading/subtitle correct
- Why Choose Us shows updated titles ("Fast Response", "Reliable Quality",
  "Scalable Support") with new real descriptions
- Quality Process shows all 3 real step descriptions
- CTA Banner (dark) shows correct heading and phone number
- Contact strip shows real phone and email
- No TypeScript errors
```

---

## CONTENT CHUNK E — Contact Page, Quote Form & Footer

```
The HomeProX website is fully built.
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content on the contact page, forms,
and footer with the real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

1. src/app/contact/page.tsx

  Page hero:
    H1: "Contact HomeProX"
    Subtitle: "Have a question about property maintenance, partnerships,
    or vendor opportunities? Send us a message and our team will respond
    shortly."
    Breadcrumb: "Home > Contact"

  LEFT SIDE — Contact info panel:
    Heading: "Contact Information"
    Phone: (469) 378-9262 — clickable tel:4693789262
    Email: info@homeproxsvcs.com — clickable mailto:
    Service Coverage label: "Service Coverage"
    Service Coverage value: "Serving Residential & Investment Properties"
    Hours heading: "Business Hours"
    Hours:
      Monday – Friday: 8:00 AM – 5:00 PM
      Saturday: Closed
      Sunday: Closed

  RIGHT SIDE — Form heading:
    Heading: "Send Us a Message"

  Trust strip (below form):
    ✔ Reliable Property Maintenance
    ✔ Fast Response Times
    ✔ Serving Residential & Investment Properties

  Final CTA strip:
    Heading: "Prefer to talk?"
    Body: "Call us directly:"
    Phone: "(469) 378-9262" — clickable tel:4693789262

  Quick links section below the form (add if not already present):
    Intro text: "Looking for something specific?"
    Link 1: "Become a Client" → /clients#client-onboarding
    Link 2: "Become a Vendor" → /vendors#vendor-application
    Link 3: "Request Service" → /quote

  Bottom 3 info cards:
    Card 1: Icon=Clock  Title="Fast Response"
      Body: "We respond to all inquiries within 24 hours"
    Card 2: Icon=Tag    Title="Free Estimates"
      Body: "Get a no-obligation project estimate"
    Card 3: Icon=Map    Title="Statewide Coverage"
      Body: "We serve all major regions across Texas"

  SEO metadata:
    title: "Contact Us | HomeProX Home Services LLC"
    description: "Contact HomeProX Home Services LLC for professional
    property maintenance across Texas. Call (469) 378-9262 or email
    info@homeproxsvcs.com for a free estimate."

2. src/components/forms/ContactForm.tsx

  Inquiry type dropdown options — verify they match exactly:
    Property Maintenance Service
    Client Partnership
    Vendor Application
    General Inquiry
    Support

  Submit button label: "Send Message"

  Success message heading: "Message Sent!"
  Success message body: "Thank you for reaching out. Our team will
  respond within 24 hours."

3. src/components/forms/QuoteForm.tsx

  Form heading (if shown): "Request a Free Quote"
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
  HomeProX Home Services LLC will review your request and contact you shortly."

4. src/components/layout/Footer.tsx

  Column 1 — Company:
    Logo (keep existing logo image)
    Tagline: "Home Services LLC"
    Description: "Texas-based statewide property maintenance company.
    Serving property managers, investors, and financial institutions
    across Texas."
    Badges: "Fully Insured" | "Licensed"

  Column 2 — Quick Links (verify labels and hrefs):
    Home → /
    Services → /services
    Our Clients → /clients
    Vendors → /vendors
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
    Email: info@homeproxsvcs.com — clickable mailto:
    Location: Collin County, TX

  Bottom bar:
    Left: "© 2026 HomeProX Home Services LLC. All rights reserved."
    Right link: "Terms & Conditions" → /terms

5. VERIFY
- Contact page hero shows correct heading and subtitle
- Left panel shows correct phone, email, service coverage, hours
- Trust strip shows all 3 items
- Final CTA shows correct phone
- Quick links section shows all 3 links with correct hrefs
- ContactForm dropdown has all 5 inquiry options
- QuoteForm shows correct heading, subtext, all 8 field labels
- Both dropdown menus have correct options in correct order
- Footer column 1 shows real company description and badges
- Footer column 4 shows correct phone and email
- Footer bottom bar shows copyright 2026
- All phone numbers are clickable tel: links
- All email addresses are clickable mailto: links
- No TypeScript errors
```

---

## CONTENT CHUNK F — Vendor Page

```
The HomeProX website is fully built.
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder/dummy content on the /vendors page and its
section components with the real client-provided copy below.
Do NOT change any styling, layout, component structure, or Tailwind classes.
Only update text content.

1. src/components/sections/VendorHero.tsx

  H1: "Join the HomeProX Property Maintenance Network"
  Subtitle: "Become part of a structured, performance-driven property
  maintenance team supporting residential portfolios and managed assets
  across Texas."
  Primary CTA button: "Apply Now"
  Secondary CTA button: "Vendor Login"

2. src/components/sections/VendorWhyPartner.tsx

  Subtext strip (charcoal band below hero):
    "Serving Residential Portfolios • Investment Properties •
    Managed Communities • Institutional Assets"

  Section heading title: "Why Partner With HomeProX?"
  Section heading subtitle: "Built for Professionals. Designed for Growth."

  4 benefit cards:

  Card 1:
    Title: "Consistent Work Opportunities"
    Body: "We provide steady work orders across property maintenance,
    turnovers, preservation, and exterior services."

  Card 2:
    Title: "Fast & Transparent Payments"
    Body: "Clear scope approvals, structured invoicing, and timely payments."

  Card 3:
    Title: "Professional Work Environment"
    Body: "Work within a system that values documentation, communication,
    and accountability."

  Card 4:
    Title: "Statewide Coverage Opportunities"
    Body: "Serve properties in your preferred service areas with scalable
    growth potential."

3. src/components/sections/VendorOnboarding.tsx

  Section heading title: "A Structured Path to Getting Work Orders"

  Step 1:
    Number: "01"
    Title: "Submit Application"
    Body: "Provide your company details, service types, coverage areas,
    and compliance documents."

  Step 2:
    Number: "02"
    Title: "Review & Approval"
    Body: "Our team reviews your qualifications, insurance, experience,
    and service capabilities."

  Step 3:
    Number: "03"
    Title: "Start Receiving Work Orders"
    Body: "Once approved, you'll begin receiving structured work assignments
    within your coverage area."

4. src/components/sections/VendorRequirements.tsx

  Section heading title: "What We Look For in Vendors"
  Intro: "We partner with licensed and insured professionals who meet
  our service standards."

  Requirements column heading: "Requirements"
  Requirements list (5 items):
    "Active General Liability Insurance"
    "Valid Identification & Business Registration"
    "Relevant Trade Experience"
    "Ability to provide Before/During/After Photo Documentation"
    "Reliable Communication & Timely Completion"

  Preferred column heading: "Preferred"
  Preferred list (3 items):
    "Property Maintenance Experience"
    "Turnover or Preservation Background"
    "Multi-trade Capability"

5. src/components/sections/VendorServices.tsx

  Section heading title: "Services We Assign"
  Section heading subtitle: "Vendors may receive work in the following
  categories:"

  6 service category labels:
    "General Property Maintenance"
    "Rental Turnovers"
    "Landscaping & Exterior Work"
    "Minor Plumbing & Electrical"
    "Trash Outs & Cleanouts"
    "Property Preservation"

6. src/components/sections/VendorFAQ.tsx

  Section heading title: "Frequently Asked Questions"

  FAQ item 1:
    Question: "How quickly are vendors approved?"
    Answer: "Approval timelines vary, but most qualified vendors receive
    a response within 5–10 business days."

  FAQ item 2:
    Question: "How are payments processed?"
    Answer: "Payments are issued based on approved work orders and
    submitted documentation."

  FAQ item 3:
    Question: "Can I choose my coverage area?"
    Answer: "Yes. Vendors select their preferred service areas during
    onboarding."

  FAQ item 4:
    Question: "Do you guarantee work volume?"
    Answer: "Work volume depends on service demand and performance
    consistency."

7. src/components/sections/VendorCTABanner.tsx

  Heading: "Ready to Join the HomeProX Vendor Network?"
  Subtext: "Partner with a structured, professional property maintenance
  operator."
  Button: "Apply Now"

8. src/app/vendors/page.tsx — SEO METADATA
  title: "Vendor Partners | HomeProX Home Services LLC"
  description: "Join the HomeProX vendor network in Texas. Apply to become
  a property maintenance vendor partner. Steady work orders, transparent
  payments, statewide coverage."

9. VERIFY
- Vendor hero shows correct H1, subtitle, and both CTA buttons
- Subtext strip shows correct 4-part tagline
- Why Partner shows correct subtitle and all 4 benefit cards
- Onboarding shows all 3 steps with correct descriptions
- Requirements shows correct Requirements and Preferred lists
- Services We Assign shows all 6 correct category labels
- FAQ shows all 4 correct questions and answers
- CTA banner shows correct heading, subtext, and button
- No TypeScript errors
```

---

## CONTENT CHUNK G — Terms & Conditions Page

```
The HomeProX website is fully built.
Use @codebase to review all existing files before making any changes.

TASK: Replace all placeholder content on the Terms & Conditions page at
src/app/terms/page.tsx with the full real legal content below.
Do NOT change any styling, layout, or Tailwind classes — only update text.

If the page does not exist yet, create it now following the existing
inner-page hero pattern from other pages (bg-hero-bg, same hero section
height and styling), then a clean two-column layout with TOC sidebar on
desktop and inline on mobile.

SEO METADATA:
  title: "Terms & Conditions | HomeProX Home Services LLC"
  description: "Terms and Conditions for HomeProX Home Services LLC.
  Governing use of our website and services. Collin County, Texas."

PAGE HEADER (use inner-page hero pattern):
  H1: "Terms & Conditions"
  Subtitle: "Last Updated: February 24, 2026"

TABLE OF CONTENTS anchor links:
  1. Acceptance of Terms           → #acceptance
  2. Website Services              → #website-services
  3. User Responsibilities         → #user-responsibilities
  4. Privacy                       → #privacy
  5. Acceptable Use                → #acceptable-use
  6. Service Estimates & Contracts → #estimates
  7. Third-Party Services          → #third-party
  8. Intellectual Property         → #ip
  9. Limitation of Liability       → #liability
  10. Disclaimer of Warranties     → #warranties
  11. Indemnification              → #indemnification
  12. Governing Law                → #governing-law
  13. Copyright & Contact          → #copyright
  14. Miscellaneous                → #miscellaneous

SECTIONS (use exact text):

Section 1 (id="acceptance"):
  H2: "1. Acceptance of Terms"
  "By accessing or using the HomeProX Home Services LLC website ('Website'),
  you agree to be bound by these Terms & Conditions and our Privacy Policy.
  If you do not agree with any part of these terms, please do not use this
  Website."
  "We reserve the right to update or modify these Terms at any time without
  prior notice. Continued use of the Website constitutes acceptance of any
  changes."

Section 2 (id="website-services"):
  H2: "2. Website Services"
  "This Website is provided for informational purposes regarding handyman,
  renovation, maintenance, and related home services offered by HomeProX
  Home Services LLC."
  "All content and services are provided on an 'AS IS' basis. We reserve
  the right to modify, suspend, or discontinue any portion of the Website
  at any time without notice."
  "We are not responsible for:"
  Bullet list:
    "Temporary unavailability of the Website"
    "Technical errors"
    "Inaccurate or outdated information"

Section 3 (id="user-responsibilities"):
  H2: "3. User Responsibilities"
  "If you submit information through contact forms, service requests,
  or account registration:"
  Bullet list:
    "You agree to provide accurate and truthful information."
    "You are responsible for maintaining confidentiality of any login
    credentials."
    "You must notify us immediately of unauthorized use of your account."

Section 4 (id="privacy"):
  H2: "4. Privacy"
  "Any personal information collected through this Website is handled
  in accordance with our Privacy Policy. We do not sell personal information."

Section 5 (id="acceptable-use"):
  H2: "5. Acceptable Use"
  "You agree not to:"
  Bullet list:
    "Use this Website for unlawful purposes"
    "Submit false, misleading, defamatory, or harmful content"
    "Attempt to interfere with Website functionality"
    "Upload viruses or malicious software"
    "Engage in spam or unauthorized marketing"
  "We reserve the right to restrict access for violations of these Terms."

Section 6 (id="estimates"):
  H2: "6. Service Estimates & Contracts"
  "All project estimates provided via the Website or email are:"
  Bullet list:
    "Non-binding until confirmed in writing"
    "Subject to on-site inspection"
    "Subject to material cost changes"
    "Subject to availability of labor and scheduling"
  "A separate written service agreement may be required for project execution."

Section 7 (id="third-party"):
  H2: "7. Third-Party Services"
  "This Website may reference third-party products, materials, or services.
  HomeProX Home Services LLC is not responsible for third-party
  representations, warranties, or performance."

Section 8 (id="ip"):
  H2: "8. Intellectual Property"
  "All content on this Website — including logos, text, images, service
  descriptions, and branding — is the property of HomeProX Home Services LLC
  and may not be reproduced without written permission."

Section 9 (id="liability"):
  H2: "9. Limitation of Liability"
  "To the fullest extent permitted by Texas law, HomeProX Home Services LLC
  shall not be liable for:"
  Bullet list:
    "Direct or indirect damages"
    "Loss of profits"
    "Property damage beyond contract scope"
    "Delays caused by weather, supply chain, or third parties"
    "Consequential or incidental damages"
  "Your use of this Website is at your own risk."

Section 10 (id="warranties"):
  H2: "10. Disclaimer of Warranties"
  "The Website and its content are provided without warranties of any kind,
  either express or implied, including but not limited to:"
  Bullet list:
    "Merchantability"
    "Fitness for a particular purpose"
    "Non-infringement"
  "We do not guarantee uninterrupted, error-free, or secure Website access."

Section 11 (id="indemnification"):
  H2: "11. Indemnification"
  "You agree to indemnify and hold harmless HomeProX Home Services LLC,
  its owners, employees, contractors, and affiliates from any claims,
  damages, or legal expenses arising from your misuse of the Website or
  violation of these Terms."

Section 12 (id="governing-law"):
  H2: "12. Governing Law"
  "These Terms shall be governed by the laws of the State of Texas. Any
  disputes shall be resolved in courts located in Collin County, Texas."

Section 13 (id="copyright"):
  H2: "13. Copyright & Contact"
  "If you believe any material on this Website infringes your intellectual
  property rights, please contact:"
  Contact details (render as a clean card or simple table):
    Email:    info@homeproxsvcs.com  (clickable mailto:)
    Phone:    (469) 378-9262                 (clickable tel:4693789262)
    Location: Collin County, Texas

Section 14 (id="miscellaneous"):
  H2: "14. Miscellaneous"
  "If any provision of these Terms is deemed invalid or unenforceable,
  the remaining provisions shall remain in full force."
  "Failure to enforce any provision shall not constitute a waiver of rights."

VERIFY
- /terms page renders with all 14 sections
- "Last Updated: February 24, 2026" prominently displayed
- TOC sidebar anchor links scroll to correct sections
- Section 13 email and phone are clickable links
- Footer "Terms & Conditions" link resolves to /terms
- No TypeScript errors
```

---

## CONTENT CHUNK H — Final Content Audit & Full Verification

```
The HomeProX website is fully built and all real content has been integrated
(Content Chunks A through G complete).

Use @codebase to do a thorough audit of every file.

TASK: Search the entire codebase for any remaining dummy or placeholder
content, replace it with the correct real content, then run a full
verification pass.

1. SEARCH FOR AND REPLACE ALL PLACEHOLDER PATTERNS

Search every .tsx and .ts file for the following and fix any found:
  - Any text containing "lorem ipsum" (case-insensitive)
  - Any text containing "placeholder"
  - Any text containing "Your Company" or "Company Name"
  - Any text containing "dummy"
  - Any email other than: info@homeproxsvcs.com
  - Any phone number other than: (469) 378-9262
  - Any URL containing megafixx other than: https://homeproxsvcs.com
  - Any address/location other than "Collin County, Texas" or "Texas"
  - Any copyright year other than 2026
  - Any "Home Services" tagline that doesn't include "LLC"
  - Any heading that reads "Heading", "Title", or "Subtitle" without real content

2. VERIFY CONTACT DETAILS ARE CONSISTENT SITE-WIDE

Every page, every component — confirm:
  Company:      HomeProX Home Services LLC
  Phone:        (469) 378-9262
  Email:        info@homeproxsvcs.com
  Location:     Collin County, Texas
  Service area: All of Texas Statewide
  Website URL:  https://homeproxsvcs.com
  Copyright:    © 2026 HomeProX Home Services LLC

3. VERIFY ALL PAGE SEO METADATA

  / (homepage):
    title: "HomeProX Home Services LLC | Texas Statewide Property Maintenance"
    description: "Professional property maintenance services across Texas.
    Serving property managers, investors, banks, and REO departments statewide."

  /services:
    title: "Our Services | HomeProX Home Services LLC"
    description: "Professional property maintenance services across Texas
    including plumbing, gutter cleaning, drywall repair, landscaping, and more."

  /clients:
    title: "Our Clients | HomeProX Home Services LLC"
    description: "Trusted property maintenance partner for property managers,
    financial institutions, real estate professionals, and investors across Texas."

  /about:
    title: "About Us | HomeProX Home Services LLC"
    description: "Texas-based statewide property maintenance company serving
    property managers, investors, banks, and real estate professionals."

  /contact:
    title: "Contact Us | HomeProX Home Services LLC"
    description: "Contact HomeProX Home Services LLC for a free estimate.
    Call (469) 378-9262 or email info@homeproxsvcs.com."

  /vendors:
    title: "Vendor Partners | HomeProX Home Services LLC"
    description: "Join the HomeProX vendor network in Texas. Steady work
    orders, transparent payments, statewide coverage."

  /terms:
    title: "Terms & Conditions | HomeProX Home Services LLC"
    description: "Terms and Conditions for HomeProX Home Services LLC.
    Governing use of our website and services. Collin County, Texas."

4. VERIFY ALL INTERNAL LINKS WORK

  Navbar:
    Home → /
    Services → /services
    Our Clients → /clients
    Vendors → /vendors
    About → /about
    Contact → /contact
    "Get a Quote" button → /quote or /contact

  Footer:
    All Quick Links column links correct
    All Services column links go to /services
    "Terms & Conditions" → /terms
    Phone → tel:4693789262
    Email → mailto:info@homeproxsvcs.com

  Homepage CTAs:
    "Get a Free Quote" → /quote or /contact
    "View Our Services" → /services
    "Learn More About Our Clients →" → /clients

  Contact page quick links:
    "Become a Client" → /clients#client-onboarding
    "Become a Vendor" → /vendors#vendor-application
    "Request Service" → /quote

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
  - All routes compile: /, /services, /clients, /about, /contact, /vendors, /terms

6. FINAL BROWSER CHECKLIST

  Homepage (/):
    [ ] Badge: "Texas Statewide Property Maintenance"
    [ ] H1: "Professional Property Maintenance"
    [ ] Sub-headline: "Across Texas"
    [ ] Stats bar: 4 correct stats
    [ ] All 7 service cards show real titles and descriptions
    [ ] All 4 client type cards show real titles and descriptions
    [ ] Why Choose Us shows 3 updated cards: Fast Response, Reliable Quality,
        Scalable Support (NOT the old 4-card layout if updated)
    [ ] Quality Process shows 3 real steps
    [ ] CTA Banner: "Ready to Protect Your Properties?" + phone number
    [ ] Contact strip: real phone and email

  /services:
    [ ] Intro paragraph is real content
    [ ] Secondary paragraph "If you're looking for..." present
    [ ] All 7 service cards show real titles, descriptions, features
    [ ] Coverage regions section shows all 6 items
    [ ] Why Choose strip shows all 6 checkmarks
    [ ] Bottom CTA shows real content and phone/email

  /clients:
    [ ] Intro: "Building Long-Term Partnerships" heading
    [ ] Quote callout: "We build relationships based on performance..."
    [ ] All 4 alternating client sections show real content
    [ ] "Why Clients Choose HomeProX" 4 cards show real descriptions
    [ ] Quality Assurance 3 steps show real descriptions
    [ ] "Partner You Can Trust" section shows real copy
    [ ] Bottom CTA: "Ready to Partner with HomeProX?" + phone/email
    [ ] Benefits strip: 5 items shown when form is revealed
    [ ] Form section hidden until "Get Started" is clicked

  /about:
    [ ] Mission: both real paragraphs + quote callout
    [ ] "What We Do" 3 cards show real content
    [ ] Coverage: 5 region badges + cities line
    [ ] Values: 3 real cards (Integrity, Reliability, Quality)
    [ ] CTA: "Ready to Protect Your Properties?" + correct buttons

  /contact:
    [ ] Hero subtitle matches new copy
    [ ] Left panel: correct phone, email, service coverage, hours
    [ ] Trust strip: 3 items present
    [ ] Final CTA: "Prefer to talk?" + phone
    [ ] Quick links: Become a Client, Become a Vendor, Request Service
    [ ] 3 bottom info cards correct

  /vendors:
    [ ] Hero H1 and subtitle correct
    [ ] Subtext strip shows 4-part tagline
    [ ] Why Partner: "Built for Professionals. Designed for Growth." subtitle
    [ ] All 4 benefit cards show real titles and descriptions
    [ ] Onboarding 3 steps show real descriptions
    [ ] Requirements: 5 required + 3 preferred items
    [ ] Services We Assign: 6 correct category labels
    [ ] FAQ: 4 correct Q&A items
    [ ] CTA banner: correct heading and subtext

  /terms:
    [ ] H1: "Terms & Conditions"
    [ ] "Last Updated: February 24, 2026" visible
    [ ] All 14 sections with correct headings
    [ ] TOC anchor links work
    [ ] Section 13 email and phone clickable

  Navbar & Footer (all pages):
    [ ] Phone numbers clickable on mobile
    [ ] Email addresses open mail client
    [ ] Footer copyright: © 2026
    [ ] No broken links

Report back listing every placeholder found and replaced, and confirm
npm run build completes with zero errors.
```

---

## MASTER REFERENCE — All Real Content At A Glance

| Item | Real Value |
|---|---|
| Company Name | HomeProX Home Services LLC |
| Phone | (469) 378-9262 |
| Phone Link | tel:4693789262 |
| Email | info@homeproxsvcs.com |
| Location | Collin County, Texas |
| Service Area | All of Texas Statewide |
| Website | https://homeproxsvcs.com |
| Business Hours | Mon–Fri 8:00 AM – 5:00 PM |
| T&C Last Updated | February 24, 2026 |
| Copyright Year | 2026 |
| Governing Law | State of Texas, Collin County courts |
| Total Services | 7 |
| Total Client Types | 4 |
| Total T&C Sections | 14 |
| Total Vendor FAQ Items | 4 |

---

## WHAT CHANGED FROM PREVIOUS VERSION vs. CLIENT'S NEW CONTENT

| Section | Previous | Updated To |
|---|---|---|
| WhyChooseUs titles | Reliability / Quality Workmanship / Scalable Solutions / Professional Communication | Fast Response / Reliable Quality / Scalable Support / Professional Communication |
| WhyChooseUs subtitle | "Built on reliability, quality, and long-term partnerships" | "Responsive property maintenance backed by dependable service and professional support." |
| Contact page subtitle | "Let's talk about your property needs" | "Have a question about property maintenance, partnerships, or vendor opportunities? Send us a message..." |
| Contact hours | Mon–Fri 8AM–6PM | Mon–Fri 8AM–5PM |
| Contact service coverage | "Collin County, Texas" | "Serving Residential & Investment Properties" |
| Contact trust strip | Fast Response / Free Estimates / Statewide Coverage | Reliable Property Maintenance / Fast Response Times / Serving Residential & Investment Properties |
| Contact final CTA | Generic | "Prefer to talk? Call us directly: (469) 378-9262" |
| Contact quick links | Not present | Become a Client / Become a Vendor / Request Service |
| Vendor subtext strip | Not present | "Serving Residential Portfolios • Investment Properties • Managed Communities • Institutional Assets" |
| Vendor benefit card titles | Generic | Consistent Work Opportunities / Fast & Transparent Payments / Professional Work Environment / Statewide Coverage Opportunities |
| Services page regions | Not present | North–South Texas + major cities section |
| Services page why-choose strip | Not present | 6-item checkmark strip |

---

*End of file. Run chunks A through H in order in separate Cursor Chat sessions.
Use `@codebase` at the start of every session.*
