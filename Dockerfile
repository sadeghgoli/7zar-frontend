# Next.js 15 — Coolify build on VPS (Liara npm mirror fallback).
FROM node:20-bookworm-slim AS builder
WORKDIR /app
ENV CI=true
ENV NODE_OPTIONS=--max-old-space-size=4096

ARG NEXT_PUBLIC_SITE_URL=https://7zar.ir
ARG NEXT_PUBLIC_SITE_NAME="سون زر"
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME

RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates \
 && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json .npmrc ./

RUN set -eux; \
    success=0; \
    for registry in \
        "https://package-mirror.liara.ir/repository/npm/" \
        "https://registry.npmjs.org"; \
    do \
      echo "==> npm install via ${registry}"; \
      npm config set registry "${registry}"; \
      npm config set fetch-timeout 600000; \
      npm config set fetch-retries 10; \
      rm -rf node_modules; \
      if NODE_ENV=development npm install --include=dev --no-audit --no-fund --prefer-online; then \
        if test -x node_modules/.bin/next; then success=1; break; fi; \
      fi; \
      echo "==> failed on ${registry}, trying next mirror..."; \
    done; \
    test "${success}" -eq 1; \
    node -v; npm -v; ./node_modules/.bin/next --version

COPY . .
RUN NODE_ENV=production ./node_modules/.bin/next build

FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
