// Lista central de productos: la usan las tarjetas, el destacado, el carrito y el buscador de regalos.
// Los precios son inventados para la demo.

export type AgeId = "0-3" | "4-7" | "8-12" | "adolescentes" | "adultos";

// label: texto del botón · phrase: cómo se dice dentro de una frase ("juegos para ...")
export const ageOptions: { id: AgeId; label: string; phrase: string }[] = [
  { id: "0-3", label: "De 0 a 3 años", phrase: "chicos de 0 a 3 años" },
  { id: "4-7", label: "De 4 a 7 años", phrase: "chicos de 4 a 7 años" },
  { id: "8-12", label: "De 8 a 12 años", phrase: "chicos de 8 a 12 años" },
  { id: "adolescentes", label: "Adolescentes", phrase: "adolescentes" },
  { id: "adultos", label: "Adultos", phrase: "adultos" },
];

export type Product = {
  id: string;
  name: string;
  text: string;
  price: number;
  image: string;
  imageAlt: string;
  ages: AgeId[];
};

export const products: Product[] = [
  {
    id: "torre",
    name: "Torre de Equilibrio",
    text: "Poné a prueba tu pulso.",
    price: 24990,
    image: "/imagenes/torre-de-equilibrio.png",
    imageAlt: "Torre de equilibrio armada con bloques de madera natural",
    ages: ["8-12", "adolescentes", "adultos"],
  },
  {
    id: "kit-creativo",
    name: "Kit Creativo de Manualidades",
    text: "Creá, imaginá y divertite.",
    price: 18500,
    image: "/imagenes/kit-manualidades.png",
    imageAlt: "Kit de manualidades con papeles, fibras, crayones, pompones y stickers",
    ages: ["4-7", "8-12"],
  },
  {
    id: "cartas",
    name: "Juego de Cartas Rápido",
    text: "Diversión asegurada en cada ronda.",
    price: 12900,
    image: "/imagenes/juego-de-cartas.png",
    imageAlt: "Caja de un juego de cartas con varias cartas ilustradas adelante",
    ages: ["8-12", "adolescentes", "adultos"],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

// Muestra un número como precio en pesos argentinos: 24990 → "$ 24.990"
export function formatPrice(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
