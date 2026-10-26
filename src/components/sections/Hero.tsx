// SECCIÓN 3 — Hero principal
import Image from "next/image";
import { ArrowIcon } from "../icons";
import { btnPrimary, btnSecondary, container } from "../ui";

export default function Hero() {
  return (
    <section className={`${container} grid items-center gap-8 pt-8 pb-14 lg:grid-cols-2 lg:gap-12 lg:py-20`}>
      <div>
        <h1 className="font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-azul sm:text-5xl lg:text-6xl">
          ¡La diversión no tiene edad! 🎲
        </h1>
        <p className="mt-4 max-w-xl text-lg text-azul/75">
          Juguetes, juegos de mesa y desafíos para chicos y grandes. Encontrá tu próximo juego
          favorito y hacé que cada momento cuente.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href="#categorias" className={btnPrimary}>
            Descubrir juegos <ArrowIcon />
          </a>
          <a href="#regalos" className={btnSecondary}>
            Buscar un regalo
          </a>
        </div>
      </div>

      <div className="relative">
        {/* Forma decorativa detrás de la foto */}
        <span className="absolute -top-3 -right-3 size-24 rounded-3xl bg-amarillo sm:size-32" aria-hidden />
        <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-naranja shadow-xl shadow-azul/10">
          {/* Es la imagen más importante de la página: la cargamos primero */}
          <Image
            src="/imagenes/familia-jugando.png"
            alt="Una familia se ríe mientras el papá saca un bloque de la torre de equilibrio"
            fill
            sizes="(min-width: 1152px) 552px, (min-width: 1024px) 50vw, 100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
