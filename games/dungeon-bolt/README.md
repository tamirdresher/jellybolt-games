# Dungeon Bolt 🗝️⚡

A dungeon crawler puzzle game by JellyBolt Games.

## Description

Navigate a procedurally generated 10×10 dungeon, collect keys, dodge patrolling guards, avoid hidden traps, and find the exit! Each of the 10 levels gets progressively harder with faster enemies and more traps.

## How to Play

1. **Collect 3 keys** 🗝️ scattered around the dungeon
2. **Avoid guards** 💀 — they patrol between two points and deal damage on contact
3. **Watch your step** — hidden traps ⚠️ are invisible until triggered!
4. **Find the exit** 🚪 — unlocked once you have all 3 keys
5. **Score points** by collecting coins 💰 and beating levels quickly

## Controls

| Input | Action |
|-------|--------|
| Arrow Keys / WASD | Move player |
| Swipe (mobile) | Move player |

## Tile Legend

| Tile | Meaning |
|------|---------|
| 🧙 | Player (you) |
| 🚪 | Exit (unlocked) |
| 🔒 | Exit (locked — need 3 keys) |
| 🗝️ | Key collectible |
| 💰 | Coin (score points) |
| 💀 | Guard (enemy) |
| ⚠️ | Revealed trap |
| ⬜ | Floor (may hide a trap!) |
| ⬛ | Wall (impassable) |

## Scoring

- **Coins**: level × 10 points each
- **Time Bonus**: max(0, 300 − seconds) × level
- **HP Bonus**: remaining HP × 50 × level
- High score saved in your browser (localStorage)

## Game Features

- ✅ 10 progressively harder levels
- ✅ Procedurally generated dungeons (different every run!)
- ✅ Patrolling enemies with pathfinding
- ✅ Hidden traps revealed on contact
- ✅ Web Audio sound effects (no files needed)
- ✅ Mobile-friendly with touch swipe controls
- ✅ Works offline (no external dependencies)
- ✅ High score persistence

## Screenshot Prompt (for itch.io thumbnail)

> Dark dungeon scene with emoji tiles on a 10×10 grid. A wizard emoji (🧙) navigates stone corridors with glowing golden keys (🗝️), a skull enemy (💀), warning traps (⚠️), and a door exit (🚪) in the corner. Dark purple/black background with dungeon atmosphere. Style: pixel art, retro.

## Technical Details

- **Single file**: `index.html` — no build step required
- **No external JS dependencies** — pure vanilla JavaScript
- **Audio**: Web Audio API (AudioContext) for procedural sound effects
- **Responsive**: Works on screens as small as 320px wide
- **AdSense**: Integrated banner and interstitial ad slots

## Play Online

- [JellyBolt Hub](../../index.html)
- [itch.io](https://jellyboltgames.itch.io/dungeon-bolt)
