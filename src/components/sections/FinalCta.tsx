// SECCIÓN 11 — Último llamado a la acción
import { ArrowIcon } from "../icons";
import { container } from "../ui";

export default function FinalCta() {
  return (
    <section className="py-14 lg:py-20">
      <div className={container}>
        <div className="relative overflow-hidden rounded-[2rem] bg-naranja px-4 py-14 text-center text-white sm:px-12 lg:py-20">
          {/* Formas decorativas: dados y círculos */}
          <span className="absolute top-6 left-6 size-12 -rotate-12 rounded-xl bg-white/20" aria-hidden />
          <span className="absolute -right-4 -bottom-4 size-16 rotate-12 rounded-2xl bg-amarillo/50 sm:right-8 sm:bottom-8" aria-hidden />
          <span className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10" aria-hidden />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-4xl leading-tight font-extrabold sm:text-5xl">
              Menos aburrimiento. Más PlayGame. 🚀
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Los mejores recuerdos no vienen en una pantalla. Se crean jugando, riendo y compartiendo.
            </p>
            <a
              href="#mas-elegidos"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 font-bold sm:px-7 text-azul shadow-lg transition hover:bg-amarillo sm:w-auto"
            >
              Encontrar mi próximo juego <ArrowIcon />
            </a>
            <p className="mt-4 text-sm font-medium text-white/90">Elegí el tuyo y que empiece la diversión.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
