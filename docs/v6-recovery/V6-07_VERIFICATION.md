# MENDADO Website V6-07 Verification

## Scope

This record covers the final bilingual real-browser visual and interaction review for the V6 pre-publication candidate. It does not authorize or perform a merge, deployment, publication, GitHub Pages change, domain change, hosting change, or ownership transfer.

## Protected state

- Repository: `MahmoudElBanna83/Mendado-Website`
- Protected `main`: `680f422f5d81b73cb525cd92a44ad7518835db10`
- Recovery branch: `feat/v6-recovery`
- Draft PR #1 remains open, draft, and unmerged.

## Real-browser acceptance review

English and Arabic were reviewed at these CSS viewport widths:

- 1440 pixels
- 1024 pixels
- 768 pixels
- 390 pixels
- 320 pixels

Passed at every reviewed width:

- The requested viewport width was applied.
- No horizontal page overflow was present.
- Exactly one `<main>` element was present.
- All internal fragment destinations resolved.
- All images and the three production brand identities loaded.
- The approved Hero image loaded exactly once.
- The seven approved business areas were present.
- The inquiry form remained present.
- English used LTR and Arabic used RTL.
- The exact approved English Hero headline remained unchanged.

## Interaction checks

- The English and Arabic mobile menus opened correctly.
- `aria-expanded` changed to `true` when each menu opened.
- Selecting a navigation link closed the menu and restored `aria-expanded="false"`.
- English and Arabic language links resolved to their reciprocal localized paths.
- The inquiry form exposed six invalid required controls when empty and zero after valid test values were entered.
- The inquiry recipient remained `Development@mendado.com`.
- The form status region retained polite accessible announcements.
- No page-origin browser console errors or warnings were recorded.

The final `mailto:` handoff was intentionally not launched from the review browser. It must be confirmed once on the publication device with a configured email application before launch.

## Visual correction

At 1024 pixels, the embedded Hero origin note was partially cropped by the image's centered cover behavior. The responsive image position was changed to `right center` below 1180 pixels and remains overridden by the existing mobile composition below 900 pixels.

The correction was confirmed in both English and Arabic. The full embedded note is legible, while the approved `assets/hero-concept.webp` file remains unchanged.

## Publication readiness

The branch is a technically reviewed pre-publication candidate. Publication still requires all of the following owner-controlled actions:

1. Confirm the production hosting route and domain plan.
2. Confirm the prepared-email workflow on a device with a configured email application.
3. Provide explicit approval to mark the draft PR ready, merge it, and publish it.

Until those actions are authorized, PR #1 must remain draft and unmerged, and no deployment or publication may occur.
