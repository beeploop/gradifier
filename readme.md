# Gradifier

## 🛠️ Tech Stack

### Frontend
- [EJS](https://ejs.co/) — Embedded JavaScript templating
- [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS framework

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) — Web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) — Typed JavaScript
- [Drizzle ORM](https://orm.drizzle.team/) — Type-safe ORM for SQL

### Tools
- [dotenv](https://github.com/motdotla/dotenv) — Environment variable management
- [tsx](https://tsx.is) — Auto-reload

## 🚀 Getting Started

### Prerequisites

- Node.js v20.17.0 (not tested with other versions)
- MySQL (docker-compose.yml for testing is provided if you're using docker)

### Installation

1. Install dependencies
```bash
npm install
```

2. Push database schema
```bash
npm run db:push
```

3. Run development
```bash
npm run dev
```

#### Other

- Drizzle Studio
```bash
npm run db:studio
```

- Tailwind watch mode for development
```bash
npm run tailwind:dev
```
