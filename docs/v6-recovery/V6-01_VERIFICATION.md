# MENDADO Website V6-01 Structural Recovery — Verification Record

Status: Implemented and verified on the draft recovery branch
Repository: `MahmoudElBanna83/Mendado-Website`
Branch: `feat/v6-recovery`
Verification date: 2026-09-21
Protected V5 baseline: `680f422f5d81b73cb525cd92a44ad7518835db10`
V6-00 starting head: `2ac11fcfe43bcb860214fdbdf7177a660c2f4a8a`

## Implemented scope

- Removed the unmatched closing `</main>` element.
- Escaped the Google Fonts query string so the document parses without HTML errors.
- Established shared color, spacing, header-height, transition, and gradient tokens.
- Set the primary Mendado gold token to `#E8C67A`.
- Preserved `assets/hero-concept.webp`, the Hero composition, and the exact headline “From Ingredients to Global Opportunities.”
- Simplified the primary navigation to About, Solutions, Products, Business Solutions, and Contact.
- Removed the non-functional decorative search control and its CSS.
- Preserved existing JavaScript-driven mobile navigation behavior.
- Corrected inherited mobile overflow in the Private Label journey at narrow widths.
- Left all existing files in `assets/` unchanged.

## Changed implementation files

- `index.html`
- `styles.css`

`script.js` was validated but not modified.

## Verification evidence

### Source validation

- HTML5 parsing: zero parse errors.
- Document structure: exactly one `<main>` element.
- CSS parsing: completed successfully; 118 rules detected before the narrow-layout correction.
- JavaScript syntax: `node --check script.js` passed.
- Git whitespace validation: `git diff --check` passed.
- Internal fragment targets: no missing targets.
- Search control count: zero.
- Asset working-tree changes: zero.

### Hero and identity controls

- Rendered Hero headline: exact match.
- Hero background: `assets/hero-concept.webp`.
- Computed primary gold token: `#E8C67A`.
- Desktop Hero composition remained structurally unchanged.

### Responsive and browser checks

- Desktop live preview: 1363 × 936 viewport; no horizontal overflow.
- Mobile verification frame: 390 × 844 viewport; no horizontal overflow after correction.
- Mobile menu closed state: hidden with `aria-expanded="false"`.
- Mobile menu open state: visible with `aria-expanded="true"`.
- Selecting a navigation link closes the menu and restores `aria-expanded="false"` in the DOM behavior test.
- Browser page-origin console errors/warnings: none observed.

The test-only page `docs/v6-recovery/evidence/v6-01-mobile-preview.html` provides a fixed 390 × 844 verification frame. It is documentation evidence only and is not linked from the production website.

## Limited visual-correction verification

The V6-01 acceptance review identified two presentation issues and authorized a limited corrective patch.

### Hero origin note

- Direct inspection confirmed that `assets/hero-concept.webp` already contains the approved origin note: “EGYPTIAN ORIGINS / GLOBAL MARKETS / A STRONGER TOMORROW.”
- The duplicate HTML `.hero-origin-note` overlay and its unused CSS were removed.
- The approved Hero image was not edited, replaced, recompressed, or renamed.
- Live 1440 × 900 verification confirmed zero `.hero-origin-note` overlays, one clean embedded origin note, the exact Hero headline, and no horizontal overflow.

### Mobile header logo

- The existing `assets/concept-logo.webp` asset was preserved unchanged.
- Header-logo rendering now uses `object-fit: contain`, automatic height, and responsive maximum heights instead of `object-fit: cover`.
- Live 390 × 844 verification confirmed the complete MENDADO wordmark and descriptor are visible with navigation closed and open.
- The rendered mobile logo measured 175 × 49.84 px from the unchanged 337 × 96 px source image, with no cropping.

### Corrective browser evidence

- Desktop frame: 1440 × 900; no horizontal overflow; no page-origin console errors or warnings.
- Mobile closed: 390 × 844; menu hidden; `aria-expanded="false"`; no horizontal overflow; no page-origin console errors or warnings.
- Mobile open: 390 × 844; menu visible; `aria-expanded="true"`; all five navigation links present; no horizontal overflow; no page-origin console errors or warnings.
- Test-only desktop frame: `docs/v6-recovery/evidence/v6-01-desktop-preview.html`. It renders the site internally at 1440 × 900 and is not linked from the production website.
- Replacement screenshots were captured for the corrected desktop Hero, mobile Hero, and open mobile navigation states.

## Explicit exclusions retained

- No V6-02 ecosystem or seven-area content was added.
- No Arabic, `/en/`, `/ar/`, or language switcher was implemented.
- The inquiry form remains intentionally unconnected.
- No production logo or content image was added, recreated, or replaced.
- No deployment, publication, Pages, domain, ownership, or merge action occurred.

## Limitations

- The form remains disabled by the existing `onsubmit="return false;"` pending V6-05 authorization.
- The verification preview is an external rendering of the public draft branch, not a deployment or GitHub Pages publication.
- Full cross-browser certification remains part of V6-06; V6-01 covered structural parsing, scripted DOM behavior, and live responsive rendering only.
