// SECCIÓN 9 — Testimonios
import { btnSecondary, container, sectionTitle } from "../ui";

const testimonials = [
  {
    name: "Lucía M.",
    quote:
      "Compré un juego para el cumple de mi sobrino y terminamos jugando todos los grandes también. ¡Nos matamos de risa!",
    color: "bg-amarillo",
  },
  {
    name: "Martín R.",
    quote:
      "Queríamos hacer algo diferente en las juntadas y encontramos justo lo que buscábamos. Fue un éxito.",
    color: "bg-naranja text-white",
  },
  {
    name: "Florencia P.",
    quote:
      "Me encantó poder buscar por edades. Encontrar un regalo divertido terminó siendo mucho más fácil de lo que pensaba.",
    color: "bg-azul text-white",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-14 lg:py-20">
      <div className={container}>
        <h2 className={sectionTitle}>Los mejores momentos empiezan jugando ❤️</h2>
        <p className="mt-2 text-lg text-azul/70">Así queremos que se sienta cada experiencia con PlayGame.</p>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-azul/5">
              <blockquote className="flex-1 text-lg leading-relaxed">“{t.quote}”</blockquote>
              <div className="mt-5 flex items-center gap-3">
                {/* Avatar: círculo con la inicial en lugar de una foto */}
                <span className={`grid size-11 place-items-center rounded-full font-display font-bold ${t.color}`} aria-hidden>
                  {t.name[0]}
                </span>
                <span className="font-semibold">{t.name}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <a href="#mas-elegidos" className={`${btnSecondary} w-full sm:w-auto`}>
            Encontrá tu próximo favorito
          </a>
        </div>
      </div>
    </section>
  );
}
