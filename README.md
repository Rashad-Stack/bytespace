# ByteSpace

> An online learning platform where curious people unlock hundreds of courses across design, development, business, and beyond.

---

## Description

ByteSpace is a full-stack-ready frontend for a modern e-learning marketplace. It gives learners a fast, focused path from discovery to enrollment — browsing featured categories, reading detailed course pages with previews and ratings, and finding creators to follow. It's built for students, professionals, and career-switchers who want curated, high-quality courses without the noise.

---

## 🛠️ Tech Stack

| Technology | Why it was chosen |
|---|---|
| **Next.js 16** | App Router with route groups keeps auth and main layouts cleanly separated; built-in image optimization and SSR improve performance |
| **React 19** | Latest concurrent features and the new RSC model enable server-rendered components with minimal client JS |
| **TypeScript** | End-to-end type safety from `data/*.json` shapes through component props reduces runtime surprises |
| **Tailwind CSS v4** | Utility-first with the new `@tailwindcss/postcss` engine; much faster builds and no config overhead |
| **shadcn/ui + Base UI** | Accessible, unstyled primitives (Dialog, Avatar, Badge, etc.) composed with Tailwind rather than fighting a design system |
| **React Hook Form + Zod** | Performant, schema-driven form validation with zero re-renders on keystroke |
| **Motion (Framer Motion)** | Declarative animation primitives for hero sections, entrance effects, and micro-interactions |
| **next-themes** | Zero-flash dark/light theme switching integrated with Next.js App Router |
| **Bun** | Faster install and script execution compared to npm/yarn; `bun.lock` ensures reproducible installs |

---

## ✨ Features

- **Course Discovery** — Browse hundreds of courses filtered by category (Design, Development, IT & Software, Business, Marketing, Photography, and more)
- **Category Tabs** — Featured categories with icon-driven navigation and a "see all" overflow list
- **Course Detail Pages** — Video player preview, instructor info, star ratings, lesson breakdown, and a full reviews tab
- **Full-Text Search** — Hero-mounted search bar with a variant system for both global and contextual search
- **Creator Profiles** — Dedicated `/creators` listing with instructor cards
- **Authentication Flows** — Sign-in and sign-up pages with social login (Google, Facebook) and validated form fields
- **Dark / Light Theme** — System-aware with an explicit toggle; zero flash on load
- **Responsive Layout** — Mobile-first with a collapsible hamburger menu and fluid type scaling using `clamp()`
- **Star Rating System** — Composite rating component with visual breakdown and summary statistics
- **Pagination** — Client-side pagination on the courses listing

---

## 📂 Project Structure

```
bytespace/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Route group: sign-in & sign-up layouts
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/                   # Route group: main app with navbar + footer
│   │   ├── (home)/               # Landing page with Hero, Partners, Courses, About, Potential
│   │   ├── courses/              # Course listing + dynamic [courseId] detail pages
│   │   └── creators/             # Creator directory
│   ├── layout.tsx                # Root layout (fonts, theme provider, global styles)
│   ├── globals.css               # Tailwind base + custom design tokens
│   └── not-found.tsx             # 404 page
│
├── components/
│   ├── shared/                   # Cross-page components (Header, Footer, Search, ProductCard, etc.)
│   ├── ui/                       # Primitive UI components (Button, Input, Badge, Avatar, etc.)
│   ├── Modal/                    # URL-driven modal system with search param state
│   └── theme-provider.tsx        # next-themes wrapper
│
├── hooks/                        # Custom React hooks
│   ├── use-auto-height.tsx       # Dynamic height measurement
│   ├── use-controlled-state.tsx  # Controlled/uncontrolled state pattern
│   └── use-auth-form.ts          # Auth form logic
│
├── lib/
│   ├── utils.ts                  # cn() helper and shared utilities
│   └── get-strict-context.tsx    # Strict React context with error boundary
│
├── data/                         # Static JSON data (courses, creators, categories, course-details)
├── types/                        # TypeScript declarations (product types, SVG modules)
├── public/
│   ├── icons/                    # SVG icon set (category icons, UI icons)
│   └── images/                   # Static images (hero backgrounds, etc.)
└── extra/                        # Design reference PDFs (Colors, Grid, Typography)
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** ≥ 20
- **Bun** (recommended) or npm/yarn/pnpm

### Clone & Install

```bash
git clone https://github.com/Rashad-Stack/bytespace.git
cd bytespace

# Using Bun (recommended)
bun install

# Or npm
npm install
```

### Run Dev Server

```bash
bun dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
bun run build
bun start
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `bun dev` | Start the Next.js development server with hot reload |
| `bun run build` | Build the application for production |
| `bun start` | Start the production server |
| `bun run lint` | Run ESLint across the project |
| `bun run format` | Format all `.ts` / `.tsx` files with Prettier |
| `bun run typecheck` | Run TypeScript compiler in check mode (no emit) |

---

## 🧩 Case Study

### 🎯 Project Goals & Context

ByteSpace was built as a frontend challenge to replicate and extend the UX patterns of modern learning marketplaces. The goal was to go beyond a static mockup and produce a production-grade codebase: typed data, accessible components, real routing, and a theme system that holds together across light, dark, and mobile contexts.

The success criteria were clear: the site should feel fast, scannable, and trustworthy — the way a learner expects an education product to feel.

---

### 🚧 Problems Faced

**1. Route group layout isolation**  
Auth pages (sign-in, sign-up) needed a completely different chrome — no navigation bar, no footer — while the main app needed a shared persistent layout. Nesting both under the same root layout initially bled styles and context between them.

**2. Fluid type scaling without a design token gap**  
The designs called for type that scales continuously between mobile and desktop without a hard media query jump. Mapping `clamp()` values consistently across 10+ heading instances while staying DRY was tedious.

**3. Accessible modal with URL-driven state**  
The modal component needed to preserve open/close state in the URL (so deep links work and the back button closes the modal) while staying accessible — focus trapping, scroll lock, and aria attributes all had to cooperate.

**4. SVG icon system in Next.js App Router**  
Inline SVGs as React components (via `@svgr/webpack`) don't work out of the box with the App Router's Webpack config. Getting SVGR integrated without ejecting required a custom loader config.

**5. Dark theme consistency across Base UI and shadcn primitives**  
Base UI and shadcn both ship with their own CSS variable conventions. Reconciling two variable namespaces so that a single `data-theme` toggle updated all components without overrides leaking was a CSS specificity puzzle.

---

### 💡 How the Problems Were Solved

**Route group isolation** was solved with Next.js App Router's `(group)` convention. The `(auth)` group gets its own `layout.tsx` with `AuthHeader` only; the `(main)` group gets the full `Header` + `Footer` shell. The root `layout.tsx` handles only fonts, theme, and global styles — nothing that either sub-layout shouldn't inherit.

**Fluid type scaling** was standardized with a small set of `clamp()` tokens defined in `globals.css` and applied through Tailwind class aliases (`heading-l`, `body-l`). All heading instances pull from the same three or four tokens rather than inline `style` props.

**URL-driven modal state** was handled with a custom `use-url-search-params` hook that reads and writes a specific search param. Base UI's Dialog manages focus and ARIA; the hook controls visibility from URL state. The back button naturally closes the modal because it pops the param from the history stack.

**SVGR in App Router** was resolved by adding `@svgr/webpack` as a custom Webpack rule in `next.config.js`, transforming `*.svg` imports into React components. TypeScript module declarations in `types/svgs.d.ts` give the imports proper types.

**Theme reconciliation** was addressed by mapping both Base UI and shadcn's primitive variables onto a single shared token layer defined on `:root`. Both systems now reference the same surface and foreground tokens, so `data-theme="dark"` flips one set of CSS variables and everything follows.

---

### 📚 What I Learned

- **Next.js App Router route groups** are the right primitive for multi-layout applications — they're cleaner than conditional rendering in a single layout.
- **Tailwind v4's new engine** is noticeably faster on incremental builds, but the PostCSS plugin config is different enough from v3 to catch you if you're copying old setups.
- **`clamp()` for fluid type** eliminates a whole class of responsive breakpoint decisions and makes the design feel more native to the browser's own scaling model.
- **Strict TypeScript from the data layer up** (typing the JSON files through `d.ts` declarations) catches shape mismatches at build time rather than runtime, which pays dividends quickly on a data-driven UI.
- **Base UI vs. shadcn** — Base UI is less opinionated about styling; shadcn ships with more ready-made components. The combination works well when Base UI handles complex interaction primitives and shadcn handles simpler form controls.

---

### 🔮 Future Improvements

- **Backend integration** — Connect to a real API (or Next.js API routes) instead of static JSON; add server actions for enrollment and auth.
- **Search with filtering** — The search bar currently drives navigation. A full search page with faceted filters (category, level, price range, rating) is the natural next step.
- **Enrollment & cart flow** — Course cards already model a `price` field. A cart context, checkout page, and enrolled-course dashboard would complete the learner journey.
- **Optimistic UI on ratings** — Allow logged-in users to submit reviews with an optimistic update before the server responds.
- **E2E tests** — Add Playwright tests for critical flows: search → course detail, sign-up, and enrollment.
- **Content management** — Replace `data/*.json` with a headless CMS (Sanity, Contentlayer) so content editors can update courses without touching code.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss the approach.

1. Fork the repo and create a feature branch (`git checkout -b feature/my-feature`)
2. Commit your changes with a clear message
3. Push to the branch and open a Pull Request

Please keep PRs focused — one feature or fix per PR makes review faster.

---

## 📄 License

[MIT](LICENSE)

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — the App Router made route-group layout isolation straightforward
- [shadcn/ui](https://ui.shadcn.com/) — accessible component primitives without a heavy design system
- [Base UI](https://base-ui.com/) — headless, accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS that pairs naturally with component-driven design
- [Motion](https://motion.dev/) — declarative animation that kept the hero section from feeling static
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — the best form/validation pairing in the React ecosystem
- [Vercel](https://vercel.com/) — zero-config deployments that make sharing previews effortless
