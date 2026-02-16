# SummitKit — Event & Conference Page Template

> A comprehensive, premium event page template for conferences, summits, and multi-day events.

## Brand Identity
- **Personality:** Professional, energetic, tech-forward, premium
- **Primary Color:** Ocean Teal `#0891B2` — fresh, modern, distinctive
- **Secondary Accent:** Amber `#D97706` — energy, urgency, highlights
- **Dark Sections:** Deep Ocean Blue `#0C4A6E` — rich, immersive (not black)
- **Light Background:** Clean slate white `#F8FAFC`
- **Display Font:** Space Grotesk — modern, geometric headings
- **Body Font:** DM Sans — clean, readable body text

## Pages
- **Homepage** (`/`) — Single-page event site with all sections, smooth-scroll navigation

## Sections (in order)
1. **Navbar** — Sticky navigation with smooth-scroll links and "Get Tickets" CTA. Mobile hamburger menu with animated open/close.
2. **Hero** — Full-screen dark section with gradient orbs, event name, countdown timer, date/location, and two CTAs (Get Tickets / View Schedule). Early Bird badge with animated dot.
3. **Stats Strip** — Floating white card with 6 event stats: 2,000+ attendees, 40+ speakers, 3 tracks, 3 days, 12 workshops, 30+ countries.
4. **Schedule** — Dark section with multi-track schedule builder. Day tabs (3 days) with animated pill indicator. Track filter pills (All, Main Stage, Workshop A, Workshop B, Networking). Session cards with color-coded left borders per track, speaker info, time, room, and session type badges.
5. **Speakers** — Light section with 12 speaker profile cards in a 4-column grid. Gradient avatar placeholders. Click to open animated modal with full bio, topic, and social links.
6. **Tickets** — Dark section with 3 pricing tiers: Early Bird ($299, was $499), General ($499, highlighted as "Most Popular"), VIP ($899). Feature comparison lists. Badges for each tier.
7. **Venue** — Light section with embedded Google Maps iframe (Moscone Center) and venue details card. Getting-there info grid: By Air, By Transit, By Car, Nearby Hotels.
8. **Sponsors** — Light surface section with sponsor logos organized by tier. Gold sponsors (3) have large cards with golden gradient icons, glow hover effects, and "Visit booth" CTA. Silver sponsors (4) have horizontal cards with initials and company name. Bronze sponsors (6) displayed as rounded pills in a flowing wrap layout. Each tier has a decorative divider with icon badge. Includes a "Become a Sponsor" CTA card with package info.
9. **Networking** — Dark section with networking features (Smart Badges, Event App Chat, 1-on-1 Matchmaking, Community Tables) and a mock attendee directory preview.
10. **Live Stream** — Light section with virtual attendance info. Video player preview mock with live badge and viewer count. Features: HD streaming, real-time Q&A, virtual networking.
11. **Replay** — Dark section with 6 session recording cards. Gradient thumbnails with play buttons, speaker name, and duration.
12. **CTA** — Light section with a bold indigo-to-purple gradient card. Final call-to-action with event details and two buttons.
13. **Footer** — Dark footer with brand info, event links, info links, newsletter signup, and social media icons.

## Components
- **Navbar** (`components/Navbar.tsx`) — Sticky nav, scrolled state changes background
- **HeroSection** (`components/HeroSection.tsx`) — Hero with CountdownTimer
- **CountdownTimer** (`components/CountdownTimer.tsx`) — Animated countdown to event date
- **StatsSection** (`components/StatsSection.tsx`) — Event statistics strip
- **ScheduleSection** (`components/ScheduleSection.tsx`) — Multi-track schedule with day/track filters
- **SpeakersSection** (`components/SpeakersSection.tsx`) — Speaker grid with bio modals
- **TicketsSection** (`components/TicketsSection.tsx`) — 3-tier pricing cards
- **VenueSection** (`components/VenueSection.tsx`) — Venue info with embedded map
- **SponsorsSection** (`components/SponsorsSection.tsx`) — Tiered sponsor logos
- **NetworkingSection** (`components/NetworkingSection.tsx`) — Networking features + attendee directory
- **LiveStreamSection** (`components/LiveStreamSection.tsx`) — Virtual attendance section
- **ReplaySection** (`components/ReplaySection.tsx`) — Post-event session recordings
- **CTASection** (`components/CTASection.tsx`) — Final call-to-action
- **Footer** (`components/Footer.tsx`) — Site footer with newsletter

## Data
All event data lives in `lib/data.ts`. This includes:
- Event details (name, dates, location, stats, social links)
- Speaker profiles (12 speakers with bios, topics, companies)
- Schedule (3 days, multi-track with sessions, rooms, types)
- Ticket tiers (Early Bird, General, VIP with pricing and features)
- Sponsors (Gold, Silver, Bronze tiers)
- Replay sessions (6 recorded talks)

## How to Customize
- **Change event details:** Edit `lib/data.ts` — update `EVENT` object for name, dates, location
- **Update speakers:** Edit `SPEAKERS` array in `lib/data.ts` — add/remove/modify speaker entries
- **Modify schedule:** Edit `SCHEDULE` array in `lib/data.ts` — each day has sessions with tracks
- **Change ticket pricing:** Edit `TICKETS` array in `lib/data.ts`
- **Update sponsors:** Edit `SPONSORS` array in `lib/data.ts`
- **Change colors:** Edit `app/globals.css` — update CSS custom properties in `:root`
- **Change fonts:** Edit `app/layout.tsx` — swap Google Fonts imports

## Tech Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)
- TypeScript

## Recent Changes
- 2026-02-16: Created complete SummitKit event/conference template with all 13 sections
- 2026-02-16: Improved Sponsors section — added rich Gold/Silver/Bronze card designs with gradient icons, hover effects, and "Become a Sponsor" CTA
- 2026-02-16: Complete color palette overhaul — switched from black/red to ocean teal (#0891B2) + amber (#D97706) palette with deep blue (#0C4A6E) dark sections. Fixed Tailwind v4 theme variable resolution. Updated all gradient references across Hero, Speakers, Tickets, CTA, Replay sections.
