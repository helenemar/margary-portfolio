import { useState, useRef, useEffect } from "react"
import avatar from "../assets/helene-avatar-3d.png"

const INTENTS = [
  {
    keys: ["bonjour", "salut", "hello", "coucou", "hey"],
    reply:
      "Salut ! Moi c'est Hélène 👋 Pose moi une question sur mon parcours, mes projets ou ma façon de bosser.",
  },
  {
    keys: ["qui es tu", "parcours", "présente", "toi", "profil"],
    reply:
      "Hélène, 34 ans, basée à Paris. Product designer senior, en freelance depuis plus de 3 ans : UI, UX, design systems et recherche utilisateur. Je conçois des produits et je sais aussi les construire avec l'IA, de l'idée au MVP. Toujours en quête de nouveaux projets et de beaux challenges.",
  },
  {
    keys: ["projet", "projets", "travaux", "réalisations", "portfolio"],
    reply:
      "Ce que tu vois ici est une sélection. Des produits que j'ai conçus et construits en solo, et des projets clients en design : Custo, Horsenest, Skillgrid. Plus des missions grand compte chez L'Oréal et Stellantis. J'ai aussi travaillé pour Disneyland Paris, Chanel via Mazarine, Witco, Pulp et MyWay, entre autres. Clique sur les cartes pour le détail.",
  },
  {
    keys: ["genogy", "génogramme"],
    reply:
      "Genogy, c'est un SaaS pour créer des génogrammes cliniques : éditeur sur canvas, fiches membres, design system. Conçu et construit en solo avec l'IA. En ligne sur genogy-app.com.",
  },
  {
    keys: ["lexia", "avocat"],
    reply:
      "Lexia, c'est mon produit, que je fonde en solo : une marketplace pour trouver un avocat vérifié et un espace cabinet avec dossiers, agenda, facturation, plus des relances et des résumés assistés par IA. En construction active.",
  },
  {
    keys: ["custo", "horsenest", "skillgrid", "client", "clients"],
    reply:
      "En design pour des clients : Custo (emballages personnalisés), Horsenest (gestion équestre) et Skillgrid (SaaS RH). Sur chacun j'ai porté l'UX, l'UI et le design system, seule en freelance.",
  },
  {
    keys: ["oréal", "loréal", "stellantis", "disney", "chanel", "grand compte", "expérience"],
    reply:
      "J'ai mené des missions grand compte chez L'Oréal en R&I et Stellantis, et travaillé pour Disneyland Paris et Chanel via Mazarine. Toujours du design produit, souvent avec des design systems. Les projets sous NDA, j'en parle avec plaisir en entretien.",
  },
  {
    keys: ["ia", "build", "builder", "construis", "méthode", "comment tu bosses", "workflow", "design et ia"],
    reply:
      "Mon métier, c'est le design produit : UX, UI, design systems, recherche. En plus de ça, je sais construire ce que je conçois avec l'IA, jusqu'à un MVP cliquable. Ça me permet de tester une idée vite, de mieux parler le langage des équipes tech, et de collaborer plus facilement avec les devs. Designer avant tout, builder en bonus.",
  },
  {
    keys: ["compétences", "skills", "expertise", "savoir faire"],
    reply:
      "UI, UX, design systems, recherche et tests utilisateurs, prototypage. Une vraie culture tech (formation HETIC, un passé front) qui aide à parler le langage des équipes. Et la capacité à construire avec l'IA.",
  },
  {
    keys: ["dispo", "disponible", "freelance", "recrutement", "embauche", "mission", "cdi", "cdd"],
    reply:
      "Ouverte aux opportunités, CDI, CDD ou freelance, si le projet est intéressant. Je suis à Paris, en hybride.",
  },
  {
    keys: ["contact", "mail", "email", "joindre", "écrire"],
    reply:
      "Le plus simple : hln.margary@gmail.com. Tu me trouves aussi sur Malt.",
  },
  {
    keys: ["paris", "où", "localisation", "ville", "hybride", "télétravail"],
    reply:
      "Je suis à Paris, en hybride, avec un peu de télétravail (j'ai un petit chien à la maison 🐶).",
  },
  {
    keys: ["hobbies", "passions", "intérêts", "en dehors", "perso"],
    reply: "En dehors du design : la cuisine 🍳, les voyages ✈️ et l'IA 🤖.",
  },
  {
    keys: ["merci", "thanks", "top", "super"],
    reply: "Avec plaisir 😊 N'hésite pas si tu as d'autres questions.",
  },
]

const FALLBACK =
  "Bonne question ! Je n'ai pas de réponse toute prête là dessus. Demande moi plutôt mon parcours, mes projets, ma façon de bosser avec l'IA, ma dispo, ou comment me contacter."

const SUGGESTIONS = [
  "Qui es tu ?",
  "Tes projets",
  "Design et IA",
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
