# Performance maintenance

Run `npm ci` then `npm run build` from this directory. The site output is `dist/`; `src/index.html` is the editable HTML template. Edit the unhashed JS/CSS in `dist/`, then rebuild; never edit hashed generated bundles.

`npm run images` regenerates responsive WebP files and `dist/images.js` from the retained original restaurant photos. Build resolves the current hero/brand manifest names. Product prices/descriptions live in `dist/menu.js` and `dist/menu.json` and must stay synchronized; this performance change does not modify them.

The build preserves CSS cascade order and embeds base/first-render styling to avoid FOUC (including direct #menu visits). Only the cancellation-control styles load asynchronously. JS uses ordered defer and content-hashed names. Fonts are self-hosted with optional display; under a slow cold connection the fallback may remain for that page view, deliberately avoiding a late font swap. Turkish text retains its established full-glyph font.

GitHub Pages sends Cache-Control max-age=600. Content hashes provide safe asset invalidation, not longer TTL. No unsupported headers config or hosting migration was added. Original images/video remain for source preservation.

Regression checks from the workspace parent: `node work/verify-menu.cjs`, `node work/verify-wheel.cjs`, `node work/verify-hold.cjs`. These check catalog/cart/order text, gesture edge/cancel/ghost clicks, and destructive hold cancellation. Browser validation is still necessary for layout, fire, dialog and assistive technology.

## Follow-up: 9 October 2026, centered welcome and mobile LCP

Baseline: PageSpeed report `268a8o5w76` (08:50 Istanbul), Lighthouse 13.5.0: mobile Performance 91, FCP 0.9 s, LCP 3.451 s, SI 1.6 s, TBT 0, CLS 0; desktop 100, FCP 0.277 s, LCP 0.740 s, SI 0.493 s. Accessibility, Best Practices and SEO 100; Agentic Browsing 2/2.

### Evidence and changes

- `scripts/optimize-assets.cjs`, `dist/images.js`, generated content-hashed assets: the header and welcome previously downloaded two complete menu sheets merely to display their logo. A real Chrome Slow 4G trace showed 123,150 + 133,515 transferred bytes competing with the high-priority hero. The same artwork is now cropped once into a shared 5,076-byte WebP. No menu content was taken from the printed sheet.
- `scripts/build.cjs`: supplies AVIF hero sources with unchanged 480/768/1066 pixel widths, WebP fallback, existing sizes and one `fetchpriority="high"`. No new preload or lazy loading on LCP. At 1066 px the hero falls from 170,802 to 124,343 bytes; at 768 px from 104,818 to 74,163. Crop, zoom and object position are unchanged.
- `dist/app.js`: AVIF for the two favorites and sizes based on the actual contained image, not merely its surrounding box. At a 390 px viewport the image box was ~275×213; the portrait inside it is 142 px wide. The portrait sizes are 142/126/160 px across mobile/tablet/desktop. Rice uses the card width capped by its contained aspect ratio. Added 320 and 640 pixel AVIF candidates so DPR-adjusted targets between 240/480/800 do not jump unnecessarily. Original-resolution variants and WebP remain available.
- `dist/expand.js`: the baseline desktop report attributed 24 ms forced layout to its first-frame `getBoundingClientRect` calls after style writes. ResizeObserver and IntersectionObserver now provide computed geometry, cached for scrolling. No geometry reads in scroll/animation callbacks. New reports no longer flag Forced reflow.
- `dist/intro.js`, `dist/responsive.css`: restored the white full-screen welcome, centered logo/caption, flames along the bottom. CSS has a short opacity-only exit deadline; it does not wait for fonts, images or video. The same phone fire asset remains; wider screens retain adjacent 480×122 tiles. Reduced-motion behavior remains supported. A first iteration animated visibility too; that was removed after Lighthouse identified a non-composited animation.
- `dist/reference.css`, `dist/photos.css`, `dist/fire.css`: removed 17 selectors rooted in `.reference-hero`, which is absent from current HTML and scripts. The current hero is `.scroll-expand`. Retained cart, modal, mobile, wheel and interaction rules despite initial-load coverage marking them unused. Inline CSS reduced from 69,489 baseline bytes to 68,055 bytes; remaining initial-load unused CSS is not evidence those interaction styles are safe to delete.

### Measurements

Three sequential public PageSpeed runs after the principal changes, same Lighthouse version/device/throttling:

| Run (Istanbul) | Mobile score | FCP ms | LCP ms | SI ms | Desktop score | Desktop LCP ms |
|---|---:|---:|---:|---:|---:|---:|
| 09:20 | 99 | 933 | 2101 | 2417 | 100 | 487 |
| 09:23 | 99 | 933 | 2134 | 2391 | 100 | 485 |
| 09:25 | 99 | 926 | 2109 | 2354 | 100 | 536 |

All three: TBT 0, CLS 0, Accessibility/Best Practices/SEO 100, Agentic Browsing 2/2 on both devices. Mobile LCP median 2.109 s, range 2.101–2.134 s. SI increases relative to baseline because the explicitly requested full-screen welcome replaces the floating card. This tradeoff is reported, not concealed.

Independent GUI Chrome traces with the same 400 px viewport and real Slow 4G throttling: LCP 5.947 → 3.715 s. The selected hero remained 1066 px (now AVIF). Hero discovery/load completion 699/5925 → 991/3684 ms; post-load paint ~22 → ~31 ms. This supports network contention as the major problem, not render delay. This regular Chrome profile had extensions, no identical Lighthouse CPU simulation, and different document response times, so these trace values must not be compared directly to simulated PageSpeed headline LCP. The original 170/140/40 ms diagnostic breakdown is also not the 3.451 s headline total.

### Validation and limits

- Build passed; catalog/cart, wheel gesture/cancellation and two-second cancel-hold regression checks passed. All 53 WhatsApp products and image files retained. Product dialog/add-to-cart/cart UI exercised at 390 px and 1280 px; category arrows, scrolling/hero expansion checked; no console errors observed. Phone intro screenshot saved with the local evidence.
- Live asset response confirms `Cache-Control: max-age=600`. GitHub Pages controls this header; no alternate-host configuration or fake cache headers added. Content-hashed generated assets retained. Cache audit estimate dropped from 912 to 611 KiB mobile, 705 to 418 KiB desktop in the principal-change runs.
- `npm audit --omit=dev`: zero findings (the production site has no npm runtime dependencies).
- StackHawk local scan `da614e48-8a80-4202-a106-2625a9766da7` is NOT security clearance: Ajax Spider could not launch its headless browser and discovered zero JS states. Static crawl covered 19 URLs. Findings concern local Python-server headers and a statically detected form; the form is intercepted in JS and has no order-submission backend. Local headers are not production headers. No misleading hosting-header fixes were applied. Full browser-assisted DAST remains blocked by this runtime limitation. The scan policy API denied custom policies, so the supported DEFAULT policy with detected technology flags was used. No successful end-to-end DAST claim is made.
- Detailed public report snapshots and before/after trace files are under `../work/perf-round2/`; raw scan logs stay local and are not published.

### Final published verification (09:30 Istanbul)

After intermediate 320/640 candidates and dead CSS cleanup, report:
https://pagespeed.web.dev/analysis/https-zillofficial-github-io-doner-maps/x4ssfauzw4

- Mobile **99**, FCP **0.928 s**, LCP **2.112 s**, SI **2.277 s**, TBT **0**, CLS **0**.
- Desktop **100**, FCP **0.262 s**, LCP **0.486 s**, SI **0.941 s**, TBT **0**, CLS **0**.
- Accessibility, Best Practices, SEO **100**, Agentic Browsing **2/2** on both.
- Image-delivery, Forced reflow, unused-CSS and non-composited-animation warnings no longer appear in either report. This does not mean every byte of CSS is used on first paint; retained interaction styles are still necessary.
- Remaining cache estimate: **596 KiB mobile / 418 KiB desktop**, versus 912/705 baseline; hosting max-age remains 600 seconds.
- LCP still identifies `img.scroll-expand__media`, now the **768 px AVIF**, not the intro logo. Diagnostic load delay 20 ms, load duration 140 ms, render delay 70 ms are not the simulated 2.112 s headline sum.
- Four measured mobile LCP values across the principal/final revisions: **2.101–2.134 s**; scores consistently **99**. The final two changes affect responsive candidates and dead CSS, with no visual redesign.
- Final runtime release commit: `bbe249124cbf3c1bc151f71afd76e2cc895f8dcd`.
