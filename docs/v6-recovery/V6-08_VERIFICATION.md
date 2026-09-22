# MENDADO Website V6-08 Verification

## Scope

This record covers the owner-approved bilingual publication-candidate refinements and the subsequent real-browser verification. It does not authorize or perform a merge, deployment, publication, GitHub Pages change, domain change, hosting change, or ownership transfer.

## Protected state

- Repository: `MahmoudElBanna83/Mendado-Website`
- Protected `main`: `680f422f5d81b73cb525cd92a44ad7518835db10`
- Recovery branch: `feat/v6-recovery`
- Implementation commit: `ae6a803c9ec017c318d981f4d91089a03123af3f`
- Draft PR #1 remains open, draft, and unmerged.

## Owner-approved refinements

1. Replaced the ingredient-only Hero message with the approved integrated-ecosystem message in English and Arabic, while retaining the corporate message directly below it.
2. Aligned the English mobile Hero image treatment with the stronger Arabic composition without replacing the approved image.
3. Converted the five trade and export topics into accessible interactive tabs with useful bilingual descriptions, click behavior and keyboard navigation.
4. Converted the five corporate value items into linked tiles with short bilingual descriptions and real section destinations.
5. Added the approved Mendado corporate logo to the ecosystem alongside the MND and Mendado AgriHub identities.
6. Reworked the Mendado AgriHub presentation on a dark high-contrast surface and replaced the limiting public copy with integrated digital agriculture ecosystem language.
7. Replaced the legacy footer logo with the approved corporate logo, removed duplicate descriptor text and increased small-text contrast.

No existing file under `assets/` was modified.

## Automated validation

- JavaScript syntax passed.
- HTML structural checks passed for the root, English and Arabic pages.
- Exactly one `<main>` element is present on each page.
- No duplicate IDs were found.
- All internal fragment destinations resolve.
- All referenced local images exist.
- Each localized page contains five complete trade tabs and one live content panel.
- CSS comments, strings and braces are balanced.
- `git diff --check` passed.
- No legacy footer-logo reference remains.

## Real-browser verification

English and Arabic were checked through real browser pages and fixed responsive frames at 1440, 1024, 768, 390 and 320 pixels.

Passed:

- No horizontal page overflow at any reviewed width.
- Desktop Hero composition and Arabic RTL direction are correct.
- Mobile title, logo, buttons and inquiry form remain within the viewport at 390 and 320 pixels.
- English and Arabic mobile navigation opens and sets `aria-expanded="true"`.
- The language switch navigates correctly between `/en/` and `/ar/` and applies the correct language and direction.
- The three ecosystem identities are complete and visually balanced.
- The trade topics change the visible content and selected ARIA state.
- Mendado AgriHub logo and copy are legible on the dark background.
- The footer uses `assets/concept-logo.webp`; the corporate copyright is visible.
- No page-origin console errors or warnings were found. Browser-extension metadata errors were excluded because they do not originate from the website.

## Publication gate

The branch is a technically reviewed publication candidate, but publication is not yet authorized. Before launch:

1. Test the prepared-email inquiry handoff once on the intended phone or computer with a configured email application.
2. Confirm the production hosting and domain route.
3. Provide explicit approval to mark Draft PR #1 ready, merge it and publish.

Until then, keep Draft PR #1 open, draft and unmerged.
