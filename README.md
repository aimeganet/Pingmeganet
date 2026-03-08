# PingMegaNet SaaS

Production-ready Next.js 14 SaaS starter for AI-assisted Facebook publishing.

## Stack
- Next.js 14 (App Router), TypeScript, Tailwind
- Supabase (Auth + PostgreSQL + RLS)
- React Hook Form + Zod
- Zustand
- Recharts
- next-intl (Arabic + English)

## Run Locally on Windows
1. Copy env file:
   - `copy .env.example .env.local`
2. Fill Supabase/Facebook/OpenAI keys.
3. Install dependencies:
   - `npm install`
4. Run app:
   - `npm run dev`

## Supabase Setup
1. Create a Supabase project.
2. Run SQL in `database/schema.sql` in Supabase SQL Editor.
3. Enable Email auth provider.
4. Add URL keys in `.env.local`.

## Deployment (Vercel)
1. Import repository in Vercel.
2. Set all environment variables from `.env.example`.
3. Deploy with default Next.js settings.

## Scripts
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
