// SECCIÓN 4 — Beneficios de la tienda
import { btnSecondary, container, sectionTitle } from "../ui";

const benefits = [
  {
    emoji: "🎯",
    title: "Para todas las edades",
    text: "Opciones para jugar, aprender, competir y compartir.",
    color: "bg-amarillo/40",
  },
  {
    emoji: "🎁",
    title: "Regalos que sorprenden",
    text: "Encontrá algo especial para cada ocasión.",
    color: "bg-naranja/15",
  },
  {
    emoji: "🛒",
    title: "Comprá en pocos pasos",
    text: "Elegí tus favoritos, sumalos al carrito y listo.",
    color: "bg-azul/10",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className={container}>
        <h2 className={`${sectionTitle} text-center`}>Elegir tu próximo juego es fácil.</h2>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {benefits.map((b) => (
            <li key={b.title} className="flex items-start gap-4 rounded-3xl bg-crema p-5 md:flex-col">
              <span className={`grid size-14 shrink-0 place-items-center rounded-2xl text-3xl ${b.color}`} aria-hidden>
                {b.emoji}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-1 text-azul/70">{b.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <a href="#mas-elegidos" className={`${btnSecondary} w-full sm:w-auto`}>
            Explorar productos
          </a>
        </div>
      </div>
    </section>
  );
}
