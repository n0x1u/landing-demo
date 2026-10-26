// Estilos de botones reutilizables, para que todos se vean iguales en la página.
const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-azul active:scale-[0.98]";

export const btnPrimary = `${base} bg-naranja text-white shadow-lg shadow-naranja/25 hover:bg-naranja-oscuro`;

export const btnSecondary = `${base} border-2 border-azul bg-white text-azul hover:bg-azul hover:text-white`;

export const btnDark = `${base} bg-azul text-white hover:bg-azul/90`;

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6";

// Estilo común de los íconos de Lucide: mismo grosor de línea y naranja de la marca
export const brandIcon = {
  strokeWidth: 1.75,
  color: "var(--color-naranja-oscuro)",
  "aria-hidden": true,
} as const;

export const sectionTitle =
  "font-display text-3xl font-extrabold leading-tight tracking-tight text-azul sm:text-4xl";
