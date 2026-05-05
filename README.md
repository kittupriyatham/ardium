# Ardium — Dubai Mall Interactive Sales Platform

A world-class, cinematic, browser-based sales tool for **Dubai Mall** — the world's most visited destination. Built as a screening assignment for liat.ai.

## Live Demo
> Deploy to Vercel: `npx vercel` from the project root

## Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 16** (App Router) | Framework |
| **Framer Motion** | Cinematic animations, parallax, scroll triggers |
| **Tailwind CSS v4** | Utility styling |
| **Cormorant Garamond** | Display typography (luxury serif) |
| **Outfit** | Body typography (clean sans-serif) |

## AI Tools Used

- **ChatGPT (GPT-4o)** — Architecture planning, component scaffolding, copy direction
- **Google Gemini** — Assignment analysis and brief deconstruction
- **Claude (Anthropic)** — Full component rebuild, design system, conversion optimization
- **Midjourney / DALL·E** — Supplementary visual assets where real assets unavailable

## Design Direction

Luxury editorial aesthetic — inspired by Hermès.com, Tesla.com, and Apple.com. Dark obsidian base (#080808), gold accent (#C9A84C), Cormorant Garamond display font. Grain overlay, section fade transitions, parallax scrolling, and animated counters create a cinematic experience.

## Architecture

```
app/
├── layout.tsx          # Metadata, fonts, global wrapper
├── page.tsx            # Section composition
└── globals.css         # Design system: CSS variables, fonts, utilities

components/
├── Navbar.tsx          # Scroll-aware nav with full section links + mobile menu
├── ScrollProgress.tsx  # Gold progress bar
├── Hero.tsx            # Full-screen video hero with parallax
├── Why.tsx             # Animated stats + demographics — the "case" for Dubai Mall
├── Retail.tsx          # Brand grid, image mosaic, leasing format cards
├── Luxury.tsx          # Parallax image, prestige houses, leasing CTA
├── Dining.tsx          # F&B concept grid + dwell time stat
├── Entertainment.tsx   # Attraction cards with hover reveal
├── Events.tsx          # Venue grid + inline booking modal (Phase 2)
├── Sponsorship.tsx     # Partnership tiers (Phase 2)
├── Leasing.tsx         # Tabbed leasing paths — luxury / retail / pop-up / F&B (Phase 2)
└── CTA.tsx             # Full conversion section with contact form + trust indicators
```

## Business Objectives Served

- ✅ **Retail Leasing** — Retail, Luxury, and Leasing sections with segment-specific pitches
- ✅ **Brand Partnerships** — Sponsorship module with tiered partnership options
- ✅ **Event Bookings** — Events module with venue specs and inline booking form
- ✅ **Non-linear UX** — Full navbar with all section links + per-section scroll CTAs

## Setup

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Design Decisions

1. **Obsidian + Gold** — Luxury positioning. Matches Dubai Mall's premium brand identity.
2. **Cormorant Garamond** — Unexpected for a tech project; creates immediate editorial luxury feel.
3. **Section fade transitions** — Sections bleed into each other (no hard cuts) via gradient overlays.
4. **Animated counters** — Stats reveal on scroll with eased counting — more credible than static numbers.
5. **Every section has a CTA** — No dead ends. Each module drives toward leasing, sponsorship, or event inquiries.
6. **Grain overlay** — Subtle texture prevents the sterile "AI website" look.
7. **Mobile nav** — Full-screen overlay menu for smaller screens.

## Performance Notes

- All images use `loading="lazy"`
- Video is autoplay/muted/loop/playsInline (no layout shift)
- Fonts loaded via Google Fonts with `display=swap`
- Scroll animations use `viewport: { once: true }` — fire once, no re-render cost
