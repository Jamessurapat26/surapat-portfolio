# AGENTS.md

Guidelines for AI agents working in this Astro.js repository.

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Astro CLI commands
npm run astro -- <command>
```

## Testing

**No testing framework is currently configured.** This is a minimal Astro starter project.

To add testing, consider:
- Unit tests: Vitest with `@astrojs/test`
- E2E tests: Playwright

## Linting/Formatting

**No linting or formatting tools are currently configured.**

To add:
- ESLint: `@typescript-eslint` + `eslint-plugin-astro`
- Prettier: `prettier-plugin-astro`

## Code Style Guidelines

### General

- **TypeScript**: Strict mode enabled (extends `astro/tsconfigs/strict`)
- **Modules**: ES modules (`"type": "module"` in package.json)
- **Indentation**: Tabs (not spaces)
- **Line endings**: LF

### Astro Components (.astro files)

```astro
---
// Frontmatter at top
import Component from '../components/Component.astro';
import { someUtil } from '../utils';

// Props interface (if using TypeScript)
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!-- Template -->
<div class="container">
  <Component title={title} />
</div>

<style>
  /* Scoped styles at bottom */
  .container {
    padding: 1rem;
  }
</style>
```

### Imports

- Use relative paths for local imports: `../components/Foo.astro`
- Group imports: external first, then internal, then assets
- Use single quotes for JavaScript strings

### Naming Conventions

- **Components**: PascalCase (`Welcome.astro`, `Layout.astro`)
- **Pages**: lowercase (`index.astro`, `about.astro`)
- **Directories**: lowercase (`components/`, `layouts/`, `pages/`)
- **Variables/functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### CSS/SCSS

- Use scoped `<style>` tags in Astro components
- Prefer CSS custom properties for theming
- No semicolons needed in CSS (project convention)
- Use lowercase selectors
- Media queries at bottom of stylesheet

### Error Handling

- Use TypeScript strict mode for compile-time safety
- Handle async errors with try/catch
- Validate props with TypeScript interfaces

### Accessibility

- Use semantic HTML elements
- Include alt text for images
- Ensure proper heading hierarchy
- Use ARIA labels where needed

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable Astro components
├── layouts/         # Page layout templates
└── pages/           # File-based routing
public/              # Public static files
```

## Git

- Do not commit: `dist/`, `.astro/`, `node_modules/`, `.env` files
- Use conventional commits (optional but recommended)

## VS Code

Recommended extension: `astro-build.astro-vscode`

## Important Notes

- This is a minimal Astro 5.x starter project
- No custom tooling configured yet - establish conventions as you add tools
- Follow existing patterns in `src/components/Welcome.astro` and `src/layouts/Layout.astro`
