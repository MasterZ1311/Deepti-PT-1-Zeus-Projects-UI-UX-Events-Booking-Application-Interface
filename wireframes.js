/* ==========================================================================
   LOW-FIDELITY WIREFRAME PROTOTYPE STATE MACHINE
   Multi-Category Event Discovery & Booking Platform (Deepti PT1 Project)
   ========================================================================== */

(function () {
  'use strict';

  // Mock Event Database (Multi-Category Chennai Leisure)
  const EVENTS_DATA = [
    {
      id: 'evt-01',
      title: 'Chennai Laugh Riot ft. Local All-Stars',
      category: 'Comedy',
      subCategory: 'Stand-up',
      date: 'Sat, 24 Oct',
      time: '7:30 PM',
      duration: '90 mins',
      venue: 'Medai - The Stage, Alwarpet',
      distance: '2.4 km away',
      price: 499,
      basePrice: 420,
      fee: 65,
      tax: 14,
      rating: 4.8,
      reviewsCount: 142,
      badge: 'Filling Fast',
      amenities: ['18+ Only', 'Club Seating', 'AC Venue', 'Valet Parking'],
      description: 'An evening of unfiltered humor exploring Chennai life, corporate struggles, and local transit. Featuring 4 of the city’s top comedic voices.',
      instructor: 'Karthik Kumar & Friends',
      slots: [
        { time: '5:00 PM - 6:30 PM', status: 'available', label: 'Evening' },
        { time: '7:30 PM - 9:00 PM', status: 'fast', label: '⚡ 4 seats left' },
        { time: '9:30 PM - 11:00 PM', status: 'soldout', label: '✕ Sold Out' }
      ],
      tiers: [
        { id: 'standard', name: 'Silver Pass (General Admission)', price: 499, desc: 'Unreserved club seating + 1 soft beverage' },
        { id: 'vip', name: 'Gold Front Row + Meet & Greet', price: 799, desc: 'Reserved front 2 rows + signed poster' }
      ]
    },
    {
      id: 'evt-02',
      title: 'Beginner Wheel Pottery Masterclass',
      category: 'Workshops',
      subCategory: 'Crafts',
      date: 'Sat, 24 Oct',
      time: '10:00 AM',
      duration: '2.5 hrs',
      venue: 'Artisan Studio, Mylapore',
      distance: '3.1 km away',
      price: 850,
      basePrice: 750,
      fee: 80,
      tax: 20,
      rating: 4.9,
      reviewsCount: 86,
      badge: 'Curated',
      amenities: ['All Clay Provided', 'Take Home 2 Pots', 'AC Studio', 'Coffee Included'],
      description: 'Hands-on tactile workshop learning clay centering, cylinder pulling, and trimming on an electric potter wheel with master ceramists.',
      instructor: 'Priya Raman (Ceramic Artist)',
      slots: [
        { time: '10:00 AM - 12:30 PM', status: 'available', label: 'Morning Slot' },
        { time: '03:00 PM - 05:30 PM', status: 'soldout', label: '✕ Sold Out' },
        { time: '06:00 PM - 08:30 PM', status: 'fast', label: '⚡ 2 wheels left' }
      ],
      tiers: [
        { id: 'standard', name: 'Standard Participant Pass', price: 850, desc: '1 Wheel station + Clay kit + 2 fired pots' },
        { id: 'vip', name: 'Masterclass VIP (Coaching + Glaze)', price: 1250, desc: '1-on-1 coaching + premium color glaze + filter coffee' }
      ]
    },
    {
      id: 'evt-03',
      title: 'Kizhakku Live Acoustic Sundowner',
      category: 'Music',
      subCategory: 'Indie Concert',
      date: 'Sun, 25 Oct',
      time: '6:00 PM',
      duration: '2 hrs',
      venue: 'The Bay Amphitheatre, Besant Nagar',
      distance: '5.8 km away',
      price: 350,
      basePrice: 300,
      fee: 42,
      tax: 8,
      rating: 4.7,
      reviewsCount: 210,
      badge: 'Popular',
      amenities: ['Open Air', 'Food Stalls', 'Sunset View', 'All Ages'],
      description: 'A breezy seaside acoustic gathering playing original Tamil indie compositions, indie folk anthems, and soothing acoustic covers.',
      instructor: 'Kizhakku Band Collective',
      slots: [
        { time: '6:00 PM - 8:00 PM', status: 'available', label: 'Sundowner' }
      ],
      tiers: [
        { id: 'standard', name: 'General Lawn Pass', price: 350, desc: 'Lawn seating (bring your mat)' },
        { id: 'vip', name: 'Front Deck Seating', price: 600, desc: 'Chairs provided with stage view' }
      ]
    },
    {
      id: 'evt-04',
      title: 'Chennai Super League: Screening & Fan Meet',
      category: 'Sports',
      subCategory: 'Live Match',
      date: 'Sun, 25 Oct',
      time: '7:00 PM',
      duration: '3 hrs',
      venue: 'Score Sports Lounge, Nungambakkam',
      distance: '4.2 km away',
      price: 299,
      basePrice: 250,
      fee: 40,
      tax: 9,
      rating: 4.6,
      reviewsCount: 78,
      badge: 'Fast Filling',
      amenities: ['Giant 4K Projector', 'Stadium Audio', '₹150 F&B Coupon'],
      description: 'Watch the high-stakes derby clash on a giant 150-inch 4K screen with immersive stadium surround audio and die-hard football supporters.',
      instructor: 'Official Fan Club Host',
      slots: [
        { time: '7:00 PM - 10:00 PM', status: 'available', label: 'Match Time' }
      ],
      tiers: [
        { id: 'standard', name: 'Fan Zone Entry', price: 299, desc: 'Entry + ₹150 redeemable on snacks/beverages' }
      ]
    },
    {
      id: 'evt-05',
      title: 'Indie Short Film Showcase & Director Q&A',
      category: 'Movies',
      subCategory: 'Film Festival',
      date: 'Fri, 23 Oct',
      time: '6:30 PM',
      duration: '2.5 hrs',
      venue: 'Alliance Française, Nungambakkam',
      distance: '3.9 km away',
      price: 250,
      basePrice: 220,
      fee: 25,
      tax: 5,
      rating: 4.8,
      reviewsCount: 54,
      badge: 'Limited Seats',
      amenities: ['AC Cinema Hall', 'Q&A Discussion', 'Festival Booklet'],
      description: 'Curated screening of 5 award-winning South Indian regional independent short films followed by an interactive fireside chat with directors.',
      instructor: 'Film Critics Circle',
      slots: [
        { time: '6:30 PM - 9:00 PM', status: 'available', label: 'Screening' }
      ],
      tiers: [
        { id: 'standard', name: 'Cinema Pass', price: 250, desc: 'Auditorium seat + event program guide' }
      ]
    }
  ];

  // Prototype Global State
  const state = {
    currentScreen: 'screen-1',
    activeTab: 'explore',
    activeCategory: 'All',
    selectedQuickFilter: null,
    searchQuery: '',
    savedEventIds: new Set(['evt-01', 'evt-02']),
    selectedEvent: EVENTS_DATA[1], // Default to Pottery Masterclass for deep flows
    selectedDate: 'Sat, 24 Oct',
    selectedSlotIndex: 0,
    ticketCounts: { standard: 2, vip: 0 },
    selectedSeatZone: 'Row B (Gold Zone)',
    promoApplied: true,
    promoCode: 'WELCOME100',
    promoDiscount: 100,
    holdSecondsRemaining: 599,
    holdTimerInterval: null,
    currentEdgeState: '11a',
    aiDrawerOpen: false
  };

  // UX Notes Dictionary for Evaluators
  const UX_NOTES = {
    'screen-1': {
      title: 'SCR-WF-01: Home & Discovery Feed',
      summary: 'Mobile-first omni-discovery engine combining curated hero showcase with frictionless multi-category horizontal pills.',
      heuristics: [
        'Hick’s Law: Category pills let users jump straight to their intent without visual paralysis.',
        'Radical Transparency: Every card explicitly states "All-in" starting price to establish trust.',
        'Fitts’s Law: 4-pillar persistent bottom navigation within natural one-handed thumb zone.'
      ]
    },
    'screen-2': {
      title: 'SCR-WF-02: Category Exploration (Comedy Focus)',
      summary: 'Deep-dive into a single vertical (e.g. Comedy) showing sub-genre tags (Headliners vs Open Mics) and genre-critical venue tags.',
      heuristics: [
        'Progressive Disclosure: Surfacing age limit (18+), seating style (Club vs Auditorium), and language upfront.',
        'Contextual Wayfinding: Instant sort by soonest date or budget presets.'
      ]
    },
    'screen-3': {
      title: 'SCR-WF-03: Search Results & Faceted Filters',
      summary: 'Instant omni-search with real-time match count and a multi-parameter bottom filter sheet.',
      heuristics: [
        'Dynamic Feedback: Filter CTA displays live match count ("Show 4 Events") before applying.',
        'Zero Reload: Instant feed update without full-page refreshes.'
      ]
    },
    'screen-4': {
      title: 'SCR-WF-04: Event Detail Page',
      summary: 'Rich experiential evaluation screen with logistics metric grid, instructor bios, amenity badges, and interactive map preview.',
      heuristics: [
        'Above-the-Fold Clarity: 4-box key metric grid (Date, Duration, Area, Size).',
        'Sticky Action Bar: Uninterrupted access to "Select Tickets" with guaranteed price label.'
      ]
    },
    'screen-5': {
      title: 'SCR-WF-05: Date, Slot & Tier Selection Sheet',
      summary: 'Single unified bottom sheet consolidating session date, time slot, tier perks, and stepper quantities.',
      heuristics: [
        'Cognitive Flow: Prevents multi-screen wizard fatigue by keeping time and tier selection on one scrollable canvas.',
        'Live Subtotal: Recalculates total price dynamically as steppers increment.'
      ]
    },
    'screen-6': {
      title: 'SCR-WF-06: Booking Summary & Fee Transparency',
      summary: 'Zero surprise checkout view with itemized base price, platform fee, GST, and promo code breakdown.',
      heuristics: [
        'Loss Aversion Mitigation: 10-minute hold timer guarantees tickets will not vanish mid-booking.',
        'Guest Checkout: Zero forced OTP or login barriers; only name & email needed for ticket delivery.'
      ]
    },
    'screen-7': {
      title: 'SCR-WF-07: Simulated Checkout & Processing',
      summary: 'Ultra-lean 1-tap simulated checkout showcasing mock UPI, Apple Pay, and Card triggers with smooth processing transition.',
      heuristics: [
        'Constraint Compliance: Pure simulation without real backend gateways or SMS dependencies.',
        'Clear System Status: 800ms loading overlay gives realistic feedback.'
      ]
    },
    'screen-8': {
      title: 'SCR-WF-08: Digital Ticket Pass (Boarding Pass)',
      summary: 'Post-booking digital pass with dynamic animated QR code, booking ID, and 1-tap wallet/calendar sync.',
      heuristics: [
        'Offline Reassurance: Clear status badge ("Confirmed & Cached Offline") for poor cell signal at venues.',
        'Utility Density: 1-tap triggers for Directions, Calendar (.ics), and PDF Pass.'
      ]
    },
    'screen-9': {
      title: 'SCR-WF-09: Saved Events & Booking History',
      summary: 'Dual-segment view managing bookmarked shortlists with "Quick Book" bypasses and historical ticket records.',
      heuristics: [
        'Velocity Bypass: Shortlist cards feature direct "Quick Book" button to skip detail reading.',
        'Scarcity Reassurance: Shows remaining seats on saved cards.'
      ]
    },
    'screen-10': {
      title: 'SCR-WF-10: Profile & Preferences',
      summary: 'Account preference center managing primary city, favorite categories, notification channels, and high-contrast wireframe theme.',
      heuristics: [
        'User Control & Freedom: Easily change city, clear local storage demo data, or toggle alert channels.'
      ]
    },
    'screen-11': {
      title: 'SCR-WF-11: Essential Edge States & Error Recovery',
      summary: 'Dedicated state machine testing empty search results, sold-out waitlists, loading skeletons, and failed payment recovery.',
      heuristics: [
        'Graceful Error Recovery: Informative error messages paired with actionable recovery buttons.'
      ]
    }
  };

  // Helper Functions
  function $(id) {
    return document.getElementById(id);
  }

  function formatCurrency(num) {
    return '₹' + num.toLocaleString('en-IN');
  }

  // State Switcher: Screen Navigation
  function navigateTo(screenId) {
    state.currentScreen = screenId;

    // Update screen switcher buttons in toolbar
    document.querySelectorAll('.screen-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.screen === screenId);
    });

    // Update bottom navigation active states if applicable
    updateBottomNav();

    // Render screen content
    renderActiveScreen();

    // Update UX Notes Panel
    updateUxNotes();

    // Scroll phone viewport to top
    const viewport = $('screen-viewport');
    if (viewport) viewport.scrollTop = 0;
  }

  function updateBottomNav() {
    const bottomNav = $('bottom-nav-bar');
    if (!bottomNav) return;

    // Hide bottom nav on detail, ticket selector, checkout, and pass screens if desired, or keep sticky
    const hideOnScreens = ['screen-4', 'screen-5', 'screen-6', 'screen-7', 'screen-8'];
    if (hideOnScreens.includes(state.currentScreen)) {
      bottomNav.style.display = 'none';
    } else {
      bottomNav.style.display = 'flex';
    }

    document.querySelectorAll('.nav-item').forEach(item => {
      const tab = item.dataset.tab;
      const isMatch = (tab === 'explore' && state.currentScreen === 'screen-1') ||
                      (tab === 'browse' && (state.currentScreen === 'screen-2' || state.currentScreen === 'screen-3')) ||
                      (tab === 'saved' && state.currentScreen === 'screen-9') ||
                      (tab === 'tickets' && state.currentScreen === 'screen-8');
      item.classList.toggle('active', isMatch);
    });

    // Update saved badge count
    const badge = $('saved-nav-badge');
    if (badge) {
      badge.textContent = state.savedEventIds.size;
      badge.style.display = state.savedEventIds.size > 0 ? 'inline-block' : 'none';
    }
  }

  function updateUxNotes() {
    const note = UX_NOTES[state.currentScreen] || UX_NOTES['screen-1'];
    $('ux-note-title').textContent = note.title;
    $('ux-note-summary').textContent = note.summary;
    
    const list = $('ux-note-heuristics');
    list.innerHTML = '';
    note.heuristics.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      list.appendChild(li);
    });
  }

  // Hold Timer Management
  function startHoldTimer() {
    if (state.holdTimerInterval) clearInterval(state.holdTimerInterval);
    state.holdSecondsRemaining = 599; // 9:59 mins
    state.holdTimerInterval = setInterval(() => {
      state.holdSecondsRemaining--;
      if (state.holdSecondsRemaining <= 0) {
        clearInterval(state.holdTimerInterval);
        state.holdSecondsRemaining = 0;
      }
      const el = $('hold-countdown-timer');
      if (el) {
        const m = Math.floor(state.holdSecondsRemaining / 60);
        const s = state.holdSecondsRemaining % 60;
        el.textContent = `⏳ Tickets held for ${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} mins`;
      }
    }, 1000);
  }

  // RENDER DISCOVERY HOME (SCR-WF-01)
  function renderScreen1() {
    const filteredEvents = EVENTS_DATA.filter(evt => {
      if (state.activeCategory !== 'All' && evt.category !== state.activeCategory) return false;
      return true;
    });

    return `
      <!-- Top Wire Header -->
      <div class="wire-header">
        <div class="location-pill" onclick="alert('City Selector Sheet: Currently in Chennai. You can switch to Bengaluru or Hyderabad.')">
          <span>📍 Chennai ▾</span>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <div class="ai-concierge-pill" onclick="window.wireframeApp.toggleAiDrawer()">
            <span>✨ Ask AI</span>
          </div>
        </div>
      </div>

      <!-- Search Input -->
      <div class="search-container">
        <div class="search-input-box" onclick="window.wireframeApp.navigateTo('screen-3')">
          <span>🔍</span>
          <input type="text" placeholder="Search events, comedy, music, workshops..." readonly>
        </div>
      </div>

      <!-- Category Pills -->
      <div class="category-pill-bar">
        ${['All', 'Comedy', 'Workshops', 'Music', 'Sports', 'Movies'].map(cat => `
          <button class="category-pill ${state.activeCategory === cat ? 'active' : ''}" onclick="window.wireframeApp.setCategory('${cat}')">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Quick Filter Chips -->
      <div class="quick-chips-row">
        <span class="quick-chip ${state.selectedQuickFilter === 'today' ? 'active' : ''}" onclick="window.wireframeApp.toggleQuickFilter('today')">⚡ Today</span>
        <span class="quick-chip ${state.selectedQuickFilter === 'tomorrow' ? 'active' : ''}" onclick="window.wireframeApp.toggleQuickFilter('tomorrow')">📅 Tomorrow</span>
        <span class="quick-chip ${state.selectedQuickFilter === 'weekend' ? 'active' : ''}" onclick="window.wireframeApp.toggleQuickFilter('weekend')">🎉 This Weekend</span>
        <span class="quick-chip ${state.selectedQuickFilter === 'cheap' ? 'active' : ''}" onclick="window.wireframeApp.toggleQuickFilter('cheap')">🏷️ Under ₹500</span>
      </div>

      <!-- Hero Carousel Feature -->
      <div class="hero-box" onclick="window.wireframeApp.openEventDetail('evt-02')">
        <div class="hero-image-placeholder">
          <span>[ 16:9 Curated Cover: Pottery Masterclass ]</span>
        </div>
        <div class="hero-content">
          <div class="badge-row">
            <span class="wire-badge dark">Curated</span>
            <span class="wire-badge">Limited 10 Seats</span>
          </div>
          <div class="hero-title">Beginner Wheel Pottery Masterclass</div>
          <div class="hero-meta">📅 Sat, 24 Oct • 10:00 AM • Artisan Studio, Mylapore</div>
          <div class="hero-action-row">
            <div>
              <span class="price-text">₹850</span>
              <span class="price-sub">Taxes & fees included</span>
            </div>
            <button class="wire-btn" style="padding:6px 12px; font-size:12px;">Book Tickets ➔</button>
          </div>
        </div>
      </div>

      <!-- Event Feed Grid -->
      <div class="feed-section">
        <div class="section-header">
          <span class="section-title">Happening in Chennai</span>
          <span class="section-link" onclick="window.wireframeApp.navigateTo('screen-2')">View All ></span>
        </div>

        <div class="event-grid">
          ${filteredEvents.map(evt => `
            <div class="event-card" onclick="window.wireframeApp.openEventDetail('${evt.id}')">
              <div class="card-image-box">
                <span>[ 2:3 ${evt.category} ]</span>
                <button class="card-save-btn ${state.savedEventIds.has(evt.id) ? 'active' : ''}" onclick="event.stopPropagation(); window.wireframeApp.toggleBookmark('${evt.id}')">
                  ${state.savedEventIds.has(evt.id) ? '♥' : '♡'}
                </button>
              </div>
              <div class="card-content">
                <span class="card-category-tag">${evt.category} • ${evt.badge}</span>
                <div class="card-title">${evt.title}</div>
                <div class="card-meta-line">📅 ${evt.date} • ${evt.time}</div>
                <div class="card-meta-line">📍 ${evt.venue.split(',')[0]}</div>
                <div class="card-price-row">
                  <div>
                    <span class="price-text">${formatCurrency(evt.price)}</span>
                    <span class="price-sub">All-in price</span>
                  </div>
                  <span style="font-size:11px; font-weight:700;">➔</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // RENDER CATEGORY EXPLORATION (SCR-WF-02)
  function renderScreen2() {
    const comedyEvents = EVENTS_DATA.filter(e => e.category === 'Comedy');

    return `
      <div class="wire-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-1')">←</button>
          <span style="font-size:14px; font-weight:700;">Stand-Up Comedy & Gigs</span>
        </div>
        <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-3')">🔍</button>
      </div>

      <div style="padding:12px 16px; background:#FFFFFF; border-bottom:1px solid var(--border-subtle);">
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:8px;">14 Live performances in Chennai this month</p>
        <div style="display:flex; gap:6px; overflow-x:auto;">
          <span class="quick-chip active">All Comedy</span>
          <span class="quick-chip">Headliners</span>
          <span class="quick-chip">Open Mics</span>
          <span class="quick-chip">Tamil Standup</span>
        </div>
      </div>

      <!-- Spotlight Feature Card -->
      <div style="padding:12px 16px;">
        <div class="hero-box" style="margin:0;" onclick="window.wireframeApp.openEventDetail('evt-01')">
          <div class="hero-image-placeholder" style="height:110px;">
            <span>[ Featured Comedy Headliner Banner ]</span>
          </div>
          <div class="hero-content">
            <span class="wire-badge dark">Headliner</span>
            <div class="hero-title" style="margin-top:4px;">Chennai Laugh Riot ft. Local All-Stars</div>
            <div class="hero-meta">Sat, 24 Oct • 7:30 PM • Medai, Alwarpet</div>
            <div class="hero-action-row">
              <span class="price-text">₹499 (All-in)</span>
              <button class="wire-btn" style="padding:6px 12px; font-size:12px;">Quick Book ➔</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Feed List -->
      <div style="padding:0 16px 16px 16px; display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:var(--text-secondary);">
          <span>Sort: <strong>Soonest Date ▾</strong></span>
          <span>Filter: <strong>This Weekend ▾</strong></span>
        </div>

        ${comedyEvents.map(evt => `
          <div class="tier-card" style="display:flex; gap:10px; cursor:pointer;" onclick="window.wireframeApp.openEventDetail('${evt.id}')">
            <div style="width:70px; height:70px; background:var(--bg-subtle); border-radius:var(--radius-sm); display:flex; align-items:center; justify-content:center; font-size:10px; color:var(--text-muted); flex-shrink:0;">
              [ Poster ]
            </div>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700;">${evt.title}</div>
              <div style="font-size:11px; color:var(--text-secondary); margin:2px 0;">📅 ${evt.date} • ${evt.time}</div>
              <div style="font-size:11px; color:var(--text-muted);">📍 ${evt.venue}</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
                <span style="font-size:13px; font-weight:700;">${formatCurrency(evt.price)}</span>
                <span class="wire-badge">18+ • Club Seating</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // RENDER SEARCH & FILTER (SCR-WF-03)
  function renderScreen3() {
    return `
      <div class="wire-header">
        <div style="display:flex; align-items:center; gap:8px; width:100%;">
          <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-1')">←</button>
          <div class="search-input-box" style="flex:1;">
            <span>🔍</span>
            <input type="text" id="active-search-input" value="${state.searchQuery || 'pottery'}" placeholder="Search workshops, comedy, sports...">
            <span style="cursor:pointer;" onclick="window.wireframeApp.clearSearch()">✕</span>
          </div>
        </div>
      </div>

      <div style="padding:10px 16px; background:#FFFFFF; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; gap:6px; align-items:center; overflow-x:auto;">
          <span class="quick-chip active">Weekend ✕</span>
          <span class="quick-chip active">< ₹1000 ✕</span>
          <button class="wire-btn secondary" style="padding:4px 8px; font-size:11px;" onclick="window.wireframeApp.openFilterSheet()">🎛️ Filters (2)</button>
        </div>
      </div>

      <div style="padding:12px 16px;">
        <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-secondary); margin-bottom:12px;">
          <span>Found <strong>4 Experiences in Chennai</strong></span>
          <span>Sort: <strong>Relevance ▾</strong></span>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px;">
          <div class="tier-card" style="cursor:pointer;" onclick="window.wireframeApp.openEventDetail('evt-02')">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="wire-badge dark">Workshop</span>
              <span style="font-size:12px; font-weight:700;">★ 4.9</span>
            </div>
            <div style="font-size:14px; font-weight:700; margin:4px 0;">Beginner Wheel Pottery Masterclass</div>
            <div style="font-size:12px; color:var(--text-secondary);">📅 Sat, 24 Oct • 10:00 AM • Artisan Studio, Mylapore</div>
            <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">⏱️ 2.5 hrs • 🧤 All clay & tools provided</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; border-top:1px dashed var(--border-subtle); padding-top:6px;">
              <div>
                <span class="price-text">₹850</span>
                <span class="price-sub">All-in price</span>
              </div>
              <button class="wire-btn" style="padding:6px 12px; font-size:12px;">Select Tickets ➔</button>
            </div>
          </div>

          <div class="tier-card" style="cursor:pointer;" onclick="window.wireframeApp.openEventDetail('evt-02')">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="wire-badge">Workshop</span>
              <span style="font-size:12px; font-weight:700;">★ 4.8</span>
            </div>
            <div style="font-size:14px; font-weight:700; margin:4px 0;">Terracotta Sculpting & Kiln Glazing</div>
            <div style="font-size:12px; color:var(--text-secondary);">📅 Sun, 25 Oct • 3:30 PM • DakshinaChitra, ECR</div>
            <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">⏱️ 3 hrs • ☕ Complimentary tea & snacks</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; border-top:1px dashed var(--border-subtle); padding-top:6px;">
              <div>
                <span class="price-text">₹950</span>
                <span class="price-sub">All-in price</span>
              </div>
              <button class="wire-btn" style="padding:6px 12px; font-size:12px;">Select Tickets ➔</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // RENDER EVENT DETAIL (SCR-WF-04)
  function renderScreen4() {
    const evt = state.selectedEvent;

    return `
      <div class="detail-view">
        <div class="detail-hero-media">
          <div class="detail-top-nav">
            <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-1')">←</button>
            <div style="display:flex; gap:8px;">
              <button class="circle-nav-btn" onclick="alert('Share link generated: https://district-event.demo/evt-02')">↗</button>
              <button class="circle-nav-btn ${state.savedEventIds.has(evt.id) ? 'active' : ''}" onclick="window.wireframeApp.toggleBookmark('${evt.id}')">
                ${state.savedEventIds.has(evt.id) ? '♥' : '♡'}
              </button>
            </div>
          </div>
          <span>[ 16:9 High Resolution Experience Cover ]</span>
        </div>

        <div class="detail-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span class="wire-badge dark">${evt.category}</span>
            <span style="font-size:12px; font-weight:700;">★ ${evt.rating} (${evt.reviewsCount} reviews)</span>
          </div>

          <h1 style="font-size:18px; font-weight:700; line-height:1.3; margin-bottom:10px;">${evt.title}</h1>

          <!-- 4-Box Key Metrics Grid -->
          <div class="metric-grid-4">
            <div class="metric-box">
              <strong>📅 ${evt.date}</strong>
              <span style="font-size:11px; color:var(--text-secondary);">${evt.time}</span>
            </div>
            <div class="metric-box">
              <strong>⏱️ ${evt.duration}</strong>
              <span style="font-size:11px; color:var(--text-secondary);">English & Tamil</span>
            </div>
            <div class="metric-box">
              <strong>📍 ${evt.venue.split(',')[0]}</strong>
              <span style="font-size:11px; color:var(--text-secondary);">${evt.distance}</span>
            </div>
            <div class="metric-box">
              <strong>👥 Small Group</strong>
              <span style="font-size:11px; color:var(--text-secondary);">Max 10 per slot</span>
            </div>
          </div>

          <div class="wire-divider"></div>

          <div style="font-size:14px; font-weight:700; margin-bottom:6px;">About This Experience</div>
          <p style="font-size:13px; line-height:1.5; color:var(--text-secondary);">${evt.description}</p>

          <div class="wire-divider"></div>

          <div style="font-size:14px; font-weight:700; margin-bottom:6px;">Host & Instructor</div>
          <div style="display:flex; align-items:center; gap:10px; background:var(--bg-muted); padding:10px; border-radius:var(--radius-sm);">
            <div style="width:40px; height:40px; background:var(--border-default); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px;">👤</div>
            <div>
              <div style="font-size:13px; font-weight:700;">${evt.instructor}</div>
              <div style="font-size:11px; color:var(--text-secondary);">12+ Years Experience • National Ceramic Guild</div>
            </div>
          </div>

          <div class="wire-divider"></div>

          <div style="font-size:14px; font-weight:700; margin-bottom:6px;">What is Included</div>
          <ul class="bullet-list">
            ${evt.amenities.map(a => `<li>${a}</li>`).join('')}
            <li>Glaze firing & safe protective packaging for transport</li>
          </ul>

          <div class="wire-divider"></div>

          <div style="font-size:14px; font-weight:700; margin-bottom:6px;">Venue & Logistics</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-bottom:8px;">${evt.venue}</p>
          <div style="width:100%; height:90px; background:var(--bg-muted); border:1px dashed var(--border-default); border-radius:var(--radius-sm); display:flex; align-items:center; justify-content:center; font-size:11px; color:var(--text-muted); cursor:pointer;" onclick="alert('Opens Map Navigation in Google Maps')">
            [ 🗺️ Interactive Map Snippet Preview • Tap to Open Maps ]
          </div>

          <div class="wire-divider"></div>

          <div style="font-size:14px; font-weight:700; margin-bottom:6px;">Cancellation Policy</div>
          <p style="font-size:12px; color:var(--text-secondary);">🛡️ Free cancellation with 100% refund up to 24 hours before the event starts.</p>

          <!-- Clearance for sticky bar -->
          <div style="height:70px;"></div>
        </div>

        <!-- Sticky Bottom Bar -->
        <div class="sticky-action-bar in-phone">
          <div>
            <span class="price-text">From ${formatCurrency(evt.price)}</span>
            <span class="price-sub">Taxes & fees included</span>
          </div>
          <button class="wire-btn" onclick="window.wireframeApp.openTicketSelector()">Select Tickets ➔</button>
        </div>
      </div>
    `;
  }

  // RENDER TICKET TIER & SLOT SELECTOR (SCR-WF-05)
  function renderScreen5() {
    const evt = state.selectedEvent;
    const stdCount = state.ticketCounts.standard;
    const vipCount = state.ticketCounts.vip;
    const totalCount = stdCount + vipCount;
    const totalPrice = (stdCount * evt.tiers[0].price) + (vipCount * (evt.tiers[1] ? evt.tiers[1].price : 0));

    return `
      <div class="wire-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-4')">←</button>
          <span style="font-size:14px; font-weight:700;">Select Session & Tickets</span>
        </div>
      </div>

      <div style="padding:16px;">
        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Step 1: Choose Date</div>
        <div style="display:flex; gap:8px; margin-bottom:16px;">
          <button class="quick-chip active" style="flex:1; padding:8px 0; text-align:center;">Sat, 24 Oct</button>
          <button class="quick-chip" style="flex:1; padding:8px 0; text-align:center;" onclick="alert('Date switched to Sun, 25 Oct')">Sun, 25 Oct</button>
        </div>

        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Step 2: Choose Time Slot</div>
        <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
          ${evt.slots.map((slot, idx) => `
            <div class="tier-card ${state.selectedSlotIndex === idx ? 'selected' : ''}" style="margin:0; cursor:pointer;" onclick="window.wireframeApp.setSlot(${idx})">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:700; font-size:13px;">${slot.time}</span>
                <span class="wire-badge ${slot.status === 'soldout' ? '' : 'dark'}">${slot.label}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Step 3: Select Ticket Tier</div>
        
        <!-- Standard Tier -->
        <div class="tier-card ${stdCount > 0 ? 'selected' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div style="font-size:13px; font-weight:700;">${evt.tiers[0].name}</div>
              <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">${evt.tiers[0].desc}</div>
              <div style="font-size:14px; font-weight:700; margin-top:6px;">${formatCurrency(evt.tiers[0].price)}</div>
            </div>
            <div class="stepper-box">
              <button class="stepper-btn" onclick="window.wireframeApp.changeQuantity('standard', -1)">-</button>
              <span class="stepper-val">${stdCount}</span>
              <button class="stepper-btn" onclick="window.wireframeApp.changeQuantity('standard', 1)">+</button>
            </div>
          </div>
        </div>

        <!-- VIP Tier if available -->
        ${evt.tiers[1] ? `
          <div class="tier-card ${vipCount > 0 ? 'selected' : ''}">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-size:13px; font-weight:700;">${evt.tiers[1].name}</div>
                <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">${evt.tiers[1].desc}</div>
                <div style="font-size:14px; font-weight:700; margin-top:6px;">${formatCurrency(evt.tiers[1].price)}</div>
              </div>
              <div class="stepper-box">
                <button class="stepper-btn" onclick="window.wireframeApp.changeQuantity('vip', -1)">-</button>
                <span class="stepper-val">${vipCount}</span>
                <button class="stepper-btn" onclick="window.wireframeApp.changeQuantity('vip', 1)">+</button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Conditional Seating Zone Diagram -->
        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Seating / Workstation Zone</div>
        <div class="seat-stage-diagram">
          <div class="stage-pill">=== FRONT WORKSTATION ROW ===</div>
          <div class="zone-selector-row">
            <span class="zone-pill selected" onclick="alert('Zone: Row B (Selected)')">● Station 1 & 2 [Row B]</span>
            <span class="zone-pill" onclick="alert('Zone: Row C (Available)')">Station 3 & 4 [Row C]</span>
          </div>
        </div>

        <div style="height:70px;"></div>
      </div>

      <!-- Sticky Subtotal Bar -->
      <div class="sticky-action-bar in-phone">
        <div>
          <span class="price-text">${totalCount} Tickets • ${formatCurrency(totalPrice)}</span>
          <span class="price-sub">All taxes included</span>
        </div>
        <button class="wire-btn" ${totalCount === 0 ? 'disabled style="opacity:0.5;"' : ''} onclick="window.wireframeApp.proceedToSummary()">Review Order ➔</button>
      </div>
    `;
  }

  // RENDER ORDER SUMMARY (SCR-WF-06)
  function renderScreen6() {
    const evt = state.selectedEvent;
    const stdCount = state.ticketCounts.standard;
    const vipCount = state.ticketCounts.vip;
    const totalCount = stdCount + vipCount;
    
    const baseTotal = (stdCount * evt.basePrice) + (vipCount * (evt.tiers[1] ? evt.tiers[1].price - 100 : 0));
    const feeTotal = totalCount * 50;
    const discount = state.promoApplied ? state.promoDiscount : 0;
    const taxTotal = Math.round(feeTotal * 0.18);
    const finalPayable = baseTotal + feeTotal - discount + taxTotal;

    return `
      <div class="wire-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-5')">←</button>
          <span style="font-size:14px; font-weight:700;">Order Summary</span>
        </div>
      </div>

      <div style="padding:16px;">
        <!-- Countdown Hold Banner -->
        <div id="hold-countdown-timer" style="background:#111827; color:#FFFFFF; text-align:center; padding:8px; border-radius:var(--radius-sm); font-size:12px; font-weight:700; margin-bottom:12px;">
          ⏳ Tickets held for 09:48 mins
        </div>

        <!-- Event Capsule Card -->
        <div class="tier-card" style="margin-bottom:14px;">
          <div style="font-size:14px; font-weight:700;">${evt.title}</div>
          <div style="font-size:12px; color:var(--text-secondary); margin:4px 0;">📅 ${state.selectedDate} • ${evt.slots[state.selectedSlotIndex].time}</div>
          <div style="font-size:11px; color:var(--text-muted);">📍 ${evt.venue}</div>
          <div style="margin-top:8px; font-size:12px; font-weight:700; border-top:1px dashed var(--border-subtle); padding-top:6px;">
            ${stdCount}x Standard Participant Pass
          </div>
        </div>

        <!-- Attendee Information (Guest Mode) -->
        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">
          Attendee Information (Guest Mode)
        </div>
        <div style="background:#FFFFFF; border:1px solid var(--border-default); border-radius:var(--radius-md); padding:12px; margin-bottom:14px; display:flex; flex-direction:column; gap:8px;">
          <div>
            <label style="font-size:11px; color:var(--text-secondary); display:block; margin-bottom:2px;">Full Name</label>
            <input type="text" id="guest-name-input" value="Aravind Kumar" style="width:100%; padding:6px 8px; border:1px solid var(--border-default); border-radius:var(--radius-sm); font-size:12px;">
          </div>
          <div>
            <label style="font-size:11px; color:var(--text-secondary); display:block; margin-bottom:2px;">Email (For Ticket Delivery)</label>
            <input type="email" id="guest-email-input" value="aravind.demo@gmail.com" style="width:100%; padding:6px 8px; border:1px solid var(--border-default); border-radius:var(--radius-sm); font-size:12px;">
          </div>
          <div style="font-size:11px; color:var(--text-muted);">⚡ 1-Tap Guest Checkout: No password or OTP required.</div>
        </div>

        <!-- Promo Code -->
        <div style="display:flex; gap:6px; margin-bottom:14px;">
          <input type="text" value="${state.promoCode}" style="flex:1; padding:6px 10px; border:1px solid var(--border-default); border-radius:var(--radius-sm); font-size:12px; text-transform:uppercase;" readonly>
          <button class="wire-btn secondary" style="font-size:11px; padding:6px 12px;" onclick="window.wireframeApp.togglePromo()">
            ${state.promoApplied ? 'Remove ✕' : 'Apply'}
          </button>
        </div>

        <!-- Itemized Price Breakdown -->
        <div style="background:#FFFFFF; border:1px solid var(--border-default); border-radius:var(--radius-md); padding:14px; margin-bottom:14px; font-size:13px; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;">
            <span style="color:var(--text-secondary);">Base Ticket Price (${totalCount} x ${formatCurrency(evt.basePrice)})</span>
            <span>${formatCurrency(baseTotal)}</span>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span style="color:var(--text-secondary);">Convenience & Platform Fee</span>
            <span>${formatCurrency(feeTotal)}</span>
          </div>
          ${state.promoApplied ? `
            <div style="display:flex; justify-content:space-between; color:#111827; font-weight:700;">
              <span>First Booking Discount (WELCOME100)</span>
              <span>-${formatCurrency(discount)}</span>
            </div>
          ` : ''}
          <div style="display:flex; justify-content:space-between;">
            <span style="color:var(--text-secondary);">Applicable GST (18% on fees)</span>
            <span>${formatCurrency(taxTotal)}</span>
          </div>
          <div style="border-top:2px solid var(--border-strong); padding-top:8px; display:flex; justify-content:space-between; font-size:15px; font-weight:700;">
            <span>Final Amount Payable</span>
            <span>${formatCurrency(finalPayable)}</span>
          </div>
          <div style="font-size:10px; color:var(--text-muted); text-align:center;">🛡️ Zero hidden charges. Guaranteed final price.</div>
        </div>

        <button class="wire-btn full-width" onclick="window.wireframeApp.navigateTo('screen-7')">Proceed to Payment (${formatCurrency(finalPayable)}) ➔</button>
      </div>
    `;
  }

  // RENDER SIMULATED PAYMENT (SCR-WF-07)
  function renderScreen7() {
    return `
      <div class="wire-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-6')">←</button>
          <span style="font-size:14px; font-weight:700;">Simulated Checkout</span>
        </div>
      </div>

      <div style="padding:16px;">
        <div style="background:var(--bg-muted); padding:12px; border-radius:var(--radius-sm); margin-bottom:16px; text-align:center;">
          <span style="font-size:12px; color:var(--text-secondary);">Total Payable:</span>
          <div style="font-size:22px; font-weight:800; margin-top:2px;">₹1,518</div>
          <span style="font-size:11px; color:var(--text-muted);">Ref: #RES-8942-CHN • 2x Tickets</span>
        </div>

        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">Select Payment Simulation</div>

        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
          <div class="tier-card selected" style="margin:0; cursor:pointer;" onclick="window.wireframeApp.executePayment('success')">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:20px;">⚡</span>
                <div>
                  <div style="font-size:13px; font-weight:700;">Instant UPI / GPay (1-Tap Simulation)</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Fastest • Zero gateway redirect</div>
                </div>
              </div>
              <span style="font-size:13px; font-weight:700;">➔</span>
            </div>
          </div>

          <div class="tier-card" style="margin:0; cursor:pointer;" onclick="window.wireframeApp.executePayment('success')">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:20px;">🍎</span>
                <div>
                  <div style="font-size:13px; font-weight:700;">Apple Pay / Google Wallet</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Simulated biometric checkout</div>
                </div>
              </div>
              <span style="font-size:13px; font-weight:700;">➔</span>
            </div>
          </div>

          <div class="tier-card" style="margin:0; cursor:pointer;" onclick="window.wireframeApp.executePayment('success')">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:20px;">💳</span>
                <div>
                  <div style="font-size:13px; font-weight:700;">Credit / Debit Card (Mock Form)</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Visa, Mastercard, RuPay</div>
                </div>
              </div>
              <span style="font-size:13px; font-weight:700;">➔</span>
            </div>
          </div>
        </div>

        <div style="background:#FFFFFF; border:1px dashed var(--border-default); border-radius:var(--radius-sm); padding:10px; margin-bottom:16px; font-size:11px; color:var(--text-secondary);">
          <strong>Demo Gateway Switcher:</strong><br>
          <button class="screen-btn" style="margin-top:6px; color:#111827; background:#E5E7EB;" onclick="window.wireframeApp.executePayment('fail')">⚡ Simulate Timeout / Failed Payment State</button>
        </div>

        <button class="wire-btn full-width" onclick="window.wireframeApp.executePayment('success')">Simulate 1-Tap Pay (₹1,518) ➔</button>
      </div>

      <!-- Processing Overlay -->
      <div id="payment-loading-modal" class="wire-sheet-backdrop" style="align-items:center; justify-content:center;">
        <div style="background:#FFFFFF; border:2px solid var(--border-strong); border-radius:var(--radius-md); padding:24px; text-align:center; width:280px; box-shadow:var(--shadow-lg);">
          <div style="font-size:24px; animation:skeletonPulse 1s infinite;">⟳</div>
          <div style="font-size:14px; font-weight:700; margin-top:8px;">Securing Reservation...</div>
          <div style="font-size:11px; color:var(--text-secondary); margin-top:4px;">Generating encrypted QR entry pass</div>
        </div>
      </div>
    `;
  }

  // RENDER DIGITAL TICKET PASS (SCR-WF-08)
  function renderScreen8() {
    return `
      <div class="wire-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:14px; font-weight:700;">🎉 Booking Confirmed!</span>
        </div>
        <button class="wire-btn secondary" style="font-size:11px; padding:4px 8px;" onclick="window.wireframeApp.navigateTo('screen-1')">Done</button>
      </div>

      <div class="ticket-pass-card">
        <div class="ticket-header-band">
          <span style="font-size:12px; font-weight:700; letter-spacing:0.05em;">DIGITAL ENTRY PASS</span>
          <span style="font-size:11px; background:#374151; padding:2px 6px; border-radius:var(--radius-sm);">#EVT-8942-CHN</span>
        </div>

        <div class="ticket-body">
          <div style="font-size:16px; font-weight:800; line-height:1.2;">Beginner Wheel Pottery Masterclass</div>
          <div style="font-size:12px; color:var(--text-secondary); margin-top:4px;">Artisan Studio, 14 East Mada St, Mylapore</div>

          <div class="ticket-perforation">
            <div class="perforation-circle-left"></div>
            <div class="perforation-dashed-line"></div>
            <div class="perforation-circle-right"></div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:11px; margin-bottom:10px;">
            <div>
              <span style="color:var(--text-muted); display:block;">DATE & TIME:</span>
              <strong>Sat, 24 Oct • 10:00 AM</strong>
            </div>
            <div>
              <span style="color:var(--text-muted); display:block;">SESSION TIER:</span>
              <strong>Standard Pass (2 Qty)</strong>
            </div>
            <div>
              <span style="color:var(--text-muted); display:block;">ATTENDEE:</span>
              <strong>Aravind Kumar + 1</strong>
            </div>
            <div>
              <span style="color:var(--text-muted); display:block;">STATION ZONE:</span>
              <strong>Bay 2 • Stations 1, 2</strong>
            </div>
          </div>

          <!-- Dynamic QR Container -->
          <div class="qr-placeholder-box">
            <div class="qr-code-grid"></div>
            <div style="position:absolute; bottom:4px; font-size:9px; font-weight:700; background:#FFFFFF; padding:1px 4px;">SECURE-PASS-8942</div>
          </div>
          <div style="text-align:center; font-size:11px; color:var(--text-secondary); margin-top:4px;">
            ● Status: <strong>Confirmed & Cached Offline</strong>
          </div>
        </div>
      </div>

      <div style="padding:0 16px 20px 16px; display:flex; flex-direction:column; gap:8px;">
        <button class="wire-btn full-width" onclick="alert('Added to Apple / Google Wallet successfully!')">📲 Add to Apple / Google Wallet</button>
        <div style="display:flex; gap:8px;">
          <button class="wire-btn secondary" style="flex:1; font-size:12px;" onclick="alert('Calendar (.ics) invite downloaded!')">📅 Add Calendar</button>
          <button class="wire-btn secondary" style="flex:1; font-size:12px;" onclick="alert('Opening Google Maps to Mylapore...')">🗺️ Directions</button>
        </div>
        <button class="wire-btn secondary full-width" style="margin-top:6px;" onclick="window.wireframeApp.navigateTo('screen-1')">Explore More Events ➔</button>
      </div>
    `;
  }

  // RENDER SAVED EVENTS & BOOKING HISTORY (SCR-WF-09)
  function renderScreen9() {
    const savedList = EVENTS_DATA.filter(e => state.savedEventIds.has(e.id));

    return `
      <div class="wire-header">
        <span style="font-size:15px; font-weight:700;">Saved & Activity</span>
      </div>

      <div style="padding:10px 16px; background:#FFFFFF; border-bottom:1px solid var(--border-subtle); display:flex; gap:8px;">
        <button class="category-pill active" style="flex:1; text-align:center;">Bookmarked (${state.savedEventIds.size})</button>
        <button class="category-pill" style="flex:1; text-align:center;" onclick="alert('Showing Past Bookings archive')">Booking History (1)</button>
      </div>

      <div style="padding:16px; display:flex; flex-direction:column; gap:12px;">
        ${savedList.length === 0 ? `
          <div style="text-align:center; padding:40px 16px; color:var(--text-muted);">
            <div style="font-size:32px; margin-bottom:8px;">♡</div>
            <div style="font-size:14px; font-weight:700;">No saved events yet</div>
            <p style="font-size:12px; margin-top:4px;">Tap the heart icon on any event card to shortlist it here.</p>
          </div>
        ` : savedList.map(evt => `
          <div class="tier-card" style="margin:0;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="wire-badge dark">${evt.category}</span>
              <button class="card-save-btn active" style="position:static;" onclick="window.wireframeApp.toggleBookmark('${evt.id}')">♥</button>
            </div>
            <div style="font-size:14px; font-weight:700; margin:6px 0;">${evt.title}</div>
            <div style="font-size:12px; color:var(--text-secondary);">📅 ${evt.date} • ${evt.time}</div>
            <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">📍 ${evt.venue}</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; border-top:1px dashed var(--border-subtle); padding-top:8px;">
              <div>
                <span class="price-text">${formatCurrency(evt.price)}</span>
                <span class="price-sub">All-in</span>
              </div>
              <button class="wire-btn" style="padding:6px 12px; font-size:12px;" onclick="window.wireframeApp.openEventDetail('${evt.id}')">Quick Book ➔</button>
            </div>
          </div>
        `).join('')}

        <div style="margin-top:12px; border-top:1px solid var(--border-subtle); padding-top:12px;">
          <div style="font-size:13px; font-weight:700; margin-bottom:8px;">Active Upcoming Pass:</div>
          <div class="tier-card" style="border:2px solid var(--border-strong); cursor:pointer;" onclick="window.wireframeApp.navigateTo('screen-8')">
            <div style="display:flex; justify-content:space-between;">
              <span class="wire-badge dark">CONFIRMED PASS</span>
              <span style="font-size:11px; font-weight:700;">#EVT-8942-CHN</span>
            </div>
            <div style="font-size:13px; font-weight:700; margin-top:4px;">Beginner Wheel Pottery Masterclass</div>
            <div style="font-size:11px; color:var(--text-secondary);">Sat, 24 Oct • 10:00 AM • Mylapore</div>
            <div style="margin-top:6px; font-size:12px; font-weight:700; color:#111827;">View Dynamic QR Pass ➔</div>
          </div>
        </div>
      </div>
    `;
  }

  // RENDER PROFILE & PREFERENCES (SCR-WF-10)
  function renderScreen10() {
    return `
      <div class="wire-header">
        <span style="font-size:15px; font-weight:700;">Profile & Preferences</span>
      </div>

      <div style="padding:16px;">
        <div style="display:flex; align-items:center; gap:12px; background:#FFFFFF; border:1px solid var(--border-default); border-radius:var(--radius-md); padding:14px; margin-bottom:16px;">
          <div style="width:50px; height:50px; background:var(--interactive-dark); color:#FFFFFF; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:700;">AK</div>
          <div>
            <div style="font-size:15px; font-weight:700;">Aravind Kumar</div>
            <div style="font-size:12px; color:var(--text-secondary);">aravind.demo@gmail.com</div>
            <div style="font-size:11px; color:var(--text-muted);">+91 98401 23456 • Guest Verified</div>
          </div>
        </div>

        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Regional Preferences</div>
        <div class="tier-card" style="margin-bottom:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span>Primary Discovery City</span>
            <strong>Chennai, TN ▾</strong>
          </div>
        </div>

        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Favorite Categories</div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px;">
          <span class="quick-chip active">Stand-Up Comedy ✓</span>
          <span class="quick-chip active">Workshops & Crafts ✓</span>
          <span class="quick-chip active">Live Music ✓</span>
          <span class="quick-chip">Sports Screenings</span>
        </div>

        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Notification Settings</div>
        <div class="tier-card" style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
            <span>WhatsApp Ticket Pass Delivery</span>
            <strong>● ON</strong>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
            <span>Weekend Price-Drop Alerts</span>
            <strong>● ON</strong>
          </div>
        </div>

        <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:6px;">Academic Attribution</div>
        <div style="background:var(--bg-muted); padding:10px; border-radius:var(--radius-sm); font-size:11px; color:var(--text-secondary);">
          Project: Professional Training I (PT1) - UI/UX Study<br>
          Student: <strong>Deepti Baskar [44110145]</strong><br>
          Mentor: <strong>Dr. Leena Sivaguru</strong>, Associate Professor, Dept. of CSE
        </div>
      </div>
    `;
  }

  // RENDER EDGE STATES (SCR-WF-11)
  function renderScreen11() {
    const stateType = state.currentEdgeState;

    return `
      <div class="wire-header">
        <span style="font-size:15px; font-weight:700;">Edge States & Recovery</span>
        <button class="circle-nav-btn" onclick="window.wireframeApp.navigateTo('screen-1')">✕</button>
      </div>

      <!-- Edge State Selector Bar -->
      <div style="padding:8px 16px; background:#FFFFFF; border-bottom:1px solid var(--border-subtle); display:flex; gap:6px; overflow-x:auto;">
        <button class="quick-chip ${stateType === '11a' ? 'active' : ''}" onclick="window.wireframeApp.setEdgeState('11a')">11A: Empty Search</button>
        <button class="quick-chip ${stateType === '11b' ? 'active' : ''}" onclick="window.wireframeApp.setEdgeState('11b')">11B: Sold Out</button>
        <button class="quick-chip ${stateType === '11c' ? 'active' : ''}" onclick="window.wireframeApp.setEdgeState('11c')">11C: Loading</button>
        <button class="quick-chip ${stateType === '11d' ? 'active' : ''}" onclick="window.wireframeApp.setEdgeState('11d')">11D: Failed Pay</button>
      </div>

      <div style="padding:16px;">
        ${stateType === '11a' ? `
          <!-- 11A: Empty Search Results -->
          <div style="text-align:center; padding:40px 16px; background:#FFFFFF; border:1px solid var(--border-default); border-radius:var(--radius-md);">
            <div style="font-size:36px; margin-bottom:10px;">🔍 ✕</div>
            <div style="font-size:16px; font-weight:700;">No events found for 'underwater polo'</div>
            <p style="font-size:12px; color:var(--text-secondary); margin:8px auto; max-width:240px;">
              We couldn't find exact matches in Chennai for that query. Try broader keywords or explore this weekend's trending picks.
            </p>
            <div style="display:flex; flex-direction:column; gap:8px; margin-top:16px;">
              <button class="wire-btn" onclick="window.wireframeApp.navigateTo('screen-1')">Explore All Events</button>
              <button class="wire-btn secondary" onclick="window.wireframeApp.clearSearch()">Clear Search Query</button>
            </div>
          </div>
        ` : ''}

        ${stateType === '11b' ? `
          <!-- 11B: Sold Out Event -->
          <div style="background:#FFFFFF; border:2px solid var(--border-strong); border-radius:var(--radius-md); padding:16px;">
            <div style="background:var(--border-strong); color:#FFFFFF; text-align:center; padding:6px; font-size:12px; font-weight:800; letter-spacing:0.05em; border-radius:var(--radius-sm); margin-bottom:12px;">
              SOLD OUT • ALL PASSES EXHAUSTED
            </div>
            <div style="font-size:15px; font-weight:700;">Sorcar & Friends - Uncensored Comedy</div>
            <div style="font-size:12px; color:var(--text-secondary); margin:4px 0;">Fri, 23 Oct • Music Academy Mini Hall</div>
            <p style="font-size:12px; color:var(--text-muted); margin:10px 0;">This show reached maximum venue capacity of 250 seats.</p>
            
            <button class="wire-btn full-width" onclick="alert('You are #14 on the waitlist. We will notify you via WhatsApp if extra seats open!')">
              🔔 Join Waitlist / Notify Me
            </button>

            <div style="margin-top:16px; border-top:1px dashed var(--border-subtle); padding-top:12px;">
              <div style="font-size:12px; font-weight:700; margin-bottom:8px;">Similar Comedy Shows Available:</div>
              <div class="tier-card" style="margin:0; cursor:pointer;" onclick="window.wireframeApp.openEventDetail('evt-01')">
                <div style="font-size:13px; font-weight:700;">Chennai Laugh Riot (Sat, 24 Oct)</div>
                <div style="font-size:11px; color:var(--text-secondary);">Medai, Alwarpet • ₹499 (All-in)</div>
              </div>
            </div>
          </div>
        ` : ''}

        ${stateType === '11c' ? `
          <!-- 11C: Loading Skeletons -->
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="skeleton-box" style="height:140px; width:100%;"></div>
            <div style="display:flex; gap:8px;">
              <div class="skeleton-box" style="height:30px; width:70px;"></div>
              <div class="skeleton-box" style="height:30px; width:90px;"></div>
              <div class="skeleton-box" style="height:30px; width:80px;"></div>
            </div>
            <div class="skeleton-box" style="height:100px; width:100%;"></div>
            <div class="skeleton-box" style="height:100px; width:100%;"></div>
            <p style="text-align:center; font-size:11px; color:var(--text-muted); margin-top:8px;">
              Smooth grayscale skeleton pulse prevents layout shifts (CLS).
            </p>
          </div>
        ` : ''}

        ${stateType === '11d' ? `
          <!-- 11D: Failed Payment State & Recovery -->
          <div style="text-align:center; padding:30px 16px; background:#FFFFFF; border:2px solid var(--border-strong); border-radius:var(--radius-md);">
            <div style="font-size:36px; margin-bottom:8px;">⚠️</div>
            <div style="font-size:16px; font-weight:700;">Payment Simulation Timed Out</div>
            <p style="font-size:12px; color:var(--text-secondary); margin:8px auto; max-width:250px;">
              No charges were made to your account. Your selected tickets remain securely locked for <strong>04:32 mins</strong>.
            </p>
            <div style="display:flex; flex-direction:column; gap:8px; margin-top:16px;">
              <button class="wire-btn" onclick="window.wireframeApp.navigateTo('screen-7')">Retry Payment Now</button>
              <button class="wire-btn secondary" onclick="window.wireframeApp.navigateTo('screen-6')">Change Payment Method</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Active Screen Dispatcher
  function renderActiveScreen() {
    const viewport = $('screen-viewport');
    if (!viewport) return;

    let html = '';
    switch (state.currentScreen) {
      case 'screen-1': html = renderScreen1(); break;
      case 'screen-2': html = renderScreen2(); break;
      case 'screen-3': html = renderScreen3(); break;
      case 'screen-4': html = renderScreen4(); break;
      case 'screen-5': html = renderScreen5(); break;
      case 'screen-6': html = renderScreen6(); break;
      case 'screen-7': html = renderScreen7(); break;
      case 'screen-8': html = renderScreen8(); break;
      case 'screen-9': html = renderScreen9(); break;
      case 'screen-10': html = renderScreen10(); break;
      case 'screen-11': html = renderScreen11(); break;
      default: html = renderScreen1(); break;
    }

    viewport.innerHTML = html;
  }

  // Public Interface for Interaction Handlers
  window.wireframeApp = {
    navigateTo: navigateTo,
    
    setCategory: function (cat) {
      state.activeCategory = cat;
      renderActiveScreen();
    },

    toggleQuickFilter: function (filterKey) {
      state.selectedQuickFilter = state.selectedQuickFilter === filterKey ? null : filterKey;
      renderActiveScreen();
    },

    openEventDetail: function (eventId) {
      const found = EVENTS_DATA.find(e => e.id === eventId);
      if (found) state.selectedEvent = found;
      navigateTo('screen-4');
    },

    openTicketSelector: function () {
      navigateTo('screen-5');
    },

    setSlot: function (index) {
      state.selectedSlotIndex = index;
      renderActiveScreen();
    },

    changeQuantity: function (tierId, delta) {
      const current = state.ticketCounts[tierId] || 0;
      const next = Math.max(0, Math.min(10, current + delta));
      state.ticketCounts[tierId] = next;
      renderActiveScreen();
    },

    proceedToSummary: function () {
      startHoldTimer();
      navigateTo('screen-6');
    },

    togglePromo: function () {
      state.promoApplied = !state.promoApplied;
      renderActiveScreen();
    },

    executePayment: function (mode) {
      const overlay = $('payment-loading-modal');
      if (overlay) overlay.style.display = 'flex';

      setTimeout(() => {
        if (overlay) overlay.style.display = 'none';
        if (mode === 'fail') {
          state.currentEdgeState = '11d';
          navigateTo('screen-11');
        } else {
          navigateTo('screen-8');
        }
      }, 800);
    },

    toggleBookmark: function (eventId) {
      if (state.savedEventIds.has(eventId)) {
        state.savedEventIds.delete(eventId);
      } else {
        state.savedEventIds.add(eventId);
      }
      renderActiveScreen();
      updateBottomNav();
    },

    clearSearch: function () {
      state.searchQuery = '';
      navigateTo('screen-1');
    },

    openFilterSheet: function () {
      const sheet = $('filter-sheet-modal');
      if (sheet) sheet.classList.add('open');
    },

    closeFilterSheet: function () {
      const sheet = $('filter-sheet-modal');
      if (sheet) sheet.classList.remove('open');
    },

    applyFilters: function () {
      window.wireframeApp.closeFilterSheet();
      navigateTo('screen-3');
    },

    setEdgeState: function (stateKey) {
      state.currentEdgeState = stateKey;
      renderActiveScreen();
    },

    toggleAiDrawer: function () {
      state.aiDrawerOpen = !state.aiDrawerOpen;
      const drawer = $('ai-drawer');
      if (drawer) {
        drawer.classList.toggle('open', state.aiDrawerOpen);
      }
    },

    sendAiPrompt: function (promptText) {
      const feed = $('ai-chat-body');
      if (!feed) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'ai-bubble user';
      userBubble.textContent = promptText;
      feed.appendChild(userBubble);

      const botBubble = document.createElement('div');
      botBubble.className = 'ai-bubble';
      botBubble.innerHTML = `
        <strong>✨ Event Concierge:</strong><br>
        I found a top match in Chennai for you:<br>
        <strong>Beginner Wheel Pottery Masterclass</strong> (Sat, 10:00 AM • ₹850)<br>
        <button class="wire-btn" style="padding:4px 8px; font-size:11px; margin-top:6px;" onclick="window.wireframeApp.toggleAiDrawer(); window.wireframeApp.openEventDetail('evt-02');">View Details ➔</button>
      `;
      setTimeout(() => {
        feed.appendChild(botBubble);
        feed.scrollTop = feed.scrollHeight;
      }, 400);
    }
  };

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    navigateTo('screen-1');

    // Attach Bottom Nav Tab Clicks
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        if (tab === 'explore') navigateTo('screen-1');
        else if (tab === 'browse') navigateTo('screen-2');
        else if (tab === 'saved') navigateTo('screen-9');
        else if (tab === 'tickets') navigateTo('screen-8');
      });
    });

    // Attach Screen Switcher Toolbar
    document.querySelectorAll('.screen-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateTo(btn.dataset.screen);
      });
    });
  });

})();
