# Test task Front-end dev

Monorepo with a client (React + Vite) and server (NestJS) part, using PostgreSQL as the database.

Stack:

- server : Nest.js, typeOrm, postgreSQL
- client : React 19, Vite, TypeScript, Redux tool-kit, Axios, React Hook Form + Zod, React Query (TanStack Query), Bootstrap, GSAP, Socket.io, SASS, linters...

## Local development

Install dependecies

```
npm i
```

Start the database

```
docker compose up -d postgres
```

Run client and server in dev mode

```
npm run dev
```

The client will be available at http://localhost:5173,
the server at http://localhost:8000

## Running with Docker

Spins up the database, server, and client fully containerized:

```
docker compose up -build
```

Once started:

- Client: http://localhost:5173
- Server: http://localhost:8000
- PostgreSQL: localhost:5432

To run in detached mode, add the -d flag:

```
docker compose up --build -d
```

To stop and remove containers:

```
docker compose down
```

To stop containers and also remove database data (full cleanup):

```
docker compose down -v
```

Project structure

```
.
├── apps/
│ ├── client/ # React
│ └── server/ # NestJS
├── docker-compose.yml
└── .env

```
