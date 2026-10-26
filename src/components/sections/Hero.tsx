// SECCIÓN 3 — Hero principal
import { ArrowIcon } from "../icons";
import { HeroScene } from "../illustrations";
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

      <div className="relative overflow-hidden rounded-[2rem] bg-naranja">
        <HeroScene className="block h-auto w-full" />
        <span className="absolute top-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-azul">
          Ilustración · espacio para foto real
        </span>
      </div>
    </section>
  );
}
