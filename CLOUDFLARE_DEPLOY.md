# Cloudflare Pages deployment

This repository is a static site: `index.html`, `styles.css`, `script.js`, and `assets/**` are copied into `dist/` and deployed as-is.

## One-time Cloudflare setup

1. Create a Cloudflare Pages project named `pokemondev-com`.
   - Build command: leave empty / none
   - Build output directory: `dist` if using Cloudflare Git integration directly; GitHub Actions already creates `dist/`.
   - Production branch: `main`

2. Create a Cloudflare API token with these permissions:
   - Account → Cloudflare Pages → Edit
   - Account → Account Settings → Read

3. Add GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

4. Optional GitHub repository variable:
   - `CLOUDFLARE_PAGES_PROJECT=pokemondev-com`

## Deployment behavior

- Production deploys are manual only via `workflow_dispatch`.
- `main` pushes and pull requests do not automatically deploy.
- Use the GitHub Actions “Deploy to Cloudflare Pages” workflow when a pokemondev.com deployment is intentionally needed.

## Domain switch later

Keep the Pages project and workflow unchanged. When the final domain is ready, only change Cloudflare DNS / Pages custom domain binding:

1. Cloudflare Pages → `pokemondev-com` → Custom domains → add the final hostname.
2. Point DNS to the Pages project as Cloudflare instructs, usually a proxied CNAME to the `*.pages.dev` target.
3. Remove or replace the old custom domain after the new one is verified.

No repository workflow change is required unless the Cloudflare Pages project name itself changes.
