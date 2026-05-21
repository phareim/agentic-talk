# Handoff: Agentisk Koding — Hva nå?!

Slide deck for a **Kode59** talk at Folkebiblioteket. Norwegian Bokmål. ~32 slides, Murakami-homage cover, Miles brand styling.

> *"Hva jeg snakker om når jeg snakker om kode"* — tittel-homage til Murakami.

---

## What this bundle is

This is **not** a design spec for a React/Vue/Swift app. It is a **self-contained HTML slide deck**, ready to present in a browser, edit in Claude Code, and export to PPTX/PDF as needed.

The handoff is here so you can:

1. Open the deck locally in Claude Code (or any editor).
2. Make further edits — copy, layout, speaker notes — directly in `Agentisk Koding.html`.
3. Re-export to PPTX/PDF using the same export skills available in the original chat environment, or print to PDF from the browser.

If you instead want to *port* the deck visuals into another framework (e.g. embed slides inside a React docs site), use `Agentisk Koding.html` as the visual reference — the file is fully commented per-slide and uses Miles design tokens documented below.

---

## Fidelity

**High-fidelity.** Final colors, type, spacing, and per-slide layouts. Built at 1920×1080 (16:9) via the `<deck-stage>` web component, which auto-scales to any viewport and letterboxes on black.

---

## How to run

Open `Agentisk Koding.html` in a browser. That's it — no build step, no server needed (though a local static server like `python -m http.server` avoids any font-loading quirks).

- **Navigation**: arrow keys, space, or click. URL hash holds slide index.
- **Print to PDF**: Cmd/Ctrl-P → "Save as PDF". `<deck-stage>` handles one-page-per-slide.
- **Speaker notes**: stored in `<script type="application/json" id="speaker-notes">` near the bottom of the HTML; one entry per slide, same order.
- **Tweaks panel**: toggleable controls live in `tweaks-app.jsx` + `tweaks-panel.jsx`.

---

## File map

```
design_handoff_agentisk_koding/
├── README.md                      ← this file
├── Agentisk Koding.html           ← the deck (32 slides, 2254 lines)
├── Whiteboard Sketch.html         ← a hand-drawn whiteboard storyboard companion
├── deck-stage.js                  ← scaling/nav/print web component
├── image-slot.js                  ← drag-drop image placeholders
├── tweaks-app.jsx                 ← deck-specific tweak controls
├── tweaks-panel.jsx               ← generic tweaks UI primitives
└── assets/
    ├── miles.css                  ← Miles design tokens (colors, type, spacing)
    ├── fonts/
    │   ├── gelica/                ← Gelica TTF (display serif, proprietary)
    │   └── dm-sans/               ← DM Sans TTF (body sans)
    └── logos/                     ← Miles wordmarks + M-icon PNGs
```

Also pulled from Google Fonts at runtime: **Caveat** and **Kalam** (handwritten accents on a few slides), **JetBrains Mono** (code/CLI slide).

---

## Slide outline

| # | Label | Notes |
|---|---|---|
| 01 | Tittel | Murakami homage — black band, red sun, river, walking figure |
| 02 | Hei jeg er | Speaker intro placeholder |
| 03 | Agenda | 4-part agenda |
| 04 | Del 1 — Historie | Burgunder divider, pie-chart through-line |
| 05 | Tidslinjen | Timeline 2017 → 2026 |
| 06 | 2017 — Attention is all you need |
| 07 | 2022 — ChatGPT |
| 08 | 2024 — Tool-use |
| 09 | 2025 — Claude Code & vibe coding |
| 10 | Karpathy 2025 → 2026 | Vibe coding → agentic engineering |
| 11 | 2026 — Hva nå |
| 12 | Modellene er gode nok | Chat → agentic |
| 13 | Ny kapabilitet → ny UX → ny prosess |
| 14 | Del 2 — Getting started | Burgunder divider |
| 15 | CLI FTW | Terminal-style slide (cream-on-burgunder) |
| 16 | Kom i gang |
| 17 | Kontekst er alt |
| 18 | Prosjektminne & brukerminne |
| 19 | Skills |
| 20 | Del 3 — Agile ♡ AI | Burgunder divider |
| 21 | Fire steg i loopen |
| 22 | Diskuter og planlegg |
| 23 | Bygg og verifiser |
| 24 | Hvordan bygger vi lærende organisasjoner |
| 25 | Del 4 — Hva nå | Burgunder divider |
| 26 | Agile manifesto |
| 27 | Tre løkker |
| 28 | Er kode vårt viktigste bidrag? |
| 29 | Up-skilling / down-skilling |
| 30 | Fri meg fra tastaturet |
| 31 | Takk |

Slides are 0-indexed in code (`data-deck-slide="0"`…`"31"`) but the `data-screen-label` attributes use the 1-indexed numbering above.

---

## Design system — Miles

The deck follows the **Miles Design System** (Norwegian IT consultancy). Tokens are defined in `assets/miles.css` and consumed via CSS custom properties.

### Core palette

| Token | Hex | Use |
|---|---|---|
| `--krem` | `#fbf0e5` | Default canvas (60%) |
| `--burgunder` | `#450d21` | All text + inverse surfaces (30%) |
| `--miles-rod` | `#ff303b` | Energy / accent (10%) |
| `--gul` | `#ffd9a1` | Warm spot accent |
| `--morkilla` | `#3d1436` | Sparingly, tech/knowledge contexts |

**Never use** `#000` or `#fff` on cream — use burgunder for ink and krem for inverse surfaces.

### Type

- **Gelica** (proprietary serif) — display, headings, hero, ingress. Weights 400/500.
- **DM Sans** — body, labels, captions, kickers. Weights 400/600.
- **Caveat / Kalam** — handwritten accents (used sparingly on a few slides).
- **JetBrains Mono** — terminal/CLI slide only.

Local type scale (set at 1920×1080):

| Class | Size | Family |
|---|---|---|
| `.display` | 168px | Gelica 500 |
| `.title` | 96px | Gelica 500 |
| `.h2` | 72px | Gelica 500 |
| `.subtitle` | 48px | Gelica 400 italic |
| `.body` | 32px | DM Sans 400 |
| `.small` | 26px | DM Sans 400 |
| `.tiny` | 24px | DM Sans 600 (kickers, ALL CAPS, +0.22em tracking) |

### Spacing (slide-local)

`--pad-x: 120px`, `--pad-top / --pad-bottom: 100px`, `--gap-title: 56px`, `--gap-item: 32px`.

### Slide chrome

Every slide has three optional corner marks:

- `.mark-tl` — top-left, section title (`Del 1 · Historie`), DM Sans, uppercase, tracked.
- `.mark-tr` — top-right, occasional Caveat hand annotation, red.
- `.mark-br` — bottom-right, always `Miles` wordmark, DM Sans, uppercase, tracked.

### Reusable layouts

- `.center-stack` — fully centered, padded.
- `.left-stack` — left-aligned column.
- `.top-stack` — top-aligned column.
- `.split` — two-column 1fr/1fr grid, 80px gap.
- `section.inverse` — burgunder background, cream text (used on the four part-dividers).
- `.s-cli` — terminal slide (slide 15).
- `.s-title` — Murakami cover (slide 1).
- `.manifesto`, `.updown` — bespoke layouts for slides 26 and 29.

### Animation

Easing `cubic-bezier(0.25, 1, 0.5, 1)` (ease-out-quart), 150–300ms (default 220ms). No bounce, no spring. Fades preferred over translations; translations ≤12px.

---

## Speaker notes

Each slide has a corresponding string in the `#speaker-notes` JSON block at the bottom of `Agentisk Koding.html`. **Position N in the array = slide N.** When you add, remove, or reorder slides, update the array in the same edit so indexes stay aligned. Empty string `""` for slides without a note.

The `<deck-stage>` component posts `{slideIndexChanged: N}` to the parent window so external speaker-notes renderers stay in sync.

---

## Tweaks panel

`tweaks-app.jsx` wires up the in-deck Tweaks controls (toggled by the host environment). Defaults live in an `EDITMODE-BEGIN`/`EDITMODE-END` JSON block. Persistence is handled by the host — you don't need to touch it for normal editing.

If you're running the deck standalone outside the original chat environment, the tweaks panel will simply not appear, and the deck uses the baked-in defaults. That is fine for presenting.

---

## What to edit where

| You want to… | Edit… |
|---|---|
| Change copy on a slide | The relevant `<section>` in `Agentisk Koding.html` (search by `data-label`) |
| Rewrite a speaker note | The matching entry in `#speaker-notes` JSON |
| Adjust a global color or type | `assets/miles.css` |
| Adjust a local type scale or spacing | The `:root` block at the top of `Agentisk Koding.html` |
| Add/remove a slide | Insert/delete the `<section>` AND update `#speaker-notes` array in the same edit |
| Tweak the cover (Murakami) | `.s-title`, `.cover-band`, `.cover-sun`, `.cover-river`, `.cover-figure` |
| Change the timeline (slide 5) | Search for `<!-- 5 · Tidslinjen -->` |

---

## Re-exporting

- **PDF**: Cmd/Ctrl-P in browser. `<deck-stage>` is print-aware.
- **PPTX (editable)**: re-open in the original chat environment and invoke the *Export as PPTX (editable)* skill.
- **PPTX (screenshots)**: same environment, *Export as PPTX (screenshots)* skill — flat images, pixel-perfect.
- **Standalone HTML** (single file, offline): *Save as standalone HTML* skill in the original environment.

---

## Anti-patterns to avoid when editing

From the Miles guide — keep these in mind:

- No gradient backgrounds, no glassmorphism, no deep shadows.
- No Title Case headings — sentence case only.
- No emoji as iconography (the deck uses one `♡` on slide 20 as a typographic ligature, not as decoration).
- No off-brand accent colors (cyan, mint, hot pink, etc.).
- No emphasis on more than one word per heading.
- One `!` per headline at most.

---

## Credits

- Speaker: see slide 02 (currently a placeholder — fill in before presenting).
- Brand: Miles Norge — `miles.no`.
- Content references: Vaswani et al. 2017 (Attention), OpenAI ChatGPT 2022, Anthropic Claude Code 2025, Karpathy on vibe coding 2025.
