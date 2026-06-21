# Product Engineering Portfolio

A config-driven, open-source portfolio for product and full-stack developers. It combines a concise recruiter view with a deeper developer view, dedicated case-study routes, responsive light and dark themes, and reusable architecture visuals.

The included content powers [Shubh Garg's portfolio](https://github.com/dev-garg-shubh/product-engineering-portfolio), but the platform is designed to be forked and adapted.

## Features

- Typed profile, project, experience, and case-study configuration
- Recruiter and developer content modes
- Dedicated, shareable case-study URLs
- Responsive command-rail navigation
- Light and dark themes with saved preferences
- Reusable case-study and architecture components
- Vercel and Netlify single-page application rewrites
- Accessible navigation, landmarks, focus states, and reduced-motion support

## Quick Start

Requirements: Node.js 20+ and pnpm.

```bash
git clone https://github.com/dev-garg-shubh/product-engineering-portfolio.git
cd product-engineering-portfolio
pnpm install
pnpm run dev
```

Open `http://localhost:5173`.

## Configuration

The platform has two primary configuration files:

### `src/config/profile.ts`

Edit this file for personal content:

- Name, role, email, LinkedIn, CV, and availability
- Project cards and status
- Case-study narratives and proof
- Experience timeline
- Skills and supporting content

### `src/config/platform.ts`

Edit this file for platform behavior:

- Brand initials and product label
- Navigation labels and destinations
- Recruiter/developer mode labels
- Repository URL
- Case-study route registration

Static SEO metadata remains in `index.html`. Replace the public assets in `public/`, including the Open Graph image and optional CV.

## Add A Project

1. Add a typed project entry to `workProjects` in `src/config/profile.ts`.
2. Register its path and component key in `caseStudyRoutes` inside `src/config/platform.ts`.
3. Build the case study in `src/sections/case-studies/` using the shared primitives.
4. Register the component in `src/sections/CaseStudyPage.tsx`.
5. Run `pnpm build` to validate types and production output.

Shared case-study primitives include headers, story columns, architecture flows, evidence lists, stack tags, and proof footers.

## Scripts

```bash
pnpm run dev    # Start Vite development server
pnpm build      # Type-check and create production output
pnpm preview    # Preview the production build
```

## Deployment

The project is a static Vite application.

- **Vercel:** `vercel.json` rewrites all routes to `index.html`.
- **Netlify:** `public/_redirects` provides the same fallback.
- **Other hosts:** configure a single-page application fallback to `/index.html`.

Build command: `pnpm build`<br>
Output directory: `dist`

## Public-Safety Checklist

Before publishing a fork:

- Remove private phone numbers, addresses, credentials, and client data.
- Replace the bundled CV and Open Graph image.
- Review project copy for confidential metrics and employer information.
- Confirm repository and social URLs.
- Search the repository for tokens, secrets, and environment files.

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the development workflow.

## License

[MIT](LICENSE) - use, modify, and publish the platform freely.
