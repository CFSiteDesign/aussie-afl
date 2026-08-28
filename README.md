# Aussies In × Mad Monkey — AFL Grand Final

One landing page holding every Mad Monkey AFL Grand Final event across South East Asia, so
Aussies In can share a single link across their group chats and socials.

## What's on the page

| Section | Purpose |
| --- | --- |
| Hero | Grand Final date, the Aussies In speech bubble, and the `AUSSIESIN` code |
| Ha Giang Loop | The hero package, exclusive to Aussies In — no code needed |
| Pick your spot | Searchable, country-filtered grid of every participating hostel |
| How it works | Three steps, ending on the code reminder |
| Code callout | The `AUSSIESIN` checkout reminder, click-to-copy |

**Dates:** Grand Final is Saturday 26 September; the Ha Giang Loop departs Sunday 27 September.

**The code:** `AUSSIESIN` goes in at checkout on every event ticket — it seats guests at an Aussies
In table and lets Aussies In track bookings. The Ha Giang Loop package is the one exception: it is
attributed to Aussies In already.

## Brand system

Built to the Mad Monkey poster system. The rules below are load-bearing — read before changing
anything visual.

**Colour.** Only the eight canonical poster colours, max two or three per composition. This page
runs **yellow `#ffc000` + green `#03ff01`** on the **Mad Black `#0a0a0a` / Bone `#f5efe2` / Paper
`#ffffff`** anchors. Every value is a CSS custom property in
[`src/index.css`](src/index.css) (`--mm-yellow`, `--mm-green`, …); the full palette is declared
there, so reaching for another colour means using a token that already exists, not inventing one.

**Type.** Montserrat only. 900/Black uppercase for display (`.font-display`), 400–600 sentence-case
for body. Bungee is reserved for "WINNER"-style sticker accents and is not loaded here.

**Shadows.** Hard-offset, never blurred — `.mm-shadow` (8px), `.mm-shadow-sm` (4px),
`.mm-shadow-lift` (lifts on hover), `.mm-press` (presses in on hover). No `blur`, no `drop-shadow`.

**Radius.** `0px` everywhere. The only rounded shape is the pill speech-bubble, which is a brand
device, not a rounded box.

**Brand devices** live in [`src/components/brand/`](src/components/brand) — one to three per
layout:

- `AllInSticker` — the ALL IN mark, always slapped on at a tilt. The artwork is white-on-black, so
  it needs a dark or mid-tone ground; do not invert it.
- `Starburst` — spiky burst, generated from a point count.
- `SpeechBubble` — pill bubble with a tail.
- `Wordmark` / `CornerWordmark` — the Mad Monkey mark, bottom-right of every full-frame section at
  ~130px with a 48px safe area. Non-negotiable.

**Photography.** Real Mad Monkey photography only — faces, motion, sun. No empty landscapes, no
posed corporate shots, no stock. Every photo carries `.mm-photo`, which pushes saturation, warms
the mid-tones and crushes the blacks.

## Adding a location as it goes live

All content lives in [`src/data/events.ts`](src/data/events.ts) — no component edits needed. Find
the location and fill in its ticket URLs:

```ts
{
  id: 'bangkok',
  city: 'Bangkok',
  country: 'Thailand',
  tickets: [
    { label: 'Unlimited Drinks + Parmi', url: 'https://madmonkeyhostels.com/tours-events/...' },
    { label: 'Unlimited Drinks', url: 'https://madmonkeyhostels.com/tours-events/...' },
  ],
},
```

A location with no ticket URLs renders as **Coming soon**; as soon as one URL lands, the card moves
to the front of the grid and shows an **On sale** badge. Run `npm test` afterwards — the suite in
`src/test/events.test.ts` checks the line-up against the brief.

## Asset provenance

The photography in `src/assets/` (`mm-*.jpg`) and the brand marks are real Mad Monkey assets,
carried over from the ALL IN squad-trips build rather than the brand Drive, which was not reachable
from the connected Google account.

The two floating cutouts (`footy-cutout.png`, `beer-cutout.png`) are generated props serving as the
photo-cutout device — there is no AFL ball anywhere in the Mad Monkey library. Swap them for real
cutouts if any turn up.

## Development

```sh
npm install
npm run dev
```

Runs on port 5182 via the `aussie-afl` launch config. Other scripts: `npm run build`,
`npm run lint`, `npm test`.

## Lovable

This project is also wired to [Lovable](https://lovable.dev/projects/5c56eb43-1f5e-466b-9386-41dc90593525).
Pushing to `main` syncs back into the Lovable workspace.
