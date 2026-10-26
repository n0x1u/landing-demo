// Panel lateral del carrito: lista de productos, cantidades y total.
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { formatPrice } from "@/data/products";
import { CloseIcon } from "../icons";
import { btnPrimary } from "../ui";
import { useCart } from "./CartContext";

const qtyButton =
  "grid size-9 place-items-center rounded-full text-lg font-bold transition hover:bg-azul/10 disabled:opacity-30";

export default function CartDrawer() {
  const { lines, count, total, isOpen, closeCart, changeQuantity, removeItem } = useCart();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Mientras el panel está abierto: la página de atrás no se desplaza y Escape lo cierra.
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus(); // devolvemos el foco al botón que abrió el panel
    };
  }, [isOpen, closeCart]);

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`} inert={!isOpen}>
      {/* Fondo oscuro: al tocarlo se cierra el panel */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-azul/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="carrito-titulo"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-crema shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-azul/10 px-5 py-4">
          <h2 id="carrito-titulo" className="font-display text-xl font-bold">
            Tu carrito {count > 0 && <span className="text-azul/50">({count})</span>}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="grid size-11 place-items-center rounded-full hover:bg-azul/5"
          >
            <CloseIcon />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 p-8 text-center">
            <span className="text-5xl" aria-hidden>
              🛒
            </span>
            <p className="font-semibold">Tu carrito está vacío.</p>
            <p className="text-azul/70">Sumá un juego y que empiece la diversión.</p>
          </div>
        ) : (
          <ul className="flex-1 space-y-3 overflow-y-auto p-5">
            {lines.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <Image
                  src={product.image}
                  alt=""
                  width={80}
                  height={80}
                  className="size-20 shrink-0 rounded-xl object-cover"
                />
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="leading-snug font-semibold">{product.name}</p>
                  <p className="text-sm text-azul/60">{formatPrice(product.price)} c/u</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center rounded-full bg-crema">
                      <button
                        type="button"
                        onClick={() => changeQuantity(product.id, -1)}
                        disabled={quantity === 1}
                        aria-label={`Restar una unidad de ${product.name}`}
                        className={qtyButton}
                      >
                        −
                      </button>
                      <span className="w-7 text-center font-semibold" aria-label={`Cantidad: ${quantity}`}>
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(product.id, 1)}
                        aria-label={`Sumar una unidad de ${product.name}`}
                        className={qtyButton}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="min-h-9 text-sm font-medium text-azul/60 underline-offset-2 hover:text-naranja-oscuro hover:underline"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {lines.length > 0 && (
          <div className="border-t border-azul/10 bg-white p-5">
            <div className="flex items-baseline justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold">{formatPrice(total)}</span>
            </div>
            <button type="button" className={`${btnPrimary} mt-4 w-full`}>
              Finalizar compra
            </button>
            <p className="mt-2 text-center text-xs text-azul/60">Sitio de demostración: no se realizan compras reales.</p>
          </div>
        )}
      </aside>
    </div>
  );
}
