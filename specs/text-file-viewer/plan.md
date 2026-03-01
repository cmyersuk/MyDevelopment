# Implementation Plan: Text File Viewer

**Branch**: `002-text-file-viewer` | **Date**: 2026-03-01 | **Spec**: ../text-file-viewer/spec.md
**Input**: Feature specification from `/specs/text-file-viewer/spec.md`

## Summary

Extend the landing page with a "Browse Files" button that opens an OS file picker (`.txt` only). When a file is selected, read its contents using the FileReader API and display them in a panel alongside the original rectangle.

## Technical Context

**Language/Version**: HTML5/CSS3/JavaScript (vanilla, no frameworks)
**Primary Dependencies**: none (FileReader API is built-in)
**Storage**: N/A (client-side file reading only)
**Testing**: Jest + Puppeteer for file mock tests; manual browser test with real `.txt` files
**Target Platform**: static hosting (GitHub Pages, Netlify, etc.)
**Project Type**: web application (static)
**Performance Goals**: file read/display <1s for files up to 5MB
**Constraints**: no backend; single-origin policy restricts to user-selected files only
**Scale/Scope**: single feature addition to existing landing page

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Static assets only: OK (uses FileReader API, no server calls)
- Mobile-first responsive: button and panel must stack on small screens
- Accessibility & performance: semantic labels, tested file load times
- Content-first semantics: `.txt` files contain readable text content
- Simplified deployment: static HTML/CSS/JS, no build step required

<!-- Constitution check passes -->

## Project Structure

```text
frontend/
├── index.html           (updated: add file browser button and panel)
├── css/
│   └── styles.css       (updated: add panel styles)
├── js/
│   └── file-viewer.js   (new: FileReader logic)
└── tests/
    └── ui/
        ├── landing.spec.js       (existing)
        └── file-viewer.spec.js   (new)
```

**Structure Decision**: Keep all code in `frontend/` folder; add JS module for file-viewer logic. Update existing HTML/CSS incrementally.

## Complexity Tracking

No constitution violations; straightforward addition of standard FileReader API and DOM manipulation.
