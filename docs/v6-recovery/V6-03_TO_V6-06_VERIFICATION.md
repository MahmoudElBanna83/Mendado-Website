# MENDADO Website V6-03 to V6-06 Verification

## Scope

This record covers the authorized pre-publication completion work from unified identity integration through bilingual implementation, inquiry functionality, and quality review.

## Protected baseline

- Repository: `MahmoudElBanna83/Mendado-Website`
- Protected `main`: `680f422f5d81b73cb525cd92a44ad7518835db10`
- Starting recovery head: `61b59639424d2433c4d85a76538cd259afc80f1a`
- Recovery branch: `feat/v6-recovery`
- Draft PR #1 remains the review vehicle.

## V6-03 — Unified identity integration

- Added separate high-resolution transparent PNG assets for MND by Mendado and Mendado AgriHub.
- Assets were extracted from the approved brand-family board without replacing any existing asset.
- Integrated the approved identities into the ecosystem and dedicated brand sections.
- Preserved the Mendado master logo, Hero image, Hero composition, and official gold `#E8C67A`.

## V6-04 — English and Arabic

- Preserved the root English page for backwards compatibility.
- Added `/en/` as the explicit English path.
- Added `/ar/` as a complete Arabic path.
- Added English/Arabic language links in desktop and mobile navigation.
- Added Arabic typography and RTL layout behavior.
- Preserved brand names and approved brand messages.

## V6-05 — Inquiry functionality

- Connected the inquiry form to a privacy-preserving email-client workflow.
- Successful validation opens a prepared message addressed to `Development@mendado.com`.
- No third-party form processor, database, analytics service, secret, or remote endpoint was added.
- Required fields, native browser validation, autocomplete hints, and accessible status messaging were added.

## V6-06 — Quality review

Passed checks:

- JavaScript syntax check.
- `git diff --check`.
- HTML structural parse for root English, `/en/`, and `/ar/`.
- Exactly one `<main>` per page.
- No duplicate IDs.
- All internal fragment targets resolve.
- All local assets and language destinations resolve.
- Exactly seven business-area cards on each language page.
- Existing Hero and legacy image assets remain unchanged.
- New logo files contain alpha transparency.
- Official gold token remains `#E8C67A`.
- No unsupported owned-factory claim.
- Inquiry recipient is the Mendado company address.
- Reduced-motion and keyboard-focus support added.

## Verification limitation

Automated browser screenshots could not be produced in the current execution environment because no Chromium binary was installed and the browser download timed out. Structural, asset, link, language, JavaScript, and diff checks passed. A final real-browser visual review at the approved widths remains mandatory before publication.

## Publication gate

The website must not be merged or published until:

1. English and Arabic are reviewed visually in a real browser at 1440, 1024, 768, 390, and 320 pixels.
2. The inquiry workflow is tested from a device with a configured email client.
3. The final production domain and hosting route are explicitly confirmed.
4. The user provides final approval to merge and publish.

No deployment, publication, GitHub Pages change, domain connection, hosting change, ownership transfer, or merge is included in this work.
