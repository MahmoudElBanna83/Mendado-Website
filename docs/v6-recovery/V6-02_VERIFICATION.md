# V6-02 Architecture and Content Verification

## Authorization and protected baseline

- Authorized stage: `V6-02` only.
- Protected `main`: `680f422f5d81b73cb525cd92a44ad7518835db10`.
- Authorized starting head: `35514b693ff24d21399315aa48c48c590f6b586b`.
- Implementation branch: `feat/v6-recovery`.
- Draft PR #1 remained open, draft and unmerged throughout the stage.
- V6-03 and later work was not started.

## Implemented homepage hierarchy

1. Header and Hero
2. Mendado Corporate Introduction
3. One Connected Ecosystem
4. Seven Business Areas
5. MND by Mendado Feature
6. Trade, Export and Market Development
7. Mendado AgriHub Feature
8. Why Mendado
9. Business Inquiry
10. Footer

The homepage connects Mendado, MND by Mendado and Mendado AgriHub while keeping their roles distinct. MND is presented as Mendado's food and ingredients brand. AgriHub is presented as the agricultural digital ecosystem, not as an eighth consulting service.

## Controlled content checks

- Hero headline remains exactly: `From Ingredients to Global Opportunities.`
- Mendado message remains exactly: `Building Value. Connecting Markets. Creating Growth.`
- MND by Mendado message remains exactly: `Essence of Flavor`
- Mendado AgriHub message remains exactly: `Smart Agriculture. Stronger Communities.`
- `Pure Ingredients. Better Living.` is absent.
- Manufacturing and packing are described as coordinated through selected qualified partners.
- No factory-ownership or factory-operation claim was added.
- The seven approved business areas are present exactly once as capability cards:
  1. Food & Ingredients
  2. Contract Manufacturing & Private Label
  3. Trade & Supply
  4. Export Development
  5. Commercial Representation & Agencies
  6. Agribusiness & Business Consulting
  7. Marketing & Digital

## Foundation preservation

- Hero asset remains `assets/hero-concept.webp` and was not modified.
- Approved Hero composition remains recognizable at desktop and mobile sizes.
- Duplicate origin-note HTML remains absent; the wording appears only in the approved Hero image.
- Header logo continues to use the existing `assets/concept-logo.webp` with `object-fit: contain`.
- Primary gold token remains `#E8C67A`.
- No file under `assets/` changed from the authorized V6-02 starting head.
- No production logo was added, recreated or replaced.
- Responsive menu behavior remains controlled by the existing JavaScript.
- Inquiry form remains intentionally unconnected with `onsubmit="return false;"`.

## Responsive browser verification

| Viewport | Horizontal overflow | Internal targets | Ecosystem cards | Business areas | Hero/logo result |
| --- | --- | --- | ---: | ---: | --- |
| 1440px desktop | None | All resolve | 3 | 7 | Exact headline; logo contained |
| 1024px small desktop | None | All resolve | 3 | 7 | No clipping or overlap |
| 768px tablet portrait | None | All resolve | 3 | 7 | Responsive navigation retained |
| 390px mobile | None | All resolve | 3 | 7 | Full logo; closed and open menu verified |
| 320px narrow mobile | None | All resolve | 3 | 7 | Inquiry heading scaled; no clipped text |

The 320px verification identified two intrinsic-width constraints in the inquiry section. `min-width: 0` was applied to the grid children, and the inquiry heading was added to the existing narrow-screen heading scale. The final rerun reported equal document client and scroll widths at every target size.

## Navigation and console verification

- Working navigation destinations: `#about`, `#ecosystem`, `#capabilities`, `#why-mendado`, and `#contact`.
- Corporate calls to action are `Explore Our Business Areas` and `Start a Conversation`.
- Mobile navigation at 390px changes from closed to open and updates `aria-expanded` to `true`.
- Browser page console: zero errors and zero warnings. A browser-extension metadata error observed during an intermediate harness run was isolated to a `chrome-extension://` URL and was not emitted by the website; final clean-tab page checks were empty.

## Static validation

- HTML parser: pass; no parser errors.
- CSS structural parse: pass; balanced blocks, parentheses, strings and comments.
- Browser CSSOM load: pass; the complete local stylesheet loaded with 169 rules.
- JavaScript syntax: pass with `node --check script.js`.
- Whitespace/error check: pass with `git diff --check`.
- Internal anchor audit: pass; no missing targets.
- Asset-diff audit: pass; no files under `assets/` changed.

## Commits

- `5d3704d8acc1dca0f6f82150595f56c99183d932` — implement V6-02 architecture and content.
- `72c618a8df65860708d118dce4629342560b9de3` — add exact responsive verification frames.
- `453232d4e03687475409fe4e1492e771cfdaaff2` — remove narrow-mobile form intrinsic-width overflow.
- `6cc936f010dd2b8545bc381c3647b517d863265c` — scale the inquiry heading on narrow screens.

## Screenshot evidence

- `mendado-v6-02-desktop-1440.jpg` — desktop Hero and corporate introduction.
- `mendado-v6-02-ecosystem.jpg` — connected three-brand ecosystem.
- `mendado-v6-02-mobile-390-closed.jpg` — 390px Hero with navigation closed.
- `mendado-v6-02-mobile-390-open.jpg` — 390px navigation open.

## Known limitations retained by scope

- The inquiry form is presentational and intentionally unconnected.
- MND and Mendado AgriHub use controlled text headings pending separately authorized production-logo integration.
- The site remains English-only; Arabic, `/en/`, `/ar/`, RTL and language switching are excluded.
- No deployment, hosting, analytics, external service, Pages, domain or ownership change was made.
