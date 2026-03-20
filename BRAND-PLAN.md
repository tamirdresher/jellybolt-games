# JellyBolt Games — Brand Plan

## Mission

Create and publish indie games while documenting the journey through dev logs, tutorials, and community content. Monetize through game sales, assets, and cross-promotion with tech content brands.

## Revenue Streams

| Stream           | Platform         | Status           | Notes                              |
|-----------------|------------------|------------------|------------------------------------|
| Game Sales       | Itch.io          | ✅ Active         | Published games                    |
| Game Sales       | Steam            | 📋 Planned        | Future releases                    |
| Digital Products | Gumroad          | ✅ Active         | Game assets, templates             |
| Tips/Donations   | BuyMeACoffee     | ⏳ Pending setup  | buymeacoffee.com/jellyboltgames    |
| Ad Revenue       | Google AdSense   | ⏳ Pending signup | Game site monetization             |
| Affiliates       | Multiple         | ⏳ Pending signup | Game dev tools, hosting            |

## Distribution Channels

| Channel       | Purpose                      | Frequency      | Status         |
|---------------|------------------------------|----------------|----------------|
| Itch.io       | Game distribution            | Per release    | ✅ Active       |
| YouTube       | Dev logs, tutorials          | Weekly         | 📋 Planned     |
| Twitter/X     | Game updates, screenshots    | 2-3x/week      | 📋 Planned     |
| Reddit        | r/gamedev, r/indiegaming     | Weekly         | 📋 Planned     |
| Discord       | Community                    | Ongoing        | 📋 Planned     |

## Automation

### Current
- Itch.io deployment via stored credentials
- Game catalog tracked in `GAMES_CATALOG.md`

### Planned
- Automated build pipelines for game releases
- Screenshot/trailer generation
- Dev log video automation
- Social media game update posts

## Cross-Brand Promotion

| From              | To                | Method                               |
|-------------------|-------------------|---------------------------------------|
| JellyBolt Games   | TechAI Explained  | Game dev tutorials → tech content     |
| JellyBolt Games   | Content Empire    | Dev logs → article syndication        |
| TechAI Explained  | JellyBolt Games   | GameDev briefs link to games          |

## Content Calendar

### Per Release
- Build and test game
- Create store listing and screenshots
- Publish to Itch.io (and Steam if applicable)
- Write dev log / postmortem article
- Share on social media and Reddit

### Weekly
- 1 dev log or tutorial
- Social media updates (screenshots, progress)
- Community engagement

### Monthly
- Review game analytics
- Plan next game or update
- Update store listings

## Key Metrics
- Game downloads and sales (Itch.io)
- Gumroad asset sales
- YouTube dev log views
- Community size (Discord, social)
- Revenue per game

## Session History

### March 19–20, 2026 — Major Build Session
- **Agents used:** 87 AI agents (squad pattern across all 3 brands)
- **Files created/modified:** 250+ (across all repos)

**What was built:**
- 16 HTML5 Canvas games (single-file, 7-16 KB each, instant load)
- Landing page (index.html) — 230-line responsive page with game grid + ad placements
- Shared monetization module (games/shared/monetization.js, 16.8 KB)
  - AdSense integration, support buttons, cross-game promo, social sharing
- Google Play store listings for 3 games (metadata.json + listing.md)
- Privacy policy (HTML + Markdown)
- GAMES_CATALOG.md with full pricing structure
- REVENUE_STRATEGY.md with IAP designs, battle pass, cosmetics, subscriptions
- AdSense setup guide (ads/adsense-setup.md)
- Game concepts doc for 3 planned games (BrainRot, Bounce Blitz, Idle Critter Farm)
- CI workflow (ci.yml) for JSON validation
- Affiliate configs (config/affiliates.json)
- itch.io deployment for all 16 games

**Key decisions:**
- Vanilla HTML5 Canvas + JS (no frameworks = instant load, tiny files)
- itch.io as primary distribution (active), Steam planned for Dungeon Bolt
- Tiered pricing: Free (11), Pay-What-You-Want (4), Premium $2.99 (1)
- Ethical monetization: no loot boxes, no pay-to-win, no energy gates
- RevenueCat for future IAP/subscription management
- All games include shared monetization.js for consistent ad/support integration
- Year 1 revenue target: ~$182K across 3 flagship games
