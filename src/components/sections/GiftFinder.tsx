// SECCIÓN 8 — Buscador de regalos
// "use client" porque hay que recordar qué edad eligió la persona.
"use client";

import { useState } from "react";
import { btnPrimary, container } from "../ui";

const ages = ["De 0 a 3 años", "De 4 a 7 años", "De 8 a 12 años", "Adolescentes", "Adultos"];

export default function GiftFinder() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="regalos" className="py-6 lg:py-10">
      <div className={container}>
        <div className="relative overflow-hidden rounded-[2rem] bg-azul px-5 py-12 text-center text-white sm:px-10 lg:py-16">
          {/* Formas decorativas */}
          <span className="absolute -top-10 -left-10 size-36 rounded-full bg-naranja/30" aria-hidden />
          <span className="absolute -right-8 -bottom-8 size-32 rotate-12 rounded-3xl bg-amarillo/25" aria-hidden />

          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">¿No sabés qué regalar? 🎁</h2>
            <p className="mt-2 text-lg text-white/80">Tranqui, te ayudamos a encontrar algo que le encante.</p>

            <fieldset className="mt-8">
              <legend className="mx-auto font-semibold">¿Para quién estás buscando?</legend>
              <div className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-2 sm:gap-3">
                {ages.map((age) => {
                  const isActive = selected === age;
                  return (
                    <button
                      key={age}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSelected(isActive ? null : age)}
                      className={`min-h-12 rounded-full border-2 px-5 font-semibold transition ${
                        isActive
                          ? "border-amarillo bg-amarillo text-azul"
                          : "border-white/30 text-white hover:border-white"
                      }`}
                    >
                      {age}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button type="button" className={`${btnPrimary} mt-8 w-full sm:w-auto`}>
              Encontrar el regalo ideal
            </button>
            <p className="mt-4 text-sm text-white/70">
              Filtramos los juegos para que elegir sea mucho más fácil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
