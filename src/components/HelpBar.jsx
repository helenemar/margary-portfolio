export default function HelpBar() {
  return (
    <div
      className="fixed left-4 bottom-16 z-[55] font-mono text-[11px] text-faint tracking-wide"
      onPointerDown={(e) => e.stopPropagation()}
    >
      glisse pour te déplacer · molette pour zoomer · clique une frame
    </div>
  )
}
