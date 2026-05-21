#!/usr/bin/env python3
"""Verify Agentisk Koding.html keeps slides and speaker notes in sync.

Counts `data-deck-slide` sections vs entries in the `#speaker-notes` JSON
array. On mismatch, emits a PostToolUse hook warning back to Claude.
Invoked by the PostToolUse/Write|Edit hook in .claude/settings.json.
"""
import json
import re
import sys


def main() -> int:
    if len(sys.argv) < 2:
        return 0
    path = sys.argv[1]
    try:
        html = open(path, encoding="utf-8").read()
    except OSError:
        return 0

    slides = len(re.findall(r"data-deck-slide\s*=", html))

    m = re.search(
        r'<script[^>]*id="speaker-notes"[^>]*>(.*?)</script>',
        html,
        re.DOTALL,
    )
    if not m:
        warn(f"Could not find the #speaker-notes <script> block. "
             f"Found {slides} slides but no notes array.")
        return 0

    try:
        notes = json.loads(m.group(1))
    except json.JSONDecodeError as e:
        warn(f"The #speaker-notes JSON array does not parse ({e}). "
             f"Fix it so it stays index-aligned with the {slides} slides.")
        return 0

    if not isinstance(notes, list):
        warn("The #speaker-notes block is not a JSON array.")
        return 0

    if len(notes) != slides:
        warn(f"Deck out of sync: {slides} slides (data-deck-slide) but "
             f"{len(notes)} speaker-notes entries. They must be equal and "
             f"index-aligned (position N = slide N). Use /slide-ops to fix.")
    return 0


def warn(message: str) -> None:
    print(json.dumps({
        "systemMessage": f"⚠️  {message}",
        "hookSpecificOutput": {
            "hookEventName": "PostToolUse",
            "additionalContext": message,
        },
    }))


if __name__ == "__main__":
    sys.exit(main())
