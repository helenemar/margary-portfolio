import { useState, useCallback, useRef } from "react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

const MIN_ZOOM = 0.18
const MAX_ZOOM = 2.6
const ZOOM_STEP = 0.15
const WHEEL_FACTOR = 0.0016

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function Canvas() {
  const [camera, setCamera] = useState({ x: 0, y: 0, zoom: 1 })
  const [openProject, setOpenProject] = useState(null)
  const dragRef = useRef(null)

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

  const onWheel = useCallback((e) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX - rect.left
    const cy = e.clientY - rect.top
    const deltaY = e.deltaY

    setCamera((cam) => {
      const f = Math.exp(-deltaY * WHEEL_FACTOR)
      const newZoom = clamp(cam.zoom * f, MIN_ZOOM, MAX_ZOOM)
      const ratio = newZoom / cam.zoom
      return {
        zoom: newZoom,
        x: cx - (cx - cam.x) * ratio,
        y: cy - (cy - cam.y) * ratio,
      }
    })
  }, [])

  const zoomBy = (dir) => {
    setCamera((cam) => {
      const newZoom = clamp(cam.zoom * (dir > 0 ? 1.25 : 0.8), MIN_ZOOM, MAX_ZOOM)
      const ratio = newZoom / cam.zoom
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

  const gap = 30 * camera.zoom
  const gridStyle = {
    backgroundImage: `radial-gradient(var(--color-dot) ${1 * camera.zoom}px, transparent ${1.4 * camera.zoom}px)`,
    backgroundSize: `${gap}px ${gap}px`,
    backgroundPosition: `${camera.x % gap}px ${camera.y % gap}px`,
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-bg overflow-hidden select-none"
        style={{ cursor: dragRef.current ? "grabbing" : "grab", ...gridStyle }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onWheel={onWheel}
      >
        <div
          className="absolute top-0 left-0 will-change-transform"
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

        {/* Zoom controls — reference style */}
        <div
          className="fixed left-4 bottom-4 z-[60] flex items-center gap-0.5 rounded-[11px] border border-hair backdrop-blur-[12px] p-1"
          style={{ background: "color-mix(in srgb, var(--color-surface) 80%, transparent)" }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => zoomBy(-1)}
            className="w-[34px] h-[30px] rounded-lg text-txt text-base flex items-center justify-center cursor-pointer hover:bg-txt/10 transition-colors"
          >
            −
          </button>
          <span className="font-mono text-xs text-muted min-w-[50px] text-center select-none">
            {Math.round(camera.zoom * 100)}%
          </span>
          <button
            onClick={() => zoomBy(1)}
            className="w-[34px] h-[30px] rounded-lg text-txt text-base flex items-center justify-center cursor-pointer hover:bg-txt/10 transition-colors"
          >
            +
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
