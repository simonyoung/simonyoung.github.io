# Simon Young's Personal Website

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

Personal website built with Astro v5.4.1 static site generator, TypeScript, Tailwind CSS, and MDX for blog content. The site is automatically deployed to GitHub Pages via GitHub Actions on pushes to the main branch.

## Working Effectively

### Prerequisites and Setup
- Install Node.js v20.19.4 or compatible version
- Install PNPM globally: `npm install -g pnpm`
  - Project enforces PNPM usage via preinstall script
- Bootstrap the repository:
  - `pnpm install` -- takes 60 seconds. NEVER CANCEL. Set timeout to 120+ seconds.

### Build and Development Commands
- Build the project: 
  - `pnpm run build` -- takes 4 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
  - Generates static files in `./dist/` directory
- Start development server:
  - `pnpm run dev` -- starts server at `http://localhost:4321`
  - Use `pnpm run dev --host` to expose server on network
- Preview production build:
  - `pnpm run preview` -- serves built site at `http://localhost:4321`
- Access Astro CLI: `pnpm run astro [command]`

### Available Astro Commands
- `pnpm run astro add` -- Add integrations
- `pnpm run astro build` -- Build project  
- `pnpm run astro check` -- Requires additional dependencies (@astrojs/check, typescript)
- `pnpm run astro dev` -- Start dev server
- `pnpm run astro preview` -- Preview build
- `pnpm run astro sync` -- Generate content collection types

## Validation

### Manual Testing Requirements
ALWAYS manually validate changes by:
1. Running `pnpm run build` to ensure build succeeds
2. Testing the development server with `pnpm run dev`
3. Navigate through all site pages:
   - Home page (`/`)
   - Blog listing (`/blog`)  
   - Individual blog posts (`/blog/[slug]`)
4. Verify navigation links work correctly
5. Check that blog posts render properly with MDX content

### Testing Scenarios
After making changes, ALWAYS test these user scenarios:
- Navigate from home to blog page
- Click on a blog post from the blog listing
- Use back navigation from blog post to blog listing
- Verify external links (LinkedIn, GitHub) are working
- Check mobile responsiveness in browser dev tools

## Repository Structure

### Key Directories
- `src/pages/` -- Pages and routing (includes blog posts in MDX format)
- `src/components/` -- Reusable Astro components (Header.astro, Footer.astro)
- `src/layouts/` -- Layout components (BaseLayout.astro, BlogPostLayout.astro)
- `src/styles/` -- Global CSS styles
- `public/` -- Static assets (favicon.svg, s.svg)
- `dist/` -- Build output (generated, do not edit)
- `.astro/` -- Astro generated files (gitignored except types)

### Configuration Files
- `astro.config.mjs` -- Astro configuration with Tailwind and MDX integrations
- `tailwind.config.mjs` -- Tailwind CSS configuration with custom theme
- `tsconfig.json` -- TypeScript configuration (extends Astro base)
- `package.json` -- Dependencies and scripts
- `pnpm-workspace.yaml` -- PNPM workspace configuration

### Blog Content
- Blog posts are written in MDX format in `src/pages/blog/`
- Each blog post has frontmatter with title, date, and other metadata
- Blog listing page automatically discovers posts using `Astro.glob()` (deprecated but functional)

## CI/CD Pipeline

### GitHub Actions Deployment
- Workflow: `.github/workflows/deploy.yml`
- Triggers: Push to `main` branch or manual workflow dispatch
- Uses `withastro/action@v3` for building and deploying to GitHub Pages
- Automatic deployment with no additional configuration needed

### Making Changes
- All changes to `main` branch automatically trigger deployment
- Build and test locally before pushing to ensure deployment success
- Site URL: `https://simonyoung.io` (configured in astro.config.mjs)

## Development Tools

### VSCode Integration
- Recommended extension: `astro-build.astro-vscode`
- Debug configuration available in `.vscode/launch.json`
- Run dev server via VSCode debugger: "Development server" launch config

### Styling and Theming
- Uses Tailwind CSS with custom color palette (primary blues)
- Typography plugin enabled for blog content rendering
- Custom font stack: Inter (sans), Merriweather (serif)

## Common Tasks

### Adding New Blog Posts
1. Create new `.md` or `.mdx` file in `src/pages/blog/`
2. Include frontmatter with title, date, description
3. Use MDX format for rich content with components
4. Blog listing page automatically includes new posts

### Modifying Styles
- Edit `tailwind.config.mjs` for theme changes
- Global styles in `src/styles/global.css`
- Component-specific styles use Tailwind classes in `.astro` files

### Repository Root Contents
```
.
├── README.md
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tailwind.config.mjs
├── tsconfig.json
├── public/
├── src/
├── .github/
├── .vscode/
└── dist/ (generated)
```

### Package.json Scripts
```json
{
  "preinstall": "npx only-allow pnpm",
  "dev": "astro dev",
  "start": "astro dev", 
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro"
}
```

## Important Notes
- NEVER use npm or yarn - project enforces PNPM usage
- Build process is fast (4 seconds) - no need for complex build optimizations
- No testing framework configured - validation is done manually
- No linting configuration beyond Astro's built-in TypeScript checking
- Site is static - no server-side functionality or database
- All external links should open in new tabs for better UX
- Responsive design is handled through Tailwind CSS classes