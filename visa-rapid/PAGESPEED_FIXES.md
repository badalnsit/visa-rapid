# Visa Rapid — PageSpeed Insights Fix Guide

**Source:** PageSpeed Insights report from Mar 20, 2026 (Lighthouse 13.0.1)

## Current Scores (Before Fixes)

**Mobile** (Emulated Moto G Power, Slow 4G throttling):
| Category | Score | Rating |
|----------|-------|--------|
| Performance | 73 | Needs Improvement (orange) |
| Accessibility | 88 | Needs Improvement (orange) |
| Best Practices | 96 | Good (green) |
| SEO | 100 | Perfect (green) |

**Desktop** (Emulated Desktop, Custom throttling):
| Category | Score | Rating |
|----------|-------|--------|
| Performance | 98 | Good (green) |
| Accessibility | 90 | Needs Improvement (orange) |
| Best Practices | 96 | Good (green) |
| SEO | 100 | Perfect (green) |

**Core Web Vitals (Mobile):**
| Metric | Value | Rating |
|--------|-------|--------|
| First Contentful Paint (FCP) | 0.9s | Good (green) |
| Largest Contentful Paint (LCP) | 7.6s | Poor (red) — **THIS IS THE MAIN PROBLEM** |
| Total Blocking Time (TBT) | 200ms | Good (green) |
| Cumulative Layout Shift (CLS) | 0 | Good (green) |
| Speed Index (SI) | 2.9s | Good (green) |

**Core Web Vitals (Desktop):**
| Metric | Value | Rating |
|--------|-------|--------|
| First Contentful Paint (FCP) | 0.2s | Good (green) |
| Largest Contentful Paint (LCP) | 1.1s | Good (green) |
| Total Blocking Time (TBT) | 0ms | Good (green) |
| Cumulative Layout Shift (CLS) | 0 | Good (green) |
| Speed Index (SI) | 0.8s | Good (green) |

**Key difference:** Mobile LCP = `image3.webp` (ForIndividuals hero), Desktop LCP = `logo.png` (Navbar). Fixes must address both without breaking the other.

**Target:** Get Performance to 90+ and Accessibility to 95+ on both mobile and desktop.

---

## SECTION A: TECHNICAL FIXES (For Claude Code)

These are code-level changes that can be implemented directly.

---

### FIX 1: Optimize Images (CRITICAL — saves ~1,814 KiB, fixes LCP)

**Impact:** This is the single biggest performance win. Images account for 3,317 KiB of the 3,590 KiB total page weight.

**Problem images and fixes:**

#### 1a. `/public/comb.png` — 1,361.4 KiB (THE BIGGEST OFFENDER)
This image doesn't appear in the "Improve image delivery" audit but is the largest network resource. It's likely a background/decorative image.

**Fix:**
- Convert from PNG to WebP: `cwebp -q 80 public/comb.png -o public/comb.webp`
- Update all references in components from `comb.png` to `comb.webp`
- Target file size: under 200 KiB

#### 1b. `/public/image4.webp` — 837.7 KiB → Target: ~73 KiB
**Problem:** Image actual dimensions are 2743x2774 but displayed at 665x993. Massively oversized.

**Fix:**
- Resize to max 1330x1986 (2x the display size for retina):
```bash
# Using sharp or imagemagick
convert public/image4.webp -resize 1330x1986 -quality 80 public/image4.webp
```
- Or use Next.js `<Image>` component with `sizes` prop (see Fix 2)

#### 1c. `/public/image7.png` — 671.4 KiB → Target: ~47 KiB
**Problem:** PNG format, needs WebP/AVIF conversion.

**Fix:**
- Convert to WebP: `cwebp -q 80 public/image7.png -o public/image7.webp`
- Update all `src="/image7.png"` references to `src="/image7.webp"` in components
- Target file size: under 100 KiB

#### 1d. `/public/image3.webp` — 328.3 KiB → Target: ~19 KiB
**Problem:** Image actual dimensions are 3165x3197 but displayed at 665x861. Massively oversized.

**Fix:**
- Resize to max 1330x1722 (2x display):
```bash
convert public/image3.webp -resize 1330x1722 -quality 80 public/image3.webp
```

#### 1e. `/public/logo.png` — 117.3 KiB → Target: ~3 KiB
**Problem:** Logo is 1117x206 but displayed at 304x56. Also PNG format.

**Fix:**
- Resize to max 608x112 (2x display for retina)
- Convert to WebP: `cwebp -q 90 public/logo.png -o public/logo.webp`
- Update Navbar.tsx: change `src="/logo.png"` to `src="/logo.webp"`
- Target file size: under 10 KiB

**Search for all image references to update:**
```bash
grep -rn "image4\.webp\|image7\.png\|image3\.webp\|logo\.png\|comb\.png" src/
```

---

### FIX 2: Add `fetchpriority="high"` to LCP Image (CRITICAL — fixes LCP discovery)

**Problem:** The LCP element is the logo image. PageSpeed flagged that `fetchpriority=high` should be applied.

**File:** `src/components/Navbar.tsx`

**Current code (find this):**
```tsx
<img src="/logo.png" alt="Visa-Rapid" className="h-8 sm:h-10 w-auto">
```

**Fix — change to:**
```tsx
<img src="/logo.webp" alt="Visa-Rapid" className="h-8 sm:h-10 w-auto" fetchPriority="high" width={304} height={56}>
```

Note: Also adds explicit `width` and `height` attributes (see Fix 3).

---

### FIX 3: Add Explicit `width` and `height` to All Images (Accessibility + CLS)

**Problem:** Two images flagged without explicit width/height attributes. This causes layout shifts and accessibility issues.

**Fix for logo in `src/components/Navbar.tsx`:**
```tsx
// Change:
<img src="/logo.png" alt="Visa-Rapid" className="h-8 sm:h-10 w-auto">

// To:
<img src="/logo.webp" alt="Visa-Rapid" className="h-8 sm:h-10 w-auto" width={304} height={56} fetchPriority="high">
```

**Fix for Lawyer image in `src/components/ScheduleMeeting.tsx` (or wherever it is):**
```tsx
// Find the Lawyer image tag and add width/height:
<img src="..." alt="Lawyer" className="h-[350px] sm:h-[400px] lg:h-[550px] w-auto object-cover object-center ..." loading="lazy" width={400} height={550}>
```

**Search for all `<img` tags missing width/height:**
```bash
grep -rn '<img ' src/ | grep -v 'width='
```
Add explicit `width` and `height` attributes to every `<img>` tag found.

---

### FIX 4: Add `aria-label` to Mobile Menu Button (Accessibility)

**Problem:** The mobile hamburger menu button has no accessible name. Screen readers announce it as just "button".

**File:** `src/components/Navbar.tsx`

**Find the hamburger button (it has `class="focus:outline-none"` and the brown color style):**
```tsx
<button className="focus:outline-none" style={{color: 'rgb(111, 54, 2)', backgroundColor: 'transparent', border: 'none'}}>
```

**Fix — add `aria-label`:**
```tsx
<button className="focus:outline-none" aria-label="Open navigation menu" style={{color: 'rgb(111, 54, 2)', backgroundColor: 'transparent', border: 'none'}}>
```

---

### FIX 5: Add `aria-label` to Social Media Links (Accessibility)

**Problem:** The footer social media icon links (LinkedIn, YouTube, Instagram) have no discernible text for screen readers.

**File:** `src/components/Footer.tsx`

**Find each social link and add `aria-label`:**

```tsx
// LinkedIn link — add aria-label:
<a href="https://www.linkedin.com/in/nikita-20062a93/" aria-label="Visit our LinkedIn profile" className="w-10 h-10 rounded transition-colors flex items-center justify-center" style={{backgroundColor:'#374151', color:'#ffffff'}}>

// YouTube link — add aria-label:
<a href="https://www.youtube.com/@visa_rapid" aria-label="Visit our YouTube channel" className="w-10 h-10 rounded transition-colors flex items-center justify-center" style={{backgroundColor:'#374151', color:'#ffffff'}}>

// Instagram link — add aria-label:
<a href="https://www.instagram.com/visa.rapid/" aria-label="Visit our Instagram page" className="w-10 h-10 rounded transition-colors flex items-center justify-center" style={{backgroundColor:'#374151', color:'#ffffff'}}>
```

---

### FIX 6: Fix Heading Hierarchy (Accessibility)

**Problem:** Heading elements skip levels — an `<h4>` appears without a preceding `<h3>`, breaking the semantic structure.

**Failing element:** `<h4 class="text-xl lg:text-2xl font-medium text-gray-900 leading-tight">` with text "Visa Rapid has the solution you need today:"

**Find this in the component (likely `ForIndividuals.tsx` or `ForBusiness.tsx`) and change `<h4>` to `<h3>`:**
```tsx
// Change:
<h4 className="text-xl lg:text-2xl font-medium text-gray-900 leading-tight">

// To:
<h3 className="text-xl lg:text-2xl font-medium text-gray-900 leading-tight">
```

**Also audit all headings across the page to ensure they follow h1 → h2 → h3 → h4 order without skips:**
```bash
grep -rn '<h[1-6]' src/components/ | sort
```
Fix any heading that skips a level.

---

### FIX 7: Fix SVG Path Error (Best Practices)

**Problem:** Console error: `Error: <path> attribute d: Expected arc flag ('0' or '1')` — an SVG icon has a malformed `d` attribute.

**The error references a path containing `"… 3-9m-9 9a9 9 0 919-9"`.**

**Find and fix:**
```bash
grep -rn '919-9\|9a9 9 0 919' src/
```
The arc flag in an SVG path must be `0` or `1`. The issue is likely `919-9` where it should be something like `0 1 9-9`. Fix the malformed SVG path data.

---

### FIX 8: Use Next.js `<Script>` Component for Third-Party Scripts

**Problem:** Render-blocking requests include CSS chunks. Also, the Apollo tracking script uses `dangerouslySetInnerHTML`.

**File:** `src/app/layout.tsx`

**Fix the Apollo script — change from `dangerouslySetInnerHTML` to Next.js Script component:**
```tsx
import Script from 'next/script'

// Replace the dangerouslySetInnerHTML script tag with:
<Script id="apollo-tracker" strategy="afterInteractive">
  {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69a5244143c84d00112ab94f"})},document.head.appendChild(o)}initApollo();`}
</Script>
```

This moves the script out of the critical rendering path.

---

### FIX 9: Reduce Unused JavaScript (Diagnostic — saves ~27 KiB)

**Problem:** Some JS chunks contain unused code that gets shipped to the client.

**Fix approaches:**
1. **Dynamic imports for below-the-fold components:** Components like `ScheduleMeeting`, `StatsSection`, and `StepByStep` are below the fold and can be lazy-loaded:
```tsx
// In the homepage or wherever these are imported:
import dynamic from 'next/dynamic'

const ScheduleMeeting = dynamic(() => import('@/components/ScheduleMeeting'), {
  loading: () => <div className="h-96" />,
})
const StatsSection = dynamic(() => import('@/components/StatsSection'))
const StepByStep = dynamic(() => import('@/components/StepByStep'))
```

2. **Tree-shake react-calendly:** Only import what you use:
```tsx
// Instead of: import { InlineWidget } from 'react-calendly'
// Use dynamic import on the component that uses Calendly:
const CalendlySection = dynamic(() => import('@/components/CalendlySection'), {
  ssr: false,
})
```

---

### FIX 10: Optimize CSS Delivery (saves ~30ms render blocking)

**Problem:** One CSS chunk (`chunks/269f5bd173e73adc.css` — 12.3 KiB) is render-blocking.

**Fix:** This is auto-generated by Next.js and hard to control directly. However, you can:
1. **Inline critical CSS** by ensuring the most important above-the-fold styles are in `globals.css` (which Next.js inlines automatically)
2. **Remove unused CSS** from `globals.css` — check if any animation classes or custom utilities aren't actually used:
```bash
# Find which animation classes are actually used in components
grep -rn 'fade-in-up\|slide-in-left\|fade-in-right\|scale-on-hover\|hover-lift\|stagger-item' src/components/
```
Remove any that aren't referenced.

---

### FIX 11: Add `loading="lazy"` to Below-the-Fold Images

**Problem:** Some images load eagerly even though they're below the fold, wasting bandwidth.

**Rule:** Only the hero/above-the-fold images should load eagerly. Everything else should be lazy.

**Fix — audit all `<img>` tags:**
```bash
grep -rn '<img ' src/ | grep -v 'loading='
```

For any image NOT in the hero section or navbar, add `loading="lazy"`:
```tsx
<img src="..." alt="..." loading="lazy" />
```

**IMPORTANT:** Do NOT add `loading="lazy"` to the logo (it's the LCP element) or the hero image.

---

## SECTION B: MANUAL / NON-CODE FIXES

These require manual action outside of code changes.

---

### MANUAL 1: Resize and Compress Images Before Deployment

The image optimization in Fix 1 requires running image processing commands on the actual image files. This is best done manually or with a build script:

```bash
# Install tools if not present
npm install -g sharp-cli
# OR use imagemagick

# Resize and convert each image:
# comb.png → comb.webp (compress heavily, it's decorative)
cwebp -q 75 public/comb.png -o public/comb.webp

# image4.webp → resize to 1330px wide
convert public/image4.webp -resize 1330x -quality 80 public/image4.webp

# image7.png → convert to webp
cwebp -q 80 public/image7.png -o public/image7.webp

# image3.webp → resize to 1330px wide
convert public/image3.webp -resize 1330x -quality 80 public/image3.webp

# logo.png → resize to 608px wide and convert to webp
convert public/logo.png -resize 608x public/logo_resized.png
cwebp -q 90 public/logo_resized.png -o public/logo.webp
rm public/logo_resized.png
```

After resizing, verify the images still look good visually on the site.

---

### MANUAL 2: Validate Structured Data

PageSpeed flagged "Structured data is valid" as an item to manually check.

**Action:** Go to https://search.google.com/test/rich-results and enter `https://www.visarapid.com/` to validate your Organization schema and any other structured data.

---

### MANUAL 3: Security Headers (Best Practices — Trust & Safety)

These are server/hosting configuration changes, not code changes. Configure on Vercel dashboard or via `vercel.json`:

1. **Content Security Policy (CSP):** Add a CSP header to protect against XSS
2. **HSTS:** Add `Strict-Transport-Security` header
3. **X-Frame-Options:** Add to prevent clickjacking
4. **COOP:** Add `Cross-Origin-Opener-Policy` header

**Add to `vercel.json`:**
```json
{
  "framework": "nextjs",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

**Note:** Be careful with CSP — it can break third-party scripts (Calendly, Apollo tracker) if not configured correctly. Test thoroughly.

---

### MANUAL 4: Monitor Core Web Vitals After Deployment

After implementing all fixes:
1. Re-run PageSpeed Insights at https://pagespeed.web.dev/
2. Check Google Search Console → Core Web Vitals report
3. Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## IMPLEMENTATION STATUS

| Fix | Status | Details |
|-----|--------|---------|
| Fix 1a: comb.png → comb.webp | ✅ DONE | Converted to WebP (229 KiB, down from 1,361 KiB). Reference updated in HeroSection.tsx. |
| Fix 1b: image4.webp resize | ✅ DONE | Resized to 1330x1986 (378 KiB). Added width/height to ForBusiness.tsx. |
| Fix 1c: image7.png → image7.webp | ✅ DONE | Converted to WebP (18 KiB, down from 671 KiB). Reference updated in WhyChooseUs.tsx. |
| Fix 1d: image3.webp resize | ✅ DONE | Resized to 1330x1721 (225 KiB). Added eager loading + fetchPriority in ForIndividuals.tsx. |
| Fix 1e: logo.png → logo.webp | ✅ DONE | Resized to 608x112 (7.2 KiB). Updated in Navbar.tsx with fetchPriority="high". |
| Fix 2: fetchpriority on LCP image | ✅ DONE | Added to logo in Navbar.tsx (desktop LCP) and image3 in ForIndividuals.tsx (mobile LCP). |
| Fix 3: width/height on images | ✅ DONE | Added to logo, image3, image4, image7, comb, Lawyer image. |
| Fix 4: aria-label on hamburger | ✅ DONE | Added `aria-label="Open navigation menu"` to Navbar.tsx. |
| Fix 5: aria-label on social links | ✅ DONE | Added aria-labels to LinkedIn, YouTube, Instagram links in Footer.tsx. |
| Fix 6: heading hierarchy | ✅ DONE | Changed h4 to h3 in ForBusiness.tsx. Headings now follow h1→h2→h3 order. |
| Fix 7: SVG path error | ✅ DONE | Malformed path no longer present in codebase. |
| Fix 8: Script component | ✅ DONE | Apollo tracker already uses Next.js Script component with strategy="afterInteractive" in layout.tsx. |
| Fix 9: Dynamic imports | ✅ DONE | WhyChooseUs, StepByStep, StatsSection, ScheduleMeeting all use `dynamic()` in page.tsx. |
| Fix 10: CSS optimization | ⬜ TODO | Remove unused CSS animations from globals.css. |
| NEW: Legacy JS polyfills | ✅ DONE | Added `browserslist` to package.json targeting modern browsers only (Chrome 92+, Safari 15.4+, etc.) to eliminate 13.7 KiB of unnecessary polyfills. |
| NEW: Responsive images (srcset) | ✅ DONE | Created mobile-optimized variants (image3-mobile.webp 77 KiB, image4-mobile.webp 121 KiB) with srcset/sizes in ForIndividuals.tsx and ForBusiness.tsx. Mobile loads smaller images, desktop unaffected. |
| NEW: optimizePackageImports | ✅ DONE | Added `experimental.optimizePackageImports` for react-calendly in next.config.ts to tree-shake unused exports. |
| Fix 11: lazy loading audit | ✅ DONE | All below-fold images have loading="lazy". Hero comb.webp now lazy. |
| NEW: WhatsApp contrast fix | ✅ DONE | Changed from bg-green-500 to bg-green-700 for WCAG contrast compliance. |
| Manual 1: Image compression | ✅ DONE | All images resized and compressed via Pillow. |
| Manual 3: Security headers | ✅ DONE | Added to vercel.json (X-Frame-Options, HSTS, etc.). |
| Preload LCP image | ✅ DONE | Added `<link rel="preload">` for image3.webp in layout.tsx head. |

## DESKTOP-SPECIFIC NOTES

The desktop report (Performance 98) is already excellent. Key observations:
- Desktop LCP element is the **logo** (not image3.webp like mobile) — optimizing logo.webp + fetchPriority helps both
- Desktop image delivery flagged same images as mobile (comb, image4, image7, image3) — all optimized
- Desktop accessibility issues are identical to mobile (social link labels, heading hierarchy, contrast) — all fixed
- The `loading="eager"` + `fetchPriority="high"` on image3.webp is safe for desktop — it's below the fold on desktop so eager loading has minimal impact on the already-fast desktop LCP
- **No mobile-specific changes conflict with desktop performance**

## REMAINING TODO (Lower Priority)

| Priority | Fix | Expected Impact |
|----------|-----|-----------------|
| 1 | Fix 10 (CSS optimization) | Minor performance gains (~30ms render blocking) |
| 2 | Manual 2 (validate structured data) | SEO validation |

**Expected scores after all implemented fixes:**
- Mobile Performance: 90-98 (up from 73)
- Mobile Accessibility: 95-100 (up from 88)
- Desktop Performance: 98+ (maintained)
- Desktop Accessibility: 95-100 (up from 90)
- Best Practices: 96-100 (maintained/improved)
- SEO: 100 (maintained)
