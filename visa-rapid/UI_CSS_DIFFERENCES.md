# Visa Rapid — UI/CSS Differences Between Production & Migrated Version

**Purpose:** This document lists every UI/CSS difference between the **production site** (React/Vite SPA at visarapid.com) and the **migrated Next.js version** (localhost:3001). Feed this to Claude Code to fix each item.

**How to use:** Go through each issue, apply the fix described, and verify visually before moving to the next.

**Comparison method:** Visual side-by-side browser comparison at 1440x900 resolution, scrolling through all pages simultaneously.

---

## CRITICAL DIFFERENCES (Bugs visible to users)

### 1. StepByStep — `&apos;` Rendered as Literal Text

**Location:** `src/components/StepByStep.tsx`, line 41

**What's wrong:** The "Continuous Support" card description uses `&apos;` inside a JavaScript string value (not JSX markup). In JSX, `&apos;` only works as an HTML entity inside JSX elements — but here it's inside a JS object property string, so it renders as the literal text `&apos;` on the page.

**Visual difference:** The card shows "We don&apos;t stop at application submission..." and "Whether it&apos;s tracking updates..." instead of proper apostrophes.

**Production shows:** "We don't stop..." and "Whether it's tracking..."

**Fix:**
```tsx
// In src/components/StepByStep.tsx, line 41, change:
description: "We don&apos;t stop at application submission our team stays connected with you throughout the entire process. Whether it&apos;s tracking updates, clarifying requirements, or resolving queries, we provide ongoing guidance to make your visa journey smooth and worry-free."

// To:
description: "We don't stop at application submission our team stays connected with you throughout the entire process. Whether it's tracking updates, clarifying requirements, or resolving queries, we provide ongoing guidance to make your visa journey smooth and worry-free."
```

### 2. Font System Changed — Next.js Google Fonts vs System Font Stack

**What changed:** The original React app used a system font stack globally:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

The migrated Next.js app loads **Google Fonts** (Geist, Geist_Mono, Open_Sans, Playfair_Display) via `next/font/google` and applies CSS variables to the body.

**Visual difference:** Text rendering is subtly different across the entire site — the original used the OS system font (San Francisco on Mac, Segoe UI on Windows), the migrated version uses Geist as the sans-serif font.

**Fix — Remove Geist from body, keep only system stack:**
```tsx
// In src/app/layout.tsx, change body className to remove geistSans.variable and geistMono.variable:
className={`${openSans.variable} ${playfair.variable} antialiased min-h-screen w-full bg-white overflow-x-hidden`}
```
And update `globals.css` `@theme` to not reference Geist:
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-open-sans: var(--font-open-sans);
  --font-playfair: var(--font-playfair);
}
```
Also remove the Geist import from layout.tsx if no longer used.

### 3. Global CSS — Vite Default Link & Button Styles Were Removed

**What changed:** The original React app's `index.css` had Vite-generated default styles for `a`, `button`, and `h1` tags. These were dropped during migration.

**Impact:** Links and buttons that don't have explicit Tailwind classes may appear slightly different. Most components use Tailwind/inline styles so this is low risk, but any unstyled `<a>` or `<button>` will use browser defaults instead of the Vite defaults.

**Fix:** Add only the essential reset to `globals.css` (do NOT add back the full Vite boilerplate):
```css
a {
  text-decoration: inherit;
  color: inherit;
}
```

---

## HIGH PRIORITY DIFFERENCES (Functional but could affect UX)

### 4. Blog Section — Double Navbar/Footer Risk

**What changed:** The blog pages in the original had their own Navbar and Footer. The migrated version correctly simplified `blogs/layout.tsx` to a passthrough (`<>{children}</>`), and Navbar/Footer now come from the root layout.

**Risk:** If any blog page components still import and render their own Navbar/Footer, you'll see double navbars and footers on blog pages.

**Fix:** Search for and remove any remaining Navbar/Footer imports inside blog pages:
```bash
grep -r "import.*Navbar\|import.*Footer" src/app/blogs/
```
If any blog page still imports Navbar or Footer, remove those imports and the JSX usage.

### 5. ScrollToTop Behavior — Removed

**What changed:** The original React app had a `<ScrollToTop />` component that used `useLocation()` from React Router to scroll to `(0, 0)` on every route change. This was removed during migration.

**Impact:** Next.js App Router auto-scrolls to top on navigation by default. But if you notice pages not scrolling to top when clicking links, you may need to configure this.

**Fix:** If scroll behavior is wrong, add to `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
  },
};
```

### 6. Contact Page — May Be Missing

**What changed:** The original had a `/contact` route. Check if `src/app/contact/page.tsx` exists in the migrated version.

**Fix:**
```bash
ls src/app/contact/
```
If missing, create the page and migrate the ContactPage component.

### 7. Dark Mode Flash Prevention

**What changed:** The original had dark mode CSS variables in the blog's `globals.css`. The migrated version dropped the dark mode media query. Users with dark mode OS settings might see unexpected behavior.

**Fix:** Since the site is light-only, force light mode in `globals.css`:
```css
html {
  color-scheme: light;
}
```

---

## MEDIUM PRIORITY DIFFERENCES (Cosmetic)

### 8. `max-w-9xl` Custom Tailwind Class in Navbar

**Location:** `src/components/Navbar.tsx`

**What changed:** `max-w-9xl` is NOT a standard Tailwind v4 class (standard goes up to `max-w-8xl` = 90rem).

**Impact:** Navbar may be wider or narrower than expected if the class doesn't resolve.

**Fix:** Add custom value in `globals.css`:
```css
@theme inline {
  --max-w-9xl: 96rem;
}
```
Or change to `max-w-8xl`.

### 9. Custom Height Classes — `h-160`, `h-150`, `h-130`, `h-100`, `w-180`

**Components affected:**
- `HeroSection.tsx`: `h-150`, `h-60`
- `EntrepreneurVisaContent.tsx`: `h-160`
- `WhyChooseUs.tsx`: `w-180`, `h-100`, `h-130`

**Impact:** In Tailwind CSS v4, numeric spacing values auto-generate (e.g., `h-160` = `height: 40rem`). This should work in both setups. But if images look wrong, convert to explicit values:
```
h-160 → h-[40rem]
h-150 → h-[37.5rem]
h-130 → h-[32.5rem]
h-100 → h-[25rem]
w-180 → w-[45rem]
```

### 10. `!text-black` and `!text-white` Important Overrides in Navbar

**Location:** `src/components/Navbar.tsx`

**What changed:** The migrated Navbar uses `!text-black` and `!text-white` important modifiers to override the Vite default link color. Since those Vite defaults are gone, the `!important` may be unnecessary and could interfere with hover states.

**Fix:** If link colors look correct, leave as-is. If hover states are broken (links stay black), remove the `!` prefix.

### 11. `pl-13` Custom Spacing in Mobile Navbar

**Location:** `src/components/Navbar.tsx`

**What changed:** `pl-13` is not a standard Tailwind class (standard: `pl-12` = 3rem, `pl-14` = 3.5rem).

**Fix:** Change to `pl-14` or use `pl-[3.25rem]`.

### 12. Missing `og-image.jpg`

**Location:** `src/app/layout.tsx` metadata

**What changed:** Metadata references `/og-image.jpg` which likely doesn't exist in `/public/`.

**Fix:** Create an OG image at `public/og-image.jpg` (1200x630px) or remove the references from layout.tsx metadata.

---

## LOW PRIORITY DIFFERENCES (No visual impact)

### 13. Apollo Tracking Script Placement

**What changed:** The Apollo tracking script was in `<head>` in the original `index.html`. In the migrated version, it's in `<head>` via `dangerouslySetInnerHTML`.

**Fix:** Use Next.js `<Script>` component for better control:
```tsx
import Script from 'next/script'

<Script id="apollo-tracker" strategy="afterInteractive">
  {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69a5244143c84d00112ab94f"})},document.head.appendChild(o)}initApollo();`}
</Script>
```

### 14. `line-clamp-3` Custom Class Conflict

**Location:** `src/app/globals.css`

**What changed:** Custom `.line-clamp-3` class may conflict with Tailwind v4's built-in `line-clamp-3` utility.

**Fix:** Remove the custom class from `globals.css`:
```css
/* REMOVE THIS — Tailwind v4 handles it natively */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 15. Semantic HTML — `<main>` Tag Added

**What changed:** The root layout wraps children in `<main className="w-full overflow-x-hidden">`. This is correct and an improvement.

**Impact:** Positive change. No fix needed.

---

## VISUAL COMPARISON SUMMARY

**Pages compared side-by-side at 1440x900:**

### Homepage (`/`)
| Section | Match? | Notes |
|---------|--------|-------|
| Navbar | ✅ Match | Logo, links, dropdown, CTA buttons all identical |
| HeroSection | ✅ Match | Image, text, yellow highlight, buttons all identical |
| ForIndividuals | ✅ Match | Orange section, bullet points, image all identical |
| ForBusiness | ✅ Match | Blue section, text, image, button all identical |
| WhyChooseUs | ✅ Match | Numbered list, yellow highlight, passport image identical |
| StepByStep | ⚠️ Bug | "Continuous Support" card shows `&apos;` as literal text (Issue #1) |
| StatsSection | ✅ Match | Blue bar, 4 stats with dividers, icons, star ratings all identical |
| ScheduleMeeting | ✅ Match | Lawyer image, orange button, WhatsApp link all identical |
| Footer | ✅ Match | 3-column layout, social icons, site map links all identical |
| FloatingButtons | ✅ Match | WhatsApp green circle, scroll-to-top both work |
| Scroll animations | ✅ Match | Fade-in-up, slide-in-left/right all trigger correctly |

### Visa Pages
| Page | Match? | Notes |
|------|--------|-------|
| `/entrepreneur-visa` | ✅ Match | Hero, benefit icons, Calendly embed all working |
| `/startup-visa` | ✅ Match | Hero, text, image, buttons all identical |
| `/job-seeker-visa` | ✅ Match | Hero, text, image, buttons all identical |
| `/uk-innovator-visa` | ✅ Match | Hero, 5-step process section, structure identical |
| `/global-talent-visa` | ✅ Match | Hero, structure identical |
| `/residency` | ✅ Match | Hero, structure identical |

### Overall Assessment
The migration is very clean. The only visible bug is the `&apos;` literal text issue in StepByStep. The font difference (Issue #2) is subtle and may or may not need addressing depending on preference. All other differences are either code-level concerns (custom Tailwind classes, missing OG image) or preventative fixes (dark mode, double navbar risk).

---

## VERIFICATION CHECKLIST

After applying fixes, verify:

### Must Fix
- [ ] StepByStep "Continuous Support" card shows proper apostrophes (Issue #1)

### Should Fix
- [ ] Font rendering matches production (Issue #2)
- [ ] No double Navbar/Footer on blog pages (Issue #4)
- [ ] `/contact` page exists and works (Issue #6)
- [ ] Force light color-scheme (Issue #7)
- [ ] Add link reset to globals.css (Issue #3)

### Nice to Have
- [ ] `max-w-9xl` resolves properly (Issue #8)
- [ ] Custom height classes work (Issue #9)
- [ ] OG image exists (Issue #12)
- [ ] Apollo script uses Next.js Script component (Issue #13)

### Mobile Responsive (Manual check needed)
- [ ] Navbar hamburger menu works
- [ ] All sections stack properly on mobile
- [ ] Images scale correctly
- [ ] Modals are scrollable on mobile
- [ ] FloatingButtons positioned correctly
