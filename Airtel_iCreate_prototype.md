# Figma Prototype Prompt — Altura ONE Unified App (v2, gap-mitigated)

## Overview
Design a high-fidelity mobile app prototype for "Altura ONE" — a unified digital ecosystem app that consolidates mobile, broadband, OTT, AI tools, IoT, and payments into a single household dashboard. The app is the consumer-facing execution layer for Altura Communications' consolidation strategy.

This version incorporates fixes for 11 gaps identified against the primary research (n=281 survey + 5 IDIs): trust/reassurance messaging, migration friction, the IoT retail acquisition moment, KYC compliance, an IoT-to-broadband-to-mobile upsell cascade, and several data-consistency corrections.

## Design System
- **Primary Color:** #E40000 (Airtel Red)
- **Secondary:** #1B3A5C (Navy), #FFFFFF (White), #F5F5F5 (Light Gray)
- **Accent:** #27AE60 (Green for positive), #8E44AD (Purple for AI)
- **Font:** Inter or SF Pro (clean, modern)
- **Corner Radius:** 12px for cards, 24px for buttons
- **Style:** Minimal, card-based, bottom navigation, glassmorphism accents

## Screen Flow (17 Screens)

### Screen 1: Splash Screen
- Altura ONE logo centered on white background
- Tagline: "One Home. One Provider. One Bill."
- Red gradient accent at bottom

### Screen 2: "Your Current Setup" — The Before State
*Problem-first sequencing: establish the pain before pitching the offer.*
- Header: "This is your digital life today"
- Five vertical cards representing a typical fragmented setup:
  - Jio SIM — ₹299/mo (mobile icon)
  - Local ISP — ₹600/mo (WiFi icon)
  - Netflix — ₹199/mo (streaming icon)
  - PhonePe — separate app (payments icon)
  - Ring Camera — own WiFi (IoT icon)
- Below the cards: "Total: ₹1,098+ per month across 5 apps, 5 bills, 5 logins"
- Animated transition: the five cards compress and merge into one Altura ONE card
- New state: "With Altura ONE: ₹748/mo. One app. One bill. Everything."
- CTA: "See How It Works" → Screen 3

### Screen 3: Onboarding — BOGO FreeStart Offer
- Hero card: "Subscribe to Broadband, Get 6 Months FREE Mobile Recharge"
- Illustration of a house with WiFi signal + mobile icon
- CTA: "Explore Plans" (red button)
- Fine print: "Unlimited calls, messages, 1.5GB daily data — zero cost for 6 months"

### Screen 4: Plan Builder — "Your WiFi, Your Way"
- Step-by-step builder interface:
  - Step 1: Choose Speed (40/100/200/300 Mbps) — slider with price updating live
  - Step 2: Choose Duration (1/3/6/12 months) — discount badges showing 5%/10%/15%
  - Step 3: Add OTT (toggle chips: Hotstar ₹49, Netflix ₹149, Prime ₹99)
  - Step 4: Add AI Tools (toggle chips: Perplexity Pro ₹0, Adobe Express ₹0, ChatGPT Plus "Unlocks Month 3")
- Running total at bottom with "BOGO: FREE mobile included" badge
- Installation line below duration selector: "Installation: within 48 hours of order in pilot cities, guaranteed. Track your technician live." (national rollout phased — see Screen 7)
- Link: "Switching from another provider?" → Screen 7 (Switching Concierge)
- CTA: "Build My Plan" → "Review & Pay"

### Screen 5: Plan Summary & Checkout
- Clean summary card showing selected speed, duration, OTT, AI tools
- Price breakdown: Broadband ₹699 + OTT ₹49 + AI ₹0 = ₹748/mo
- BOGO badge: "FREE mobile recharge worth ₹200/mo for 6 months"
- Savings callout: "You save ₹1,200 over 6 months vs. buying separately"
- Payment options: UPI, Card, Altura Payments
- CTA: "Pay ₹748 & Activate"

### Screen 6: Home Dashboard — Unified Household View
- Top: Greeting "Hi [Name]" + household plan name "Altura ONE Family"
- **Usage Cards Row:**
  - Mobile: 1.2GB / 1.5GB used today (circular progress)
  - Broadband: 142GB used this month (bar)
  - OTT: Last watched — "Mirzapur S3" on Prime
- **AI Tools Section:**
  - Perplexity Pro — Active (green dot)
  - Adobe Express — Active (green dot)
  - ChatGPT Plus — "Unlocks in 47 days" (locked icon with countdown)
- **IoT Devices:** 3 connected (camera, speaker, smart bulb) — with status dots
- **Bill Summary:** "Next bill: ₹748 on Aug 15" — single unified bill
- Bottom nav: Home | Plans | AI Tools | IoT | Account

### Screen 7: "Your Switching Concierge" — Migration Friction Killer
*Addresses the 27% "switching feels too complicated" barrier — porting, cancellation, installation lag.*
- Header: "We handle the messy part"
- Three task cards, each with status indicator and CTA:
  - **Port Your Number:** "Transfer your existing mobile number to Altura. Takes 3 working days. We handle the paperwork." Progress tracker: Request → Approved → Active.
  - **Cancel Old Providers:** "We'll help you exit your current broadband, DTH, and OTT subscriptions." Cancellation assistant with provider-specific instructions (Jio Fiber, Tata Play, local ISP) and pre-written cancellation messages, copy-paste or send-in-app.
  - **Installation Tracker:** "Your broadband installation is scheduled for [date]. Track your technician in real time." Live map view, SLA badge: "Guaranteed within 48 hours in pilot cities, or ₹200 bill credit."
- Bottom reassurance banner: "92% of pilot-city installations completed within 24 hours"
- Micro-copy: "Ish from Pune told us installation delay was his #1 concern. So we fixed it."

### Screen 8: AI Tools Hub
- Three cards:
  - Perplexity Pro: "Research & Ask Anything" — "Open" button
  - Adobe Express: "Design & Create" — "Open" button
  - ChatGPT Plus: Locked state with progress ring showing "47 days to unlock"
    - Below: "Stay subscribed to unlock ChatGPT Plus as your loyalty reward"
    - Micro-copy: "Your conversations, style, and preferences — all waiting for you"
- Bottom: "Why AI Tools?" explainer with value proposition

### Screen 9: ChatGPT Plus Unlock Celebration
- Full-screen celebration animation (confetti/particles)
- "Congratulations! ChatGPT Plus is now active"
- "Your conversation history, writing style, and preferences are ready"
- CTA: "Start Using ChatGPT Plus"
- Secondary: "Explore what's new in ChatGPT"

### Screen 10: "Your Altura Safety Net" — Trust & Reassurance
*Directly addresses trust/fragmentation anxiety (Bansita's bankruptcy fear, Ritika's skepticism).*
- Header: "What if something goes wrong?"
- Four reassurance cards:
  - **Service Guarantee:** "If your broadband is down for more than 4 hours, we auto-credit your account. No complaint needed." Shield icon.
  - **No Lock-In:** "Leave anytime. No exit fees on month-to-month plans. Your data, your choice." Unlock icon.
  - **Data Portability:** "Your AI conversation history, OTT watchlists, and IoT device configs are yours. Export anytime with one tap." Download icon.
  - **Fallback Connectivity:** "If your fiber goes down, your Altura router auto-switches to 4G/5G backup so you stay online." Signal icon with fallback arrow.
- Bottom section: "Network Diagnostics for Your Area" — live signal-strength indicator (Excellent/Good/Fair) based on real-time diagnostics for the user's pin code. *(Qualitative only — no competitor comparison numbers unless independently sourced.)*
- Footer: "Bansita worried: 'What if the company goes down and everything stops?' We built safety nets so that never happens."

### Screen 11: "IoT Unboxing Discovery" — The Retail Entry Ramp
*Captures the defining acquisition moment of the IoT SIM lever — the entry point for non-Altura customers.*
- Full-screen illustration: hands opening a smart camera box. Inside, alongside the camera, sits a small red Altura SIM card and a compact WiFi hotspot device with a "FREE" sticker.
- Overlay text: "Found this inside your new smart camera?"
- Step-by-step activation flow:
  - Step 1: "Insert the Altura SIM into the hotspot device"
  - Step 2: "Power on. The hotspot auto-connects." (LED indicator glowing green)
  - Step 3: "Complete quick KYC verification" — Aadhaar-based eKYC in-app, camera captures Aadhaar + selfie, "Verified in under 2 minutes." *(Required before activation — DoT compliance.)*
  - Step 4: "Your smart camera is now online. Add more devices anytime."
- Partner logos at bottom: Croma | Reliance Digital | Amazon
- CTA: "Set Up My IoT SIM" → Screen 12
- Secondary CTA: "I don't have a smart device yet — browse compatible devices"
- Micro-copy: "No existing Altura connection needed. This SIM works independently."

### Screen 12: IoT Device Dashboard
- Header: "Your Connected Home"
- Device cards in a grid:
  - Living Room Camera — Online (green) — "Last motion: 2 hrs ago"
  - Smart Speaker — Online — "Playing: Spotify"
  - Smart Bulb — Bedroom — On (warm white)
  - + Add Device (dashed card)
- Network health indicator: "IoT Hotspot: Strong signal | 3 devices connected"
- Bottom: "All devices run on your free Altura IoT SIM — no extra data charges"

### Screen 13: Smart Plan Optimizer
- Header: "Your Plan Optimizer"
- AI recommendation card:
  - "Based on your usage this month, you could save ₹120/mo by switching to 100Mbps"
  - Current: 200 Mbps (avg usage: 85 Mbps)
  - Suggested: 100 Mbps — ₹699/mo → ₹579/mo
  - "Switch Now" | "Keep Current Plan"
- Usage graph showing daily consumption pattern
- Tip: "You use 73% of your data between 7-11 PM"

### Screen 14: "Grow Your Ecosystem" — IoT-to-Broadband-to-Mobile Upsell
*Triggers the conversion cascade the financial model depends on.*
- Header: "You've been on IoT SIM for 30 days. Here's what's next."
- Usage summary card: "Your 3 IoT devices used 4.2 GB this month on IoT SIM"
- Upsell prompt — two cards:
  - **Add Home Broadband:** "Your IoT devices would run even faster on Altura Fiber. Get 100 Mbps unlimited for ₹699/mo — and your IoT SIM data becomes free forever." CTA: "Add Broadband"
  - **Add Mobile Too:** "Already have broadband? Add your mobile for ₹199/mo and get the full Altura ONE experience." Badge: "Save ₹120/mo vs buying separately." CTA: "Add Mobile"
- Progress visualization: three concentric circles expanding outward:
  - Inner (green, filled): "IoT SIM — Active"
  - Middle (pulsing): "Broadband — Add now?"
  - Outer (dashed): "Mobile + OTT + AI — Complete ecosystem"
- Bottom: "You're 1 step away from becoming an Altura ONE household"

### Screen 15: Family Dashboard
- Header: "Sharma Family — 4 Members"
- Member cards:
  - Dad: Postpaid 75GB | 3.2GB used today | OTT: Prime
  - Mom: Prepaid Unlimited | 1.1GB used | OTT: Hotstar
  - Son: BOGO Free SIM | 1.5GB used | AI: ChatGPT — parental controls toggle
  - Daughter: BOGO Free SIM | 0.8GB used | AI: Perplexity — parental controls toggle
- Total household spend: ₹1,248/mo (single bill)
- Collapsible section: "Your Consolidation Savings"
  - Before: "5 providers, 5 bills = ₹2,180/mo" (Jio ₹299, Local ISP ₹600, Netflix ₹199, DTH ₹350, ChatGPT ₹140/mo amortized, misc ₹592)
  - After: "Altura ONE Family = ₹1,248/mo"
  - Savings: "₹932/mo = ₹11,184/year saved"

### Screen 16: Post-BOGO Upgrade Prompt (Day 180)
- Header: "Your free mobile period is ending"
- Three clear paths:
  - Option A: "Continue Mobile at ₹199/mo" — add to existing broadband
  - Option B: "Upgrade to Altura ONE Bundle" — ₹999/mo for everything (broadband + 2 mobiles + OTT + AI + IoT), badge "Save 22% vs buying separately"
  - Option C: "I only need broadband" — keep broadband, drop mobile
- Nudge: "64.4% of users like you chose to continue or upgrade" — source micro-text: "Based on 281 surveyed users, Q19"

### Screen 17: Altura ONE Super App — Payments & Transition Helper
- **Transition Helper** section at top: "Pay your final bills to old providers right here" — quick-pay cards for Jio (final prepaid), Local ISP (last month), Netflix (cancel + pay), Tata Play (exit). "Close old accounts without switching apps."
- Quick actions: Recharge | Pay Bill | Send Money | Scan QR
- Recent transactions list
- Rewards: "You earned 250 Altura Points this month"
- Offers carousel: "Refer a friend, get ₹200 cashback"

## Interaction Notes
- All screens should have smooth transitions (slide, fade)
- Plan builder should have real-time price updates as user toggles options
- ChatGPT unlock countdown should feel like a game progression mechanic
- IoT dashboard should show live status indicators
- Screens 6, 8, 9, 10, 12, 13, 14, 16 represent different points in time (Day 1 through Day 180+) rather than a single linear sitting — label each with a subtle day/time marker when presenting the clickable flow so reviewers don't read it as one continuous session
- Use haptic feedback suggestions for key CTAs

## Deliverable Format
- Figma frames: iPhone 15 Pro (393 x 852px)
- Include a clickable prototype flow connecting all 17 screens
- Export as PDF for slide deck inclusion
