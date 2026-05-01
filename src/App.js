import React, { useState } from "react";
import Home from "./src/screens/Home";
import Squad from "./src/screens/Squad";
import Tactics from "./src/screens/Tactics";
import League from "./src/screens/League";
import Market from "./src/screens/Market";
import StartMenu from "./src/screens/StartMenu";
import { useTranslation } from "./src/i18n";
import MatchEngine from "./src/screens/MatchEngine";

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
  { id: "r32", label: "Dieciseisavos", legs: 1 },
  { id: "r16", label: "Octavos", legs: 1 },
  { id: "qf", label: "Cuartos", legs: 1 },
  { id: "sf", label: "Semifinal", legs: 2 },
  { id: "final", label: "Final", legs: 1 },
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
  if (division === 1 && position >= 18)
    return { action: "relegate", newDivision: 2, msg: "¡Descenso a Segunda División!" };

  if (division === 2 && position <= 2)
    return { action: "promote", newDivision: 1, msg: "¡Ascenso a Primera División!" };

  if (division === 2 && position >= 21)
    return { action: "relegate", newDivision: 3, msg: "¡Descenso a Tercera División!" };

  if (division === 3 && position <= 2)
    return { action: "promote", newDivision: 2, msg: "¡Ascenso a Segunda División!" };

  return null;
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState("es");
  const [gameStarted, setGameStarted] = useState(false);
  const t = useTranslation(lang);

  const [season, setSeason] = useState(1);
  const [club, setClub] = useState(initialClub);
  const [calendar, setCalendar] = useState(() =>
    buildSeasonCalendar(initialClub.division)
  );

  const [seasonSummary, setSeasonSummary] = useState(null);
  const [players, setPlayers] = useState([]); // 🔥 SIEMPRE ARRAY
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
    setSeason((s) => s + 1);

    setClub((prev) => ({
      ...prev,
      division: newDivision,
      points: 0,
      position: 1,
    }));

    setCalendar(buildSeasonCalendar(newDivision));

    if (currentPlayers) {
      setPlayers(currentPlayers.map((p) => ({ ...p, age: p.age + 1 })));
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

  const screens = {
    home: Home,
    squad: Squad,
    tactics: Tactics,
    league: League,
    market: Market,
    match: MatchEngine,
  };

  const Screen = screens[screen] || Home;

  return (
    <div
      style={{
        maxWidth: 390,
        margin: "0 auto",
        minHeight: "100vh",
        background: "#0a1628",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {seasonSummary && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            style={{
              background: "#112240",
              borderRadius: 16,
              padding: 24,
              width: "100%",
              maxWidth: 340,
              border: "0.5px solid #1D9E75",
            }}
          >
            <p style={{ fontSize: 11, color: "#5a8ab0" }}>Fin de temporada</p>
            <p style={{ fontSize: 22, color: "#e8f4ff" }}>
              Temporada {seasonSummary.season}
            </p>

            <button
              onClick={() => setSeasonSummary(null)}
              style={{
                width: "100%",
                background: "#1D9E75",
                border: "none",
                color: "#fff",
                padding: "12px 0",
                borderRadius: 10,
              }}
            >
              Siguiente temporada
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
        externalPlayers={players || []}  // 🔥 FIX CLAVE
        t={t}
        lang={lang}
        setLang={setLang}
        navigate={setScreen}
        formation={formation}
        setFormation={setFormation}
        mentality={mentality}
        setMentality={setMentality}
      />

      <nav
        style={{
          background: "#071020",
          borderTop: "0.5px solid #1e3a5f",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0 16px",
        }}
      >
        {[
          { id: "home", label: t("nav.home") },
          { id: "market", label: t("nav.market") },
          { id: "league", label: t("nav.league") },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setScreen(item.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: screen === item.id ? "#1D9E75" : "#5a8ab0",
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}