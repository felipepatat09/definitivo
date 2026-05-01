import React from "react";

const translations = {
  es: {
    badge: "⚽ Football Manager",
    season: "TEMPORADA 2024/25",
    newGame: "Nuevo Juego",
    newGameDesc: "Empieza desde cero con tu club",
    loadGame: "Cargar Juego",
    loadGameDesc: "Continúa tu partida guardada",
    editTeams: "Editar Equipos",
    editTeamsDesc: "Personaliza plantillas y estadísticas",
    version: "TACTIC GOAL v1.0 · 2024/25",
  },
  en: {
    badge: "⚽ Football Manager",
    season: "SEASON 2024/25",
    newGame: "New Game",
    newGameDesc: "Start from scratch with your club",
    loadGame: "Load Game",
    loadGameDesc: "Continue your saved game",
    editTeams: "Edit Teams",
    editTeamsDesc: "Customize squads and stats",
    version: "TACTIC GOAL v1.0 · 2024/25",
  },
};

export default function StartMenu({ onStart, language, setLanguage }) {
  const t = translations[language] || translations.es;

  const buttons = [
    {
      id: "new",
      label: t.newGame,
      desc: t.newGameDesc,
      primary: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      id: "load",
      label: t.loadGame,
      desc: t.loadGameDesc,
      primary: false,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#1D9E75" strokeWidth="2" strokeLinecap="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },
    {
      id: "edit",
      label: t.editTeams,
      desc: t.editTeamsDesc,
      primary: false,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#1D9E75" strokeWidth="2" strokeLinecap="round">
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        background: "#0a1628",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 0,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      {/* Campo de fútbol de fondo */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07 }}
        viewBox="0 0 380 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="380" height="800" fill="none" stroke="#e8f4ff" strokeWidth="2" />
        <line x1="190" y1="0" x2="190" y2="800" stroke="#e8f4ff" strokeWidth="1" />
        <circle cx="190" cy="400" r="70" fill="none" stroke="#e8f4ff" strokeWidth="1" />
        <circle cx="190" cy="400" r="5" fill="#e8f4ff" />
        <rect x="110" y="0" width="160" height="100" fill="none" stroke="#e8f4ff" strokeWidth="1" />
        <rect x="150" y="0" width="80" height="40" fill="none" stroke="#e8f4ff" strokeWidth="1" />
        <rect x="110" y="700" width="160" height="100" fill="none" stroke="#e8f4ff" strokeWidth="1" />
        <rect x="150" y="760" width="80" height="40" fill="none" stroke="#e8f4ff" strokeWidth="1" />
        <circle cx="190" cy="90" r="35" fill="none" stroke="#e8f4ff" strokeWidth="1" />
        <circle cx="190" cy="710" r="35" fill="none" stroke="#e8f4ff" strokeWidth="1" />
      </svg>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.25) 40%, rgba(10,22,40,0.9) 100%)",
        }}
      />

      {/* Contenido principal */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "56px 24px 24px",
          gap: 0,
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#1D9E75",
              marginBottom: 6,
            }}
          >
            {t.badge}
          </div>
          <h1
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 64,
              letterSpacing: 3,
              color: "#e8f4ff",
              lineHeight: 1,
              margin: 0,
              textShadow: "0 0 40px rgba(29,158,117,0.3)",
            }}
          >
            TACTIC GOAL
          </h1>
          <div style={{ fontSize: 12, color: "#5a8ab0", letterSpacing: 2, marginTop: 4 }}>
            {t.season}
          </div>
        </div>

        {/* Divisor */}
        <div
          style={{
            width: 48,
            height: 2,
            background: "#1D9E75",
            margin: "20px auto 28px",
            borderRadius: 2,
          }}
        />

        {/* Botones */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 320 }}
        >
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => onStart(btn.id)}
              style={{
                width: "100%",
                padding: "16px 20px",
                borderRadius: 10,
                border: btn.primary ? "none" : "0.5px solid #1e3a5f",
                cursor: "pointer",
                fontFamily: "'Barlow', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 14,
                textAlign: "left",
                background: btn.primary ? "#1D9E75" : "#112240",
                color: "#e8f4ff",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: btn.primary
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(29,158,117,0.12)",
                }}
              >
                {btn.icon}
              </div>
              <div style={{ flex: 1 }}>
                {btn.label}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    opacity: 0.65,
                    display: "block",
                    marginTop: 1,
                  }}
                >
                  {btn.desc}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer con selector de idioma */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 320,
          padding: "0 24px 40px",
        }}
      >
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            background: "#0d1f3c",
            border: "0.5px solid #1e3a5f",
            borderRadius: 10,
            color: "#e8f4ff",
            fontFamily: "'Barlow', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            appearance: "none",
            cursor: "pointer",
          }}
        >
          <option value="es">🇪🇸  Español</option>
          <option value="en">🇬🇧  English</option>
        </select>
        <div
          style={{
            textAlign: "center",
            fontSize: 10,
            color: "#2a4a6b",
            marginTop: 10,
            letterSpacing: 1,
          }}
        >
          {t.version}
        </div>
      </div>
    </div>
  );
}