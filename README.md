# Cineo

A cross-platform mobile movie discovery app built with **Expo**, **React Native**, and **NativeWind** (Tailwind CSS for React Native). Browse the latest movies, search your favorites, and save them for later—all with a modern, dark-themed UI.

![Cineo](assets/images/logo.png)

## Features

- **Cross-Platform**: Runs on iOS, Android, and Web via Expo
- **Movie Discovery**: Browse latest movies powered by the [OMDb API](https://www.omdbapi.com/)
- **Search**: Search for movies by title (search screen)
- **Saved Movies**: Bookmark movies to watch later
- **Profile**: User profile management
- **Modern UI**: Dark theme with purple accent colors, custom tab bar, and gradient highlights
- **File-based Routing**: Uses [Expo Router](https://docs.expo.dev/router/introduction/) for intuitive navigation

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Expo](https://expo.dev/) ~54 | React Native development platform |
| [React Native](https://reactnative.dev/) 0.81 | Cross-platform mobile framework |
| [Expo Router](https://docs.expo.dev/router/introduction/) ~6 | File-based routing and navigation |
| [NativeWind](https://www.nativewind.dev/) v4 | Tailwind CSS for React Native |
| [React Navigation](https://reactnavigation.org/) v7 | Tab and stack navigation |
| [TypeScript](https://www.typescriptlang.org/) ~5.9 | Type-safe JavaScript |
| [OMDb API](https://www.omdbapi.com/) | Movie data source |

## Project Structure

```
cineo/
├── app/                    # Expo Router pages (file-based routing)
│   ├── (tabs)/             # Tab navigator screens
│   │   ├── _layout.tsx     # Tab bar configuration
│   │   ├── index.tsx       # Home screen (latest movies)
│   │   ├── search.tsx      # Search screen
│   │   ├── saved.tsx       # Saved/bookmarked movies
│   │   └── profile.tsx     # User profile
│   ├── movies/
│   │   └── [id].tsx        # Movie detail screen (dynamic route)
│   ├── _layout.tsx         # Root layout with Stack navigator
│   └── globals.css         # Tailwind CSS entry
├── assets/
│   ├── fonts/              # Custom fonts (Space Mono)
│   ├── icons/              # App icons (home, search, save, etc.)
│   └── images/             # Backgrounds, gradients, logo
├── components/
│   ├── MovieCard.tsx       # Movie card component
│   └── SearchBar.tsx       # Search input with icon
├── constants/
│   ├── icons.ts            # Icon asset imports
│   └── images.ts           # Image asset imports
├── interfaces/
│   └── interfaces.d.ts     # TypeScript interfaces (Movie, MovieDetails, etc.)
├── services/
│   ├── api.ts              # OMDb API client & fetch functions
│   └── useFetch.ts         # Custom React hook for data fetching
├── app.json                # Expo configuration
├── tailwind.config.js      # Tailwind theme (colors, etc.)
├── babel.config.js         # Babel + NativeWind config
├── metro.config.js         # Metro bundler + NativeWind
└── tsconfig.json           # TypeScript config with path aliases
```

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn**
- **Expo Go** app on your phone (for mobile testing) or Android/iOS simulator

## Getting Started

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

Copy the example env file and add your API key:

```bash
cp .env.example .env
```

Edit `.env` and set your OMDb API key:

```env
EXPO_PUBLIC_MOVIE_API_KEY=your_omdb_api_key
```

Get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

### 4. Start the development server

```bash
npx expo start
```

Then:

- Press **a** for Android emulator  
- Press **i** for iOS simulator  
- Scan the QR code with **Expo Go** on your device  
- Press **w** for web browser  

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Start with Android |
| `npm run ios` | Start with iOS |
| `npm run web` | Start for web |
| `npm run lint` | Run ESLint |

## Theming

Cineo uses a custom dark theme defined in `tailwind.config.js`:

| Color | Hex | Usage |
|-------|-----|-------|
| `primary` | `#030014` | Main background |
| `secondary` | `#151312` | Tab highlight background |
| `accent` | `#AB8BFF` | Accent/CTA elements |
| `light-100` | `#D6C6FF` | Light text |
| `light-200` | `#A8B5DB` | Secondary text |
| `dark-100` | `#221f3d` | Card backgrounds |
| `dark-200` | `#0f0d23` | Tab bar, input backgrounds |

## API Integration

The app uses the **OMDb API** for movie data:

- **Base URL**: `https://www.omdbapi.com/`
- **Authentication**: API key via `EXPO_PUBLIC_MOVIE_API_KEY`
- **Endpoints**: Search (`s`), general movie listing

See `services/api.ts` for the implementation.

## Path Aliases

The project uses `@/` as an alias for the project root:

```ts
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Expo](https://expo.dev) and [React Native](https://reactnative.dev).
