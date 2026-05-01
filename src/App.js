import React, { useState } from "react";
import Home        from "./src/screens/Home.jsx";
import Squad       from "./src/screens/Squad.jsx";
import Tactics     from "./src/screens/Tactics.jsx";
import League      from "./src/screens/League.jsx";
import Market      from "./src/screens/Market.jsx";
import StartMenu   from "./src/screens/StartMenu.jsx";
// ✅ Correcto
// ✅ Correcto
import MatchEngine from './src/screens/MatchEngine';
import { useTranslation } from "./src/i18n.js";

const DIVISIONS = { 1: "Primera División", 2: "Segunda División", 3: "Tercera División" };
const LEAGUE_MATCHES = 38;

const initialClub = {
  name: "FC Tactic Goal",
  budget: 4200000,
  division: 2,
  points: 0,
  position: 1,
};

const CUP_ROUNDS = [
  { id: "r32",   label: "Dieciseisavos",  legs: 1 },
  { id: "r16",   label: "Octavos",        legs: 1 },
  { id: "qf",    label: "Cuartos",        legs: 1 },
  { id: "sf",    label: "Semifinal",      legs: 2 },
  { id: "final", label: "Final",          legs: 1 },
];

function buildSeasonCalendar(division) {
  const calendar = [];
  for (let i = 1; i <= LEAGUE_MATCHES; i++) {
    calendar.push({ type: "league", matchday: i, played: false, result: null });
  }
  CUP_ROUNDS.forEach(round => {
    for (let leg = 1; leg <= round.legs; leg++) {
      calendar.push({
        type: "cup", round: round.id, roundLabel: round.label,
        leg, played: false, result: null, eliminated: false,
      });
    }
  });
  return calendar;
}

function getEuropeanCompetition(division, position) {
  if (division !== 1) return null;
  if (position <= 4) return "champions";
  if (position <= 6) return "europa";
  if (position <= 7) return "conference";
  return null;
}

function checkPromoRelegation(division, position) {
  if (division === 1 && position >= 18) return { action: "relegate", newDivision: 2, msg: "¡Descenso a Segunda División!" };
  if (division === 2 && position <= 2)  return { action: "promote",  newDivision: 1, msg: "¡Ascenso a Primera División!" };
  if (division === 2 && position >= 21) return { action: "relegate", newDivision: 3, msg: "¡Descenso a Tercera División!" };
  if (division === 3 && position <= 2)  return { action: "promote",  newDivision: 2, msg: "¡Ascenso a Segunda División!" };
  return null;
}

const initialPlayers = [
  { id: 1,  name: "Carlos Ruiz",      pos: "POR", speed: 55, reflexes: 74, stretching: 72, saque: 48, positioning: 70, saves: 75 },
  { id: 2,  name: "Alberto Gómez",    pos: "POR", speed: 50, reflexes: 68, stretching: 65, saque: 44, positioning: 66, saves: 70 },
  { id: 3,  name: "Marcos Gil",       pos: "DEF", rhythm: 65, shooting: 30, passing: 55, defense: 78, dribbling: 52, physical: 74 },
  { id: 4,  name: "David Sanz",       pos: "DEF", rhythm: 60, shooting: 25, passing: 50, defense: 75, dribbling: 48, physical: 71 },
  { id: 5,  name: "Luis Vera",        pos: "DEF", rhythm: 68, shooting: 35, passing: 58, defense: 76, dribbling: 55, physical: 73 },
  { id: 24, name: "Álvaro Méndez",    pos: "DEF", rhythm: 62, shooting: 28, passing: 52, defense: 72, dribbling: 46, physical: 70 },
  { id: 6,  name: "Rubén Castro",     pos: "LD",  rhythm: 72, shooting: 45, passing: 65, defense: 72, dribbling: 68, physical: 70 },
  { id: 7,  name: "Iván Molina",      pos: "LD",  rhythm: 68, shooting: 40, passing: 62, defense: 70, dribbling: 64, physical: 68 },
  { id: 8,  name: "Fernando Díaz",    pos: "LI",  rhythm: 74, shooting: 46, passing: 66, defense: 71, dribbling: 70, physical: 69 },
  { id: 9,  name: "Tomás Reyes",      pos: "LI",  rhythm: 66, shooting: 38, passing: 60, defense: 68, dribbling: 62, physical: 67 },
  { id: 10, name: "Javier Cano",      pos: "MCD", rhythm: 70, shooting: 50, passing: 72, defense: 78, dribbling: 60, physical: 76 },
  { id: 11, name: "Pablo Ortega",     pos: "MCD", rhythm: 66, shooting: 45, passing: 68, defense: 75, dribbling: 55, physical: 74 },
  { id: 12, name: "Andrés Mora",      pos: "MC",  rhythm: 72, shooting: 60, passing: 78, defense: 60, dribbling: 70, physical: 68 },
  { id: 13, name: "Sergio Leal",      pos: "MC",  rhythm: 70, shooting: 58, passing: 80, defense: 58, dribbling: 72, physical: 66 },
  { id: 25, name: "Samuel Ramos",     pos: "MC",  rhythm: 64, shooting: 52, passing: 70, defense: 54, dribbling: 62, physical: 64 },
  { id: 15, name: "Adrián Fuentes",   pos: "MCO", rhythm: 74, shooting: 72, passing: 84, defense: 42, dribbling: 80, physical: 62 },
  { id: 16, name: "Nicolás Peña",     pos: "MCO", rhythm: 70, shooting: 68, passing: 80, defense: 38, dribbling: 76, physical: 60 },
  { id: 26, name: "Gonzalo Prieto",   pos: "MCO", rhythm: 68, shooting: 64, passing: 76, defense: 36, dribbling: 72, physical: 58 },
  { id: 17, name: "Raúl Nieto",       pos: "EI",  rhythm: 86, shooting: 72, passing: 68, defense: 32, dribbling: 84, physical: 68 },
  { id: 18, name: "Óscar Navarro",    pos: "EI",  rhythm: 82, shooting: 68, passing: 64, defense: 28, dribbling: 80, physical: 64 },
  { id: 19, name: "Diego Flores",     pos: "ED",  rhythm: 84, shooting: 70, passing: 66, defense: 30, dribbling: 86, physical: 66 },
  { id: 20, name: "Héctor Vargas",    pos: "ED",  rhythm: 80, shooting: 66, passing: 62, defense: 26, dribbling: 82, physical: 62 },
  { id: 21, name: "Miguel Torres",    pos: "DC",  rhythm: 82, shooting: 88, passing: 58, defense: 22, dribbling: 74, physical: 82 },
  { id: 22, name: "Cristian Blanco",  pos: "DC",  rhythm: 78, shooting: 84, passing: 54, defense: 20, dribbling: 70, physical: 80 },
  { id: 23, name: "Pedro Ríos",       pos: "DC",  rhythm: 76, shooting: 80, passing: 52, defense: 18, dribbling: 68, physical: 78 },
  { id: 14, name: "Roberto Iglesias", pos: "DC",  rhythm: 74, shooting: 76, passing: 50, defense: 16, dribbling: 66, physical: 76 },
];

function mapPlayers(players) {
  return players.map(p => ({
    ...p,
    overall: p.pos === "POR"
      ? Math.round((p.speed + p.reflexes + p.stretching + p.saque + p.positioning + p.saves) / 6)
      : Math.round((p.rhythm||65)*0.2 + (p.shooting||65)*0.2 + (p.passing||65)*0.2 + (p.defense||65)*0.2 + (p.dribbling||65)*0.1 + (p.physical||65)*0.1),
    shooting: p.shooting || 65,
    def: p.defense || 60,
    gkStat: p.saves || p.reflexes || 75,
  }));
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState("es");
  const [gameStarted, setGameStarted] = useState(false);
  const t = useTranslation(lang);

  const [season, setSeason] = useState(1);
  const [club, setClub] = useState(initialClub);
  const [calendar, setCalendar] = useState(() => buildSeasonCalendar(initialClub.division));
  const [seasonSummary, setSeasonSummary] = useState(null);
  const [players, setPlayers] = useState(() => mapPlayers(initialPlayers));
  const [formation, setFormation] = useState("4-4-2");
  const [mentality, setMentality] = useState("equilibrado");
  const [lineup, setLineup] = useState(Array(11).fill(null));

  const handleNextSeason = (currentPlayers) => {
    const promoRel = checkPromoRelegation(club.division, club.position);
    const europe   = getEuropeanCompetition(club.division, club.position);
    const newDivision = promoRel ? promoRel.newDivision : club.division;

    setSeasonSummary({ season, division: DIVISIONS[club.division], position: club.position, points: club.points, promoRel, europe, newDivision });
    setSeason(s => s + 1);
    setClub(prev => ({ ...prev, division: newDivision, points: 0, position: 1 }));
    setCalendar(buildSeasonCalendar(newDivision));
    setLineup(Array(11).fill(null));

    if (currentPlayers) {
      setPlayers(currentPlayers.map(p => ({ ...p, age: p.age + 1 })));
    }
  };

  if (!gameStarted) {
    return (
      <StartMenu
        onStart={(action) => { if (action === "new" || action === "load") setGameStarted(true); }}
        language={lang}
        setLanguage={setLang}
      />
    );
  }

  const screens = { home: Home, squad: Squad, tactics: Tactics, league: League, market: Market, match: MatchEngine };
  const Screen = screens[screen] || Home;

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "#0a1628", display: "flex", flexDirection: "column" }}>
      {seasonSummary && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ background: "#112240", borderRadius: 16, padding: 24, width: "100%", maxWidth: 340, border: "0.5px solid #1D9E75" }}>
            <p style={{ fontSize: 11, color: "#5a8ab0", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 4px" }}>Fin de temporada</p>
            <p style={{ fontSize: 22, fontWeight: 600, color: "#e8f4ff", margin: "0 0 16px" }}>Temporada {seasonSummary.season}</p>
            <div style={{ background: "#0d1f3c", borderRadius: 10, padding: 14, marginBottom: 12 }}>
              <p style={{ fontSize: 12, color: "#5a8ab0", margin: "0 0 6px" }}>{seasonSummary.division}</p>
              <p style={{ fontSize: 14, color: "#e8f4ff", margin: "0 0 2px" }}>Posición final: <strong style={{ color: "#1D9E75" }}>{seasonSummary.position}º</strong></p>
              <p style={{ fontSize: 14, color: "#e8f4ff", margin: 0 }}>Puntos: <strong style={{ color: "#1D9E75" }}>{seasonSummary.points}</strong></p>
            </div>
            {seasonSummary.promoRel && (
              <div style={{ background: seasonSummary.promoRel.action === "promote" ? "#0e3d2a" : "#3d1010", borderRadius: 10, padding: 12, marginBottom: 12, border: `0.5px solid ${seasonSummary.promoRel.action === "promote" ? "#1D9E75" : "#c0392b"}` }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: seasonSummary.promoRel.action === "promote" ? "#1D9E75" : "#e74c3c", margin: 0 }}>{seasonSummary.promoRel.msg}</p>
              </div>
            )}
            {seasonSummary.europe && (
              <div style={{ background: "#0d1f3c", borderRadius: 10, padding: 12, marginBottom: 12, border: "0.5px solid #f39c12" }}>
                <p style={{ fontSize: 11, color: "#f39c12", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: 1 }}>Clasificado</p>
                <p style={{ fontSize: 14, color: "#e8f4ff", margin: 0 }}>
                  {seasonSummary.europe === "champions"  && "🏆 UEFA Champions League"}
                  {seasonSummary.europe === "europa"     && "🟠 UEFA Europa League"}
                  {seasonSummary.europe === "conference" && "🟢 UEFA Conference League"}
                </p>
                <p style={{ fontSize: 11, color: "#5a8ab0", margin: "4px 0 0" }}>Próximamente disponible</p>
              </div>
            )}
            <button onClick={() => setSeasonSummary(null)}
              style={{ width: "100%", background: "#1D9E75", border: "none", color: "#fff", padding: "12px 0", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
              Comenzar Temporada {seasonSummary.season + 1}
            </button>
          </div>
        </div>
      )}

      <Screen
        club={club}
        setClub={setClub}
        season={season}
        calendar={calendar}
        setCalendar={setCalendar}
        onNextSeason={handleNextSeason}
        externalPlayers={players}
        t={t}
        lang={lang}
        setLang={setLang}
        navigate={setScreen}
        formation={formation}
        setFormation={setFormation}
        mentality={mentality}
        setMentality={setMentality}
        lineup={lineup}
        setLineup={setLineup}
      />

      <nav style={{ background: "#071020", borderTop: "0.5px solid #1e3a5f", display: "flex", justifyContent: "space-around", padding: "10px 0 16px" }}>
        {[
          { id: "home",   label: t("nav.home") },
          { id: "market", label: t("nav.market") },
          { id: "league", label: t("nav.league") },
        ].map(item => (
          <button key={item.id} onClick={() => setScreen(item.id)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: screen === item.id ? "#1D9E75" : "#5a8ab0" }}>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}