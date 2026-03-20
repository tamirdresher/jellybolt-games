# JellyBolt Games — Project Status
Last updated: 2026-03-20

## Brand Identity
- **Name:** JellyBolt Games (JellyBolt⚡)
- **NEVER mention "Tamir Dresher"** — independent brand
- **Landing page:** `index.html` (230-line responsive page with game grid)
- **itch.io:** jellybolt.itch.io
- **Contact:** tdsquadai@gmail.com

## Games Published (16)
All games located in `games/` — each is a single HTML5 Canvas file (7-16 KB, instant load):

### Free Games (11) — Pay What You Want ($0 minimum)
1. **BrainRot Quiz Battle** — Trivia/quiz
2. **Bounce Blitz** — Hyper-casual arcade
3. **Card Clash** — Card game
4. **Code Conquest** — Programming-themed
5. **Gravity Dash** — Physics arcade
6. **Light Trail** — Trail/reflex
7. **Memory Matrix** — Memory puzzle
8. **Pixel Tower** — Tower building
9. **Space Trader** — Space trading sim
10. **Word Rush** — Word game
11. **Bolt Breaker** — Breakout-style

### Pay What You Want ($1-2 suggested)
12. **Neon Snake** — $1 suggested
13. **Asteroid Dash** — $1 suggested
14. **Hex Match** — $1 suggested
15. **Rhythm Tap** — $2 suggested

### Premium
16. **Dungeon Bolt** — $2.99 (flagship roguelike RPG)

### Shared Assets
- `games/shared/monetization.js` (16.8 KB) — Global monetization module
  - AdSense banner & interstitial ad slots
  - Support button + donation link
  - Cross-game promotion carousel
  - Social sharing buttons
  - Full game catalog (all 16 games)
- `games/shared/games-menu.html` — Cross-game navigation
- `games/shared/ads.js` — Ad integration

## Store Listings
Located in `store-listings/`:
- `privacy-policy.md` + `privacy-policy.html` — Shared privacy policy
- `bounce-blitz/` — listing.md, metadata.json
- `brainrot-quiz/` — listing.md, metadata.json, icon.png, feature-graphic.png
- `code-conquest/` — listing.md, metadata.json, icon.png, feature-graphic.png
- `idle-critter-farm/` — Empty (planned game)

**metadata.json format:** Google Play compatible (title, description, category, rating, tags)

## Landing Page (index.html)
- Hero header with brand logo + tagline
- Stats: "16 Games", "100% Free", "0 Downloads Needed"
- Games grid (dynamically generated from JS array)
- Game badges: Popular, New, Premium
- 4 ad placements (header 728x90, 2x sidebar 300x250, footer 728x90)
- Support section: BuyMeACoffee, itch.io, social links
- AdSense scripts ready (publisher ID placeholder)

## Monetization

### Active
- **itch.io:** jellybolt.itch.io — 16 games published
- **Gumroad:** tdsquad.gumroad.com — 3 product IDs configured

### Pending
- **Google AdSense** — Placeholder in all games + landing page (needs real publisher ID)
- **BuyMeACoffee** — buymeacoffee.com/jellyboltgames (pending setup)
- **Unity Affiliate** — pending signup
- **JetBrains Affiliate** — pending signup

### IAP & Revenue Design (REVENUE_STRATEGY.md)
- **Cosmetic items:** Skins, themes, emotes, badges ($5-25)
- **Battle Pass:** Seasonal $20/season (free + premium tiers)
- **Rewarded ads:** Optional 30s video for bonus coins/lives
- **VIP subscription:** $15/month for idle game content
- **Revenue projections:** ~$182K Year 1 target (3 games combined)
- **Billing:** RevenueCat (free up to $2.5K MTR)
- **Ethics:** No loot boxes, no pay-to-win, no energy gates, no data selling

## Configuration
- `config/affiliates.json` — All affiliate/monetization platform configs
- `.env.example` — Environment variable template

## Documentation
- `docs/GAME_CONCEPTS.md` — 3 planned games:
  1. BrainRot Quiz Battle (in development)
  2. Bounce Blitz (design phase)
  3. Idle Critter Farm (design phase, Hebrew support planned)
- `GAMES_CATALOG.md` — Complete game catalog with pricing
- `ads/adsense-setup.md` — AdSense integration guide

## GitHub Actions
- `ci.yml` — Validates JSON files + checks required directories

## Pending Actions
- [ ] Register real AdSense publisher ID
- [ ] Set up BuyMeACoffee page
- [ ] Submit to Google Play (4 games have store listings ready)
- [ ] Create Steam listing for Dungeon Bolt
- [ ] Create YouTube channel for dev logs
- [ ] Set up Discord community
- [ ] Create social accounts (X/Twitter, Reddit)
- [ ] Add FUNDING.yml for GitHub Sponsors
- [ ] Build Idle Critter Farm (Hebrew support)
- [ ] Create more store listing assets (icons, screenshots)
