// El "cerebro" del carrito. Un Context de React permite que cualquier componente
// (header, tarjetas, panel lateral) lea y modifique el mismo carrito.
"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { getProduct, type Product } from "@/data/products";

type CartLine = { product: Product; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  count: number; // cantidad total de unidades
  total: number; // precio total en pesos
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (productId: string) => void;
  changeQuantity: (productId: string, delta: number) => void;
  removeItem: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // Guardamos solo id → cantidad. Nombre, precio e imagen salen de la lista de productos.
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isOpen, setIsOpen] = useState(false);
  // useCallback mantiene la misma función entre renders (el panel la usa en un useEffect)
  const closeCart = useCallback(() => setIsOpen(false), []);

  const lines = Object.entries(quantities).flatMap(([id, quantity]) => {
    const product = getProduct(id);
    return product ? [{ product, quantity }] : [];
  });
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const total = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  function changeQuantity(productId: string, delta: number) {
    setQuantities((prev) => {
      const next = { ...prev };
      const quantity = (next[productId] ?? 0) + delta;
      if (quantity > 0) next[productId] = quantity;
      else delete next[productId];
      return next;
    });
  }

  function addItem(productId: string) {
    changeQuantity(productId, 1);
    setIsOpen(true); // abrimos el panel para mostrar lo que se agregó
  }

  function removeItem(productId: string) {
    setQuantities((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  }

  return (
    <CartContext.Provider
      value={{
        lines,
        count,
        total,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart,
        addItem,
        changeQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart tiene que usarse dentro de <CartProvider>");
  return cart;
}
