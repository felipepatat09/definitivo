const translations = {
  es: {
    "nav.home": "Inicio", "nav.market": "Mercado", "nav.league": "Liga",
    "home.season": "Temporada 2024/25", "home.position": "Posición",
    "home.points": "Puntos", "home.budget": "Presupuesto",
    "home.playMatch": "Jugar partido", "home.squad": "Plantilla",
    "home.tactics": "Tácticas", "home.standings": "Clasificación",
    "home.division": "División", "home.matchday": "Jornada",
  },
  en: {
    "nav.home": "Home", "nav.market": "Market", "nav.league": "League",
    "home.season": "Season 2024/25", "home.position": "Position",
    "home.points": "Points", "home.budget": "Budget",
    "home.playMatch": "Play match", "home.squad": "Squad",
    "home.tactics": "Tactics", "home.standings": "Standings",
    "home.division": "Division", "home.matchday": "Matchday",
  }
};

export function useTranslation(lang) {
  return (key) => translations[lang]?.[key] ?? key;
}