# NgCryptoDashboard

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern cryptocurrency dashboard built with Angular 20 and Nx, designed to provide an intuitive interface for cryptocurrency tracking and analysis.

## 🚀 Technologies

### 🎨 Frontend

- **Angular 20** - Main framework
- **TypeScript 5.9** - Programming language
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **PostCSS** - CSS processor

### 🚧 Development Tools

- **Nx 21.5** - Monorepo and build tools
- **ESLint** - JavaScript/TypeScript linter
- **Prettier** - Code formatter
- **Jest** - Testing framework
- **Cypress** - End-to-end testing

### 🕵️ Code Quality

- **Husky** - Git hooks
- **lint-staged** - Linting on staged files
- **Angular ESLint** - Angular-specific rules

### 🏗️ Build & Deploy

- **Angular Build** - Optimized build system
- **SWC** - Fast TypeScript compiler

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ng-crypto-dashboard

# Install dependencies
npm install

# Setup git hooks (runs automatically with npm install)
npm run prepare
```

## 🚀 Development Commands

### Development

```bash
# Start development server
npm start
# or
npx nx serve

# Build for production
npm run build
# or
npx nx build
```

### Testing

```bash
# Run unit tests
npm test
# or
npx nx test

# Run e2e tests
npx nx e2e
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint
# or
npx nx lint

# Format code
npm run format
# or
npx nx format:write

# Lint staged files (automatic on commits)
npx lint-staged
```

### Other useful commands

```bash
# Show all available targets
npx nx show project

# Visualize workspace graph
npx nx graph

# List installed plugins
npx nx list
```

## 🔧 Code Quality

### Git Hooks (Husky)

The project is configured with **Husky** to automatically run quality checks before each commit:

- **Pre-commit**: Automatically runs tests and lint-staged
- **Lint-staged**: Applies linting and formatting only to staged files

### Lint-staged

Configured to process different file types:

```json
{
  "*.{ts,tsx}": ["eslint --fix"],
  "*.html": ["eslint --fix"],
  "*.{css,scss}": ["prettier --write"]
}
```

### ESLint

- Base configuration in `.eslintrc.base.json`
- Angular-specific rules
- Auto-fix enabled for automatic corrections

### Prettier

- Automatic code formatting
- Consistent configuration across the project

## 📁 Project Generation

### Applications

```bash
# Generate new Angular application
npx nx g @nx/angular:app app-name

# Generate application with routing
npx nx g @nx/angular:app app-name --routing
```

### Libraries

```bash
# Generate new library
npx nx g @nx/angular:lib lib-name

# Generate library with routing
npx nx g @nx/angular:lib lib-name --routing
```

### Components and Services

```bash
# Generate component
npx nx g @nx/angular:component component-name --project=app-name

# Generate service
npx nx g @nx/angular:service service-name --project=app-name
```

### Useful commands

```bash
# List installed plugins
npx nx list

# View available generators
npx nx list @nx/angular

# View workspace graph
npx nx graph
```

## 🎯 Next Steps

### Planned Features

- [ ] Integration with cryptocurrency APIs (CoinGecko, CoinMarketCap)
- [ ] Real-time dashboard with charts
- [ ] Price alert system
- [ ] Portfolio tracking
- [ ] Basic technical analysis
- [ ] Dark/light mode
- [ ] Optimized responsive design

### Project Structure

```
src/
├── app/                 # Main application
│   ├── components/      # Reusable components
│   ├── services/        # Angular services
│   ├── models/          # Interfaces and types
│   └── utils/           # Utilities
├── assets/              # Static resources
└── styles/              # Global styles
```

## 🛠️ Recommended Tools

### Nx Console

Editor extension that enhances the development experience:

- Run tasks from the IDE
- Generate code with graphical interface
- Improved autocompletion

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 📚 Useful Resources

### Documentation

- [Angular Documentation](https://angular.io/docs)
- [Nx Documentation](https://nx.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Community

- [Nx Discord](https://go.nx.dev/community)
- [Angular Discord](https://discord.gg/angular)
- [Twitter Nx](https://twitter.com/nxdevtools)
- [Twitter Angular](https://twitter.com/angular)

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
