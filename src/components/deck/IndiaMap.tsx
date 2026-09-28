import { mapPins } from "@/data/content";
import { cn } from "@/lib/utils";

export function IndiaMap({ onJump }: { onJump: (slideId: string) => void }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-3xl">
      <svg viewBox="0 0 100 120" className="h-full w-full drop-shadow-2xl" aria-hidden="true">
        <defs>
          <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3a2418" />
            <stop offset="100%" stopColor="#1a120e" />
          </linearGradient>
        </defs>
        <path
          d="M40 6 L55 8 L63 16 L70 22 L73 32 L80 42 L84 54 L81 66 L74 78 L67 90 L58 102 L50 112 L44 113 L38 104 L34 92 L26 84 L16 78 L11 68 L13 56 L9 46 L15 38 L13 28 L22 22 L28 14 L36 8 Z"
          fill="url(#land)"
          stroke="#d4a054"
          strokeOpacity="0.55"
          strokeWidth="0.4"
        />
        <ellipse cx="52" cy="116" rx="4.2" ry="2.2" fill="#1a120e" stroke="#d4a054" strokeOpacity="0.35" strokeWidth="0.3" />
        {mapPins.map((pin, i) => (
          <g key={pin.id}>
            {i > 0 ? (
              <line
                x1={mapPins[i - 1].x}
                y1={mapPins[i - 1].y}
                x2={pin.x}
                y2={pin.y}
                stroke="#d4a054"
                strokeOpacity="0.25"
                strokeDasharray="1.2 1.4"
                strokeWidth="0.25"
              />
            ) : null}
          </g>
        ))}
      </svg>
      {mapPins.map((pin) => (
        <button
          key={pin.id}
          type="button"
          onClick={() => onJump(pin.slide)}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-left"
          style={{ left: `${pin.x}%`, top: `${(pin.y / 120) * 100}%` }}
        >
          <span className="relative grid size-3.5 place-items-center">
            <span className="pin-pulse absolute inset-0 rounded-full bg-gold" />
            <span className="relative size-2.5 rounded-full bg-gold shadow-[0_0_12px_var(--color-gold)]" />
          </span>
          <span
            className={cn(
              "absolute top-1/2 min-w-32 -translate-y-1/2 rounded-lg px-3 py-2",
              "bg-ink/80 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_35%,transparent)]",
              pin.x > 55 ? "right-4" : "left-4",
            )}
          >
            <span className="block font-display text-sm text-ivory">{pin.name}</span>
            <span className="block text-[11px] tracking-wide text-ivory-dim">{pin.sub}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
