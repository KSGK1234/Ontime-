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

## Core Requirements (all shipped 2026-09-30)
- Hero: exact brief headline, sub, "See How OnTime Works" CTA → #manage; masked line reveal; delivery-confidence dashboard card (78% gauge, ETA AUG 14 +2D, 5 signal bars, footer stats, Signal/Verdict float chips) with 3D tilt + scroll parallax; mouse-follow spotlight.
- Marquee: 5 outcome phrases (slow editorial loop, diamond separators).
- What OnTime helps you manage: 8 hairline bento cells w/ animated mini-viz, hover flip to brand (#manage).
- Core features: 8-row ledger, numbered, brand underline-grow hover (#features).
- Intelligence break: dark ink section, "From project activity to delivery intelligence." + orbit graphic (#intelligence).
- The Problem: 5 question cells + brand "OnTime connects the signals." cell (#problem).
- From Features → Business Outcomes: 5 outcome cards with arrow chips, hover flip (#outcomes).
- The OnTime Intelligence Layer: boxy node diagram (Team Activity → Execution Data → 8-signal table → Delivery Signals → Better Decisions → More Predictable Delivery) with growing vline connectors (#layer).
- Final CTA (dark): "Make delivery decisions with data, not guesswork." + Explore OnTime (→ #features) + Book a Demo (→ pragmr.com, external; only external link since no demo page was in scope) (#demo).
- Footer + back-to-top. All copy verbatim from the brief; dashboard mock values mirror pragmr.com's own hero illustration.

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
