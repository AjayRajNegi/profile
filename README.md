# Ajay Raj Negi — Portfolio

Personal site for **Ajay Raj Negi**, a full-stack developer, DevOps engineer, and React Native developer based in India. It presents selected product work, contact details, and links to GitHub, LinkedIn, X, and a resume.

**Live:** [ajayhtml.online](https://ajayhtml.online)  
**Repository:** [github.com/AjayRajNegi/profile](https://github.com/AjayRajNegi/profile)

## Features

- Three-column desktop layout with a stacked mobile layout
- Selected work cards for Cnipbotics, Cnippet, Cnippet.Stack, Gaiaspace, Griya, Seahawk, and XDesign
- Motion-based text reveal and hover states
- SEO metadata, Open Graph / X cards, sitemap, robots, and Person structured data
- Direct contact via email, phone, and WhatsApp

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, shadcn / Base UI |
| Motion | Motion |
| Tooling | Bun, Biome |

## Getting started

Requires [Bun](https://bun.sh) `1.3.8` or later (see `packageManager` in `package.json`).

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Start the development server |
| `bun run build` | Create a production build |
| `bun start` | Serve the production build |
| `bun lint` | Run Biome checks |
| `bun format` | Format with Biome |

### Site URL

SEO tags (`metadataBase`, canonical, sitemap, Open Graph) use:

```bash
NEXT_PUBLIC_SITE_URL=https://ajayhtml.online
```

Set this in your host’s environment if the live domain changes. The fallback is `https://ajayhtml.online`.

## Project structure

```text
app/                 # App Router entry, metadata, sitemap, robots, OG image
components/layout/   # Top bar, sidebars, main work column
components/          # Work cards, motion, UI primitives
lib/site.ts          # Shared site copy, links, and JSON-LD
public/              # Profile photo and work stills
```

## Contact

- Email: [ajayrajnegi1608@gmail.com](mailto:ajayrajnegi1608@gmail.com)
- GitHub: [AjayRajNegi](https://github.com/AjayRajNegi)
- LinkedIn: [Ajay Raj Negi](https://www.linkedin.com/in/ajay-raj-negi-a3713a262/)
- X: [@AjayRajNegi1608](https://x.com/AjayRajNegi1608)

## License

This repository is personal work. All rights reserved unless a license file is added.
