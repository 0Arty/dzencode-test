# test

Монорепозиторій: `apps/server` (NestJS), `apps/client` (Vite)

## 1. Встановити залежності

```bash
npm install
```

## 2. Запуск через Docker (рекомендовано)

```bash
docker compose up --build
```

Піднімає одразу: Postgres, сервер і клієнт.

- Client: http://localhost:5173
- Server (API): http://localhost:8000

## 3. Локальний запуск (без Docker)

### Сервер (NestJS)

```bash
npm run dev:server
```

### Клієнт (Vite)

```bash
npm run dev:client
```

> Для локального запуску потрібен також запущений Postgres (наприклад, `docker compose up postgres`) та заповнений `.env` у корені репозиторію.

## Доступні ресурси

| Сервіс              | URL                   |
| ------------------- | --------------------- |
| Client (Vite)       | http://localhost:5173 |
| Server (NestJS API) | http://localhost:8000 |

## Структура

```
apps/
  server/   — NestJS API
  client/   — Vite frontend

```
