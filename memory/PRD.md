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

## Core Requirements (updated 2026-09-30, v5 — user: "same aesthetic like branding page")
- v5 final direction: back to pragmr.com's light branding aesthetic site-wide (paper #F4F4F2, ink #131316, hairline `line` grids, square mono buttons, white cards with hover-flip to brand) while keeping the official OnTime logo in the nav/footer, the clock-arrow favicon, the dark ink intelligence-hero + CTA sections (pragmr.com's own inverse pattern), Cabinet Grotesk / General Sans / JetBrains Mono, light OG share card (1200×630), demo modal, and demo-request storage.
- 2-page structure: **Page 1 `/`** = Hero (product eyebrow "Project delivery prediction platform", delivery-confidence dashboard, 3D tilt, spotlight) + Core Features ledger (8 rows, brand underline-grow hover). **Page 2 `/intelligence`** = Intelligence hero (orbit graphic) + Outcomes (5 glass cards with product-grounded item rows + outcome chips) + Intelligence Layer diagram + Final CTA (dark ink, orbit graphic, Explore OnTime cross-page → /#features, Book a Demo modal).

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
