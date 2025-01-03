FROM node:20-alpine AS base

RUN corepack enable
RUN yarn set version berry
RUN apk add --no-cache openssl

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ../package.json ../yarn.lock .yarnrc.yml ./

RUN yarn --prod --frozen-lockfile

FROM base AS build

WORKDIR /app

COPY ../ .
COPY ../.env.production ./.env

RUN yarn --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn run build

FROM base AS production

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]