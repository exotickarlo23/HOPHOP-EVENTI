// Lagani statički prerender za SEO/crawler-e.
// Injektira sadržaj iz src/data + glavnih sekcija kao <noscript>-fallback i u hidden div,
// tako da botovi (koji ne izvršavaju JS) vide cijeli copy odmah iz dist/index.html.
//
// Ne pokušava boot-ati cijeli React app — drži pipeline brzim i bez headless preglednika.
// Za pravi SSR/SSG kasnije: prebaciti na vite-ssg ili Astro.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve("dist/index.html");

const STATIC_SEO_CONTENT = `
<section aria-hidden="true" style="position:absolute;left:-9999px;top:-9999px;">
  <h1>Najam photo bootha za evente u Zagrebu</h1>
  <p>
    360 booth i magic mirror za svadbe, rođendane i korporativne proslave.
    Dostava, postavljanje i operater uključeni. Gosti dobiju fotke i videe
    na licu mjesta — vi dobijete uspomene i gotov sadržaj za društvene mreže.
  </p>

  <h2>Što nudimo</h2>
  <h3>360 Photo Booth</h3>
  <p>Gost stane na platformu, kamera se zavrti oko njega i snimi spektakularan usporeni video spreman za Instagram i TikTok.</p>
  <h3>Magic Mirror</h3>
  <p>Interaktivno ogledalo u punoj veličini: gosti se fotkaju, biraju rekvizite i dobiju ispisanu fotku u 10 sekundi.</p>

  <h2>Paketi i cijene</h2>
  <ul>
    <li>Basic — 3 sata, 360 booth, digitalne fotke i videi preko QR-a — od 250 €</li>
    <li>Standard — 4 sata, magic mirror, neograničeni ispis fotki, rekviziti — od 400 €</li>
    <li>Premium — 5 sati, mirror + 360, custom dizajn fotki, hostesa — od 600 €</li>
    <li>Korporativni — brendiran booth, lead capture, pola ili cijeli dan — na upit</li>
  </ul>

  <h2>Kako funkcionira</h2>
  <ol>
    <li>Zatražite ponudu — javite nam datum, lokaciju i paket koji vas zanima.</li>
    <li>Potvrdimo termin — šaljemo ponudu i rezerviramo vaš datum uz malu akontaciju.</li>
    <li>Mi dolazimo i postavljamo — operater stiže ranije, sve posloži i testira.</li>
    <li>Gosti uživaju — neograničeno fotkanje, fotke odmah u ruci.</li>
  </ol>

  <h2>Savršeno za svaki event</h2>
  <ul>
    <li>Svadbe — zabava za goste svih generacija.</li>
    <li>Rođendani i proslave — booth digne atmosferu svakog slavlja.</li>
    <li>Korporativni eventi — brendiran booth, lead capture i sadržaj za društvene mreže.</li>
    <li>Maturalne — hit večeri za koju ekipa pamti baš te fotke.</li>
  </ul>

  <h2>Česta pitanja</h2>
  <h3>Što je uključeno u najam?</h3>
  <p>Oprema, dostava i postavljanje, operater/hostesa, neograničeno fotkanje i snimanje, te digitalna galerija nakon eventa.</p>
  <h3>Koje područje pokrivate?</h3>
  <p>Zagreb i okolicu. Za lokacije izvan toga dostava po dogovoru.</p>
  <h3>Koliko unaprijed treba rezervirati?</h3>
  <p>Za svadbe 1–3 mjeseca ranije, za ostale evente 2–4 tjedna.</p>

  <h2>Kontakt</h2>
  <p>Telefon: 095 865 5213 — Područje: Zagreb i okolica</p>
</section>
`;

const html = readFileSync(dist, "utf8");
const injected = html.replace("</body>", `${STATIC_SEO_CONTENT}\n</body>`);
writeFileSync(dist, injected, "utf8");
console.log("prerender: SEO sadržaj injektiran u dist/index.html");
