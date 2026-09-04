# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
COPY shared/package*.json ./shared/
COPY apps/server/package*.json ./apps/server/

RUN npm ci -w apps/server -w shared

COPY shared ./shared
COPY apps/server ./apps/server

WORKDIR /app/apps/server
RUN npm run build

# --- Production stage ---
FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
COPY shared/package*.json ./shared/
COPY apps/server/package*.json ./apps/server/

RUN npm ci --omit=dev -w apps/server -w shared

COPY --from=build /app/apps/server /app/apps/server
COPY --from=build /app/shared /app/shared

WORKDIR /app/apps/server

EXPOSE 3000
CMD ["npm", "run", "start:prod"]