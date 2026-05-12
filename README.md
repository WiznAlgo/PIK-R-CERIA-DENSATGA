# PIK-R CERIA DENSATGA

Website modern, mobile-first, dan aksesibel untuk PIK-R CERIA DENSATGA.

## Tech Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- lucide-react icons
- Poppins via `next/font`

## Getting Started

Install dependencies and run the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build & Checks

```bash
npm run lint
npm run build
```

## Aset

Logo dan file modul sudah memakai fallback lokal supaya website lengkap saat
belum ada aset final. Semua data utama mudah diganti
di `src/lib/site-data.ts`:

- Logo: `public/logo-ceria.svg`
- Folder modul: `site.moduleDriveFolder`
- Link tiap modul: `modules[].driveUrl`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
