# --- Build stage ---
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY apps/server/package*.json ./apps/server/

RUN npm ci -w apps/server

COPY apps/server ./apps/server

RUN npm run build -w apps/server


# --- Production stage ---
FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./
COPY apps/server/package*.json ./apps/server/

RUN npm ci --omit=dev -w apps/server

COPY --from=build /app/apps/server/dist ./apps/server/dist

WORKDIR /app/apps/server

EXPOSE 8000

CMD ["npm", "run", "start:prod"]