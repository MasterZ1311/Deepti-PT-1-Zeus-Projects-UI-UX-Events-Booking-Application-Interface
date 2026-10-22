# 🎟️ Aura — Multi-Category Event Discovery & Booking UI/UX Platform

[![UI/UX Study](https://img.shields.io/badge/Project-PT1%20UI%2FUX%20Study-6366F1?style=flat-square)](https://github.com/MasterZ1311/Deepti-PT-1-Zeus-Projects-UI-UX-Events-Booking-Application-Interface)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA%20Compliant-10B981?style=flat-square)](./USABILITY_AND_ACCESSIBILITY_AUDIT.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=flat-square)](./LICENSE)
[![Vanilla Web Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Modern%20JS-3B82F6?style=flat-square)](./app.html)

> **Aura** is a next-generation consumer event discovery and ticket booking mobile web application designed to eliminate ticket-purchasing fatigue. It unifies the transaction velocity of **District**, the multi-dimensional filtering depth of **BookMyShow**, and the curated editorial storytelling of **Fever** into a single cohesive experience.

---

## 🎓 Academic Project Profile

- **Student Researcher & Designer:** Deepti Baskar
- **Register Number:** 44110145
- **Course & Batch:** Professional Training I (PT1) — UI/UX Design Study (2026)
- **Institution:** Sathyabama Institute of Science and Technology, Chennai
- **Department:** Department of Computer Science and Engineering
- **Faculty Mentor / Supervisor:** Dr. Leena Sivaguru

---

## 📖 Master Reading & Viva Defense Manual (Read Before Explaining!)

> **⭐ Crucial Academic Guide:** Before explaining, presenting, or defending this project to evaluators, mentors, or review panels, read the definitive master accountability manual:  
> 👉 [**`docs/READ_BEFORE_EXPLAINING_ACCOUNTABILITY_MANUAL.md`**](./docs/READ_BEFORE_EXPLAINING_ACCOUNTABILITY_MANUAL.md)  
> 
> **What this manual guarantees:**
> - **60-Second Elevator Pitch:** How to summarize the project and problem in 1 minute.
> - **Complete Repository Inventory:** Detailed breakdown of every single file, line count, and purpose.
> - **Technical Architecture:** Pure vanilla web engineering, reactive state machine, and hardware frame simulation.
> - **Screen-by-Screen UX Rationale:** Why each of the 8 high-fidelity and 11 wireframe screens was designed this way.
> - **15 Anticipated Viva Q&A:** Word-for-word high-scoring answers to tough examiner questions.
> - **3-Minute Live Demonstration Script:** The exact 3 golden screens to demonstrate live.
> 
> Explore the complete documentation hub in the [**`docs/`**](./docs/README.md) directory.

---

## 🌟 Core UX Innovations & Design Pillars

1. **Upfront All-In Price Transparency:**
   Event cards display `₹XXX (All-in)` from the very first discovery feed. Eliminates deceptive base-price anchoring and surprise checkout price jumps.
2. **Transparent Fee Itemization:**
   Checkout reviews explicitly split: `Base Ticket Price` + `Platform Convenience Fee` - `Promo Discount` + `18% GST` = `Total Payable Amount`.
3. **10-Minute Cart Hold Reservation Timer:**
   A visual SVG countdown ring locks tickets for 600 seconds, reducing anxiety while completing guest checkout.
4. **Resilient Simulated Error Recovery:**
   Dedicated testing toggle on checkout to simulate payment gateway/network failures. Users can seamlessly retry UPI, switch to card, or adjust their cart without losing selections.
5. **Dynamic Digital Boarding Pass:**
   Generates a high-contrast ticket (`#AUR-8942-CHN`) featuring venue wayfinding shortcuts, simulated QR code, and "Add to Calendar" / "Add to Apple/Google Wallet" actions.
6. **Ambient AI Concierge ("Aura AI"):**
   Non-modal floating companion providing intelligent natural-language recommendations (e.g. *"Show comedy shows under ₹1000 in Chennai this Saturday"*).

---

## 📱 Interactive Prototypes

All interactive prototypes are built using modern vanilla HTML5, CSS3, and JavaScript — zero build tools or complex dependencies required!

| Prototype | Entry Point | Description |
| :--- | :--- | :--- |
| **High-Fidelity Application** | [`app.html`](./app.html) | Complete interactive mobile web app with smartphone frame, Dynamic Island, City Switcher, Live Search, Seat & Tier Pickers, Checkout, QR Ticket, and Aura AI Assistant. |
| **Design System Showcase** | [`design-system.html`](./design-system.html) | Interactive visual token gallery displaying the 8pt grid, color palette, typography scale, 7 component states, and accessibility contrast ratios. |
| **Low-Fidelity Wireframes** | [`index.html`](./index.html) | Interactive 11-screen structural blueprint and grayscale UX wireframe prototype. |

---

## 📚 Complete Documentation & Phase Deliverables

Each development phase is documented in comprehensive, academic-grade specification files:

1. [**Phase 1: Research & UX Specification**](./RESEARCH_AND_UX_SPECIFICATION.md)
   - Competitor benchmarking matrix (District vs. BookMyShow vs. Fever vs. Aura)
   - 5 Foundational UX Principles
   - MoSCoW Feature Matrix (Must / Should / Could / Won't Have)
2. [**Phase 2: Information Architecture & User Journeys**](./INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md)
   - Evidence-based personas: Aravind Swaminathan (27, Fintech Analyst) & Pooja Raghavan (21, Design Undergrad)
   - Jobs-to-be-Done (JTBD) core statements
   - 4-Pillar Mobile Navigation Architecture
   - Comprehensive User Flows A through G
3. [**Phase 3: Low-Fidelity Wireframes Specification**](./LOW_FIDELITY_WIREFRAMES_SPECIFICATION.md)
   - Detailed component breakdown for all 11 core screens
   - Edge case wireframes: Empty search, Sold-out state, Loading skeleton, and Payment failure
4. [**Phase 4: Visual Design System Specification**](./DESIGN_SYSTEM_SPECIFICATION.md)
   - Curated HSL color palette (Aura Indigo `#6366F1`, Electric Cyan `#06B6D4`, Slate Dark Surfaces)
   - Typography scale based on `Outfit` & `Inter`
   - 7-State Component Matrix (Default, Hover, Focus-Visible, Active, Disabled, Loading, Error)
   - WCAG 2.1 AA Contrast Ratios (Minimum 5.7:1 for subtle text, 12.8:1 for body)
5. [**Phase 5: High-Fidelity UI Specification**](./HIGH_FIDELITY_UI_SPECIFICATION.md)
   - Full specification of 8 core high-fidelity mobile screens
   - Real-world Indian pricing structure (INR `₹`) across Music, Comedy, Theatre, Workshops, and Tech
6. [**Phase 6: Interactive Prototype Specification**](./INTERACTIVE_PROTOTYPE_SPECIFICATION.md)
   - Reactive state machine architecture
   - Evaluator toolbar with device shell selector (iPhone 16 Pro, Pixel 9 Pro, Viewport Only)
   - Event bus and modal/drawer layer mechanics
7. [**Phase 7: Usability & Accessibility Audit**](./USABILITY_AND_ACCESSIBILITY_AUDIT.md)
   - 5 Core User Task evaluations
   - Heuristic evaluation & accessibility remediations (44×44px touch targets, `:focus-visible` focus rings, ARIA live announcements)
   - 5-Participant test protocol and benchmark metrics
8. [**Phase 8: Final Design Handoff & Oral Defense Outline**](./FINAL_DESIGN_HANDOFF_AND_ACADEMIC_PRESENTATION.md)
   - Objectives traceability matrix
   - 10-Slide academic defense slide deck guide
   - Live demo script for 3 key demonstration screens

---

## 🚀 Running the Prototype Locally

You can run the application directly in any modern web browser or start a lightweight local web server:

### Option 1: VS Code Live Server
1. Open the project folder in VS Code / Antigravity IDE.
2. Right-click on `app.html` and click **"Open with Live Server"**.

### Option 2: Python HTTP Server
```bash
# Clone the repository
git clone https://github.com/MasterZ1311/Deepti-PT-1-Zeus-Projects-UI-UX-Events-Booking-Application-Interface.git
cd Deepti-PT-1-Zeus-Projects-UI-UX-Events-Booking-Application-Interface

# Start local server
python -m http.server 5173

# Open in your browser:
# http://localhost:5173/app.html
```

---

## 📂 Repository File Structure

```
├── docs/                                               # 📁 Comprehensive Documentation Hub
│   ├── README.md                                       # Documentation directory index
│   └── READ_BEFORE_EXPLAINING_ACCOUNTABILITY_MANUAL.md # ⭐ Master Viva & Accountability Guide
│
├── RESEARCH_AND_UX_SPECIFICATION.md                    # Milestone 1: Competitor analysis & UX principles
├── INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md       # Milestone 2: Personas, JTBD & Flows A-G
├── LOW_FIDELITY_WIREFRAMES_SPECIFICATION.md            # Milestone 3: 11 Screen blueprints & states
├── DESIGN_SYSTEM_SPECIFICATION.md                      # Milestone 4: Aura design tokens & states
├── HIGH_FIDELITY_UI_SPECIFICATION.md                   # Milestone 5: High-fidelity screen designs
├── INTERACTIVE_PROTOTYPE_SPECIFICATION.md              # Milestone 6: State machine & interactions
├── USABILITY_AND_ACCESSIBILITY_AUDIT.md                # Milestone 7: WCAG 2.1 audit & test plan
├── FINAL_DESIGN_HANDOFF_AND_ACADEMIC_PRESENTATION.md   # Milestone 8: Objectives audit & 10-slide defense
│
├── app.html                                            # High-Fidelity interactive application
├── app.css                                             # High-Fidelity styling & animations
├── app.js                                              # High-Fidelity reactive logic & state machine
│
├── design-system.html                                  # Design System token showcase
├── design-system.css                                   # Design System presentation styles
│
├── index.html                                          # Low-Fidelity interactive wireframe prototype
├── wireframes.css                                      # Grayscale wireframe styles
├── wireframes.js                                       # Wireframe prototype interaction logic
│
└── PT1 Literature Review 0 - UIUX (Deepti Baskar)_20260916_001045_0000.pdf # Literature review artifact
```

---

## ⚖️ Technical Scope & Ethical Disclaimer

- **Design Simulation:** Payment processing, SMS OTP delivery, and seat locking are client-side simulated flows designed to demonstrate interaction design, state transitions, and error recovery without incurring real financial transactions or requiring backend telecom gateways.
- **Academic Integrity:** All research benchmarks and audit findings reflect honest UX evaluations; usability testing frameworks are provided as un-fabricated testing protocols for empirical laboratory execution.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — see the LICENSE file for details.
