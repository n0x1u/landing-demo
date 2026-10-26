// SECCIÓN 4 — Beneficios de la tienda
import { Gift, ShoppingCart, Target } from "lucide-react";
import { btnSecondary, brandIcon, container, sectionTitle } from "../ui";

const benefits = [
  {
    Icon: Target,
    title: "Para todas las edades",
    text: "Opciones para jugar, aprender, competir y compartir.",
  },
  {
    Icon: Gift,
    title: "Regalos que sorprenden",
    text: "Encontrá algo especial para cada ocasión.",
  },
  {
    Icon: ShoppingCart,
    title: "Comprá en pocos pasos",
    text: "Elegí tus favoritos, sumalos al carrito y listo.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className={container}>
        <h2 className={`${sectionTitle} text-center`}>Elegir tu próximo juego es fácil.</h2>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {benefits.map(({ Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-3xl bg-crema p-5 md:flex-col">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-naranja/10">
                <Icon className="size-7" {...brandIcon} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-1 text-azul/70">{text}</p>
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
