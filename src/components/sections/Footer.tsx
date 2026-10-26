// SECCIÓN 12 — Footer
import { container } from "../ui";
import { Logo } from "./Header";

// Solo enlaces que llevan a una sección que existe en esta página
const links = [
  { label: "Todos los productos", href: "#mas-elegidos" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-azul pt-14 pb-8 text-white">
      <div className={container}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo light />
            <p className="mt-3 max-w-xs text-white/75">
              Diversión para chicos, grandes y todos los que nunca dejaron de jugar.
            </p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <ul className="flex flex-col gap-1 sm:items-end">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex min-h-11 items-center text-white/80 hover:text-amarillo">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>Instagram · TikTok · WhatsApp</p>
          <p className="mt-2">© 2026 PlayGame. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
