# Customizations (luoqing94)

Upstream app: tianma-if/edgeever (this fork tracks upstream `main`).

Live customizations that are **not** in upstream app source:
- `edgeone-proxy/` — EdgeOne reverse-proxy to the Cloudflare Worker origin.

Platform env vars (set in the EdgeOne/CF console; do not commit values):
- `ORIGIN_HOST`
- `TEO_VERIFICATION_8ZMYWXM3BK`
- `TEO_VERIFICATION_5WDEOLBM95`

Secrets / `.env` / platform credentials are **not** stored in this repo.
