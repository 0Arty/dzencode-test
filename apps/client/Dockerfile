FROM node:20-slim

WORKDIR /app

COPY package*.json ./
COPY apps/client/package*.json ./apps/client/

RUN npm install -w apps/client

COPY apps/client ./apps/client

WORKDIR /app/apps/client

EXPOSE 5173

ENV DOCKER=true

CMD ["npm", "run", "dev:container"]