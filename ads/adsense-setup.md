# JellyBolt Games — AdSense Setup Guide

## Step 1: Register for Google AdSense
1. Go to [https://adsense.google.com](https://adsense.google.com)
2. Sign in with your Google account
3. Enter your website URL (e.g., `jellybolt-games.github.io` or your custom domain)
4. Select your country and agree to the Terms of Service
5. Click **Start using AdSense**

## Step 2: Site Verification
1. Google will provide a verification code snippet
2. Add it to the `<head>` section of your site's main `index.html`
3. Wait for Google to review your site (typically 1-14 days)

## Step 3: Create Ad Units
Once approved, create these ad units in your AdSense dashboard:

### Banner Ad (728x90 Leaderboard)
1. Go to **Ads** → **By ad unit** → **Display ads**
2. Name it: `JellyBolt Banner`
3. Choose **Fixed size**: 728 x 90
4. Copy the ad unit code and note the `data-ad-slot` value

### Interstitial Ad (336x280 Large Rectangle)
1. Create another display ad unit
2. Name it: `JellyBolt Interstitial`
3. Choose **Fixed size**: 336 x 280
4. Copy the ad unit code and note the `data-ad-slot` value

## Step 4: Paste Ad Unit IDs into Games
In each game's `index.html`:

1. **Replace `ca-pub-XXXXXXXXXXXXXXXX`** with your AdSense publisher ID (found in AdSense dashboard under Account → Account information)
2. **Uncomment the `<script>` tag** in the `<head>` section
3. **Uncomment the `<ins class="adsbygoogle">` tags** in both banner and interstitial divs
4. **Replace `data-ad-slot="XXXXXXXXXX"`** with your actual ad unit slot IDs
5. **Remove the placeholder `<div>` elements** (the ones with dashed borders)

## Step 5: Verify Ads Are Showing
1. Deploy your updated games
2. Visit each game page and verify ads appear
3. Check the AdSense dashboard for impressions

## Revenue Optimization Tips
- **Banner ad** at the bottom won't interfere with gameplay
- **Interstitial ads** show every 2nd death/game-over to avoid annoying players
- Consider adding **rewarded ads** (e.g., "Watch ad for extra life") in the future
- Monitor your **RPM** (revenue per 1000 impressions) and adjust placement

## AdSense Policies — Important!
- Do NOT click your own ads
- Do NOT ask others to click your ads
- Do NOT place ads where they might get accidental clicks
- Ensure your site has a **Privacy Policy** page
- Games must have **original content** (which JellyBolt games do!)

## Expected Revenue
- Casual game sites typically earn $1-5 RPM
- With 10,000 daily pageviews, expect $10-50/day
- Revenue grows with traffic — focus on SEO and social sharing
