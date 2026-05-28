# Cloudflare Pages deployment

This repository is a static site: `index.html`, `styles.css`, `script.js`, and `assets/**` are copied into `dist/` and deployed as-is.

## One-time Cloudflare setup

1. Create a Cloudflare Pages project named `pokemondev-com`.
   - Build command: leave empty / none
   - Build output directory: `dist` if using Cloudflare Git integration directly; GitHub Actions already creates `dist/`.
   - Production branch: `main`

2. Configure GitHub repository secrets for the primary workflow:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_EMAIL`
   - `CLOUDFLARE_API_KEY`

3. Optional GitHub repository variable:
   - `CLOUDFLARE_PAGES_PROJECT=pokemondev-com`

For the external-account workflow, use a scoped Cloudflare API token:

- `EXTERNAL_CLOUDFLARE_API_TOKEN`
- `EXTERNAL_CLOUDFLARE_ACCOUNT_ID`
- Optional variable: `EXTERNAL_CLOUDFLARE_PAGES_PROJECT`

The external token needs these permissions:

- Account → Cloudflare Pages → Edit
- Account → Account Settings → Read

## Deployment behavior

- Production deploys are manual only via `workflow_dispatch`.
- `main` pushes and pull requests do not automatically deploy.
- Use the GitHub Actions “Deploy to Cloudflare Pages” workflow when a pokemondev.com deployment is intentionally needed.

## Social preview image

`assets/og-image.jpg` is copied into `dist/assets/` and referenced from `index.html` as:

- `og:image=https://pokemondev.com/assets/og-image.jpg`
- `twitter:image=https://pokemondev.com/assets/og-image.jpg`

Keep it at the standard Open Graph size `1200x630`.

## Domain switch later

Keep the Pages project and workflow unchanged. When the final domain is ready, only change Cloudflare DNS / Pages custom domain binding:

1. Cloudflare Pages → `pokemondev-com` → Custom domains → add the final hostname.
2. Point DNS to the Pages project as Cloudflare instructs, usually a proxied CNAME to the `*.pages.dev` target.
3. Remove or replace the old custom domain after the new one is verified.

No repository workflow change is required unless the Cloudflare Pages project name itself changes.
