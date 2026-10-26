// SECCIÓN 2 — Header y navegación
// "use client" porque el menú hamburguesa necesita recordar si está abierto o cerrado.
"use client";

import { useState } from "react";
import { CartIcon, CloseIcon, MenuIcon, SearchIcon } from "../icons";
import { container } from "../ui";

const menu = [
  { label: "Todos los productos", href: "#mas-elegidos" },
  { label: "Juguetes para chicos", href: "#categorias" },
  { label: "Juegos de mesa", href: "#categorias" },
  { label: "Juegos para adultos", href: "#categorias" },
  { label: "Ideas para regalar", href: "#regalos" },
  { label: "Ofertas", href: "#destacado" },
  { label: "Contacto", href: "#contacto" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="font-display text-2xl font-extrabold tracking-tight">
      <span className={light ? "text-white" : "text-azul"}>PLAY</span>
      <span className="text-naranja">GAME</span>
    </span>
  );
}

const iconButton =
  "relative grid size-11 place-items-center rounded-full text-azul transition hover:bg-azul/5 focus-visible:outline-3 focus-visible:outline-azul";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-azul/10 bg-crema/90 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-between gap-4 xl:max-w-7xl`}>
        <a href="#" aria-label="PlayGame, ir al inicio">
          <Logo />
        </a>

        {/* Menú en línea: solo en pantallas grandes */}
        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex gap-5 text-sm font-medium whitespace-nowrap">
            {menu.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-naranja">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button type="button" aria-label="Buscar" className={iconButton}>
            <SearchIcon />
          </button>
          <button type="button" aria-label="Carrito, 0 productos" className={iconButton}>
            <CartIcon />
            <span className="absolute top-1 right-1 grid size-4.5 place-items-center rounded-full bg-naranja text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen(!open)}
            className={`${iconButton} xl:hidden`}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menú desplegable: celular y tablet */}
      {open && (
        <nav id="menu-movil" aria-label="Menú" className="border-t border-azul/10 bg-crema xl:hidden">
          <ul className={`${container} py-2`}>
            {menu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-azul/5 text-lg font-semibold last:border-0 hover:text-naranja"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
