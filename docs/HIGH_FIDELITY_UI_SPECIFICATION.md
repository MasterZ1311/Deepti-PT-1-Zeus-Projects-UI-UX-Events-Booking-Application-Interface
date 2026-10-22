# High-Fidelity User Interface & Interactive Prototype Specification
## Multi-Category Event Discovery & Booking Platform ("Aura")

**Course / Degree:** Professional Training I (PT1) — UI/UX Study  
**Academic Year:** 2026–2027  
**Student Name:** Deepti Baskar  
**Register Number:** 44110145  
**Institution:** Sathyabama Institute of Science and Technology, Chennai  
**Department:** Department of Computer Science and Engineering  
**Faculty Mentor / Supervisor:** Dr. Leena Sivaguru, Associate Professor, Dept. of CSE  

---

## 1. Executive Summary & Design Rationale

This specification delivers the **High-Fidelity User Interface (UI)** and **Interactive Prototype** for **Aura**, a modern, multi-category event discovery and booking platform tailored for Indian urban consumers. 

Drawing upon the research findings (Prompt 1), information architecture (Prompt 2), wireframe blueprints (Prompt 3), and visual design system (Prompt 4), the high-fidelity interface synthesizes the best usability characteristics of three leading platforms:
1. **District by Zomato:** Rapid, friction-free booking velocity, high visual appeal, and upfront clarity.
2. **BookMyShow:** Deep faceted filtering (category, date, neighborhood, price) without overwhelming cognitive overload.
3. **Fever:** Highly curated, editorial lifestyle imagery, storytelling layouts, and rich discoverability.

### Primary Design Pillars & Non-Negotiables
- **Zero "Fee Shock" (Radical Price Transparency):** Upfront event cards display `"₹XXX (All-in)"`. At checkout, users see an explicit, itemized mathematical breakdown: `Base Ticket Price + Platform Convenience Fee - Promotional Discount + 18% GST = Final Payable Amount`.
- **Frictionless Guest Exploration:** Users can browse, search, filter, view event details, and select ticket tiers with **100% guest access**. No phone number or SMS OTP walls appear during discovery. Essential guest contact details (Name & Email) are collected only at order review for ticket pass delivery.
- **Editable Location Settings:** Rather than hardcoding a single city, an interactive location switcher allows users to toggle seamlessly between **Chennai, Bengaluru, Mumbai, Delhi NCR, and Hyderabad**, dynamically updating regional event inventories.
- **Single Obvious Primary Action (Ergonomic Thumb Zone):** Every screen features an unmistakable, high-contrast primary call-to-action (`.btn-primary-action`) pinned in the ergonomic bottom thumb reach zone.
- **Native Indian Localization:** Indian Rupee currency formatting (`₹`), regional date conventions (`Sat, 24 Oct 2026`), neighborhood tags (`Alwarpet`, `Mylapore`, `Indiranagar`, `Bandra`), and local payment options (`Instant UPI`, `Google Pay`, `PhonePe`).

---

## 2. Information Architecture & High-Fidelity Screen Inventory

The high-fidelity implementation prioritizes the 8 essential consumer screens mandated in the UX specification:

```
[SCR-01: Home / Discovery]
      │
      ├── (Search / Category Tap) ──────────> [SCR-02: Faceted Search & Filters]
      │                                                     │
      └── (Event Card Tap) ─────────────────────────────────┴──> [SCR-03: Event Detail Page]
                                                                        │
                                                                 (Book Now CTA)
                                                                        │
                                                                 [SCR-04: Ticket & Seat Selection]
                                                                        │
                                                                (Review Order CTA)
                                                                        │
                                                                 [SCR-05: Booking Review & Hold]
                                                                        │
                                                               (1-Tap Simulated Pay)
                                                                        │
                                                                 [SCR-06: Checkout & Digital Pass]
                                                                        │
[SCR-07: Saved Events & User Profile] <─────────────────────────────────┘
      ▲
      └────── [SCR-08: Ambient AI Concierge Drawer] (Available Contextually Across All Screens)
```

---

## 3. Deep Dive: The 8 Prioritized High-Fidelity Screens

### Screen 1: Home & Curated Discovery Feed (`SCR-01`)
- **Header & Navigation Bar:**
  - Status Bar: 9:41 time indicator, battery, and WiFi signals.
  - Interactive City Switcher: Tap `📍 Chennai ▾` to launch the sliding bottom sheet modal. Users can switch their active location to Bengaluru, Mumbai, Hyderabad, or Delhi NCR.
  - Ambient AI Discovery Trigger: Dedicated `✨ Ask AI` button launching the conversational discovery concierge.
- **Omni-Search Bar:**
  - High-visibility pill input with search icon and direct tap target navigating into `SCR-02`.
- **Category Shortcut Rail (Horizontal Scroller):**
  - Instant category filtering with icons: `🔥 All`, `🎭 Comedy`, `🎨 Workshops`, `🎵 Music`, `🏏 Sports`, `🎬 Screenings`.
- **Personalized Recommendations ("Curated for You"):**
  - High-impact vertical poster cards (`2:3` aspect ratio) with high-contrast gradient visual backdrops, category badges, rating indicators (`★ 4.8`), distance indicators (`2.4 km away`), and upfront all-in pricing (`₹499 (All-in)`).
- **Curated Weekend Guide ("This Weekend in Chennai"):**
  - Curated experiences highlighting fast-filling sessions, neighborhood micro-locations, and direct booking entry points.
- **Persistent Bottom Navigation:**
  - 4 ergonomic pillars: `Explore` (Active), `Browse`, `Saved` (with dynamic badge count), and `Tickets`.

### Screen 2: Faceted Search, Filters & Instant Sorting (`SCR-02`)
- **Query Input Header:**
  - Real-time search query box with clear button (`✕`) and filter icon counter (`⚙ Filters (2)`).
- **Active Filter Dismissal Pills:**
  - Interactive pills for active constraints: `This Weekend ✕`, `Under ₹1,000 ✕`, `Chennai ✕`. Tapping any chip immediately removes that parameter and refreshes the feed.
- **Multi-Dimensional Sorting Bar:**
  - Segmented controls: `Relevance` | `Date: Soonest` | `Price: Low to High` | `Top Rated`.
- **Event Result Feed:**
  - Dual-layout responsive cards showcasing verified venue badges, remaining seat indicators (`⚡ 4 seats left`), and bookmark toggles (`♡`).
- **Sliding Filter Modal Sheet:**
  - Range sliders for budget constraints (`₹0` to `₹3,000+`), multi-select category checkboxes, and neighborhood selectors.

### Screen 3: Event Detail Experience (`SCR-03`)
- **Hero Visual & Editorial Header:**
  - `2:1` cinematic hero container with subtle depth gradient, overlaid back navigation (`←`), and interactive heart bookmark (`♡`).
  - Sub-genre tag (`Stand-Up Comedy` or `Craft & Pottery`), high-contrast title, and verified host badge.
- **Logistics & Vital Metrics Grid:**
  - 4 quick-glance chips:
    1. `📅 Date & Time:` Sat, 24 Oct 2026 • 7:30 PM
    2. `⏱ Duration:` 90 Minutes
    3. `🔞 Age Restriction:` 18+ Entry Only
    4. `⭐ Community Trust:` 4.8 / 5.0 (142 reviews)
- **Venue & Map Entry Point:**
  - Physical address (`Medai - The Stage, Alwarpet`), neighborhood proximity (`2.4 km away`), and interactive map thumbnail with `"Get Directions"` link.
- **Experience Description & Highlights:**
  - Formatted paragraphs highlighting performer bios, studio materials included, and accessibility amenities.
- **Sticky Ergonomic Booking Bar:**
  - Pinned to viewport bottom: Starting price display (`₹499 (All-in)`) alongside the prominent primary action button: `Book Experience ➔`.

### Screen 4: Ticket Selection & Dynamic Seating/Station Map (`SCR-04`)
- **Time Slot Selector:**
  - Horizontal selection chips with dynamic availability states:
    - `5:00 PM` (Available)
    - `7:30 PM` (`⚡ 4 seats left` — Urgency pill)
    - `9:30 PM` (`✕ Sold Out` — Disabled state with strikethrough)
- **Tiered Pass Stepper Cards:**
  - **Silver Pass (General Admission):** ₹499 per person. Stepper `[-] 0 [+]`.
  - **Gold Front Row + Meet & Greet:** ₹799 per person. Stepper `[-] 0 [+]`.
  - Inclusive description outlining inclusions (beverage, poster, reserved zone).
- **Interactive Seating / Workstation Zone Map:**
  - Contextual spatial map adapting to event type:
    - *Auditorium Events:* Stage line with color-coded interactive seats (Available, Selected, Reserved).
    - *Workshops:* Pottery station / craft bench selector with 6 interactive wheel stations.
- **Live Dynamic Order Subtotal Bar:**
  - Real-time tally calculation (`2 Passes Selected • ₹1,700`) updating instantly as steppers or seats are clicked, enabling the `Review Order ➔` CTA.

### Screen 5: Booking Review & Transparent Fee Breakdown (`SCR-05`)
- **10-Minute Cart Hold Reservation Timer:**
  - Prominent amber banner with animated countdown clock (`⏳ Tickets reserved for 09:42`). Automatically prevents seat hoarding while guaranteeing availability.
- **Event Summary Card:**
  - Compact recap of selected event, date, venue, slot, and pass quantity.
- **Frictionless Guest Contact Form:**
  - Simplified, zero-friction inputs: `Full Name` and `Email Address (for ticket delivery)` with mobile number. Zero password requirements.
- **Itemized Mathematical Price Breakdown (Zero Hidden Fees):**
  - Base Ticket Price: `₹1,500.00` (2x ₹750)
  - Platform Convenience Fee: `₹170.00`
  - Promotional Discount (`AURAFIRST` applied): `-₹100.00`
  - GST (18% on Convenience Fee): `₹30.60`
  - **Total Payable Amount: `₹1,600.60`**
- **Cancellation & Entry Policy Preview:**
  - Plain-language guarantee: `"Full refund up to 24 hours before showtime. Digital QR entry valid on mobile."`
- **Primary CTA:** `Simulate 1-Tap Payment (₹1,600.60) ➔`

### Screen 6: Simulated Checkout, Confirmation & Digital Pass (`SCR-06`)
- **Simulated Instant Payment Flow:**
  - Simulated payment rails: `UPI (Google Pay / PhonePe / Paytm)`, `Debit/Credit Card`, and `Apple/Google Pay`.
- **Success Confirmation Banner:**
  - Green checkmark badge with booking reference ID: `#EVT-8942-CHN`.
- **Production Digital Boarding Pass Ticket:**
  - Scannable dynamic QR code placeholder with high-contrast finder patterns.
  - Ticket credentials: Event name, ticket tier (`2x Standard Participant Pass`), seat/station assignment (`Stations 3 & 4`), date, time, and full venue address.
  - `"Confirmed & Cached Offline"` badge reassuring users that the pass is accessible without network connectivity.
- **Utility Action Bar:**
  - `📱 Add to Apple / Google Wallet`
  - `📅 Add to Calendar (.ics)`
  - `📍 Open Directions in Maps`
  - `📤 Share Pass with Friends`

### Screen 7: Saved Events, Booking History & User Profile (`SCR-07`)
- **Segmented View Tabs:**
  - `Shortlisted Events (3)` | `Past Bookings (2)` | `Preferences & Profile`
- **Saved Event Cards:**
  - Quick-action cards displaying saved experiences with 1-tap `Book Now` bypass triggers and heart un-favorite options.
- **Booking History Archive:**
  - Historical ledger with previous ticket references, dates, and `"Download Tax Invoice"` links.
- **User Preferences & Location Settings:**
  - Active home city picker (`Chennai`), interest tags (`Comedy`, `Ceramics`, `Acoustic Music`), and notification preferences.

### Screen 8: Contextual AI Discovery Concierge ("Aura AI") (`SCR-08`)
- **Ambient Bottom Drawer:**
  - Non-intrusive floating drawer accessible via the `✨ Ask AI` button on the home screen or the master toolbar.
- **Natural Language Inquiry:**
  - Chat input supporting conversational prompts:
    - *"Find me a couple's pottery workshop this Sunday in Mylapore."*
    - *"What live stand-up comedy is happening under ₹500 near Alwarpet?"*
    - *"Are there pet-friendly outdoor music events this weekend?"*
- **Quick-Tap Suggestion Chips:**
  - Fast prompts for zero-typing discovery: `🎨 Workshops on Sunday`, `🎭 Comedy under ₹500`, `🎵 Acoustic beach vibes`.
- **Interactive Response Cards:**
  - AI responses embed direct event cards with 1-tap navigation directly into the event detail page (`SCR-03`).

---

## 4. Visual Design System Implementation & Tokens

The high-fidelity UI strictly adheres to the **Aura Design System** specified in Prompt 4:

### Color Palette & HSL Tokens
| Token Name | Hex Code | Purpose & Semantic Role |
| :--- | :--- | :--- |
| `--primary` | `#5833EA` / `#6366F1` | Primary brand accent; interactive action buttons and links |
| `--primary-hover` | `#4724D6` | Hover and active pressed states |
| `--accent-coral` | `#FF5C38` | Urgency tags (`⚡ Filling Fast`), live badges, and highlights |
| `--bg-base` | `#F8FAFC` (Dark: `#0F172A`) | Global page background |
| `--bg-surface` | `#FFFFFF` (Dark: `#1E293B`) | Elevated cards, bottom sheets, and containers |
| `--border-default` | `#E2E8F0` (Dark: `#334155`) | Card outlines, dividers, and input borders |
| `--text-primary` | `#0F172A` (Dark: `#F8FAFC`) | High-contrast headings and primary labels (WCAG AAA) |
| `--text-muted` | `#64748B` (Dark: `#94A3B8`) | Secondary supporting text and logistics info |
| `--success` | `#10B981` | Booking confirmation, seat available indicators |
| `--warning` | `#F59E0B` | Hold countdown timer, low availability warnings |

### Typography Scale
- **Display & Headings:** `Outfit` (Google Fonts), geometric, modern, and friendly. Weights: 600, 700, 800.
- **Body & UI Elements:** `Inter` (Google Fonts), highly legible at small sizes, optimal tabular numbers for INR pricing. Weights: 400, 500, 600.

### Ergonomic Layout Grid
- **Viewport Dimension:** 400px width × 860px height (iPhone 15 Pro / Pixel 8 standard smartphone proportion).
- **Spatial System:** Strict 8pt grid (`4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`).
- **Touch Target Minimums:** All buttons, chips, and steppers have a minimum touch footprint of `44 × 44px`.

---

## 5. Prototype Architecture & Implementation Files

The prototype is structured cleanly across three modular files in the workspace:

1. **[app.html](file:///e:/Github/Deepti%20PT1%20Project/app.html):**  
   - Master evaluator toolbar with instant screen jumping (`SCR-01` to `SCR-08`), dark mode switcher, and link to design system showcase.
   - Smartphone hardware mockup shell with dynamic island notch and scrollable viewport.
   - Modals for location selection, faceted search filters, and ambient AI drawer.
   - Side evaluator specification card explaining design decisions and academic metadata.

2. **[app.css](file:///e:/Github/Deepti%20PT1%20Project/app.css):**  
   - Comprehensive CSS variables for Light & Dark modes.
   - Micro-animations for card hovers, modal slide-ins, and button presses.
   - Scannable digital boarding pass styling with perforated notch dividers and ticket tear-off effects.

3. **[app.js](file:///e:/Github/Deepti%20PT1%20Project/app.js):**  
   - Reactive state machine managing:
     - Active screen transitions.
     - Dynamic event catalog with rich gradient artwork and Indian metadata.
     - Location switching and catalog re-indexing.
     - Slot and tier quantity steppers.
     - Interactive seat/station selection grid.
     - Real-time 10-minute hold reservation timer.
     - Transparent fee calculation engine.
     - Simulated checkout and QR code generator.
     - Local bookmark storage and AI conversation engine.

---

## 6. Verification & Automated Subagent Testing Results

An autonomous browser subagent performed complete end-to-end user journey verification on the running prototype (`http://localhost:5173/app.html`).

### Test Execution Summary
- **Console Errors:** `0` (Zero JavaScript errors, zero missing assets).
- **Screen Navigation:** All 8 screens loaded instantaneously via the top jump pills and bottom navigation tabs.
- **Location Switching:** Successfully switched from **Chennai** to **Bengaluru** and back to **Chennai**, verifying that regional events updated dynamically.
- **Booking Flow Walkthrough:** Selected **"Beginner Wheel Pottery Masterclass"** ➔ picked 2 Standard Participant passes ➔ verified real-time fee calculation (`₹1,600.60`) ➔ executed simulated 1-tap payment ➔ verified digital QR boarding pass generation with reference `#EVT-8942-CHN`.
- **AI Concierge:** Verified drawer expansion and conversational prompt handling for natural-language discovery queries.
- **Theme Adaptation:** Verified seamless toggle between Dark Mode and Light Mode with proper contrast retention.
- **Artifact Recording:** Session interaction video recorded and saved as WebP artifact:  
  `file:///C:/Users/sivak/.gemini/antigravity-ide/brain/157d66aa-d574-4d4a-972e-59882bc67e95/high_fidelity_eval_1792480277976.webp`.

---

## 7. Conclusion & Academic Alignment

The delivered high-fidelity user interface and interactive prototype fulfill all requirements specified in Prompt 5:
- All 8 prioritized screens are fully interactive and demonstrable.
- The UX solves the core problem statement of reducing effort in event discovery and eliminating fee shock through upfront "All-in" pricing and mathematical fee breakdowns.
- The prototype maintains strict compliance with the **Aura Design System**, Apple HIG, and Material Design 3 guidelines.
- The deliverable provides a complete, self-contained demonstration for academic evaluation and portfolio presentation.
