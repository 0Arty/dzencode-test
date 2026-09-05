# test

Монорепозиторій: `apps/server` (NestJS), `apps/client` (Vite), `packages/shared` (спільні типи).

## 1. Встановити залежності

```bash
npm install
```

## 2. Запуск через Docker (рекомендовано)

```bash
docker compose up --build
```

Піднімає одразу: Postgres, сервер і клієнт. Збірка `packages/shared` відбувається автоматично всередині Docker-образів — нічого руками робити не треба.

- Client: http://localhost:5173
- Server (API): http://localhost:8000

## 3. Локальний запуск (без Docker)

Оскільки `apps/server` і `apps/client` імпортують `@mono/types` як зібраний пакет (`packages/shared/dist`), перед першим запуском і після кожної зміни типів його треба збудувати:

```bash
npm run build -w packages/shared
```

Або тримати у watch-режимі окремим терміналом, щоб зміни підхоплювались автоматично:

```bash
npm run dev -w packages/shared
```

Далі, у **двох інших** терміналах:

### Сервер (NestJS)

```bash
npm run start:dev -w apps/server
```

### Клієнт (Vite)

```bash
npm run dev -w apps/client
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
packages/
  shared/   — спільні TypeScript типи (@mono/types)
```
