# Hop Hop Photo Booth — landing

Conversion-focused landing za uslugu najma photo bootha (360 + magic mirror) za evente u Zagrebu. Dio Hop Hop Eventi obitelji (sestrinska usluga: [hophop-napuhanci.com](https://hophop-napuhanci.com)).

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (dizajn tokeni u `tailwind.config.js`)
- Supabase za lead formu (`photobooth_leads` tablica)
- Netlify (deploy + SPA redirect + statički SEO prerender)
- Meta Pixel + GA4 (env-driven)

## Lokalno

```bash
npm install
cp .env.example .env
npm run dev          # http://localhost:5173
npm run build        # build + prerender SEO sadržaja u dist/index.html
npm run preview
```

## Env

Vidi `.env.example`. `VITE_GA_ID` ostavi prazno ako još nemaš GA4 id.

## Supabase

Tablica `public.photobooth_leads` (RLS uključen):
- `anon` može `INSERT` (javna lead forma)
- samo `admin` rola može `SELECT`

Migracija je već primijenjena na projekt `HOP HOP` (`egwtrsfcobwybcnbqsok`).

## Što treba dopuniti (`[UREDI]` u kodu)

- **Brand tokeni** (`tailwind.config.js`, `src/components/Logo.tsx`): zamijeniti palette i fontove točnim vrijednostima iz napuhanci repoa.
- **Logo asset**: dodati pravi SVG/PNG u `public/` i swap u `Logo.tsx`.
- **Hero video**: `public/hero.mp4` + `public/hero-poster.jpg`, swap u `Hero.tsx` (`HeroMedia`).
- **OG image**: `public/og-image.jpg` (1200x630).
- **Galerija**: pravi TikTok/Reels embedovi u `Gallery.tsx`.
- **Footer**: točan email, TikTok i Instagram URL u `src/lib/site.ts`.
- **Trust traka** u Heru: točan broj odrađenih evenata.
- **GA id** u `.env`.
- **Canonical / og:url / sitemap**: zamijeniti `hophop-photo-booth.netlify.app` finalnom domenom.

## Sekcije

Sticky header → Hero → Uređaji (360 + mirror) → Paketi → Kako funkcionira → Za koga → Galerija → FAQ → Forma + kontakt → Footer + sticky mobilni CTA.

## Spreman za objedinjavanje

Header/Footer su samostalne komponente. Routing može lako postati `/photo-booth` ruta pod krovnom domenom. Supabase leadovi taggani `service='photobooth'` poljem.
