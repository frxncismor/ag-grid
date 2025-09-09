# NgCryptoDashboard

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern cryptocurrency dashboard built with Angular 20 and Nx, featuring real-time price updates, automatic data refresh, and an intuitive interface for cryptocurrency tracking and analysis.

## ✨ Features

### 🔄 Real-time Data Updates

- **Automatic refresh** every 30 seconds (configurable)
- **Manual refresh** button for instant updates
- **Customizable intervals**: 10s, 30s, 1min, 5min
- **Auto ON/OFF toggle** to control automatic updates
- **Last update indicator** showing when data was refreshed

### 📊 Cryptocurrency Data

- **Top 100 cryptocurrencies** by market cap
- **Real-time prices** in USD
- **Market capitalization** data
- **Coin images** and symbols
- **Responsive data table** with sorting capabilities

### 🎨 Modern UI/UX

- **Dark/Light mode** support
- **Responsive design** for all devices
- **Tailwind CSS** styling
- **Interactive controls** for data management
- **Clean, professional interface**

## 🚀 Technologies

### 🎨 Frontend

- **Angular 20** - Main framework
- **TypeScript 5.9** - Programming language
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **PostCSS** - CSS processor
- **RxJS** - Reactive programming for real-time updates
- **AG-Grid** - Advanced data grid component

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

### 🌐 API Integration

- **CoinGecko API** - Free cryptocurrency data provider
- **No API key required** for basic usage
- **Real-time price data** with automatic updates
- **Rate limit friendly** (50 requests/minute)
- **Endpoints used**:
  - `/coins/markets` - Top 100 cryptocurrencies by market cap
  - `/coins/{id}` - Individual coin details

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

### Quick Start

```bash
# Start the development server
npm start

# Open your browser to http://localhost:4200
# The dashboard will automatically load cryptocurrency data
```

**No additional configuration required!** The app uses CoinGecko's free API and works out of the box.

## 📱 How to Use

### Dashboard Controls

1. **Automatic Updates**: The dashboard automatically refreshes data every 30 seconds
2. **Manual Refresh**: Click the "Actualizar" button for instant data updates
3. **Auto Toggle**: Use the "Auto ON/OFF" button to enable/disable automatic updates
4. **Interval Selection**: Choose update frequency from the dropdown (10s, 30s, 1min, 5min)
5. **Last Update**: View when data was last refreshed in the header

### Data Table

- **Sortable Columns**: Click column headers to sort data
- **Responsive Design**: Table adapts to different screen sizes
- **Real-time Prices**: Prices update automatically based on your selected interval
- **Market Data**: View current prices and market capitalization

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

## 🎯 Current Status

### ✅ Implemented Features

- [x] **CoinGecko API Integration** - Real-time cryptocurrency data
- [x] **Automatic Data Updates** - Configurable refresh intervals
- [x] **Interactive Dashboard** - Modern UI with controls
- [x] **Responsive Design** - Works on all devices
- [x] **Dark/Light Mode** - Theme switching support
- [x] **Data Table** - Sortable cryptocurrency list
- [x] **Real-time Indicators** - Last update timestamps

### 🚧 Planned Features

- [ ] **Price Charts** - Historical price visualization
- [ ] **Price Alerts** - Notification system
- [ ] **Portfolio Tracking** - Personal crypto portfolio
- [ ] **Technical Analysis** - Basic chart indicators
- [ ] **Favorites System** - Bookmark preferred coins
- [ ] **Export Functionality** - Data export to Excel/CSV
- [ ] **Advanced Filtering** - Search and filter options

### Project Structure

```
ng-crypto-dashboard/
├── libs/
│   ├── core/                    # Core functionality
│   │   ├── guards/              # Route guards
│   │   └── interceptors/        # HTTP interceptors
│   ├── features/
│   │   └── coins/               # Cryptocurrency feature
│   │       ├── data-access/     # Services and data layer
│   │       ├── pages/           # Page components
│   │       └── ui/              # UI components
│   ├── shared-ui/               # Shared UI components
│   └── state/                   # State management
├── src/
│   ├── app/                     # Main application
│   │   ├── app.config.ts        # App configuration
│   │   ├── app.routes.ts        # Routing configuration
│   │   └── app.html             # Main template
│   ├── environments/            # Environment configs
│   └── styles.css               # Global styles
└── docs/                        # Documentation
    ├── COINGECKO_SETUP.md       # API setup guide
    └── CORS_SOLUTION.md         # CORS configuration
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
