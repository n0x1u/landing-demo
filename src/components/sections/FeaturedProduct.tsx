// SECCIÓN 6 — Producto estrella
import { CheckIcon } from "../icons";
import { MediaPlaceholder, TowerArt } from "../illustrations";
import { btnPrimary, btnSecondary, container, sectionTitle } from "../ui";

const highlights = [
  "Fácil de aprender.",
  "Ideal para compartir en familia o con amigos.",
  "Partidas rápidas y llenas de suspenso.",
];

export default function FeaturedProduct() {
  return (
    <section id="destacado" className="bg-white py-14 lg:py-20">
      <div className={`${container} grid gap-8 lg:grid-cols-2 lg:gap-14`}>
        {/* Galería: ilustración principal + espacios marcados para video y foto */}
        <div>
          <div className="grid aspect-square place-items-center rounded-[2rem] bg-amarillo/30">
            <TowerArt className="h-4/5 w-auto" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <MediaPlaceholder label="▶ Video: alguien sacando un bloque" className="aspect-video" />
            <MediaPlaceholder label="Foto del producto" className="aspect-video" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-amarillo px-3 py-1 text-xs font-bold tracking-wider">
            ⭐ DESTACADO PLAYGAME
          </span>
          <h2 className={`${sectionTitle} mt-4`}>
            El juego que convierte cualquier juntada en un desafío.
          </h2>
          <p className="mt-4 font-display text-xl font-semibold text-naranja-oscuro">
            Torre de Equilibrio de Madera — 54 bloques
          </p>
          <p className="mt-3 text-azul/75">
            Una torre, 54 bloques y un solo objetivo: ¡que no se caiga! Poné a prueba tu pulso,
            desafiá a tus amigos y descubrí quién aguanta hasta el final.
          </p>

          <ul className="mt-5 space-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-naranja/15 text-naranja-oscuro">
                  <CheckIcon className="size-4" />
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* Precio: espacio marcado hasta tener el precio vigente real */}
          <div className="mt-6 flex items-baseline gap-3 rounded-2xl border-2 border-dashed border-azul/20 px-4 py-3">
            <span className="text-sm text-azul/60">Precio vigente</span>
            <span className="text-2xl font-bold tracking-tight">$ —</span>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button type="button" className={btnPrimary}>
              Agregar al carrito
            </button>
            <button type="button" className={btnSecondary}>
              Ver detalles
            </button>
          </div>
          <p className="mt-4 text-center font-medium text-azul/70 sm:text-left">
            ¿Te animás a sacar el último bloque?
          </p>
        </div>
      </div>
    </section>
  );
}
