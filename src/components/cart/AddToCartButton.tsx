// Botón reutilizable que suma un producto al carrito.
// Al ser un componente aparte, las secciones que lo usan no necesitan "use client".
"use client";

import type { ReactNode } from "react";
import { useCart } from "./CartContext";

type Props = { productId: string; className?: string; children: ReactNode };

export default function AddToCartButton({ productId, className, children }: Props) {
  const { addItem } = useCart();
  return (
    <button type="button" onClick={() => addItem(productId)} className={className}>
      {children}
    </button>
  );
}
