import React, { useState } from "react";

const initialTeams = [
  { id: 1,  name: "Real Madrid",       pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 2,  name: "FC Barcelona",      pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 3,  name: "UD Las Palmas",     pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: true  },
  { id: 4,  name: "Atlético Madrid",   pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 5,  name: "Athletic Club",     pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 6,  name: "Villarreal CF",     pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 7,  name: "Real Sociedad",     pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 8,  name: "Real Betis",        pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 9,  name: "Sevilla FC",        pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 10, name: "Rayo Vallecano",    pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 11, name: "Getafe CF",         pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 12, name: "Celta de Vigo",     pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 13, name: "Osasuna",           pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 14, name: "Girona FC",         pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 15, name: "Deportivo Alavés",  pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 16, name: "Valencia CF",       pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 17, name: "Espanyol",          pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 18, name: "RCD Mallorca",      pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 19, name: "CD Leganés",        pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
  { id: 20, name: "Real Valladolid",   pts: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, player: false },
];

export default function League({ navigate }) {
  const [teams] = useState([...initialTeams].sort((a, b) => b.pts - a.pts));
  const [tab, setTab] = useState("tabla");

  const positionColor = (i) => {
    if (i < 4) return "#1D9E75";
    if (i < 6) return "#185FA5";
    if (i < 7) return "#5DCAA5";
    if (i >= 17) return "#993C1D";
    return "#5a8ab0";
  };

  return (
    <div style={{ flex: 1, overflowY: "auto", background: "#0a1628" }}>
      {/* Header */}
      <div
        style={{
          background: "#0d1f3c",
          padding: "16px 20px",
          borderBottom: "0.5px solid #1e3a5f",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button
          onClick={() => navigate("home")}
          style={{ background: "none", border: "none", color: "#5a8ab0", fontSize: 20, cursor: "pointer", padding: 0 }}
        >
          ←
        </button>
        <h1 style={{ fontSize: 18, fontWeight: 500, color: "#e8f4ff", margin: 0 }}>La Liga</h1>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "0.5px solid #1e3a5f", background: "#0d1f3c" }}>
        {["tabla", "resultados"].map((tb) => (
          <button
            key={tb}
            onClick={() => setTab(tb)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              borderBottom: tab === tb ? "2px solid #1D9E75" : "2px solid transparent",
              color: tab === tb ? "#1D9E75" : "#5a8ab0",
              padding: "12px 0",
              fontSize: 13,
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {tb}
          </button>
        ))}
      </div>

      {tab === "tabla" && (
        <div style={{ padding: 16 }}>
          {/* Cabecera de tabla */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "24px 1fr 28px 28px 28px 28px 28px 32px",
              gap: 2,
              padding: "6px 8px",
              marginBottom: 4,
            }}
          >
            {["#", "Equipo", "PJ", "PG", "PE", "PP", "GD", "Pts"].map((h) => (
              <span
                key={h}
                style={{ fontSize: 10, color: "#5a8ab0", textAlign: h !== "Equipo" ? "center" : "left" }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Filas */}
          {teams.map((team, i) => (
            <div
              key={team.id}
              style={{
                display: "grid",
                gridTemplateColumns: "24px 1fr 28px 28px 28px 28px 28px 32px",
                gap: 2,
                padding: "9px 8px",
                background: team.player
                  ? "#112240"
                  : i % 2 === 0
                  ? "rgba(255,255,255,0.02)"
                  : "transparent",
                borderRadius: 6,
                marginBottom: 1,
                border: team.player ? "0.5px solid #1D9E75" : "0.5px solid transparent",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 11, color: positionColor(i), fontWeight: 500, textAlign: "center" }}>
                {i + 1}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: team.player ? "#1D9E75" : "#e8f4ff",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {team.name}
              </span>
              <span style={{ fontSize: 11, color: "#a0c4e0", textAlign: "center" }}>{team.pg + team.pe + team.pp}</span>
              <span style={{ fontSize: 11, color: "#a0c4e0", textAlign: "center" }}>{team.pg}</span>
              <span style={{ fontSize: 11, color: "#a0c4e0", textAlign: "center" }}>{team.pe}</span>
              <span style={{ fontSize: 11, color: "#a0c4e0", textAlign: "center" }}>{team.pp}</span>
              <span style={{ fontSize: 11, color: "#a0c4e0", textAlign: "center" }}>{team.gf - team.gc}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#e8f4ff", textAlign: "center" }}>{team.pts}</span>
            </div>
          ))}

          {/* Leyenda */}
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { color: "#1D9E75", label: "Champions League (1°–4°)" },
              { color: "#185FA5", label: "Europa League (5°–6°)" },
              { color: "#5DCAA5", label: "Conference League (7°)" },
              { color: "#993C1D", label: "Descenso (18°–20°)" },
            ].map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
                <span style={{ fontSize: 11, color: "#5a8ab0" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "resultados" && (
        <div style={{ padding: 32, textAlign: "center" }}>
          <p style={{ fontSize: 14, color: "#5a8ab0" }}>Aún no se ha jugado ningún partido.</p>
          <p style={{ fontSize: 12, color: "#3a5a7a" }}>¡Juega tu primer partido para ver los resultados aquí!</p>
        </div>
      )}
    </div>
  );
}