export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="flex flex-col" onClick={onOpen}>
      {/* Frame label — above the card */}
      <div
        className="flex items-center gap-2 mb-1.5 ml-0.5 font-mono text-[13px] tracking-wide text-muted whitespace-nowrap cursor-pointer"
      >
        <span
          className="inline-block w-[9px] h-[9px] rounded-[3px] shrink-0"
          style={{ backgroundColor: project.accent }}
        />
        <span>{project.label}</span>
      </div>

      {/* Frame box */}
      <div
        className="w-[340px] rounded-[10px] border border-hair overflow-hidden cursor-pointer transition-shadow"
        style={{
          background: "var(--color-elev)",
          boxShadow: "0 30px 70px -28px var(--color-shadow)",
          outlineOffset: "3px",
          outline: "2px solid transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.outlineColor = project.accent
          e.currentTarget.style.boxShadow = `0 30px 70px -28px var(--color-shadow), 0 0 0 4px color-mix(in srgb, ${project.accent} 16%, transparent)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.outlineColor = "transparent"
          e.currentTarget.style.boxShadow = "0 30px 70px -28px var(--color-shadow)"
        }}
      >
        {/* Cover image or accent bar */}
        {project.cover ? (
          <div className="border-b border-hair">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        ) : (
          <div className="h-1.5" style={{ backgroundColor: project.accent }} />
        )}

        <div className="p-[18px] flex flex-col">
          {/* Brand line */}
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2.5">
            Designé & vibe codé en solo
          </div>

          <h3 className="font-fraunces font-bold text-2xl leading-tight text-txt m-0 mb-1.5">
            {project.title}
          </h3>

          <p className="text-[0.92rem] leading-relaxed text-muted mt-3 mb-0">
            {project.tagline}
          </p>

          {/* Tags — mono, uppercase, bordered pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-wide rounded-full px-2.5 py-1"
                style={{
                  border: `1px solid color-mix(in srgb, ${project.accent} 50%, var(--color-hair))`,
                  color: `color-mix(in srgb, ${project.accent} 70%, var(--color-txt))`,
                  background: `color-mix(in srgb, ${project.accent} 12%, transparent)`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link-style button */}
          <button
            className="mt-3.5 font-mono text-xs rounded-full px-[15px] py-2 cursor-pointer transition-colors self-start"
            style={{
              border: `1px solid ${project.accent}`,
              color: project.accent,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = project.accent
              e.currentTarget.style.color = "#fff"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = project.accent
            }}
          >
            Voir le projet →
          </button>
        </div>
      </div>
    </div>
  )
}
