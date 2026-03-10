# Arknetic Fashion E-Commerce

A fashion e-commerce homepage built from a Figma design (node 234-873), featuring a clothing brand called Arknetic.

## Architecture

- **Frontend**: React + TypeScript with Vite, served from `client/`
- **Backend**: Express.js server in `server/`
- **Styling**: Tailwind CSS v3 with shadcn/ui components
- **Routing**: Wouter (client-side)
- **State**: TanStack Query
- **Database**: PostgreSQL with Drizzle ORM (schema in `shared/schema.ts`)

## Project Structure

```
client/
  src/
    pages/
      HomePageUi.tsx          # Main homepage layout
      sections/               # Individual page sections
        FeaturedModelsSection.tsx
        NewArrivalsGallerySection.tsx
        NewArrivalsInfoSection.tsx
        OfficeWearModelsSection.tsx
        OfficeWearProductListSection.tsx
        PromotionalVideosSection.tsx
        QuickCollectionsSection.tsx
    components/ui/            # shadcn/ui components
    lib/                      # Utilities
  public/
    figmaAssets/              # Figma-exported images and SVGs
server/
  index.ts                    # Express server entry point
  routes.ts                   # API routes
  static.ts                   # Static file serving for production
  vite.ts                     # Vite dev server setup
shared/
  schema.ts                   # Drizzle database schema
```

## Running

- Development: `npm run dev` (port 5000)
- Build: `npm run build`
- Production: `npm run start`

## Key Design Choices

- All figma assets are served from `/figmaAssets/` (public folder)
- CSS background images use absolute paths (`url(/figmaAssets/...)`)
- The app uses Poppins and Italiana fonts from the Figma design
- Brand color: `#006838` (dark green)
- Gradient: `linear-gradient(90deg, #006838 0%, #017F45 24%, #008849 50%, #017F45 75%, #006838 100%)`
