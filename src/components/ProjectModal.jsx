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
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onPointerDown={(e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 max-h-[85vh] overflow-y-auto"
      >
        {/* Accent bar */}
        <div
          className="h-2 rounded-t-2xl"
          style={{ backgroundColor: project.accent }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center hover:bg-stone-200 transition-colors cursor-pointer text-lg"
        >
          ×
        </button>

        <div className="p-8 flex flex-col gap-6">
          <h2 className="font-fraunces font-bold text-2xl text-stone-900 leading-snug pr-8">
            {project.title}
          </h2>

          {/* Role */}
          <div>
            <h4 className="font-inter font-semibold text-sm text-stone-700 mb-1">
              Mon rôle :
            </h4>
            <p className="font-inter text-sm text-stone-600 leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* Description */}
          <p className="font-inter text-base text-stone-700 leading-relaxed">
            {project.description}
          </p>

          {/* Gallery (only if project has images) */}
          {project.gallery && (
            <div className="flex flex-col gap-4">
              {project.gallery.map((img) => (
                <figure key={img.caption} className="m-0 flex flex-col gap-1.5">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full rounded-xl"
                  />
                  <figcaption className="font-inter text-xs text-stone-400 pl-1">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-inter text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link button (only if link exists) */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm font-medium px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90 self-start no-underline"
              style={{ backgroundColor: project.accent }}
            >
              Voir le site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
