# Entrepreneur Visa Page — PageSpeed Fixes

> **URL:** `https://www.visarapid.com/entrepreneur-visa/`
> **Captured:** March 23, 2026, 10:54 PM GMT+5:30
> **Tool:** Lighthouse 13.0.1 (Emulated Mobile / Emulated Desktop)

---

## 📊 Score Summary

| Metric | Mobile | Desktop |
|--------|--------|---------|
| **Performance** | 🟡 65 | ✅ 93 |
| **Accessibility** | ✅ 96 | ✅ 96 |
| **Best Practices** | 🟡 77 | 🟡 73 |
| **SEO** | ✅ 100 | ✅ 100 |

---

## 📏 Core Web Vitals

| Metric | Mobile | Target | Desktop | Target |
|--------|--------|--------|---------|--------|
| **FCP** | 🟢 1.5s | < 1.8s | 🟢 0.4s | < 1.8s |
| **LCP** | 🟡 4.0s | < 2.5s | 🟢 0.4s | < 2.5s |
| **TBT** | 🔴 1,010ms | < 200ms | 🟢 130ms | < 150ms |
| **CLS** | 🟢 0 | < 0.1 | 🟢 0 | < 0.1 |
| **SI** | 🟢 1.5s | < 3.4s | 🔴 2.3s | < 1.3s |

> **Critical finding:** TBT is 1,010ms on mobile — 5x over the "good" threshold. Calendly alone causes **838ms** of main thread blocking. This is the #1 priority fix.

---

## 🔴 LCP Breakdown

### Mobile LCP Element: `/logo.webp`
| Subpart | Duration |
|---------|----------|
| Time to first byte | 0 ms |
| Resource load delay | 70 ms |
| Resource load duration | 30 ms |
| Element render delay | **140 ms** |

### Desktop LCP Element: `/logo.webp` (same element)
| Subpart | Duration |
|---------|----------|
| Time to first byte | 0 ms |
| Resource load delay | **380 ms** |
| Resource load duration | **370 ms** |
| Element render delay | 170 ms |

> Desktop LCP is 0.4s (green) despite the high subpart numbers. Mobile LCP is 4.0s due to Calendly blocking the main thread, which delays logo rendering.

---

## 🔧 INSIGHTS (Mobile + Desktop Compared)

### INSIGHT 1 — Legacy JavaScript
| | Mobile | Desktop |
|-|--------|---------|
| **Severity** | 🟡 Warning | 🟡 Warning |
| **Est. savings** | 14 KiB | 14 KiB |
| **Chunk** | `chunks/e1a7de517415d496.js` | `chunks/e1a7de517415d496.js` |
| **Polyfills** | Array.prototype.at, Array.prototype.flat, Array.prototype.flatMap, Object.fromEntries, Object.hasOwn, String.prototype.trimEnd, String.prototype.trimStart | same |

**Fix:** Already in `package.json` `browserslist` — this should resolve after next build/deploy. Same fix applies to both platforms simultaneously.

---

### INSIGHT 2 — Use Efficient Cache Lifetimes

#### Mobile
| Request | Cache TTL | Transfer Size |
|---------|-----------|---------------|
| Stripe `/v3` (js.stripe.com) | 2 min | 248 KiB |
| Stripe `/out-4.5.45.js` (m.stripe.network) | 5 min | 15 KiB |
| Calendly `/pxwebj3qd.js` (assets.calendly.com) | 1 day | 83 KiB |
| **Total** | | **291 KiB** |

#### Desktop
| Request | Cache TTL | Transfer Size |
|---------|-----------|---------------|
| Stripe `/v3` (js.stripe.com) | 2 min | 216 KiB |
| Stripe `/out-4.5.45.js` (m.stripe.network) | 5 min | 16 KiB |
| Calendly `/pxwebj3qd.js` (assets.calendly.com) | 1 day | 83 KiB |
| **Total** | | **261 KiB** |

> These are 3rd-party scripts — cache headers are set by Stripe and Calendly, not by us. **Cannot fix directly.** Only workaround is lazy-loading to eliminate the cache miss on first load.

---

### INSIGHT 3 — Improve Image Delivery

#### Mobile (total 338.9 KiB resource, **68.6 KiB savings**)
| Image | Current Size | Est. Savings | Reason |
|-------|-------------|--------------|--------|
| `/Entrepreneur.webp` | 331.7 KiB | 63.3 KiB | Compression too low |
| `/logo.webp` | 7.2 KiB | 5.4 KiB | Displayed at 304x56, actual 608x112 — needs responsive |

> On mobile the `Entrepreneur.webp` is displayed full-width but using same large file as desktop. The logo is displayed at 304x56 but file is 608x112.

#### Desktop (total 792.0 KiB resource, **475.4 KiB savings**)
| Image | Current Size | Est. Savings | Reason |
|-------|-------------|--------------|--------|
| `/Entrepreneur.webp` | 331.7 KiB | 254.0 KiB | Displayed at 960x640, actual 1573x1667 — needs responsive |
| `/Visa.webp` | 304.0 KiB | 189.8 KiB + 10.9 KiB | Displayed at 1128x600, actual 1354x1330 — needs responsive + compression |
| `/Visa1.webp` | 37.4 KiB | 13.1 KiB | Compression only |
| `/Visa2.webp` | 111.7 KiB | 8.1 KiB | Compression only |
| `/logo.webp` | 7.2 KiB | 6.2 KiB | Displayed at 217x40, actual 608x112 — needs responsive |

> **Desktop has MUCH larger image savings (475 KiB vs 68 KiB).** This is the most impactful fix for the desktop Speed Index (2.3s). The Entrepreneur.webp and Visa.webp are oversized at their display dimensions.

---

### INSIGHT 4 — Render Blocking Requests

| | Mobile | Desktop |
|-|--------|---------|
| **File** | `chunks/581a67c7fb6df753.css` | `chunks/581a67c7fb6df753.css` |
| **Size** | 12.2 KiB | 12.2 KiB |
| **Duration** | **150 ms** | **60 ms** |

> Same CSS chunk blocking on both platforms. Much worse impact on mobile (150ms vs 60ms). This is a Next.js auto-generated CSS chunk — needs manual CSS splitting or critical CSS extraction.

---

### INSIGHT 5 — DOM Size (Unscored, informational)
| Statistic | Value |
|-----------|-------|
| Total elements | 290 |
| DOM depth | 12 |
| Most children | 23 (body tag) |

> 290 elements is within acceptable range (< 800 is fine), but depth of 12 is somewhat deep. Not a priority fix.

---

## 🕵️ 3rd Party Impact

### Mobile
| 3rd Party | Transfer Size | Main Thread Time |
|-----------|--------------|------------------|
| **Calendly** | 1,780 KiB | **838 ms** |
| — js/booking-63f91f3e5.js | 1,161 KiB | 817 ms |
| — /pxwebj3qd.js | 83 KiB | 18 ms |
| — /nikita-visarapid embed | 3 KiB | 1 ms |
| — css/booking-5741e7105.css | 520 KiB | 0 ms |
| **Stripe** | 265 KiB | **225 ms** |
| — /v3 (js.stripe.com) | 248 KiB | 113 ms |
| — /inner.html (m.stripe.network) | 0 KiB | 93 ms |
| — /out-4.5.45.js | 15 KiB | 19 ms |
| **apollo.io** | 3 KiB | 1 ms |
| **aplo-evnt.com** | 3 KiB | 0 ms |

> **Calendly causes 838ms of main thread blocking on mobile.** This is the primary cause of 1,010ms TBT. The main culprit is `booking-63f91f3e5.js` at 817ms.

### Desktop
| 3rd Party | Transfer Size | Main Thread Time |
|-----------|--------------|------------------|
| **Calendly** | 1,780 KiB | **582 ms** |
| — js/booking-63f91f3e5.js | 1,161 KiB | 565 ms |
| — /pxwebj3qd.js | 83 KiB | 15 ms |
| — css/booking-5741e7105.css | 519 KiB | 0 ms |
| **Stripe** | 235 KiB | **137 ms** |
| — /v3 (js.stripe.com) | 216 KiB | 87 ms |
| — /inner.html (m.stripe.network) | 0 KiB | 38 ms |
| — /out-4.5.45.js | 16 KiB | 11 ms |
| **apollo.io** | 3 KiB | 1 ms |
| **aplo-evnt.com** | 3 KiB | 0 ms |

> Desktop TBT is only 130ms (green) despite Calendly using 582ms — desktop CPU is faster and parallel execution is more efficient.

---

## 🩺 DIAGNOSTICS (Desktop)

| Diagnostic | Value |
|-----------|-------|
| Reduce unused CSS | 🟡 517 KiB savings |
| Reduce unused JavaScript | 🟡 1,077 KiB savings |
| Avoid enormous network payloads | 🟡 Total 3,235 KiB |
| Avoid long main-thread tasks | ⚪ 3 long tasks found |

> The 1,077 KiB unused JS and 517 KiB unused CSS are primarily from Calendly (its booking CSS alone is 519 KiB). Loading Calendly lazily (only when user is about to interact) would eliminate these completely.

---

## 🛠️ FIX PLAN — Prioritized

### ⚡ PRIORITY 1 — CRITICAL (Mobile TBT: -800ms)

#### Fix 1: Lazy-load Calendly (load only on user interaction)
- **Impact:** Mobile TBT -838ms (from 1,010ms → ~170ms), Desktop TBT -582ms
- **Affects:** Mobile ✅ Desktop ✅ (both benefit equally)
- **Risk:** ⚠️ Must test carefully — Calendly must still open on button click
- **How:** The `ScheduleMeeting` component (uses `react-calendly`) should only load its JS when the user scrolls near it or clicks a "Book a call" button. Use `InlineWidget` only after user interaction, or replace with a link/button that loads Calendly in a popup on demand.

```tsx
// In ScheduleMeeting.tsx — wrap with interaction-triggered loader
// Option A: Load Calendly script only when component enters viewport
// Option B: Show a "Book a call" button → onClick loads the InlineWidget
// Option C: Replace InlineWidget with a plain <a href="https://calendly.com/nikita-visarapid/30min"> button
```

> **⚠️ Mobile/Desktop conflict check:** Lazy-loading helps BOTH. No conflict. But verify the Calendly widget still renders properly after interaction.

---

#### Fix 2: Lazy-load Stripe (defer until needed)
- **Impact:** Mobile TBT -225ms, Desktop TBT -137ms
- **Affects:** Mobile ✅ Desktop ✅
- **Risk:** Medium — if Stripe is used for payments, it must load before checkout
- **How:** Defer Stripe script loading. If Stripe.js is loaded for payment in a modal/separate step, use `loadStripe()` lazily inside the click handler rather than at module init time.

> **⚠️ Note:** If Stripe is only used on a checkout/payment page (not on `/entrepreneur-visa/`), check whether it should be loaded here at all. If it's being loaded on every page via a global import, that should be fixed globally.

---

### 🟡 PRIORITY 2 — HIGH (Desktop image savings: -475 KiB)

#### Fix 3: Resize/compress Entrepreneur.webp with responsive variants
- **Mobile savings:** 63.3 KiB (compression)
- **Desktop savings:** 254.0 KiB (displayed at 960x640, file is 1573x1667)
- **Affects:** Mobile ✅ Desktop ✅
- **Risk:** Low — srcset approach means each platform gets right size
- **Current img element on this page:**
  ```html
  <img src="/Entrepreneur.webp" alt="Portugal D2 Visa Documentation" class="w-full h-160 object-cover">
  ```
- **Fix:**
  ```bash
  # Create a desktop variant at ~960x640 and a mobile at ~750px wide
  cwebp -q 75 -resize 960 640 Entrepreneur_source.jpg -o /public/Entrepreneur.webp
  cwebp -q 75 -resize 750 0 Entrepreneur_source.jpg -o /public/Entrepreneur-mobile.webp
  ```
  ```tsx
  <img
    src="/Entrepreneur.webp"
    srcSet="/Entrepreneur-mobile.webp 750w, /Entrepreneur.webp 960w"
    sizes="(max-width: 768px) 100vw, 960px"
    alt="Portugal D2 Visa Documentation"
    className="w-full h-160 object-cover"
    loading="lazy"
    width={960}
    height={640}
  />
  ```

> **⚠️ Mobile/Desktop conflict:** Using `srcset` means mobile gets smaller file, desktop gets larger. No conflict — this improves both.

---

#### Fix 4: Resize/compress Visa.webp with responsive variants
- **Desktop savings:** 189.8 KiB (responsive) + 10.9 KiB (compression) = ~200 KiB
- **Affects:** Desktop ✅ (this image appears to only be in a desktop-layout section)
- **Risk:** Low
- **Current:** Displayed at 1128x600, actual file 1354x1330
- **Fix:**
  ```bash
  cwebp -q 75 -resize 1128 600 Visa_source.jpg -o /public/Visa.webp
  cwebp -q 75 -resize 750 0 Visa_source.jpg -o /public/Visa-mobile.webp
  ```
  ```tsx
  <img
    src="/Visa.webp"
    srcSet="/Visa-mobile.webp 750w, /Visa.webp 1128w"
    sizes="(max-width: 768px) 100vw, 1128px"
    alt="Portugal street scene with colorful buildings and tram"
    className="w-full xl:h-150 h-100 object-cover rounded-2xl shadow-lg transition-transf..."
    loading="lazy"
    width={1128}
    height={600}
  />
  ```

---

#### Fix 5: Compress Visa1.webp and Visa2.webp
- **Desktop savings:** Visa1: 13.1 KiB, Visa2: 8.1 KiB
- **Affects:** Desktop ✅
- **Risk:** Low — compression only, no size change
- **Fix:**
  ```bash
  cwebp -q 75 Visa1_source.jpg -o /public/Visa1.webp
  cwebp -q 75 Visa2_source.jpg -o /public/Visa2.webp
  ```

---

#### Fix 6: Responsive logo.webp (create smaller variants)
- **Mobile savings:** 5.4 KiB (displayed at 304x56, actual 608x112)
- **Desktop savings:** 6.2 KiB (displayed at 217x40, actual 608x112)
- **Affects:** Mobile ✅ Desktop ✅
- **Risk:** Low — Navbar already has `width={304} height={56}`
- **How:** Already have the right `width` and `height` attributes in Navbar. Need to also add a `srcset` for a 304px version. But savings are small (5-6 KiB) — lower priority.

---

### 🟠 PRIORITY 3 — MEDIUM

#### Fix 7: CSS chunk render-blocking (critical CSS extraction)
- **Mobile impact:** -150ms render delay
- **Desktop impact:** -60ms render delay
- **Affects:** Mobile ✅ Desktop ✅
- **Risk:** High — requires CSS chunking strategy changes
- **How:** The auto-generated `chunks/581a67c7fb6df753.css` (12.2 KiB) blocks render. Options:
  1. **Inline critical CSS** via a Next.js plugin or manual extraction (complex)
  2. **Remove unused global CSS** to reduce chunk size (simpler)
  3. Accept for now — this is an "unscored" audit and impact is limited

> This is the same CSS chunk flagged on the homepage. Since it's a Next.js auto-generated chunk, the most practical fix is reducing the amount of CSS included in it via purging unused styles.

---

#### Fix 8: Legacy JavaScript polyfills (browserslist)
- **Savings:** 14 KiB (both platforms)
- **Affects:** Mobile ✅ Desktop ✅
- **Status:** ✅ **Already fixed** — `browserslist` added to `package.json` in homepage session. Will apply here after next build.

---

### ⚪ PRIORITY 4 — LOW / INFORMATIONAL

#### Fix 9: Network payload (3,235 KiB total)
- Primarily Calendly CSS (519 KiB) + booking JS (1,161 KiB) + Stripe (216 KiB)
- **Fix:** Covered by Fix 1 (lazy-load Calendly) — that alone removes ~1,780 KiB

#### Fix 10: DOM size (290 elements, depth 12)
- Within acceptable range, no action needed

#### Fix 11: Long main-thread tasks (3 found on desktop)
- Root cause is Calendly's booking JS — covered by Fix 1

---

## ⚠️ Mobile ↔ Desktop Conflict Analysis

This is the critical safety check — fixes that help mobile but could hurt desktop, or vice versa.

| Fix | Mobile Effect | Desktop Effect | Conflict? |
|-----|--------------|----------------|-----------|
| Fix 1: Lazy Calendly | ✅ TBT -838ms | ✅ TBT -582ms | ❌ None — both benefit |
| Fix 2: Lazy Stripe | ✅ TBT -225ms | ✅ TBT -137ms | ❌ None — both benefit |
| Fix 3: Entrepreneur.webp srcset | ✅ -63 KiB compression | ✅ -254 KiB responsive | ❌ None — srcset serves right size to each |
| Fix 4: Visa.webp srcset | ~0 (not shown on mobile?) | ✅ -200 KiB | ⚠️ Verify if Visa.webp appears on mobile layout |
| Fix 5: Compress Visa1, Visa2 | ~small | ✅ -21 KiB | ❌ None |
| Fix 6: Responsive logo | ✅ -5 KiB | ✅ -6 KiB | ❌ None |
| Fix 7: CSS render blocking | ✅ -150ms | ✅ -60ms | ❌ None (same chunk, same CSS) |
| Fix 8: Legacy JS | ✅ -14 KiB | ✅ -14 KiB | ❌ None — same bundle |

> **Key insight:** Every fix on this page benefits BOTH platforms. There are no inversely-proportional conflicts for this page. The main risk is Fix 4 — need to confirm whether Visa.webp is rendered on mobile layout at all (it may be hidden with `hidden lg:block`).

---

## 📋 Implementation Checklist

| # | Fix | Priority | Est. Effort | Mobile Impact | Desktop Impact | Status |
|---|-----|----------|-------------|---------------|----------------|--------|
| 1 | Lazy-load Calendly | 🔴 Critical | High | TBT -838ms | TBT -582ms | ⬜ TODO |
| 2 | Lazy-load Stripe | 🔴 Critical | Medium | TBT -225ms | TBT -137ms | ⬜ TODO |
| 3 | Entrepreneur.webp responsive+compress | 🟡 High | Low | -63 KiB | -254 KiB | ⬜ TODO |
| 4 | Visa.webp responsive+compress | 🟡 High | Low | ~0 | -200 KiB | ⬜ TODO |
| 5 | Visa1+Visa2 compress | 🟠 Medium | Low | ~0 | -21 KiB | ⬜ TODO |
| 6 | Responsive logo srcset | 🟠 Medium | Low | -5 KiB | -6 KiB | ⬜ TODO |
| 7 | CSS render-blocking chunk | 🟠 Medium | High | -150ms | -60ms | ⬜ TODO |
| 8 | Legacy JS polyfills | ✅ Done | — | -14 KiB | -14 KiB | ✅ DONE (browserslist) |

---

## 🎯 Expected Scores After All Fixes

| Metric | Current Mobile | Expected Mobile | Current Desktop | Expected Desktop |
|--------|--------------|-----------------|-----------------|------------------|
| Performance | 65 | ~85-90 | 93 | ~97-99 |
| TBT | 1,010ms 🔴 | ~120ms 🟢 | 130ms 🟢 | ~30ms 🟢 |
| LCP | 4.0s 🟡 | ~1.5s 🟢 | 0.4s 🟢 | 0.4s 🟢 |
| SI | 1.5s 🟢 | ~1.2s 🟢 | 2.3s 🔴 | ~1.0s 🟢 |

> The single biggest win is **Fix 1 (lazy Calendly)** which should push mobile performance from 65 → ~85 in one shot.

---

## 📝 Notes

- **`/Entrepreneur.webp`** is the hero image for this page (same role as `image3.webp` / `image4.webp` on homepage).
- **`/Visa.webp`, `/Visa1.webp`, `/Visa2.webp`** are the benefit/features section images — these are new images specific to this page, not present on the homepage.
- **Calendly is embedded inline** (`InlineWidget` from `react-calendly`) — it loads immediately on page load. This is the core issue. On the homepage, Calendly is already dynamically imported with `next/dynamic`, but that only defers the React component, not the Calendly scripts themselves.
- **Stripe is loaded on every page** via a global import — check if it's needed on this page at all. If it's only used for payment flows, it should be conditionally loaded.
- **apollo.io and aplo-evnt.com** are tracking scripts (tiny, ~3 KiB each, near-zero thread impact) — no action needed.
