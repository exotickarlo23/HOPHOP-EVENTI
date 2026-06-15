export type Pkg = {
  id: "basic" | "standard" | "premium" | "corporate";
  name: string;
  badge?: string;
  duration: string;
  items: string[];
  price: string;
  cta: string;
  featured?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    id: "basic",
    name: "Basic",
    duration: "3 sata",
    items: ["360 booth", "Digitalne fotke i videi preko QR-a"],
    price: "od 250 €",
    cta: "Zatraži ponudu",
  },
  {
    id: "standard",
    name: "Standard",
    badge: "Najpopularniji",
    duration: "4 sata",
    items: ["Magic mirror", "Neograničeni ispis fotki", "Rekviziti"],
    price: "od 400 €",
    cta: "Zatraži ponudu",
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    duration: "5 sati",
    items: ["Mirror + 360", "Custom dizajn fotki", "Hostesa"],
    price: "od 600 €",
    cta: "Zatraži ponudu",
  },
  {
    id: "corporate",
    name: "Korporativni",
    duration: "Pola ili cijeli dan",
    items: ["Brendiran booth", "Prikupljanje kontakata (lead capture)", "Custom branding"],
    price: "na upit",
    cta: "Zatraži ponudu",
  },
];

export const ADDONS = [
  "Dodatni sat",
  "Knjiga gostiju",
  "Custom pozadina",
  "Niski dim",
  "Neon natpis",
  "Brendirani okvir fotke",
];
