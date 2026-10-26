// SECCIÓN 10 — Preguntas frecuentes
// Usa <details> y <summary>: el navegador abre y cierra cada pregunta sin JavaScript.
import { ChatIcon, ChevronIcon } from "../icons";
import { container, sectionTitle } from "../ui";

const faqs = [
  {
    q: "¿Cómo compro en PlayGame?",
    a: "Elegí los productos que te gustan, agregalos al carrito y seguí los pasos para completar tu compra.",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Podés consultar los medios de pago disponibles antes de confirmar tu pedido.",
  },
  {
    q: "¿Hacen envíos?",
    a: "Ingresá tu código postal durante la compra para conocer las opciones de entrega disponibles para tu dirección.",
  },
  {
    q: "¿Cuánto tarda en llegar mi pedido?",
    a: "El plazo de entrega depende de tu ubicación y del método de envío elegido. Vas a poder consultar la estimación antes de finalizar tu compra.",
  },
  {
    q: "¿Cómo sé qué juego elegir según la edad?",
    a: "Podés explorar nuestras categorías por edad y revisar las recomendaciones de cada producto.",
  },
  {
    q: "¿Puedo cambiar o devolver un producto?",
    a: "Sí, de acuerdo con las condiciones y los plazos aplicables. Podés consultar los detalles en nuestra Política de Cambios y Devoluciones.",
  },
  {
    q: "¿Puedo comprar un producto para regalar?",
    a: "¡Obvio! Elegí un juego pensando en los gustos y la edad de quien lo va a recibir. Nuestra sección de regalos puede ayudarte.",
  },
];

export default function Faq() {
  return (
    <section id="preguntas" className="bg-white py-14 lg:py-20">
      <div className={`${container} max-w-3xl`}>
        <h2 className={`${sectionTitle} text-center`}>¿Tenés alguna duda?</h2>

        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-crema open:bg-amarillo/20">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronIcon className="size-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-azul/75">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="font-medium">¿Seguís con dudas? Estamos para ayudarte.</p>
          <button
            type="button"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 font-bold text-azul transition hover:brightness-95 sm:w-auto"
          >
            <ChatIcon /> Consultar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
