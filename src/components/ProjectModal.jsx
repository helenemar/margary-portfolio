import { useEffect } from "react"

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
      style={{ "--acc": project.accent }}
      onPointerDown={(e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[5px] pointer-events-none" />

      {/* Panel */}
      <div
        className="relative border border-hair rounded-[18px] w-full max-w-[780px] max-h-[88vh] overflow-y-auto"
        style={{
          background: "var(--color-elev)",
          boxShadow: "0 50px 120px -30px rgba(0,0,0,.3)",
        }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 border-b border-hair px-[22px] py-[18px] flex items-center gap-3"
          style={{ background: "var(--color-elev)" }}
        >
          <div className="flex-1">
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mb-1.5">
              {project.label}
            </div>
            <h2 className="font-fraunces font-bold text-[1.55rem] leading-tight text-txt m-0">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-[34px] h-[34px] rounded-full border border-hair text-muted text-[15px] flex items-center justify-center cursor-pointer hover:text-txt transition-colors shrink-0"
            style={{ background: "var(--color-surface)" }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-[22px] flex flex-col gap-4">
          {/* Role */}
          <div
            className="rounded-xl px-3.5 py-3 text-[0.92rem] leading-relaxed"
            style={{
              background: `color-mix(in srgb, ${project.accent} 9%, transparent)`,
              border: `1px solid color-mix(in srgb, ${project.accent} 32%, var(--color-hair))`,
            }}
          >
            <b className="text-txt">Mon rôle :</b>{" "}
            <span className="text-muted">{project.role}</span>
          </div>

          {/* Description */}
          <p className="text-muted text-[0.96rem] leading-relaxed">
            {project.description}
          </p>

          {/* Gallery */}
          {project.gallery && (
            <div className="flex flex-col gap-3.5">
              {project.gallery.map((img) => (
                <div
                  key={img.caption}
                  className="rounded-xl overflow-hidden border border-hair"
                  style={{ background: "var(--color-surface)" }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto block"
                  />
                  <div className="font-mono text-[10.5px] text-muted px-3 py-2.5 border-t border-hair">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-[7px] mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-wide border border-hair rounded-full px-2.5 py-[5px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[13px] no-underline text-white rounded-full px-[17px] py-[11px] self-start"
              style={{ background: project.accent }}
            >
              {project.link.replace("https://", "")} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
