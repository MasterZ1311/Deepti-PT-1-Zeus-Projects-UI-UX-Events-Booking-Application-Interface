# Visual Design System Specification: "Aura / Pulse"
## Multi-Category Event Discovery & Booking Platform

**Project Student:** Deepti Baskar [44110145]  
**Academic Context:** Professional Training I (PT1) — Dept. of CSE, Sathyabama Institute of Science and Technology  
**Mentor:** Dr. Leena Sivaguru, Associate Professor, Dept. of CSE  
**Document Type:** Production-Grade Visual Design System & Component Library Specification  
**Version:** 1.0.0 (Production Release)  
**Parent Specifications:**
* Research Audit & Competitor Benchmarking: [RESEARCH_AND_UX_SPECIFICATION.md](file:///e:/Github/Deepti%20PT1%20Project/RESEARCH_AND_UX_SPECIFICATION.md)
* Information Architecture & User Journeys: [INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md](file:///e:/Github/Deepti%20PT1%20Project/INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md)
* Low-Fidelity Wireframes Baseline: [LOW_FIDELITY_WIREFRAMES_SPECIFICATION.md](file:///e:/Github/Deepti%20PT1%20Project/LOW_FIDELITY_WIREFRAMES_SPECIFICATION.md)
* Interactive Component Showcase: [design-system.html](file:///e:/Github/Deepti%20PT1%20Project/design-system.html)

---

## 1. Brand Philosophy & Design Principles

The visual design system—codenamed **"Aura"**—is engineered to create an **engaging, contemporary, and entertainment-focused** consumer experience without overwhelming the user with heavy gradients, harsh borders, or competing neon hues.

It synthesizes the best ergonomic and behavioral principles of:
1. **Apple Human Interface Guidelines (HIG):**
   * *Clarity & Deference:* Content-first visual hierarchy where event posters and artist imagery take center stage.
   * *Ergonomic Touch Targets:* Strict $44\times44\text{pt}$ ($48\times48\text{dp}$) minimum interactive bounds.
   * *Depth & Materials:* Subtle translucency (`backdrop-filter: blur(20px)`) and organic corner radii ($16\text{--}24\text{px}$) that match modern smartphone display corners.
2. **Google Material Design 3 (M3):**
   * *Tonal Elevation & State Layers:* Interactive states (hover, focus, pressed, dragged) use calculated opacity layers over surface tokens rather than random color overrides.
   * *Expressive Dynamic Color:* Harmonious tonal palettes derived from a core vibrant key color, ensuring WCAG 2.1 AA/AAA contrast across both Light and Dark themes.
   * *Adaptive Component Taxonomy:* Systematic separation of Assist Chips, Filter Chips, Input Chips, and Suggestion Chips.
3. **Distinctive Original Identity:**
   * Distances itself from BookMyShow's dated red banner density (`#E01E37`), District/Zomato's scarlet food branding, and Fever's niche dark-exclusive styling.
   * Adopts a signature **Deep Ultraviolet / Electric Indigo (`#5833EA` / `#6366F1`)** primary anchor paired with an energetic **Sunset Coral (`#FF5C38`)** secondary accent for urgency and live excitement.

---

## 2. Design Tokens: Color System

The Aura color system provides light and dark themes using semantic tokens. Every color pairing complies with WCAG 2.1 AA contrast requirements ($\ge 4.5:1$ for body copy, $\ge 3:1$ for large headings and UI icons).

### 2.1 Semantic Color Tokens Table

| Token Name | Light Theme Value | Dark Theme Value | Semantic Usage & Context | Contrast Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `--color-primary` | `#5833EA` (Ultraviolet) | `#6366F1` (Electric Indigo) | Primary buttons, active tabs, brand anchor, focus rings | $\ge 7.2:1$ on canvas |
| `--color-primary-hover` | `#4723D4` | `#4F46E5` | Hover/active states on primary interactive elements | $\ge 8.5:1$ on canvas |
| `--color-primary-subtle` | `#EEF2FF` | `rgba(99, 102, 241, 0.15)` | Selected chip background, active tab highlights | Accessible container |
| `--color-secondary` | `#FF5C38` (Sunset Coral) | `#FF7052` (Vibrant Coral) | Scarcity badges ("Filling Fast"), live indicators, heart fill | $\ge 4.6:1$ on white |
| `--color-secondary-subtle`| `#FFF1EE` | `rgba(255, 92, 56, 0.15)` | Urgency badge container background | High legibility |
| `--color-bg-canvas` | `#F8F9FC` (Soft Pearl) | `#0B0F19` (Obsidian Slate) | Global app viewport background | Root foundation |
| `--color-bg-surface` | `#FFFFFF` (Pure White) | `#131B2E` (Navy Surface) | Event cards, bottom navigation, sheets, modals | Elevation 0 |
| `--color-bg-surface-elev`| `#FFFFFF` (Shadowed) | `#1C2640` (Elevated Navy) | Floating toolbars, active bottom sheets, dropdowns | Elevation 1-2 |
| `--color-bg-muted` | `#F1F3F9` (Cool Gray) | `#232F4D` (Slate Container) | Image placeholder boxes, search input backgrounds | Neutral container |
| `--color-text-primary` | `#0F172A` (Slate 900) | `#F8FAFC` (Slate 50) | Main titles, card headings, primary numbers | $> 14:1$ (AAA) |
| `--color-text-secondary`| `#475569` (Slate 600) | `#94A3B8` (Slate 400) | Supporting subtitles, dates, venue area labels | $\ge 4.8:1$ (AA) |
| `--color-text-muted` | `#64748B` (Slate 500) | `#64748B` (Slate 500) | Form input labels, helper text, disabled hints | $\ge 4.5:1$ (AA) |
| `--color-border-subtle` | `rgba(15, 23, 42, 0.08)` | `rgba(255, 255, 255, 0.08)`| Subtle card borders, list item separators | Structural divider |
| `--color-border-default`| `rgba(15, 23, 42, 0.16)` | `rgba(255, 255, 255, 0.16)`| Input field borders, unselected chip outlines | Form boundaries |
| `--color-border-focus` | `#5833EA` (2px Solid) | `#6366F1` (2px Solid) | High-visibility keyboard/tap accessibility ring | WCAG 2.4.7 focus |
| `--color-success` | `#10B981` (Emerald) | `#34D399` (Mint Emerald) | Confirmed tickets, offline validated badge, free perks | $\ge 4.6:1$ |
| `--color-warning` | `#F59E0B` (Amber) | `#FBBF24` (Warm Amber) | Countdown reservation hold timer, low seat alerts | $\ge 4.5:1$ |
| `--color-error` | `#EF4444` (Crimson) | `#F87171` (Coral Red) | Form errors, simulated payment failure banner | $\ge 4.6:1$ |

---

## 3. Typography Scale & Hierarchy

The typography scale utilizes **Google Fonts Outfit** for headlines and brand display, paired with **Inter** for dense UI labels, tables, and numerical fee data.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   TYPOGRAPHY SCALE                                     │
├──────────────────┬───────────┬─────────┬──────────────┬────────────┬───────────────────┤
│ Style Token      │ Font Size │ Weight  │ Line Height  │ Tracking   │ Primary Usage     │
├──────────────────┼───────────┼─────────┼──────────────┼────────────┼───────────────────┤
│ `Display Large`  │ 32px      │ 800     │ 38px (1.2)   │ -0.025em   │ Pass confirmation │
│ `Headline 1`     │ 24px      │ 700     │ 30px (1.25)  │ -0.02em    │ Event detail title│
│ `Headline 2`     │ 20px      │ 700     │ 26px (1.3)   │ -0.015em   │ Section headers   │
│ `Headline 3`     │ 16px      │ 600     │ 22px (1.35)  │ -0.01em    │ Event card title  │
│ `Body Large`     │ 15px      │ 400/500 │ 22px (1.45)  │ 0em        │ Experience bio    │
│ `Body Medium`    │ 13px      │ 400/500 │ 18px (1.4)   │ 0em        │ Card metadata, log│
│ `Body Small`     │ 12px      │ 400     │ 16px (1.35)  │ +0.01em    │ Venue subtitle    │
│ `Label Bold`     │ 12px      │ 700     │ 16px (1.35)  │ +0.02em    │ Price "All-in"    │
│ `Micro Tag`      │ 10px      │ 700     │ 12px (1.2)   │ +0.04em    │ Urgency badges    │
│ `Button Label`   │ 14px      │ 700     │ 18px (1.3)   │ 0em        │ CTAs and actions  │
└──────────────────┴───────────┴─────────┴──────────────┴────────────┴───────────────────┘
```

---

## 4. Spacing Scale, Grid & Layout Foundation

The spatial system is built on an **8pt Base Grid** with 4pt half-steps for micro-alignments, ensuring strict consistency across components and viewports.

### 4.1 Spacing Scale Tokens
* `space-1` = `4px` (Micro-gaps between badges and text)
* `space-2` = `8px` (Icon-to-label gaps, chip padding horizontal)
* `space-3` = `12px` (Internal card padding, search input padding)
* `space-4` = `16px` (Standard viewport margins, feed gutter)
* `space-5` = `20px` (Section gaps, bottom sheet internal padding)
* `space-6` = `24px` (Major section dividers, hero margins)
* `space-8` = `32px` (Modal tops, pass header separations)

### 4.2 Corner Radii Tokens
* `radius-xs` = `4px` (Micro-badges, counter tags)
* `radius-sm` = `8px` (Filter chips, inputs, small buttons)
* `radius-md` = `14px` (Standard event cards, modal containers)
* `radius-lg` = `20px` (Hero spotlight banner, bottom sheets)
* `radius-xl` = `28px` (Floating action drawers, pass capsules)
* `radius-full`= `9999px` (Pills, avatars, circular icon buttons)

### 4.3 Elevation & Shadow Tokens
* `shadow-none`: `0 0 0 transparent`
* `shadow-sm` (Cards resting): `0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)`
* `shadow-md` (Cards hover / Bottom nav): `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -1px rgba(15, 23, 42, 0.04)`
* `shadow-lg` (Bottom sheets / Dropdowns): `0 10px 25px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.04)`
* `shadow-xl` (Floating AI concierge): `0 20px 35px -5px rgba(88, 51, 234, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

---

## 5. Comprehensive Component Specifications & State Matrices

Every component is defined with explicit rules for **Selected, Unselected, Disabled, Pressed, Loading, Error, and Focus** states.

---

### 5.1 Buttons

```
┌────────────────────────────────────────────────────────────────────────┐
│                           BUTTON VARIANTS                              │
├───────────────┬──────────────────────────────────┬─────────────────────┤
│ Variant       │ Visual Treatment                 │ Primary Purpose     │
├───────────────┼──────────────────────────────────┼─────────────────────┤
│ `Primary`     │ Filled `--color-primary`, text white│ Main flow action    │
│ `Secondary`   │ Surface white, border subtle     │ Secondary choice    │
│ `Ghost`       │ Transparent, hover bg-muted      │ Tertiary actions    │
│ `Icon Only`   │ 40x40 circle, centered SVG       │ Back, Bookmark, More│
│ `Sticky Bar`  │ 100% width mobile thumb-zone CTA │ "Select Tickets"    │
└───────────────┴──────────────────────────────────┴─────────────────────┘
```

#### Seven Interactive States:
1. **Unselected / Default:** Solid fill or clean 1px border. Height: 44px (Standard) or 48px (Sticky).
2. **Hover:** Tonal darkening by 8% (`--color-primary-hover`). Cursor: pointer.
3. **Pressed (Active):** Scale transform `scale(0.98)` with 12% darkened state layer.
4. **Focused:** 2px solid `--color-border-focus` with 2px offset (`outline-offset: 2px`).
5. **Loading:** Disabled pointer events; text hidden; centered 18px SVG animated spinner.
6. **Disabled:** Opacity 0.45; cursor `not-allowed`; background `--color-bg-muted`.
7. **Error State:** Subtle horizontal shake animation (300ms) with temporary red outline.

---

### 5.2 Input Fields & Search Bars

* **Geometry:** Height 44px; border-radius `radius-md` (12px); padding `12px 14px`.
* **Typography:** Font size 14px; font weight 500; placeholder color `--color-text-muted`.
* **State Behavior:**
  * *Default:* 1px border `--color-border-default`; background `--color-bg-surface`.
  * *Focus / Active:* 2px border `--color-primary`; background `#FFFFFF`; subtle primary glow (`box-shadow: 0 0 0 3px rgba(88, 51, 234, 0.15)`).
  * *Filled with Text:* Displays clear `✕` button on right edge for 1-tap reset.
  * *Error State:* 1.5px border `--color-error`; red micro-text appears below field with warning icon.
  * *Disabled:* Background `--color-bg-muted`; text opacity 0.5; cursor `not-allowed`.

---

### 5.3 Filter Chips & Category Navigation Pills

* **Taxonomy & Ergonomics:**
  * *Category Pills:* Horizontally scrollable bar below header; rounded pill (`radius-full`); icon + label format.
  * *Filter Chips:* Compact chips (`radius-sm`, 8px); height 32px; used for quick constraints (`This Weekend`, `Under ₹500`).
* **State Behavior:**
  * *Unselected:* White/surface background; 1px subtle border; text `--color-text-secondary`.
  * *Selected:* Background `--color-primary-subtle`; border 1.5px solid `--color-primary`; text `--color-primary`; checkmark icon prefix (`✓`).
  * *Removable Selected:* Contains trailing `✕` icon; tapping dismisses the filter facet instantly.
  * *Disabled:* Opacity 0.4; pointer-events none (e.g. when category has 0 matching events).

---

### 5.4 Event Cards

The card system adapts to user browsing contexts while maintaining consistent visual balance:

```
┌────────────────────────────────────────────────────────┐
│  STANDARD VERTICAL POSTER CARD (2:3 Aspect Ratio)      │
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │ 🖼️ [2:3 POSTER ARTWORK]                           │  │
│  │                                                  │  │
│  │  [ CATEGORY CHIP ]              [ ♡ Bookmark ]   │  │
│  │  [ ⚡ URGENCY BADGE ]                            │  │
│  └──────────────────────────────────────────────────┘  │
│  The Great Chennai Music Fest 2026                     │
│  📅 Sat, 24 Oct • 7:30 PM • YMCA Grounds, Nandanam     │
│  ────────────────────────────────────────────────────  │
│  ₹999 (All-in)                              [ Book ➔ ] │
└────────────────────────────────────────────────────────┘
```

* **Card Variants:**
  1. **Standard 2:3 Vertical Card:** Used in feed grids. Maximizes artwork impact; corner-anchored category tag and heart save button.
  2. **Horizontal List Card:** Used in search results and category exploration. Image thumbnail (80x80px) on left, metadata in center, price and action on right.
  3. **Curated Hero Spotlight Card:** Full-width 16:9 banner container with gradient scrim (`linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.85) 100%)`) ensuring text legibility over diverse photos.
  4. **Mini Embedded Card:** Used in the AI Concierge chat drawer. Compact 64px height with direct "View" button.

---

### 5.5 Price Displays & Radical Transparency Math

* **Card Price Display:**
  * Main Figure: `₹499` (Bold 16px, `--color-text-primary`).
  * Transparency Label: `"All-in"` (SemiBold 11px, `--color-text-secondary`, enclosed in subtle pill).
  * If Strikethrough Discount: `₹599` crossed out in muted gray, followed by `₹499`.
* **Summary Itemized Math Card:**
  * Clean two-column table format with hairline dividers.
  * Base Ticket Price, Platform Convenience Fee, Promo Discount (in `--color-success`), and 18% GST itemized transparently.
  * Explicit Trust Seal: *"🛡️ Zero hidden charges. Guaranteed final payable price."*

---

### 5.6 Bottom Navigation Bar (4-Pillar Anchor)

* **Dimensions:** Height 64px; fixed bottom position; background surface with `backdrop-filter: blur(20px)`; border-top 1px solid `--color-border-subtle`.
* **Items (4 Thumb Zones):**
  1. `Explore` (Home icon)
  2. `Browse` (Search/Compass icon)
  3. `Saved` (Heart icon with dynamic badge pill)
  4. `Tickets` (Ticket pass icon with active booking dot)
* **States:**
  * Active item: Colored `--color-primary`; weight 700; top accent pill indicator (3px height).
  * Inactive item: Colored `--color-text-muted`; weight 500.

---

### 5.7 Modal Bottom Sheets & Drawers

* **Ergonomics:** Slides up from bottom with spring animation (`transform 250ms cubic-bezier(0.16, 1, 0.3, 1)`).
* **Components:**
  * Drag Handle / Grabber: 36px wide, 4px high, rounded pill, centered 8px from top.
  * Header: Title (Headline 3, 16px bold) + Close circular button `✕` (32x32px).
  * Content Canvas: Scrollable with smooth momentum scrolling.
  * Sticky Footer: Pinned bottom bar housing primary actions so CTAs never scroll out of view.

---

## 6. Image Aspect Ratios & Cropping Guidelines

To prevent awkward stretching, blurred distortion, or obscured text on artist posters, strict aspect ratios are enforced:

```
┌────────────────────────────────────────────────────────────────────────┐
│                       IMAGE CROPPING DIRECTIVES                        │
├─────────────────┬──────────────┬──────────────┬────────────────────────┤
│ Placement       │ Aspect Ratio │ Min Res (px) │ Crop Anchor & Rule     │
├─────────────────┼──────────────┼──────────────┼────────────────────────┤
│ Discovery Cards │ 2:3 Vertical │ 600 x 900    │ Center-top (protects   │
│                 │              │              │ artist facial framing) │
├─────────────────┼──────────────┼──────────────┼────────────────────────┤
│ Hero Spotlight  │ 16:9 Banner  │ 1200 x 675   │ Center-middle with     │
│                 │              │              │ bottom dark gradient   │
├─────────────────┼──────────────┼──────────────┼────────────────────────┤
│ Workshops/Craft │ 4:3 Studio   │ 800 x 600    │ Center (shows hands &  │
│                 │              │              │ workspace materials)   │
├─────────────────┼──────────────┼──────────────┼────────────────────────┤
│ Artist Avatars  │ 1:1 Circle   │ 160 x 160    │ Center circular crop   │
├─────────────────┼──────────────┼──────────────┼────────────────────────┤
│ Event Detail Top│ 2:1 Cover    │ 1200 x 600   │ Horizon alignment      │
└─────────────────┴──────────────┴──────────────┴────────────────────────┘
```

---

## 7. Accessibility Architecture (WCAG 2.1 AA / AAA)

1. **Color Independence:** Color is never used as the single identifier for critical information.
   * Urgency is indicated by an explicit text tag (`⚡ Filling Fast`) plus color.
   * Success is accompanied by a checkmark symbol (`✓ Confirmed`) plus green.
   * Errors display an exclamation icon (`⚠️`), clear descriptive text, and actionable recovery buttons.
2. **Contrast Guarantees:**
   * All primary body text achieves $\ge 7:1$ contrast against light canvas and $> 12:1$ against dark canvas.
   * Secondary metadata achieves $\ge 4.6:1$ contrast.
3. **Touch Targets (Fitts's Law):**
   * Absolute minimum clickable area for any button, chip, icon trigger, or stepper is $44\times44\text{pt}$ ($48\times48\text{dp}$). Smaller visual elements use extended transparent padding (`::after` hit-slop expansion).
4. **Focus Rings (Keyboard & Switch Access):**
   * Interactive elements receive a high-visibility 2px focus ring: `outline: 2px solid var(--color-primary); outline-offset: 2px;`.

---

## 8. Figma Architecture & Component Library Tokens

For designers reproducing or importing these foundations into Figma:

* **Color Variables:**
  * `Color/Brand/Primary` (`#5833EA`)
  * `Color/Brand/Secondary` (`#FF5C38`)
  * `Color/Surface/Canvas` (`Light: #F8F9FC`, `Dark: #0B0F19`)
  * `Color/Surface/Card` (`Light: #FFFFFF`, `Dark: #131B2E`)
* **Component Sets & Variants:**
  * `Button`: Properties: `Variant` (Primary, Secondary, Ghost), `Size` (Small 36px, Default 44px, Large 48px), `State` (Default, Hover, Pressed, Loading, Disabled), `Icon` (None, Leading, Trailing).
  * `Chip`: Properties: `Type` (Category, Filter), `State` (Unselected, Selected, Disabled), `Removable` (True, False).
  * `EventCard`: Properties: `Format` (Vertical 2:3, Horizontal List, Hero Banner), `Saved` (True, False), `Badge` (None, Filling Fast, Curated, Sold Out).
* **Auto Layout Conventions:**
  * All containers utilize explicit Auto Layout with Hug or Fill constraints.
  * Zero absolute positioning for content elements (reserved only for floating bookmark hearts and badges).
  * Gaps strictly map to spatial tokens (`4px`, `8px`, `12px`, `16px`).

---

## 9. Living Interactive Component Showcase

To inspect, test, and interact with the complete Aura design system live in a web browser:
* Open [design-system.html](file:///e:/Github/Deepti%20PT1%20Project/design-system.html)
* Component CSS tokens: [design-system.css](file:///e:/Github/Deepti%20PT1%20Project/design-system.css)
