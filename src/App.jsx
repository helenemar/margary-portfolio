import { useEffect } from "react"
import "./index.css"

// Real asset imports (replace PLACEHOLDERs)
import G_LAND from "./assets/genogy-1-landing.jpg"
import GP_1 from "./assets/genogyplateform1.jpg"
import GP_2 from "./assets/genogyplateform2.jpg"
import GP_3 from "./assets/genogyplateform3.jpg"
import GP_4 from "./assets/genogyplateform4.jpg"
import GP_5 from "./assets/genogyplateform5.jpg"
import GP_6 from "./assets/genogyplateform6.jpg"
import GP_7 from "./assets/genogyplateform7.jpg"
import GP_8 from "./assets/genogyplateform8.jpg"
import G_L1 from "./assets/genorylanding1.jpg"
import G_L2 from "./assets/genorylanding2.jpg"
import G_L3 from "./assets/genorylanding3.jpg"
import G_L4 from "./assets/genorylanding4.jpg"
import G_L5 from "./assets/genorylanding5.jpg"
import G_L6 from "./assets/genorylanding6.jpg"
import G_L7 from "./assets/genorylanding7.jpg"
import G_L8 from "./assets/genorylanding8.jpg"
import CU_1 from "./assets/custo-1-accueil.png"
import CU_2 from "./assets/custo-2-catalogue.png"
import CU_3 from "./assets/custo-3-taille.png"
import CU_4 from "./assets/custo-4-matiere.png"
import CU_5 from "./assets/custo-5-tarifs.png"
import CU_6 from "./assets/custo-6-personnalisation.png"
import CU_7 from "./assets/custo-7-panier.png"
import CU_8 from "./assets/custo-8-compte.png"
import L_LAND from "./assets/lexia-1-marketplace.jpg"
import L_DASH from "./assets/lexia-2-dashboard.jpg"
import L_CASE from "./assets/lexia-3-dossier.jpg"
import L_REL from "./assets/lexia-4-relances.jpg"
import LOREAL_LOGO from "./assets/LOreal-Logo-1536x869.png"
import STELLANTIS_LOGO from "./assets/Stellantis.svg"
import LOFI_SRC from "./assets/lofi-loop.mp3"
import BOTIMG from "./assets/helene-avatar-full.png"
import AV from "./assets/helene-photo.jpg"
import SK_1 from "./assets/skillgrid-1-dashboard.png"
import SK_2 from "./assets/skillgrid-2-organigramme.png"
import SK_3 from "./assets/skillgrid-3-profil.png"
import SK_4 from "./assets/skillgrid-4-creation-matrice.png"
import SK_5 from "./assets/skillgrid-5-entretiens.png"
import SK_6 from "./assets/skillgrid-6-creation-entretien.png"
import SK_7 from "./assets/skillgrid-7-questions.png"
import HR_P1 from "./assets/HornestPlateforme1.png"
import HR_P2 from "./assets/HornestPlateforme2.png"
import HR_P3 from "./assets/HornestPlateforme3.png"
import HR_P4 from "./assets/HornestPlateforme4.png"
import HR_P5 from "./assets/HornestPlateforme5.png"
import HR_P6 from "./assets/HornestPlateforme6.png"
import HR_P7 from "./assets/HornestPlateforme7.png"
import HR_W1 from "./assets/HornestWebSite1.png"
import HR_W2 from "./assets/HornestWebSite2.png"
import HR_W4 from "./assets/HornestWebSite4.png"
import HR_W6 from "./assets/HornestWebSite6.png"
import HR_W7 from "./assets/HornestWebSite7.png"
import HR_M1 from "./assets/horsnestmobile1.png"
import HR_M2 from "./assets/horsnestmobile2.png"
import HR_M4 from "./assets/horsnestmobile4.png"
import HR_M5 from "./assets/horsnestmobile5.png"
import HR_M6 from "./assets/horsnestmobile6.png"
import HR_M7 from "./assets/horsnestmobile7.png"
import HR_M8 from "./assets/horsnestmobile8.png"

export default function App() {
  useEffect(() => {
    // ===== INIT VARS =====
    // Clear dynamic containers (prevents duplicates on HMR)
    // Replace world node to remove stale event listeners from previous mount
    var oldWorld = document.getElementById("world")
    var freshWorld = oldWorld.cloneNode(false)
    oldWorld.parentNode.replaceChild(freshWorld, oldWorld)
    document.getElementById("cursors").innerHTML = ""
    document.getElementById("avatars").innerHTML = ""
    // Remove stale game windows and dock from previous mount
    document.querySelectorAll(".window, .sw-dock").forEach(function (el) { el.remove() })

    var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches
    var $ = function (s, r) {
      return (r || document).querySelector(s)
    }
    function cv_(n) {
      return getComputedStyle(document.documentElement).getPropertyValue(n).trim()
    }
    function clamp(v, a, b) {
      return Math.max(a, Math.min(b, v))
    }

    // ===== faux UI markup =====
    function ui(type) {
      if (type === "site")
        return '<div class="fx site"><div class="nav"><span class="lg">F&amp;S</span><span class="sp"></span><div class="l t" style="width:24px"></div><div class="l t" style="width:28px"></div></div><div class="h" style="width:74%"></div><div class="h" style="width:48%"></div><span class="pl"></span><div class="tr"><div class="tc"></div><div class="tc"></div><div class="tc"></div></div></div>'
      if (type === "ai")
        return '<div class="fx ai"><div class="top" style="border-color:rgba(255,255,255,.08)"><span class="o"></span><div class="l t" style="width:40%;margin-left:6px"></div></div><div class="bub ai2"><div class="l" style="width:70px"></div><div class="l t" style="width:46px;margin-top:4px"></div></div><div class="bub me"><div class="l" style="width:58px"></div></div><div class="bub ai2"><div class="l" style="width:80px"></div></div></div>'
      return '<div class="fx"><div class="top"><span class="o"></span><span class="o"></span><span class="o"></span></div><div class="gr"><div class="sd"><div class="l"></div><div class="l t"></div><div class="l"></div><div class="l t"></div></div><div class="mn"><div class="cd"><div class="c2"><div class="l t" style="width:60%"></div><div class="big"></div></div><div class="c2"><div class="l t" style="width:50%"></div><div class="big" style="width:48%"></div></div><div class="c2"><div class="l t" style="width:64%"></div><div class="big" style="width:70%"></div></div></div><div class="ch"><svg viewBox="0 0 220 36" preserveAspectRatio="none" style="width:100%;height:100%"><polyline points="0,28 30,20 55,24 85,10 120,16 150,6 185,13 220,5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".5"/></svg></div></div></div></div>'
    }

    // ===== WORLD CONTENT =====
    var world = $("#world")
    var frames = []
    function addFrame(o) {
      var f = document.createElement("div")
      f.className = "frame" + (o.proj ? " frame--clickable" : "")
      if (o.proj && PROJECTS[o.proj]) f.style.setProperty("--acc", PROJECTS[o.proj].accent)
      f.style.left = o.x + "px"
      f.style.top = o.y + "px"
      f.style.width = o.w + "px"
      f.innerHTML =
        '<div class="flabel">' +
        o.label +
        '</div><div class="fbox">' +
        o.html +
        '</div><div class="dims"></div>'
      world.appendChild(f)
      // measure real content height
      var box = f.querySelector(".fbox")
      box.style.position = "static"
      box.style.width = o.w + "px"
      var contentH = box.offsetHeight
      box.style.position = ""
      box.style.width = ""
      var finalH = o.h ? Math.max(o.h, contentH) : contentH
      f.style.height = finalH + "px"
      f.querySelector(".dims").textContent = o.w + " \u00d7 " + finalH
      var rec = { el: f, x: o.x, y: o.y, w: o.w, h: finalH, onOpen: o.onOpen, proj: o.proj || null }
      // re-measure height after layout settles and images load
      function recheckH() {
        box.style.position = "static"
        box.style.width = o.w + "px"
        var newH = box.offsetHeight
        box.style.position = ""
        box.style.width = ""
        if (newH > rec.h) {
          rec.h = newH
          f.style.height = newH + "px"
          f.querySelector(".dims").textContent = o.w + " \u00d7 " + newH
        }
      }
      // recheck after next frame (fonts, layout)
      requestAnimationFrame(function () { requestAnimationFrame(recheckH) })
      // recheck after images load
      var imgs = box.querySelectorAll("img")
      imgs.forEach(function (img) {
        if (!img.complete) img.addEventListener("load", recheckH)
      })
      frames.push(rec)
      f.addEventListener("click", function (e) {
        if (panMoved || touchMoved) return
        if (o.onOpen && e.target.closest(".pg-btn")) return
        // "Voir le projet" button opens modal, stop here
        if (o.proj && e.target.closest(".pmore")) {
          e.stopPropagation()
          openProject(o.proj)
          return
        }
        // All frames (including projects): zoom to fit
        fitTo(rec)
      })
      return rec
    }
    function addPin(x, y, who, txt) {
      var p = document.createElement("div")
      p.className = "pin"
      p.style.left = x + "px"
      p.style.top = y + "px"
      p.innerHTML =
        '\uD83D\uDCAC<div class="bubble"><span class="who">' +
        who +
        "</span>" +
        txt +
        "</div>"
      world.appendChild(p)
    }

    var PROJECTS = {
      genogy: {
        accent: "#8B5CF6",
        subtitle: "GENOGY \u00b7 SAAS \u00b7 G\u00c9NOGRAMMES CLINIQUES",
        title: "Genogy, le SaaS de g\u00e9nogrammes",
        role: "Product designer en solo : recherche, UX, UI et design system, puis construit avec l'IA jusqu'au produit en ligne.",
        desc: "Genogy aide th\u00e9rapeutes et soignants \u00e0 cr\u00e9er des g\u00e9nogrammes cliniques : \u00e9diteur sur canvas, fiches membres et design system complet. J'ai port\u00e9 le produit de la recherche jusqu'\u00e0 la mise en ligne, seule, en le concevant puis en le construisant avec l'IA.",
        link: "https://genogy-app.com",
        linkLabel: "Voir le site",
        tags: [
          "Product Design",
          "SaaS",
          "IA builder",
        ],
        shots: [
          { section: "Site vitrine" },
          { img: G_L1, cap: "Landing – Hero" },
          { img: G_L2, cap: "Landing – Présentation" },
          { img: G_L3, cap: "Landing – Fonctionnalités" },
          { img: G_L4, cap: "Landing – Détails" },
          { img: G_L5, cap: "Landing – Avantages" },
          { img: G_L6, cap: "Landing – Tarifs" },
          { img: G_L7, cap: "Landing – Témoignages" },
          { img: G_L8, cap: "Landing – Footer" },
          { section: "Plateforme" },
          { img: GP_1, cap: "Plateforme 1" },
          { img: GP_2, cap: "Plateforme 2" },
          { img: GP_3, cap: "Plateforme 3" },
          { img: GP_4, cap: "Plateforme 4" },
          { img: GP_5, cap: "Plateforme 5" },
          { img: GP_6, cap: "Plateforme 6" },
          { img: GP_7, cap: "Plateforme 7" },
          { img: GP_8, cap: "Plateforme 8" },
        ],
      },
      lexia: {
        accent: "#1E8E5A",
        subtitle: "LEXIA \u00b7 LEGALTECH \u00b7 MON PRODUIT",
        title: "Lexia, le SaaS des avocats",
        role: "Fondatrice et product designer, seule sur le produit : vision, UX, UI et design system, con\u00e7u et construit avec l'IA.",
        desc: "Lexia est mon produit, que je fonde et construis en solo. Une marketplace pour trouver un avocat v\u00e9rifi\u00e9 et un espace cabinet avec dossiers, agenda et facturation, enrichi de relances et de r\u00e9sum\u00e9s assist\u00e9s par IA. En construction active.",
        link: "",
        linkLabel: "",
        status: "En construction",
        tags: [
          "Product Design",
          "SaaS",
          "IA",
        ],
        shots: [
          { img: L_LAND, cap: "Marketplace publique" },
          { img: L_DASH, cap: "Dashboard cabinet" },
          { img: L_CASE, cap: "Dossier avec résumé IA" },
          { img: L_REL, cap: "Relances générées par IA" },
        ],
      },
      skillgrid: {
        accent: "#0EA5E9",
        subtitle: "SKILLGRID \u00b7 SAAS RH \u00b7 GESTION DES TALENTS",
        title: "Skillgrid, piloter les talents",
        role: "Product designer freelance, seule sur le projet : UX, UI et design system.",
        desc: "Skillgrid centralise le pilotage des talents : organigramme, matrice de comp\u00e9tences, campagnes d'entretiens, suivi des actions et signatures. J'ai con\u00e7u un produit dense, pens\u00e9 pour rester clair et actionnable, de la recherche aux \u00e9crans haute fid\u00e9lit\u00e9.",
        link: "",
        linkLabel: "",
        tags: [
          "Product Design",
          "UI",
          "Design System",
        ],
        shots: [
          { img: SK_1, cap: "Tableau de bord RH" },
          { img: SK_2, cap: "Organigramme" },
          { img: SK_3, cap: "Fiche collaborateur" },
          { img: SK_4, cap: "Matrice de compétences" },
          { img: SK_5, cap: "Suivi des entretiens" },
          { img: SK_6, cap: "Création d'un entretien" },
          { img: SK_7, cap: "Questions de l'entretien" },
        ],
      },
      horsenest: {
        accent: "#4B8B6E",
        subtitle: "HORSENEST \u00b7 SAAS \u00b7 GESTION \u00c9QUESTRE",
        title: "Horsenest, g\u00e9rer son \u00e9curie",
        role: "Product designer freelance, seule sur le projet : UX, UI et design system.",
        desc: "Horsenest r\u00e9unit profils de chevaux, plannings, organisations, r\u00f4les et facturation, du site vitrine jusqu'\u00e0 l'application. J'ai men\u00e9 le design produit de bout en bout, jusqu'\u00e0 un design system complet, en responsive mobile et desktop.",
        link: "",
        linkLabel: "",
        tags: [
          "Product Design",
          "UI",
          "Design System",
        ],
        shots: [
          { section: "Site vitrine" },
          { img: HR_W1, cap: "Landing" },
          { img: HR_W2, cap: "Présentation" },
          { img: HR_W4, cap: "Fonctionnalités" },
          { img: HR_W6, cap: "Tarifs" },
          { img: HR_W7, cap: "Footer" },
          { section: "Application" },
          { img: HR_P1, cap: "Vue d'ensemble" },
          { img: HR_P2, cap: "Fonctionnalités" },
          { img: HR_P3, cap: "Dashboard" },
          { img: HR_P4, cap: "Organisations et rôles" },
          { img: HR_P5, cap: "Facturation" },
          { img: HR_P6, cap: "Page tarifs" },
          { img: HR_P7, cap: "Création d'organisation" },
          { img: HR_M1, cap: "Accueil", mobile: true },
          { img: HR_M2, cap: "Tâches", mobile: true },
          { img: HR_M4, cap: "Profil cheval", mobile: true },
          { img: HR_M5, cap: "Planning", mobile: true },
          { img: HR_M6, cap: "Organisation", mobile: true },
          { img: HR_M7, cap: "Facturation", mobile: true },
          { img: HR_M8, cap: "Paramètres", mobile: true },
        ],
      },
      custo: {
        accent: "#C2772E",
        subtitle: "CUSTO \u00b7 E-COMMERCE \u00b7 EMBALLAGES PERSONNALIS\u00c9S",
        title: "Custo, le packaging sur mesure",
        role: "Product designer freelance, seule sur le projet : UX, UI et design system.",
        desc: "Custo permet de commander des emballages alimentaires personnalis\u00e9s et responsables. J'ai con\u00e7u tout le parcours : du catalogue au configurateur en plusieurs \u00e9tapes, jusqu'\u00e0 un \u00e9diteur de personnalisation en direct, le panier et l'espace client. Pens\u00e9 pour rester simple et guider de l'id\u00e9e \u00e0 la commande.",
        link: "",
        linkLabel: "",
        tags: [
          "Product Design",
          "UI",
          "E-commerce",
        ],
        shots: [
          { img: CU_1, cap: "Accueil et catalogue" },
          { img: CU_2, cap: "Catalogue produits" },
          { img: CU_3, cap: "Configurateur, choix de la taille" },
          { img: CU_4, cap: "Configurateur, choix de la matière" },
          { img: CU_5, cap: "Tarifs et quantités" },
          { img: CU_6, cap: "Éditeur de personnalisation" },
          { img: CU_7, cap: "Panier" },
          { img: CU_8, cap: "Espace client et commandes" },
        ],
      },
    }

    function openProject(key) {
      var p = PROJECTS[key]
      if (!p) return
      var m = document.getElementById("projModal")
      if (!m) return
      m.style.setProperty("--acc", p.accent || "#0D99FF")
      var hasSections = p.shots.some(function (s) { return s.section })
      var shots = ""
      if (hasSections) {
        // Build sections: [{name, cards}]
        var sections = []
        var cur = null
        p.shots.forEach(function (s) {
          if (s.section) {
            cur = { name: s.section, cards: [], mobile: [] }
            sections.push(cur)
            return
          }
          if (!cur) { cur = { name: "", cards: [], mobile: [] }; sections.push(cur) }
          var card = '<div class="pm-shot"><img src="' + s.img + '" alt="' + s.cap + '"><div class="pm-cap">' + s.cap + "</div></div>"
          if (s.mobile) { cur.mobile.push(card) } else { cur.cards.push(card) }
        })
        // Tabs
        var tabsHtml = '<div class="pm-tabs">'
        sections.forEach(function (sec, i) {
          tabsHtml += '<button class="pm-tab' + (i === 0 ? " active" : "") + '" data-tab="' + i + '">' + sec.name + '</button>'
        })
        tabsHtml += '</div>'
        // Panels
        var panelsHtml = ""
        sections.forEach(function (sec, i) {
          var mobileHtml = sec.mobile.length ? '<div class="pm-mobile-grid">' + sec.mobile.join("") + '</div>' : ""
          panelsHtml += '<div class="pm-tab-panel' + (i === 0 ? " active" : "") + '" data-panel="' + i + '">' + sec.cards.join("") + mobileHtml + '</div>'
        })
        shots = tabsHtml + panelsHtml
      } else {
        var mobileGroup = []
        function flushMobile() {
          if (!mobileGroup.length) return
          shots += '<div class="pm-mobile-grid">' + mobileGroup.join("") + '</div>'
          mobileGroup = []
        }
        p.shots.forEach(function (s) {
          var card = '<div class="pm-shot"><img src="' + s.img + '" alt="' + s.cap + '"><div class="pm-cap">' + s.cap + "</div></div>"
          if (s.mobile) { mobileGroup.push(card) } else { flushMobile(); shots += card }
        })
        flushMobile()
      }
      var tags = p.tags
        .map(function (t) {
          return "<span>" + t + "</span>"
        })
        .join("")
      var link = p.link
        ? '<a class="pm-link" href="' +
          p.link +
          '" target="_blank" rel="noopener">' +
          p.linkLabel +
          " \u2197</a>"
        : ""
      var status = p.status
        ? '<div class="pm-status">\u{1F6A7} ' + p.status + '</div>'
        : ""
      m.querySelector(".pm-panel").innerHTML =
        '<div class="pm-head"><div><div class="pm-brand">' +
        p.subtitle +
        '</div><div class="pm-title">' +
        p.title +
        '</div></div><button class="pm-close" type="button" aria-label="Fermer">\u2715</button></div><div class="pm-body"><div class="pm-role"><b>Mon r\u00f4le :</b> ' +
        p.role +
        '</div>' +
        p.desc.split('\n\n').map(function(par) { return '<p class="pm-desc">' + par + '</p>' }).join('') +
        '<div class="pm-gallery">' +
        shots +
        '</div><div class="pm-tags">' +
        tags +
        "</div>" +
        link +
        status +
        "</div>"
      m.querySelector(".pm-close").addEventListener("click", closeProject)
      // Tab switching
      m.querySelectorAll(".pm-tab").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var idx = btn.getAttribute("data-tab")
          m.querySelectorAll(".pm-tab").forEach(function (b) { b.classList.remove("active") })
          m.querySelectorAll(".pm-tab-panel").forEach(function (p) { p.classList.remove("active") })
          btn.classList.add("active")
          var panel = m.querySelector('.pm-tab-panel[data-panel="' + idx + '"]')
          if (panel) panel.classList.add("active")
        })
      })
      m.classList.add("show")
      var pl = m.querySelector(".pm-panel")
      if (pl) pl.scrollTop = 0
    }
    function closeProject() {
      var m = document.getElementById("projModal")
      if (m) m.classList.remove("show")
    }

    // Lexia (vrai projet)
    addFrame({
      proj: "lexia",
      x: 520,
      y: 650,
      w: 520,
      h: 540,
      label: "<b>Lexia</b> · legaltech · mon produit",
      html:
        '<div class="pad"><div class="fbrand">MON PRODUIT, DE LA VISION AU PRODUIT</div><h3 class="ftitle" style="font-size:1.5rem">Lexia, le SaaS des avocats</h3><div class="pcover"><img src="' +
        L_LAND +
        '" alt="Lexia"></div><p class="fdesc">Marketplace et gestion de cabinet, avec relances et r\u00e9sum\u00e9s assist\u00e9s par IA.</p><div class="ftags"><span>Product Design</span><span>SaaS</span><span>IA</span></div><button class="pmore" type="button">Voir le projet \u2192</button></div>',
    })
    // intro
    addFrame({
      x: 0,
      y: 0,
      w: 320,
      label: "<b>moi.txt</b>",
      html: '<div class="intro-card"><div class="intro-wave">\u270B</div><div class="intro-badge">Product Designer \u00b7 Paris</div><h3 class="intro-title">Bienvenue dans mon fichier.</h3><p class="intro-desc">\u00c0 toi de jouer\u00a0: glisse pour te d\u00e9placer, zoome sur une frame. C\'est mon environnement naturel, je t\'y re\u00e7ois avec plaisir.</p><div class="intro-keys"><span>\u2190\u2192 glisser</span><span>\u26F1 zoomer</span><span>\u25C9 cliquer</span></div></div>',
    })
    // L'Oréal
    addFrame({
      x: 1840,
      y: 0,
      w: 460,
      h: 440,
      label: "<b>L'Or\u00e9al \u00b7 R&I</b>",
      html:
        '<div class="pad" style="--nda-c:#F24E1E"><div class="fbrand"><img src="' + LOREAL_LOGO + '" alt="L\'Or\u00e9al" class="fbrand-inline-logo"> \u00b7 RECHERCHE &amp; INNOVATION</div><h3 class="ftitle">App Store interne R&I</h3>'
        + '<div class="nda-illus" style="--nda-c:#F24E1E;color:#F24E1E"><img src="' + LOREAL_LOGO + '" alt="L\'Or\u00e9al" class="nda-logo">'
        + '<svg class="nda-shapes" viewBox="0 0 400 150" fill="none"><rect x="8" y="8" width="70" height="134" rx="8" fill="currentColor" opacity=".10"/><rect x="90" y="8" width="140" height="56" rx="8" fill="currentColor" opacity=".08"/><rect x="90" y="74" width="66" height="68" rx="8" fill="currentColor" opacity=".07"/><rect x="166" y="74" width="66" height="68" rx="8" fill="currentColor" opacity=".09"/><rect x="244" y="8" width="148" height="134" rx="8" fill="currentColor" opacity=".06"/><polyline points="258,120 280,95 310,105 340,80 370,90" stroke="currentColor" stroke-width="2" opacity=".18" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
        + '<div class="nda-impact"><span>Design system groupe</span><span>Recherche utilisateur</span></div>'
        + '<p class="fdesc" style="font-size:.84rem;font-weight:600;color:var(--text);margin-bottom:0">Product designer pour les \u00e9quipes Recherche &amp; Innovation.</p>'
        + '<p class="fdesc" style="font-size:.84rem">J\'ai con\u00e7u un App Store interne qui centralise les outils m\u00e9tier \u00e0 l\'\u00e9chelle du groupe. Trois it\u00e9rations majeures guid\u00e9es par la recherche utilisateur, et un design system renforc\u00e9 pour une coh\u00e9rence durable et un relais fluide vers les \u00e9quipes techniques.</p>'
        + '<div class="ftags"><span>Product Design</span><span>Design System</span><span>Recherche UX</span></div>'
        + '<div class="nda-badge">\uD83D\uDD12 Visuels d\u00e9taill\u00e9s sur demande, projet sous NDA</div></div>',
    })
    // Stellantis
    addFrame({
      x: 1860,
      y: 700,
      w: 460,
      h: 420,
      label: "<b>Stellantis</b>",
      html:
        '<div class="pad" style="--nda-c:#1ABCFE"><div class="fbrand"><img src="' + STELLANTIS_LOGO + '" alt="Stellantis" class="fbrand-inline-logo"> \u00b7 FINANCE &amp; SERVICES</div><h3 class="ftitle">Refonte de MyFinance</h3>'
        + '<div class="nda-illus" style="--nda-c:#1ABCFE;color:#1ABCFE"><img src="' + STELLANTIS_LOGO + '" alt="Stellantis" class="nda-logo">'
        + '<svg class="nda-shapes" viewBox="0 0 400 150" fill="none"><rect x="8" y="8" width="384" height="36" rx="6" fill="currentColor" opacity=".07"/><rect x="8" y="54" width="120" height="88" rx="8" fill="currentColor" opacity=".09"/><rect x="140" y="54" width="120" height="88" rx="8" fill="currentColor" opacity=".07"/><rect x="272" y="54" width="120" height="88" rx="8" fill="currentColor" opacity=".10"/><polyline points="22,120 50,100 80,110 110,90" stroke="currentColor" stroke-width="2" opacity=".18" stroke-linecap="round" stroke-linejoin="round"/><polyline points="154,120 182,105 210,115 240,95" stroke="currentColor" stroke-width="2" opacity=".18" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
        + '<div class="nda-impact"><span>Refonte de bout en bout</span><span>Parcours repens\u00e9s</span><span>Coh\u00e9rence d\'interface</span></div>'
        + '<p class="fdesc" style="font-size:.84rem;font-weight:600;color:var(--text);margin-bottom:0">Product designer sur la refonte d\'une plateforme de gestion financi\u00e8re.</p>'
        + '<p class="fdesc" style="font-size:.84rem">J\'ai men\u00e9 la refonte de MyFinance de bout en bout : nouvelle interface des outils financiers, parcours cl\u00e9s repens\u00e9s et coh\u00e9rence renforc\u00e9e, en lien \u00e9troit avec les \u00e9quipes produit.</p>'
        + '<div class="ftags"><span>Product Design</span><span>UI</span><span>Refonte</span></div>'
        + '<div class="nda-badge">\uD83D\uDD12 Visuels d\u00e9taill\u00e9s sur demande, projet sous NDA</div></div>',
    })
    // Genogy (vrai projet)
    addFrame({
      proj: "genogy",
      x: 500,
      y: -30,
      w: 520,
      h: 540,
      label:
        "<b>Genogy</b> · SaaS · génogrammes cliniques",
      html:
        '<div class="pad"><div class="fbrand">DESIGN + CONSTRUCTION DU PRODUIT</div><h3 class="ftitle" style="font-size:1.5rem">Genogy, le SaaS de génogrammes</h3><div class="pcover"><img src="' +
        G_LAND +
        '" alt="Genogy"></div><p class="fdesc">Un SaaS de g\u00e9nogrammes cliniques, con\u00e7u et construit en solo avec l\'IA.</p><div class="ftags"><span>Product Design</span><span>SaaS</span><span>IA builder</span></div><button class="pmore" type="button">Voir le projet \u2192</button></div>',
    })
    // brands
    addFrame({
      x: 2460,
      y: 0,
      w: 300,
      label: "<b>freelance.list</b>",
      html: '<div class="xp-card"><div class="xp-eye">Freelance grands comptes</div><div class="xp-list"><div class="xp-row"><div class="xp-name">L\'Or\u00e9al</div><div class="xp-role">Design system R&I</div></div><div class="xp-row"><div class="xp-name">Stellantis</div><div class="xp-role">UX app concessionnaires</div></div><div class="xp-row"><div class="xp-name">Disney</div><div class="xp-role">Refonte parcours digital</div></div></div><div class="xp-foot">+ de nombreuses missions PME et startups</div></div>',
    })
    addFrame({
      x: 2450,
      y: 340,
      w: 300,
      label: "<b>parcours.list</b>",
      html: '<div class="xp-card"><div class="xp-eye">Exp\u00e9riences en CDI</div><div class="xp-list"><div class="xp-row"><div class="xp-name">Mazarine</div><div class="xp-role">D\u00e9v front React</div><a href="https://www.mazarine.com/" target="_blank" rel="noopener" class="xp-link">\u2197</a></div><div class="xp-row"><div class="xp-name">Witco</div><div class="xp-role">Product designer</div><a href="https://www.witco.io/" target="_blank" rel="noopener" class="xp-link">\u2197</a></div><div class="xp-row"><div class="xp-name">Pulp</div><div class="xp-role">UI/UX designer</div><a href="https://www.challenges.fr/entreprise/start-up/pulp-le-click-collect-du-cote-des-restaurateurs_755338" target="_blank" rel="noopener" class="xp-link">\u2197</a></div></div></div>',
    })
    // about/interests
    addFrame({
      x: -10,
      y: 420,
      w: 340,
      label: "<b>apropos.me</b>",
      html: '<div class="ab-card">'
        + '<div class="ab-identity"><img class="ab-photo" src="' + AV + '" alt="H\u00e9l\u00e8ne Margary"/><div><div class="ab-name">H\u00e9l\u00e8ne Margary</div><div class="ab-label">Product Designer \u00b7 Paris</div></div></div>'
        + '<div class="ab-eye">QUI JE SUIS</div>'
        + '<h3 class="ab-title">Product designer avant tout.</h3>'
        + '<p class="ab-pitch">Senior en UI, UX, design systems et recherche utilisateur. Je sais aussi construire ce que je con\u00e7ois, avec l\'IA, de l\'id\u00e9e au MVP cliquable. Designer d\'abord, IA builder en bonus.</p>'
        + '<div class="ab-infos">'
        + '<div class="ab-info"><span class="ab-dot"></span><div><b>Dispo</b><span class="ab-detail">Ouverte aux opportunit\u00e9s, CDI, CDD ou freelance, si le projet est int\u00e9ressant.</span></div></div>'
        + '<div class="ab-info"><span class="ab-pin">\uD83D\uDCCD</span><div><b>Paris</b><span class="ab-detail">T\u00e9l\u00e9travail ou hybride (j\'ai un petit chien \u00e0 la maison \uD83D\uDC36).</span></div></div>'
        + '</div>'
        + '<div class="ab-chips"><span>\uD83C\uDF73 cuisine</span><span>\u2708\uFE0F voyages</span><span>\uD83E\uDD16 IA</span></div>'
        + '<div class="ab-actions"><a class="ab-primary" href="mailto:hln.margary@gmail.com">\u00c9crire \u2709</a><a class="ab-secondary" href="https://www.malt.fr/profile/helenemargary" target="_blank" rel="noopener">Malt \u2197</a></div>'
        + '</div>',
    })
    // skills
    addFrame({
      x: 2460,
      y: 660,
      w: 320,
      label: "<b>m\u00e9thode.md</b>",
      html: '<div class="mt-card">'
        + '<div class="xp-eye">Ma fa\u00e7on de travailler</div>'
        + '<div class="mt-list">'
        + '<div class="mt-row"><span class="mt-num">01</span><div><div class="mt-title">UI/UX from scratch</div><div class="mt-desc">Refontes compl\u00e8tes et cr\u00e9ation</div></div></div>'
        + '<div class="mt-row"><span class="mt-num">02</span><div><div class="mt-title">Design system</div><div class="mt-desc">Composants, tokens, doc claire</div></div></div>'
        + '<div class="mt-row"><span class="mt-num">03</span><div><div class="mt-title">Audit UX</div><div class="mt-desc">Basse puis haute fid\u00e9lit\u00e9</div></div></div>'
        + '<div class="mt-row"><span class="mt-num">04</span><div><div class="mt-title">Prototypes Figma</div><div class="mt-desc">Pr\u00eats pour les devs, spec\u00e9s</div></div></div>'
        + '<div class="mt-row"><span class="mt-num">05</span><div><div class="mt-title">IA + vibe coding</div><div class="mt-desc">Claude Code + Figma, MVP sans dev</div></div></div>'
        + '</div></div>',
    })
    // designer games
    addFrame({
      x: 500,
      y: 1330,
      w: 380,
      onOpen: true,
      label: "<b>playground/</b> \uD83C\uDFA8",
      html: '<div class="pg-card"><div class="pg-head"><span class="pg-icon">\uD83C\uDFA8</span><div><h3 class="pg-title">Playground</h3><p class="pg-sub">Petits jeux d\u2019\u0153il de designer. Clique pour jouer.</p></div></div><div class="pg-grid"><button class="pg-btn" data-g="coloreye"><span class="pg-emoji">\uD83D\uDFE2</span><span class="pg-name">Color Eye</span><span class="pg-desc">Trouve la couleur diff\u00e9rente</span></button><button class="pg-btn" data-g="kerning"><span class="pg-emoji">A\u2009V</span><span class="pg-name">Kerning</span><span class="pg-desc">Corrige l\u2019espacement</span></button><button class="pg-btn" data-g="colormix"><span class="pg-emoji">\uD83C\uDFA8</span><span class="pg-name">Color Mix</span><span class="pg-desc">Reproduis la couleur cible</span></button></div></div>',
    })
    // Skillgrid (projet client RH)
    addFrame({
      proj: "skillgrid",
      x: 1180,
      y: -10,
      w: 520,
      h: 540,
      label: "<b>Skillgrid</b> · SaaS RH · gestion des talents",
      html:
        '<div class="pad"><div class="fbrand">DESIGN PRODUIT EN FREELANCE</div><h3 class="ftitle" style="font-size:1.5rem">Skillgrid, piloter les talents</h3><div class="pcover"><img src="' +
        SK_1 +
        '" alt="Skillgrid"></div><p class="fdesc">Le SaaS RH qui réunit organigramme, matrice de compétences et entretiens au même endroit.</p><div class="ftags"><span>Product Design</span><span>UI</span><span>Design System</span></div><button class="pmore" type="button">Voir le projet \u2192</button></div>',
    })
    // Horsenest (projet client équestre)
    addFrame({
      proj: "horsenest",
      x: 1160,
      y: 670,
      w: 520,
      h: 540,
      label: "<b>Horsenest</b> · SaaS · gestion équestre",
      html:
        '<div class="pad"><div class="fbrand">DESIGN PRODUIT EN FREELANCE</div><h3 class="ftitle" style="font-size:1.5rem">Horsenest, gérer son écurie</h3><div class="pcover"><img src="' +
        HR_P1 +
        '" alt="Horsenest"></div><p class="fdesc">Une plateforme de gestion \u00e9questre, du site vitrine \u00e0 l\'application.</p><div class="ftags"><span>Product Design</span><span>UI</span><span>Design System</span></div><button class="pmore" type="button">Voir le projet \u2192</button></div>',
    })
    // Custo (projet client e-commerce)
    addFrame({
      proj: "custo",
      x: 1190,
      y: 1350,
      w: 520,
      h: 540,
      label: "<b>Custo</b> · e-commerce · emballages personnalisés",
      html:
        '<div class="pad"><div class="fbrand">DESIGN PRODUIT EN FREELANCE</div><h3 class="ftitle" style="font-size:1.5rem">Custo, le packaging sur mesure</h3><div class="pcover"><img src="' +
        CU_1 +
        '" alt="Custo"></div><p class="fdesc">Une plateforme B2B pour personnaliser et commander son packaging.</p><div class="ftags"><span>Product Design</span><span>UI</span><span>E-commerce</span></div><button class="pmore" type="button">Voir le projet \u2192</button></div>',
    })
    // (desktop positions are the only positions – no mobile reflow)
    // pins
    addPin(
      380,
      -60,
      "Romane",
      "Super clean le flow discovery \u2192 Figma \uD83D\uDC4C"
    )
    addPin(2380, 300, "Lucas", "Nice refonte, approved \u2713")
    addPin(
      1080,
      200,
      "Cl\u00e9ment",
      "Design + vibe coding en solo, respect."
    )
    addPin(
      1080,
      600,
      "Romane",
      "Deux SaaS complets ship\u00e9s solo \uD83D\uDD25"
    )

    // game buttons
    world.addEventListener("click", function (e) {
      var ab = e.target.closest(".pg-btn")
      if (!ab) return
      e.stopPropagation()
      var g = ab.dataset.g
      if (g === "coloreye") openColorEye()
      else if (g === "kerning") openKerning()
      else if (g === "colormix") openColorMix()
    })

    // ===== VIEW (pan/zoom) =====
    var view = { S: 1, X: 0, Y: 0 }
    var vp = $("#viewport"),
      pct = $("#pct")
    function applyView() {
      world.style.transform =
        "translate(" + view.X + "px," + view.Y + "px) scale(" + view.S + ")"
      pct.textContent = Math.round(view.S * 100) + "%"
    }
    function worldBounds() {
      var minx = 1e9,
        miny = 1e9,
        maxx = -1e9,
        maxy = -1e9
      frames.forEach(function (f) {
        minx = Math.min(minx, f.x - 30)
        miny = Math.min(miny, f.y - 40)
        maxx = Math.max(maxx, f.x + f.w + 30)
        maxy = Math.max(maxy, f.y + f.h + 30)
      })
      return { x: minx, y: miny, w: maxx - minx, h: maxy - miny }
    }
    function fitRect(r, pad, opts) {
      opts = opts || {}
      var topInset = opts.top || 44
      var botInset = opts.bottom || 0
      var vw = innerWidth
      var vh = innerHeight - topInset - botInset
      var maxS = opts.maxScale || 2.4
      var s = clamp(Math.min(vw / r.w, vh / r.h) * (pad || 0.85), 0.18, maxS)
      var X = vw / 2 - (r.x + r.w / 2) * s
      var centerY = topInset + vh / 2
      var Y = centerY - (r.y + r.h / 2) * s
      animateView(s, X, Y)
    }
    function fitTo(f) {
      if (touring) {
        fitToTour(f)
      } else {
        fitRect({ x: f.x, y: f.y, w: f.w, h: f.h }, 0.78)
      }
    }
    function fitToTour(f) {
      var margin = 24
      var topBar = document.getElementById("bar")
      var tourBar = document.querySelector(".tour-bar")
      var topH = topBar ? topBar.getBoundingClientRect().height : 44
      var botH = tourBar ? tourBar.getBoundingClientRect().height + 24 : 90 // 24 = overlay padding
      var usableW = innerWidth - margin * 2
      var usableH = innerHeight - topH - botH - margin * 2
      var s = Math.min(usableW / f.w, usableH / f.h, 1)
      s = Math.max(s, 0.18)
      var X = innerWidth / 2 - (f.x + f.w / 2) * s
      var centerY = topH + margin + usableH / 2
      var Y = centerY - (f.y + f.h / 2) * s
      animateView(s, X, Y)
    }
    function fitAll() {
      var mob = innerWidth <= 768
      if (!mob) { fitRect(worldBounds(), 0.82); return }
      // mobile: explicit centering with real insets
      var r = worldBounds()
      var topInset = 54   // TopBar 44 + 10px margin
      var botInset = 90   // chatbot + safe area
      var sideMargin = 10
      var usableW = innerWidth - sideMargin * 2
      var usableH = innerHeight - topInset - botInset
      var s = Math.min(usableW / r.w, usableH / r.h) * 0.88
      s = clamp(s, 0.05, 2.4)
      var X = innerWidth / 2 - (r.x + r.w / 2) * s
      var centerY = topInset + usableH / 2
      var Y = centerY - (r.y + r.h / 2) * s
      animateView(s, X, Y)
    }

    var anim = null
    function animateView(s, X, Y) {
      var s0 = view.S,
        X0 = view.X,
        Y0 = view.Y,
        t0 = performance.now(),
        dur = 620
      if (anim) cancelAnimationFrame(anim)
      function step(t) {
        var k = Math.min(1, (t - t0) / dur)
        var e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2
        view.S = s0 + (s - s0) * e
        view.X = X0 + (X - X0) * e
        view.Y = Y0 + (Y - Y0) * e
        applyView()
        if (k < 1) anim = requestAnimationFrame(step)
      }
      anim = requestAnimationFrame(step)
    }

    // mobile: same layout as desktop, just fitAll on load
    var isMobile = innerWidth <= 768

    // pan (mouse)
    var panning = false,
      panMoved = false,
      lx,
      ly
    vp.addEventListener("mousedown", function (e) {
      if (e.button) return
      panning = true
      panMoved = false
      lx = e.clientX
      ly = e.clientY
      vp.classList.add("grabbing")
      if (anim) cancelAnimationFrame(anim)
    })
    window.addEventListener("mousemove", function (e) {
      if (!panning) return
      var dx = e.clientX - lx,
        dy = e.clientY - ly
      if (Math.abs(dx) + Math.abs(dy) > 4) panMoved = true
      view.X += dx
      view.Y += dy
      lx = e.clientX
      ly = e.clientY
      applyView()
    })
    window.addEventListener("mouseup", function () {
      panning = false
      vp.classList.remove("grabbing")
      setTimeout(function () { panMoved = false }, 30)
    })

    // touch: pan (1 finger) + pinch-to-zoom (2 fingers)
    var touchMoved = false, lastPinchDist = 0
    var touchStartX = 0, touchStartY = 0, touchStartTime = 0, touchFingers = 0
    var TAP_DIST = 10, TAP_TIME = 300
    function touchDist(t) {
      var dx = t[0].clientX - t[1].clientX
      var dy = t[0].clientY - t[1].clientY
      return Math.sqrt(dx * dx + dy * dy)
    }
    function touchMid(t) {
      return { x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 }
    }
    vp.addEventListener("touchstart", function (e) {
      // Don't prevent default on elements that need taps (buttons, links)
      var tag = e.target.tagName
      var isInteractive = tag === "BUTTON" || tag === "A" || e.target.closest(".pmore") || e.target.closest(".pg-btn")
      if (!isInteractive) e.preventDefault()
      if (anim) cancelAnimationFrame(anim)
      touchMoved = false
      touchFingers = e.touches.length
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
        touchStartTime = Date.now()
        lx = touchStartX
        ly = touchStartY
      } else if (e.touches.length === 2) {
        touchMoved = true // 2 fingers = not a tap
        lastPinchDist = touchDist(e.touches)
      }
    }, { passive: false })
    vp.addEventListener("touchmove", function (e) {
      e.preventDefault()
      var t = e.touches
      if (t.length === 1 && touchFingers === 1) {
        var cx = t[0].clientX, cy = t[0].clientY
        var totalDx = cx - touchStartX, totalDy = cy - touchStartY
        var totalDist = Math.abs(totalDx) + Math.abs(totalDy)
        // Only mark as moved (pan) if beyond tap threshold
        if (totalDist > TAP_DIST) {
          touchMoved = true
          var dx = cx - lx, dy = cy - ly
          view.X += dx
          view.Y += dy
          applyView()
        }
        lx = cx
        ly = cy
      } else if (t.length === 2) {
        touchMoved = true
        var d = touchDist(t)
        var mid = touchMid(t)
        if (lastPinchDist > 0) {
          var f = d / lastPinchDist
          var ns = clamp(view.S * f, 0.12, 2.6)
          view.X = mid.x - ((mid.x - view.X) / view.S) * ns
          view.Y = mid.y - ((mid.y - view.Y) / view.S) * ns
          view.S = ns
          applyView()
        }
        lastPinchDist = d
      }
    }, { passive: false })
    vp.addEventListener("touchend", function (e) {
      if (e.touches.length === 0) {
        var elapsed = Date.now() - touchStartTime
        var isTap = !touchMoved && touchFingers === 1 && elapsed < TAP_TIME
        if (isTap) {
          // Simulate a click at tap position for frame interaction
          var el = document.elementFromPoint(touchStartX, touchStartY)
          if (el) el.click()
        }
        lastPinchDist = 0
        touchFingers = 0
        setTimeout(function () { touchMoved = false }, 50)
      } else if (e.touches.length === 1) {
        // went from 2 fingers to 1: restart single-finger pan
        lx = e.touches[0].clientX
        ly = e.touches[0].clientY
        touchStartX = lx
        touchStartY = ly
        touchStartTime = Date.now()
        touchFingers = 1
        lastPinchDist = 0
      }
    }, { passive: false })

    // zoom wheel (desktop)
    vp.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault()
        var px = e.clientX,
          py = e.clientY
        var f = Math.exp(-e.deltaY * 0.0016)
        var ns = clamp(view.S * f, 0.18, 2.6)
        view.X = px - ((px - view.X) / view.S) * ns
        view.Y = py - ((py - view.Y) / view.S) * ns
        view.S = ns
        applyView()
      },
      { passive: false }
    )
    function zoomBtn(dir) {
      var px = innerWidth / 2,
        py = innerHeight / 2
      var ns = clamp(view.S * (dir > 0 ? 1.25 : 0.8), 0.18, 2.6)
      view.X = px - ((px - view.X) / view.S) * ns
      view.Y = py - ((py - view.Y) / view.S) * ns
      view.S = ns
      applyView()
    }
    $("#zin").addEventListener("click", function () {
      zoomBtn(1)
    })
    $("#zout").addEventListener("click", function () {
      zoomBtn(-1)
    })
    $("#fitBtn").addEventListener("click", fitAll)

    // guided tour
    var tourIdx = -1, touring = false
    var tourDef = [
      { key: "moi.txt", caption: "Bienvenue dans mon fichier" },
      { key: "apropos.me", caption: "Qui je suis" },
      { key: "Genogy", caption: "Mon SaaS, design\u00e9 et construit en solo" },
      { key: "Lexia", caption: "Mon produit que je fonde" },
      { key: "Skillgrid", caption: "Projet client, design produit" },
      { key: "Horsenest", caption: "Projet client, design produit" },
      { key: "Custo", caption: "Projet client, design produit" },
      { key: "Or\u00e9al", caption: "Grand compte, sous NDA" },
      { key: "Stellantis", caption: "Grand compte, sous NDA" },
      { key: "freelance.list", caption: "Ils m'ont fait confiance" },
      { key: "parcours.list", caption: "Mon parcours" },
      { key: "m\u00e9thode", caption: "Comment je travaille" },
      { key: "playground", caption: "Un peu de jeu" },
      { key: "apropos.me", caption: "Travaillons ensemble" },
    ]
    var tourStops = []
    function buildTourStops() {
      tourStops = []
      tourDef.forEach(function (d) {
        var f = frames.filter(function (x) {
          return x.el.querySelector(".flabel").textContent.indexOf(d.key) >= 0
        })[0]
        if (f) tourStops.push({ frame: f, caption: d.caption })
      })
    }
    var tourOverlay = document.getElementById("tourOverlay")
    var tourCaption = document.getElementById("tourCaption")
    var tourCounter = document.getElementById("tourCounter")
    var tourPrev = document.getElementById("tourPrev")
    var tourNext = document.getElementById("tourNext")
    var tourAutoBtn = document.getElementById("tourAuto")
    var tourProgress = document.getElementById("tourProgress")
    var tourQuit = document.getElementById("tourQuit")
    var hintbar = document.getElementById("hintbar")
    var tourVeil = document.getElementById("tourVeil")
    var tourAuto = false, tourTimer = null, TOUR_DELAY = 4500
    var activeFrame = null

    function showTourUI() {
      tourOverlay.style.display = "flex"
      hintbar.style.display = "none"
    }
    function hideTourUI() {
      tourOverlay.style.display = "none"
      hintbar.style.display = ""
      clearHighlight()
    }
    function highlightFrame(f) {
      clearHighlight()
      if (f && f.el) {
        f.el.classList.add("tour-active")
        activeFrame = f.el
      }
    }
    function clearHighlight() {
      if (activeFrame) { activeFrame.classList.remove("tour-active"); activeFrame = null }
    }
    function updateTourStep() {
      var stop = tourStops[tourIdx]
      fitTo(stop.frame)
      highlightFrame(stop.frame)
      tourCaption.textContent = stop.caption
      tourCounter.textContent = (tourIdx + 1) + " / " + tourStops.length
      tourPrev.style.visibility = tourIdx === 0 ? "hidden" : "visible"
      var isLast = tourIdx === tourStops.length - 1
      tourNext.textContent = isLast ? "Terminer" : "Suivant"
      // progress bar
      tourProgress.style.width = ((tourIdx + 1) / tourStops.length * 100) + "%"
      // auto mode progress fill animation
      if (tourAuto && !isLast) {
        tourProgress.style.transition = "none"
        tourProgress.style.width = (tourIdx / tourStops.length * 100) + "%"
        // force reflow
        tourProgress.offsetWidth
        tourProgress.style.transition = "width " + (TOUR_DELAY / 1000) + "s linear"
        tourProgress.style.width = ((tourIdx + 1) / tourStops.length * 100) + "%"
      } else {
        tourProgress.style.transition = "width .3s ease"
      }
      // auto advance
      clearTimeout(tourTimer)
      if (tourAuto && !isLast) {
        tourTimer = setTimeout(function () {
          if (tourIdx < tourStops.length - 1) { tourIdx++; updateTourStep() }
          else { stopAuto() }
        }, TOUR_DELAY)
      }
      if (isLast && tourAuto) stopAuto()
    }
    function startAuto() {
      tourAuto = true
      tourAutoBtn.innerHTML = '&#10074;&#10074;'
      tourAutoBtn.title = "Pause auto"
      tourAutoBtn.classList.add("active")
      updateTourStep()
    }
    function stopAuto() {
      tourAuto = false
      clearTimeout(tourTimer)
      tourAutoBtn.innerHTML = '&#9654;'
      tourAutoBtn.title = "Lecture auto"
      tourAutoBtn.classList.remove("active")
      tourProgress.style.transition = "width .3s ease"
    }
    function startTour() {
      buildTourStops()
      if (!tourStops.length) return
      touring = true
      tourIdx = 0
      showTourUI()
      startAuto()
    }
    function endTour() {
      touring = false
      tourIdx = -1
      stopAuto()
      hideTourUI()
      fitAll()
    }
    tourPrev.addEventListener("click", function () {
      if (tourIdx > 0) { stopAuto(); tourIdx--; updateTourStep() }
    })
    tourNext.addEventListener("click", function () {
      if (tourIdx < tourStops.length - 1) { stopAuto(); tourIdx++; updateTourStep() }
      else { endTour() }
    })
    tourAutoBtn.addEventListener("click", function () {
      if (tourAuto) stopAuto()
      else startAuto()
    })
    tourQuit.addEventListener("click", function () { endTour() })
    $("#tourBtn").addEventListener("click", function () {
      if (touring) { endTour() } else { startTour() }
    })
    window.addEventListener("keydown", function (e) {
      if (!touring) return
      if (e.key === "Escape") { endTour(); e.stopPropagation() }
      if (e.key === "ArrowRight") { tourNext.click() }
      if (e.key === "ArrowLeft") { tourPrev.click() }
      if (e.key === " ") { tourAutoBtn.click(); e.preventDefault() }
    })

    // keyboard
    window.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT") return
      if (e.key === "0" || e.key === "f" || e.key === "F") {
        fitAll()
      } else if (e.key === "+" || e.key === "=") {
        zoomBtn(1)
      } else if (e.key === "-") {
        zoomBtn(-1)
      }
    })

    // ===== MULTIPLAYER CURSORS =====
    var curLayer = $("#cursors")
    var arrow =
      '<svg viewBox="0 0 24 24"><path d="M5 3l14 7-6 2-2 6z" fill="currentColor"/></svg>'
    var sayings = {
      Romane: ["nickel", "revoir flow", "v2 is better", "check spacing"],
      Clément: ["create component", "on ship ?", "clean", "approved ✓"],
      Lucas: ["update variants", "padding 👀", "let's go", "merge ok"],
    }
    var collabs = [
      { name: "Romane", col: "#7C8FB8" },
      { name: "Clément", col: "#7FA89B" },
      { name: "Lucas", col: "#C2A06B" },
    ]
    var B = worldBounds()
    collabs.forEach(function (c) {
      var el = document.createElement("div")
      el.className = "cursor"
      el.style.color = c.col
      el.style.setProperty("--cur-col", c.col)
      el.innerHTML =
        arrow + '<span class="flag">' + c.name + '</span><span class="say"></span>'
      curLayer.appendChild(el)
      c.el = el
      c.say = el.querySelector(".say")
      c.wx = B.x + Math.random() * B.w
      c.wy = B.y + Math.random() * B.h
      c.tx = c.wx
      c.ty = c.wy
      c.wait = Math.random() * 120
      // avatar in bar
      var av = document.createElement("div")
      av.className = "av"
      av.style.background = c.col
      av.textContent = c.name[0]
      $("#avatars").appendChild(av)
    })
    function newTarget(c) {
      if (Math.random() < 0.6 && frames.length) {
        var f = frames[Math.floor(Math.random() * frames.length)]
        c.tx = f.x + f.w * (0.2 + Math.random() * 0.6)
        c.ty = f.y + f.h * (0.2 + Math.random() * 0.6)
        c.near = f
      } else {
        c.tx = B.x + Math.random() * B.w
        c.ty = B.y + Math.random() * B.h
        c.near = null
      }
    }
    var talkCd = {}
    function loopCursors() {
      collabs.forEach(function (c) {
        var dx = c.tx - c.wx,
          dy = c.ty - c.wy,
          d = Math.hypot(dx, dy)
        if (d < 6) {
          if (c.wait > 0) {
            c.wait--
          } else {
            if (c.near && Math.random() < 0.5) {
              var arr = sayings[c.name] || ["\u2726"]
              c.say.textContent =
                arr[Math.floor(Math.random() * arr.length)]
              c.el.classList.add("talk")
              clearTimeout(talkCd[c.name])
              talkCd[c.name] = setTimeout(function () {
                c.el.classList.remove("talk")
              }, 1800)
            }
            newTarget(c)
            c.wait = 40 + Math.random() * 120
          }
        } else {
          c.wx += dx * 0.035
          c.wy += dy * 0.035
        }
        var sx = c.wx * view.S + view.X,
          sy = c.wy * view.S + view.Y
        c.el.style.transform = "translate(" + sx + "px," + sy + "px)"
        c.el.style.opacity =
          sx < -40 || sy < -40 || sx > innerWidth + 40 || sy > innerHeight + 40
            ? "0"
            : "1"
      })
      requestAnimationFrame(loopCursors)
    }
    collabs.forEach(newTarget)
    requestAnimationFrame(loopCursors)

    // avatar 3D tilt
    var av3dCard = document.querySelector(".av3d-card")
    if (av3dCard && !reduce)
      document.addEventListener(
        "pointermove",
        function (e) {
          var r = av3dCard.getBoundingClientRect()
          if (!r.width) return
          var dx = Math.max(
            -1,
            Math.min(1, (e.clientX - (r.left + r.width / 2)) / r.width)
          )
          var dy = Math.max(
            -1,
            Math.min(1, (e.clientY - (r.top + r.height / 2)) / r.height)
          )
          av3dCard.style.transform =
            "rotateY(" +
            (dx * 16).toFixed(1) +
            "deg) rotateX(" +
            (-dy * 16).toFixed(1) +
            "deg)"
        },
        { passive: true }
      )

    // ===== PALETTES =====
    var root = document.documentElement
    var PAL = {
      mono: {
        name: "Mono",
        dark: true,
        vars: {
          bg: "#15130E",
          bg2: "#0F0D09",
          surface: "#1E1B15",
          elev: "#262219",
          text: "#ECE7DC",
          muted: "#9A938A",
          faint: "#6E685E",
          hair: "rgba(236,231,220,.13)",
          sel: "#7C8FB8",
          cardred: "#C2776B",
        },
        accents: ["#9A938A", "#9A938A", "#9A938A", "#9A938A", "#9A938A"],
        cursors: ["#7C8FB8", "#7FA89B", "#C2A06B"],
      },
      figma: {
        name: "Figma",
        dark: false,
        vars: {
          bg: "#F1F0EE",
          bg2: "#E6E4E1",
          surface: "#FBFBFA",
          elev: "#FFFFFF",
          text: "#1E1E1E",
          muted: "#8A8A8A",
          faint: "#B4B4B4",
          hair: "rgba(0,0,0,.12)",
          sel: "#0D99FF",
          cardred: "#E5484D",
        },
        accents: ["#1ABCFE", "#F24E1E", "#0ACF83", "#FF7262", "#A259FF"],
        cursors: ["#A259FF", "#0ACF83", "#FF7262"],
      },
      pastel: {
        name: "Pastel",
        dark: false,
        vars: {
          bg: "#F6F2EC",
          bg2: "#EBE5DC",
          surface: "#FCFAF6",
          elev: "#FFFFFF",
          text: "#2C2722",
          muted: "#9C9086",
          faint: "#C2B6AA",
          hair: "rgba(44,39,34,.12)",
          sel: "#6C8AE4",
          cardred: "#D98A7B",
        },
        accents: ["#B7A7E0", "#7FCBB4", "#F3A98B", "#8FBEE8", "#E9C25F"],
        cursors: ["#B7A7E0", "#7FCBB4", "#F3A98B"],
      },
      neon: {
        name: "Neon",
        dark: true,
        vars: {
          bg: "#0C0D12",
          bg2: "#15171F",
          surface: "#191C25",
          elev: "#1F232E",
          text: "#ECEFF6",
          muted: "#828CA4",
          faint: "#586079",
          hair: "rgba(255,255,255,.10)",
          sel: "#3B82F6",
          cardred: "#FF5C7A",
        },
        accents: ["#00E5FF", "#FF4D9D", "#B6FF3C", "#8B7CFF", "#FFB020"],
        cursors: ["#00E5FF", "#FF4D9D", "#B6FF3C"],
      },
      sunset: {
        name: "Sunset",
        dark: false,
        vars: {
          bg: "#FBEDE3",
          bg2: "#F1DFD0",
          surface: "#FFF8F1",
          elev: "#FFFFFF",
          text: "#2B1B16",
          muted: "#A07A6A",
          faint: "#C9A998",
          hair: "rgba(43,27,22,.13)",
          sel: "#3D7DD8",
          cardred: "#E2574C",
        },
        accents: ["#FF5C5C", "#FF9F1C", "#E84393", "#6C5CE7", "#00B894"],
        cursors: ["#E84393", "#FF9F1C", "#6C5CE7"],
      },
    }
    function applyPalette(key) {
      var p = PAL[key]
      if (!p) return
      for (var k in p.vars) root.style.setProperty("--" + k, p.vars[k])
      root.style.setProperty(
        "--hair2",
        p.dark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)"
      )
      root.style.setProperty(
        "--dot",
        p.dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.06)"
      )
      root.style.setProperty(
        "--shadow",
        p.dark ? "rgba(0,0,0,.6)" : "rgba(60,50,40,.18)"
      )
      root.style.setProperty("--note", p.dark ? "#2A2619" : "#F2E9C9")
      root.style.setProperty("--live", p.dark ? "#8FA886" : "#5E7556")
      frames.forEach(function (f, i) {
        f.el.style.setProperty("--acc", p.accents[i % p.accents.length])
      })
      document.querySelectorAll(".pin").forEach(function (pn, i) {
        pn.style.setProperty("--acc", p.accents[(i + 1) % p.accents.length])
      })
      var avs = document.querySelectorAll("#avatars .av:not(.owner)")
      collabs.forEach(function (c, i) {
        c.col = p.cursors[i % p.cursors.length]
        c.el.style.color = c.col
        c.el.style.setProperty("--cur-col", c.col)
        if (avs[i]) avs[i].style.background = c.col
      })
      document.querySelectorAll(".pal").forEach(function (b) {
        b.classList.toggle("active", b.dataset.k === key)
      })
      try {
        localStorage.setItem("mc-pal", key)
      } catch (e) {}
    }
    applyPalette("figma")

    // Force Figma palette, no switcher
    applyPalette("figma")

    // ===== WINDOW MANAGER + GAMES =====
    var zTop = 100
    function draggable(el, handle, ignoreSel) {
      var sx, sy, ox, oy, active = false
      handle.addEventListener("pointerdown", function (e) {
        if (e.button) return
        if (ignoreSel && e.target.closest(ignoreSel)) return
        active = true
        sx = e.clientX
        sy = e.clientY
        var r = el.getBoundingClientRect()
        ox = r.left
        oy = r.top
        el.style.left = ox + "px"
        el.style.top = oy + "px"
        try {
          handle.setPointerCapture(e.pointerId)
        } catch (_) {}
      })
      handle.addEventListener("pointermove", function (e) {
        if (!active) return
        el.style.left = ox + e.clientX - sx + "px"
        el.style.top = oy + e.clientY - sy + "px"
      })
      handle.addEventListener("pointerup", function () {
        active = false
      })
    }
    var openGameWins = {}
    function openWindow(opts) {
      if (opts.title && openGameWins[opts.title]) {
        openGameWins[opts.title].style.zIndex = ++zTop
        return openGameWins[opts.title]
      }
      var win = document.createElement("div")
      win.className = "window"
      win.innerHTML =
        '<div class="wbar"><span class="wdot c"></span><span class="wdot"></span><span class="wdot"></span><span class="wtitle">' +
        opts.title +
        '</span></div><div class="wbody"></div>'
      var body = win.querySelector(".wbody")
      document.body.appendChild(win)
      var cleanup = opts.build ? opts.build(body) : null
      var w = win.offsetWidth,
        h = win.offsetHeight
      win.style.left =
        Math.max(10, innerWidth / 2 - w / 2 + (Math.random() * 60 - 30)) + "px"
      win.style.top = Math.max(54, innerHeight / 2 - h / 2) + "px"
      win.style.zIndex = ++zTop
      win.addEventListener("pointerdown", function () {
        win.style.zIndex = ++zTop
      })
      draggable(win, win.querySelector(".wbar"), ".wdot.c")
      if (opts.title) openGameWins[opts.title] = win
      function close() {
        if (opts.title) delete openGameWins[opts.title]
        if (cleanup)
          try {
            cleanup()
          } catch (e) {}
        win.remove()
      }
      win.querySelector(".wdot.c").addEventListener("click", close)
      return win
    }

    /* ===== COLOR EYE ===== */
    function gameColorEye(b) {
      var level = 0, score = 0, best = 0, live = true
      var wrap = document.createElement("div")
      wrap.style.cssText = "padding:18px;width:320px;font-family:'JetBrains Mono',monospace"
      wrap.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--muted);margin-bottom:14px">'
        + '<span>Trouve la couleur diff\u00e9rente</span>'
        + '<div style="display:flex;gap:12px;align-items:center"><span class="ce-lvl" style="font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:var(--faint)">Niv. 1</span><span style="font-size:13px;font-weight:700;color:var(--text)" class="ce-score">0</span></div>'
        + '</div>'
        + '<div class="ce-grid" style="display:grid;gap:6px;border-radius:10px;padding:6px;background:var(--surface);border:1px solid var(--hair)"></div>'
        + '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;min-height:20px">'
        + '<span class="ce-msg" style="font-size:11px;color:var(--muted)"></span>'
        + '<span class="ce-best" style="font-size:9px;color:var(--faint)">record : 0</span>'
        + '</div>'
      b.appendChild(wrap)
      var grid = wrap.querySelector(".ce-grid")
      var scoreEl = wrap.querySelector(".ce-score")
      var msgEl = wrap.querySelector(".ce-msg")
      var lvlEl = wrap.querySelector(".ce-lvl")
      var bestEl = wrap.querySelector(".ce-best")

      function hslStr(h, s, l) { return "hsl(" + h + "," + s + "%," + l + "%)" }

      function round() {
        if (!live) return
        lvlEl.textContent = "Niv. " + (level + 1)
        var cols = level < 3 ? 3 : level < 8 ? 4 : level < 14 ? 5 : 6
        grid.style.gridTemplateColumns = "repeat(" + cols + ",1fr)"
        var count = cols * cols
        var bh = Math.floor(Math.random() * 360)
        var bs = 45 + Math.floor(Math.random() * 30)
        var bl = 40 + Math.floor(Math.random() * 25)
        var diff = Math.max(2, 30 - level * 2.2)
        var oddIdx = Math.floor(Math.random() * count)
        var oddL = bl + (Math.random() < 0.5 ? diff : -diff)

        grid.innerHTML = ""
        for (var i = 0; i < count; i++) {
          var cell = document.createElement("div")
          var isOdd = i === oddIdx
          cell.style.cssText = "aspect-ratio:1;border-radius:7px;cursor:pointer;transition:transform .15s,opacity .15s,box-shadow .15s;background:" + hslStr(bh, bs, isOdd ? oddL : bl)
          cell.dataset.odd = isOdd ? "1" : "0"
          cell.onmouseenter = function () { this.style.transform = "scale(1.05)" }
          cell.onmouseleave = function () { this.style.transform = "" }
          cell.addEventListener("click", function () {
            if (!live) return
            if (this.dataset.odd === "1") {
              score++; level++
              if (score > best) { best = score; bestEl.textContent = "record : " + best }
              scoreEl.textContent = score
              scoreEl.style.transform = "scale(1.3)"
              setTimeout(function () { scoreEl.style.transform = "" }, 200)
              msgEl.textContent = level < 4 ? "Bien vu !" : level < 8 ? "Bon \u0153il \uD83D\uDC40" : level < 14 ? "\u0152il de designer \u2726" : "Surhumain \uD83D\uDD25"
              msgEl.style.color = "var(--live)"
              this.style.transform = "scale(1.15)"
              this.style.boxShadow = "0 0 0 3px var(--text)"
              var self = this
              setTimeout(function () { self.style.transform = ""; self.style.boxShadow = ""; round() }, 350)
            } else {
              this.style.opacity = "0.25"
              msgEl.style.color = "var(--muted)"
              msgEl.textContent = "Rat\u00e9 ! Niveau remis \u00e0 z\u00e9ro"
              var cells = grid.children
              for (var j = 0; j < cells.length; j++) {
                if (cells[j].dataset.odd === "1") {
                  cells[j].style.boxShadow = "0 0 0 3px var(--text)"
                  cells[j].style.transform = "scale(1.15)"
                }
              }
              level = 0
              setTimeout(round, 900)
            }
          })
          grid.appendChild(cell)
        }
        msgEl.textContent = ""
        msgEl.style.color = "var(--muted)"
      }
      round()
      return function () { live = false }
    }
    function openColorEye() {
      openWindow({ title: "color eye", build: gameColorEye })
    }

    /* ===== KERNING ===== */
    function gameKerning(b) {
      var WORDS = [
        { w: "AVENIR", bad: 2, off: 12 },
        { w: "TOKYO", bad: 2, off: -10 },
        { w: "VOYAGE", bad: 3, off: 11 },
        { w: "WALTER", bad: 1, off: -13 },
        { w: "TYPOG", bad: 3, off: 10 },
        { w: "LAYOUT", bad: 2, off: -11 },
        { w: "FIGMA", bad: 1, off: 14 },
        { w: "PIXEL", bad: 2, off: -12 },
        { w: "CLAMP", bad: 3, off: 11 },
        { w: "BRAND", bad: 2, off: -10 },
      ]
      var score = 0, rd = 0, live = true, current, dragLetter, dragStartX, letterOffset

      var wrap = document.createElement("div")
      wrap.style.cssText = "padding:18px;width:340px;font-family:'JetBrains Mono',monospace"
      wrap.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--muted);margin-bottom:4px">'
        + '<span>Corrige le kerning</span>'
        + '<div style="display:flex;gap:12px;align-items:center"><span class="kn-rd" style="font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:var(--faint)">1/10</span><span style="font-size:13px;font-weight:700;color:var(--text)" class="kn-score">0</span></div>'
        + '</div>'
        + '<div style="font-size:10px;color:var(--faint);margin-bottom:14px">Glisse la lettre violette pour \u00e9galiser l\u2019espacement</div>'
        + '<div class="kn-word" style="display:flex;justify-content:center;align-items:center;height:90px;border:1px solid var(--hair);border-radius:12px;background:var(--surface);margin-bottom:10px;position:relative;overflow:hidden"></div>'
        + '<div class="kn-gauge" style="height:4px;border-radius:3px;background:color-mix(in srgb,var(--text) 10%,transparent);margin-bottom:12px;overflow:hidden"><div class="kn-fill" style="height:100%;width:0;border-radius:3px;background:var(--live);transition:width .3s"></div></div>'
        + '<div style="display:flex;gap:8px;justify-content:center"><button class="kn-ship" style="font-size:12px;border:1px solid var(--hair);border-radius:8px;padding:9px 20px;cursor:pointer;background:var(--text);color:var(--bg);font-weight:600;transition:.15s;border-color:var(--text)">Ship it \u2192</button></div>'
        + '<div class="kn-msg" style="text-align:center;font-size:11px;margin-top:10px;min-height:16px;color:var(--muted)"></div>'
      b.appendChild(wrap)

      var wordEl = wrap.querySelector(".kn-word")
      var scoreEl = wrap.querySelector(".kn-score")
      var msgEl = wrap.querySelector(".kn-msg")
      var shipBtn = wrap.querySelector(".kn-ship")
      var rdEl = wrap.querySelector(".kn-rd")
      var fillEl = wrap.querySelector(".kn-fill")

      function newRound() {
        if (!live) return
        current = WORDS[rd % WORDS.length]
        letterOffset = current.off
        rdEl.textContent = (rd % WORDS.length + 1) + "/" + WORDS.length
        renderWord()
        msgEl.textContent = ""
      }

      function renderWord() {
        wordEl.innerHTML = ""
        for (var i = 0; i < current.w.length; i++) {
          var span = document.createElement("span")
          span.textContent = current.w[i]
          span.style.cssText = "font-family:'Fraunces',serif;font-weight:700;font-size:2.6rem;line-height:1;user-select:none;transition:color .15s,transform .1s"
          if (i === current.bad) {
            span.style.color = "#A259FF"
            span.style.cursor = "grab"
            span.style.marginLeft = letterOffset + "px"
            span.style.position = "relative"
            span.style.textShadow = "0 2px 8px rgba(162,89,255,.25)"
            span.dataset.drag = "1"
          }
          wordEl.appendChild(span)
        }
      }

      wordEl.addEventListener("pointerdown", function (e) {
        var t = e.target
        if (t.dataset.drag !== "1") return
        dragLetter = t
        dragStartX = e.clientX
        t.style.cursor = "grabbing"
        t.style.transform = "scale(1.08)"
        try { t.setPointerCapture(e.pointerId) } catch (_) {}
      })
      wordEl.addEventListener("pointermove", function (e) {
        if (!dragLetter) return
        var dx = e.clientX - dragStartX
        letterOffset = current.off + dx
        letterOffset = Math.max(-30, Math.min(30, letterOffset))
        dragLetter.style.marginLeft = letterOffset + "px"
      })
      wordEl.addEventListener("pointerup", function () {
        if (dragLetter) { dragLetter.style.cursor = "grab"; dragLetter.style.transform = "" }
        dragLetter = null
      })

      shipBtn.addEventListener("click", function () {
        if (!live) return
        var err = Math.abs(letterOffset)
        var pts = 0
        if (err <= 2) {
          pts = 3
          msgEl.innerHTML = '<span style="color:var(--live)">Pixel perfect ! +3</span>'
        } else if (err <= 5) {
          pts = 2
          msgEl.innerHTML = '<span style="color:var(--live)">Bien vu ! +2</span>'
        } else if (err <= 10) {
          pts = 1
          msgEl.textContent = "Pas mal. +1"
        } else {
          msgEl.textContent = "\u00c0 " + Math.round(err) + "px pr\u00e8s\u2026"
        }
        score += pts
        scoreEl.textContent = score
        scoreEl.style.transform = "scale(1.3)"
        setTimeout(function () { scoreEl.style.transform = "" }, 200)
        rd++
        fillEl.style.width = ((rd % WORDS.length) / WORDS.length * 100) + "%"
        setTimeout(newRound, 700)
      })

      newRound()
      return function () { live = false }
    }
    function openKerning() {
      openWindow({ title: "kerning", build: gameKerning })
    }

    /* ===== COLOR MIX ===== */
    function gameColorMix(b) {
      var score = 0, rd = 0, live = true, targetH, targetS, targetL
      var wrap = document.createElement("div")
      wrap.style.cssText = "padding:18px;width:340px;font-family:'JetBrains Mono',monospace"
      wrap.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--muted);margin-bottom:14px">'
        + '<span>Reproduis la couleur cible</span>'
        + '<span style="font-size:13px;font-weight:700;color:var(--text)" class="cm-score">0</span>'
        + '</div>'
        + '<div style="display:flex;gap:8px;margin-bottom:14px">'
        + '<div class="cm-target" style="flex:1;height:80px;border-radius:10px;border:1px solid var(--hair);position:relative;overflow:hidden"><span style="position:absolute;bottom:6px;left:8px;font-size:9px;color:rgba(255,255,255,.7);text-shadow:0 1px 3px rgba(0,0,0,.4)">cible</span></div>'
        + '<div class="cm-yours" style="flex:1;height:80px;border-radius:10px;border:1px solid var(--hair);position:relative;overflow:hidden"><span style="position:absolute;bottom:6px;left:8px;font-size:9px;color:rgba(255,255,255,.7);text-shadow:0 1px 3px rgba(0,0,0,.4)">toi</span></div>'
        + '</div>'
        + '<div class="cm-sliders" style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">'
        + '<label style="display:flex;align-items:center;gap:8px;font-size:10px;color:var(--muted)"><span style="width:10px">H</span><input type="range" class="cm-h" min="0" max="360" value="180" style="flex:1;accent-color:#A259FF;height:4px"><span class="cm-hv" style="width:28px;text-align:right;font-size:10px;color:var(--faint)">180</span></label>'
        + '<label style="display:flex;align-items:center;gap:8px;font-size:10px;color:var(--muted)"><span style="width:10px">S</span><input type="range" class="cm-s" min="0" max="100" value="50" style="flex:1;accent-color:#A259FF;height:4px"><span class="cm-sv" style="width:28px;text-align:right;font-size:10px;color:var(--faint)">50</span></label>'
        + '<label style="display:flex;align-items:center;gap:8px;font-size:10px;color:var(--muted)"><span style="width:10px">L</span><input type="range" class="cm-l" min="0" max="100" value="50" style="flex:1;accent-color:#A259FF;height:4px"><span class="cm-lv" style="width:28px;text-align:right;font-size:10px;color:var(--faint)">50</span></label>'
        + '</div>'
        + '<div style="display:flex;gap:8px;align-items:center"><button class="cm-ship" style="flex:1;font-size:12px;font-family:inherit;border:none;border-radius:8px;padding:9px 16px;cursor:pointer;background:var(--text);color:var(--bg);font-weight:600;transition:.15s">Valider</button><span class="cm-acc" style="font-size:11px;color:var(--faint);min-width:50px;text-align:right"></span></div>'
        + '<div class="cm-msg" style="text-align:center;font-size:11px;margin-top:10px;min-height:16px;color:var(--muted)"></div>'
      b.appendChild(wrap)

      var targetEl = wrap.querySelector(".cm-target")
      var yoursEl = wrap.querySelector(".cm-yours")
      var hSlider = wrap.querySelector(".cm-h")
      var sSlider = wrap.querySelector(".cm-s")
      var lSlider = wrap.querySelector(".cm-l")
      var hVal = wrap.querySelector(".cm-hv")
      var sVal = wrap.querySelector(".cm-sv")
      var lVal = wrap.querySelector(".cm-lv")
      var scoreEl = wrap.querySelector(".cm-score")
      var msgEl = wrap.querySelector(".cm-msg")
      var accEl = wrap.querySelector(".cm-acc")
      var shipBtn = wrap.querySelector(".cm-ship")

      function hsl(h, s, l) { return "hsl(" + h + "," + s + "%," + l + "%)" }

      function updateYours() {
        var h = +hSlider.value, s = +sSlider.value, l = +lSlider.value
        yoursEl.style.background = hsl(h, s, l)
        hVal.textContent = h
        sVal.textContent = s
        lVal.textContent = l
        // live accuracy
        var dh = Math.min(Math.abs(h - targetH), 360 - Math.abs(h - targetH))
        var ds = Math.abs(s - targetS)
        var dl = Math.abs(l - targetL)
        var dist = Math.sqrt(dh * dh / 4 + ds * ds + dl * dl)
        var pct = Math.max(0, Math.round(100 - dist))
        accEl.textContent = pct + "% match"
        accEl.style.color = pct >= 90 ? "var(--live)" : "var(--faint)"
      }

      function newRound() {
        if (!live) return
        targetH = Math.floor(Math.random() * 360)
        targetS = 30 + Math.floor(Math.random() * 55)
        targetL = 30 + Math.floor(Math.random() * 40)
        targetEl.style.background = hsl(targetH, targetS, targetL)
        // randomize sliders
        hSlider.value = Math.floor(Math.random() * 360)
        sSlider.value = Math.floor(Math.random() * 100)
        lSlider.value = Math.floor(Math.random() * 100)
        updateYours()
        msgEl.textContent = ""
      }

      hSlider.addEventListener("input", updateYours)
      sSlider.addEventListener("input", updateYours)
      lSlider.addEventListener("input", updateYours)

      shipBtn.addEventListener("click", function () {
        if (!live) return
        var h = +hSlider.value, s = +sSlider.value, l = +lSlider.value
        var dh = Math.min(Math.abs(h - targetH), 360 - Math.abs(h - targetH))
        var ds = Math.abs(s - targetS)
        var dl = Math.abs(l - targetL)
        var dist = Math.sqrt(dh * dh / 4 + ds * ds + dl * dl)
        var pct = Math.max(0, Math.round(100 - dist))
        var pts = 0
        if (pct >= 97) {
          pts = 3; msgEl.innerHTML = '<span style="color:var(--live)">Parfait ! +3 \u2728</span>'
        } else if (pct >= 90) {
          pts = 2; msgEl.innerHTML = '<span style="color:var(--live)">Tr\u00e8s proche ! +2</span>'
        } else if (pct >= 75) {
          pts = 1; msgEl.textContent = "Pas mal ! +1"
        } else {
          msgEl.textContent = pct + "% \u2014 encore un effort !"
        }
        score += pts
        scoreEl.textContent = score
        scoreEl.style.transform = "scale(1.3)"
        setTimeout(function () { scoreEl.style.transform = "" }, 200)
        // briefly show the target values
        if (pts < 3) {
          accEl.textContent = "H:" + targetH + " S:" + targetS + " L:" + targetL
          accEl.style.color = "var(--muted)"
        }
        rd++
        setTimeout(newRound, 900)
      })

      newRound()
      return function () { live = false }
    }
    function openColorMix() {
      openWindow({ title: "color mix", build: gameColorMix })
    }

    // ===== INIT =====
    // photo perso dans le header
    var meavEl = document.getElementById("meav")
    if (meavEl) meavEl.src = AV

    // ===== AVATAR 3D (three.js) =====
    function makeAvatar(container) {
      var size = container.clientWidth || 64
      function fallback() {
        container.innerHTML = '<span class="botmono">HM</span>'
      }
      if (!window.THREE) {
        fallback()
        return
      }
      var renderer
      try {
        renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true })
      } catch (e) {
        fallback()
        return
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(size, size, false)
      container.appendChild(renderer.domElement)
      var scene = new window.THREE.Scene()
      var camera = new window.THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0, -0.3, 6.3)
      camera.lookAt(0, -0.3, 0)
      scene.add(new window.THREE.AmbientLight(0xffffff, 0.7))
      var keyLight = new window.THREE.DirectionalLight(0xffffff, 1.05)
      keyLight.position.set(2.5, 3, 4)
      scene.add(keyLight)
      var rim = new window.THREE.DirectionalLight(0xbcd4ff, 0.6)
      rim.position.set(-3, 1.5, -2.5)
      scene.add(rim)
      var fill = new window.THREE.DirectionalLight(0xffffff, 0.3)
      fill.position.set(-2, -1.5, 3)
      scene.add(fill)
      var grp = new window.THREE.Group()
      scene.add(grp)
      var skin = new window.THREE.MeshStandardMaterial({
        color: 0xf2c9a2,
        roughness: 0.92,
      })
      var hairM = new window.THREE.MeshStandardMaterial({
        color: 0xe8c36a,
        roughness: 0.62,
      })
      var black = new window.THREE.MeshStandardMaterial({
        color: 0x242428,
        roughness: 0.55,
      })
      var frameM = new window.THREE.MeshStandardMaterial({
        color: 0x2a2320,
        roughness: 0.35,
        metalness: 0.25,
      })
      var eyeM = new window.THREE.MeshStandardMaterial({
        color: 0x281f1a,
        roughness: 0.25,
      })
      var lensM = new window.THREE.MeshStandardMaterial({
        color: 0xcde6f7,
        roughness: 0.08,
        metalness: 0.1,
        transparent: true,
        opacity: 0.22,
      })
      var lipM = new window.THREE.MeshStandardMaterial({
        color: 0xc07c6a,
        roughness: 0.6,
      })
      var whiteM = new window.THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
      })
      function add(geo, mat, x, y, z, sx, sy, sz) {
        var m = new window.THREE.Mesh(geo, mat)
        m.position.set(x, y, z)
        if (sx !== undefined) m.scale.set(sx, sy, sz)
        grp.add(m)
        return m
      }
      add(
        new window.THREE.SphereGeometry(1, 48, 48),
        skin,
        0,
        0,
        0,
        0.96,
        1.14,
        0.92
      )
      ;[-1, 1].forEach(function (s) {
        add(new window.THREE.SphereGeometry(0.15, 20, 20), skin, s * 0.93, -0.05, 0.02)
      })
      add(
        new window.THREE.CylinderGeometry(0.4, 0.46, 0.55, 28),
        skin,
        0,
        -1.05,
        0
      )
      add(
        new window.THREE.SphereGeometry(
          1.25,
          40,
          40,
          0,
          Math.PI * 2,
          0,
          Math.PI * 0.55
        ),
        black,
        0,
        -1.55,
        0,
        1.15,
        0.85,
        0.95
      )
      var collar = add(
        new window.THREE.TorusGeometry(0.46, 0.14, 16, 32),
        black,
        0,
        -1.18,
        0
      )
      collar.rotation.x = Math.PI / 2
      add(
        new window.THREE.SphereGeometry(
          1.07,
          48,
          48,
          0,
          Math.PI * 2,
          0,
          Math.PI * 0.6
        ),
        hairM,
        0,
        0.05,
        0,
        1.0,
        1.12,
        1.0
      )
      ;[-1, 1].forEach(function (s) {
        add(
          new window.THREE.SphereGeometry(0.45, 24, 24),
          hairM,
          s * 0.8,
          0.0,
          0.18,
          0.55,
          1.25,
          0.65
        )
      })
      add(
        new window.THREE.SphereGeometry(0.7, 28, 28),
        hairM,
        0,
        0.05,
        -0.55,
        1.05,
        1.15,
        0.85
      )
      ;[-0.34, 0.34].forEach(function (x) {
        add(new window.THREE.SphereGeometry(0.1, 18, 18), eyeM, x, 0.04, 0.86)
        add(
          new window.THREE.SphereGeometry(0.03, 10, 10),
          whiteM,
          x + 0.03,
          0.08,
          0.93
        )
      })
      ;[-0.34, 0.34].forEach(function (x) {
        var b = add(
          new window.THREE.BoxGeometry(0.26, 0.05, 0.07),
          hairM,
          x,
          0.27,
          0.9
        )
        b.rotation.z = (x < 0 ? 1 : -1) * 0.05
      })
      ;[-0.34, 0.34].forEach(function (x) {
        add(new window.THREE.TorusGeometry(0.23, 0.035, 14, 36), frameM, x, 0.04, 0.9)
        add(new window.THREE.CircleGeometry(0.21, 28), lensM, x, 0.04, 0.9)
      })
      add(new window.THREE.BoxGeometry(0.16, 0.035, 0.04), frameM, 0, 0.06, 0.92)
      ;[-1, 1].forEach(function (s) {
        var arm = add(
          new window.THREE.BoxGeometry(0.55, 0.03, 0.03),
          frameM,
          s * 0.6,
          0.06,
          0.5
        )
        arm.rotation.y = s * 0.6
      })
      add(
        new window.THREE.SphereGeometry(0.1, 16, 16),
        skin,
        0,
        -0.15,
        0.95,
        0.8,
        1,
        0.85
      )
      var mouth = add(
        new window.THREE.TorusGeometry(0.16, 0.028, 10, 22, Math.PI),
        lipM,
        0,
        -0.4,
        0.84
      )
      mouth.rotation.x = Math.PI
      var tRY = 0,
        tRX = 0
      window.addEventListener(
        "pointermove",
        function (e) {
          var r = container.getBoundingClientRect()
          var dx =
            (e.clientX - (r.left + r.width / 2)) / window.innerWidth
          var dy =
            (e.clientY - (r.top + r.height / 2)) / window.innerHeight
          tRY = Math.max(-0.7, Math.min(0.7, dx * 2.2))
          tRX = Math.max(-0.35, Math.min(0.45, dy * 1.3))
        },
        { passive: true }
      )
      var t = 0
      ;(function loop() {
        requestAnimationFrame(loop)
        t += 0.016
        grp.rotation.y +=
          (tRY + Math.sin(t * 0.5) * 0.05 - grp.rotation.y) * 0.07
        grp.rotation.x += (tRX - grp.rotation.x) * 0.07
        renderer.render(scene, camera)
      })()
    }

    // Avatar setup with image
    ;(function () {
      function setAv(e) {
        if (e)
          e.innerHTML =
            '<img src="' +
            BOTIMG +
            '" alt="H\u00e9l\u00e8ne" draggable="false">'
      }
      setAv(document.getElementById("botface"))
      setAv(document.getElementById("bothead"))
    })()

    // fermeture modale projet
    ;(function () {
      var pm = document.getElementById("projModal")
      if (pm)
        pm.querySelector(".pm-back").addEventListener("click", closeProject)
      window.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeProject()
      })
    })()

    // ===== CHATBOT =====
    var QA = [
      {
        k: ["bonjour", "salut", "hello", "coucou", "hey"],
        a: "Salut ! Moi c'est H\u00e9l\u00e8ne \uD83D\uDC4B Product designer. Pose moi une question sur mon parcours, mes projets ou ma fa\u00e7on de travailler.",
      },
      {
        k: ["qui", "pr\u00e9sente", "presente", "toi", "profil", "parcours"],
        a: "H\u00e9l\u00e8ne, 34 ans, bas\u00e9e \u00e0 Paris. Product designer senior, en freelance depuis plus de 3 ans\u00a0: UI, UX, design systems et recherche utilisateur. Je con\u00e7ois des produits et je sais aussi les construire avec l\u2019IA, de l\u2019id\u00e9e au MVP. Toujours en qu\u00eate de nouveaux projets et de beaux challenges.",
      },
      {
        k: ["projet", "projets", "travaux", "r\u00e9alisation", "r\u00e9alisations", "portfolio"],
        a: "Ce que tu vois ici est une s\u00e9lection. Mes produits perso, con\u00e7us et construits en solo\u00a0: Genogy, en ligne, et Lexia, mon SaaS pour avocats, en construction. Des projets clients en design\u00a0: Custo, Horsenest, Skillgrid. Et des missions grand compte chez L\u2019Or\u00e9al et Stellantis. \u00c0 c\u00f4t\u00e9 de \u00e7a, j\u2019ai travaill\u00e9 pour Disneyland Paris, Chanel via Mazarine, Witco, Pulp et MyWay, entre autres. Clique sur les cartes pour le d\u00e9tail, et demande moi les autres si tu veux.",
      },
      {
        k: ["genogy", "g\u00e9nogramme", "genogramme"],
        a: "Genogy, c'est mon SaaS pour cr\u00e9er des g\u00e9nogrammes cliniques : \u00e9diteur sur canvas, fiches membres, design system. Men\u00e9 seule du concept au produit en ligne, et construit avec l'IA. C'est en ligne sur genogy-app.com.",
      },
      {
        k: ["lexia", "avocat"],
        a: "Lexia, c'est mon SaaS pour les avocats, que je fonde en solo : marketplace pour trouver un avocat, gestion de cabinet, copilote IA. Je le porte de bout en bout, vision, design et construction avec l'IA. Il est en construction active.",
      },
      {
        k: ["custo", "horsenest", "skillgrid", "client", "clients", "freelance"],
        a: "En design pur pour des clients : Custo (emballages personnalis\u00e9s), Horsenest (gestion \u00e9questre) et Skillgrid (SaaS RH). Sur chacun j'ai port\u00e9 l'UX, l'UI et le design system, seule en freelance.",
      },
      {
        k: ["or\u00e9al", "loreal", "lor\u00e9al", "stellantis", "disney", "chanel", "grand compte"],
        a: "J'ai aussi travaill\u00e9 pour des grands comptes : L'Or\u00e9al en R&I (app store interne, design system) et Stellantis (refonte d'une plateforme de gestion financi\u00e8re). Sous NDA, donc je montre le contexte et l'impact, et j'en parle avec plaisir en entretien.",
      },
      {
        k: ["ia", "build", "builder", "construis", "m\u00e9thode", "workflow", "comment tu travailles"],
        a: "Mon m\u00e9tier, c\u2019est le design produit\u00a0: UX, UI, design systems, recherche. En plus de \u00e7a, je sais construire ce que je con\u00e7ois avec l\u2019IA, jusqu\u2019\u00e0 un MVP cliquable. \u00c7a me permet de tester une id\u00e9e vite, de mieux parler le langage des \u00e9quipes tech, et de collaborer plus facilement avec les devs. Designer avant tout, builder en bonus.",
      },
      {
        k: ["comp\u00e9tence", "comp\u00e9tences", "skills", "expertise", "ce que tu sais faire"],
        a: "UI, UX, design systems, recherche et tests utilisateurs, prototypage. Une vraie culture tech (formation HETIC, un pass\u00e9 front) qui m'aide \u00e0 parler le langage des \u00e9quipes. Et la capacit\u00e9 \u00e0 construire avec l'IA.",
      },
      {
        k: ["exp\u00e9rience", "cv", "o\u00f9 tu as travaill\u00e9", "entreprises"],
        a: "J'ai travaill\u00e9 pour L'Or\u00e9al, Stellantis, Disneyland Paris et Chanel via Mazarine, plus pas mal de SaaS et de startups. Toujours du design produit, souvent avec des design systems.",
      },
      {
        k: ["dispo", "disponible", "recrutement", "embauche", "mission", "cdi", "cdd"],
        a: "Ouverte aux opportunit\u00e9s, CDI, CDD ou freelance, si le projet est int\u00e9ressant. Je suis \u00e0 Paris, en hybride.",
      },
      {
        k: ["contact", "mail", "email", "joindre", "\u00e9crire"],
        a: "Le plus simple : hln.margary@gmail.com. Tu me trouves aussi sur Malt.",
      },
      {
        k: ["paris", "o\u00f9", "localisation", "ville", "t\u00e9l\u00e9travail", "hybride"],
        a: "Je suis \u00e0 Paris, en hybride, avec un peu de t\u00e9l\u00e9travail (j'ai un petit chien \u00e0 la maison \uD83D\uDC36).",
      },
      {
        k: ["hobby", "hobbies", "passion", "int\u00e9r\u00eat", "int\u00e9r\u00eats", "en dehors", "perso"],
        a: "En dehors du design : la cuisine \uD83C\uDF73, les voyages \u2708\uFE0F et l'IA \uD83E\uDD16.",
      },
      {
        k: ["merci", "thanks", "top", "super"],
        a: "Avec plaisir \uD83D\uDE0A N'h\u00e9site pas si tu as d'autres questions.",
      },
    ]
    var FALLBACK =
      "Bonne question ! Je n'ai pas de r\u00e9ponse toute pr\u00eate l\u00e0 dessus. Demande moi plut\u00f4t mon parcours, mes projets, ma fa\u00e7on de travailler avec l'IA, ma dispo, ou comment me contacter."
    function answer(t) {
      t = " " + t.toLowerCase() + " "
      for (var i = 0; i < QA.length; i++) {
        for (var j = 0; j < QA[i].k.length; j++) {
          if (t.indexOf(QA[i].k[j]) >= 0) return QA[i].a
        }
      }
      return FALLBACK
    }

    var panel = $("#chatpanel"),
      btn = $("#chatbtn"),
      msgs = $("#chatmsgs"),
      input = $("#chatin"),
      opened = false
    msgs.innerHTML = ""
    panel.classList.remove("show")
    btn.classList.remove("open")
    function push(txt, who) {
      var d = document.createElement("div")
      d.className = "cmsg " + who
      d.textContent = txt
      msgs.appendChild(d)
      msgs.scrollTop = msgs.scrollHeight
      return d
    }
    function botReply(txt) {
      var d = push("\u2026", "bot")
      setTimeout(function () {
        d.textContent = answer(txt)
        msgs.scrollTop = msgs.scrollHeight
      }, 480)
    }
    function ask(txt) {
      if (!txt.trim()) return
      push(txt, "me")
      botReply(txt)
    }
    function toggleChat() {
      opened = !opened
      panel.classList.toggle("show", opened)
      btn.classList.toggle("open", opened)
      if (opened && !msgs.childNodes.length) {
        push(
          "Salut ! Moi c'est H\u00e9l\u00e8ne \uD83D\uDC4B Product designer. Pose moi une question sur mon parcours, mes projets ou ma fa\u00e7on de travailler.",
          "bot"
        )
      }
      if (opened)
        setTimeout(function () {
          input.focus()
        }, 80)
    }
    btn.addEventListener("click", toggleChat)
    $("#chatclose").addEventListener("click", function (e) {
      e.stopPropagation()
      opened = false
      panel.classList.remove("show")
      btn.classList.remove("open")
    })
    $("#chatsend").addEventListener("click", function () {
      ask(input.value)
      input.value = ""
    })
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        ask(input.value)
        input.value = ""
      }
    })
    var CHIPS = [
      "Qui es tu ?",
      "Tes projets",
      "Design et IA",
      "Tu es dispo ?",
      "Te contacter",
    ]
    var chipBox = $("#chatchips")
    chipBox.innerHTML = ""
    CHIPS.forEach(function (c) {
      var b = document.createElement("button")
      b.className = "chip"
      b.textContent = c
      b.addEventListener("click", function () {
        ask(c)
      })
      chipBox.appendChild(b)
    })

    applyView()

    // ===== GLOBAL LOFI AUDIO =====
    var lofiAudio = new Audio(LOFI_SRC)
    lofiAudio.loop = true
    lofiAudio.volume = 0.5
    var lofiPlaying = false
    var lofiSyncCallbacks = []
    function toggleLofi() {
      if (lofiPlaying) {
        lofiAudio.pause()
        lofiPlaying = false
      } else {
        lofiAudio.play().catch(function () {})
        lofiPlaying = true
      }
      lofiSyncCallbacks.forEach(function (cb) { cb() })
    }

    // === Boot animation ===
    ;(function () {
      var bo = $("#boot")
      if (!bo) return
      var canvas = $("#bootCanvas")
      var pctEl = $("#bootPct")
      var barFill = $("#bootBarFill")
      var statusEl = $("#bootStatus")
      var DUR = 3200

      // dot grid on mini canvas
      canvas.innerHTML = '<div class="boot-dots"></div>'

      // mini skeleton frames
      var frameColors = ["#1ABCFE", "#F24E1E", "#0ACF83", "#A259FF", "#FF7262", "#FF9F1C"]
      var framePositions = [
        { x: 12, y: 14, w: 52, h: 36 },
        { x: 72, y: 8, w: 48, h: 40 },
        { x: 130, y: 18, w: 50, h: 34 },
        { x: 20, y: 62, w: 54, h: 32 },
        { x: 82, y: 58, w: 46, h: 38 },
        { x: 140, y: 60, w: 50, h: 34 },
      ]
      framePositions.forEach(function (fp, i) {
        var d = document.createElement("div")
        d.className = "boot-frame"
        d.style.left = fp.x + "px"
        d.style.top = fp.y + "px"
        d.style.width = fp.w + "px"
        d.style.height = fp.h + "px"
        d.style.animationDelay = (200 + i * 180) + "ms"
        d.innerHTML = '<span class="boot-frame-dot" style="background:' + frameColors[i] + '"></span>'
          + '<span class="boot-frame-line"></span>'
          + '<span class="boot-frame-line short"></span>'
        canvas.appendChild(d)
      })

      // cursors
      var cursors = [
        { name: "Romane", col: "#7C8FB8", x: 95, y: 42, delay: 1200 },
        { name: "Cl\u00e9ment", col: "#7FA89B", x: 155, y: 78, delay: 1600 },
      ]
      cursors.forEach(function (c) {
        var cur = document.createElement("div")
        cur.className = "boot-cursor"
        cur.style.animationDelay = c.delay + "ms"
        cur.style.left = c.x + "px"
        cur.style.top = c.y + "px"
        cur.innerHTML = '<svg width="12" height="16" viewBox="0 0 12 16"><path d="M1 1l3.5 14 2.5-5 5-1z" fill="' + c.col + '" stroke="#fff" stroke-width=".8"/></svg>'
          + '<span class="boot-cursor-tag" style="background:' + c.col + '">' + c.name + '</span>'
        canvas.appendChild(cur)
      })

      // status messages
      var messages = [
        { t: 0, msg: "j'ouvre le fichier" },
        { t: 600, msg: "je pose les frames" },
        { t: 1400, msg: "je r\u00e9veille les curseurs" },
        { t: 2200, msg: "je branche le lofi" },
        { t: 2800, msg: "c'est pr\u00eat" },
      ]
      messages.forEach(function (m) {
        setTimeout(function () {
          if (statusEl) statusEl.textContent = m.msg
        }, m.t)
      })

      // percentage + progress bar
      var start = performance.now()
      function tick() {
        var elapsed = performance.now() - start
        var pct = Math.min(100, Math.round((elapsed / DUR) * 100))
        if (pctEl) pctEl.textContent = pct + "%"
        if (barFill) barFill.style.width = Math.min(100, elapsed / DUR * 100) + "%"
        if (elapsed < DUR) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)

      // exit
      setTimeout(function () {
        fitAll()
        bo.classList.add("boot-exit")
        setTimeout(function () { bo.remove() }, 700)
      }, DUR + 200)
    })()

    // ===== SIDE WIDGETS =====
    ;(function () {
      function el(t, c) {
        var e = document.createElement(t)
        if (c) e.className = c
        return e
      }

      var Z = 150,
        openWins = {}
      function front(w) {
        w.style.zIndex = ++Z
      }
      function syncDock() {
        ;[].forEach.call(dock.children, function (b) {
          b.classList.toggle("on", !!openWins[b.dataset.k])
        })
      }
      function makeWin(key, icon, title, build, opts) {
        opts = opts || {}
        if (openWins[key]) {
          front(openWins[key])
          return openWins[key]
        }
        var w = el("div", "sw-win")
        w.style.width = (opts.w || 300) + "px"
        var bx = opts.x != null ? opts.x : window.innerWidth - (opts.w || 300) - 72
        var by =
          opts.y != null ? opts.y : 96 + Object.keys(openWins).length * 34
        w.style.left = Math.max(10, bx) + "px"
        w.style.top = Math.max(70, by) + "px"
        var head = el("div", "sw-head")
        head.innerHTML =
          '<span class="ic">' +
          icon +
          '</span><span class="t">' +
          title +
          "</span>"
        var bExp = el("button")
        bExp.innerHTML = "&#10530;"
        bExp.title = "Agrandir / r\u00e9duire"
        var bCls = el("button")
        bCls.innerHTML = "&#10005;"
        bCls.title = "Fermer"
        head.appendChild(bExp)
        head.appendChild(bCls)
        var body = el("div", "sw-body")
        w.appendChild(head)
        w.appendChild(body)
        document.body.appendChild(w)
        openWins[key] = w
        front(w)
        var api = { el: w, body: body }
        build(api)
        function close() {
          if (w.__cleanup) w.__cleanup()
          if (opts.onClose) opts.onClose()
          w.remove()
          delete openWins[key]
          syncDock()
        }
        bExp.onclick = function (e) {
          e.stopPropagation()
          w.classList.toggle("lg")
          w.style.width =
            (w.classList.contains("lg") ? opts.lw || 520 : opts.w || 300) + "px"
          if (w.__resize) w.__resize()
        }
        bCls.onclick = function (e) {
          e.stopPropagation()
          close()
        }
        w.addEventListener("mousedown", function (e) {
          front(w)
          e.stopPropagation()
        })
        w.addEventListener(
          "wheel",
          function (e) {
            e.stopPropagation()
          },
          { passive: true }
        )
        var drag = false,
          ox,
          oy
        head.addEventListener("mousedown", function (e) {
          if (e.target.tagName === "BUTTON") return
          drag = true
          front(w)
          ox = e.clientX - w.offsetLeft
          oy = e.clientY - w.offsetTop
          e.preventDefault()
        })
        window.addEventListener("mousemove", function (e) {
          if (!drag) return
          w.style.left =
            Math.min(window.innerWidth - 60, Math.max(0, e.clientX - ox)) + "px"
          w.style.top =
            Math.min(window.innerHeight - 40, Math.max(0, e.clientY - oy)) + "px"
        })
        window.addEventListener("mouseup", function () {
          drag = false
        })
        api.close = close
        syncDock()
        return w
      }

      // ===== MUSIC =====
      function buildMusic(api) {
        var body = api.body
        var playing = lofiPlaying

        function render() {
          var st = playing ? ' playing' : ''
          var playIcon = playing
            ? '<svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="4" height="12" rx="1" fill="currentColor"/><rect x="9" y="1" width="4" height="12" rx="1" fill="currentColor"/></svg>'
            : '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 1l9 6-9 6z" fill="currentColor"/></svg>'
          body.innerHTML =
            '<div class="lofi-player' + st + '">'
            // -- main row: vinyl + info/eq + play button --
            + '<div class="lofi-row">'
            + '<svg class="lofi-disc' + (playing ? ' spinning' : '') + '" viewBox="0 0 80 80" fill="none">'
            + '<circle cx="40" cy="40" r="38" fill="var(--text)" opacity=".1"/>'
            + '<circle cx="40" cy="40" r="30" fill="none" stroke="var(--text)" stroke-width=".4" opacity=".1"/>'
            + '<circle cx="40" cy="40" r="22" fill="none" stroke="var(--text)" stroke-width=".4" opacity=".1"/>'
            + '<circle cx="40" cy="40" r="14" fill="none" stroke="var(--text)" stroke-width=".3" opacity=".08"/>'
            + '<circle cx="40" cy="40" r="6" fill="var(--acc)" opacity=".35"/>'
            + '<circle cx="40" cy="40" r="2" fill="var(--acc)" opacity=".6"/>'
            + '</svg>'
            + '<div class="lofi-mid">'
            + '<div class="lofi-title">Lofi ambiance</div>'
            + '<div class="lofi-status">' + (playing ? 'en lecture' : 'en pause') + '</div>'
            + '<div class="lofi-eq">'
            + '<span class="lofi-bar b1"></span>'
            + '<span class="lofi-bar b2"></span>'
            + '<span class="lofi-bar b3"></span>'
            + '<span class="lofi-bar b4"></span>'
            + '<span class="lofi-bar b5"></span>'
            + '</div>'
            + '</div>'
            + '<button class="lofi-play" aria-label="' + (playing ? 'Couper le son' : 'Lancer le son') + '">' + playIcon + '</button>'
            + '</div>'
            // -- context line --
            + '<div class="lofi-ctx">Pause lofi, le temps de regarder mes projets.</div>'
            // -- volume slider (visible only when playing) --
            + (playing
              ? '<div class="lofi-vol"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg><input type="range" min="0" max="100" value="' + Math.round(lofiAudio.volume * 100) + '"></div>'
              : '')
            + '</div>'

          var q = function (s) { return body.querySelector(s) }
          q(".lofi-play").onclick = function (e) {
            e.stopPropagation()
            toggleLofi()
            playing = lofiPlaying
            render()
          }
          var volInput = q(".lofi-vol input")
          if (volInput) {
            volInput.oninput = function () {
              lofiAudio.volume = this.value / 100
            }
          }
        }

        render()

        // Sync if toggled externally
        function externalSync() {
          if (playing !== lofiPlaying) {
            playing = lofiPlaying
            render()
          }
        }
        lofiSyncCallbacks.push(externalSync)
        api.el.__cleanup = function () {
          var idx = lofiSyncCallbacks.indexOf(externalSync)
          if (idx >= 0) lofiSyncCallbacks.splice(idx, 1)
        }
      }

      // ===== MINI TENNIS =====
      function buildTennis(api) {
        var body = api.body
        body.innerHTML =
          '<div class="swr-card"><div class="swr-ctx"><div class="swr-ctx-title">Pause tennis</div><div class="swr-ctx-sub">J\u2019aime travailler avec un match en fond. Petit clin d\u2019\u0153il\u00a0: un mini jeu, juste pour l\u2019ambiance.</div></div></div><div class="swt-sc">Toi <b class="me">0</b> &nbsp;\u2014&nbsp; <b class="op">0</b> IA</div><canvas class="swt-c" height="150"></canvas><div class="swt-cap">\uD83C\uDFBE Souris, doigt ou touches \u2191\u2193 pour jouer \u00b7 premier \u00e0 7</div>'
        var cv = body.querySelector("canvas"),
          ctx = cv.getContext("2d")
        var meEl = body.querySelector(".me"),
          opEl = body.querySelector(".op")
        var capEl = body.querySelector(".swt-cap")
        var W, H, dpr,
          ball, pl, pr, ph,
          me = 0, op = 0, raf, tk = 0,
          padM = 10, pw = 6, BR = 5,
          playerTarget, started = false,
          paused = false, gameOver = false,
          WIN_SCORE = 7, rallies = 0

        // keyboard state
        var keyUp = false, keyDown = false
        function onKeyDown(e) {
          if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") { keyUp = true; e.preventDefault() }
          if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") { keyDown = true; e.preventDefault() }
          // restart on Enter/Space after game over
          if (gameOver && (e.key === "Enter" || e.key === " ")) { restartMatch(); e.preventDefault() }
        }
        function onKeyUp(e) {
          if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") keyUp = false
          if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") keyDown = false
        }
        window.addEventListener("keydown", onKeyDown)
        window.addEventListener("keyup", onKeyUp)

        // impact ripples + particles
        var ripples = []
        function addRipple(x, y) { ripples.push({ x: x, y: y, r: 0, a: 1 }) }

        var particles = []
        function addParticles(x, y, count) {
          for (var i = 0; i < count; i++) {
            var ang = Math.random() * Math.PI * 2
            var spd = 1 + Math.random() * 2.5
            particles.push({ x: x, y: y, vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd, life: 1 })
          }
        }

        // screen flash
        var flashAlpha = 0

        // squash state
        var squash = { sx: 1, sy: 1, t: 0 }
        function doSquash(dx, dy) {
          if (Math.abs(dx) > Math.abs(dy)) { squash.sx = 0.6; squash.sy = 1.4 }
          else { squash.sx = 1.4; squash.sy = 0.6 }
          squash.t = 6
        }

        // trail
        var trail = []

        function popScore(el) {
          el.classList.add("pop")
          setTimeout(function () { el.classList.remove("pop") }, 200)
        }

        function size() {
          dpr = Math.min(window.devicePixelRatio || 1, 2)
          var cw = cv.clientWidth || 340
          var ch = api.el.classList.contains("lg") ? 320 : 220
          cv.width = cw * dpr
          cv.height = ch * dpr
          cv.style.width = cw + "px"
          cv.style.height = ch + "px"
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
          W = cw; H = ch
          ph = H * 0.22
          if (!ball) { playerTarget = H / 2; resetBall(1) }
        }

        function resetBall(d) {
          started = false
          ball = { x: W / 2, y: H / 2, vx: 0, vy: 0 }
          pl = pl || { y: H / 2 }
          pr = pr || { y: H / 2 }
          trail = []
          rallies = 0
          if (!gameOver) {
            setTimeout(function () {
              var baseSpd = 2.8 + Math.min((me + op) * 0.05, 0.8)
              ball.vx = baseSpd * d
              ball.vy = (Math.random() * 2 - 1) * 1.8
              started = true
            }, 700)
          }
        }

        function restartMatch() {
          me = 0; op = 0; gameOver = false
          meEl.textContent = "0"; opEl.textContent = "0"
          capEl.textContent = "\uD83C\uDFBE Souris, doigt ou touches \u2191\u2193 pour jouer \u00b7 premier \u00e0 7"
          resetBall(1)
        }

        // AI difficulty: gets harder as score progresses
        var aiError = 0, aiChangeTk = 0
        function updateAI() {
          var difficulty = Math.min((me + op) / 14, 1) // 0 to 1
          var aiSpeed = 2.2 + difficulty * 1.6
          var errorRange = ph * (0.45 - difficulty * 0.2)
          if (aiChangeTk <= 0) {
            aiError = (Math.random() * 2 - 1) * errorRange
            aiChangeTk = 40 + Math.random() * 60
          }
          aiChangeTk--
          var target = ball.y + aiError
          var spd = ball.vx > 0 ? aiSpeed : aiSpeed * 0.3
          var dy = target - pr.y
          var ease = 0.08 + difficulty * 0.06
          pr.y += Math.max(-spd, Math.min(spd, dy * ease))
          pr.y = Math.max(ph / 2 + 4, Math.min(H - ph / 2 - 4, pr.y))
        }

        // --- mouse / touch control ---
        function getY(e) {
          var rect = cv.getBoundingClientRect()
          var clientY = e.touches ? e.touches[0].clientY : e.clientY
          return (clientY - rect.top) * (H / rect.height)
        }
        function onMove(e) {
          playerTarget = getY(e)
          e.preventDefault()
        }
        cv.addEventListener("pointermove", onMove)
        cv.addEventListener("touchmove", onMove, { passive: false })
        // restart on canvas click after game over
        cv.addEventListener("click", function () { if (gameOver) restartMatch() })

        // --- drawing ---
        function drawCourt() {
          var grad = ctx.createLinearGradient(0, 0, W, H)
          grad.addColorStop(0, "#C2613A")
          grad.addColorStop(0.5, "#B8552F")
          grad.addColorStop(1, "#C46840")
          ctx.fillStyle = grad
          ctx.fillRect(0, 0, W, H)
          // grain texture
          ctx.fillStyle = "rgba(0,0,0,.04)"
          for (var i = 0; i < 80; i++) {
            ctx.fillRect((i * 97 + 13) % W, (i * 53 + 7) % H, 1, 1)
          }
          var m = 8
          ctx.strokeStyle = "rgba(255,255,255,.85)"
          ctx.lineWidth = 1.5
          ctx.strokeRect(m, m, W - m * 2, H - m * 2)
          var sX = W * 0.28, sX2 = W * 0.72
          ctx.beginPath()
          ctx.moveTo(sX, m); ctx.lineTo(sX, H - m)
          ctx.moveTo(sX2, m); ctx.lineTo(sX2, H - m)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(sX, H / 2); ctx.lineTo(sX2, H / 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(W / 2, m); ctx.lineTo(W / 2, m + 6)
          ctx.moveTo(W / 2, H - m); ctx.lineTo(W / 2, H - m - 6)
          ctx.stroke()
          // net
          ctx.save()
          ctx.strokeStyle = "rgba(255,255,255,.55)"
          ctx.lineWidth = 2; ctx.setLineDash([3, 4])
          ctx.beginPath(); ctx.moveTo(W / 2, 2); ctx.lineTo(W / 2, H - 2); ctx.stroke()
          ctx.setLineDash([])
          // net posts
          ctx.fillStyle = "rgba(255,255,255,.8)"
          ctx.fillRect(W / 2 - 2, 0, 4, 6)
          ctx.fillRect(W / 2 - 2, H - 6, 4, 6)
          ctx.restore()
        }

        function drawPaddle(x, y, w, h, col) {
          var r = 3
          ctx.beginPath()
          ctx.moveTo(x + r, y)
          ctx.arcTo(x + w, y, x + w, y + h, r)
          ctx.arcTo(x + w, y + h, x, y + h, r)
          ctx.arcTo(x, y + h, x, y, r)
          ctx.arcTo(x, y, x + w, y, r)
          ctx.closePath()
          ctx.fillStyle = col || "#fff"
          ctx.shadowColor = "rgba(0,0,0,.3)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2
          ctx.fill()
          ctx.shadowColor = "transparent"; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0
        }

        function drawBall() {
          // trail
          ctx.save()
          for (var i = 0; i < trail.length; i++) {
            var t = trail[i], a = (i / trail.length) * 0.2
            ctx.beginPath()
            ctx.arc(t.x, t.y, BR * (0.4 + 0.6 * i / trail.length), 0, Math.PI * 2)
            ctx.fillStyle = "rgba(212,227,78," + a.toFixed(2) + ")"
            ctx.fill()
          }
          ctx.restore()

          var bounce = Math.abs(Math.sin(tk * 0.15)) * 3
          var shadowScale = 1 - bounce * 0.06
          // shadow
          ctx.save()
          ctx.beginPath()
          ctx.ellipse(ball.x, ball.y + 1, 5 * shadowScale, 3 * shadowScale, 0, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(0,0,0,.18)"; ctx.fill()
          ctx.restore()
          // squash
          var bsx = 1, bsy = 1
          if (squash.t > 0) {
            squash.t--
            var k = squash.t / 6
            bsx = 1 + (squash.sx - 1) * k
            bsy = 1 + (squash.sy - 1) * k
          }
          ctx.save()
          ctx.translate(ball.x, ball.y - bounce)
          ctx.scale(bsx, bsy)
          ctx.beginPath(); ctx.arc(0, 0, BR, 0, Math.PI * 2)
          ctx.fillStyle = "#D4E34E"; ctx.fill()
          ctx.beginPath(); ctx.arc(-1.2, -1.5, 2, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255,255,255,.45)"; ctx.fill()
          ctx.strokeStyle = "rgba(255,255,255,.5)"; ctx.lineWidth = 0.7
          ctx.beginPath(); ctx.arc(0, 0, 4, -0.8, 0.8); ctx.stroke()
          ctx.beginPath(); ctx.arc(0, 0, 4, Math.PI - 0.8, Math.PI + 0.8); ctx.stroke()
          ctx.restore()
        }

        function drawRipples() {
          for (var i = ripples.length - 1; i >= 0; i--) {
            var rp = ripples[i]
            rp.r += 1.5; rp.a -= 0.05
            if (rp.a <= 0) { ripples.splice(i, 1); continue }
            ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
            ctx.strokeStyle = "rgba(255,255,255," + rp.a.toFixed(2) + ")"
            ctx.lineWidth = 1.5; ctx.stroke()
          }
        }

        function drawParticles() {
          for (var i = particles.length - 1; i >= 0; i--) {
            var p = particles[i]
            p.x += p.vx; p.y += p.vy; p.life -= 0.03
            p.vx *= 0.97; p.vy *= 0.97
            if (p.life <= 0) { particles.splice(i, 1); continue }
            ctx.beginPath(); ctx.arc(p.x, p.y, 1.5 * p.life, 0, Math.PI * 2)
            ctx.fillStyle = "rgba(212,227,78," + p.life.toFixed(2) + ")"
            ctx.fill()
          }
        }

        function draw() {
          drawCourt()
          drawPaddle(padM, pl.y - ph / 2, pw, ph, "#fff")
          drawPaddle(W - padM - pw, pr.y - ph / 2, pw, ph, "rgba(255,255,255,.7)")
          if (!gameOver) drawBall()
          drawRipples()
          drawParticles()
          // flash effect
          if (flashAlpha > 0) {
            ctx.fillStyle = "rgba(255,255,255," + flashAlpha.toFixed(2) + ")"
            ctx.fillRect(0, 0, W, H)
            flashAlpha -= 0.04
          }
          if (!started && !gameOver) {
            ctx.fillStyle = "rgba(0,0,0,.3)"
            ctx.fillRect(0, 0, W, H)
            ctx.fillStyle = "#fff"; ctx.textAlign = "center"
            ctx.font = '600 13px "Fraunces",serif'
            ctx.fillText("Pr\u00eat ?", W / 2, H / 2)
          }
          if (gameOver) {
            ctx.fillStyle = "rgba(0,0,0,.45)"
            ctx.fillRect(0, 0, W, H)
            ctx.textAlign = "center"
            ctx.fillStyle = "#D4E34E"
            ctx.font = '700 18px "Fraunces",serif'
            ctx.fillText(me >= WIN_SCORE ? "Victoire !" : "Perdu !", W / 2, H / 2 - 8)
            ctx.fillStyle = "rgba(255,255,255,.7)"
            ctx.font = '400 12px "Inter",sans-serif'
            ctx.fillText("Clic ou Entr\u00e9e pour rejouer", W / 2, H / 2 + 14)
          }
        }

        // --- game loop ---
        var kbSpeed = 4.5
        function step() {
          tk++

          // keyboard input
          if (keyUp) playerTarget = Math.max(0, (playerTarget || pl.y) - kbSpeed)
          if (keyDown) playerTarget = Math.min(H, (playerTarget || pl.y) + kbSpeed)

          // player paddle follows target with easing
          var dy = playerTarget - pl.y
          pl.y += dy * 0.22
          pl.y = Math.max(ph / 2 + 4, Math.min(H - ph / 2 - 4, pl.y))

          if (started && !gameOver) {
            // AI
            updateAI()
            rallies++

            ball.x += ball.vx; ball.y += ball.vy
            // trail
            trail.push({ x: ball.x, y: ball.y })
            if (trail.length > 10) trail.shift()

            // top/bottom bounce
            if (ball.y < BR + 4) { ball.y = BR + 4; ball.vy *= -1; addRipple(ball.x, 4); doSquash(0, 1) }
            if (ball.y > H - BR - 4) { ball.y = H - BR - 4; ball.vy *= -1; addRipple(ball.x, H - 4); doSquash(0, 1) }

            // player paddle hit
            var plX = padM + pw
            if (ball.vx < 0 && ball.x - BR < plX && ball.x + BR > padM &&
                ball.y > pl.y - ph / 2 - 2 && ball.y < pl.y + ph / 2 + 2) {
              ball.x = plX + BR
              var hitPos = (ball.y - pl.y) / (ph / 2) // -1 to 1
              var speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) + 0.15
              var angle = hitPos * 0.75
              ball.vx = Math.cos(angle) * speed
              ball.vy = Math.sin(angle) * speed
              addRipple(plX, ball.y); doSquash(1, 0); addParticles(plX, ball.y, 6)
            }

            // AI paddle hit
            var prX = W - padM - pw
            if (ball.vx > 0 && ball.x + BR > prX && ball.x - BR < W - padM &&
                ball.y > pr.y - ph / 2 - 2 && ball.y < pr.y + ph / 2 + 2) {
              ball.x = prX - BR
              var hitPos2 = (ball.y - pr.y) / (ph / 2)
              var speed2 = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) + 0.1
              var angle2 = hitPos2 * 0.75
              ball.vx = -Math.cos(angle2) * speed2
              ball.vy = Math.sin(angle2) * speed2
              addRipple(prX, ball.y); doSquash(1, 0); addParticles(prX, ball.y, 4)
            }

            // scoring
            if (ball.x < -10) {
              op++; opEl.textContent = op; popScore(opEl); flashAlpha = 0.3
              if (op >= WIN_SCORE) { gameOver = true; capEl.textContent = "\uD83C\uDFBE Perdu " + me + "\u2013" + op + " \u00b7 clic ou Entr\u00e9e pour rejouer" }
              else resetBall(1)
            }
            if (ball.x > W + 10) {
              me++; meEl.textContent = me; popScore(meEl); flashAlpha = 0.3
              if (me >= WIN_SCORE) { gameOver = true; capEl.textContent = "\uD83C\uDFBE Victoire " + me + "\u2013" + op + " ! Bien jou\u00e9 \uD83C\uDFC6" }
              else resetBall(-1)
            }

            // speed cap (increases slightly with rallies)
            var maxV = 5.5 + Math.min(rallies * 0.003, 2)
            ball.vx = Math.max(-maxV, Math.min(maxV, ball.vx))
            ball.vy = Math.max(-maxV, Math.min(maxV, ball.vy))
          }

          draw()
          raf = requestAnimationFrame(step)
        }

        size()
        resetBall(1)
        raf = requestAnimationFrame(step)

        api.el.__resize = function () {
          var w = ball ? { x: ball.x / W, y: ball.y / H } : null
          size()
          if (w && ball) { ball.x = w.x * W; ball.y = w.y * H }
        }
        api.el.__cleanup = function () {
          cancelAnimationFrame(raf)
          cv.removeEventListener("pointermove", onMove)
          window.removeEventListener("keydown", onKeyDown)
          window.removeEventListener("keyup", onKeyUp)
        }
      }

      // ===== RECETTES =====
      var RECIPES = [
        {
          e: "\uD83D\uDC1F",
          n: "Ceviche de dorade",
          d: "Ma recette soleil : dorade ultra fra\u00eeche, citron vert, oignon rouge, coriandre. Je pourrais en manger tous les jours.",
          m: "20 min \u00b7 facile",
        },
        {
          e: "\uD83E\uDD5F",
          n: "Raviolis sichuanais",
          d: "Pliage m\u00e9ditatif, sauce piment et vinaigre noir. Mon comfort food du dimanche soir.",
          m: "1h \u00b7 avanc\u00e9",
        },
        {
          e: "\uD83C\uDF2E",
          n: "Tortillas porc effiloch\u00e9",
          d: "Porc fondant, salsa maison, un peu de guac. Le genre de plat o\u00f9 tout le monde se ress\u00e8rt.",
          m: "3h (cuisson lente) \u00b7 moyen",
        },
        {
          e: "\uD83C\uDF5D",
          n: "P\u00e2tes alla vongole",
          d: "Palourdes, ail, vin blanc, persil. Simple et parfait, comme en Italie.",
          m: "25 min \u00b7 facile",
        },
        {
          e: "\uD83C\uDF70",
          n: "Cheesecake",
          d: "Base sp\u00e9culoos, cr\u00e8me onctueuse, topping fruits rouges. Mon dessert signature pour les soir\u00e9es.",
          m: "40 min + repos \u00b7 moyen",
        },
        {
          e: "\uD83D\uDC19",
          n: "Poulpe grill\u00e9",
          d: "Poulpe tendre, grill\u00e9 au dernier moment avec huile d\u2019olive et paprika. Go\u00fbt de vacances instantan\u00e9.",
          m: "1h30 \u00b7 moyen",
        },
        {
          e: "\uD83E\uDD6C",
          n: "Rouleaux de printemps",
          d: "Crevettes, vermicelles, menthe, cacahu\u00e8tes. Frais, l\u00e9ger, je les fais pour tous les ap\u00e9ros.",
          m: "30 min \u00b7 facile",
        },
      ]
      window.HELENE_RECETTES = RECIPES
      function buildRecettes(api) {
        var body = api.body,
          last = -1
        body.innerHTML =
          '<div class="swr-card"><div class="swr-ctx"><div class="swr-ctx-title">Pause cuisine</div><div class="swr-ctx-sub">Quand je ne design pas, je cuisine. Petit clin d\u2019\u0153il perso\u00a0: pioche une recette au hasard.</div></div><div class="swr-e"></div><div class="swr-n"></div><div class="swr-d"></div><div class="swr-meta"></div><button class="swr-btn">\uD83C\uDFB2 Une autre</button></div>'
        var e = body.querySelector(".swr-e"),
          n = body.querySelector(".swr-n"),
          d = body.querySelector(".swr-d"),
          m = body.querySelector(".swr-meta")
        function pick() {
          var R = window.HELENE_RECETTES || RECIPES,
            i
          do {
            i = Math.floor(Math.random() * R.length)
          } while (R.length > 1 && i === last)
          last = i
          var r = R[i]
          e.textContent = r.e
          n.textContent = r.n
          d.textContent = r.d
          m.textContent = "\u23f1 " + r.m
        }
        body.querySelector(".swr-btn").onclick = pick
        pick()
      }

      // ===== DOCK =====
      var dock = el("div", "sw-dock")
      function addBtn(key, icon, label, shortLabel, fn) {
        var b = el("button", "dkb")
        var ic = el("span", "dki")
        ic.textContent = icon
        var lb = el("span", "dkl")
        lb.textContent = shortLabel
        b.appendChild(ic)
        b.appendChild(lb)
        b.title = label
        b.dataset.k = key
        b.onclick = fn
        dock.appendChild(b)
      }
      addBtn("music", "\uD83C\uDFB5", "Lecteur lofi", "music", function () {
        makeWin("music", "\uD83C\uDFB5", "Lecteur lofi", buildMusic, {
          w: 300,
          lw: 380,
        })
      })
      addBtn("tennis", "\uD83C\uDFBE", "Mini tennis", "tennis", function () {
        makeWin("tennis", "\uD83C\uDFBE", "Mini tennis", buildTennis, {
          w: 380,
          lw: 520,
        })
      })
      addBtn("reci", "\uD83C\uDF73", "Recettes", "recettes", function () {
        makeWin("reci", "\uD83C\uDF73", "Recette surprise", buildRecettes, {
          w: 300,
          lw: 360,
        })
      })
      document.body.appendChild(dock)

      // ===== MOBILE FAB (replaces dock on ≤768px) =====
      var fab = document.createElement("button")
      fab.className = "mob-fab"
      fab.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="6"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="4" y1="12" x2="8" y2="12"/><circle cx="16" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1" fill="currentColor" stroke="none"/></svg>'
      fab.setAttribute("aria-label", "Ouvrir le menu widgets")
      var fabMenu = document.createElement("div")
      fabMenu.className = "mob-fab-menu"
      var fabItems = [
        { icon: "🎵", label: "Musique", fn: function () { makeWin("music", "🎵", "Lecteur lofi", buildMusic, { w: 300, lw: 380 }) } },
        { icon: "🎾", label: "Tennis", fn: function () { makeWin("tennis", "🎾", "Mini tennis", buildTennis, { w: 380, lw: 520 }) } },
        { icon: "🍳", label: "Recettes", fn: function () { makeWin("reci", "🍳", "Recette surprise", buildRecettes, { w: 300, lw: 360 }) } }
      ]
      fabItems.forEach(function (it) {
        var row = document.createElement("button")
        row.className = "mob-fab-item"
        row.innerHTML = '<span class="mob-fab-ic">' + it.icon + '</span><span>' + it.label + '</span>'
        row.onclick = function () { fabMenu.classList.remove("open"); it.fn() }
        fabMenu.appendChild(row)
      })
      fab.onclick = function (e) {
        e.stopPropagation()
        fabMenu.classList.toggle("open")
      }
      document.addEventListener("click", function () { fabMenu.classList.remove("open") })
      fabMenu.addEventListener("click", function (e) { e.stopPropagation() })
      document.body.appendChild(fab)
      document.body.appendChild(fabMenu)
    })()
  }, [])

  return (
    <>
      <div id="boot">
        <div className="boot-head">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="3" stroke="#999" strokeWidth="1.2"/><rect x="4" y="4" width="4" height="3" rx="1" fill="#999"/><rect x="4" y="9" width="8" height="3" rx="1" fill="#999" opacity=".5"/></svg>
          <span className="boot-file">portfolio.fig</span>
          <span className="boot-pct" id="bootPct">0%</span>
        </div>
        <div className="boot-canvas" id="bootCanvas"></div>
        <div className="boot-bar"><div className="boot-bar-fill" id="bootBarFill"></div></div>
        <div className="boot-status" id="bootStatus">j'ouvre le fichier</div>
      </div>

      <div id="viewport">
        <div id="world"></div>
      </div>
      <div id="cursors"></div>

      <div id="bar">
        <img className="meav" id="meav" alt="Hélène Margary" />
        <span className="logo">Hélène Margary</span>
        <span className="file">· portfolio.fig</span>
        <span className="sp"></span>
        <div className="avatars" id="avatars"></div>
        <button className="tbtn solid" id="tourBtn">
          <span className="tour-full">▶ visite guidée</span>
          <span className="tour-short">▶ Visite</span>
        </button>
        <button className="tbtn" id="fitBtn">
          ⤢ tout voir
        </button>
      </div>

      <div id="zoomc">
        <button id="zout">−</button>
        <span className="pct" id="pct">
          100%
        </span>
        <button id="zin">+</button>
      </div>
      <div id="hintbar">
        glisse pour te déplacer · molette pour zoomer · clique une frame
      </div>

      <div id="tourVeil" style={{display:"none"}}></div>
      <div id="tourOverlay" style={{display:"none"}}>
        <div className="tour-bar">
          <div className="tour-top">
            <div className="tour-info">
              <div id="tourCaption" className="tour-caption"></div>
              <div id="tourCounter" className="tour-counter"></div>
            </div>
            <button id="tourQuit" className="tour-close" title="Quitter la visite">{"\u2715"}</button>
          </div>
          <div className="tour-progress-track"><div id="tourProgress" className="tour-progress-fill"></div></div>
          <div className="tour-actions">
            <button id="tourPrev" className="tour-btn">{"Pr\u00e9c\u00e9dent"}</button>
            <button id="tourAuto" className="tour-auto" title="Lecture auto">{"\u25B6"}</button>
            <button id="tourNext" className="tour-btn tour-btn-primary">{"Suivant"}</button>
          </div>
        </div>
      </div>

      <div id="projModal">
        <div className="pm-back"></div>
        <div className="pm-panel"></div>
      </div>

      <div id="chatbtn" title="Une question ?">
        <span className="label">Une question ? ✦</span>
        <div id="botface"></div>
      </div>
      <div id="chatpanel">
        <div className="chathead">
          <div id="bothead" className="chathav"></div>
          <div>
            <div className="chatname">
              Hélène <span className="chatdot"></span>
            </div>
            <div className="chatrole">
              Product Designer · répond en direct
            </div>
          </div>
          <button id="chatclose" aria-label="Fermer">
            ✕
          </button>
        </div>
        <div id="chatmsgs"></div>
        <div id="chatchips"></div>
        <div className="chatinput">
          <input id="chatin" placeholder="Pose ta question…" autoComplete="off" />
          <button id="chatsend" aria-label="Envoyer">
            →
          </button>
        </div>
      </div>
    </>
  )
}
