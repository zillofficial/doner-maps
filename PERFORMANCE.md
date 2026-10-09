# Performance maintenance

Run `npm ci` then `npm run build` from this directory. The site output is `dist/`; `src/index.html` is the editable HTML template. Edit the unhashed JS/CSS in `dist/`, then rebuild; never edit hashed generated bundles.

`npm run images` regenerates responsive WebP files and `dist/images.js` from the retained original restaurant photos. Build resolves the current hero/brand manifest names. Product prices/descriptions live in `dist/menu.js` and `dist/menu.json` and must stay synchronized; this performance change does not modify them.

The build preserves CSS cascade order and embeds base/first-render styling to avoid FOUC (including direct #menu visits). Only the cancellation-control styles load asynchronously. JS uses ordered defer and content-hashed names. Fonts are self-hosted with optional display; under a slow cold connection the fallback may remain for that page view, deliberately avoiding a late font swap. Turkish text retains its established full-glyph font.

GitHub Pages sends Cache-Control max-age=600. Content hashes provide safe asset invalidation, not longer TTL. No unsupported headers config or hosting migration was added. Original images/video remain for source preservation.

Regression checks from the workspace parent: `node work/verify-menu.cjs`, `node work/verify-wheel.cjs`, `node work/verify-hold.cjs`. These check catalog/cart/order text, gesture edge/cancel/ghost clicks, and destructive hold cancellation. Browser validation is still necessary for layout, fire, dialog and assistive technology.
