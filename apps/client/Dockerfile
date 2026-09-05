FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
COPY packages/shared/package*.json ./packages/shared/
COPY apps/client/package*.json ./apps/client/

RUN npm ci -w apps/client -w packages/shared

COPY packages/shared ./packages/shared
COPY apps/client ./apps/client

# vite резолвить @mono/types через його dist, тож білдимо один раз
RUN npm run build -w packages/shared

EXPOSE 5173
ENV DOCKER=true
CMD ["npm", "run", "dev:container", "-w", "apps/client"]