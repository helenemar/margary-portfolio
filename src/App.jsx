import { useEffect } from "react"
import "./index.css"

// Real asset imports (replace PLACEHOLDERs)
import G_LAND from "./assets/genogy-1-landing.jpg"
import G_EDIT from "./assets/genogy-2-editeur.jpg"
import G_FICHE from "./assets/genogy-3-fiche.jpg"
import L_LAND from "./assets/lexia-1-marketplace.jpg"
import L_DASH from "./assets/lexia-2-dashboard.jpg"
import L_CASE from "./assets/lexia-3-dossier.jpg"
import L_REL from "./assets/lexia-4-relances.jpg"
import BOTIMG from "./assets/helene-avatar-3d.png"
import AV from "./assets/helene-photo.jpg"

export default function App() {
  useEffect(() => {
    // ===== INIT VARS =====
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
      f.className = "frame"
      f.style.left = o.x + "px"
      f.style.top = o.y + "px"
      f.style.width = o.w + "px"
      f.style.height = o.h + "px"
      f.innerHTML =
        '<div class="flabel">' +
        o.label +
        '</div><div class="fbox">' +
        o.html +
        '</div><div class="dims">' +
        o.w +
        " \u00d7 " +
        o.h +
        "</div>"
      world.appendChild(f)
      var rec = { el: f, x: o.x, y: o.y, w: o.w, h: o.h, onOpen: o.onOpen }
      frames.push(rec)
      f.addEventListener("click", function (e) {
        if (panMoved) return
        if (o.onOpen && e.target.closest(".arcbtn")) return
        if (o.proj) {
          openProject(o.proj)
          return
        }
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
        subtitle: "Genogy \u00b7 SaaS \u00b7 g\u00e9nogrammes cliniques",
        title: "Genogy",
        role: "Design produit de bout en bout (landing, app, design system, \u00e9diteur canvas), puis vibe cod\u00e9 en solo avec Claude Code + Figma. Pas du dev classique : du vibe coding.",
        desc: "Genogy permet de cartographier en quelques minutes les liens familiaux, \u00e9motionnels et transg\u00e9n\u00e9rationnels d\u2019un patient, selon les standards McGoldrick. J\u2019ai design\u00e9 tout le produit (le site, l\u2019application, le design system, et un \u00e9diteur canvas riche : zoom, liens \u00e9motionnels, fiches membres, pathologies, export), puis je l\u2019ai rendu fonctionnel en vibe coding, sans \u00e9quipe de dev.",
        link: "https://genogy-app.com",
        linkLabel: "genogy-app.com",
        tags: [
          "SaaS",
          "UI/UX",
          "Design System",
          "\u00c9diteur canvas",
          "Claude Code",
          "Figma",
        ],
        shots: [
          { img: G_LAND, cap: "Landing \u00b7 le pitch produit" },
          { img: G_EDIT, cap: "\u00c9diteur canvas \u00b7 liens & pathologies" },
          { img: G_FICHE, cap: "Fiche membre \u00b7 d\u00e9tail clinique" },
        ],
      },
      lexia: {
        accent: "#1E8E5A",
        subtitle:
          "Lexia \u00b7 marketplace & gestion \u00b7 avocats",
        title: "Lexia",
        role: "Design produit complet : la marketplace publique et le back office cabinet (dashboard, app, design system), puis vibe cod\u00e9 en solo avec Claude Code + Figma. Pas du dev classique : du vibe coding.",
        desc: "Lexia a deux faces. C\u00f4t\u00e9 public, une marketplace pour trouver un avocat v\u00e9rifi\u00e9 et r\u00e9server une consultation en quelques clics. C\u00f4t\u00e9 pro, un back office complet pour les cabinets : dossiers, agenda, clients, feuille de temps et facturation conforme, avec en prime des relances de paiement et des r\u00e9sum\u00e9s de dossiers g\u00e9n\u00e9r\u00e9s par IA.",
        link: "",
        linkLabel: "",
        tags: [
          "Marketplace",
          "SaaS",
          "UI/UX",
          "Design System",
          "Dashboard",
          "IA",
          "Claude Code",
        ],
        shots: [
          { img: L_LAND, cap: "Landing \u00b7 la marketplace" },
          { img: L_DASH, cap: "Tableau de bord (c\u00f4t\u00e9 cabinet)" },
          { img: L_CASE, cap: "Dossier \u00b7 r\u00e9sum\u00e9 g\u00e9n\u00e9r\u00e9 par IA" },
          { img: L_REL, cap: "Relances pr\u00e9par\u00e9es par IA" },
        ],
      },
    }

    function openProject(key) {
      var p = PROJECTS[key]
      if (!p) return
      var m = document.getElementById("projModal")
      if (!m) return
      m.style.setProperty("--acc", p.accent || "#0D99FF")
      var shots = p.shots
        .map(function (s) {
          return (
            '<div class="pm-shot"><img src="' +
            s.img +
            '" alt="' +
            s.cap +
            '"><div class="pm-cap">' +
            s.cap +
            "</div></div>"
          )
        })
        .join("")
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
      m.querySelector(".pm-panel").innerHTML =
        '<div class="pm-head"><div><div class="pm-brand">' +
        p.subtitle +
        '</div><div class="pm-title">' +
        p.title +
        '</div></div><button class="pm-close" type="button" aria-label="Fermer">\u2715</button></div><div class="pm-body"><div class="pm-role"><b>Mon r\u00f4le :</b> ' +
        p.role +
        '</div><p class="pm-desc">' +
        p.desc +
        '</p><div class="pm-gallery">' +
        shots +
        '</div><div class="pm-tags">' +
        tags +
        "</div>" +
        link +
        "</div>"
      m.querySelector(".pm-close").addEventListener("click", closeProject)
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
      x: -60,
      y: 760,
      w: 520,
      h: 540,
      label: "<b>Lexia</b> \u00b7 marketplace &amp; gestion \u00b7 avocats",
      html:
        '<div class="pad"><div class="fbrand">Design\u00e9 &amp; vibe cod\u00e9 en solo</div><h3 class="ftitle" style="font-size:1.5rem">Lexia, la plateforme des avocats</h3><div class="pcover"><img src="' +
        L_LAND +
        '" alt="Lexia"></div><p class="fdesc">Trouver un avocat en quelques clics, et tout g\u00e9rer c\u00f4t\u00e9 cabinet, avec l\'IA.</p><div class="ftags"><span>Marketplace</span><span>SaaS</span><span>UI/UX</span></div><button class="pmore" type="button">Voir le projet \u2192</button></div>',
    })
    // intro
    addFrame({
      x: -560,
      y: -40,
      w: 300,
      h: 200,
      label: "<b>moi.txt</b>",
      html: '<div class="pad"><div class="fbrand">Product Designer \u00b7 Paris</div><h3 class="ftitle" style="font-size:1.3rem;margin-top:6px">Bienvenue dans mon fichier.</h3><p class="fdesc">\u00c0 toi de jouer : glisse pour te d\u00e9placer, zoome sur une frame. C\'est mon environnement naturel, je t\'y re\u00e7ois avec plaisir.</p></div>',
    })
    // L'Oréal
    addFrame({
      x: -120,
      y: -300,
      w: 460,
      h: 360,
      label: "<b>L'Or\u00e9al \u00b7 R&I</b> \u00b7 2024 \u00e0 2026",
      html:
        '<div class="pad"><div class="fbrand">L\'Or\u00e9al \u00b7 Recherche &amp; Innovation</div><h3 class="ftitle">Outils internes R&amp;I</h3><div class="shot">' +
        ui("dash") +
        '</div><p class="fdesc">\u224814 mois. Solutions digitales internes : parcours, interfaces, collaboration devs/PM pour des produits efficaces et centr\u00e9s utilisateur.</p><div class="ftags"><span>Discovery</span><span>UI/UX</span><span>Design System</span><span>Figma</span></div></div>',
    })
    // Stellantis
    addFrame({
      x: 520,
      y: 120,
      w: 460,
      h: 360,
      label: "<b>Stellantis</b> \u00b7 2024 \u00e0 2025",
      html:
        '<div class="pad"><div class="fbrand">Stellantis \u00b7 Finance &amp; Services</div><h3 class="ftitle">Refonte Finance &amp; Services</h3><div class="shot">' +
        ui("site") +
        '</div><p class="fdesc">Refonte du site : utilisabilit\u00e9, identit\u00e9 modernis\u00e9e, exp\u00e9rience client. Parcours, design d\'interface et alignement business.</p><div class="ftags"><span>Refonte UI</span><span>Parcours</span><span>Identit\u00e9</span></div></div>',
    })
    // Genogy (vrai projet)
    addFrame({
      proj: "genogy",
      x: -60,
      y: 180,
      w: 520,
      h: 540,
      label:
        "<b>Genogy</b> \u00b7 SaaS \u00b7 g\u00e9nogrammes cliniques",
      html:
        '<div class="pad"><div class="fbrand">Design\u00e9 &amp; vibe cod\u00e9 en solo</div><h3 class="ftitle" style="font-size:1.5rem">Genogy, l\'app de g\u00e9nogrammes</h3><div class="pcover"><img src="' +
        G_LAND +
        '" alt="Genogy"></div><p class="fdesc">Cr\u00e9er des g\u00e9nogrammes cliniques en ligne. Design\u00e9 et vibe cod\u00e9 en solo.</p><div class="ftags"><span>SaaS</span><span>UI/UX</span><span>Design System</span></div><button class="pmore" type="button">Voir le projet \u2192</button></div>',
    })
    // brands
    addFrame({
      x: 1080,
      y: -220,
      w: 300,
      h: 280,
      label: "<b>confiance.list</b>",
      html: '<div class="pad"><div class="fbrand">Ils m\'ont fait confiance</div><div class="blist"><div>L\'Or\u00e9al</div><div>Stellantis</div><div>LTZ Group</div></div></div>',
    })
    // about/interests
    addFrame({
      x: -560,
      y: 240,
      w: 320,
      h: 430,
      label: "<b>apropos.me</b>",
      html: '<div class="pad"><div class="fbrand">qui je suis</div><h3 class="ftitle" style="font-size:1.4rem">Je design, je vibe code.</h3><p class="fdesc">Product designer avant tout. Mais je sais vibe coder : je passe de l\'id\u00e9e au MVP cliquable avec l\'IA (Claude Code + Figma), sans \u00e9quipe de dev.</p><div class="meta"><div class="mrow"><span class="gdot"></span><div><b>Dispo</b><br><span class="msub">Freelance, ouverte au CDD, CDI ou autre si le poste est int\u00e9ressant.</span></div></div><div class="mrow"><span class="memo">\uD83D\uDCCD</span><div><b>Paris</b><br><span class="msub">T\u00e9l\u00e9travail, mobile pour les rencontres qui comptent.</span></div></div></div><div class="chips"><span>\uD83C\uDF73 cuisine</span><span>\u2708\uFE0F voyages</span><span>\uD83E\uDD16 IA</span></div><div class="links"><a href="mailto:hln.margary@gmail.com">\u00c9crire \u2709</a><a href="https://www.malt.fr/profile/helenemargary" target="_blank" rel="noopener">Malt \u2197</a></div></div>',
    })
    // skills
    addFrame({
      x: 1080,
      y: 140,
      w: 320,
      h: 300,
      label: "<b>m\u00e9thode.md</b>",
      html: '<div class="pad"><div class="fbrand">ma fa\u00e7on de travailler</div><ul class="skl"><li>UI/UX from scratch &amp; refontes</li><li>Design system &amp; doc claire</li><li>Audit UX \u00b7 basse puis haute fid\u00e9lit\u00e9</li><li>Prototypes Figma pr\u00eats pour les devs</li><li>IA \u00b7 Claude Code \u00b7 MVP sans dev</li></ul></div>',
    })
    // arcade
    addFrame({
      x: 560,
      y: 560,
      w: 380,
      h: 280,
      onOpen: true,
      label: "<b>arcade/</b> \uD83C\uDFAE",
      html: '<div class="pad"><div class="fbrand">pause</div><h3 class="ftitle" style="font-size:1.25rem">Arcade</h3><div class="arc"><button class="arcbtn" data-g="tetris"><span class="g">\u25A3</span> Tetris</button><button class="arcbtn" data-g="racer"><span class="g">\uD83C\uDFCE</span> Racer</button><button class="arcbtn" data-g="solitaire"><span class="g">\u2660</span> Solitaire</button><button class="arcbtn" data-g="pixel"><span class="g">\uD83C\uDFAF</span> Pixel Perfect</button></div></div>',
    })
    // pins
    addPin(
      420,
      -310,
      "Recruteur",
      "Tr\u00e8s clair, le passage discovery \u2192 livraison Figma \uD83D\uDC4C"
    )
    addPin(960, 110, "L'Or\u00e9al", "Refonte vraiment propre, rigueur au top.")
    addPin(
      478,
      205,
      "Claude",
      "Genogy : design\u00e9 ET construit en solo avec l'IA. Rare et fort."
    )
    addPin(
      478,
      785,
      "Recruteur",
      "Deux SaaS complets, design\u00e9s ET vibe cod\u00e9s en solo. \uD83D\uDD25"
    )

    // arcade buttons
    world.addEventListener("click", function (e) {
      var ab = e.target.closest(".arcbtn")
      if (!ab) return
      e.stopPropagation()
      var g = ab.dataset.g
      if (g === "tetris") openTetris()
      else if (g === "racer") openRacer()
      else if (g === "solitaire") openSolitaire()
      else if (g === "pixel") openPixel()
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
    function fitRect(r, pad) {
      var vw = innerWidth,
        vh = innerHeight - 44
      var s = clamp(Math.min(vw / r.w, vh / r.h) * (pad || 0.85), 0.18, 2.4)
      var X = vw / 2 - (r.x + r.w / 2) * s
      var Y = vh / 2 + 44 - (r.y + r.h / 2) * s
      animateView(s, X, Y)
    }
    function fitTo(f) {
      fitRect({ x: f.x, y: f.y, w: f.w, h: f.h }, 0.78)
    }
    function fitAll() {
      fitRect(worldBounds(), 0.82)
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

    // pan
    var panning = false,
      panMoved = false,
      lx,
      ly
    vp.addEventListener("pointerdown", function (e) {
      if (e.button) return
      panning = true
      panMoved = false
      lx = e.clientX
      ly = e.clientY
      vp.classList.add("grabbing")
      if (anim) cancelAnimationFrame(anim)
    })
    window.addEventListener(
      "pointermove",
      function (e) {
        if (!panning) return
        var dx = e.clientX - lx,
          dy = e.clientY - ly
        if (Math.abs(dx) + Math.abs(dy) > 4) panMoved = true
        view.X += dx
        view.Y += dy
        lx = e.clientX
        ly = e.clientY
        applyView()
      },
      { passive: true }
    )
    window.addEventListener("pointerup", function () {
      panning = false
      vp.classList.remove("grabbing")
      setTimeout(function () {
        panMoved = false
      }, 30)
    })
    // zoom wheel
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
    var tourStops,
      tourIdx = -1,
      touring = false
    function tour() {
      tourStops = []
      ;[
        "Hélène",
        "Genogy",
        "Lexia",
        "L'Oréal",
        "Stellantis",
        "confiance",
        "méthode",
        "arcade",
      ].forEach(function (key) {
        var f = frames.filter(function (x) {
          return x.el.querySelector(".flabel").textContent.indexOf(key) >= 0
        })[0]
        if (f) tourStops.push(f)
      })
      touring = true
      tourIdx = -1
      nextStop()
    }
    function nextStop() {
      if (!touring) return
      tourIdx++
      if (tourIdx >= tourStops.length) {
        touring = false
        fitAll()
        return
      }
      fitTo(tourStops[tourIdx])
      tourTO = setTimeout(nextStop, 2600)
    }
    var tourTO = null
    $("#tourBtn").addEventListener("click", function () {
      if (touring) {
        touring = false
        clearTimeout(tourTO)
        fitAll()
        this.textContent = "\u25b6 visite guid\u00e9e"
      } else {
        this.textContent = "\u25a0 stop"
        tour()
      }
    })
    vp.addEventListener("pointerdown", function () {
      if (touring) {
        touring = false
        clearTimeout(tourTO)
        $("#tourBtn").textContent = "\u25b6 visite guid\u00e9e"
      }
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
      Recruteur: ["int\u00e9ressant\u2026", "elle g\u00e8re", "je note \u2726", "dispo ?"],
      Claude: ["joli fichier", "design \u00d7 IA \uD83E\uDD1D", "propre", "\u25b2"],
      "L'Or\u00e9al": ["nickel", "on rappelle", "\u2713"],
    }
    var collabs = [
      { name: "Recruteur", col: "#7C8FB8" },
      { name: "Claude", col: "#7FA89B" },
      { name: "L'Or\u00e9al", col: "#C2A06B" },
    ]
    var B = worldBounds()
    collabs.forEach(function (c) {
      var el = document.createElement("div")
      el.className = "cursor"
      el.style.color = c.col
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
        accents: ["#F24E1E", "#FF7262", "#A259FF", "#1ABCFE", "#0ACF83"],
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

    // Build palette switcher
    var palettesEl = document.getElementById("palettes")
    Object.keys(PAL).forEach(function (key) {
      var p = PAL[key]
      var btn = document.createElement("button")
      btn.className = "pal" + (key === "figma" ? " active" : "")
      btn.dataset.k = key
      var swatches = (p.accents || []).slice(0, 3)
      var swHtml = '<span class="sw">'
      swatches.forEach(function (c) {
        swHtml += '<i style="background:' + c + '"></i>'
      })
      swHtml += "</span>"
      btn.innerHTML = swHtml + "<span>" + p.name + "</span>"
      btn.addEventListener("click", function () {
        applyPalette(key)
      })
      palettesEl.appendChild(btn)
    })

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
    function openWindow(opts) {
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
      function close() {
        if (cleanup)
          try {
            cleanup()
          } catch (e) {}
        win.remove()
      }
      win.querySelector(".wdot.c").addEventListener("click", close)
      return win
    }

    function gameTetris(b) {
      var cols = 10,
        rows = 20,
        cell = 22,
        cw = cols * cell,
        ch = rows * cell
      b.innerHTML =
        '<div class="game"><canvas width="' +
        cw +
        '" height="' +
        ch +
        '"></canvas><div class="ginfo"><div>SCORE</div><div class="gscore">0</div><div class="ghint">\u2190 \u2192 bouger<br>\u2191 tourner<br>\u2193 descendre<br>espace : chute<br>P pause \u00b7 R rejouer</div></div></div>'
      var g = b.querySelector("canvas").getContext("2d"),
        C = {
          bg: cv_("--bg2"),
          grid: cv_("--hair"),
          block: cv_("--text"),
          cur: cv_("--live"),
          text: cv_("--text"),
        }
      var sh = {
          I: [[1, 1, 1, 1]],
          O: [
            [1, 1],
            [1, 1],
          ],
          T: [
            [0, 1, 0],
            [1, 1, 1],
          ],
          S: [
            [0, 1, 1],
            [1, 1, 0],
          ],
          Z: [
            [1, 1, 0],
            [0, 1, 1],
          ],
          J: [
            [1, 0, 0],
            [1, 1, 1],
          ],
          L: [
            [0, 0, 1],
            [1, 1, 1],
          ],
        },
        keys = Object.keys(sh),
        board,
        cur,
        cx,
        cy,
        score = 0,
        over = false,
        paused = false
      function clear() {
        board = []
        for (var r = 0; r < rows; r++) board.push(new Array(cols).fill(0))
      }
      clear()
      function rot(m) {
        var R = m.length,
          Cc = m[0].length,
          o = []
        for (var c = 0; c < Cc; c++) {
          var row = []
          for (var r = R - 1; r >= 0; r--) row.push(m[r][c])
          o.push(row)
        }
        return o
      }
      function coll(x, y, m) {
        for (var r = 0; r < m.length; r++)
          for (var c = 0; c < m[r].length; c++)
            if (m[r][c]) {
              var nx = x + c,
                ny = y + r
              if (nx < 0 || nx >= cols || ny >= rows) return 1
              if (ny >= 0 && board[ny][nx]) return 1
            }
        return 0
      }
      function spawn() {
        var k = keys[Math.floor(Math.random() * keys.length)]
        cur = sh[k].map(function (r) {
          return r.slice()
        })
        cx = Math.floor((cols - cur[0].length) / 2)
        cy = 0
        if (coll(cx, cy, cur)) over = true
      }
      function merge() {
        for (var r = 0; r < cur.length; r++)
          for (var c = 0; c < cur[r].length; c++)
            if (cur[r][c] && cy + r >= 0) board[cy + r][cx + c] = 1
      }
      function cl() {
        var n = 0
        for (var r = rows - 1; r >= 0; r--)
          if (
            board[r].every(function (v) {
              return v
            })
          ) {
            board.splice(r, 1)
            board.unshift(new Array(cols).fill(0))
            n++
            r++
          }
        if (n) {
          score += [0, 40, 100, 300, 1200][n]
          b.querySelector(".gscore").textContent = score
        }
      }
      function drop() {
        if (!coll(cx, cy + 1, cur)) cy++
        else {
          merge()
          cl()
          spawn()
        }
      }
      function draw() {
        g.fillStyle = C.bg
        g.fillRect(0, 0, cw, ch)
        g.strokeStyle = C.grid
        for (var r = 0; r <= rows; r++) {
          g.beginPath()
          g.moveTo(0, r * cell)
          g.lineTo(cw, r * cell)
          g.stroke()
        }
        for (var c = 0; c <= cols; c++) {
          g.beginPath()
          g.moveTo(c * cell, 0)
          g.lineTo(c * cell, ch)
          g.stroke()
        }
        function bk(x, y, f) {
          g.fillStyle = f
          g.fillRect(x * cell + 1.5, y * cell + 1.5, cell - 3, cell - 3)
        }
        for (var r = 0; r < rows; r++)
          for (var c = 0; c < cols; c++) if (board[r][c]) bk(c, r, C.block)
        if (cur)
          for (var r = 0; r < cur.length; r++)
            for (var c = 0; c < cur[r].length; c++)
              if (cur[r][c] && cy + r >= 0) bk(cx + c, cy + r, C.cur)
        if (over || paused) {
          g.fillStyle = "rgba(0,0,0,.55)"
          g.fillRect(0, 0, cw, ch)
          g.fillStyle = C.text
          g.textAlign = "center"
          g.font = 'bold 22px "Fraunces",serif'
          g.fillText(over ? "game over" : "pause", cw / 2, ch / 2)
          if (over) {
            g.font = "11px JetBrains Mono,monospace"
            g.fillText("R pour rejouer", cw / 2, ch / 2 + 24)
          }
        }
      }
      spawn()
      var live = true,
        acc = 0,
        last = performance.now(),
        raf = requestAnimationFrame(loop)
      function loop(now) {
        if (!live) return
        var dt = now - last
        last = now
        if (!over && !paused) {
          acc += dt
          if (acc > 560) {
            acc = 0
            drop()
          }
        }
        draw()
        raf = requestAnimationFrame(loop)
      }
      function key(e) {
        if (!live) return
        var K = e.key
        if (
          ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].indexOf(K) >= 0
        )
          e.preventDefault()
        if (K === "r" || K === "R") {
          clear()
          score = 0
          b.querySelector(".gscore").textContent = 0
          over = false
          paused = false
          spawn()
          return
        }
        if (K === "p" || K === "P") {
          paused = !paused
          return
        }
        if (over) return
        if (K === "ArrowLeft" && !coll(cx - 1, cy, cur)) cx--
        else if (K === "ArrowRight" && !coll(cx + 1, cy, cur)) cx++
        else if (K === "ArrowDown") drop()
        else if (K === "ArrowUp") {
          var rr = rot(cur)
          if (!coll(cx, cy, rr)) cur = rr
          else if (!coll(cx - 1, cy, rr)) {
            cx--
            cur = rr
          } else if (!coll(cx + 1, cy, rr)) {
            cx++
            cur = rr
          }
        } else if (K === " ") {
          while (!coll(cx, cy + 1, cur)) cy++
          drop()
        }
      }
      document.addEventListener("keydown", key)
      return function () {
        live = false
        cancelAnimationFrame(raf)
        document.removeEventListener("keydown", key)
      }
    }
    function openTetris() {
      openWindow({ title: "tetris", build: gameTetris })
    }

    function gameRacer(b) {
      var W = 260,
        H = 440
      b.innerHTML =
        '<div class="game"><canvas width="' +
        W +
        '" height="' +
        H +
        '"></canvas><div class="ginfo"><div>SCORE</div><div class="gscore">0</div><div class="ghint">\u2190 \u2192 diriger<br>\u00e9vite les voitures<br>R rejouer</div></div></div>'
      var g = b.querySelector("canvas").getContext("2d"),
        C = {
          bg: cv_("--bg2"),
          road: cv_("--surface"),
          line: cv_("--hair"),
          car: cv_("--text"),
          enemy: cv_("--muted"),
          text: cv_("--text"),
        }
      var rW = 170,
        rX = (W - rW) / 2,
        pw = 24,
        ph = 42,
        py = H - 66,
        px = W / 2 - 12,
        en,
        scroll,
        sp,
        sc,
        over,
        spT,
        L = false,
        Rr = false
      function reset() {
        en = []
        scroll = 0
        sp = 3
        sc = 0
        over = false
        spT = 0
        px = W / 2 - 12
      }
      reset()
      function rr(x, y, w, h, r) {
        g.beginPath()
        g.moveTo(x + r, y)
        g.arcTo(x + w, y, x + w, y + h, r)
        g.arcTo(x + w, y + h, x, y + h, r)
        g.arcTo(x, y + h, x, y, r)
        g.arcTo(x, y, x + w, y, r)
        g.closePath()
      }
      function car(x, y, col) {
        g.fillStyle = col
        rr(x, y, pw, ph, 5)
        g.fill()
        g.fillStyle = C.bg
        g.fillRect(x + 4, y + 6, pw - 8, 8)
        g.fillRect(x + 4, y + ph - 14, pw - 8, 8)
      }
      var live = true,
        raf = requestAnimationFrame(loop)
      function loop() {
        if (!live) return
        if (!over) {
          scroll += sp
          sp += 0.001
          sc += sp * 0.06
          if (L) px -= 4.2
          if (Rr) px += 4.2
          px = Math.max(rX + 4, Math.min(rX + rW - pw - 4, px))
          spT -= sp
          if (spT <= 0) {
            spT = 130 + Math.random() * 120
            en.push({ x: rX + 8 + Math.random() * (rW - pw - 16), y: -50 })
          }
          en.forEach(function (e) {
            e.y += sp * 1.05
          })
          en = en.filter(function (e) {
            return e.y < H + 60
          })
          en.forEach(function (e) {
            if (
              e.y + ph > py &&
              e.y < py + ph &&
              e.x + pw > px &&
              e.x < px + pw
            )
              over = true
          })
        }
        g.fillStyle = C.bg
        g.fillRect(0, 0, W, H)
        g.fillStyle = C.road
        g.fillRect(rX, 0, rW, H)
        g.strokeStyle = C.line
        g.lineWidth = 3
        g.setLineDash([18, 18])
        g.lineDashOffset = -(scroll % 36)
        g.beginPath()
        g.moveTo(W / 2, 0)
        g.lineTo(W / 2, H)
        g.stroke()
        g.setLineDash([])
        g.fillStyle = C.line
        g.fillRect(rX - 2, 0, 2, H)
        g.fillRect(rX + rW, 0, 2, H)
        en.forEach(function (e) {
          car(e.x, e.y, C.enemy)
        })
        car(px, py, C.car)
        b.querySelector(".gscore").textContent = Math.floor(sc)
        if (over) {
          g.fillStyle = "rgba(0,0,0,.6)"
          g.fillRect(0, 0, W, H)
          g.fillStyle = C.text
          g.textAlign = "center"
          g.font = 'bold 22px "Fraunces",serif'
          g.fillText("crash !", W / 2, H / 2)
          g.font = "11px JetBrains Mono,monospace"
          g.fillText("R pour rejouer", W / 2, H / 2 + 24)
        }
        raf = requestAnimationFrame(loop)
      }
      function kd(e) {
        if (!live) return
        if (e.key === "ArrowLeft") {
          L = true
          e.preventDefault()
        } else if (e.key === "ArrowRight") {
          Rr = true
          e.preventDefault()
        } else if ((e.key === "r" || e.key === "R") && over) reset()
      }
      function ku(e) {
        if (e.key === "ArrowLeft") L = false
        else if (e.key === "ArrowRight") Rr = false
      }
      document.addEventListener("keydown", kd)
      document.addEventListener("keyup", ku)
      return function () {
        live = false
        cancelAnimationFrame(raf)
        document.removeEventListener("keydown", kd)
        document.removeEventListener("keyup", ku)
      }
    }
    function openRacer() {
      openWindow({ title: "racer", build: gameRacer })
    }

    function gamePixel(b) {
      b.innerHTML =
        '<div class="pixwrap"><div class="pixhead"><span>aligne le bloc \u00b7 <b class="pixscore">0</b> shipp\u00e9s</span><span class="pixoff">x:0 y:0</span></div><div class="pixstage"><div class="pixtarget"></div><div class="pixblock"></div></div><div class="pixhint">glisse \u00b7 fl\u00e8ches = 1px \u00b7 <b>entr\u00e9e</b> = ship</div></div>'
      var stage = b.querySelector(".pixstage"),
        target = b.querySelector(".pixtarget"),
        block = b.querySelector(".pixblock"),
        offEl = b.querySelector(".pixoff"),
        scoreEl = b.querySelector(".pixscore")
      var tx, ty, bx, by, score = 0, tol = 4, live = true, ready = false
      function round() {
        setTimeout(function () {
          var sw = stage.clientWidth,
            sh = stage.clientHeight
          tx = Math.round(sw / 2 - 30)
          ty = Math.round(sh / 2 - 30)
          target.style.left = tx + "px"
          target.style.top = ty + "px"
          bx = clamp(tx + (Math.random() * 130 - 65), 0, sw - 60)
          by = clamp(ty + (Math.random() * 90 - 45), 0, sh - 60)
          ready = true
          place()
        }, 20)
      }
      function place() {
        if (!ready) return
        block.style.left = Math.round(bx) + "px"
        block.style.top = Math.round(by) + "px"
        var dx = Math.round(bx - tx),
          dy = Math.round(by - ty)
        offEl.textContent = "x:" + dx + " y:" + dy
        block.classList.toggle("near", Math.abs(dx) <= tol && Math.abs(dy) <= tol)
      }
      function ship() {
        if (!ready) return
        if (Math.abs(bx - tx) <= tol && Math.abs(by - ty) <= tol) {
          score++
          scoreEl.textContent = score
          block.classList.add("shipped")
          setTimeout(function () {
            block.classList.remove("shipped")
            round()
          }, 240)
        } else {
          block.classList.add("shake")
          setTimeout(function () {
            block.classList.remove("shake")
          }, 300)
        }
      }
      var drag = false, ox, oy
      block.addEventListener("pointerdown", function (e) {
        drag = true
        var r = stage.getBoundingClientRect()
        ox = e.clientX - r.left - bx
        oy = e.clientY - r.top - by
        try {
          block.setPointerCapture(e.pointerId)
        } catch (_) {}
      })
      block.addEventListener("pointermove", function (e) {
        if (!drag) return
        var r = stage.getBoundingClientRect()
        bx = clamp(e.clientX - r.left - ox, 0, stage.clientWidth - 60)
        by = clamp(e.clientY - r.top - oy, 0, stage.clientHeight - 60)
        place()
      })
      block.addEventListener("pointerup", function () {
        drag = false
      })
      function key(e) {
        if (!live || !ready) return
        if (
          ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter"].indexOf(
            e.key
          ) < 0
        )
          return
        e.preventDefault()
        if (e.key === "ArrowLeft") bx--
        else if (e.key === "ArrowRight") bx++
        else if (e.key === "ArrowUp") by--
        else if (e.key === "ArrowDown") by++
        else if (e.key === "Enter") {
          ship()
          return
        }
        place()
      }
      document.addEventListener("keydown", key)
      round()
      return function () {
        live = false
        document.removeEventListener("keydown", key)
      }
    }
    function openPixel() {
      openWindow({ title: "pixel-perfect", build: gamePixel })
    }

    function gameSolitaire(b) {
      var SU = [
          { s: "\u2660", c: "b" },
          { s: "\u2665", c: "r" },
          { s: "\u2666", c: "r" },
          { s: "\u2663", c: "b" },
        ],
        RK = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
        deck = []
      SU.forEach(function (su, si) {
        RK.forEach(function (r, ri) {
          deck.push({ su: si, rk: ri, up: false })
        })
      })
      for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)),
          t = deck[i]
        deck[i] = deck[j]
        deck[j] = t
      }
      var tab = [[], [], [], [], [], [], []],
        fnd = [[], [], [], []],
        stock = [],
        waste = [],
        di = 0
      for (var c = 0; c < 7; c++)
        for (var n = 0; n <= c; n++) {
          var card = deck[di++]
          card.up = n === c
          tab[c].push(card)
        }
      while (di < deck.length) {
        var k = deck[di++]
        k.up = false
        stock.push(k)
      }
      var sel = null
      b.innerHTML =
        '<div class="sol"><div class="soltop"><div class="solslot" data-z="stock"></div><div class="solslot" data-z="waste"></div><div class="solspacer"></div><div class="solslot" data-z="found" data-f="0"></div><div class="solslot" data-z="found" data-f="1"></div><div class="solslot" data-z="found" data-f="2"></div><div class="solslot" data-z="found" data-f="3"></div></div><div class="soltab"></div><div class="solmsg"></div></div>'
      var solRoot = b.querySelector(".sol"),
        tabEl = b.querySelector(".soltab"),
        msg = b.querySelector(".solmsg")
      function face(c) {
        return RK[c.rk] + SU[c.su].s
      }
      function canF(c, f) {
        var p = fnd[f]
        if (!p.length) return c.rk === 0
        var t = p[p.length - 1]
        return t.su === c.su && c.rk === t.rk + 1
      }
      function canT(c, col) {
        var p = tab[col]
        if (!p.length) return c.rk === 12
        var t = p[p.length - 1]
        if (!t.up) return false
        return SU[t.su].c !== SU[c.su].c && t.rk === c.rk + 1
      }
      function render() {
        solRoot.querySelector('[data-z="stock"]').innerHTML = stock.length
          ? '<div class="card down" style="position:static"></div>'
          : "\u21bb"
        var wa = solRoot.querySelector('[data-z="waste"]')
        wa.innerHTML = ""
        if (waste.length) {
          var w = waste[waste.length - 1]
          wa.innerHTML =
            '<div class="card ' +
            (SU[w.su].c === "r" ? "red" : "") +
            (sel && sel.from === "waste" ? " sel" : "") +
            '" style="position:static" data-z="wastecard">' +
            face(w) +
            "</div>"
        }
        for (var f = 0; f < 4; f++) {
          var fe = solRoot.querySelector('[data-z="found"][data-f="' + f + '"]'),
            p = fnd[f]
          fe.innerHTML = p.length
            ? '<div class="card ' +
              (SU[p[p.length - 1].su].c === "r" ? "red" : "") +
              '" style="position:static">' +
              face(p[p.length - 1]) +
              "</div>"
            : SU[f].s
        }
        tabEl.innerHTML = ""
        for (var c = 0; c < 7; c++) {
          ;(function (c) {
            var col = document.createElement("div")
            col.className = "solcol"
            col.dataset.z = "col"
            col.dataset.col = c
            tab[c].forEach(function (card, idx) {
              var d = document.createElement("div")
              d.className =
                "card " +
                (card.up
                  ? SU[card.su].c === "r"
                    ? "red"
                    : ""
                  : "down") +
                (sel && sel.from === "tab" && sel.col === c && idx >= sel.idx
                  ? " sel"
                  : "")
              d.style.top = idx * 18 + "px"
              if (card.up) {
                d.textContent = face(card)
                d.dataset.z = "tabcard"
                d.dataset.col = c
                d.dataset.idx = idx
              }
              col.appendChild(d)
            })
            tabEl.appendChild(col)
          })(c)
        }
        if (
          fnd.every(function (p) {
            return p.length === 13
          })
        )
          msg.textContent = "\uD83C\uDF89 gagn\u00e9 !"
      }
      function deal() {
        if (stock.length) {
          var c = stock.pop()
          c.up = true
          waste.push(c)
        } else {
          while (waste.length) {
            var w = waste.pop()
            w.up = false
            stock.push(w)
          }
        }
        sel = null
      }
      function flip(col) {
        var p = tab[col]
        if (p.length && !p[p.length - 1].up) p[p.length - 1].up = true
      }
      function autoF(card, fromTab, col) {
        for (var f = 0; f < 4; f++)
          if (canF(card, f)) {
            fnd[f].push(card)
            if (fromTab) {
              tab[col].pop()
              flip(col)
            } else waste.pop()
            return true
          }
        return false
      }
      function move(type, col, f) {
        var moving,
          fromTab = sel.from === "tab"
        if (sel.from === "waste") moving = [waste[waste.length - 1]]
        else moving = tab[sel.col].slice(sel.idx)
        if (type === "found") {
          if (moving.length !== 1 || !canF(moving[0], f)) return false
          fnd[f].push(moving[0])
          if (fromTab) {
            tab[sel.col].pop()
            flip(sel.col)
          } else waste.pop()
          return true
        }
        if (!canT(moving[0], col)) return false
        moving.forEach(function (m) {
          tab[col].push(m)
        })
        if (fromTab) {
          tab[sel.col].splice(sel.idx)
          flip(sel.col)
        } else waste.pop()
        return true
      }
      solRoot.addEventListener("click", function (e) {
        msg.textContent = ""
        var el = e.target.closest("[data-z]")
        if (!el) return
        var z = el.dataset.z
        if (z === "stock") {
          deal()
          render()
          return
        }
        if (z === "wastecard") {
          sel = sel ? null : { from: "waste" }
          render()
          return
        }
        if (z === "tabcard") {
          var col = +el.dataset.col,
            idx = +el.dataset.idx
          if (!sel || (sel.from === "tab" && sel.col === col)) {
            sel = { from: "tab", col: col, idx: idx }
            render()
            return
          }
          if (move("tab", col)) sel = null
          else sel = { from: "tab", col: col, idx: idx }
          render()
          return
        }
        if (z === "col") {
          if (sel && move("tab", +el.dataset.col)) {
            sel = null
            render()
          }
          return
        }
        if (z === "found") {
          if (sel && move("found", null, +el.dataset.f)) {
            sel = null
            render()
          }
          return
        }
      })
      solRoot.addEventListener("dblclick", function (e) {
        var el = e.target.closest("[data-z]")
        if (!el) return
        if (el.dataset.z === "tabcard") {
          var col = +el.dataset.col,
            idx = +el.dataset.idx
          if (idx === tab[col].length - 1 && autoF(tab[col][idx], true, col)) {
            sel = null
            render()
          }
        } else if (
          el.dataset.z === "wastecard" &&
          waste.length &&
          autoF(waste[waste.length - 1], false)
        ) {
          sel = null
          render()
        }
      })
      render()
      return function () {}
    }
    function openSolitaire() {
      openWindow({ title: "solitaire", build: gameSolitaire })
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
        k: ["bonjour", "salut", "hello", "coucou", "hey", "yo"],
        a: "Salut ! \uD83D\uDC4B Je suis H\u00e9l\u00e8ne (enfin, mon avatar). Tu peux me demander ce que tu veux sur mon profil, mes projets ou mes dispos.",
      },
      {
        k: ["genogy", "g\u00e9nogramme", "genogramme"],
        a: "Genogy, c'est mon b\u00e9b\u00e9 \uD83C\uDF7C : un SaaS pour cr\u00e9er des g\u00e9nogrammes cliniques en ligne. Je l'ai design\u00e9 puis vibe cod\u00e9 en solo (Claude Code + Figma) : landing, app, design system et un \u00e9diteur canvas costaud. C'est en ligne : genogy-app.com",
      },
      {
        k: ["projet", "project", "r\u00e9alisation", "portfolio", "travaill", "boss\u00e9"],
        a: "Mes projets phares : Genogy (SaaS de g\u00e9nogrammes cliniques) et Lexia (logiciel de gestion pour cabinets d'avocats), deux SaaS que j'ai design\u00e9s puis vibe cod\u00e9s en solo (je ne suis pas dev, je sais vibe coder). Plus des outils internes chez L'Or\u00e9al (R&I) et la refonte Finance & Services de Stellantis. Clique sur les frames du canvas pour les voir !",
      },
      {
        k: ["lexia", "avocat", "juridique", "cabinet", "droit", "facturation", "relance"],
        a: "Lexia, c'est mon SaaS pour cabinets d'avocats : dossiers, agenda, feuille de temps, facturation conforme, et surtout des relances + r\u00e9sum\u00e9s de dossiers g\u00e9n\u00e9r\u00e9s par IA. Design\u00e9 puis vibe cod\u00e9 en solo (Claude Code + Figma).",
      },
      {
        k: ["ia", "intelligence", "claude", "vibe", "prototyp", "mvp", "no-code", "nocode"],
        a: "L'IA est au c\u0153ur de ma m\u00e9thode : je prototype en Claude Code + Figma (MCP) et je livre un MVP cliquable sans attendre une \u00e9quipe de dev. Genogy et Lexia en sont la preuve vivante \uD83D\uDE80",
      },
      {
        k: [
          "dispo",
          "disponible",
          "cdi",
          "cdd",
          "embauche",
          "recrut",
          "poste",
          "job",
          "freelance",
          "mission",
        ],
        a: "Je suis freelance (Supermalter sur Malt \u2B50), mais ouverte au CDD, CDI ou autre si le poste est int\u00e9ressant. Mon mail : hln.margary@gmail.com \uD83D\uDE0A",
      },
      {
        k: [
          "contact",
          "mail",
          "email",
          "joindre",
          "\u00e9crire",
          "ecrire",
          "malt",
          "linkedin",
        ],
        a: "Le plus simple : hln.margary@gmail.com, ou via mon profil Malt (Supermalter \u2B50). Je r\u00e9ponds vite !",
      },
      {
        k: [
          "comp\u00e9tence",
          "competence",
          "skill",
          "sais-tu",
          "sais tu",
          "fais-tu",
          "fais tu",
          "expertise",
          "sp\u00e9ciali",
        ],
        a: "UI/UX de z\u00e9ro, refontes, design systems, audit & recherche UX, prototypes Figma pr\u00eats pour les devs\u2026 et tout le volet design \u00d7 IA / vibe coding.",
      },
      {
        k: ["loreal", "or\u00e9al", "oreal"],
        a: "Chez L'Or\u00e9al (R&I), j'ai con\u00e7u des outils internes pendant ~14 mois : parcours, interfaces, design system, en lien direct avec les devs et les PM.",
      },
      {
        k: ["stellantis", "voiture", "auto"],
        a: "Pour Stellantis, j'ai men\u00e9 la refonte du site Finance & Services : utilisabilit\u00e9, identit\u00e9 visuelle et parcours repens\u00e9s.",
      },
      {
        k: [
          "qui",
          "pr\u00e9sente",
          "presente",
          "toi",
          "parle-moi de toi",
          "ton parcours",
          "background",
        ],
        a: "Product Designer senior bas\u00e9e \u00e0 Paris. Je ne suis pas d\u00e9veloppeuse, mais je sais vibe coder : je passe du design au produit fonctionnel avec l'IA (Claude Code + Figma). C'est mon coup d'avance.",
      },
      {
        k: [
          "paris",
          "o\u00f9",
          "habite",
          "localis",
          "ville",
          "remote",
          "t\u00e9l\u00e9travail",
          "teletravail",
        ],
        a: "Je suis bas\u00e9e \u00e0 Paris, en t\u00e9l\u00e9travail la plupart du temps (et mobile pour les rencontres qui comptent).",
      },
      {
        k: [
          "passion",
          "aime",
          "hobby",
          "loisir",
          "int\u00e9r\u00eat",
          "interet",
          "centre",
        ],
        a: "En dehors du design : cuisine, voyages, Paris\u2026 et l'IA, forc\u00e9ment \uD83E\uDD16",
      },
      {
        k: ["merci", "thanks", "top", "g\u00e9nial", "genial", "cool", "parfait"],
        a: "Avec plaisir ! \u2726 Si tu veux aller plus loin, mon mail : hln.margary@gmail.com",
      },
    ]
    var FALLBACK =
      "Bonne question ! Pour \u00eatre s\u00fbre de bien y r\u00e9pondre, le mieux c'est de m'\u00e9crire directement : hln.margary@gmail.com \uD83D\uDE0A"
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
          "Salut ! \uD83D\uDC4B Je suis H\u00e9l\u00e8ne (enfin, mon avatar). Tu peux me demander : mes projets, mes outils, mes dispos\u2026",
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
      "Tes projets ?",
      "C'est quoi Genogy ?",
      "Tu utilises l'IA ?",
      "Tu es dispo ?",
      "Comment te contacter ?",
    ]
    var chipBox = $("#chatchips")
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
    setTimeout(function () {
      fitAll()
      var bo = $("#boot")
      if (bo) {
        bo.style.opacity = "0"
        setTimeout(function () {
          bo.remove()
        }, 600)
      }
    }, 900)

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
      var TRACKS = [
        { t: "Lofi maison", a: "ambiance g\u00e9n\u00e9r\u00e9e en direct", emoji: "\u2615", gen: true },
        { t: "Morceau 1", a: "colle ton fichier ici", emoji: "\uD83C\uDFA7", src: "" },
        { t: "Morceau 2", a: "colle ton fichier ici", emoji: "\uD83C\uDFB5", src: "" },
        { t: "Morceau 3", a: "colle ton fichier ici", emoji: "\uD83C\uDFB6", src: "" },
        { t: "Morceau 4", a: "colle ton fichier ici", emoji: "\uD83D\uDCBF", src: "" },
        { t: "Morceau 5", a: "colle ton fichier ici", emoji: "\uD83D\uDCFB", src: "" },
      ]
      window.HELENE_PLAYLIST = TRACKS

      function buildMusic(api) {
        var body = api.body,
          vol = 0.7,
          cur = -1,
          playing = false
        var audio = new Audio()
        audio.preload = "none"
        audio.volume = vol
        var actx, master, genTimer, genNodes
        function ensureCtx() {
          if (!actx) {
            actx = new (window.AudioContext || window.webkitAudioContext)()
            master = actx.createGain()
            master.gain.value = vol * 0.6
            master.connect(actx.destination)
          }
          if (actx.state === "suspended") actx.resume()
        }
        function startGen() {
          ensureCtx()
          var filt = actx.createBiquadFilter()
          filt.type = "lowpass"
          filt.frequency.value = 950
          filt.connect(master)
          var pad = actx.createGain()
          pad.gain.value = 0
          pad.connect(filt)
          var oscs = [130.81, 164.81, 196.0].map(function (f) {
            var o = actx.createOscillator()
            o.type = "sine"
            o.frequency.value = f
            o.connect(pad)
            o.start()
            return o
          })
          pad.gain.setTargetAtTime(0.1, actx.currentTime, 1.6)
          var scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25]
          genTimer = setInterval(function () {
            if (Math.random() < 0.62) {
              var f = scale[Math.floor(Math.random() * scale.length)]
              var o = actx.createOscillator()
              o.type = "triangle"
              o.frequency.value = f
              var g = actx.createGain()
              g.gain.value = 0
              o.connect(g)
              g.connect(filt)
              var n = actx.currentTime
              g.gain.linearRampToValueAtTime(0.16, n + 0.02)
              g.gain.exponentialRampToValueAtTime(0.0008, n + 1.4)
              o.start(n)
              o.stop(n + 1.5)
            }
          }, 650)
          genNodes = { oscs: oscs, pad: pad }
        }
        function stopGen() {
          if (genTimer) {
            clearInterval(genTimer)
            genTimer = null
          }
          if (genNodes && actx) {
            try {
              genNodes.pad.gain.setTargetAtTime(0, actx.currentTime, 0.2)
              var o = genNodes.oscs
              setTimeout(function () {
                o.forEach(function (x) {
                  try {
                    x.stop()
                  } catch (e) {}
                })
              }, 450)
            } catch (e) {}
            genNodes = null
          }
        }

        body.innerHTML =
          '<div class="swm-top"><div class="swm-cov">\u2615</div><div class="swm-meta"><div class="swm-t">\u2014</div><div class="swm-a">\u2014</div></div></div>' +
          '<div class="swm-bar"><i></i></div><div class="swm-time"><span class="swm-cur">0:00</span><span class="swm-dur">0:00</span></div>' +
          '<div class="swm-ctrl"><button class="prev" title="Pr\u00e9c\u00e9dent">&#9198;</button><button class="play" title="Lecture">&#9654;</button><button class="next" title="Suivant">&#9197;</button></div>' +
          '<div class="swm-vol"><span>\uD83D\uDD0A</span><input type="range" min="0" max="100" value="70"></div>' +
          '<div class="swm-list"></div>' +
          '<div class="swm-hint">\uD83D\uDC49 Pour mettre tes morceaux : \u00e9dite <code>window.HELENE_PLAYLIST</code> (titre, artiste, <code>src</code>) ou colle un lien audio. Le 1er est une ambiance g\u00e9n\u00e9r\u00e9e, sans fichier.</div>'
        var q = function (s) {
          return body.querySelector(s)
        }
        var cov = q(".swm-cov"),
          tEl = q(".swm-t"),
          aEl = q(".swm-a"),
          bar = q(".swm-bar"),
          fillEl = q(".swm-bar i"),
          tCur = q(".swm-cur"),
          tDur = q(".swm-dur"),
          btnPlay = q(".play"),
          L = q(".swm-list")
        function fmt(s) {
          s = Math.floor(s || 0)
          return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2)
        }
        function icon() {
          btnPlay.innerHTML = playing ? "&#10074;&#10074;" : "&#9654;"
        }
        function live(b) {
          bar.classList.toggle("live", b)
          if (b) {
            tCur.textContent = "live"
            tDur.textContent = "\u221e"
            fillEl.style.width = ""
          } else {
            tCur.textContent = "0:00"
            tDur.textContent = "0:00"
            fillEl.style.width = "0"
          }
        }
        function renderList() {
          L.innerHTML = ""
          TRACKS.forEach(function (k, i) {
            var r = el("div", "swm-row" + (i === cur ? " act" : ""))
            r.innerHTML =
              '<span class="e">' +
              k.emoji +
              '</span><span class="nm">' +
              k.t +
              " <small>" +
              k.a +
              "</small></span>"
            r.onclick = function () {
              play(i)
            }
            L.appendChild(r)
          })
        }
        function setMeta() {
          var k = TRACKS[cur]
          cov.textContent = k.emoji
          tEl.textContent = k.t
          aEl.textContent = k.a
        }
        function stopAll() {
          try {
            audio.pause()
          } catch (e) {}
          stopGen()
        }
        function play(i) {
          stopAll()
          cur = i
          var k = TRACKS[i]
          setMeta()
          renderList()
          if (k.gen) {
            live(true)
            startGen()
            playing = true
          } else if (k.src) {
            live(false)
            audio.src = k.src
            audio.currentTime = 0
            audio.play().catch(function () {})
            playing = true
          } else {
            live(false)
            aEl.textContent = "ajoute un fichier (window.HELENE_PLAYLIST)"
            playing = false
          }
          icon()
        }
        function toggle() {
          if (cur < 0) {
            play(0)
            return
          }
          var k = TRACKS[cur]
          if (playing) {
            if (k.gen) stopGen()
            else audio.pause()
            playing = false
          } else {
            if (k.gen) startGen()
            else if (k.src) audio.play().catch(function () {})
            playing = true
          }
          icon()
        }
        audio.addEventListener("timeupdate", function () {
          if (!audio.duration || bar.classList.contains("live")) return
          fillEl.style.width = (audio.currentTime / audio.duration) * 100 + "%"
          tCur.textContent = fmt(audio.currentTime)
          tDur.textContent = fmt(audio.duration)
        })
        audio.addEventListener("ended", function () {
          play((cur + 1) % TRACKS.length)
        })
        bar.addEventListener("click", function (e) {
          if (!audio.duration || bar.classList.contains("live")) return
          var r = bar.getBoundingClientRect()
          audio.currentTime =
            ((e.clientX - r.left) / r.width) * audio.duration
        })
        q(".play").onclick = toggle
        q(".prev").onclick = function () {
          play((cur <= 0 ? TRACKS.length : cur) - 1)
        }
        q(".next").onclick = function () {
          play((cur + 1) % TRACKS.length)
        }
        q(".swm-vol input").oninput = function () {
          vol = this.value / 100
          audio.volume = vol
          if (master) master.gain.value = vol * 0.6
        }
        renderList()
        cur = 0
        setMeta()
        renderList()
        api.el.__cleanup = function () {
          stopAll()
        }
      }

      // ===== MINI TENNIS =====
      function buildTennis(api) {
        var body = api.body
        body.innerHTML =
          '<div class="swt-sc">Toi <b class="me">0</b> &nbsp;\u2014&nbsp; <b class="op">0</b> Adversaire</div><canvas class="swt-c" height="150"></canvas><div class="swt-cap">\uD83C\uDFBE Roland Garros (pour de faux). \u00c7a joue tout seul, profite.</div>'
        var cv = body.querySelector("canvas"),
          ctx = cv.getContext("2d")
        var meEl = body.querySelector(".me"),
          opEl = body.querySelector(".op")
        var W,
          H,
          ball,
          pl,
          pr,
          ph,
          me = 0,
          op = 0,
          raf,
          ploff = 0,
          proff = 0,
          tk = 0
        function size() {
          cv.width = cv.clientWidth || 260
          cv.height = api.el.classList.contains("lg") ? 230 : 150
          W = cv.width
          H = cv.height
          ph = H * 0.22
          if (!ball) reset(1)
        }
        function reset(d) {
          ball = {
            x: W / 2,
            y: H / 2,
            vx: 2.3 * d,
            vy: (Math.random() * 2 - 1) * 1.7,
          }
          pl = { y: H / 2 }
          pr = { y: H / 2 }
        }
        function draw() {
          ctx.fillStyle = "#3f7d4e"
          ctx.fillRect(0, 0, W, H)
          ctx.strokeStyle = "rgba(255,255,255,.55)"
          ctx.setLineDash([5, 7])
          ctx.beginPath()
          ctx.moveTo(W / 2, 0)
          ctx.lineTo(W / 2, H)
          ctx.stroke()
          ctx.setLineDash([])
          ctx.fillStyle = "#fff"
          ctx.fillRect(7, pl.y - ph / 2, 4, ph)
          ctx.fillRect(W - 11, pr.y - ph / 2, 4, ph)
          ctx.fillStyle = "#e9ff66"
          ctx.beginPath()
          ctx.arc(ball.x, ball.y, 4, 0, 7)
          ctx.fill()
        }
        function step() {
          tk++
          if (tk % 140 === 0) {
            ploff = (Math.random() * 2 - 1) * ph * 0.9
            proff = (Math.random() * 2 - 1) * ph * 0.9
          }
          ball.x += ball.vx
          ball.y += ball.vy
          if (ball.y < 4 || ball.y > H - 4) ball.vy *= -1
          pl.y += Math.max(
            -2.5,
            Math.min(2.5, (ball.y + ploff - pl.y) * 0.1)
          )
          pr.y += Math.max(
            -2.5,
            Math.min(2.5, (ball.y + proff - pr.y) * 0.1)
          )
          if (
            ball.vx < 0 &&
            ball.x < 14 &&
            Math.abs(ball.y - pl.y) < ph / 2 + 3
          ) {
            ball.vx = Math.abs(ball.vx) + 0.06
            ball.vy += (ball.y - pl.y) * 0.05
          }
          if (
            ball.vx > 0 &&
            ball.x > W - 14 &&
            Math.abs(ball.y - pr.y) < ph / 2 + 3
          ) {
            ball.vx = -(Math.abs(ball.vx) + 0.06)
            ball.vy += (ball.y - pr.y) * 0.05
          }
          if (ball.x < -6) {
            op++
            opEl.textContent = op
            reset(1)
          }
          if (ball.x > W + 6) {
            me++
            meEl.textContent = me
            reset(-1)
          }
          draw()
          raf = requestAnimationFrame(step)
        }
        size()
        raf = requestAnimationFrame(step)
        api.el.__resize = function () {
          var w = ball ? { x: ball.x / W, y: ball.y / H } : null
          size()
          if (w && ball) {
            ball.x = w.x * W
            ball.y = w.y * H
          }
        }
        api.el.__cleanup = function () {
          cancelAnimationFrame(raf)
        }
      }

      // ===== RECETTES =====
      var RECIPES = [
        {
          e: "\uD83C\uDF4B",
          n: "P\u00e2tes au citron",
          d: "Citron, parmesan, un peu de cr\u00e8me. Le r\u00e9confort express.",
          m: "15 min \u00b7 facile",
        },
        {
          e: "\uD83C\uDF73",
          n: "Shakshuka",
          d: "Oeufs poch\u00e9s dans une sauce tomate \u00e9pic\u00e9e. Brunch parfait.",
          m: "25 min \u00b7 facile",
        },
        {
          e: "\uD83C\uDF5C",
          n: "Ramen maison",
          d: "Bouillon miso, oeuf mollet, nouilles. C\u00e2lin dans un bol.",
          m: "40 min \u00b7 moyen",
        },
        {
          e: "\uD83E\uDD58",
          n: "Risotto champignons",
          d: "Patience et louche par louche. Cr\u00e9meux garanti.",
          m: "35 min \u00b7 moyen",
        },
        {
          e: "\uD83C\uDF2E",
          n: "Tacos al pastor",
          d: "Porc marin\u00e9, ananas, coriandre. Soir\u00e9e garantie.",
          m: "30 min \u00b7 moyen",
        },
        {
          e: "\uD83C\uDF70",
          n: "G\u00e2teau au yaourt",
          d: "Le classique sans balance. Le pot de yaourt comme mesure.",
          m: "45 min \u00b7 facile",
        },
        {
          e: "\uD83E\uDD57",
          n: "Buddha bowl",
          d: "Quinoa, avocat, pois chiches r\u00f4tis, sauce tahini.",
          m: "20 min \u00b7 facile",
        },
      ]
      window.HELENE_RECETTES = RECIPES
      function buildRecettes(api) {
        var body = api.body,
          last = -1
        body.innerHTML =
          '<div class="swr-card"><div class="swr-e"></div><div class="swr-n"></div><div class="swr-d"></div><div class="swr-meta"></div><button class="swr-btn">\uD83C\uDFB2 Une autre</button></div>'
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
      function addBtn(key, icon, label, fn) {
        var b = el("button")
        b.textContent = icon
        b.title = label
        b.dataset.k = key
        b.onclick = fn
        dock.appendChild(b)
      }
      addBtn("music", "\uD83C\uDFB5", "Player musique", function () {
        makeWin("music", "\uD83C\uDFB5", "Player musique", buildMusic, {
          w: 300,
          lw: 380,
        })
      })
      addBtn("tennis", "\uD83C\uDFBE", "Mini tennis", function () {
        makeWin("tennis", "\uD83C\uDFBE", "Mini tennis", buildTennis, {
          w: 300,
          lw: 460,
        })
      })
      addBtn("reci", "\uD83C\uDF73", "Recettes", function () {
        makeWin("reci", "\uD83C\uDF73", "Recette surprise", buildRecettes, {
          w: 300,
          lw: 360,
        })
      })
      document.body.appendChild(dock)
    })()
  }, [])

  return (
    <>
      <div id="boot">
        <div className="logo">&#10038; MARGARY</div>
        <div className="load">
          <i></i>
        </div>
        <div className="sub">OUVERTURE DU FICHIER…</div>
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
          ▶ visite guidée
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

      <div id="palettes"></div>

      <div id="projModal">
        <div className="pm-back"></div>
        <div className="pm-panel"></div>
      </div>

      <div id="chatbtn" title="Une question ?">
        <span className="label">Une question ? ✦</span>
        <div id="botface" className="bot3d"></div>
      </div>
      <div id="chatpanel">
        <div className="chathead">
          <div id="bothead" className="chathav bot3d"></div>
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
