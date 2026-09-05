# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
COPY packages/shared/package*.json ./packages/shared/
COPY apps/server/package*.json ./apps/server/

RUN npm ci -w apps/server -w packages/shared

COPY packages/shared ./packages/shared
COPY apps/server ./apps/server

# спочатку білдимо shared — сервер залежить від його dist
RUN npm run build -w packages/shared
RUN npm run build -w apps/server

# --- Production stage ---
FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
COPY packages/shared/package*.json ./packages/shared/
COPY apps/server/package*.json ./apps/server/

RUN npm ci --omit=dev -w apps/server -w packages/shared

# з build-стейджа тягнемо тільки готові артефакти
COPY --from=build /app/apps/server/dist /app/apps/server/dist
COPY --from=build /app/packages/shared/dist /app/packages/shared/dist

WORKDIR /app/apps/server

EXPOSE 8000
CMD ["npm", "run", "start:prod"]