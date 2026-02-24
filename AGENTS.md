# AGENTS.md

## Cursor Cloud specific instructions

This is a React portfolio site (Create React App) with no backend, no database, and no Docker.

### Services

| Service | Command | Port |
|---------|---------|------|
| React dev server | `npm start` | 3000 |

### Development commands

- **Install deps:** `npm install`
- **Dev server:** `npm start` (port 3000)
- **Build:** `npm run build`
- **Lint:** `npx eslint src/`
- **Test:** `CI=true npm test -- --passWithNoTests` (no test files exist yet)

### Notes

- ESLint config is embedded in `package.json` under `eslintConfig` (extends `react-app` and `react-app/jest`).
- There is no `.nvmrc` or Node version constraint; Node 22 works fine.
- `npm test` exits with code 1 by default because no test files exist; pass `--passWithNoTests` to avoid the non-zero exit.
- The build produces warnings (unused vars, missing hook deps) but compiles successfully.
