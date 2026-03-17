# ng-crypto-dashboard

A real-time cryptocurrency dashboard built with Angular and Nx monorepo architecture. Fetches live market data from the CoinGecko API and presents it in an interactive ag-Grid data table.

## Features

- Live coin listings with price, market cap and 24h change
- Route-based lazy loading with Angular Router
- HTTP & Auth interceptors via shared `libs/core` library
- Auth guard protecting authenticated routes
- End-to-end tests with Cypress and unit tests with Jest

## Tech Stack

![Angular](https://img.shields.io/badge/Angular_20-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Nx](https://img.shields.io/badge/Nx-143055?style=flat&logo=nx&logoColor=white)
![ag-Grid](https://img.shields.io/badge/ag--Grid-FF5722?style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Husky](https://img.shields.io/badge/Husky-2C2C2C?style=flat)

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Run locally

```bash
npm start
# App available at http://localhost:4200
```

### Run tests

```bash
npm test         # Unit tests (Jest)
npm run e2e      # E2E tests (Cypress)
```

### Lint & format

```bash
npm run lint
npm run format
```

## Project Structure

```
├── src/             # Main application (Angular standalone)
│   └── app/         # Components, routes, config
├── libs/
│   └── core/        # Shared guards, interceptors
├── e2e/             # Cypress end-to-end tests
└── nx.json          # Nx workspace configuration
```

## Preview

![Preview](./assets/preview.png)
