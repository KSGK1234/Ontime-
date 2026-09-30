# Pragmr OnTime — Marketing Site PRD

## Original Problem Statement
Build a marketing experience for "Pragmr OnTime" from a 2-page content spec (Page 1: Product Overview + Core Features; Page 2: Outcomes + Intelligence). User chose via Q&A: one long scrolling page, follow pragmr.com branding aesthetics, CTAs link to sections on the site, only the specified content. Follow-up: "it should be like pragmr branding esthetics" → retheme to pragmr.com's real design system (light paper, ink, hairline grids, square mono buttons, brand #514EB3).

## Architecture
- React (CRA + craco) frontend only, static marketing page, no backend routes consumed.
- `lenis` smooth scrolling (window.__lenis), `framer-motion` for masked line reveals, staggered reveals, hover micro-interactions, scroll parallax, gauge/bars animations.
- Design tokens in tailwind.config.js: paper #F4F4F2, ink #131316, line #E4E4E7, brand #514EB3 (+dark/light/pale), delay #F59E0B, ontrack #10B981, critical #EF4444.
- Fonts: Cabinet Grotesk (display), General Sans (body), JetBrains Mono (labels) via Fontshare + Google Fonts.
- Original SVG logo mark + favicon.svg (indigo square, clock arc + amber hand).
- Pragmr-style systems: numbered section eyebrows `[ 01 ] /`, gap-px hairline card grids with hover flip to brand, square mono uppercase buttons, mono microcopy with ` / ` separators, dark ink inverted break + CTA sections, OnTime orbit graphic (gradient circle, dashed rotating rings, 4-point stars), paper grain overlay, back-to-top square button, marquee with brand diamond separators.

## User Personas
- Heads of delivery / PMO evaluating a delivery-prediction platform.
- Service-team leads wanting capacity + dependency clarity.

## Core Requirements (updated 2026-09-30, v6 — FINAL: "difference in presentation but same aesthetic mandatory")
- v6 art direction: one pragmr aesthetic (paper/ink tokens, Cabinet Grotesk + General Sans + JetBrains Mono, brand #514EB3, amber signals, hairlines, square mono uppercase buttons, numbered eyebrows, grain) with TWO presentations:
  - **Page 1 — Product `/`**: LIGHT paper presentation. Split hero (product eyebrow "Project delivery prediction platform", masked headline, delivery-confidence dashboard w/ 3D tilt + mouse spotlight) + Core Features ledger (8 rows, brand underline-grow hover).
  - **Page 2 — Branding/Intelligence `/intelligence`**: INVERTED dark-ink presentation (pragmr.com's own dark-CTA pattern applied page-wide): dark intelligence hero + orbit graphic, outcomes on dark (hairline cards, hover flip to brand), dark Intelligence Layer diagram, dark final CTA (Explore OnTime cross-page → /#features, Book a Demo modal).
- Official OnTime logo (user-supplied PNG) in nav (centered, shrink-on-scroll h-7→h-5.5/6) + footer; favicon.png + apple-touch-icon = clock-arrow glyph cut from the logo.
- OG share card: dark ink 1200×630, white logo, "delays" amber (og/twitter tags in index.html pointing to preview URL — update on custom domain).
- v6.2: Product hero card = 5-outcome panel, user-ordered: 01 Delivery Prediction FEATURED full-width (78% confidence gauge + Expected ETA AUG 14 +2D + Risk: Low + animated delivery-trend sparkline), then 2×2: 02 Business Intelligence (animated bars w/ baseline), 03 Resource Capacity Building (Available/Occupied/Overloaded % bars), 04 Virtual Connectivity (animated node network w/ presence dot), 05 Domain-Specific Customization (sliders + "Domain rules active" toggle). Float chips repositioned outside the card (above top-left, below bottom-right) so no content is covered.
- Demo modal (light paper panel): email capture → POST /api/demo-requests (FastAPI + MongoDB, collection demo_requests); GET /api/demo-requests lists them.

## Verified
- v2 structure (user request: "just 2 pages only"): BrowserRouter with 2 routes — `/` (Page 1: Hero + Marquee + Manage + Features) and `/intelligence` (Page 2: Intelligence hero + Problem + Outcomes + Intelligence Layer + Final CTA). ScrollManager resets scroll on route change and honors state.scrollTo; nav shows active page state; Explore OnTime cross-navigates home → #features; Book a Demo cross-navigates → /intelligence #demo; catch-all route renders Page 1.
- Desktop 1440: both pages' sections screenshot-checked; route click-through, deep-link /intelligence, and Explore OnTime cross-page scroll verified; no overflow-x; no console runtime errors.
- Mobile 390: clean, no overflow-x.

## Backlog (not built)
- P0: none pending.
- P1: none pending.
- P2: SEO audit pass, OG image, logo-wall marquee like pragmr.com proof section.

## Demo Requests (added 2026-09-30)
- Book a Demo modal on both pages (nav, mobile nav, final CTA) — email capture with validation, success state; posts to POST /api/demo-requests (FastAPI + MongoDB, collection demo_requests: {id, email, created_at}); GET /api/demo-requests lists submissions. Verified: curl valid/invalid/GET + full UI flow via screenshots.
