// SECCIÓN 6 — Producto estrella
import Image from "next/image";
import { formatPrice, getProduct } from "@/data/products";
import AddToCartButton from "../cart/AddToCartButton";
import { CheckIcon } from "../icons";
import { btnPrimary, btnSecondary, container, sectionTitle } from "../ui";

const highlights = [
  "Fácil de aprender.",
  "Ideal para compartir en familia o con amigos.",
  "Partidas rápidas y llenas de suspenso.",
];

const product = getProduct("torre")!;

export default function FeaturedProduct() {
  return (
    <section id="destacado" className="bg-white py-14 lg:py-20">
      <div className={`${container} grid gap-8 lg:grid-cols-2 lg:gap-14`}>
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white ring-1 ring-azul/10">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1152px) 548px, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
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

          <p className="mt-6 text-3xl font-bold tracking-tight">{formatPrice(product.price)}</p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <AddToCartButton productId={product.id} className={btnPrimary}>
              Agregar al carrito
            </AddToCartButton>
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
