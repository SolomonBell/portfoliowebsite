# Personal Portfolio Website

## Overview

A personal portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The site presents projects, certificates, skills, and contact information through a cohesive dark-themed UI with an interactive flip-card system. It is deployed on Vercel with a custom domain via Cloudflare DNS and tracked with Google Analytics.

## Features

- **Interactive flip cards** — project and certificate cards reveal detail on hover (desktop) or tap (mobile), using pointer-type detection to drive distinct interaction modes
- **Horizontal scroll carousels** — projects and certificates browse naturally on any screen size without pagination
- **Responsive, mobile-first layout** — consistent experience across phones, tablets, and desktops
- **Single-page navigation** — anchor-linked sections (About, Projects, Certificates, Hobbies, Contact) with a sticky navbar
- **Resume download** — direct link to a hosted resume from the navbar
- **Google Analytics** — page-view tracking injected conditionally via environment variable, with no client-side bundle cost when the ID is absent
- **Vercel deployment** — zero-config CI/CD on every push to `main`

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Deployment | Vercel |
| DNS | Cloudflare |
| Analytics | Google Analytics (gtag.js) |

## Architecture

```
app/
├── layout.tsx              # Root layout — metadata, GA script injection, global styles
├── page.tsx                # Single-page composition of all sections
├── globals.css             # Tailwind base styles
│
├── components/
│   ├── Navbar.tsx          # Sticky nav with anchor links and resume CTA
│   ├── Section.tsx         # Reusable section wrapper (padding, border, max-width)
│   └── ui/
│       ├── FlipCard.tsx        # Generic flip-card primitive
│       ├── ProjectFlipCard.tsx # Project variant — image front, skills + links back
│       ├── CertFlipCard.tsx    # Certificate variant — image front, skills back
│       ├── Button.tsx          # Styled button primitive
│       └── Card.tsx            # Generic card primitive
│
├── sections/
│   ├── Hero.tsx            # Name, tagline, CTA links
│   ├── About.tsx           # Background, school, location
│   ├── Projects.tsx        # Horizontal scroll of ProjectFlipCards + "coming soon" slot
│   ├── Certificates.tsx    # Horizontal scroll of CertFlipCards
│   ├── Hobbies.tsx         # Personal interests
│   └── Contact.tsx         # Email, LinkedIn, GitHub links
│
└── lib/
    ├── constants.ts        # Centralised site metadata, nav links, and external URLs
    └── utils.ts            # Shared utility helpers

public/
└── images/                 # Optimised project and certificate preview images
```

**Server vs. client boundary:** The root layout, page, and all section components are React Server Components. Only the interactive card components (`ProjectFlipCard`, `CertFlipCard`) are marked `"use client"`, keeping the client-side JavaScript bundle minimal.

## Key Highlights

- **Pointer-type detection for hybrid interaction** — cards distinguish mouse from touch input using the `pointerType` field on pointer events. Mouse users get hover-to-flip; touch users get tap-to-toggle. This replaced an earlier 3D CSS transform approach that had persistent rendering bugs in Safari on iOS.

- **Eliminated Safari 3D transform issues** — the original flip animation used `rotateY` with `backface-visibility: hidden`, which Safari rendered inconsistently. The redesign replaced the CSS transform entirely with conditional rendering (`showBack ? <Back /> : <Front />`), achieving the same perceived interaction with zero browser compatibility risk.

- **Centralised data layer** — all site copy (name, school, links) lives in `lib/constants.ts` and project/certificate data is co-located with its section component. There is no CMS dependency; updates are a one-line change.

- **Minimal client bundle** — server components handle all static rendering; only the two card variants ship JavaScript to the browser, keeping Lighthouse performance scores high.

- **Collaboration provenance on cards** — project cards surface whether work was built independently or in collaboration, with a linked attribution badge on the card back.

- **Environment-gated analytics** — GA is injected only when `NEXT_PUBLIC_GA_ID` is set, so local development and staging environments produce no analytics noise.

## Getting Started

**Prerequisites:** Node.js 18+, npm

```bash
# Clone the repository
git clone https://github.com/SolomonBell/portfoliowebsite.git
cd portfoliowebsite

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Available scripts:**

```bash
npm run dev      # Development server with Fast Refresh
npm run build    # Production build
npm run start    # Serve the production build locally
npm run lint     # Run ESLint
```

**Environment variables (optional):**

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX   # Google Analytics measurement ID
```

## Future Improvements

- Add project detail pages with full write-ups, architecture diagrams, and lessons learned
- Integrate a lightweight CMS (e.g. Contentlayer or MDX) to manage project and certificate data without touching component code
- Expand the Certificates section with additional coursework and professional certifications
- Add scroll-triggered entrance animations using the Intersection Observer API
- Improve accessibility with ARIA labels on interactive cards and skip-to-content navigation

## Author

**Solomon Bell**
Computer Science & Engineering + Mathematical Economics — Bucknell University
[LinkedIn](https://www.linkedin.com/in/solomonbell) · [GitHub](https://github.com/SolomonBell)
