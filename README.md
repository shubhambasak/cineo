# Cineo

<p align="center">
  <img src="assets/images/logo.png" alt="Cineo Logo" width="120" height="120" />
</p>

**Cineo** is a cross-platform movie discovery application built with **Expo**, **React Native**, and **NativeWind** (Tailwind CSS for React Native). Browse the latest movies, search for your favorites, and save them for later—all wrapped in a modern, dark-themed UI optimized for iOS, Android, and Web.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)
- [Architecture Overview](#architecture-overview)
- [Theming & Design](#theming--design)
- [API Integration](#api-integration)
- [Path Aliases](#path-aliases)
- [Development Notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)

---

## Features

| Feature | Description |
|--------|-------------|
| **Cross-Platform** | Single codebase runs on iOS, Android, and Web via Expo |
| **Movie Discovery** | Browse latest movies powered by the [OMDb API](https://www.omdbapi.com/) |
| **Search** | Search for movies by title (Search tab) |
| **Saved Movies** | Bookmark movies to watch later (Saved tab) |
| **Profile** | User profile management (Profile tab) |
| **Movie Details** | Deep link to individual movie detail pages via `/movies/[id]` |
| **Modern UI** | Dark theme with purple accent colors (`#AB8BFF`), custom tab bar with gradient highlights |
| **File-based Routing** | [Expo Router](https://docs.expo.dev/router/introduction/) for intuitive, convention-based navigation |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Expo](https://expo.dev/) | ~54 | React Native development platform with OTA updates, managed workflow |
| [React Native](https://reactnative.dev/) | 0.81 | Cross-platform mobile framework |
| [React](https://react.dev/) | 19.1 | UI library |
| [Expo Router](https://docs.expo.dev/router/introduction/) | ~6 | File-based routing and navigation |
| [NativeWind](https://www.nativewind.dev/) | v4 | Tailwind CSS for React Native styling |
| [React Navigation](https://reactnavigation.org/) | v7 | Tab and stack navigation primitives |
| [TypeScript](https://www.typescriptlang.org/) | ~5.9 | Type-safe JavaScript |
| [OMDb API](https://www.omdbapi.com/) | — | Movie data source (search, listings) |

---

## Project Structure

```
cineo/
├── app/                          # Expo Router pages (file-based routing)
│   ├── (tabs)/                   # Tab navigator group
│   │   ├── _layout.tsx           # Tab bar configuration, custom TabIcon
│   │   ├── index.tsx             # Home screen — latest movies grid
│   │   ├── search.tsx            # Search screen (placeholder)
│   │   ├── saved.tsx             # Saved/bookmarked movies (placeholder)
│   │   └── profile.tsx           # User profile (placeholder)
│   ├── movies/
│   │   └── [id].tsx              # Movie detail screen (dynamic route)
│   ├── _layout.tsx               # Root layout with Stack navigator
│   └── globals.css               # Tailwind base, components, utilities
│
├── assets/
│   ├── fonts/                    # Custom fonts (Space Mono)
│   ├── icons/                    # App icons (home, search, save, star, play, etc.)
│   └── images/                   # Backgrounds, gradients, logo
│
├── components/
│   ├── MovieCard.tsx             # Movie card for grid display
│   └── SearchBar.tsx             # Search input with icon, placeholder
│
├── constants/
│   ├── icons.ts                  # Icon asset imports
│   └── images.ts                 # Image asset imports
│
├── interfaces/
│   └── interfaces.d.ts           # TypeScript interfaces (Movie, MovieDetails, etc.)
│
├── services/
│   ├── api.ts                    # OMDb API client & fetch functions
│   └── useFetch.ts               # Custom React hook for data fetching
│
├── types/
│   └── images.d.ts               # Module declarations for image imports
│
├── .env.example                  # Example environment variables
├── .gitignore
├── app.json                      # Expo configuration (name, icon, splash, schemes)
├── babel.config.js               # Babel + NativeWind preset
├── eslint.config.js
├── metro.config.js               # Metro bundler + NativeWind
├── nativewind-env.d.ts           # NativeWind TypeScript declarations
├── package.json
├── tailwind.config.js            # Tailwind theme (colors, presets)
└── tsconfig.json                 # TypeScript config with @/ path alias
```

---

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn**
- **Expo Go** app on your phone (for physical device testing), or
- **Android Emulator** / **iOS Simulator** for local testing

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/shubhambasak/cineo.git
cd cineo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file and add your API key:

```bash
cp .env.example .env
```

Edit `.env` and set your OMDb API key:

```env
EXPO_PUBLIC_MOVIE_API_KEY=your_omdb_api_key
```

Get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

---

## Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `EXPO_PUBLIC_MOVIE_API_KEY` | Yes | OMDb API key for movie data. Must be prefixed with `EXPO_PUBLIC_` to be available in the client. |

### Expo Configuration (`app.json`)

- **Scheme**: `movies` — used for deep linking (e.g. `movies://movies/tt1234567`)
- **Orientation**: Portrait
- **Icon**: `./assets/images/logo.png`
- **Plugins**: `expo-router`, `expo-splash-screen` with custom config
- **Experiments**: `typedRoutes`, `reactCompiler` enabled

---

## Running the App

Start the Expo development server:

```bash
npx expo start
```

Then:

- Press **`a`** — Open on Android emulator
- Press **`i`** — Open on iOS simulator
- Scan the **QR code** with **Expo Go** on your physical device
- Press **`w`** — Open in web browser

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Start with Android target |
| `npm run ios` | Start with iOS target |
| `npm run web` | Start for web |
| `npm run lint` | Run ESLint |

---

## Architecture Overview

### Routing (Expo Router)

- **Root**: `app/_layout.tsx` — Stack navigator, loads global styles
- **Tabs**: `app/(tabs)/_layout.tsx` — Bottom tab bar with custom icons
- **Dynamic route**: `app/movies/[id].tsx` — Movie detail by ID

### Data Fetching

- **`useFetch`** (`services/useFetch.ts`): Generic hook for async data with `loading`, `error`, `data`, `refetch`, `reset`
- **`fetchMovies`** (`services/api.ts`): Fetches from OMDb with optional `query` (search term or default `"movie"`)

### API Response

OMDb returns objects with `imdbID`, `Title`, `Poster`, `Year`, `Type`. The app uses `imdbID` as the unique key for list items.

---

## Theming & Design

Cineo uses a custom dark theme in `tailwind.config.js`:

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#030014` | Main background |
| `secondary` | `#151312` | Tab highlight background |
| `accent` | `#AB8BFF` | Accent / CTA elements |
| `light-100` | `#D6C6FF` | Primary light text |
| `light-200` | `#A8B5DB` | Secondary text |
| `light-300` | `#9CA4AB` | Muted text |
| `dark-100` | `#221f3d` | Card backgrounds |
| `dark-200` | `#0f0d23` | Tab bar, input backgrounds |

---

## API Integration

The app uses the **OMDb API** for movie data:

- **Base URL**: `https://www.omdbapi.com/`
- **Authentication**: API key via query param `apikey`
- **Endpoints**: Search (`s` parameter) — with query or default `"movie"` for latest

See `services/api.ts` for the implementation.

---

## Path Aliases

The project uses `@/` as an alias for the project root (see `tsconfig.json`):

```ts
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';
```

---

## Development Notes

- **VS Code**: Recommended extensions in `.vscode/extensions.json` (Expo tools)
- **Formatting**: Code actions on save (organize imports, fix all)
- **Native folders**: `ios/` and `android/` are gitignored; use `npx expo prebuild` if you need native projects

---

## Contributing

Contributions are welcome. Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ using <a href="https://expo.dev">Expo</a> and <a href="https://reactnative.dev">React Native</a>
</p>
