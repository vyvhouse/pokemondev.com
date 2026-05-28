# ULWmon Landing Page

Static Korean event landing page for **ULWmon : AI가 포켓몬을 깰 수 있을까?**

## Run locally

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Event registration

The registration CTA in `#register` points to the live Luma event:

- <https://luma.com/izrwu9dk>

## Social preview image

The Open Graph / Twitter preview image is `assets/og-image.jpg`.

- Size: `1200x630`
- Referenced by `og:image` and `twitter:image` in `index.html`

## Deployment

This is a static site. The GitHub Actions workflow copies `index.html`, `styles.css`, `script.js`, and `assets/**` into `dist/`, then deploys that folder to Cloudflare Pages.

Production deploys are manual via the “Deploy to Cloudflare Pages” workflow.
