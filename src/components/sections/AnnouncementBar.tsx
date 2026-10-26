// SECCIÓN 1 — Barra de anuncio superior
export default function AnnouncementBar() {
  return (
    <div className="bg-azul px-4 py-2.5 text-center text-sm text-white">
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span>🎁 ¿Buscás un regalo? Encontrá el juego ideal en PlayGame.</span>
        <a
          href="#regalos"
          className="font-semibold text-amarillo underline decoration-2 underline-offset-4 hover:text-white"
        >
          Ver ideas de regalo
        </a>
      </p>
    </div>
  );
}
