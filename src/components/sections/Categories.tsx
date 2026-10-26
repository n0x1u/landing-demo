// SECCIÓN 5 — Categorías principales
import { ArrowIcon } from "../icons";
import { container, sectionTitle } from "../ui";

const categories = [
  {
    emoji: "🧸",
    title: "Juguetes para chicos",
    text: "Imaginación, creatividad y diversión para los más pequeños.",
    cta: "Ver juguetes",
    tile: "bg-amarillo",
  },
  {
    emoji: "🎲",
    title: "Juegos de mesa",
    text: "Desafíos, risas y momentos para compartir.",
    cta: "Ver juegos de mesa",
    tile: "bg-naranja",
  },
  {
    emoji: "🃏",
    title: "Juegos para grandes",
    text: "Porque crecer no significa dejar de jugar.",
    cta: "Ver juegos para adultos",
    tile: "bg-azul",
  },
  {
    emoji: "🎁",
    title: "Regalos originales",
    text: "Sorprendé con algo diferente y divertido.",
    cta: "Encontrar un regalo",
    tile: "bg-[#4fb3a9]",
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-14 lg:py-20">
      <div className={container}>
        <h2 className={sectionTitle}>¿Qué tenés ganas de jugar?</h2>
        <p className="mt-2 text-lg text-azul/70">Tenemos una opción para cada tipo de jugador.</p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {categories.map((c) => (
            <li key={c.title} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-azul/5">
              {/* Bloque de color con formas decorativas en lugar de una foto */}
              <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden ${c.tile}`}>
                <span className="absolute -top-6 -right-6 size-20 rounded-full bg-white/20" />
                <span className="absolute -bottom-4 -left-4 size-14 rotate-12 rounded-xl bg-white/15" />
                <span className="relative text-5xl sm:text-6xl" aria-hidden>
                  {c.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base leading-snug font-bold sm:text-lg">{c.title}</h3>
                <p className="mt-1 flex-1 text-sm text-azul/70">{c.text}</p>
                <a
                  href="#mas-elegidos"
                  className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-naranja-oscuro hover:underline"
                >
                  {c.cta} <ArrowIcon className="size-4 shrink-0" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
