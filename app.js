/* ==========================================================================
   AURA HIGH-FIDELITY APPLICATION INTERACTIVE CONTROLLER
   Multi-Category Event Discovery & Booking Platform (Deepti PT1 Project)
   Student: Deepti Baskar [44110145] • Mentor: Dr. Leena Sivaguru • Dept. of CSE
   ========================================================================== */

(function () {
  'use strict';

  // Indian Cities Catalog for Location Switcher
  const CITIES = [
    { id: 'chennai', name: 'Chennai', region: 'Tamil Nadu', active: true, count: 5 },
    { id: 'bengaluru', name: 'Bengaluru', region: 'Karnataka', active: false, count: 2 },
    { id: 'mumbai', name: 'Mumbai', region: 'Maharashtra', active: false, count: 2 },
    { id: 'delhi', name: 'Delhi NCR', region: 'National Capital', active: false, count: 0 },
    { id: 'hyderabad', name: 'Hyderabad', region: 'Telangana', active: false, count: 0 }
  ];

  // High-Fidelity Multi-Category Event Database with Rich Gradient Artwork & Indian Metadata
  const EVENTS_CATALOG = [
    {
      id: 'evt-01',
      title: 'Chennai Laugh Riot ft. Local All-Stars',
      category: 'Comedy',
      subCategory: 'Stand-Up Comedy',
      city: 'chennai',
      date: 'Sat, 24 Oct 2026',
      time: '7:30 PM',
      duration: '90 Mins',
      venue: 'Medai - The Stage, Alwarpet',
      neighborhood: 'Alwarpet',
      distance: '2.4 km away',
      price: 499,
      basePrice: 420,
      fee: 67,
      tax: 12,
      rating: 4.8,
      reviewsCount: 142,
      badge: 'Filling Fast',
      badgeType: 'urgency',
      ageLimit: '18+',
      amenities: ['18+ Entry', 'Auditorium Seating', 'AC Hall', 'Valet Parking Available'],
      description: 'An evening of rip-roaring live stand-up comedy celebrating the hilarious quirks of Chennai life, local transit triumphs, and corporate dilemmas. Featuring four of the city’s sharpest headliners.',
      instructor: 'Karthik Kumar, Praveen Kumar & Friends',
      instructorTitle: 'Veteran Stand-Up Comics (10+ Yrs Live)',
      bgGradient: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
      slots: [
        { time: '5:00 PM - 6:30 PM', status: 'available', label: 'Evening Show' },
        { time: '7:30 PM - 9:00 PM', status: 'fast', label: '⚡ 4 seats left' },
        { time: '9:30 PM - 11:00 PM', status: 'soldout', label: '✕ Sold Out' }
      ],
      tiers: [
        { id: 'standard', name: 'Silver Pass (General Admission)', price: 499, desc: 'Auditorium seat + 1 complimentary beverage' },
        { id: 'vip', name: 'Gold Front Row + Meet & Greet', price: 799, desc: 'Reserved front 2 rows + signed tour poster' }
      ]
    },
    {
      id: 'evt-02',
      title: 'Beginner Wheel Pottery Masterclass',
      category: 'Workshops',
      subCategory: 'Craft & Pottery',
      city: 'chennai',
      date: 'Sat, 24 Oct 2026',
      time: '10:00 AM',
      duration: '2.5 Hrs',
      venue: 'Artisan Studio, 14 East Mada St, Mylapore',
      neighborhood: 'Mylapore',
      distance: '3.1 km away',
      price: 850,
      basePrice: 750,
      fee: 85,
      tax: 15,
      rating: 4.9,
      reviewsCount: 86,
      badge: 'Curated',
      badgeType: 'curated',
      ageLimit: '14+',
      amenities: ['All Clay & Tools Provided', 'Take Home 2 Fired Pots', 'AC Studio', 'Fresh Filter Coffee'],
      description: 'Immerse your senses in the tactile world of clay centering, cylinder pulling, and trimming on an electric potter wheel. Guided step-by-step by master ceramist Priya Raman.',
      instructor: 'Priya Raman',
      instructorTitle: 'Master Ceramist & Craft Guild Fellow',
      bgGradient: 'linear-gradient(135deg, #78350F 0%, #B45309 50%, #D97706 100%)',
      slots: [
        { time: '10:00 AM - 12:30 PM', status: 'available', label: 'Morning Slot' },
        { time: '03:00 PM - 05:30 PM', status: 'soldout', label: '✕ Sold Out' },
        { time: '06:00 PM - 08:30 PM', status: 'fast', label: '⚡ 2 wheels left' }
      ],
      tiers: [
        { id: 'standard', name: 'Standard Participant Pass', price: 850, desc: '1 Potter station + 2kg natural clay + 2 fired pots' },
        { id: 'vip', name: 'Masterclass VIP (Coaching + Color Glaze)', price: 1250, desc: '1-on-1 coaching + premium color glaze firing + coffee' }
      ]
    },
    {
      id: 'evt-03',
      title: 'Kizhakku Live Acoustic Sundowner',
      category: 'Music',
      subCategory: 'Indie Concert',
      city: 'chennai',
      date: 'Sun, 25 Oct 2026',
      time: '6:00 PM',
      duration: '2.0 Hrs',
      venue: 'The Bay Amphitheatre, Besant Nagar Beach',
      neighborhood: 'Besant Nagar',
      distance: '5.8 km away',
      price: 350,
      basePrice: 300,
      fee: 42,
      tax: 8,
      rating: 4.7,
      reviewsCount: 210,
      badge: 'Popular',
      badgeType: 'curated',
      ageLimit: 'All Ages',
      amenities: ['Open Air Amphitheatre', 'Ocean Breeze View', 'Food Pop-ups', 'Free Parking'],
      description: 'A soothing seaside twilight gathering playing original Tamil indie folk tracks, ambient acoustic arrangements, and crowd-favorite acoustic singalongs as the sun sets over the Coromandel coast.',
      instructor: 'Kizhakku Indie Band Collective',
      instructorTitle: 'Indie Folk Sensation (500k+ Streams)',
      bgGradient: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #10B981 100%)',
      slots: [
        { time: '6:00 PM - 8:00 PM', status: 'available', label: 'Sunset Session' }
      ],
      tiers: [
        { id: 'standard', name: 'Lawn General Pass', price: 350, desc: 'Open lawn seating (mats welcome)' },
        { id: 'vip', name: 'Front Deck Reserved Seat', price: 600, desc: 'Guaranteed chair in front audio zone' }
      ]
    },
    {
      id: 'evt-04',
      title: 'Super Derby: Screening & Fan Arena',
      category: 'Sports',
      subCategory: 'Sports Screening',
      city: 'chennai',
      date: 'Sun, 25 Oct 2026',
      time: '7:00 PM',
      duration: '3.0 Hrs',
      venue: 'Score Sports Arena, Nungambakkam',
      neighborhood: 'Nungambakkam',
      distance: '4.2 km away',
      price: 299,
      basePrice: 250,
      fee: 41,
      tax: 8,
      rating: 4.6,
      reviewsCount: 78,
      badge: 'Fast Filling',
      badgeType: 'urgency',
      ageLimit: 'All Ages',
      amenities: ['150-inch 4K Giant Screen', 'Stadium Surround Audio', '₹150 F&B Coupon Included'],
      description: 'Experience the electric tension of the championship derby on Chennai’s largest 4K projector screen surrounded by passionate fans with stadium-tier chants and commentary.',
      instructor: 'Chennai Football Fan Club',
      instructorTitle: 'Official Supporters Club',
      bgGradient: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #60A5FA 100%)',
      slots: [
        { time: '7:00 PM - 10:00 PM', status: 'available', label: 'Kick-off' }
      ],
      tiers: [
        { id: 'standard', name: 'Fan Zone Entry', price: 299, desc: 'Entry pass + ₹150 redeemable food/drink coupon' }
      ]
    },
    {
      id: 'evt-05',
      title: 'Indie Short Film Premiere & Director Q&A',
      category: 'Movies',
      subCategory: 'Film Festival',
      city: 'chennai',
      date: 'Fri, 23 Oct 2026',
      time: '6:30 PM',
      duration: '2.5 Hrs',
      venue: 'Alliance Française Cinema, Nungambakkam',
      neighborhood: 'Nungambakkam',
      distance: '3.9 km away',
      price: 250,
      basePrice: 220,
      fee: 25,
      tax: 5,
      rating: 4.8,
      reviewsCount: 54,
      badge: 'Limited Seats',
      badgeType: 'urgency',
      ageLimit: '16+',
      amenities: ['Acoustic Cinema Hall', 'Interactive Director Q&A', 'Festival Program Guide'],
      description: 'Exclusive screening of five award-winning regional independent short films exploring urban identity, memory, and cinema aesthetics, followed by an open fireside conversation with the filmmakers.',
      instructor: 'South India Indie Cinema Collective',
      instructorTitle: 'Curators & Film Critics',
      bgGradient: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 50%, #8B5CF6 100%)',
      slots: [
        { time: '6:30 PM - 9:00 PM', status: 'available', label: 'Screening Session' }
      ],
      tiers: [
        { id: 'standard', name: 'Cinema Entry Pass', price: 250, desc: 'Auditorium seat + souvenir festival badge' }
      ]
    },
    {
      id: 'evt-06',
      title: 'Indiranagar Comedy Underground',
      category: 'Comedy',
      subCategory: 'Stand-Up Comedy',
      city: 'bengaluru',
      date: 'Sat, 24 Oct 2026',
      time: '8:00 PM',
      duration: '90 Mins',
      venue: 'The Humming Tree, 12th Main Indiranagar',
      neighborhood: 'Indiranagar',
      distance: '1.8 km away',
      price: 599,
      basePrice: 500,
      fee: 80,
      tax: 19,
      rating: 4.9,
      reviewsCount: 185,
      badge: 'Top Rated',
      badgeType: 'curated',
      ageLimit: '18+',
      amenities: ['Craft Beer on Tap', 'Intimate 80-Seat Club', 'Valet Parking'],
      description: 'Bengaluru’s sharpest satirical comedy night featuring Kenny Sebastian and rising star club comics tearing through startup culture, tech burnouts, and dating scene chaos.',
      instructor: 'Bengaluru Underground Comics Guild',
      instructorTitle: 'Resident Comedy Producers',
      bgGradient: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #6366F1 100%)',
      slots: [
        { time: '8:00 PM - 9:30 PM', status: 'available', label: 'Prime Time' }
      ],
      tiers: [
        { id: 'standard', name: 'Standard Club Entry', price: 599, desc: 'Entry pass + 1 craft soda/beer coupon' }
      ]
    },
    {
      id: 'evt-07',
      title: 'Artisan Sourdough & Fermentation Lab',
      category: 'Workshops',
      subCategory: 'Baking & Culinary',
      city: 'bengaluru',
      date: 'Sun, 25 Oct 2026',
      time: '11:00 AM',
      duration: '3.0 Hrs',
      venue: 'Koramangala Culinary Lab, 5th Block',
      neighborhood: 'Koramangala',
      distance: '3.4 km away',
      price: 1200,
      basePrice: 1050,
      fee: 120,
      tax: 30,
      rating: 4.9,
      reviewsCount: 92,
      badge: 'Selling Fast',
      badgeType: 'urgency',
      ageLimit: '16+',
      amenities: ['Live Wild Yeast Starter Given', 'Tasting Platter Included', 'Hands-on Oven Baking'],
      description: 'Master the art of wild sourdough fermentation, dough lamination, and Dutch-oven baking with Chef Ananya. Take home your own mature 5-year-old sourdough starter kit.',
      instructor: 'Chef Ananya Rao',
      instructorTitle: 'Le Cordon Bleu Certified Baker',
      bgGradient: 'linear-gradient(135deg, #78350F 0%, #B45309 50%, #F59E0B 100%)',
      slots: [
        { time: '11:00 AM - 2:00 PM', status: 'available', label: 'Morning Lab' }
      ],
      tiers: [
        { id: 'standard', name: 'Baker Pass & Starter Kit', price: 1200, desc: 'Hands-on workstation + take-home bread boule & jar' }
      ]
    },
    {
      id: 'evt-08',
      title: 'Bandra Sunset Rooftop Jazz & Wine',
      category: 'Music',
      subCategory: 'Jazz Concert',
      city: 'mumbai',
      date: 'Sat, 24 Oct 2026',
      time: '6:30 PM',
      duration: '2.5 Hrs',
      venue: 'The Daily Rooftop, Linking Road, Bandra West',
      neighborhood: 'Bandra West',
      distance: '2.1 km away',
      price: 750,
      basePrice: 650,
      fee: 80,
      tax: 20,
      rating: 4.8,
      reviewsCount: 160,
      badge: 'Curated',
      badgeType: 'curated',
      ageLimit: '21+',
      amenities: ['Rooftop Arabian Sea Sunset', 'Live Brass Saxophone Trio', 'Complimentary Sangria Glass'],
      description: 'An atmospheric twilight session of Latin, bossa nova, and contemporary jazz as the city skyline lights up over the sea. Curated for music and wine connoisseurs.',
      instructor: 'Bombay Jazz Collective',
      instructorTitle: 'Jazz India Circuit Headliners',
      bgGradient: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #10B981 100%)',
      slots: [
        { time: '6:30 PM - 9:00 PM', status: 'available', label: 'Sunset Slot' }
      ],
      tiers: [
        { id: 'standard', name: 'Rooftop Access Pass', price: 750, desc: 'Lounge seating + welcome sangria or mocktail' }
      ]
    },
    {
      id: 'evt-09',
      title: 'Kala Ghoda Heritage Sketch Walk',
      category: 'Workshops',
      subCategory: 'Art Walk',
      city: 'mumbai',
      date: 'Sun, 25 Oct 2026',
      time: '8:30 AM',
      duration: '2.5 Hrs',
      venue: 'David Sassoon Library, Fort',
      neighborhood: 'Kala Ghoda',
      distance: '4.5 km away',
      price: 499,
      basePrice: 420,
      fee: 65,
      tax: 14,
      rating: 4.7,
      reviewsCount: 110,
      badge: 'Outdoor',
      badgeType: 'curated',
      ageLimit: 'All Ages',
      amenities: ['Sketchbook & Micron Pens Provided', 'Guided Victorian Gothic History Tour', 'Irani Chai at Cafe Military'],
      description: 'Capture the majestic Victorian Gothic and Art Deco facades of South Mumbai with urban sketchers. Learn perspective, line weight, and architectural water-coloring on the go.',
      instructor: 'Mumbai Urban Sketchers Guild',
      instructorTitle: 'Architects & Illustrators',
      bgGradient: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 50%, #8B5CF6 100%)',
      slots: [
        { time: '8:30 AM - 11:00 AM', status: 'available', label: 'Morning Light' }
      ],
      tiers: [
        { id: 'standard', name: 'Sketch Walk Pass', price: 499, desc: 'Archival sketchbook + 2 pens + Irani bun maska chai' }
      ]
    }
  ];

  // High-Fidelity Prototype Reactive State
  const appState = {
    currentScreen: 'screen-1',
    activeCity: 'Chennai',
    activeCategory: 'All',
    selectedFilterChip: null,
    searchKeyword: '',
    sortBy: 'relevance', // 'relevance', 'date', 'price', 'rating'
    activeFilters: {
      weekend: true,
      under1000: true,
      cityOnly: true
    },
    savedEvents: new Set(['evt-01', 'evt-02']),
    pastBookings: [
      {
        id: 'AUR-2026-7731',
        title: 'Stand-Up Spotlight: Aravind SA Live',
        date: 'Sat, 10 Oct 2026',
        venue: 'Sir Mutha Venkatasubba Rao Concert Hall, Chetpet',
        tier: '2x Gold Passes',
        total: 1350,
        status: 'Attended'
      }
    ],
    selectedEvent: EVENTS_CATALOG[1], // Default: Pottery Masterclass for seamless flow
    selectedDate: 'Sat, 24 Oct 2026',
    selectedSlotIdx: 0,
    ticketQuantities: { standard: 2, vip: 0 },
    selectedStations: ['Station 1', 'Station 2'],
    guestDetails: {
      name: 'Aravind Kumar',
      email: 'aravind.demo@gmail.com',
      phone: '+91 98401 23456'
    },
    promoApplied: true,
    promoCode: 'WELCOME100',
    promoValue: 100,
    holdSeconds: 599,
    holdTimer: null,
    paymentMethod: 'upi',
    paymentStatus: 'idle', // 'idle', 'processing', 'success', 'failed'
    failureReason: 'Bank server timed out while awaiting UPI authorization.',
    aiDrawerOpen: false,
    theme: 'light',
    activeHistoryTab: 'bookmarked' // 'bookmarked', 'history', 'profile'
  };

  // Screen Explanations for Evaluators
  const SCREEN_SPECS = {
    'screen-1': {
      title: 'SCR-01: Home & Curated Discovery Feed',
      summary: 'Vibrant consumer discovery hub featuring an editable location selector, prominent search, category shortcuts, personalized recommendations, and high-impact 2:3 vertical poster cards with upfront "All-in" pricing.',
      keyDecisions: [
        'Editable Location: Instant modal allows switching between Chennai, Bengaluru, Mumbai, etc.',
        'Radical Transparency: Upfront starting price with "All-in" tag prevents deceptive base-price anchors.',
        'Thumb Ergonomics: 4-pillar persistent navigation with active pill indicators and badge counts.'
      ]
    },
    'screen-2': {
      title: 'SCR-02: Search Results, Faceted Filters & Sorting',
      summary: 'High-velocity search experience with real-time query matching, active filter dismissal chips, multi-dimensional sorting presets, and dynamic result counter.',
      keyDecisions: [
        'Immediate Removability: Active filters (e.g. "Weekend ✕", "< ₹1000 ✕") are dismissible with 1-tap.',
        'Dynamic Match Counting: Filter sheet CTA previews inventory count ("Show N Events") before applying.'
      ]
    },
    'screen-3': {
      title: 'SCR-03: Event Detail View & Logistics Hub',
      summary: 'Comprehensive experience evaluation view featuring rich media cover, 4-box logistics metric grid, interactive venue map card, host credentials, amenities, and sticky booking bar.',
      keyDecisions: [
        'Logistics Above-The-Fold: Instant inspection of age restrictions (16+), duration, and distance.',
        'Map Navigation Entry: 1-tap interactive card launches venue directions without losing booking state.'
      ]
    },
    'screen-4': {
      title: 'SCR-04: Ticket Selection & Conditional Seat/Zone Map',
      summary: 'Unified single-sheet selector consolidating date pills, time slots, tier perks, accessible steppers, and a conditional visual seating/workstation zone map.',
      keyDecisions: [
        'No Multi-Screen Wizard: Prevents cognitive disorientation by keeping slot and tier choices in one view.',
        'Live Dynamic Subtotal: Instant recalculation of total INR price as ticket quantities adjust.'
      ]
    },
    'screen-5': {
      title: 'SCR-05: Booking Review & Itemized Fee Transparency',
      summary: 'Zero surprise order summary with a 10-minute hold reservation timer, guest contact form, and transparent itemized fee math.',
      keyDecisions: [
        '100% Fee Transparency: Base price, convenience fee, promo discount, and 18% GST itemized with zero surprises.',
        'Guest Booking Velocity: Simple Name + Email input without forced mobile OTP roadblocks.'
      ]
    },
    'screen-6': {
      title: 'SCR-06: Simulated Checkout, Confirmation & Digital QR Pass',
      summary: 'Simulated payment gateway supporting both success (happy path) and failure outcomes with error recovery, transitioning into an encrypted boarding pass with dynamic QR code.',
      keyDecisions: [
        'Simulated Gateway with Failure Paths: Tests error states (e.g. bank timeout) with non-destructive retry.',
        'Offline Reliability: Pass is marked "Confirmed & Cached Offline" for crowded venues with poor cell signal.'
      ]
    },
    'screen-7': {
      title: 'SCR-07: Saved Events, Booking History & User Profile',
      summary: 'Personalized hub managing bookmarked shortlists with "Quick Book" bypass triggers, past attended booking records, and regional preference settings.',
      keyDecisions: [
        'Quick Book Bypass: Shortlisted events can be reserved directly without re-reading the detail screen.',
        'Editable Preferences: User can update primary discovery city and category alert channels.'
      ]
    },
    'screen-8': {
      title: 'SCR-08: Contextual AI Discovery Concierge ("Aura AI")',
      summary: 'Ambient floating assistant drawer providing natural-language event recommendations, policy answers (e.g. age limits, parking), and interactive recommendation mini-cards.',
      keyDecisions: [
        'Non-Intrusive Ambience: Sits as a subtle floating pill; expands smoothly without hiding background context.',
        'One-Tap Suggestion Chips: Enables instant exploration without manual keyboard typing.'
      ]
    }
  };

  function $(id) {
    return document.getElementById(id);
  }

  function formatINR(val) {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  }

  // Floating Toast System
  function showToast(message, icon = '✨') {
    const toast = $('app-toast');
    if (!toast) return;
    toast.innerHTML = `<span style="font-size:14px;">${icon}</span> <span>${message}</span>`;
    toast.style.display = 'flex';
    if (window.auraToastTimer) clearTimeout(window.auraToastTimer);
    window.auraToastTimer = setTimeout(() => {
      toast.style.display = 'none';
    }, 2800);
  }

  // Hold Timer Controller
  function startHoldTimer() {
    if (appState.holdTimer) clearInterval(appState.holdTimer);
    appState.holdSeconds = 599; // 9:59 mins
    appState.holdTimer = setInterval(() => {
      appState.holdSeconds--;
      if (appState.holdSeconds <= 0) {
        clearInterval(appState.holdTimer);
        appState.holdSeconds = 0;
      }
      const el = $('hold-timer-badge');
      if (el) {
        const m = Math.floor(appState.holdSeconds / 60);
        const s = appState.holdSeconds % 60;
        el.textContent = `⏳ Tickets held for ${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s} mins`;
      }
    }, 1000);
  }

  // Navigation Controller
  function navigateTo(screenId) {
    appState.currentScreen = screenId;

    // Update screen switcher toolbar
    document.querySelectorAll('.screen-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.screen === screenId);
    });

    // Update bottom nav
    updateBottomNav();

    // Render active screen
    renderScreen();

    // Update side evaluator notes
    updateSideNotes();

    // Scroll viewport to top
    const viewport = $('app-viewport');
    if (viewport) viewport.scrollTop = 0;
  }

  function updateBottomNav() {
    const bottomNav = $('main-bottom-nav');
    if (!bottomNav) return;

    // Hide bottom navigation on full-focus modal screens (Event Detail, Ticket Selector, Summary, Pass)
    const hideScreens = ['screen-3', 'screen-4', 'screen-5', 'screen-6'];
    if (hideScreens.includes(appState.currentScreen)) {
      bottomNav.style.display = 'none';
    } else {
      bottomNav.style.display = 'flex';
    }

    document.querySelectorAll('.nav-tab').forEach(tab => {
      const target = tab.dataset.tab;
      const isMatch = (target === 'explore' && appState.currentScreen === 'screen-1') ||
                      (target === 'browse' && appState.currentScreen === 'screen-2') ||
                      (target === 'saved' && appState.currentScreen === 'screen-7') ||
                      (target === 'tickets' && appState.currentScreen === 'screen-6');
      tab.classList.toggle('active', isMatch);
    });

    const badge = $('saved-badge-counter');
    if (badge) {
      badge.textContent = appState.savedEvents.size;
      badge.style.display = appState.savedEvents.size > 0 ? 'inline-block' : 'none';
    }
  }

  function updateSideNotes() {
    const spec = SCREEN_SPECS[appState.currentScreen] || SCREEN_SPECS['screen-1'];
    if ($('spec-screen-title')) $('spec-screen-title').textContent = spec.title;
    if ($('spec-screen-summary')) $('spec-screen-summary').textContent = spec.summary;

    const list = $('spec-decisions-list');
    if (list) {
      list.innerHTML = '';
      spec.keyDecisions.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }
  }

  // SCREEN 1: HOME & DISCOVERY
  function renderScreen1() {
    const cityKey = appState.activeCity.toLowerCase();
    
    // Filter events based on active city and active category
    const cityEvents = EVENTS_CATALOG.filter(evt => {
      if (evt.city !== cityKey) return false;
      if (appState.activeCategory !== 'All' && evt.category !== appState.activeCategory) return false;
      return true;
    });

    // If no events in this city for this category, fallback to showing all events in that city or category
    const displayList = cityEvents.length > 0 ? cityEvents : EVENTS_CATALOG.filter(e => e.city === cityKey);

    return `
      <!-- Top Sticky Header -->
      <div class="app-top-header">
        <button class="location-picker-btn" onclick="window.auraApp.openLocationModal()">
          <span>📍</span>
          <span>${appState.activeCity}</span>
          <span style="font-size:10px; color:var(--text-subtle);">▾</span>
        </button>

        <div style="display:flex; align-items:center; gap:8px;">
          <div class="ai-assistant-trigger" onclick="window.auraApp.toggleAiDrawer()">
            <span>✨ Ask AI</span>
          </div>
        </div>
      </div>

      <!-- Prominent Omni-Search -->
      <div class="omni-search-wrapper">
        <div class="omni-search-box" onclick="window.auraApp.navigateTo('screen-2')">
          <span style="font-size:15px; color:var(--text-subtle);">🔍</span>
          <input type="text" placeholder="Search comedy, music, workshops, sports..." readonly>
        </div>
      </div>

      <!-- Category Navigation Pills -->
      <div class="category-nav-bar">
        ${['All', 'Comedy', 'Workshops', 'Music', 'Sports', 'Movies'].map(cat => `
          <button class="cat-pill ${appState.activeCategory === cat ? 'active' : ''}" onclick="window.auraApp.setCategory('${cat}')">
            ${cat === 'All' ? '✨' : cat === 'Comedy' ? '🎭' : cat === 'Workshops' ? '🎨' : cat === 'Music' ? '🎵' : cat === 'Sports' ? '⚽' : '🎬'} ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Quick Constraint Chips -->
      <div class="quick-chips-bar">
        <button class="q-chip ${appState.selectedFilterChip === 'today' ? 'active' : ''}" onclick="window.auraApp.toggleQuickChip('today')">⚡ Today</button>
        <button class="q-chip ${appState.selectedFilterChip === 'tomorrow' ? 'active' : ''}" onclick="window.auraApp.toggleQuickChip('tomorrow')">📅 Tomorrow</button>
        <button class="q-chip ${appState.selectedFilterChip === 'weekend' ? 'active' : ''}" onclick="window.auraApp.toggleQuickChip('weekend')">🎉 This Weekend</button>
        <button class="q-chip ${appState.selectedFilterChip === 'budget' ? 'active' : ''}" onclick="window.auraApp.toggleQuickChip('budget')">🏷️ Under ₹500</button>
      </div>

      <!-- Hero Spotlight Feature -->
      <div class="hero-carousel-card" onclick="window.auraApp.openEvent('${displayList[0] ? displayList[0].id : 'evt-02'}')">
        <div class="hero-visual-container" style="background:${displayList[0] ? displayList[0].bgGradient : 'linear-gradient(135deg, #78350F, #D97706)'}; display:flex; align-items:center; justify-content:center;">
          <div style="font-family:var(--font-heading); font-size:22px; font-weight:800; color:#FFFFFF; text-align:center; padding:16px;">
            ${displayList[0] ? displayList[0].subCategory.toUpperCase() : 'CURATED SPOTLIGHT'}
          </div>
          <div class="hero-gradient-scrim"></div>
          <div class="hero-content-overlay">
            <span class="badge-tag-pill curated">Curated Spotlight</span>
            <div class="hero-card-title">${displayList[0] ? displayList[0].title : 'Beginner Wheel Pottery Masterclass'}</div>
            <div class="hero-card-subtitle">📅 ${displayList[0] ? displayList[0].date : 'Sat, 24 Oct'} • ${displayList[0] ? displayList[0].venue : 'Mylapore'}</div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
              <div>
                <span style="font-family:var(--font-heading); font-size:16px; font-weight:800;">${formatINR(displayList[0] ? displayList[0].price : 850)}</span>
                <span class="all-in-tag-mini">All-in</span>
              </div>
              <button class="btn-primary-action" style="padding:6px 14px; font-size:12px;">Book Tickets ➔</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Curated Event Grid -->
      <div class="rail-section">
        <div class="rail-title-row">
          <span class="rail-title">Happening in ${appState.activeCity} (${displayList.length})</span>
          <span class="rail-see-all" onclick="window.auraApp.navigateTo('screen-2')">See All ></span>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
          ${displayList.map(evt => `
            <div class="tier-select-card" style="margin:0; cursor:pointer;" onclick="window.auraApp.openEvent('${evt.id}')">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div style="flex:1;">
                  <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                    <span class="badge-tag-pill ${evt.badgeType}">${evt.badge}</span>
                    <span style="font-size:11px; color:var(--text-muted);">${evt.category} • ${evt.neighborhood}</span>
                  </div>
                  <strong style="font-size:14px; line-height:1.3; display:block; font-family:var(--font-heading);">${evt.title}</strong>
                  <div style="font-size:11px; color:var(--text-muted); margin-top:3px;">📅 ${evt.date} • ${evt.time}</div>
                </div>
                <div style="text-align:right; margin-left:12px;">
                  <button class="circular-nav-btn" style="width:30px; height:30px; font-size:14px; margin-bottom:6px;" onclick="event.stopPropagation(); window.auraApp.toggleHeart('${evt.id}')">
                    ${appState.savedEvents.has(evt.id) ? '❤️' : '♡'}
                  </button>
                  <div style="font-family:var(--font-heading); font-size:15px; font-weight:800; color:var(--primary);">${formatINR(evt.price)}</div>
                  <span class="all-in-tag-mini">All-in</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="height:70px;"></div>
    `;
  }

  // SCREEN 2: SEARCH RESULTS & FACETED FILTERS
  function renderScreen2() {
    let results = EVENTS_CATALOG.filter(evt => {
      // Keyword match
      if (appState.searchKeyword) {
        const q = appState.searchKeyword.toLowerCase();
        const matchTitle = evt.title.toLowerCase().includes(q);
        const matchCategory = evt.category.toLowerCase().includes(q);
        const matchNeighborhood = evt.neighborhood.toLowerCase().includes(q);
        if (!matchTitle && !matchCategory && !matchNeighborhood) return false;
      }
      // City match if active
      if (appState.activeFilters.cityOnly && evt.city !== appState.activeCity.toLowerCase()) {
        return false;
      }
      // Budget filter if active
      if (appState.activeFilters.under1000 && evt.price > 1000) {
        return false;
      }
      return true;
    });

    // Sorting
    if (appState.sortBy === 'price') {
      results.sort((a, b) => a.price - b.price);
    } else if (appState.sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (appState.sortBy === 'date') {
      results.sort((a, b) => a.time.localeCompare(b.time));
    }

    return `
      <div class="app-top-header">
        <div style="display:flex; align-items:center; gap:8px; flex:1;">
          <button class="circular-nav-btn" aria-label="Back to home discovery" onclick="window.auraApp.navigateTo('screen-1')">←</button>
          <div class="omni-search-box" style="flex:1;">
            <span style="font-size:14px; color:var(--text-subtle);">🔍</span>
            <input id="search-live-input" type="text" placeholder="Search experiences..." aria-label="Search experiences by keyword" value="${appState.searchKeyword}" oninput="window.auraApp.handleSearchInput(this.value)">
            ${appState.searchKeyword ? `<button style="background:none; border:none; cursor:pointer; font-weight:bold; font-size:14px;" aria-label="Clear search keyword" onclick="window.auraApp.clearSearch()">✕</button>` : ''}
          </div>
          <button class="circular-nav-btn" aria-label="Open search filter modal" title="Filters" onclick="window.auraApp.openFilterModal()">⚙️</button>
        </div>
      </div>

      <!-- Active Dismissible Filter Pills -->
      <div style="padding:8px 16px; display:flex; gap:6px; flex-wrap:wrap; background:var(--bg-surface); border-bottom:1px solid var(--border-subtle); align-items:center;">
        <span style="font-size:11px; font-weight:700; color:var(--text-subtle); text-transform:uppercase;">Active:</span>
        ${appState.activeFilters.weekend ? `
          <button class="cat-pill active" style="font-size:11px; padding:3px 8px;" aria-label="Remove weekend filter" onclick="window.auraApp.removeFilter('weekend')">Weekend ✕</button>
        ` : ''}
        ${appState.activeFilters.under1000 ? `
          <button class="cat-pill active" style="font-size:11px; padding:3px 8px;" aria-label="Remove under 1000 rupee filter" onclick="window.auraApp.removeFilter('under1000')">Under ₹1,000 ✕</button>
        ` : ''}
        ${appState.activeFilters.cityOnly ? `
          <button class="cat-pill active" style="font-size:11px; padding:3px 8px;" aria-label="Remove city filter" onclick="window.auraApp.removeFilter('cityOnly')">${appState.activeCity} ✕</button>
        ` : ''}
        <button style="border:none; background:transparent; color:var(--primary); font-size:11px; font-weight:700; cursor:pointer;" onclick="window.auraApp.resetFilters()">Reset All</button>
      </div>

      <!-- Segmented Sorting Bar -->
      <div style="padding:8px 16px; display:flex; gap:6px; background:var(--bg-base); overflow-x:auto;">
        <button class="q-chip ${appState.sortBy === 'relevance' ? 'active' : ''}" onclick="window.auraApp.setSort('relevance')">⚡ Relevance</button>
        <button class="q-chip ${appState.sortBy === 'date' ? 'active' : ''}" onclick="window.auraApp.setSort('date')">📅 Soonest</button>
        <button class="q-chip ${appState.sortBy === 'price' ? 'active' : ''}" onclick="window.auraApp.setSort('price')">💰 Price: Low to High</button>
        <button class="q-chip ${appState.sortBy === 'rating' ? 'active' : ''}" onclick="window.auraApp.setSort('rating')">⭐ Top Rated</button>
      </div>

      <!-- Search Results Feed -->
      <div style="padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:12px; font-weight:700; color:var(--text-muted);">${results.length} Experiences Found</span>
          <span style="font-size:11px; color:var(--text-subtle);">Showing All-in prices</span>
        </div>

        ${results.length === 0 ? `
          <div style="text-align:center; padding:40px 20px; background:var(--bg-surface); border-radius:var(--radius-md); border:1px dashed var(--border-default);">
            <div style="font-size:32px;">🔍</div>
            <h4 style="font-family:var(--font-heading); margin-top:10px;">No exact matches found</h4>
            <p style="font-size:12px; color:var(--text-muted); margin-top:4px;">Try clearing filters or search for another activity.</p>
            <button class="btn btn-secondary" style="margin-top:12px;" onclick="window.auraApp.resetFilters()">Reset All Filters</button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${results.map(evt => `
              <div class="tier-select-card" style="margin:0; cursor:pointer;" onclick="window.auraApp.openEvent('${evt.id}')">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div style="flex:1;">
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                      <span class="badge-tag-pill ${evt.badgeType}">${evt.badge}</span>
                      <span style="font-size:11px; color:var(--text-muted);">${evt.category} • ${evt.neighborhood}</span>
                    </div>
                    <strong style="font-size:14px; line-height:1.3; display:block; font-family:var(--font-heading);">${evt.title}</strong>
                    <div style="font-size:11px; color:var(--text-muted); margin-top:3px;">📅 ${evt.date} • ${evt.time}</div>
                    <div style="font-size:11px; color:var(--success); font-weight:600; margin-top:4px;">⭐ ${evt.rating} (${evt.reviewsCount} reviews)</div>
                  </div>
                  <div style="text-align:right; margin-left:12px;">
                    <button class="circular-nav-btn" style="width:44px; height:44px; font-size:14px; margin-bottom:6px;" aria-label="Bookmark ${evt.title}" onclick="event.stopPropagation(); window.auraApp.toggleHeart('${evt.id}')">
                      ${appState.savedEvents.has(evt.id) ? '❤️' : '♡'}
                    </button>
                    <div style="font-family:var(--font-heading); font-size:15px; font-weight:800; color:var(--primary);">${formatINR(evt.price)}</div>
                    <span class="all-in-tag-mini">All-in</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <div style="height:70px;"></div>
    `;
  }

  // SCREEN 3: EVENT DETAIL VIEW
  function renderScreen3() {
    const evt = appState.selectedEvent;
    const isSaved = appState.savedEvents.has(evt.id);

    return `
      <!-- Top Transparent Nav Bar -->
      <div class="app-top-header" style="position:absolute; top:48px; left:0; width:100%; z-index:100; background:transparent; border:none;">
        <button class="circular-nav-btn" style="background:rgba(255,255,255,0.85); backdrop-filter:blur(6px);" aria-label="Back to previous screen" onclick="window.auraApp.navigateTo('screen-1')">←</button>
        <div style="display:flex; gap:8px;">
          <button class="circular-nav-btn" style="background:rgba(255,255,255,0.85); backdrop-filter:blur(6px);" aria-label="${isSaved ? 'Remove from bookmarks' : 'Bookmark this event'}" onclick="window.auraApp.toggleHeart('${evt.id}')">
            ${isSaved ? '❤️' : '♡'}
          </button>
        </div>
      </div>

      <!-- Hero Artwork Container -->
      <div style="width:100%; height:220px; background:${evt.bgGradient}; display:flex; align-items:center; justify-content:center; position:relative;">
        <div style="font-family:var(--font-heading); font-size:24px; font-weight:800; color:#FFFFFF; text-align:center; padding:20px; text-shadow:0 2px 10px rgba(0,0,0,0.4);">
          ${evt.subCategory.toUpperCase()}
        </div>
        <div class="hero-gradient-scrim"></div>
        <div style="position:absolute; bottom:12px; left:16px;">
          <span class="badge-tag-pill ${evt.badgeType}">${evt.badge}</span>
        </div>
      </div>

      <!-- Event Logistics Header -->
      <div style="padding:16px; background:var(--bg-surface); border-bottom:1px solid var(--border-subtle);">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--primary);">${evt.category} • ${evt.subCategory}</div>
        <h1 style="font-family:var(--font-heading); font-size:18px; font-weight:800; line-height:1.3; margin:4px 0 8px 0;">${evt.title}</h1>
        <div style="font-size:12px; color:var(--text-muted); display:flex; align-items:center; gap:6px;">
          <span>Hosted by <strong>${evt.instructor}</strong></span>
          <span style="color:var(--primary);">✓ Verified</span>
        </div>
      </div>

      <!-- 4 Quick Glance Logistics Metric Cards -->
      <div style="padding:14px 16px; display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <div class="tier-select-card" style="margin:0; padding:10px;">
          <span style="font-size:11px; color:var(--text-subtle); display:block;">📅 DATE & TIME</span>
          <strong style="font-size:12px;">${evt.date} • ${evt.time}</strong>
        </div>
        <div class="tier-select-card" style="margin:0; padding:10px;">
          <span style="font-size:11px; color:var(--text-subtle); display:block;">⏱ DURATION</span>
          <strong style="font-size:12px;">${evt.duration}</strong>
        </div>
        <div class="tier-select-card" style="margin:0; padding:10px;">
          <span style="font-size:11px; color:var(--text-subtle); display:block;">🔞 AGE RESTRICTION</span>
          <strong style="font-size:12px;">${evt.ageLimit} Entry Only</strong>
        </div>
        <div class="tier-select-card" style="margin:0; padding:10px;">
          <span style="font-size:11px; color:var(--text-subtle); display:block;">⭐ COMMUNITY RATING</span>
          <strong style="font-size:12px; color:var(--success);">${evt.rating} ★ (${evt.reviewsCount} reviews)</strong>
        </div>
      </div>

      <!-- Venue & Map Entry Point -->
      <div style="padding:0 16px 14px 16px;">
        <div class="tier-select-card" style="margin:0; cursor:pointer;" onclick="window.auraApp.openMaps()">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <span style="font-size:10px; font-weight:700; color:var(--text-subtle); text-transform:uppercase;">📍 Venue Location</span>
              <div style="font-weight:700; font-size:13px; margin-top:2px;">${evt.venue}</div>
              <div style="font-size:11px; color:var(--text-muted);">${evt.distance}</div>
            </div>
            <button class="btn btn-secondary" style="padding:6px 10px; font-size:11px;">Directions ➔</button>
          </div>
        </div>
      </div>

      <!-- Description & Amenities -->
      <div style="padding:0 16px 16px 16px;">
        <div style="font-family:var(--font-heading); font-size:14px; font-weight:700; margin-bottom:6px;">About This Experience</div>
        <p style="font-size:12px; color:var(--text-muted); line-height:1.6;">${evt.description}</p>

        <div style="font-family:var(--font-heading); font-size:14px; font-weight:700; margin-top:14px; margin-bottom:8px;">Experience Inclusions</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${evt.amenities.map(a => `
            <span class="badge-tag-pill" style="font-size:11px; padding:4px 10px;">✓ ${a}</span>
          `).join('')}
        </div>
      </div>

      <div style="height:76px;"></div>

      <!-- Sticky Bottom Booking Bar -->
      <div class="sticky-cta-bar">
        <div>
          <span style="font-family:var(--font-heading); font-size:18px; font-weight:800; color:var(--text-main);">${formatINR(evt.price)}</span>
          <span class="all-in-tag-mini">All-in</span>
          <span style="font-size:11px; color:var(--text-muted); display:block;">Starting price per person</span>
        </div>
        <button class="btn-primary-action" onclick="window.auraApp.navigateTo('screen-4')">Book Experience ➔</button>
      </div>
    `;
  }

  // SCREEN 4: TICKET SELECTION & INTERACTIVE SEAT/STATION MAP
  function renderScreen4() {
    const evt = appState.selectedEvent;
    const stdCount = appState.ticketQuantities.standard;
    const vipCount = appState.ticketQuantities.vip;
    const totalQty = stdCount + vipCount;
    const totalPrice = (stdCount * evt.tiers[0].price) + (vipCount * (evt.tiers[1] ? evt.tiers[1].price : 0));

    return `
      <div class="app-top-header">
        <div style="display:flex; align-items:center; gap:10px;">
          <button class="circular-nav-btn" aria-label="Back to event details" onclick="window.auraApp.navigateTo('screen-3')">←</button>
          <span style="font-family:var(--font-heading); font-size:15px; font-weight:700;">Select Passes & Slots</span>
        </div>
      </div>

      <div style="padding:16px;">
        <!-- Date Selector Tabs -->
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--text-subtle); margin-bottom:8px;">Select Date</div>
        <div style="display:flex; gap:8px; margin-bottom:14px;">
          <button class="cat-pill ${appState.selectedDate === 'Sat, 24 Oct 2026' ? 'active' : ''}" style="flex:1; justify-content:center;" onclick="window.auraApp.setDate('Sat, 24 Oct 2026')">
            📅 Sat, 24 Oct
          </button>
          <button class="cat-pill ${appState.selectedDate === 'Sun, 25 Oct 2026' ? 'active' : ''}" style="flex:1; justify-content:center;" onclick="window.auraApp.setDate('Sun, 25 Oct 2026')">
            📅 Sun, 25 Oct
          </button>
        </div>

        <!-- Time Slot Chips -->
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--text-subtle); margin-bottom:8px;">Available Time Slots</div>
        <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
          ${evt.slots.map((slot, idx) => `
            <div class="tier-select-card ${appState.selectedSlotIdx === idx ? 'selected' : ''}" style="margin:0; cursor:pointer;" onclick="window.auraApp.setSlotIdx(${idx})">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <strong style="font-size:13px;">${slot.time}</strong>
                  <span style="font-size:11px; color:var(--text-muted); display:block;">${slot.label}</span>
                </div>
                ${slot.status === 'soldout' ? `
                  <span class="badge-tag-pill" style="background:#FEE2E2; color:#DC2626;">Sold Out</span>
                ` : slot.status === 'fast' ? `
                  <span class="badge-tag-pill urgency">⚡ 2 left</span>
                ` : `
                  <span style="font-size:12px; color:var(--primary); font-weight:700;">Select ➔</span>
                `}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Ticket Tiers & Quantities -->
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--text-subtle); margin-bottom:8px;">Select Pass Tiers</div>

        <!-- Standard Tier -->
        <div class="tier-select-card ${stdCount > 0 ? 'selected' : ''}" style="margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div style="font-family:var(--font-heading); font-size:14px; font-weight:700;">${evt.tiers[0].name}</div>
              <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">${evt.tiers[0].desc}</div>
              <div style="font-family:var(--font-heading); font-size:15px; font-weight:800; color:var(--primary); margin-top:6px;">${formatINR(evt.tiers[0].price)}</div>
            </div>
            <div class="stepper-controller">
              <button class="stepper-click-btn" aria-label="Decrease standard pass quantity" onclick="window.auraApp.changeQty('standard', -1)">-</button>
              <span class="stepper-value-text" aria-live="polite">${stdCount}</span>
              <button class="stepper-click-btn" aria-label="Increase standard pass quantity" onclick="window.auraApp.changeQty('standard', 1)">+</button>
            </div>
          </div>
        </div>

        <!-- VIP Tier -->
        ${evt.tiers[1] ? `
          <div class="tier-select-card ${vipCount > 0 ? 'selected' : ''}" style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-family:var(--font-heading); font-size:14px; font-weight:700;">${evt.tiers[1].name}</div>
                <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">${evt.tiers[1].desc}</div>
                <div style="font-family:var(--font-heading); font-size:15px; font-weight:800; color:var(--primary); margin-top:6px;">${formatINR(evt.tiers[1].price)}</div>
              </div>
              <div class="stepper-controller">
                <button class="stepper-click-btn" aria-label="Decrease VIP pass quantity" onclick="window.auraApp.changeQty('vip', -1)">-</button>
                <span class="stepper-value-text" aria-live="polite">${vipCount}</span>
                <button class="stepper-click-btn" aria-label="Increase VIP pass quantity" onclick="window.auraApp.changeQty('vip', 1)">+</button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Interactive Seating / Workstation Zone Visualizer -->
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--text-subtle); margin-top:14px; margin-bottom:8px;">
          Interactive Workstation & Seat Selector
        </div>
        <div class="stage-visualizer-box">
          <div class="stage-light-band">=== INSTRUCTOR STAGE & WHEEL DEMO ===</div>
          
          <div class="station-grid-container">
            ${[1, 2, 3, 4, 5, 6].map(num => {
              const name = `Station ${num}`;
              const isReserved = (num === 5 || num === 6);
              const isSelected = appState.selectedStations.includes(name);
              return `
                <div class="station-spot-card ${isSelected ? 'selected' : ''} ${isReserved ? 'reserved' : ''}" role="button" tabindex="0" aria-label="${name} ${isReserved ? 'Occupied' : isSelected ? 'Selected' : 'Available'}" onclick="window.auraApp.toggleStation(${num})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); window.auraApp.toggleStation(${num});}">
                  <div style="font-size:16px;">${isReserved ? '🔒' : isSelected ? '🏺' : '⭕'}</div>
                  <strong style="font-size:11px; display:block; margin-top:2px;">${name}</strong>
                  <span style="font-size:9px; color:var(--text-subtle);">${isReserved ? 'Occupied' : isSelected ? 'Selected' : 'Available'}</span>
                </div>
              `;
            }).join('')}
          </div>

          <span style="font-size:10px; color:var(--text-subtle); display:block; margin-top:10px;">
            Selected: <strong>${appState.selectedStations.join(', ') || 'None'}</strong> (Tap station to toggle)
          </span>
        </div>

        <div style="height:76px;"></div>
      </div>

      <!-- Sticky Subtotal Bar -->
      <div class="sticky-cta-bar">
        <div>
          <span style="font-family:var(--font-heading); font-size:16px; font-weight:800; color:var(--text-main);">${totalQty} Passes • ${formatINR(totalPrice)}</span>
          <span style="font-size:11px; color:var(--text-muted); display:block;">Guaranteed all-in price</span>
        </div>
        <button class="btn-primary-action" ${totalQty === 0 ? 'disabled style="opacity:0.5; pointer-events:none;"' : ''} onclick="window.auraApp.proceedToSummary()">
          ${totalQty === 0 ? 'Select Pass to Proceed' : 'Review Order ➔'}
        </button>
      </div>
    `;
  }

  // SCREEN 5: BOOKING REVIEW & FEE MATH
  function renderScreen5() {
    const evt = appState.selectedEvent;
    const stdCount = appState.ticketQuantities.standard;
    const vipCount = appState.ticketQuantities.vip;
    const totalQty = stdCount + vipCount;
    
    const baseTotal = (stdCount * evt.basePrice) + (vipCount * (evt.tiers[1] ? evt.tiers[1].price - 100 : 0));
    const feeTotal = totalQty * 50;
    const discount = appState.promoApplied ? appState.promoValue : 0;
    const taxTotal = Math.round(feeTotal * 0.18);
    const finalAmount = Math.max(0, baseTotal + feeTotal - discount + taxTotal);

    return `
      <div class="app-top-header">
        <div style="display:flex; align-items:center; gap:10px;">
          <button class="circular-nav-btn" aria-label="Back to ticket selection" onclick="window.auraApp.navigateTo('screen-4')">←</button>
          <span style="font-family:var(--font-heading); font-size:15px; font-weight:700;">Order Review</span>
        </div>
      </div>

      <div style="padding:16px;">
        <!-- 10-Minute Hold Reservation Banner -->
        <div id="hold-timer-badge" role="timer" aria-live="polite" style="background:#0F172A; color:#FFFFFF; text-align:center; padding:10px; border-radius:var(--radius-sm); font-family:var(--font-heading); font-size:13px; font-weight:700; margin-bottom:14px; box-shadow:var(--shadow-subtle);">
          ⏳ Tickets held for 09:48 mins
        </div>

        <!-- Event Capsule Summary -->
        <div class="tier-select-card" style="margin-bottom:14px;">
          <div style="font-family:var(--font-heading); font-size:14px; font-weight:700;">${evt.title}</div>
          <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">📅 ${appState.selectedDate} • ${evt.slots[appState.selectedSlotIdx].time}</div>
          <div style="font-size:11px; color:var(--text-subtle);">📍 ${evt.venue}</div>
          <div style="margin-top:8px; padding-top:6px; border-top:1px dashed var(--border-subtle); font-size:12px; font-weight:700; color:var(--primary);">
            ${totalQty}x Passes (${appState.selectedStations.join(', ')})
          </div>
        </div>

        <!-- Guest Contact Form -->
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--text-subtle); margin-bottom:8px;">
          Ticket Delivery Details (Guest Mode)
        </div>
        <div style="background:var(--bg-surface); border:1px solid var(--border-default); border-radius:var(--radius-md); padding:14px; margin-bottom:14px; display:flex; flex-direction:column; gap:10px;">
          <div>
            <label for="guest-name-input" style="font-size:11px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Full Name</label>
            <input id="guest-name-input" type="text" value="${appState.guestDetails.name}" style="width:100%; height:40px; border:1px solid var(--border-default); border-radius:var(--radius-sm); padding:0 12px; font-size:13px; font-family:var(--font-body);" oninput="appState.guestDetails.name = this.value">
          </div>
          <div>
            <label for="guest-email-input" style="font-size:11px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Email (For Digital Pass & PDF)</label>
            <input id="guest-email-input" type="email" value="${appState.guestDetails.email}" style="width:100%; height:40px; border:1px solid var(--border-default); border-radius:var(--radius-sm); padding:0 12px; font-size:13px; font-family:var(--font-body);" oninput="appState.guestDetails.email = this.value">
          </div>
          <span style="font-size:11px; color:var(--success); font-weight:600;">✓ 1-Tap Guest Checkout: Zero passwords or SMS OTP required.</span>
        </div>

        <!-- Promo Code Input -->
        <div style="display:flex; gap:8px; margin-bottom:14px;">
          <input type="text" value="${appState.promoCode}" style="flex:1; height:40px; border:1px solid var(--border-default); border-radius:var(--radius-sm); padding:0 12px; font-size:12px; font-weight:700; text-transform:uppercase;" readonly>
          <button class="btn btn-secondary" style="height:40px; padding:0 14px; font-size:12px;" onclick="window.auraApp.togglePromoCode()">
            ${appState.promoApplied ? 'Remove ✕' : 'Apply'}
          </button>
        </div>

        <!-- Itemized Price Breakdown -->
        <div style="background:var(--bg-surface); border:1px solid var(--border-default); border-radius:var(--radius-md); padding:16px; margin-bottom:16px; font-size:13px; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between;">
            <span style="color:var(--text-muted);">Base Price (${totalQty} x ${formatINR(evt.basePrice)})</span>
            <span style="font-weight:600;">${formatINR(baseTotal)}</span>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span style="color:var(--text-muted);">Platform Convenience Fee</span>
            <span style="font-weight:600;">${formatINR(feeTotal)}</span>
          </div>
          ${appState.promoApplied ? `
            <div style="display:flex; justify-content:space-between; color:var(--success); font-weight:700;">
              <span>Promo Discount (${appState.promoCode})</span>
              <span>-${formatINR(discount)}</span>
            </div>
          ` : ''}
          <div style="display:flex; justify-content:space-between;">
            <span style="color:var(--text-muted);">Applicable GST (18% on fees)</span>
            <span style="font-weight:600;">${formatINR(taxTotal)}</span>
          </div>
          <div style="border-top:2px solid var(--border-default); padding-top:10px; display:flex; justify-content:space-between; font-family:var(--font-heading); font-size:16px; font-weight:800;">
            <span>Total Payable Amount</span>
            <span style="color:var(--primary);">${formatINR(finalAmount)}</span>
          </div>
          <div style="font-size:11px; color:var(--text-subtle); text-align:center; margin-top:4px;">
            🛡️ Zero hidden checkout fees. Guaranteed final price.
          </div>
        </div>

        <button class="btn-primary-action" style="width:100%; font-size:15px; padding:14px;" onclick="window.auraApp.validateAndProceedToPayment(${finalAmount})">
          Proceed to Payment (${formatINR(finalAmount)}) ➔
        </button>
      </div>
    `;
  }

  // SCREEN 6: SIMULATED CHECKOUT & DIGITAL PASS
  function renderScreen6() {
    const isSuccess = appState.paymentStatus === 'success';
    const isFailed = appState.paymentStatus === 'failed';
    const isProcessing = appState.paymentStatus === 'processing';
    const evt = appState.selectedEvent;

    return `
      <div class="app-top-header">
        <div style="display:flex; align-items:center; gap:10px;">
          <button class="circular-nav-btn" aria-label="Back to order review" onclick="window.auraApp.navigateTo('screen-5')">←</button>
          <span style="font-family:var(--font-heading); font-size:15px; font-weight:700;">
            ${isSuccess ? 'Booking Confirmed' : 'Simulated Payment Gateway'}
          </span>
        </div>
      </div>

      ${isFailed ? `
        <!-- Simulated Payment Failure Error Box with Non-Destructive Recovery -->
        <div style="padding:16px;">
          <div class="payment-failure-box">
            <div class="payment-failure-icon">⚠️</div>
            <h3 style="font-family:var(--font-heading); font-size:16px; font-weight:800; color:#E11D48;">Simulated Payment Declined</h3>
            <p style="font-size:12px; color:var(--text-muted); margin:6px 0 12px 0;">
              ${appState.failureReason}
            </p>
            <div style="background:var(--bg-surface); padding:8px 12px; border-radius:var(--radius-sm); font-size:11px; font-weight:700; color:#0F172A; display:inline-block; margin-bottom:12px;">
              🛡️ Your reservation is safe! Tickets held for 08:35 mins.
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <button class="btn-primary-action" style="width:100%;" onclick="window.auraApp.retryPayment()">
                ⚡ Retry with Instant UPI (Simulate Success) ➔
              </button>
              <button class="btn btn-secondary" style="width:100%;" onclick="window.auraApp.switchPaymentMethod('card')">
                💳 Switch to Credit / Debit Card
              </button>
              <button class="btn btn-ghost" style="width:100%; font-size:12px;" onclick="window.auraApp.returnToOrderReview()">
                ← Return to Order Review (Keep Cart)
              </button>
            </div>
          </div>
        </div>
      ` : !isSuccess ? `
        <!-- Payment Gateway Method Selection -->
        <div style="padding:16px;">
          <div style="background:var(--primary-light); padding:16px; border-radius:var(--radius-md); text-align:center; margin-bottom:16px; border:1px solid rgba(88, 51, 234, 0.2);">
            <span style="font-size:12px; color:var(--text-muted);">Amount Payable:</span>
            <div style="font-family:var(--font-heading); font-size:26px; font-weight:800; color:var(--primary); margin:4px 0;">₹1,518</div>
            <span style="font-size:11px; color:var(--text-subtle);">Booking Ref: #AUR-2026-8841 • 2x Passes</span>
          </div>

          <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--text-subtle); margin-bottom:8px;">Choose Payment Method</div>

          <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
            <div class="tier-select-card ${appState.paymentMethod === 'upi' ? 'selected' : ''}" style="margin:0; cursor:pointer;" onclick="appState.paymentMethod = 'upi'; renderScreen();">
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span style="font-size:24px;">⚡</span>
                  <div>
                    <div style="font-family:var(--font-heading); font-size:14px; font-weight:700;">Instant UPI / GPay (1-Tap)</div>
                    <div style="font-size:11px; color:var(--text-muted);">Fastest • Zero bank redirect delay</div>
                  </div>
                </div>
                <span style="font-size:14px; font-weight:700; color:var(--primary);">${appState.paymentMethod === 'upi' ? '✓' : '➔'}</span>
              </div>
            </div>

            <div class="tier-select-card ${appState.paymentMethod === 'wallet' ? 'selected' : ''}" style="margin:0; cursor:pointer;" onclick="appState.paymentMethod = 'wallet'; renderScreen();">
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span style="font-size:24px;">🍎</span>
                  <div>
                    <div style="font-family:var(--font-heading); font-size:14px; font-weight:700;">Apple Pay / Google Wallet</div>
                    <div style="font-size:11px; color:var(--text-muted);">Biometric authentication</div>
                  </div>
                </div>
                <span style="font-size:14px; font-weight:700;">${appState.paymentMethod === 'wallet' ? '✓' : '➔'}</span>
              </div>
            </div>

            <div class="tier-select-card ${appState.paymentMethod === 'card' ? 'selected' : ''}" style="margin:0; cursor:pointer;" onclick="appState.paymentMethod = 'card'; renderScreen();">
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span style="font-size:24px;">💳</span>
                  <div>
                    <div style="font-family:var(--font-heading); font-size:14px; font-weight:700;">Credit / Debit Card</div>
                    <div style="font-size:11px; color:var(--text-muted);">Visa, Mastercard, RuPay</div>
                  </div>
                </div>
                <span style="font-size:14px; font-weight:700;">${appState.paymentMethod === 'card' ? '✓' : '➔'}</span>
              </div>
            </div>
          </div>

          <!-- Prototype Evaluator Payment Controls: Happy Path vs Failure Path -->
          <div style="display:flex; flex-direction:column; gap:8px;">
            <button class="btn-primary-action" style="width:100%; font-size:15px; padding:14px;" onclick="window.auraApp.triggerPaymentSimulation(false)">
              Simulate 1-Tap Pay (Happy Path) ➔
            </button>
            <button class="btn btn-secondary" style="width:100%; font-size:12px; color:#E11D48; border-color:#FECDD3;" onclick="window.auraApp.triggerPaymentSimulation(true)">
              ⚠️ Simulate Payment Failure (Test Error Recovery)
            </button>
          </div>
        </div>
      ` : `
        <!-- Booking Confirmation & Digital QR Pass (Success Path) -->
        <div style="padding-bottom:20px;">
          <div style="background:var(--success-bg); color:var(--success); padding:10px 16px; text-align:center; font-family:var(--font-heading); font-weight:700; font-size:14px; border-bottom:1px solid rgba(16, 185, 129, 0.2);">
            🎉 Booking Confirmed! Your tickets are ready.
          </div>

          <div class="boarding-pass-ticket">
            <div class="pass-brand-band">
              <span style="font-size:12px; font-weight:800; letter-spacing:0.06em;">DIGITAL BOARDING PASS</span>
              <span style="font-size:11px; background:rgba(0,0,0,0.25); padding:2px 8px; border-radius:4px; font-family:monospace;">#EVT-8942-CHN</span>
            </div>

            <div style="padding:18px;">
              <div style="font-family:var(--font-heading); font-size:17px; font-weight:800; line-height:1.25;">${evt.title}</div>
              <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">${evt.venue}</div>

              <div style="margin:14px 0; border-top:2px dashed var(--border-default);"></div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:11px;">
                <div>
                  <span style="color:var(--text-subtle); display:block;">DATE & TIME:</span>
                  <strong style="color:var(--text-main); font-size:12px;">${appState.selectedDate} • ${evt.slots[appState.selectedSlotIdx].time}</strong>
                </div>
                <div>
                  <span style="color:var(--text-subtle); display:block;">SESSION TIER:</span>
                  <strong style="color:var(--text-main); font-size:12px;">Standard Pass (2 Qty)</strong>
                </div>
                <div>
                  <span style="color:var(--text-subtle); display:block;">ATTENDEE:</span>
                  <strong style="color:var(--text-main); font-size:12px;">${appState.guestDetails.name} + 1</strong>
                </div>
                <div>
                  <span style="color:var(--text-subtle); display:block;">STATION:</span>
                  <strong style="color:var(--text-main); font-size:12px;">${appState.selectedStations.join(', ')}</strong>
                </div>
              </div>

              <!-- Dynamic QR Code with Explicit Label -->
              <div class="pass-qr-frame">
                <div class="qr-code-rendered"></div>
              </div>
              <div style="text-align:center; font-size:10px; color:var(--text-subtle); margin-top:4px;">
                SIMULATED SECURE QR PASS • CODE #AUR-8942-CHN
              </div>
              <div style="text-align:center; font-size:11px; color:var(--success); font-weight:700; margin-top:2px;">
                ● Confirmed & Cached Offline
              </div>
            </div>
          </div>

          <div style="padding:0 16px; display:flex; flex-direction:column; gap:8px;">
            <button class="btn-primary-action" style="width:100%;" onclick="window.auraApp.syncWallet()">📲 Add to Apple / Google Wallet</button>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-secondary" style="flex:1;" onclick="window.auraApp.syncCalendar()">📅 Add Calendar</button>
              <button class="btn btn-secondary" style="flex:1;" onclick="window.auraApp.openMaps()">🗺️ Directions</button>
            </div>
            <button class="btn btn-secondary" style="margin-top:6px;" onclick="window.auraApp.navigateTo('screen-7'); window.auraApp.setHistoryTab('history');">
              View in Booking History ➔
            </button>
            <button class="btn btn-ghost" onclick="window.auraApp.navigateTo('screen-1')">
              Explore More Events ➔
            </button>
          </div>
        </div>
      `}

      <!-- Payment Processing Modal -->
      <div id="simulated-payment-modal" class="modal-overlay-backdrop" style="align-items:center; justify-content:center; ${isProcessing ? 'display:flex;' : 'display:none;'}">
        <div style="background:var(--bg-surface); border:2px solid var(--primary); border-radius:var(--radius-lg); padding:28px 24px; text-align:center; width:290px; box-shadow:var(--shadow-elevated);">
          <div style="font-size:28px; animation:spin 1s linear infinite;">⟳</div>
          <div style="font-family:var(--font-heading); font-size:16px; font-weight:800; margin-top:10px;">Securing Reservation...</div>
          <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Connecting to payment gateway</div>
        </div>
      </div>
    `;
  }

  // SCREEN 7: SAVED, HISTORY & PROFILE
  function renderScreen7() {
    const savedList = EVENTS_CATALOG.filter(e => appState.savedEvents.has(e.id));
    const tab = appState.activeHistoryTab;

    return `
      <div class="app-top-header">
        <span style="font-family:var(--font-heading); font-size:16px; font-weight:800;">Saved & Activity</span>
      </div>

      <!-- Segment Toggle -->
      <div style="padding:10px 18px; background:var(--bg-surface); border-bottom:1px solid var(--border-subtle); display:flex; gap:8px;">
        <button class="cat-pill ${tab === 'bookmarked' ? 'active' : ''}" style="flex:1; justify-content:center;" onclick="window.auraApp.setHistoryTab('bookmarked')">
          Bookmarked (${appState.savedEvents.size})
        </button>
        <button class="cat-pill ${tab === 'history' ? 'active' : ''}" style="flex:1; justify-content:center;" onclick="window.auraApp.setHistoryTab('history')">
          History (${appState.pastBookings.length})
        </button>
        <button class="cat-pill ${tab === 'profile' ? 'active' : ''}" style="flex:1; justify-content:center;" onclick="window.auraApp.setHistoryTab('profile')">
          Profile
        </button>
      </div>

      <div style="padding:16px;">
        ${tab === 'bookmarked' ? `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${savedList.length === 0 ? `
              <div style="text-align:center; padding:30px 16px; background:var(--bg-surface); border-radius:var(--radius-md);">
                <div style="font-size:32px;">♡</div>
                <h4 style="font-family:var(--font-heading); margin-top:6px;">No Saved Events</h4>
                <p style="font-size:12px; color:var(--text-muted);">Tap the heart icon on any event to bookmark it for later.</p>
                <button class="btn btn-secondary" style="margin-top:10px;" onclick="window.auraApp.navigateTo('screen-1')">Explore Feed ➔</button>
              </div>
            ` : savedList.map(evt => `
              <div class="tier-select-card" style="margin:0;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div style="flex:1;">
                    <div style="font-size:10px; font-weight:700; color:var(--text-subtle); text-transform:uppercase;">${evt.category} • ${evt.neighborhood}</div>
                    <strong style="font-size:14px; font-family:var(--font-heading); line-height:1.3; display:block; margin:2px 0;">${evt.title}</strong>
                    <div style="font-size:11px; color:var(--text-muted);">📅 ${evt.date} • ${evt.time}</div>
                    <div style="font-family:var(--font-heading); font-size:14px; font-weight:800; color:var(--primary); margin-top:4px;">${formatINR(evt.price)}</div>
                  </div>
                  <button class="circular-nav-btn" style="width:44px; height:44px;" aria-label="Remove ${evt.title} from bookmarks" onclick="window.auraApp.toggleHeart('${evt.id}')">❤️</button>
                </div>
                <div style="display:flex; gap:8px; margin-top:10px; padding-top:8px; border-top:1px solid var(--border-subtle);">
                  <button class="btn-primary-action" style="flex:1; padding:6px 12px; font-size:12px;" onclick="window.auraApp.openEvent('${evt.id}')">Quick Book ➔</button>
                  <button class="btn btn-secondary" style="padding:6px 10px; font-size:12px;" onclick="window.auraApp.openEvent('${evt.id}')">Details</button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : tab === 'history' ? `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${appState.pastBookings.map(b => `
              <div class="tier-select-card" style="margin:0;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="badge-tag-pill ${b.status === 'Confirmed' ? 'urgency' : ''}">${b.status}</span>
                  <span style="font-size:11px; color:var(--text-subtle); font-family:monospace;">${b.id}</span>
                </div>
                <strong style="font-size:14px; font-family:var(--font-heading); margin-top:6px; display:block;">${b.title}</strong>
                <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">📅 ${b.date} • ${b.tier}</div>
                <div style="font-size:11px; color:var(--text-subtle);">📍 ${b.venue}</div>
                <div style="margin-top:10px; padding-top:8px; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                  <strong style="font-size:13px; color:var(--primary);">${formatINR(b.total)}</strong>
                  <button class="btn btn-secondary" style="padding:4px 10px; font-size:11px;" onclick="window.auraApp.navigateTo('screen-6')">View Digital Pass ➔</button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <!-- User Profile & Preferences -->
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="background:var(--bg-surface); border:1px solid var(--border-default); border-radius:var(--radius-md); padding:16px; text-align:center;">
              <div style="width:54px; height:54px; border-radius:50%; background:var(--primary); color:#FFFFFF; display:flex; align-items:center; justify-content:center; margin:0 auto 10px auto; font-size:22px; font-weight:800;">
                AK
              </div>
              <strong style="font-size:16px; font-family:var(--font-heading);">${appState.guestDetails.name}</strong>
              <div style="font-size:12px; color:var(--text-muted);">${appState.guestDetails.email}</div>
              <span class="badge-tag-pill" style="margin-top:6px;">Guest Explorer Mode</span>
            </div>

            <div class="tier-select-card" style="margin:0; cursor:pointer;" onclick="window.auraApp.openLocationModal()">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <span style="font-size:10px; font-weight:700; color:var(--text-subtle); text-transform:uppercase;">Discovery City</span>
                  <div style="font-weight:700; font-size:13px;">📍 ${appState.activeCity} (Tap to change)</div>
                </div>
                <span style="font-size:12px; color:var(--primary);">Edit ➔</span>
              </div>
            </div>

            <div class="tier-select-card" style="margin:0;">
              <span style="font-size:10px; font-weight:700; color:var(--text-subtle); text-transform:uppercase;">Notification Preferences</span>
              <div style="margin-top:8px; display:flex; flex-direction:column; gap:6px; font-size:12px;">
                <label><input type="checkbox" checked> WhatsApp Ticket Pass Delivery</label>
                <label><input type="checkbox" checked> Weekend Event Curation Digest</label>
                <label><input type="checkbox"> Special Guest Comic Pre-sales</label>
              </div>
            </div>
          </div>
        `}
      </div>

      <div style="height:70px;"></div>
    `;
  }

  // SCREEN 8: CONTEXTUAL AI CONCIERGE
  function renderScreen8() {
    return `
      <div class="app-top-header">
        <span style="font-family:var(--font-heading); font-size:16px; font-weight:800;">✨ Aura AI Concierge</span>
      </div>

      <div style="padding:16px; display:flex; flex-direction:column; gap:12px;">
        <div class="chat-bubble bot">
          👋 Hi Aravind! What kind of leisure experience or event are you looking for in ${appState.activeCity}?
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          <span class="prompt-suggestion-pill" onclick="window.auraApp.sendPrompt('Cheap standup comedy shows under ₹500')">🎭 Comedy under ₹500</span>
          <span class="prompt-suggestion-pill" onclick="window.auraApp.sendPrompt('Pottery workshops this weekend')">🎨 Pottery workshops this weekend</span>
          <span class="prompt-suggestion-pill" onclick="window.auraApp.sendPrompt('Acoustic live music near the beach')">🎵 Live music near beach</span>
          <span class="prompt-suggestion-pill" onclick="window.auraApp.sendPrompt('What is the ticket cancellation policy?')">ℹ️ Cancellation policy</span>
        </div>

        <div id="screen8-chat-feed" style="display:flex; flex-direction:column; gap:10px;">
          <div class="chat-bubble bot" style="margin-top:8px;">
            💡 <strong>Top Recommendation for You:</strong><br>
            <strong>Beginner Wheel Pottery Masterclass</strong> (Sat, 10:00 AM • ₹850 All-in)<br>
            <em>Artisan Studio, Mylapore • 4.9 ★ (86 reviews)</em>
            <div style="margin-top:8px;">
              <button class="btn-primary-action" style="padding:6px 14px; font-size:12px;" onclick="window.auraApp.openEvent('evt-02')">View Event Details ➔</button>
            </div>
          </div>
        </div>

        <div style="margin-top:14px; display:flex; gap:8px;">
          <input id="screen8-input" type="text" placeholder="Ask AI: 'Outdoor events this Sunday'..." style="flex:1; height:40px; padding:0 12px; border:1px solid var(--border-default); border-radius:var(--radius-sm); font-size:12px;" onkeydown="if(event.key==='Enter'&&this.value){window.auraApp.sendScreen8Prompt(this.value); this.value='';}">
          <button class="btn-primary-action" style="height:40px; padding:0 14px; font-size:12px;" onclick="const inp=$('screen8-input'); if(inp.value){window.auraApp.sendScreen8Prompt(inp.value); inp.value='';}">Ask</button>
        </div>
      </div>
    `;
  }

  // Master Render Dispatcher
  function renderScreen() {
    const viewport = $('app-viewport');
    if (!viewport) return;

    let html = '';
    switch (appState.currentScreen) {
      case 'screen-1': html = renderScreen1(); break;
      case 'screen-2': html = renderScreen2(); break;
      case 'screen-3': html = renderScreen3(); break;
      case 'screen-4': html = renderScreen4(); break;
      case 'screen-5': html = renderScreen5(); break;
      case 'screen-6': html = renderScreen6(); break;
      case 'screen-7': html = renderScreen7(); break;
      case 'screen-8': html = renderScreen8(); break;
      default: html = renderScreen1(); break;
    }

    viewport.innerHTML = html;
  }

  // Public Interface for Prototype Interactions
  window.auraApp = {
    navigateTo: navigateTo,

    setCategory: function (cat) {
      appState.activeCategory = cat;
      showToast(`Filtered category: ${cat}`, '🏷️');
      renderScreen();
    },

    toggleQuickChip: function (chipKey) {
      appState.selectedFilterChip = appState.selectedFilterChip === chipKey ? null : chipKey;
      showToast(appState.selectedFilterChip ? `Applied: ${chipKey}` : 'Filter removed', '⚡');
      renderScreen();
    },

    handleSearchInput: function (val) {
      appState.searchKeyword = val;
      renderScreen();
      // Keep focus on input after re-render
      setTimeout(() => {
        const inp = $('search-live-input');
        if (inp) {
          inp.focus();
          inp.setSelectionRange(inp.value.length, inp.value.length);
        }
      }, 10);
    },

    setSort: function (sortKey) {
      appState.sortBy = sortKey;
      showToast(`Sorted by: ${sortKey}`, '↕️');
      renderScreen();
    },

    removeFilter: function (filterKey) {
      appState.activeFilters[filterKey] = false;
      showToast(`Removed ${filterKey} filter`, '✕');
      renderScreen();
    },

    resetFilters: function () {
      appState.searchKeyword = '';
      appState.sortBy = 'relevance';
      appState.activeFilters = { weekend: false, under1000: false, cityOnly: false };
      showToast('All search filters reset', '🔄');
      renderScreen();
    },

    openEvent: function (evtId) {
      const found = EVENTS_CATALOG.find(e => e.id === evtId);
      if (found) {
        appState.selectedEvent = found;
        appState.selectedSlotIdx = 0;
      }
      navigateTo('screen-3');
    },

    setDate: function (dateStr) {
      appState.selectedDate = dateStr;
      showToast(`Selected date: ${dateStr}`, '📅');
      renderScreen();
    },

    setSlotIdx: function (idx) {
      const slot = appState.selectedEvent.slots[idx];
      if (slot && slot.status === 'soldout') {
        showToast('⚠️ This slot is sold out. Please select another slot.', '⚠️');
        return;
      }
      appState.selectedSlotIdx = idx;
      showToast(`Selected slot: ${slot.time}`, '⏱️');
      renderScreen();
    },

    changeQty: function (tierKey, delta) {
      const current = appState.ticketQuantities[tierKey] || 0;
      const next = Math.max(0, Math.min(6, current + delta));
      appState.ticketQuantities[tierKey] = next;

      // Synchronize stations count
      const total = appState.ticketQuantities.standard + appState.ticketQuantities.vip;
      appState.selectedStations = [];
      for (let i = 1; i <= Math.min(total, 4); i++) {
        appState.selectedStations.push(`Station ${i}`);
      }

      renderScreen();
    },

    toggleStation: function (num) {
      if (num === 5 || num === 6) {
        showToast('⚠️ Station already reserved by another attendee', '🔒');
        return;
      }
      const name = `Station ${num}`;
      const idx = appState.selectedStations.indexOf(name);
      if (idx >= 0) {
        appState.selectedStations.splice(idx, 1);
        showToast(`Deselected ${name}`, '⭕');
      } else {
        appState.selectedStations.push(name);
        showToast(`Selected ${name}`, '🏺');
      }
      renderScreen();
    },

    proceedToSummary: function () {
      const totalQty = appState.ticketQuantities.standard + appState.ticketQuantities.vip;
      if (totalQty === 0) {
        showToast('⚠️ Please select at least 1 ticket to proceed', '⚠️');
        return;
      }
      startHoldTimer();
      navigateTo('screen-5');
    },

    togglePromoCode: function () {
      appState.promoApplied = !appState.promoApplied;
      showToast(appState.promoApplied ? 'Coupon WELCOME100 applied (-₹100)' : 'Coupon removed', appState.promoApplied ? '🏷️' : '✕');
      renderScreen();
    },

    validateAndProceedToPayment: function (finalAmount) {
      const email = appState.guestDetails.email;
      if (!email || !email.includes('@')) {
        showToast('⚠️ Please enter a valid email for ticket delivery', '⚠️');
        return;
      }
      appState.paymentStatus = 'idle';
      navigateTo('screen-6');
    },

    triggerPaymentSimulation: function (isFailure = false) {
      const modal = $('simulated-payment-modal');
      if (modal) modal.style.display = 'flex';
      appState.paymentStatus = 'processing';

      setTimeout(() => {
        if (modal) modal.style.display = 'none';

        if (isFailure) {
          appState.paymentStatus = 'failed';
          appState.failureReason = 'Bank server timed out while awaiting UPI authorization.';
          showToast('Payment declined (Simulated)', '⚠️');
        } else {
          appState.paymentStatus = 'success';
          showToast('Payment confirmed! Digital Pass generated', '🎉');

          // Add to past bookings
          const newBooking = {
            id: 'AUR-2026-8841',
            title: appState.selectedEvent.title,
            date: appState.selectedDate,
            venue: appState.selectedEvent.venue,
            tier: `Standard Pass (${appState.ticketQuantities.standard} Qty)`,
            total: 1518,
            status: 'Confirmed'
          };
          appState.pastBookings.unshift(newBooking);
        }
        renderScreen();
      }, 750);
    },

    retryPayment: function () {
      this.triggerPaymentSimulation(false);
    },

    switchPaymentMethod: function (method) {
      appState.paymentMethod = method;
      appState.paymentStatus = 'idle';
      showToast(`Switched payment method to ${method.toUpperCase()}`, '💳');
      renderScreen();
    },

    returnToOrderReview: function () {
      appState.paymentStatus = 'idle';
      navigateTo('screen-5');
    },

    syncWallet: function () {
      showToast('Digital Pass synced to Apple / Google Wallet!', '📲');
    },

    syncCalendar: function () {
      showToast('Calendar invite saved (.ics)!', '📅');
    },

    openMaps: function () {
      showToast(`Opening maps to ${appState.selectedEvent.venue}...`, '🗺️');
    },

    toggleHeart: function (evtId) {
      const evt = EVENTS_CATALOG.find(e => e.id === evtId);
      const name = evt ? evt.title : 'Event';
      if (appState.savedEvents.has(evtId)) {
        appState.savedEvents.delete(evtId);
        showToast(`Removed from shortlist`, '✕');
      } else {
        appState.savedEvents.add(evtId);
        showToast(`Saved '${name.slice(0, 24)}...' to shortlist`, '❤️');
      }
      renderScreen();
      updateBottomNav();
    },

    clearSearch: function () {
      appState.searchKeyword = '';
      renderScreen();
    },

    openLocationModal: function () {
      const modal = $('location-modal-sheet');
      if (modal) modal.classList.add('open');
    },

    closeLocationModal: function () {
      const modal = $('location-modal-sheet');
      if (modal) modal.classList.remove('open');
    },

    selectCity: function (cityName) {
      appState.activeCity = cityName;
      window.auraApp.closeLocationModal();
      showToast(`📍 Switched discovery city to ${cityName}`, '📍');
      renderScreen();
    },

    openFilterModal: function () {
      const modal = $('filter-modal-sheet');
      if (modal) modal.classList.add('open');
    },

    closeFilterModal: function () {
      const modal = $('filter-modal-sheet');
      if (modal) modal.classList.remove('open');
    },

    setHistoryTab: function (tabKey) {
      appState.activeHistoryTab = tabKey;
      renderScreen();
    },

    toggleAiDrawer: function () {
      appState.aiDrawerOpen = !appState.aiDrawerOpen;
      const drawer = $('ai-concierge-sheet');
      if (drawer) drawer.classList.toggle('open', appState.aiDrawerOpen);
    },

    sendPrompt: function (promptText) {
      const feed = $('ai-chat-messages');
      if (!feed) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user';
      userBubble.textContent = promptText;
      feed.appendChild(userBubble);

      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble bot';

      if (promptText.toLowerCase().includes('cancellation') || promptText.toLowerCase().includes('refund')) {
        botBubble.innerHTML = `
          🛡️ <strong>Aura Guarantee:</strong><br>
          Full refund up to 24 hours before showtime. If you cannot attend, digital QR passes are 100% transferrable to friends via WhatsApp or Apple Wallet.
        `;
      } else {
        botBubble.innerHTML = `
          ✨ <strong>Top Match for You:</strong><br>
          <strong>Beginner Wheel Pottery Masterclass</strong> (Sat, 10:00 AM • ₹850 All-in)<br>
          <button class="btn-primary-action" style="padding:4px 10px; font-size:11px; margin-top:6px;" onclick="window.auraApp.toggleAiDrawer(); window.auraApp.openEvent('evt-02');">View Event Details ➔</button>
        `;
      }

      setTimeout(() => {
        feed.appendChild(botBubble);
        feed.scrollTop = feed.scrollHeight;
      }, 350);
    },

    sendScreen8Prompt: function (promptText) {
      const feed = $('screen8-chat-feed');
      if (!feed) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user';
      userBubble.textContent = promptText;
      feed.appendChild(userBubble);

      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble bot';
      botBubble.innerHTML = `
        ✨ <strong>Result for "${promptText}":</strong><br>
        Found 2 live events in ${appState.activeCity} matching your inquiry.
        <div style="margin-top:6px;">
          <button class="btn-primary-action" style="padding:4px 10px; font-size:11px;" onclick="window.auraApp.openEvent('evt-01')">View Comedy All-Stars ➔</button>
        </div>
      `;

      setTimeout(() => {
        feed.appendChild(botBubble);
      }, 300);
    },

    toggleTheme: function () {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      appState.theme = next;

      const btn = $('theme-mode-toggle');
      if (btn) btn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  };

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    navigateTo('screen-1');

    // Attach Bottom Navigation Listeners
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        if (target === 'explore') navigateTo('screen-1');
        else if (target === 'browse') navigateTo('screen-2');
        else if (target === 'saved') navigateTo('screen-7');
        else if (target === 'tickets') navigateTo('screen-6');
      });
    });

    // Attach Evaluator Screen Switcher
    document.querySelectorAll('.screen-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        navigateTo(pill.dataset.screen);
      });
    });
  });

})();
