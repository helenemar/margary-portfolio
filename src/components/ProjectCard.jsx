export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="w-[340px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col cursor-pointer transition-shadow hover:shadow-lg"
      onClick={onOpen}
    >
      {/* Accent bar */}
      <div className="h-2" style={{ backgroundColor: project.accent }} />

      <div className="p-6 flex flex-col gap-4">
        <h3 className="font-fraunces font-bold text-xl text-stone-900 leading-snug">
          {project.title}
        </h3>

        <p className="font-inter text-sm text-stone-500 leading-relaxed">
          {project.tagline}
        </p>

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

        <button
          className="mt-1 font-inter text-sm font-medium px-4 py-2 rounded-lg text-white cursor-pointer transition-opacity hover:opacity-90 self-start"
          style={{ backgroundColor: project.accent }}
        >
          Voir le projet
        </button>
      </div>
    </div>
  )
}
