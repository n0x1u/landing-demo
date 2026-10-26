// SECCIÓN 7 — Más elegidos
import { products } from "@/data/products";
import ProductCard from "../ProductCard";
import { btnSecondary, container, sectionTitle } from "../ui";

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
      <ul className={`${container} no-scrollbar mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto pb-2 sm:scroll-px-6 md:grid md:grid-cols-3 md:overflow-visible`}>
        {products.map((product) => (
          <li key={product.id} className="flex w-[78%] shrink-0 snap-start md:w-auto">
            <ProductCard product={product} className="w-full" />
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
