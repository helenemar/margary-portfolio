import {
  genogy1,
  genogy2,
  genogy3,
  lexia1,
  lexia2,
  lexia3,
  lexia4,
} from "../assets/images"

const projects = [
  {
    id: "genogy",
    title: "Genogy, l'app de génogrammes",
    tagline: "SaaS de génogrammes cliniques, conçu et vibe codé en solo.",
    tags: ["Product Design", "SaaS", "Vibe coding"],
    x: 60,
    y: 60,
    accent: "#A3785B",
    role: "Product designer en solo : recherche, UX, UI et design system, puis conçu et vibe codé avec Claude Code et Figma.",
    description:
      "Genogy est un SaaS pour créer des génogrammes cliniques : un éditeur canvas, des fiches membres, et un design system complet. J'ai porté le produit du concept jusqu'au MVP cliquable, toute seule.",
    link: "https://genogy-app.com",
    cover: genogy1,
    gallery: [
      { src: genogy1, caption: "Landing" },
      { src: genogy2, caption: "Éditeur canvas" },
      { src: genogy3, caption: "Fiche membre" },
    ],
  },
  {
    id: "lexia",
    title: "Lexia, la plateforme des avocats",
    tagline:
      "Marketplace et back office cabinet, avec relances et résumés générés par IA.",
    tags: ["Product Design", "SaaS", "IA"],
    x: 520,
    y: 60,
    accent: "#6B8F7B",
    role: "Product designer en solo, du concept au MVP, avec l'IA dans le workflow.",
    description:
      "Lexia est une plateforme pour avocats : une marketplace publique pour trouver un avocat vérifié, et un back office cabinet avec dossiers, agenda, facturation, plus des relances et des résumés générés par IA.",
    cover: lexia1,
    gallery: [
      { src: lexia1, caption: "Marketplace publique" },
      { src: lexia2, caption: "Dashboard cabinet" },
      { src: lexia3, caption: "Dossier avec résumé IA" },
      { src: lexia4, caption: "Relances générées par IA" },
    ],
  },
  {
    id: "loreal",
    title: "L'Oréal · R&I",
    tagline:
      "Design produit sur des outils internes de recherche, 2024 à 2026.",
    tags: ["Product Design", "Outils internes"],
    x: 60,
    y: 520,
    accent: "#7B6B8F",
    role: "Design produit sur des outils internes de recherche et innovation.",
    description:
      "Conception d'interfaces métier pour les équipes R&I, de la recherche utilisateur jusqu'aux maquettes haute fidélité. 2024 à 2026.",
  },
  {
    id: "stellantis",
    title: "Stellantis",
    tagline: "Design produit sur des interfaces métier, 2024 à 2025.",
    tags: ["Product Design", "UX"],
    x: 520,
    y: 520,
    accent: "#5B7B8F",
    role: "Design produit sur des interfaces métier.",
    description:
      "Conception et amélioration d'outils internes, basse puis haute fidélité. 2024 à 2025.",
  },
]

export default projects
