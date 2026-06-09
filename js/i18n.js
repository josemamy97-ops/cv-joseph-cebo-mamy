// ============================================================
//  i18n.js — Détection automatique de la langue du navigateur
//  Langues supportées : français (fr), allemand (de), anglais (en)
// ============================================================

const translations = {
  fr: {
    nav_home:        "Accueil",
    nav_parcours:    "Parcours",
    nav_competences: "Compétences",
    job_title:       "Etudiant Informaticien",
    section_profil:  "Profil Personnel",
    label_naissance: "Né le",
    label_lieu:      "Localisation",
    valeur_lieu:     "Heusweiler, Allemagne",
    bio:             "Passionné par le développement logiciel et l'infrastructure IT.",
    section_contact: "Contact",
    label_email:     "Email",
    label_mobile:    "Mobile",
    page_parcours:       "Mon Parcours",
    section_experience:  "Expérience",
    job_titre:           "System- und Netzwerkadministrator",
    job_entreprise:      "Orange Guinée (Conakry)",
    job_date:            "09/2021 - 09/2022",
    job_tache1:          "Installation et configuration de système de communication.",
    job_tache2:          "Optimiser la couverture et les performances réseau.",
    job_tache3:          "Maintenance des infrastructures télécom.",
    job_tache4:          "Tester la qualité des transmissions de données.",
    section_formation:   "Formation",
    diplome:             "Bachelor en Electronique",
    universite:          "Université Gamal Abdel Nasser",
    diplome_date:        "Diplômé en 2021 (Guinée)",
    diplome_desc:        "Spécialisation en réseau Telecom, système de communication.",
    page_aptitudes:      "Mes Aptitudes",
    section_technique:   "Technique",
    section_langues:     "Langues",
    langue1:             "Français : Langue maternelle",
    langue2:             "Allemand : Bonnes connaissances",
    langue3:             "Anglais : Bonnes connaissances",
    section_engagements: "Engagements",
    engagements_desc:    "Football, lecture scientifique et volontariat pour l'orientation des nouveaux étudiants.",
    footer:              "Joseph Cebo Mamy - Mon CV"
  },

  de: {
    nav_home:        "Startseite",
    nav_parcours:    "Werdegang",
    nav_competences: "Kenntnisse",
    job_title:       "Informatikstudent",
    section_profil:  "Persönliches Profil",
    label_naissance: "Geboren am",
    label_lieu:      "Wohnort",
    valeur_lieu:     "Heusweiler, Deutschland",
    bio:             "Leidenschaftlich für Softwareentwicklung und IT-Infrastruktur.",
    section_contact: "Kontakt",
    label_email:     "E-Mail",
    label_mobile:    "Mobil",
    page_parcours:       "Mein Werdegang",
    section_experience:  "Berufserfahrung",
    job_titre:           "System- und Netzwerkadministrator",
    job_entreprise:      "Orange Guinée (Conakry)",
    job_date:            "09/2021 - 09/2022",
    job_tache1:          "Installation und Konfiguration von Kommunikationssystemen.",
    job_tache2:          "Optimierung der Netzabdeckung und -leistung.",
    job_tache3:          "Wartung der Telekommunikationsinfrastruktur.",
    job_tache4:          "Testen der Datenübertragungsqualität.",
    section_formation:   "Ausbildung",
    diplome:             "Bachelor in Elektronik",
    universite:          "Universität Gamal Abdel Nasser",
    diplome_date:        "Abschluss 2021 (Guinea)",
    diplome_desc:        "Spezialisierung auf Telekommunikationsnetze und Kommunikationssysteme.",
    page_aptitudes:      "Meine Kenntnisse",
    section_technique:   "Technisch",
    section_langues:     "Sprachen",
    langue1:             "Französisch : Muttersprache",
    langue2:             "Deutsch : Gute Kenntnisse",
    langue3:             "Englisch : Gute Kenntnisse",
    section_engagements: "Engagement",
    engagements_desc:    "Fußball, wissenschaftliche Lektüre und freiwillige Orientierungshilfe für neue Studierende.",
    footer:              "Joseph Cebo Mamy - Mein Lebenslauf"
  },

  en: {
    nav_home:        "Home",
    nav_parcours:    "Career",
    nav_competences: "Skills",
    job_title:       "Computer Science Student",
    section_profil:  "Personal Profile",
    label_naissance: "Born on",
    label_lieu:      "Location",
    valeur_lieu:     "Heusweiler, Germany",
    bio:             "Passionate about software development and IT infrastructure.",
    section_contact: "Contact",
    label_email:     "Email",
    label_mobile:    "Mobile",
    page_parcours:       "My Career",
    section_experience:  "Experience",
    job_titre:           "System & Network Administrator",
    job_entreprise:      "Orange Guinea (Conakry)",
    job_date:            "09/2021 - 09/2022",
    job_tache1:          "Installation and configuration of communication systems.",
    job_tache2:          "Optimizing network coverage and performance.",
    job_tache3:          "Maintenance of telecom infrastructure.",
    job_tache4:          "Testing data transmission quality.",
    section_formation:   "Education",
    diplome:             "Bachelor in Electronics",
    universite:          "Gamal Abdel Nasser University",
    diplome_date:        "Graduated in 2021 (Guinea)",
    diplome_desc:        "Specialization in telecom networks and communication systems.",
    page_aptitudes:      "My Skills",
    section_technique:   "Technical",
    section_langues:     "Languages",
    langue1:             "French : Native language",
    langue2:             "German : Good knowledge",
    langue3:             "English : Good knowledge",
    section_engagements: "Commitments",
    engagements_desc:    "Football, scientific reading and volunteering to guide new students.",
    footer:              "Joseph Cebo Mamy - My Resume"
  }
}

// ── Détecte la langue : priorité au choix manuel, sinon navigateur ──
function detectLang() {
  const saved = localStorage.getItem('preferred_lang')
  if (saved && translations[saved]) return saved

  const browserLang = (navigator.language || 'fr').slice(0, 2).toLowerCase()
  return translations[browserLang] ? browserLang : 'fr'
}

// ── Applique les traductions sur tous les [data-i18n] ──
function applyTranslations() {
  const lang = detectLang()
  const t = translations[lang]

  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    if (t[key]) el.textContent = t[key]
  })

  // Met en surbrillance le bouton de langue actif
  document.querySelectorAll('[data-lang]').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.remove('btn-outline-warning')
      btn.classList.add('btn-warning', 'text-dark')
    } else {
      btn.classList.remove('btn-warning', 'text-dark')
      btn.classList.add('btn-outline-warning')
    }
  })
}

// ── Change la langue manuellement et recharge ──
function setLang(lang) {
  if (!translations[lang]) return
  localStorage.setItem('preferred_lang', lang)
  applyTranslations() // applique sans recharger la page
}

// ── Initialisation au chargement ──
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations()

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')))
  })
})
