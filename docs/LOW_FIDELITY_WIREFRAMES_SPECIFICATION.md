# Low-Fidelity Wireframes Specification
## Multi-Category Event Discovery & Booking Platform

**Project Student:** Deepti Baskar [44110145]  
**Academic Context:** Professional Training I (PT1) — Dept. of CSE, Sathyabama Institute of Science and Technology  
**Mentor:** Dr. Leena Sivaguru, Associate Professor, Dept. of CSE  
**Document Type:** UX Wireframe Architecture & Low-Fidelity Layout Specification  
**Version:** 1.0.0 (Approved Baseline)  
**Parent Specifications:**
* Research & Benchmark Matrix: [RESEARCH_AND_UX_SPECIFICATION.md](file:///e:/Github/Deepti%20PT1%20Project/RESEARCH_AND_UX_SPECIFICATION.md)
* Navigation & User Journeys: [INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md](file:///e:/Github/Deepti%20PT1%20Project/INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md)

---

## 1. Design Rationale & Wireframe Foundations

This document establishes the **low-fidelity grayscale wireframe layouts** for the 11 core screens, interactive modals, and essential edge states of the multi-category event booking application.

### Key Ergonomic & Architectural Directives:
1. **Smartphone-First Viewport:** Layouts are engineered for modern mobile viewports (baseline: $393\times852\text{px}$ / iPhone 15 standard, responsive down to $360\text{px}$ Android and scaling to desktop containers).
2. **Grayscale Visual Discipline:** Pure structural grayscale tones (`#111827`, `#4B5563`, `#9CA3AF`, `#E5E7EB`, `#F9FAFB`) ensure evaluation is strictly focused on **information hierarchy, visual weight, touch target ergonomics, and cognitive flow**, preventing premature distractions over brand colors.
3. **Radical Pricing & Fee Transparency:** Base ticket cost, platform convenience fee, promotional discounts, and statutory taxes (GST) are itemized upfront, eliminating fee shock.
4. **Thumb-Zone Accessibility (Fitts's Law):** Primary interactive controls (navigation tabs, filter toggles, ticket steppers, sticky "Book Now" actions) reside in the bottom 40% of the viewport.
5. **Interactive Prototype Pairing:** Every wireframe documented here is implemented as a fully clickable, functional prototype in [index.html](file:///e:/Github/Deepti%20PT1%20Project/index.html).

---

## 2. Global Wireframe Design System (Grayscale Tokens)

```
┌────────────────────────────────────────────────────────────────────────┐
│                        GRAYSCALE DESIGN SYSTEM                         │
├─────────────────────┬───────────────────┬──────────────────────────────┤
│ Token Name          │ Hex Value         │ Usage Application            │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Surface Canvas      │ #F3F4F6 (Gray-100)│ Global viewport background   │
│ Surface Card        │ #FFFFFF (White)   │ Primary container surface    │
│ Surface Muted       │ #E5E7EB (Gray-200)│ Image boxes, badges, borders │
│ Border Subdued      │ #D1D5DB (Gray-300)│ Input borders, card dividers │
│ Text Primary        │ #111827 (Gray-900)│ Headings, titles, active CTAs│
│ Text Secondary      │ #4B5563 (Gray-600)│ Body copy, metadata labels   │
│ Text Placeholder    │ #9CA3AF (Gray-400)│ Search placeholders, icons   │
│ Accent Interactive  │ #1F2937 (Gray-800)│ Primary filled buttons, pills│
│ Scarcity Alert Fill │ #E5E7EB + #111827 │ Grayscale urgency pills      │
└─────────────────────┴───────────────────┴──────────────────────────────┘
```

---

## 3. Wireframe Screen Blueprints & Component Hierarchies

---

### SCR-WF-01: Home and Event Discovery (Explore Tab)

```
┌────────────────────────────────────────────────────────┐
│  📍 Chennai, IN ▾               🔔 [Saved (2)]  ✨ AI │  <-- Top Bar (48px)
├────────────────────────────────────────────────────────┤
│  🔍  Search events, artists, venues...                 │  <-- Omni-Search Bar
├────────────────────────────────────────────────────────┤
│  [All]  [Comedy]  [Music]  [Workshops]  [Sports] [Movies] <-- Category Scroll
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ [FEATURED BANNER IMAGE]                        │  │
│  │                                                  │  │
│  │  [CURATED]  [FILLING FAST]                       │  │
│  │  The Great Chennai Music Fest 2026               │  │
│  │  📅 Sat, 24 Oct • YMCA Grounds, Nandanam         │  │
│  │  ₹999 (All-in)                  [Book Now ➔]     │  │
│  └──────────────────────────────────────────────────┘  │
│     • ○ ○  (Carousel Indicators)                        │
├────────────────────────────────────────────────────────┤
│  QUICK FILTERS: [⚡ Today] [📅 Tomorrow] [🎉 Weekend]   │
├────────────────────────────────────────────────────────┤
│  🔥 Happening This Weekend                   See All >  │
│  ┌───────────────────────┐   ┌───────────────────────┐ │
│  │ 🖼️ [2:3 POSTER]       │   │ 🖼️ [2:3 POSTER]       │ │
│  │ [Comedy]  [Fast]  ♡   │   │ [Music]  [Popular] ♡  │ │
│  │ Chennai Laugh Riot    │   │ Kizhakku Acoustic Live│ │
│  │ Sat, 7:30 PM          │   │ Sun, 6:00 PM          │ │
│  │ Alwarpet              │   │ Besant Nagar          │ │
│  │ ₹499 (All-in)         │   │ ₹350 (All-in)         │ │
│  └───────────────────────┘   └───────────────────────┘ │
├────────────────────────────────────────────────────────┤
│  🎨 Hands-on Workshops                      See All >  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ Terracotta Pottery Masterclass (Mylapore)      │  │
│  │ 📅 Sun, 10:00 AM • ₹850 • All materials provided │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  [🏠 Explore]   [🔍 Browse]   [♡ Saved]   [🎟️ Tickets] │  <-- Bottom Nav (64px)
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **A1 (Header):** Tapping `📍 Chennai ▾` opens a quick bottom sheet to toggle cities (`Chennai`, `Bengaluru`, `Hyderabad`). Tapping `✨ AI` launches the ambient AI Concierge drawer.
* **A2 (Category Pill Bar):** Horizontal scroll with sticky rubber-band effect. Selecting a pill filters the feed instantly with zero full-page reload.
* **A3 (Event Cards):** 2:3 vertical poster ratio ensuring artist visibility. Heart icon in top-right allows instant bookmarking with visual fill feedback.
* **A4 (Upfront Price):** Always displays `"₹XXX (All-in)"` to establish immediate consumer trust.

---

### SCR-WF-02: Category Exploration

```
┌────────────────────────────────────────────────────────┐
│  ← Stand-Up Comedy & Open Mics             🔍 Search   │
├────────────────────────────────────────────────────────┤
│  14 Live Performances in Chennai this month            │
│  [All Comedy]  [Headliners]  [Open Mics]  [Tamil Gigs] │  <-- Sub-genre Pills
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ SPOTLIGHT: "Sorcar & Friends - Uncensored"    │  │
│  │ 📅 Friday, 8:00 PM • Music Academy Mini Hall     │  │
│  │ ₹599 (All-in)                   [Quick Book ➔]   │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  Sort: [Soonest ▾]     Filter: [⚡ Weekend] [💰 < ₹500]│
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ [CARD] Tamil Standup Jam                      │  │
│  │ 📅 Sat, 24 Oct • 7:30 PM • Medai, Alwarpet       │  │
│  │ 🔞 18+ • Club Seating • AC                       │  │
│  │ ₹399 (All-in)               [Select Tickets ➔]   │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ [CARD] Chennai Comedy Open Mic #42            │  │
│  │ 📅 Sun, 25 Oct • 5:00 PM • Backyard, Adyar       │  │
│  │ ☕ Beverage included                             │  │
│  │ ₹249 (All-in)               [Select Tickets ➔]   │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  [🏠 Explore]   [🔍 Browse]   [♡ Saved]   [🎟️ Tickets] │
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **B1 (Sub-genre Tabs):** Allows rapid filtering within a major category (e.g., distinguishing open mics from celebrity headliners).
* **B2 (Category Contextual Tags):** Cards expose genre-critical attributes directly: age restriction (`18+`), seating style (`Club Seating` vs. `Auditorium`), and language.

---

### SCR-WF-03: Search Results with Sorting & Faceted Filters

```
┌────────────────────────────────────────────────────────┐
│  ← [ 🔍 Pottery workshops                        ✕ ]   │
├────────────────────────────────────────────────────────┤
│  Active Filters: [Weekend ✕] [< ₹1000 ✕] [🎛️ All (2)] │
│  Sort By: [Best Match ▾]           Found 4 Experiences │
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ [THUMB] Beginner Wheel Pottery Workshop       │  │
│  │ 📅 Sat, 24 Oct • 10:00 AM                        │  │
│  │ 📍 Artisan Studio, Mylapore (3.1 km)             │  │
│  │ ⏱️ 2.5 hrs • 🧤 Materials Included               │  │
│  │ ₹850 (All-in)                    [Book Tickets ➔]│  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ [THUMB] Terracotta Sculpting & Glazing        │  │
│  │ 📅 Sun, 25 Oct • 3:30 PM                         │  │
│  │ 📍 DakshinaChitra, ECR (12 km)                   │  │
│  │ ⏱️ 3 hrs • ☕ Snacks Included                     │  │
│  │ ₹950 (All-in)                    [Book Tickets ➔]│  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  FACETED FILTER MODAL (SLIDES UP FROM BOTTOM)     [✕]  │
├────────────────────────────────────────────────────────┤
│  DATE AVAILABILITY:                                    │
│  (•) Anytime   ( ) Today   ( ) Tomorrow   (*) Weekend  │
├────────────────────────────────────────────────────────┤
│  PRICE RANGE:                                          │
│  [ ₹0 ─────────────●────────────── ₹2,500+ ]           │
│  Quick Presets: [Free] [< ₹500] [₹500-₹1500] [₹1500+]  │
├────────────────────────────────────────────────────────┤
│  CATEGORIES:                                           │
│  [✓] Workshops  [ ] Comedy  [ ] Music  [ ] Sports      │
├────────────────────────────────────────────────────────┤
│  NEIGHBORHOOD / ZONE:                                  │
│  [✓] Mylapore  [✓] Alwarpet  [ ] OMR  [ ] Anna Nagar   │
├────────────────────────────────────────────────────────┤
│  AMENITIES & PREFERENCES:                              │
│  [✓] Wheelchair Accessible   [✓] Air Conditioned       │
├────────────────────────────────────────────────────────┤
│  [ Reset All ]                   [ Show 4 Events ➔ ]   │  <-- Sticky Filter Bar
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **C1 (Filter Drawer):** Bottom sheet with drag handle. Tapping outside or the `✕` icon cancels pending edits; `"Show X Events"` applies all facets simultaneously with instant feed update.
* **C2 (Dynamic Count):** The CTA button computes matching inventory in real-time (`Show 4 Events`), reassuring the user before committing.

---

### SCR-WF-04: Event Detail Page

```
┌────────────────────────────────────────────────────────┐
│  ← Back                       [ Share ]   [ ♡ Bookmark]│
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │                                                  │  │
│  │ 🖼️ [HERO IMAGE: 16:9 HIGH RESOLUTION COVER]       │  │
│  │                                                  │  │
│  └──────────────────────────────────────────────────┘  │
│  [Workshop]  [Art & Craft]             ★ 4.9 (86 reviews)
│  Beginner Wheel Pottery Masterclass                    │
├────────────────────────────────────────────────────────┤
│  ┌────────────┬────────────┬─────────────┬───────────┐ │
│  │ 📅 24 Oct  │ ⏱️ 2.5 Hrs │ 📍 Mylapore │ 👥 Max 10 │ │
│  │ Saturday   │ Morning    │ Artisan Hub │ Small Grp │ │
│  └────────────┴────────────┴─────────────┴───────────┘ │
├────────────────────────────────────────────────────────┤
│  ABOUT THIS EXPERIENCE                                 │
│  Step into our cozy Mylapore studio and learn the tactile│
│  art of clay centering, pulling, and trimming on the  │
│  potter's wheel. Guided by master ceramist Priya Raman.│
│  [ Read More ▾ ]                                       │
├────────────────────────────────────────────────────────┤
│  HOST & INSTRUCTOR                                     │
│  (👤 Avatar) Priya Raman • Master Ceramist (12 yrs exp) │
├────────────────────────────────────────────────────────┤
│  WHAT IS INCLUDED                                      │
│  ✓ 2 kg natural clay & all trimming tools              │
│  ✓ Bisque firing of your 2 best pieces                 │
│  ✓ Complimentary filter coffee & iced tea              │
├────────────────────────────────────────────────────────┤
│  VENUE & LOGISTICS                                     │
│  Artisan Studio, 14 East Mada St, Mylapore, Chennai    │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🗺️ [INTERACTIVE MAP SNIPPET PREVIEW]             │  │
│  │ [ Open in Google Maps ↗ ]                        │  │
│  └──────────────────────────────────────────────────┘  │
│  • Valet parking available • AC Studio • Stroller-safe │
├────────────────────────────────────────────────────────┤
│  CANCELLATION POLICY                                   │
│  🛡️ Full refund up to 24 hours prior to session.       │
├────────────────────────────────────────────────────────┤
│  From ₹850 / person                [ Select Tickets ➔ ]│  <-- Sticky Bar (56px)
│  Taxes & fees included                                 │
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **D1 (Information Hierarchy):** Crucial logistics (date, duration, location, group size) are surfaced in a 4-box metric card above the fold.
* **D2 (Sticky Booking Bar):** Always visible on scroll, showing total per-person price and prominent `"Select Tickets"` action.

---

### SCR-WF-05: Date, Time, Ticket Type & Conditional Seat Selection

```
┌────────────────────────────────────────────────────────┐
│  SELECT SESSION & TICKETS                         [✕]  │
├────────────────────────────────────────────────────────┤
│  STEP 1: CHOOSE DATE                                   │
│  [ Fri, 23 Oct ]   [● Sat, 24 Oct ]   [ Sun, 25 Oct ]  │
├────────────────────────────────────────────────────────┤
│  STEP 2: CHOOSE TIME SLOT                              │
│  ┌────────────────────┐   ┌────────────────────────┐   │
│  │ 10:00 AM - 12:30 PM│   │ 03:00 PM - 05:30 PM    │   │
│  │ ● Selected         │   │ ✕ Sold Out (Disabled)  │   │
│  └────────────────────┘   └────────────────────────┘   │
│  ┌────────────────────┐                                │
│  │ 06:30 PM - 09:00 PM│                                │
│  │ ⚡ 3 seats left     │                                │
│  └────────────────────┘                                │
├────────────────────────────────────────────────────────┤
│  STEP 3: SELECT TICKET TIER                            │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Standard Participant Pass                ₹850    │  │
│  │ • 1 Wheel station + Clay kit + 2 fired pots       │  │
│  │                                 [ - ]  2  [ + ]  │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Masterclass VIP (Coaching + Glaze)     ₹1,250    │  │
│  │ • 1-on-1 coaching + premium color glaze + coffee │  │
│  │                                 [ - ]  0  [ + ]  │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  CONDITIONAL SEATING ZONE (For Seated Theatre/Auditorium)│
│  ┌──────────────────────────────────────────────────┐  │
│  │                 [ === STAGE === ]                │  │
│  │  [Front Zone (Gold)]      [● Selected: Row B]    │  │
│  │  [Middle Zone (Silver)]   [ Available ]          │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  2 Tickets • ₹1,700 Total         [ Review Booking ➔ ] │  <-- Dynamic Subtotal
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **E1 (Combined Single-Sheet Ergonomics):** Date, time slot, tier, and seat zone live in a single scrollable sheet to prevent multi-screen disorientation.
* **E2 (Real-Time Scarcity):** Sold-out slots are visibly disabled with clear labels; slots with $< 5$ tickets display a scarcity tag (`⚡ 3 seats left`).
* **E3 (Live Subtotal):** Bottom bar recalculates immediately on tapping `+` or `-`.

---

### SCR-WF-06: Booking Summary with Itemized Fee Math & Discounts

```
┌────────────────────────────────────────────────────────┐
│  ← Order Summary                                       │
├────────────────────────────────────────────────────────┤
│  ⏳ Tickets held for 09:48 mins (Locked)               │  <-- Countdown Pill
├────────────────────────────────────────────────────────┤
│  EVENT DETAILS                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ Beginner Wheel Pottery Masterclass             │  │
│  │ 📅 Sat, 24 Oct • 10:00 AM - 12:30 PM             │  │
│  │ 📍 Artisan Studio, Mylapore, Chennai             │  │
│  │ 🎟️ 2x Standard Participant Passes                │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  ATTENDEE CONTACT (For Ticket Delivery)                │
│  Name:  [ Aravind Kumar                            ]   │
│  Email: [ aravind.demo@gmail.com                   ]   │
│  Phone: [ +91 98401 23456                          ]   │
│  (⚡ 1-Tap Autofill Demo Contact)                      │
├────────────────────────────────────────────────────────┤
│  PROMO CODE                                            │
│  [ WELCOME100                  ]  [ Applied ✓ ]        │
├────────────────────────────────────────────────────────┤
│  TRANSPARENT PRICE BREAKDOWN                           │
│  Base Ticket Price (2 x ₹750)                 ₹1,500   │
│  Convenience & Platform Fee                     ₹100   │
│  Promo Discount (WELCOME100)                   -₹100   │
│  Applicable GST (18% on fee)                     ₹18   │
│  ───────────────────────────────────────────────────   │
│  Total Payable Amount                         ₹1,518   │
│  🛡️ Zero hidden charges. Guaranteed final price.       │
├────────────────────────────────────────────────────────┤
│  [ Proceed to Simulated Checkout (₹1,518) ➔ ]          │  <-- Primary CTA
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **F1 (Hold Countdown):** 10-minute timer prevents ghost inventory locking and provides reassuring feedback.
* **F2 (Fee Line-Items):** Full transparency eliminates cart abandonment ("fee shock").

---

### SCR-WF-07: Simulated Checkout & Instant Payment

```
┌────────────────────────────────────────────────────────┐
│  ← Checkout & Simulated Payment                        │
├────────────────────────────────────────────────────────┤
│  Amount to Pay: ₹1,518             Ref: #RES-8942-CHN  │
├────────────────────────────────────────────────────────┤
│  SELECT SIMULATED PAYMENT METHOD:                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │ (●) ⚡ Instant UPI / GPay (Simulated 1-Tap)      │  │
│  │     Quickest • Zero gateway redirects            │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ( ) 🍎 Apple Pay / Google Wallet Simulated       │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ( ) 💳 Credit / Debit Card (Mock Form)           │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  SIMULATED GATEWAY CONTROLS (Demo Mode):               │
│  [✓] Force Success Scenario    [ ] Simulate Timeout    │
├────────────────────────────────────────────────────────┤
│  🔒 256-Bit SSL Mock Gateway • Educational Sandbox     │
├────────────────────────────────────────────────────────┤
│  [ Complete Payment of ₹1,518 ➔ ]                      │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  PROCESSING MODAL OVERLAY (800ms)                      │
│                                                        │
│             ( ⟳ Animated Spinner )                     │
│         Securing your reservation...                   │
│         Generating encrypted entry pass                │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **G1 (Zero Real Payment Gateways):** Strictly adheres to project constraints by simulating UPI, Apple Pay, and Card checkouts without external backend dependencies.
* **G2 (Test Toggle):** Allows toggling between successful confirmation and error recovery states.

---

### SCR-WF-08: Digital Ticket Pass with Dynamic QR Code

```
┌────────────────────────────────────────────────────────┐
│  🎉 Booking Confirmed!             [ Share Pass ↗ ]    │
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │  TICKET PASS                   #EVT-8942-CHN     │  │
│  │  Beginner Wheel Pottery Masterclass              │  │
│  │  Artisan Studio, Mylapore, Chennai               │  │
│  │  ──────────────────────────────────────────────  │  │
│  │  DATE & TIME:           SESSION TIER:            │  │
│  │  Sat, 24 Oct • 10:00 AM Standard Pass (2 Qty)   │  │
│  │  ──────────────────────────────────────────────  │  │
│  │  ATTENDEE:              GATE ENTRY:              │  │
│  │  Aravind Kumar + 1      Studio Bay 2             │  │
│  │  ──────────────────────────────────────────────  │  │
│  │                                                  │  │
│  │          ┌─────────────────────────┐             │  │
│  │          │   ████ ▄▄▄▄▄ █▀█ █ █    │             │  │
│  │          │   █ ▄█ █ █ █ ▄▀█▄█▀█    │             │  │
│  │          │   ████ █▄▄▄█ █▄█ █ █    │             │  │
│  │          │   [ DYNAMIC MOCK QR ]   │             │  │
│  │          └─────────────────────────┘             │  │
│  │          SCAN AT VENUE GATE FOR ENTRY            │  │
│  │          Status: ● Confirmed & Cached Offline    │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  ACTION BAR:                                           │
│  [ 📲 Add to Wallet ]         [ 📅 Add to Calendar ]   │
│  [ 🗺️ Venue Directions ]       [ 📄 Download Pass ]     │
├────────────────────────────────────────────────────────┤
│  [ Explore More Experiences ➔ ]                        │
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **H1 (Perforated Pass Metaphor):** Clear visual boarding-pass hierarchy with verified attendee details and scan instructions.
* **H2 (Offline Storage Reassurance):** Explicitly states *"Confirmed & Cached Offline"*, reassuring attendees they will not get locked out due to weak cell signal at venues.

---

### SCR-WF-09: Saved Events & Booking History

```
┌────────────────────────────────────────────────────────┐
│  Saved & Activity                                      │
├────────────────────────────────────────────────────────┤
│  [● Bookmarked Events (2)]      [ Past & Active (1) ]  │
├────────────────────────────────────────────────────────┤
│  VIEW A: BOOKMARKED SHORTLIST                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ Chennai Laugh Riot ft. Local All-Stars        │  │
│  │ 📅 Sat, 24 Oct • 7:30 PM • Medai, Alwarpet       │  │
│  │ ⚡ 4 tickets left at ₹499        [ Remove ♡ ]    │  │
│  │                                 [ Quick Book ➔ ] │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ Kizhakku Acoustic Live Session                │  │
│  │ 📅 Sun, 25 Oct • 6:00 PM • Besant Nagar Beach    │  │
│  │ ₹350 (All-in)                   [ Quick Book ➔ ] │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  VIEW B: BOOKING HISTORY                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🎟️ #EVT-8942-CHN (UPCOMING)                      │  │
│  │ Beginner Wheel Pottery Masterclass               │  │
│  │ Sat, 24 Oct, 10:00 AM • Mylapore                 │  │
│  │ [ View Digital Pass ➔ ]                          │  │
│  └──────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────┤
│  [🏠 Explore]   [🔍 Browse]   [♡ Saved]   [🎟️ Tickets] │
└────────────────────────────────────────────────────────┘
```

#### Annotations & Interactions:
* **I1 (Quick-Book Bypass):** Tapping `"Quick Book"` opens the ticket selector directly, letting shortlisters book without re-reading the full event detail page.

---

### SCR-WF-10: Profile and Preferences

```
┌────────────────────────────────────────────────────────┐
│  Profile & Settings                                    │
├────────────────────────────────────────────────────────┤
│  (👤 Avatar)  Aravind Kumar                            │
│  aravind.demo@gmail.com • +91 98401 23456              │
├────────────────────────────────────────────────────────┤
│  LOCATION & REGION                                     │
│  Primary City: [ Chennai, Tamil Nadu ▾ ]               │
├────────────────────────────────────────────────────────┤
│  ENTERTAINMENT PREFERENCES                             │
│  [✓] Stand-Up Comedy     [✓] Indie Music & Concerts    │
│  [✓] Hands-on Workshops  [ ] Recreational Sports       │
├────────────────────────────────────────────────────────┤
│  NOTIFICATIONS                                         │
│  WhatsApp Ticket Pass Delivery         (•) ON  ( ) OFF │
│  Price-Drop & Weekend Alerts           (•) ON  ( ) OFF │
├────────────────────────────────────────────────────────┤
│  APP SETTINGS & SUPPORT                                │
│  Display Theme: [ Wireframe Grayscale (High Contrast) ]│
│  › Frequently Asked Questions (FAQs)                   │
│  › Terms of Service & Privacy Policy                   │
│  › Clear Local Storage Demo Data                       │
├────────────────────────────────────────────────────────┤
│  Version: 1.0.0 • Deepti Baskar [44110145] • PT1 Proj  │
└────────────────────────────────────────────────────────┘
```

---

### SCR-WF-11: Essential Edge States (State Machine Matrix)

```
┌────────────────────────────────────────────────────────┐
│  EDGE STATE SELECTOR (Interactive Testing Switcher):   │
│  [11A: Empty Search] [11B: Sold Out] [11C: Skeleton] [11D: Pay Fail] │
└────────────────────────────────────────────────────────┘
```

#### 11A: Empty Search Results
* **Visual:** Minimalist illustration placeholder (magnifying glass with zero match).
* **Copy:** *"No events found for 'underwater polo'"*.
* **Recovery:** Suggests broader categories (`Try searching 'Sports' or 'Workshops'`) + `[ Reset All Filters ]` action button.

#### 11B: Sold-Out Event
* **Visual:** Prominent `"SOLD OUT"` grayscale pill across cover banner.
* **Disabled Control:** Ticket CTA replaced with `[ Join Waitlist / Notify Me ]`.
* **Reassurance & Cross-Sell:** Displays a 2-card carousel: *"Similar comedy shows with tickets available this Saturday"*.

#### 11C: Loading Skeletons
* **Visual:** Pulse-animated rectangular gray blocks mimicking header banner, category chips, and 2:3 card grids.
* **UX Purpose:** Reduces perceived wait time and prevents layout shift (CLS).

#### 11D: Failed Payment & Recovery
* **Visual:** Warning exclamation pill icon.
* **Copy:** *"Simulated Payment Timed Out. No funds were debited."*
* **Recovery:** *"Your tickets remain reserved for 04:32 mins."* + `[ Retry Payment ]` or `[ Change Payment Method ]`.

---

## 4. Usability Review & Friction Analysis

Before approving the wireframes, a heuristic walkthrough identified and resolved the following potential friction points:

| Identified UX Hazard | Heuristic / Ergonomic Risk | Resolved Wireframe Solution |
| :--- | :--- | :--- |
| **H1: Ambiguous Starting Price** | Displaying "From ₹499" could lead to fee shock if fees are added later. | Standardized all card tags to read **"₹499 (All-in)"** and itemized the ₹0 surprise breakdown on the summary sheet. |
| **H2: Disorientation in Multi-Screen Checkout** | Navigating between separate date, time, tier, and cart screens causes high abandonment. | Consolidated Date, Slot, Tier, and Seat zone selection into a **single unified bottom sheet (SCR-WF-05)**. |
| **H3: Aggressive Login Walls** | Requiring phone OTP before viewing ticket availability creates friction. | Enforced **100% Guest Browsing**; user identity is gathered as simple Name + Email fields on the booking summary. |
| **H4: Weak Cellular Coverage at Venues** | Attendees struggling to load ticket QR codes at crowded venue gates. | Integrated **localStorage offline caching** with an explicit reassurance indicator on the digital ticket (SCR-WF-08). |

---

## 5. Next Steps

These low-fidelity wireframes are fully realized in the interactive prototype:
* **Interactive Code Prototype:** [index.html](file:///e:/Github/Deepti%20PT1%20Project/index.html)
* **CSS Wireframe Tokens:** [wireframes.css](file:///e:/Github/Deepti%20PT1%20Project/wireframes.css)
* **Application State Machine:** [wireframes.js](file:///e:/Github/Deepti%20PT1%20Project/wireframes.js)
