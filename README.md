# FinPilot — Marketing site

A static, dependency-free landing page for FinPilot (green-on-navy, PiggyVest-inspired).
Pure HTML/CSS/JS — no build step.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
npx serve .
```

## Deploy (free)
- **Vercel:** `npx vercel` (or import the repo on vercel.com) — it auto-detects a static site, no config.
- **Netlify:** drag-and-drop the folder, or connect the repo.

## Updating the links
App links live in one place — `script.js`:
```js
const LINKS = {
  web: 'https://financial-app-fawn-nu.vercel.app',
  apk: 'https://expo.dev/artifacts/eas/<id>.apk',
};
```
After each new Android build, update `apk` with the latest EAS artifact URL.

## Files
- `index.html` — page structure (hero, features, how-it-works, FAQ, footer)
- `styles.css` — brand styling + responsive layout
- `script.js` — link wiring, mobile nav, FAQ year
