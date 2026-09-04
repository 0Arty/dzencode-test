FROM node:20-alpine
WORKDIR /app

COPY package*.json ./

COPY shared/package*.json ./shared/
COPY apps/client/package*.json ./apps/client/

RUN npm ci -w apps/client -w shared

COPY shared ./shared
COPY apps/client ./apps/client

EXPOSE 5173

# 5. Запускаємо dev-сервер
CMD ["npm", "run", "dev:container", "-w", "apps/client", "--", "--host"]