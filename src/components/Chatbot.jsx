import { useState, useRef, useEffect } from "react"
import avatar from "../assets/helene-avatar-3d.png"

const INTENTS = [
  {
    keys: ["bonjour", "salut", "hello", "coucou", "hey"],
    reply:
      "Salut ! Moi c'est Hélène 👋 Pose moi une question sur mon parcours, mes projets ou ma façon de bosser.",
  },
  {
    keys: ["qui es tu", "parcours", "présente", "toi"],
    reply:
      "Product Designer senior à Paris. Je ne suis pas développeuse, mais je sais vibe coder : avec l'IA (Claude Code et Figma), je transforme une idée en MVP cliquable, sans attendre une équipe de dev.",
  },
  {
    keys: ["projet", "travaux", "réalisations"],
    reply:
      "Mes deux gros projets en solo : Genogy, un SaaS de génogrammes cliniques, et Lexia, une plateforme pour avocats. Les deux sont designés et vibe codés de A à Z. Clique sur les cartes pour le détail.",
  },
  {
    keys: ["genogy"],
    reply:
      "Genogy, c'est un SaaS pour créer des génogrammes cliniques : éditeur canvas, fiches membres, design system. Conçu et vibe codé en solo. Le site est en ligne sur genogy-app.com.",
  },
  {
    keys: ["lexia"],
    reply:
      "Lexia, c'est une plateforme pour avocats : une marketplace pour trouver un avocat vérifié, et un back office cabinet avec dossiers, agenda, facturation, plus des relances et des résumés générés par IA.",
  },
  {
    keys: ["oréal", "loréal", "stellantis", "expérience"],
    reply:
      "Chez L'Oréal (R&I) et Stellantis, j'ai fait du design produit sur des outils internes. Je ne peux pas montrer de captures (NDA), mais j'en parle avec plaisir en entretien.",
  },
  {
    keys: ["ia", "méthode", "vibe", "comment tu bosses", "workflow"],
    reply:
      "L'IA est au cœur de ma méthode : je prototype avec Claude Code et Figma, et je livre un MVP cliquable sans attendre une équipe de dev. Genogy et Lexia en sont la preuve.",
  },
  {
    keys: ["dispo", "disponible", "freelance", "recrutement", "embauche", "mission"],
    reply:
      "Je suis freelance, mais ouverte au CDD, CDI ou autre si le poste est intéressant. Basée à Paris, en télétravail.",
  },
  {
    keys: ["contact", "mail", "email", "joindre", "écrire"],
    reply:
      "Le plus simple : hln.margary@gmail.com. Tu me trouves aussi sur Malt.",
  },
  {
    keys: ["paris", "où", "localisation", "ville"],
    reply:
      "Je suis à Paris, et je bosse en télétravail, mobile pour les rencontres qui comptent.",
  },
  {
    keys: ["hobbies", "passions", "intérêts", "en dehors"],
    reply: "En dehors du design : la cuisine 🍳, les voyages ✈️, Paris 🗼 et l'IA 🤖.",
  },
  {
    keys: ["merci"],
    reply: "Avec plaisir 😊 N'hésite pas si tu as d'autres questions.",
  },
]

const FALLBACK =
  "Bonne question ! Je n'ai pas de réponse toute prête là dessus. Demande moi plutôt mes projets, ma dispo, ma méthode avec l'IA, ou comment me contacter."

const SUGGESTIONS = [
  "Qui es tu ?",
  "Tes projets",
  "Ta méthode avec l'IA",
  "Tu es dispo ?",
  "Te contacter",
]

function getReply(text) {
  const lower = text.toLowerCase()
  for (const intent of INTENTS) {
    if (intent.keys.some((key) => lower.includes(key))) {
      return intent.reply
    }
  }
  return FALLBACK
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Salut ! Moi c'est Hélène 👋 Pose moi une question sur mon parcours, mes projets ou ma façon de bosser.",
    },
  ])
  const [input, setInput] = useState("")
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = (text) => {
    if (!text.trim()) return
    const userMsg = { from: "user", text: text.trim() }
    const botMsg = { from: "bot", text: getReply(text) }
    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput("")
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(input)
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3"
      onPointerDown={(e) => e.stopPropagation()}
    >
      {/* Chat panel */}
      {open && (
        <div className="w-[330px] h-[480px] bg-white rounded-2xl shadow-xl border border-stone-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-stone-100">
            <div
              className="w-9 h-9 rounded-full overflow-hidden shrink-0"
              style={{
                background: "linear-gradient(160deg, #A6C8F2, #C3B0E6)",
              }}
            >
              <img
                src={avatar}
                alt="Hélène"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-inter font-semibold text-sm text-stone-900 leading-tight">
                Hélène
              </p>
              <p className="font-inter text-xs text-stone-400 leading-tight">
                Product Designer · répond en direct
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full text-stone-400 hover:bg-stone-100 flex items-center justify-center transition-colors cursor-pointer text-lg"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-xl font-inter text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "self-end bg-stone-800 text-white rounded-br-sm"
                    : "self-start bg-stone-100 text-stone-700 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="font-inter text-xs px-2.5 py-1 rounded-full bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className="px-3 py-2.5 border-t border-stone-100 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écris ta question..."
              className="flex-1 font-inter text-sm px-3 py-2 rounded-lg bg-stone-50 border border-stone-200 outline-none focus:border-stone-400 transition-colors"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-lg bg-stone-800 text-white flex items-center justify-center shrink-0 hover:bg-stone-700 transition-colors cursor-pointer"
            >
              ↑
            </button>
          </form>
        </div>
      )}

      {/* Launcher button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-16 h-16 rounded-full shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 border-2 border-white"
        style={{
          background: "linear-gradient(160deg, #A6C8F2, #C3B0E6)",
        }}
      >
        <img
          src={avatar}
          alt="Demande à Hélène"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  )
}
