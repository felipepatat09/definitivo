import React, { useState } from "react";
import Home        from "./src/screens/Home.jsx";
import Squad       from "./src/screens/Squad.jsx";
import Tactics     from "./src/screens/Tactics.jsx";
import League      from "./src/screens/League.jsx";
import Market      from "./src/screens/Market.jsx";
import StartMenu   from "./src/screens/StartMenu.jsx";
import MatchEngine from "./src/screens/MacthEngine.jsx";
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
        type: "cup",
        round: round.id,
        roundLabel: round.label,
        leg,
        played: false,
        result: null,
        eliminated: false,
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

export default function App() {
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState("es");
  const [gameStarted, setGameStarted] = useState(false);
  const t = useTranslation(lang);

  const [season, setSeason] = useState(1);
  const [club, setClub] = useState(initialClub);
  const [calendar, setCalendar] = useState(() => buildSeasonCalendar(initialClub.division));
  const [seasonSummary, setSeasonSummary] = useState(null);
  const [players, setPlayers] = useState(null);
  const [formation, setFormation] = useState("4-4-2");
  const [mentality, setMentality] = useState("equilibrado");

  const handleNextSeason = (currentPlayers) => {
    const promoRel = checkPromoRelegation(club.division, club.position);
    const europe = getEuropeanCompetition(club.division, club.position);
    const newDivision = promoRel ? promoRel.newDivision : club.division;

    const summary = {
      season,
      division: DIVISIONS[club.division],
      position: club.position,
      points: club.points,
      promoRel,
      europe,
      newDivision,
    };

    setSeasonSummary(summary);
    setSeason(s => s + 1);
    setClub(prev => ({
      ...prev,
      division: newDivision,
      points: 0,
      position: 1,
    }));
    setCalendar(buildSeasonCalendar(newDivision));

    if (currentPlayers) {
      setPlayers(currentPlayers.map(p => ({ ...p, age: p.age + 1 })));
    }
  };

  if (!gameStarted) {
    return (
      <StartMenu
        onStart={(action) => {
          if (action === "new" || action === "load") setGameStarted(true);
        }}
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
                <p style={{ fontSize: 14, fontWeight: 500, color: seasonSummary.promoRel.action === "promote" ? "#1D9E75" : "#e74c3c", margin: 0 }}>
                  {seasonSummary.promoRel.msg}
                </p>
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

            <button
              onClick={() => setSeasonSummary(null)}
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
      />

      <nav style={{ background: "#071020", borderTop: "0.5px solid #1e3a5f", display: "flex", justifyContent: "space-around", padding: "10px 0 16px" }}>
        {[
          { id: "home",   label: t("nav.home") },
          { id: "market", label: t("nav.market") },
          { id: "league", label: t("nav.league") },
        ].map(item => (
          <button key={item.id} onClick={() => setScreen(item.id)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ width: 20, height: 3, borderRadius: 2, background: screen === item.id ? "#1D9E75" : "#1e3a5f" }} />
            <span style={{ fontSize: 10, color: screen === item.id ? "#1D9E75" : "#5a8ab0" }}>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}