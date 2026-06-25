import photo from "../assets/helene-photo.jpg"

const COLLABS = [
  { letter: "R", bg: "#7C8FB8" },
  { letter: "C", bg: "#7FA89B" },
  { letter: "L", bg: "#C2A06B" },
]

export default function TopBar() {
  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] h-[44px] flex items-center gap-3.5 px-4 border-b border-hair font-mono text-xs text-muted"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 70%, transparent)",
        backdropFilter: "blur(16px)",
      }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <img
        src={photo}
        alt="Hélène Margary"
        className="w-[26px] h-[26px] rounded-full object-cover border-[1.5px] border-hair"
      />
      <span className="text-txt font-bold">Hélène Margary</span>
      <span className="text-muted">· portfolio.fig</span>

      <span className="flex-1" />

      {/* Collab avatars */}
      <div className="flex">
        {COLLABS.map((c) => (
          <div
            key={c.letter}
            className="w-6 h-6 rounded-full -ml-[7px] first:ml-0 border-2 border-bg flex items-center justify-center text-white text-[10px] font-bold"
            style={{ backgroundColor: c.bg }}
          >
            {c.letter}
          </div>
        ))}
      </div>

      <button
        className="inline-flex items-center gap-[7px] rounded-full py-[5px] px-[11px] text-muted cursor-pointer border border-transparent transition-colors hover:border-hair hover:text-txt"
        style={{ background: "var(--color-txt)", color: "var(--color-bg)" }}
      >
        ▶ visite guidée
      </button>

      <button className="inline-flex items-center gap-[7px] rounded-full py-[5px] px-[11px] text-muted cursor-pointer border border-transparent transition-colors hover:border-hair hover:text-txt">
        ⤢ tout voir
      </button>
    </div>
  )
}
