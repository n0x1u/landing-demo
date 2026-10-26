// Ilustraciones simples hechas con formas SVG. Ocupan el lugar de las fotos reales.

const WOOD = "#e9c98f";
const WOOD_DARK = "#c9a063";
const NAVY = "#17284d";
const SKIN_LIGHT = "#f4c7a1";
const SKIN_DARK = "#b97c55";

type TowerProps = {
  x: number; // borde izquierdo de la torre
  baseY: number; // línea donde apoya la torre
  width: number;
  rows: number;
  rowHeight: number;
  gapRow?: number; // fila a la que le falta el bloque del medio
};

// Torre de bloques: alterna filas de 3 bloques de frente y filas de 1 bloque de costado.
function Tower({ x, baseY, width, rows, rowHeight, gapRow }: TowerProps) {
  const third = width / 3;
  return (
    <g stroke={WOOD_DARK} strokeWidth={1.5}>
      {Array.from({ length: rows }, (_, i) => {
        const y = baseY - (i + 1) * rowHeight;
        if (i % 2 === 1) {
          return (
            <rect key={i} x={x} y={y} width={width} height={rowHeight} rx={2} fill={WOOD} />
          );
        }
        return [0, 1, 2].map((b) =>
          i === gapRow && b === 1 ? null : (
            <rect
              key={`${i}-${b}`}
              x={x + b * third}
              y={y}
              width={third}
              height={rowHeight}
              rx={2}
              fill={WOOD}
            />
          ),
        );
      })}
    </g>
  );
}

function Face({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g fill={NAVY}>
      <circle cx={cx - r * 0.35} cy={cy - r * 0.05} r={r * 0.09} />
      <circle cx={cx + r * 0.35} cy={cy - r * 0.05} r={r * 0.09} />
      <path
        d={`M${cx - r * 0.35} ${cy + r * 0.3} Q${cx} ${cy + r * 0.65} ${cx + r * 0.35} ${cy + r * 0.3}`}
        stroke={NAVY}
        strokeWidth={r * 0.1}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

// Escena del hero: personas de distintas edades alrededor de una mesa con la torre.
export function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label="Ilustración: una nena, una mujer y un abuelo jugando a la torre de equilibrio"
    >
      {/* Decoración de fondo */}
      <circle cx="400" cy="70" r="56" fill="#ffc857" />
      <circle cx="60" cy="60" r="10" fill="#fff" opacity=".5" />
      <circle cx="250" cy="40" r="6" fill="#fff" opacity=".5" />
      <rect x="120" y="70" width="18" height="18" rx="4" fill={NAVY} opacity=".15" transform="rotate(20 129 79)" />

      {/* Nena */}
      <rect x="35" y="200" width="100" height="110" rx="46" fill="#ffc857" />
      <circle cx="85" cy="165" r="38" fill={SKIN_LIGHT} />
      <path d="M47 160a38 38 0 0 1 76 0c-8-14-22-22-38-22s-30 8-38 22z" fill="#6b3b1f" />
      <circle cx="47" cy="150" r="12" fill="#6b3b1f" />
      <circle cx="123" cy="150" r="12" fill="#6b3b1f" />
      <Face cx={85} cy={168} r={38} />
      <path d="M120 245 Q160 230 185 214" stroke={SKIN_LIGHT} strokeWidth="16" strokeLinecap="round" fill="none" />

      {/* Mujer */}
      <rect x="275" y="175" width="110" height="140" rx="50" fill="#fff" />
      <circle cx="330" cy="135" r="40" fill={SKIN_DARK} />
      <path d="M288 140a42 42 0 0 1 84 0v40c-6-20-10-34-14-46-12 4-34 4-56-2-4 14-8 28-14 48z" fill="#2b1a12" />
      <Face cx={330} cy={140} r={40} />

      {/* Abuelo */}
      <rect x="400" y="215" width="100" height="110" rx="46" fill="#7aa2d6" />
      <circle cx="445" cy="180" r="34" fill={SKIN_LIGHT} />
      <path d="M413 170a32 32 0 0 1 64 0c-6-6-14-6-20-4-8-6-18-6-24 0-8-2-14 0-20 4z" fill="#d9d9d9" />
      <Face cx={445} cy={183} r={34} />

      {/* Mesa */}
      <rect x="0" y="300" width="480" height="60" fill={NAVY} />
      <rect x="0" y="296" width="480" height="10" rx="5" fill="#24385f" />

      {/* Torre sobre la mesa */}
      <Tower x={196} baseY={298} width={66} rows={13} rowHeight={13} gapRow={6} />
      <rect x="262" y="210" width="22" height="13" rx={2} fill={WOOD} stroke={WOOD_DARK} strokeWidth={1.5} transform="rotate(-8 273 216)" />

      {/* Dados */}
      <g transform="rotate(-12 110 280)">
        <rect x="92" y="262" width="34" height="34" rx="7" fill="#fff" />
        <circle cx="101" cy="271" r="3" fill={NAVY} />
        <circle cx="109" cy="279" r="3" fill={NAVY} />
        <circle cx="117" cy="287" r="3" fill={NAVY} />
      </g>
      <g transform="rotate(15 372 282)">
        <rect x="358" y="268" width="28" height="28" rx="6" fill="#f06b25" stroke="#fff" strokeWidth="2" />
        <circle cx="366" cy="276" r="2.5" fill="#fff" />
        <circle cx="378" cy="288" r="2.5" fill="#fff" />
      </g>
    </svg>
  );
}

// Torre sola, para el producto destacado y su tarjeta.
export function TowerArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label="Ilustración: torre de equilibrio de madera">
      <ellipse cx="100" cy="222" rx="70" ry="8" fill={NAVY} opacity=".12" />
      <Tower x={55} baseY={220} width={90} rows={14} rowHeight={13} gapRow={8} />
      <rect x="150" y="104" width="30" height="13" rx={2} fill={WOOD} stroke={WOOD_DARK} strokeWidth={1.5} transform="rotate(-10 165 110)" />
    </svg>
  );
}

// Kit creativo: lápices de colores, una tijera simple y una estrella.
export function CraftArt({ className }: { className?: string }) {
  const pencils = ["#f06b25", "#ffc857", "#4fb3a9", "#7aa2d6"];
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label="Ilustración: kit de manualidades">
      <ellipse cx="100" cy="222" rx="70" ry="8" fill={NAVY} opacity=".12" />
      {pencils.map((color, i) => (
        <g key={color} transform={`rotate(${-18 + i * 12} 100 210)`}>
          <rect x={88} y={70} width={24} height={130} rx={4} fill={color} />
          <path d={`M88 70 L100 44 L112 70 Z`} fill={WOOD} />
          <path d={`M96 52 L100 44 L104 52 Z`} fill={NAVY} />
        </g>
      ))}
      <path d="M158 40l6 13 14 2-10 10 2 14-12-7-12 7 2-14-10-10 14-2z" fill="#ffc857" />
      <circle cx="38" cy="60" r="10" fill="#f06b25" opacity=".7" />
    </svg>
  );
}

// Juego de cartas: abanico de 3 cartas.
export function CardsArt({ className }: { className?: string }) {
  const cards = [
    { rot: -16, fill: "#4fb3a9", symbol: "★" },
    { rot: 0, fill: "#f06b25", symbol: "7" },
    { rot: 16, fill: NAVY, symbol: "+2" },
  ];
  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label="Ilustración: juego de cartas">
      <ellipse cx="100" cy="222" rx="70" ry="8" fill={NAVY} opacity=".12" />
      {cards.map((c) => (
        <g key={c.symbol} transform={`rotate(${c.rot} 100 200)`}>
          <rect x="62" y="60" width="76" height="112" rx="10" fill="#fff" stroke={c.fill} strokeWidth="4" />
          <rect x="70" y="68" width="60" height="96" rx="6" fill={c.fill} />
          <text x="100" y="128" textAnchor="middle" fontSize="30" fontWeight="800" fill="#fff" fontFamily="sans-serif">
            {c.symbol}
          </text>
        </g>
      ))}
    </svg>
  );
}

// Espacio marcado: indica dónde iría una foto o un video real.
export function MediaPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-azul/25 bg-white/60 p-3 text-center text-xs font-medium text-azul/60 ${className}`}
    >
      {label}
    </div>
  );
}
