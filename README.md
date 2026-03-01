# MEGAFIXX Home Services LLC Website

A production-grade, fully responsive Next.js website for MEGAFIXX Home Services LLC, a Texas statewide property maintenance company serving property managers, investors, banks, and REO departments.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework (CSS-based configuration via `@theme {}`)
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy the environment variables file:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your site URL:

```
NEXT_PUBLIC_SITE_URL=https://megafixxhomeservices.com
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── clients/           # Clients page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── terms/             # Terms & Conditions page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles & Tailwind v4 theme
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/
│   ├── layout/            # Layout components (Navbar, Footer, PageWrapper)
│   ├── sections/          # Page sections (Hero, ServicesSection, etc.)
│   ├── cards/             # Reusable card components
│   ├── forms/             # Form components
│   ├── ui/                # UI components (Button, SectionHeading, etc.)
│   └── shared/            # Shared components (ScrollToTop)
├── lib/
│   ├── data/              # Data files (services, clients, testimonials)
│   ├── metadata.ts       # SEO metadata utilities
│   └── utils/             # Utility functions
├── types/                 # TypeScript type definitions
└── hooks/                 # Custom React hooks
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

- `NEXT_PUBLIC_SITE_URL` - The public URL of your site (used for metadata and SEO)

## Design System

The project uses Tailwind CSS v4 with a CSS-based theme configuration. All design tokens are defined in `src/app/globals.css` under `@theme {}`:

- **Colors**: Navy shades (950, 900, 800, 700), Gold (#C89B3C), Orange (#E07B39), Muted (#A0AEC0)
- **Fonts**: Barlow Condensed (display), DM Sans (body), Barlow (accent)
- **No tailwind.config.ts** - All theme configuration lives in `globals.css`

## Image Credits

All images are sourced from:
- **Unsplash** - Free for commercial use
- **Pexels** - Free for commercial use

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Accessibility compliant (WCAG AA)
- ✅ Smooth animations with reduced motion support
- ✅ Image optimization with Next.js Image component
- ✅ Type-safe with TypeScript
- ✅ Performance optimized

## Production Deployment

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

Or deploy to platforms like Vercel, Netlify, or any Node.js hosting service.

## License

© 2024 MEGAFIXX Home Services LLC. All rights reserved.
