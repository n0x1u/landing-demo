// SECCIÓN 8 — Buscador de regalos
// "use client" porque hay que recordar qué edad eligió la persona y mostrar los resultados.
"use client";

import { useState } from "react";
import { ageOptions, products, type AgeId } from "@/data/products";
import ProductCard from "../ProductCard";
import { btnPrimary, container } from "../ui";

export default function GiftFinder() {
  const [selected, setSelected] = useState<AgeId | null>(null);
  const [searched, setSearched] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Filtramos la lista: solo quedan los productos recomendados para la edad elegida
  const results = selected ? products.filter((p) => p.ages.includes(selected)) : [];
  const selectedPhrase = ageOptions.find((a) => a.id === selected)?.phrase;

  function handleSearch() {
    if (!selected) {
      setShowHint(true);
      return;
    }
    setSearched(true);
  }

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
                {ageOptions.map((age) => {
                  const isActive = selected === age.id;
                  return (
                    <button
                      key={age.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => {
                        setSelected(isActive ? null : age.id);
                        setShowHint(false);
                        if (isActive) setSearched(false);
                      }}
                      className={`min-h-12 rounded-full border-2 px-5 font-semibold transition ${
                        isActive
                          ? "border-amarillo bg-amarillo text-azul"
                          : "border-white/30 text-white hover:border-white"
                      }`}
                    >
                      {age.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button type="button" onClick={handleSearch} className={`${btnPrimary} mt-8 w-full sm:w-auto`}>
              Encontrar el regalo ideal
            </button>
            {showHint && <p className="mt-3 font-semibold text-amarillo">Primero elegí una edad 👆</p>}
            <p className="mt-4 text-sm text-white/70">
              Filtramos los juegos para que elegir sea mucho más fácil.
            </p>

            {/* Resultados. aria-live hace que los lectores de pantalla anuncien el cambio. */}
            <div aria-live="polite">
              {searched && selected && (
                <div className="mt-10 border-t border-white/15 pt-8 text-left">
                  <p className="text-center font-semibold">
                    {results.length > 0
                      ? `${results.length} ${results.length === 1 ? "juego ideal" : "juegos ideales"} para ${selectedPhrase}`
                      : `Por ahora no tenemos juegos para ${selectedPhrase}. ¡Pronto vamos a sumar más!`}
                  </p>
                  {results.length > 0 && (
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {results.map((product) => (
                        <li key={product.id} className="flex">
                          <ProductCard product={product} className="w-full" />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
