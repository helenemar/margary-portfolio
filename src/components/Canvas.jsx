import { useState, useCallback, useRef } from "react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

const MIN_ZOOM = 0.3
const MAX_ZOOM = 2.5
const ZOOM_STEP = 0.1
const WHEEL_FACTOR = 0.001

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function Canvas() {
  const [camera, setCamera] = useState({ x: 0, y: 0, zoom: 1 })
  const [openProject, setOpenProject] = useState(null)
  const dragRef = useRef(null)

  // --- Pan (click-drag on background) ---
  const onPointerDown = useCallback(
    (e) => {
      if (e.button !== 0) return
      e.currentTarget.setPointerCapture(e.pointerId)
      dragRef.current = { startX: e.clientX, startY: e.clientY, camX: camera.x, camY: camera.y }
    },
    [camera.x, camera.y],
  )

  const onPointerMove = useCallback((e) => {
    const drag = dragRef.current
    if (!drag) return
    const dx = e.clientX - drag.startX
    const dy = e.clientY - drag.startY
    setCamera((c) => ({ ...c, x: drag.camX + dx, y: drag.camY + dy }))
  }, [])

  const onPointerUp = useCallback(() => {
    dragRef.current = null
  }, [])

  // --- Zoom (wheel, centered on cursor) ---
  const onWheel = useCallback((e) => {
    e.preventDefault()
    // Read DOM values before the updater — e.currentTarget is nulled after the handler
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX - rect.left
    const cy = e.clientY - rect.top
    const deltaY = e.deltaY

    setCamera((cam) => {
      const delta = -deltaY * WHEEL_FACTOR
      const newZoom = clamp(cam.zoom + delta * cam.zoom, MIN_ZOOM, MAX_ZOOM)
      const ratio = newZoom / cam.zoom

      return {
        zoom: newZoom,
        x: cx - (cx - cam.x) * ratio,
        y: cy - (cy - cam.y) * ratio,
      }
    })
  }, [])

  // --- Button controls ---
  const zoomBy = (delta) => {
    setCamera((cam) => {
      const newZoom = clamp(cam.zoom + delta, MIN_ZOOM, MAX_ZOOM)
      const ratio = newZoom / cam.zoom
      // Zoom centered on viewport center
      const vcx = window.innerWidth / 2
      const vcy = window.innerHeight / 2
      return {
        zoom: newZoom,
        x: vcx - (vcx - cam.x) * ratio,
        y: vcy - (vcy - cam.y) * ratio,
      }
    })
  }

  const reset = () => setCamera({ x: 0, y: 0, zoom: 1 })

  // Dot grid: repeating radial-gradient that moves/scales with the camera
  const dotSize = 1.2 * camera.zoom
  const gap = 28 * camera.zoom
  const gridStyle = {
    backgroundImage: `radial-gradient(circle, #b8b3a8 ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${gap}px ${gap}px`,
    backgroundPosition: `${camera.x % gap}px ${camera.y % gap}px`,
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-cream overflow-hidden select-none"
        style={{ cursor: dragRef.current ? "grabbing" : "grab", ...gridStyle }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onWheel={onWheel}
      >
        {/* Transformed layer — everything on the canvas lives here */}
        <div
          style={{
            transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom})`,
            transformOrigin: "0 0",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="absolute"
              style={{ left: project.x, top: project.y }}
              onPointerDown={(e) => e.stopPropagation()}
            >
              <ProjectCard
                project={project}
                onOpen={() => setOpenProject(project)}
              />
            </div>
          ))}
        </div>

        {/* Controls — z-50 + stopPropagation to stay above canvas and block pan */}
        <div
          className="absolute bottom-6 left-6 z-50 flex items-center gap-2"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => zoomBy(-ZOOM_STEP)}
            className="w-9 h-9 rounded-lg bg-white/80 backdrop-blur border border-stone-300 text-stone-700 font-mono text-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
          >
            −
          </button>
          <span className="font-mono text-sm text-stone-500 w-14 text-center select-none">
            {Math.round(camera.zoom * 100)}%
          </span>
          <button
            onClick={() => zoomBy(ZOOM_STEP)}
            className="w-9 h-9 rounded-lg bg-white/80 backdrop-blur border border-stone-300 text-stone-700 font-mono text-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
          >
            +
          </button>
          <button
            onClick={reset}
            className="ml-1 h-9 px-3 rounded-lg bg-white/80 backdrop-blur border border-stone-300 text-stone-600 font-inter text-sm hover:bg-white transition-colors cursor-pointer"
          >
            Recentrer
          </button>
        </div>
      </div>

      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </>
  )
}
