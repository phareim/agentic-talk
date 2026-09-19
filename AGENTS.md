# AGENTS.md

Guidance for coding agents (Claude Code, Codex, OpenCode) working in this repository.

## What this is

A self-contained HTML slide deck (`Agentisk Koding.html`, 32 slides) for a Kode59 talk. The deck has no build step — open the HTML directly in a browser, or run `npm start` for a live-reloading dev server. The `package.json` exists only for dev tooling: run `npm install` once, then `npm start` (live preview, auto-refreshes on edits) or `npm run format` (Prettier).

The full handoff documentation — file map, slide outline, the Miles design system (tokens, type scale, layouts), and what to edit where — is in the README:

@README.md

## Critical gotchas

- **Slide content is Norwegian Bokmål.** All copy and speaker notes must be written in Norwegian.
- **Speaker notes are index-aligned.** The `#speaker-notes` JSON array near line 2205 of `Agentisk Koding.html` has one entry per slide: position N = slide N. When you add, remove, or reorder a `<section>`, update the array — and renumber the `data-deck-slide` attributes — in the same edit. Use `/slide-ops` for this.
- **Slides are 0-indexed in code** (`data-deck-slide="0"`…`"31"`) but `data-screen-label` / outline numbering is 1-indexed.
- **Never use `#000` or `#fff` on cream.** Use `--burgunder` for ink and `--krem` for inverse surfaces. Global design tokens live in `assets/miles.css`; local type scale and spacing are in the `:root` block at the top of `Agentisk Koding.html`.
