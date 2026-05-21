---
name: slide-ops
description: Use when adding, removing, or reordering slides in Agentisk Koding.html — keeps the #speaker-notes JSON array index-aligned and the data-deck-slide numbering contiguous.
---

# Slide operations

Editing the deck is error-prone because three things must stay in sync inside `Agentisk Koding.html`:

1. The `<section>` elements (one per slide).
2. The `data-deck-slide` attribute on each section — a contiguous 0-indexed sequence (`0`…`N-1`).
3. The `#speaker-notes` JSON array (near line 2205) — one string per slide, **position N = slide N**.

There are exactly as many slides as speaker-notes entries. Today: 32 of each.

## Before any change

1. Count slides: `grep -c 'data-deck-slide=' "Agentisk Koding.html"`
2. Count notes: read the `#speaker-notes` JSON array and count entries.
3. Confirm they match. If they already don't, fix that first before proceeding.

## Adding a slide

1. Insert the new `<section …>` at the target position. Copy structure from a sibling slide using a similar layout (`.center-stack`, `.split`, `section.inverse`, etc. — see README "Reusable layouts").
2. Renumber `data-deck-slide` on the new section and **every section after it** so the sequence stays contiguous 0…N.
3. Insert a speaker-note string at the **same index** in the `#speaker-notes` array. Use `""` if there is no note yet. Write the note in Norwegian Bokmål.
4. Update `data-screen-label` / `data-label` numbering on shifted slides if you want the human-facing labels to stay correct (1-indexed).

## Removing a slide

1. Delete the `<section>`.
2. Delete the matching entry (same index) from `#speaker-notes`.
3. Renumber `data-deck-slide` on all following sections so the sequence has no gap.

## Reordering slides

1. Move the `<section>` block.
2. Move the corresponding `#speaker-notes` entry to the same new index.
3. Renumber `data-deck-slide` across all affected sections.

## After any change

Re-run the two counts from "Before any change" and confirm they still match. The PostToolUse hook also checks this automatically, but verify yourself before claiming done.
