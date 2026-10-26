// SECCIÓN 12 — Footer
import { ChatIcon, InstagramIcon, MusicIcon } from "../icons";
import { container } from "../ui";
import { Logo } from "./Header";

const links = [
  "Todos los productos",
  "Sobre nosotros",
  "Contacto",
  "Preguntas frecuentes",
  "Envíos",
  "Cambios y devoluciones",
  "Términos y condiciones",
  "Política de privacidad",
  "Botón de arrepentimiento",
];

const socials = [
  { name: "Instagram", Icon: InstagramIcon },
  { name: "TikTok", Icon: MusicIcon },
  { name: "WhatsApp", Icon: ChatIcon },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-azul pt-14 pb-8 text-white">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-3 max-w-xs text-white/75">
              Diversión para chicos, grandes y todos los que nunca dejaron de jugar.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ name, Icon }) => (
                <li key={name}>
                  <a
                    href="#"
                    aria-label={name}
                    className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-naranja"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Enlaces del sitio">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="flex min-h-11 items-center text-white/80 hover:text-amarillo">
                    {link}
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
