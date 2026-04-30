import React, { useState } from "react";
import Home from "./src/screens/Home";
import Squad from "./src/screens/Squad";
import Tactics from "./src/screens/Tactics";
import League from "./src/screens/League";
import Market from "./src/screens/Market";
import StartMenu from "./src/screens/StartMenu";
import { useTranslation } from "./src/i18n";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState("es");
  const [gameStarted, setGameStarted] = useState(false);
  const t = useTranslation(lang);

  const [club] = useState({
    name: "FC Tactic Goal",
    budget: 4200000,
    division: 1,
    matchday: 12,
    points: 24,
    position: 3,
  });

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

  const screens = { home: Home, squad: Squad, tactics: Tactics, league: League, market: Market };
  const Screen = screens[screen] || Home;

  return (
    <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "#0a1628", display: "flex", flexDirection: "column" }}>
      <Screen club={club} t={t} lang={lang} setLang={setLang} navigate={setScreen} />
      <nav style={{ background: "#071020", borderTop: "0.5px solid #1e3a5f", display: "flex", justifyContent: "space-around", padding: "10px 0 16px" }}>
        {[
          { id: "home", label: t("nav.home") },
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
