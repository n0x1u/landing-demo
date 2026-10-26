// SECCIÓN 7 — Más elegidos
import { CardsArt, CraftArt, TowerArt } from "../illustrations";
import { btnDark, btnSecondary, container, sectionTitle } from "../ui";

const products = [
  { name: "Torre de Equilibrio", text: "Poné a prueba tu pulso.", Art: TowerArt, bg: "bg-amarillo/30" },
  { name: "Kit Creativo de Manualidades", text: "Creá, imaginá y divertite.", Art: CraftArt, bg: "bg-naranja/15" },
  { name: "Juego de Cartas Rápido", text: "Diversión asegurada en cada ronda.", Art: CardsArt, bg: "bg-azul/10" },
];

export default function BestSellers() {
  return (
    <section id="mas-elegidos" className="py-14 lg:py-20">
      <div className={container}>
        <h2 className={sectionTitle}>Juegos que dan ganas de repetir 🔥</h2>
        <p className="mt-2 text-lg text-azul/70">
          Descubrí opciones para regalar, compartir y disfrutar una y otra vez.
        </p>
      </div>

      {/* En celular: carrusel que se desliza con el dedo. En pantallas grandes: grilla de 3. */}
      <ul className={`${container} no-scrollbar mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 sm:scroll-px-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible`}>
        {products.map(({ name, text, Art, bg }) => (
          <li
            key={name}
            className="flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-azul/5 md:w-auto"
          >
            <div className={`grid aspect-square place-items-center ${bg}`}>
              <Art className="h-3/4 w-auto" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-bold">{name}</h3>
              <p className="mt-1 flex-1 text-azul/70">{text}</p>
              <button type="button" className={`${btnDark} mt-4 w-full`}>
                Lo quiero
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={`${container} mt-8 text-center`}>
        <button type="button" className={`${btnSecondary} w-full sm:w-auto`}>
          Ver todos los productos
        </button>
      </div>
    </section>
  );
}
