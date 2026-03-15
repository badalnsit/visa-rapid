# Visa Rapid — Next.js Migration Plan (For Claude Code)

**Goal:** Migrate the React.js (Vite) SPA into the existing Next.js 16 App Router codebase (`blog-web/`), creating a single unified Next.js application. The blog section already works — we are adding the main site pages alongside it.

**Golden Rule:** Move ONE component/page at a time. After each step, visually verify nothing broke before moving to the next step.

---

## CURRENT ARCHITECTURE (Before Migration)

```
visa-rapid/
├── src/                          ← React SPA (Vite) — BEING MIGRATED
│   ├── App.jsx                   ← React Router setup (8 routes)
│   ├── main.jsx                  ← Entry point
│   ├── index.css                 ← Tailwind + global resets
│   ├── styles/animations.css     ← Scroll animation CSS classes
│   ├── hooks/useScrollAnimation.js  ← IntersectionObserver hook
│   ├── components/               ← 11 shared components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ForIndividuals.jsx
│   │   ├── ForBusiness.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── StepByStep.jsx
│   │   ├── StatsSection.jsx
│   │   ├── ScheduleMeeting.jsx
│   │   ├── ContactPage.jsx
│   │   ├── FloatingButtons.jsx
│   │   └── ScrollToTop.jsx
│   └── pages/                    ← 6 visa page components
│       ├── EntrepreneurVisa.jsx
│       ├── StartupVisa.jsx
│       ├── JobSeekerVisa.jsx
│       ├── Residency.jsx
│       ├── UKInnovatorVisa.jsx
│       └── GlobalTalentVisa.jsx
├── public/                       ← Static assets (images, favicon)
├── blog-web/                     ← Next.js 16 blog app — THIS BECOMES THE UNIFIED APP
│   ├── src/app/blogs/            ← 16 blog articles (already working)
│   └── src/components/           ← Blog Navbar.tsx, Footer.tsx, RelatedArticles.tsx
├── build.js                      ← Custom hybrid build script (will be DELETED)
├── vite.config.js                ← Vite config (will be DELETED)
├── vercel.json                   ← SPA rewrite rules (will be REPLACED)
└── index.html                    ← SPA entry (will be DELETED)
```

## TARGET ARCHITECTURE (After Migration)

```
visa-rapid/
├── src/
│   ├── app/
│   │   ├── layout.tsx               ← Root layout (Navbar + Footer + FloatingButtons)
│   │   ├── page.tsx                 ← Homepage (/)
│   │   ├── globals.css              ← Merged Tailwind + animations CSS
│   │   ├── contact/page.tsx         ← Contact page (/contact)
│   │   ├── entrepreneur-visa/page.tsx
│   │   ├── startup-visa/page.tsx
│   │   ├── job-seeker-visa/page.tsx
│   │   ├── uk-innovator-visa/page.tsx
│   │   ├── global-talent-visa/page.tsx
│   │   ├── residency/page.tsx
│   │   └── blogs/                   ← Existing blog (UNTOUCHED)
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx (16 articles)
│   ├── components/
│   │   ├── Navbar.tsx               ← Unified navbar (merged from both apps)
│   │   ├── Footer.tsx               ← Unified footer (merged from both apps)
│   │   ├── FloatingButtons.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ForIndividuals.tsx
│   │   ├── ForBusiness.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── StepByStep.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ScheduleMeeting.tsx
│   │   ├── ContactPage.tsx
│   │   └── RelatedArticles.tsx      ← Existing blog component
│   └── hooks/
│       └── useScrollAnimation.ts
├── public/                          ← ALL images from both apps merged here
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── vercel.json                      ← Updated for Next.js (no SPA rewrites needed)
```

---

## PHASE 0: PREPARATION (Do This First)

### Step 0.1 — Create a Git Branch

```
cd visa-rapid
git checkout -b nextjs-migration
```

Work on this branch exclusively. The `main` branch stays untouched as your rollback.

### Step 0.2 — Promote `blog-web/` to Root

The existing `blog-web/` Next.js app becomes the new root project. We are moving INTO it, not creating a new Next.js app.

1. Copy the contents of `blog-web/` up to the project root (`visa-rapid/`), OVERWRITING the Vite config files but keeping the React `src/` folder temporarily:

```bash
# From the visa-rapid/ root directory:

# First, backup the React src folder
cp -r src src-react-backup

# Copy blog-web contents to root (overwrite package.json, tsconfig, etc.)
cp blog-web/package.json ./package.json
cp blog-web/tsconfig.json ./tsconfig.json
cp blog-web/postcss.config.mjs ./postcss.config.mjs
cp blog-web/eslint.config.mjs ./eslint.config.mjs
cp blog-web/next.config.ts ./next.config.ts
cp blog-web/next-env.d.ts ./next-env.d.ts

# Copy blog-web src to root (this becomes the new src/)
rm -rf src
cp -r blog-web/src ./src

# The React source is now in src-react-backup/
```

2. Do NOT delete `blog-web/` yet — keep it as reference until migration is verified.

### Step 0.3 — Update `package.json` Dependencies

Merge dependencies from both apps. The new `package.json` should include:

```json
{
  "name": "visa-rapid",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.4",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-calendly": "^4.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

Key changes:
- REMOVED: `react-router-dom` (Next.js has built-in file routing)
- REMOVED: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite` (no longer using Vite)
- ADDED: `react-calendly` (was in the React app, needed here too)
- KEPT: Everything from blog-web's package.json

Then run: `rm -rf node_modules package-lock.json && npm install`

### Step 0.4 — Merge Public Assets

Copy ALL images from the React app's `public/` folder into the blog-web's `public/` folder (which is now the root `public/`):

```bash
# Copy all React public assets that don't already exist in blog public
cp -n public-react-backup/* public/
```

Wait — actually, since we overwrote, let's be more careful:

```bash
# Before Step 0.2, also backup public:
cp -r public public-react-backup

# After Step 0.2, copy React public assets into the new public:
cp -rn public-react-backup/* public/
```

Make sure these files exist in `public/`:
- `logo.png`, `VR.png` (favicon)
- `comb.png`, `image3.webp`, `image4.webp`, `image7.png` (hero images)
- `Entrepreneur.webp`, `Startup1.webp`, `Visa.webp`, `Visa1.webp`, `Visa2.webp`
- `Jsv.webp`, `Job1.webp`, `gtv.jpg`, `uk-visa.jpg`
- `Residency.webp`, `residency2.webp`
- `Lawyer.png`, `Startup.png`, `WhyChooseUs.jpg`, `bgimg1.jpg`
- All `Blog*.webp`, `blog*.png` images
- `startup-transport-svgrepo-com (1).svg`

### Step 0.5 — Merge CSS Files

Create a unified `globals.css` at `src/app/globals.css` that combines BOTH:
- The blog's existing `globals.css` (Tailwind + theme variables)
- The React app's `index.css` (global resets)
- The React app's `styles/animations.css` (all animation classes)

The merged file should be:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-open-sans: var(--font-open-sans);
  --font-playfair: var(--font-playfair);
}

body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  min-height: 100vh;
  width: 100%;
  background: var(--background);
  color: var(--foreground);
}

* {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  width: 100%;
}

/* ========================================
   SCROLL ANIMATION CLASSES
   (Migrated from src/styles/animations.css)
   ======================================== */

/* Button Hover Animations */
.btn-primary:hover {
  background-color: rgb(92, 44, 1) !important;
}

.btn-secondary:hover {
  background-color: rgb(136, 90, 30) !important;
  color: white !important;
}

/* Fade Animations */
.fade-in {
  opacity: 0;
  transition: all 0.6s ease-out;
}
.fade-in.visible {
  opacity: 1;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-down {
  opacity: 0;
  transform: translateY(-30px);
  transition: all 0.8s ease-out;
}
.fade-in-down.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Animations */
.fade-in-left,
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}
.fade-in-left.visible,
.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right,
.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease-out;
}
.fade-in-right.visible,
.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Scale Animation */
.scale-in {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s ease-out;
}
.scale-in.visible {
  opacity: 1;
  transform: scale(1);
}

/* Stagger Animation */
.stagger-animation {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}
.stagger-animation.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Rotate Animation */
.rotate-in {
  opacity: 0;
  transform: rotate(-5deg);
  transition: all 0.8s ease-out;
}
.rotate-in.visible {
  opacity: 1;
  transform: rotate(0deg);
}

/* Bounce Animation */
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}
.bounce-in {
  animation: bounceIn 0.8s ease-out;
}

/* Animation Delay Utilities */
.animation-delay-100 { transition-delay: 0.1s; }
.animation-delay-200 { transition-delay: 0.2s; }
.animation-delay-300 { transition-delay: 0.3s; }
.animation-delay-400 { transition-delay: 0.4s; }
.animation-delay-500 { transition-delay: 0.5s; }

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right,
  .slide-in-left, .slide-in-right, .scale-in, .stagger-animation, .rotate-in {
    transition: none;
    animation: none;
  }
  .bounce-in {
    animation: none;
  }
}
```

### Step 0.6 — Copy the Scroll Animation Hook

Create `src/hooks/useScrollAnimation.ts` (same logic, just TypeScript):

```typescript
'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const observerOptions = useMemo(() => ({
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px 0px -50px 0px',
  }), [options.threshold, options.rootMargin])

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      observerOptions
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [observerOptions, options.once])

  return [ref, isVisible] as const
}

export default useScrollAnimation
```

### Step 0.7 — Update `next.config.ts`

Change the config to support BOTH static export AND the new pages:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

This stays the same as before — static export is still the deployment model.

### Step 0.8 — Verify Blog Still Works

```bash
npm run dev
```

Visit `http://localhost:3000/blogs/` — the blog listing and all articles should render exactly as before. If they do, Phase 0 is complete.

**CHECKPOINT: Do not proceed to Phase 1 until the blog works perfectly.**

---

## PHASE 1: ROOT LAYOUT + SHARED COMPONENTS

### Step 1.1 — Migrate the Navbar

The blog already has a `Navbar.tsx` at `src/components/Navbar.tsx`. The React app has a different `Navbar.jsx`. You need to decide which Navbar to use as the unified one.

**Recommendation:** Use the React app's `Navbar.jsx` as the base (it's more complete with dropdowns and mobile menu), and convert it to TypeScript.

1. Copy `src-react-backup/components/Navbar.jsx` to `src/components/Navbar.tsx`
2. Make these changes:
   - Add `'use client'` at the very top (it uses useState for mobile menu)
   - Replace all `<a href="/...">` and React Router `<Link to="/...">` with Next.js `<Link href="/...">` from `next/link`
   - Remove any `import { Link } from 'react-router-dom'` — replace with `import Link from 'next/link'`
   - Keep all `className`, inline styles, and event handlers EXACTLY as they are
   - Add TypeScript types where needed (e.g., `useState<boolean>(false)`)

**Pattern for EVERY Link conversion:**
```
// BEFORE (React Router):
import { Link } from 'react-router-dom'
<Link to="/entrepreneur-visa">Entrepreneur Visa</Link>

// AFTER (Next.js):
import Link from 'next/link'
<Link href="/entrepreneur-visa">Entrepreneur Visa</Link>
```

For external links (WhatsApp, Calendly), keep them as regular `<a>` tags — no change needed.

### Step 1.2 — Migrate the Footer

Same process as Navbar:

1. Copy `src-react-backup/components/Footer.jsx` to `src/components/Footer.tsx`
2. Add `'use client'` at top (if it uses any hooks or event handlers)
3. Convert `<Link to="...">` to `<Link href="...">` with `next/link`
4. Keep all styling EXACTLY the same

### Step 1.3 — Migrate FloatingButtons

1. Copy `src-react-backup/components/FloatingButtons.jsx` to `src/components/FloatingButtons.tsx`
2. Add `'use client'` at top (it uses useState + useEffect for scroll detection)
3. No Link conversion needed — it only has `<a>` tags for WhatsApp and scroll-to-top

### Step 1.4 — Update the Root Layout

Replace `src/app/layout.tsx` to include the unified Navbar, Footer, and FloatingButtons for ALL pages (both main site and blog):

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Visa Rapid — Move to Europe Permanently",
    template: "%s | Visa Rapid",
  },
  description: "Visa Rapid helps working professionals move to Europe permanently through business, startup, and job seeker visa pathways. Book a free consultation today.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="any" href="/VR.png" />
        <link rel="apple-touch-icon" href="/VR.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${playfair.variable} antialiased min-h-screen w-full bg-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
```

### Step 1.5 — Update the Blog Layout

Since the root layout now includes Navbar and Footer, the blog's `src/app/blogs/layout.tsx` should be simplified to REMOVE its own Navbar and Footer (otherwise they'd appear twice):

```tsx
export default function BlogLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

Or simply delete `src/app/blogs/layout.tsx` entirely if it only contained Navbar/Footer wrapping.

### Step 1.6 — Verify

```bash
npm run dev
```

- Visit `/blogs/` — should show blog listing with the NEW unified Navbar/Footer (not double Navbars)
- Visit `/blogs/opportunity-card/` — should render the blog article correctly
- Check mobile menu works on Navbar
- Check Footer links are correct
- Check FloatingButtons (WhatsApp + scroll-to-top) appear

**CHECKPOINT: All blog pages render correctly with the unified layout before proceeding.**

---

## PHASE 2: MIGRATE THE HOMEPAGE

### Step 2.1 — Migrate Homepage Section Components

Copy these components one at a time from `src-react-backup/components/` to `src/components/`. For EACH one:

1. Rename `.jsx` to `.tsx`
2. Add `'use client'` at the top (they all use `useScrollAnimation` hook)
3. Replace `import useScrollAnimation from '../hooks/useScrollAnimation'` with `import useScrollAnimation from '@/hooks/useScrollAnimation'`
4. Convert any `<Link to="...">` to `<Link href="...">` (import from `next/link`)
5. Keep ALL Tailwind classes, inline styles, and event handlers EXACTLY as-is
6. Add minimal TypeScript types (function params, state)

**Migration order (do one at a time, verify each):**

| # | Component | Has Links? | Has State? | Has useScrollAnimation? |
|---|-----------|-----------|-----------|------------------------|
| 1 | `HeroSection.tsx` | Yes (Calendly CTA) | No | Yes |
| 2 | `ForIndividuals.tsx` | Yes (modal form) | Yes (modal state, form state) | Yes |
| 3 | `ForBusiness.tsx` | Yes (schedule meeting CTA) | No | Yes |
| 4 | `WhyChooseUs.tsx` | Yes (contact CTA) | No | Yes |
| 5 | `StepByStep.tsx` | No | No | Yes |
| 6 | `StatsSection.tsx` | No | No | Yes |
| 7 | `ScheduleMeeting.tsx` | Yes (Calendly + WhatsApp) | No | Yes |

**Important for `ForIndividuals.tsx`:** This has a modal form with validation. Make sure:
- The `useState` for modal open/close is preserved
- The form validation (email regex, phone check) is preserved
- The `document.body.style.overflow` toggle for modal backdrop is preserved
- All of this works in `'use client'` mode

### Step 2.2 — Create the Homepage

Create `src/app/page.tsx`:

```tsx
import HeroSection from "@/components/HeroSection";
import ForIndividuals from "@/components/ForIndividuals";
import ForBusiness from "@/components/ForBusiness";
import WhyChooseUs from "@/components/WhyChooseUs";
import StepByStep from "@/components/StepByStep";
import StatsSection from "@/components/StatsSection";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ForIndividuals />
      <ForBusiness />
      <WhyChooseUs />
      <StepByStep />
      <StatsSection />
      <ScheduleMeeting />
    </>
  );
}
```

Note: Footer is already in the root layout — do NOT add it here.

### Step 2.3 — Verify Homepage

```bash
npm run dev
```

- Visit `http://localhost:3000/` — should see the full homepage
- Scroll through ALL sections — verify animations trigger correctly
- Test the modal form in ForIndividuals (open, fill, validate, close)
- Test all CTA buttons (WhatsApp, Calendly links)
- Test responsive: resize to mobile, check layout doesn't break
- Compare with the old Vite version side-by-side if possible

**CHECKPOINT: Homepage looks identical to the old version before proceeding.**

---

## PHASE 3: MIGRATE VISA PAGES (One at a Time)

For EACH visa page, follow this exact process:

### General Pattern for Each Page

1. Copy from `src-react-backup/pages/[PageName].jsx` to `src/app/[route-slug]/page.tsx`
2. The file goes into a FOLDER matching the URL slug:
   - `EntrepreneurVisa.jsx` → `src/app/entrepreneur-visa/page.tsx`
   - `StartupVisa.jsx` → `src/app/startup-visa/page.tsx`
   - `JobSeekerVisa.jsx` → `src/app/job-seeker-visa/page.tsx`
   - `UKInnovatorVisa.jsx` → `src/app/uk-innovator-visa/page.tsx`
   - `GlobalTalentVisa.jsx` → `src/app/global-talent-visa/page.tsx`
   - `Residency.jsx` → `src/app/residency/page.tsx`
3. Restructure from a default-exported component to a Next.js page with metadata

**Conversion pattern:**

```tsx
// BEFORE (React component):
import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { InlineWidget } from 'react-calendly'

const EntrepreneurVisa = () => {
  // ... component logic
  return (<div>...</div>)
}
export default EntrepreneurVisa

// AFTER (Next.js page):
// Step A: Create a client component for the page content
// File: src/components/EntrepreneurVisaContent.tsx
'use client'
import useScrollAnimation from '@/hooks/useScrollAnimation'
import { InlineWidget } from 'react-calendly'

export default function EntrepreneurVisaContent() {
  // ... same component logic, same JSX, same styles
  return (<div>...</div>)
}

// Step B: Create the page file with metadata
// File: src/app/entrepreneur-visa/page.tsx
import { Metadata } from 'next'
import EntrepreneurVisaContent from '@/components/EntrepreneurVisaContent'

export const metadata: Metadata = {
  title: 'Portugal D2 Entrepreneur Visa — Requirements & Process',
  description: 'Complete guide to the Portugal D2 Entrepreneur Visa...',
}

export default function EntrepreneurVisaPage() {
  return <EntrepreneurVisaContent />
}
```

**Why split into two files?** Because:
- The page.tsx file is a SERVER component (can export `metadata` for SEO)
- The content component is a CLIENT component (needs `'use client'` for hooks, Calendly, etc.)
- This is the standard Next.js pattern

### Step 3.1 — Entrepreneur Visa Page

1. Create `src/components/EntrepreneurVisaContent.tsx` — copy the JSX from `EntrepreneurVisa.jsx`
   - Add `'use client'`
   - Update hook import path to `@/hooks/useScrollAnimation`
   - Remove Footer import (it's in root layout)
   - Keep Calendly `<InlineWidget>` as-is
2. Create `src/app/entrepreneur-visa/page.tsx` — server component with metadata + renders content
3. **Verify:** Visit `/entrepreneur-visa/` — compare with old version

### Step 3.2 — Startup Visa Page

Same pattern. File: `src/app/startup-visa/page.tsx` + `src/components/StartupVisaContent.tsx`
- **Verify:** Visit `/startup-visa/`

### Step 3.3 — Job Seeker Visa Page

Same pattern. File: `src/app/job-seeker-visa/page.tsx` + `src/components/JobSeekerVisaContent.tsx`
- **Special attention:** This page has a modal form (like ForIndividuals). Ensure modal state works.
- **Verify:** Visit `/job-seeker-visa/`

### Step 3.4 — UK Innovator Visa Page

Same pattern. File: `src/app/uk-innovator-visa/page.tsx` + `src/components/UKInnovatorVisaContent.tsx`
- **Verify:** Visit `/uk-innovator-visa/`

### Step 3.5 — Global Talent Visa Page

Same pattern. File: `src/app/global-talent-visa/page.tsx` + `src/components/GlobalTalentVisaContent.tsx`
- **Verify:** Visit `/global-talent-visa/`

### Step 3.6 — Residency Page

Same pattern. File: `src/app/residency/page.tsx` + `src/components/ResidencyContent.tsx`
- **Verify:** Visit `/residency/`

### Step 3.7 — Contact Page

Same pattern. File: `src/app/contact/page.tsx` + `src/components/ContactPageContent.tsx`
- **Verify:** Visit `/contact/`

**CHECKPOINT: ALL 8 pages (home + 6 visa + contact) render identically to old version.**

---

## PHASE 4: CLEANUP + DEPLOYMENT CONFIG

### Step 4.1 — Delete Old Files

Once ALL pages are verified working:

```bash
# Delete the old React-specific files
rm -f vite.config.js
rm -f build.js
rm -f index.html
rm -f eslint.config.js
rm -rf src-react-backup

# Delete the old blog-web subfolder (it's now the root app)
rm -rf blog-web

# Delete old App.jsx, main.jsx, etc. if they still exist
rm -f src/App.jsx src/App.css src/main.jsx
```

### Step 4.2 — Update `vercel.json`

The old SPA rewrite is no longer needed. Next.js handles routing natively. Replace with:

```json
{
  "framework": "nextjs"
}
```

Or simply delete `vercel.json` entirely — Vercel auto-detects Next.js projects.

**Important note:** Since we're using `output: 'export'` (static export), Vercel will generate static HTML. If you want server-side rendering later, just remove `output: 'export'` from `next.config.ts`.

### Step 4.3 — Update `.gitignore`

Make sure `.gitignore` includes:

```
node_modules/
.next/
out/
dist/
.env
.env.local
```

### Step 4.4 — Apollo Tracking Script

The Apollo tracking script from the old `index.html` needs to be added to the Next.js app. Add it to the root layout's `<head>`:

```tsx
// In src/app/layout.tsx, inside <head>:
<script
  dangerouslySetInnerHTML={{
    __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
    o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
    o.onload=function(){window.trackingFunctions.onLoad({appId:"69a5244143c84d00112ab94f"})},
    document.head.appendChild(o)}initApollo();`
  }}
/>
```

### Step 4.5 — Test Full Build

```bash
npm run build
```

This should generate static HTML in the `out/` folder. Verify:
- `out/index.html` exists (homepage)
- `out/entrepreneur-visa/index.html` exists
- `out/startup-visa/index.html` exists
- `out/job-seeker-visa/index.html` exists
- `out/uk-innovator-visa/index.html` exists
- `out/global-talent-visa/index.html` exists
- `out/residency/index.html` exists
- `out/contact/index.html` exists
- `out/blogs/index.html` exists
- All blog article folders exist under `out/blogs/`

### Step 4.6 — Test Production Locally

```bash
npx serve out
```

Visit each page, click every link, test mobile responsiveness.

**CHECKPOINT: Full build succeeds and all pages work in production mode.**

---

## PHASE 5: SEO IMPROVEMENTS (Post-Migration)

Now that you're on Next.js, these become trivial to implement.

### Step 5.1 — Per-Page Metadata (Titles + Descriptions)

Already done during Phase 3! Each page.tsx has its own `export const metadata`. Here are the recommended values:

```typescript
// Homepage (src/app/page.tsx — use layout.tsx default)
// Title: "Visa Rapid — Move to Europe Permanently"
// Description: "Visa Rapid helps working professionals move to Europe permanently through business, startup, and job seeker visa pathways. Book a free consultation today."

// Entrepreneur Visa
{ title: "Portugal D2 Entrepreneur Visa — Requirements & Process", description: "Complete guide to the Portugal D2 Entrepreneur Visa. Learn eligibility, required documents, processing timeline, and how to apply with Visa Rapid." }

// Startup Visa
{ title: "European Startup Visa Programs — Apply with Visa Rapid", description: "Launch your startup in Europe with visa programs in Portugal, France, and beyond. Incubator support, tax benefits, and pathway to EU citizenship." }

// Job Seeker Visa
{ title: "Germany Opportunity Card (Chancenkarte) — Job Seeker Visa", description: "Germany's points-based Opportunity Card lets skilled professionals search for jobs in Germany. Learn requirements, eligibility, and how to apply." }

// UK Innovator Visa
{ title: "UK Innovator Founder Visa — Requirements & Application Guide", description: "Start an innovative business in the UK with the Innovator Founder Visa. Endorsement bodies, eligibility criteria, and step-by-step application process." }

// Global Talent Visa
{ title: "UK Global Talent Visa — For Tech, Science & Arts Leaders", description: "The UK Global Talent Visa for exceptional talent in tech, science, arts, and research. Learn about endorsing bodies and the application process." }

// Residency
{ title: "Portugal D7 Passive Income Visa — Residency Guide", description: "Portugal's D7 visa for retirees and remote workers with passive income. NHR tax benefits, healthcare access, and pathway to EU citizenship." }

// Contact
{ title: "Book a Consultation — Visa Rapid", description: "Schedule a free 30-minute consultation with Visa Rapid's immigration experts. Get personalized visa guidance for your move to Europe." }
```

### Step 5.2 — Canonical Tags + Robots Meta

Add to the root layout metadata:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.visarapid.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // ... rest of metadata
}
```

Each page can override the canonical:

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: '/entrepreneur-visa',
  },
}
```

### Step 5.3 — Open Graph + Twitter Card Tags

Add to root layout metadata (and override per page):

```typescript
export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.visarapid.com',
    siteName: 'Visa Rapid',
    title: 'Visa Rapid — Move to Europe Permanently',
    description: 'Visa Rapid helps working professionals move to Europe permanently.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Visa Rapid' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Rapid — Move to Europe Permanently',
    description: 'Visa Rapid helps working professionals move to Europe permanently.',
    images: ['/og-image.jpg'],
  },
}
```

**NOTE:** You'll need to create an OG image (1200x630px) at `public/og-image.jpg`.

### Step 5.4 — Add `robots.txt`

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin/

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://www.visarapid.com/sitemap.xml
```

### Step 5.5 — Add `sitemap.xml`

Create `src/app/sitemap.ts`:

```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.visarapid.com'

  const mainPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/entrepreneur-visa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/startup-visa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/job-seeker-visa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/uk-innovator-visa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/global-talent-visa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/residency`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  const blogSlugs = [
    'affordable-overseas-option', 'best-countries-software-engineers', 'blue-card-vs-opportunity-card',
    'eu-citizenship-entrepreneur-guide', 'europe-startup-visa-comparison', 'european-immigration-market-trends-2026',
    'moving-to-europe-from-usa-2026', 'opportunity-card', 'portugal-benefits-entrepreneurs', 'portugal-d2-visa',
    'portugal-d2-visa-entrepreneur-guide-2026', 'portugal-d7-visa-guide', 'portugal-startup-ecosystem-2025',
    'portugal-startup-visa-comparison', 'retiring-in-portugal-golden-visa-d7',
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...blogPages]
}
```

### Step 5.6 — Add `llms.txt`

Create `public/llms.txt`:

```
# Visa Rapid
> Visa Rapid is an immigration consultancy that helps working professionals
> move to Europe permanently through business, startup, job seeker, passive
> income, and global talent visa pathways.

## Services
- [Business Owner Visa (Portugal D2)](https://www.visarapid.com/entrepreneur-visa)
- [Startup Visa (Europe)](https://www.visarapid.com/startup-visa)
- [Job Seeker Visa (Germany Opportunity Card)](https://www.visarapid.com/job-seeker-visa)
- [UK Innovator Founder Visa](https://www.visarapid.com/uk-innovator-visa)
- [UK Global Talent Visa](https://www.visarapid.com/global-talent-visa)
- [Passive Income Visa (Portugal D7)](https://www.visarapid.com/residency)

## Blog
- [All Articles](https://www.visarapid.com/blogs)

## Contact
- Website: https://www.visarapid.com
- Email: nikita@visarapid.com
- Phone: +91-9910578099
- Book a Consultation: https://calendly.com/nikita-visarapid/30min
```

### Step 5.7 — Add H1 to Homepage

In `HeroSection.tsx`, ensure the main headline uses an `<h1>` tag (not `<h2>` or `<p>`):

```tsx
<h1 className="text-4xl lg:text-6xl font-bold ...">
  Move to Europe <span className="text-yellow-500">Permanently</span>
</h1>
```

### Step 5.8 — Add Structured Data (JSON-LD)

Create a reusable component at `src/components/StructuredData.tsx`:

```tsx
export default function StructuredData({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

Add Organization schema to the root layout and page-specific schema to each visa page.

---

## QUICK REFERENCE: What Changes Per Component

| Change | Search For | Replace With |
|--------|-----------|-------------|
| Router Links | `import { Link } from 'react-router-dom'` | `import Link from 'next/link'` |
| Link prop | `<Link to="/path">` | `<Link href="/path">` |
| useNavigate | `import { useNavigate } from 'react-router-dom'` | `import { useRouter } from 'next/navigation'` |
| navigate() | `navigate('/path')` | `router.push('/path')` |
| Hook import | `from '../hooks/useScrollAnimation'` | `from '@/hooks/useScrollAnimation'` |
| Component import | `from '../components/Foo'` | `from '@/components/Foo'` |
| Client directive | (nothing) | `'use client'` at top of file |
| File extension | `.jsx` | `.tsx` |
| ScrollToTop | `<ScrollToTop />` in App | DELETE — Next.js handles this natively |

## THINGS THAT STAY EXACTLY THE SAME (No Changes)

- All Tailwind CSS classes
- All inline styles
- All `className` values
- All `useState`, `useEffect`, `useRef` hooks
- All `IntersectionObserver` logic
- All form validation logic
- All modal open/close logic
- All image `<img>` tags and `src` paths (e.g., `/comb.png` still works)
- All external links (`<a href="https://wa.me/...">`)
- All `react-calendly` usage (`<InlineWidget>`)
- All animation CSS classes
- All responsive breakpoints

---

## MIGRATION CHECKLIST

Use this to track progress:

- [ ] Phase 0: Preparation
  - [ ] Git branch created
  - [ ] blog-web promoted to root
  - [ ] Dependencies merged and installed
  - [ ] Public assets merged
  - [ ] CSS merged (globals + animations)
  - [ ] useScrollAnimation hook converted to TS
  - [ ] Blog still works at /blogs/

- [ ] Phase 1: Root Layout + Shared Components
  - [ ] Navbar migrated (with `'use client'` + next/link)
  - [ ] Footer migrated
  - [ ] FloatingButtons migrated
  - [ ] Root layout updated
  - [ ] Blog layout simplified (no double Navbar/Footer)
  - [ ] Blog still renders correctly

- [ ] Phase 2: Homepage
  - [ ] HeroSection migrated
  - [ ] ForIndividuals migrated (modal + form working)
  - [ ] ForBusiness migrated
  - [ ] WhyChooseUs migrated
  - [ ] StepByStep migrated
  - [ ] StatsSection migrated
  - [ ] ScheduleMeeting migrated
  - [ ] Homepage renders identically at /

- [ ] Phase 3: Visa Pages
  - [ ] /entrepreneur-visa — renders correctly
  - [ ] /startup-visa — renders correctly
  - [ ] /job-seeker-visa — renders correctly (modal works)
  - [ ] /uk-innovator-visa — renders correctly
  - [ ] /global-talent-visa — renders correctly
  - [ ] /residency — renders correctly
  - [ ] /contact — renders correctly

- [ ] Phase 4: Cleanup + Deploy
  - [ ] Old files deleted (vite.config, build.js, index.html, blog-web/)
  - [ ] vercel.json updated
  - [ ] Apollo tracking added to layout
  - [ ] Full build succeeds (`npm run build`)
  - [ ] All pages work in production mode

- [ ] Phase 5: SEO
  - [ ] Unique titles + descriptions on all pages
  - [ ] Canonical tags added
  - [ ] OG + Twitter card tags added
  - [ ] robots.txt created
  - [ ] sitemap.xml generated
  - [ ] llms.txt created
  - [ ] H1 tag on homepage
  - [ ] Structured data (JSON-LD) on key pages
