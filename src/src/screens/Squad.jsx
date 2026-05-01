import React, { useState } from "react";

const initialPlayers = [
  // Porteros
  { id: 1,  name: "Carlos Ruiz",      pos: "POR", speed: 55, reflexes: 74, stretching: 72, saque: 48, positioning: 70, saves: 75 },
  { id: 2,  name: "Alberto Gómez",    pos: "POR", speed: 50, reflexes: 68, stretching: 65, saque: 44, positioning: 66, saves: 70 },

  // Defensas centrales
  { id: 3,  name: "Marcos Gil",       pos: "DEF", rhythm: 65, shooting: 30, passing: 55, defense: 78, dribbling: 52, physical: 74 },
  { id: 4,  name: "David Sanz",       pos: "DEF", rhythm: 60, shooting: 25, passing: 50, defense: 75, dribbling: 48, physical: 71 },
  { id: 5,  name: "Luis Vera",        pos: "DEF", rhythm: 68, shooting: 35, passing: 58, defense: 76, dribbling: 55, physical: 73 },
  { id: 24, name: "Álvaro Méndez",    pos: "DEF", rhythm: 62, shooting: 28, passing: 52, defense: 72, dribbling: 46, physical: 70 },

  // Laterales derechos
  { id: 6,  name: "Rubén Castro",     pos: "LD",  rhythm: 72, shooting: 45, passing: 65, defense: 72, dribbling: 68, physical: 70 },
  { id: 7,  name: "Iván Molina",      pos: "LD",  rhythm: 68, shooting: 40, passing: 62, defense: 70, dribbling: 64, physical: 68 },

  // Laterales izquierdos
  { id: 8,  name: "Fernando Díaz",    pos: "LI",  rhythm: 74, shooting: 46, passing: 66, defense: 71, dribbling: 70, physical: 69 },
  { id: 9,  name: "Tomás Reyes",      pos: "LI",  rhythm: 66, shooting: 38, passing: 60, defense: 68, dribbling: 62, physical: 67 },

  // Mediocampistas defensivos
  { id: 10, name: "Javier Cano",      pos: "MCD", rhythm: 70, shooting: 50, passing: 72, defense: 78, dribbling: 60, physical: 76 },
  { id: 11, name: "Pablo Ortega",     pos: "MCD", rhythm: 66, shooting: 45, passing: 68, defense: 75, dribbling: 55, physical: 74 },

  // Mediocentros
  { id: 12, name: "Andrés Mora",      pos: "MC",  rhythm: 72, shooting: 60, passing: 78, defense: 60, dribbling: 70, physical: 68 },
  { id: 13, name: "Sergio Leal",      pos: "MC",  rhythm: 70, shooting: 58, passing: 80, defense: 58, dribbling: 72, physical: 66 },
  { id: 25, name: "Samuel Ramos",     pos: "MC",  rhythm: 64, shooting: 52, passing: 70, defense: 54, dribbling: 62, physical: 64 },

  // Mediocampistas ofensivos
  { id: 15, name: "Adrián Fuentes",   pos: "MCO", rhythm: 74, shooting: 72, passing: 84, defense: 42, dribbling: 80, physical: 62 },
  { id: 16, name: "Nicolás Peña",     pos: "MCO", rhythm: 70, shooting: 68, passing: 80, defense: 38, dribbling: 76, physical: 60 },
  { id: 26, name: "Gonzalo Prieto",   pos: "MCO", rhythm: 68, shooting: 64, passing: 76, defense: 36, dribbling: 72, physical: 58 },

  // Extremos izquierdos
  { id: 17, name: "Raúl Nieto",       pos: "EI",  rhythm: 86, shooting: 72, passing: 68, defense: 32, dribbling: 84, physical: 68 },
  { id: 18, name: "Óscar Navarro",    pos: "EI",  rhythm: 82, shooting: 68, passing: 64, defense: 28, dribbling: 80, physical: 64 },

  // Extremos derechos
  { id: 19, name: "Diego Flores",     pos: "ED",  rhythm: 84, shooting: 70, passing: 66, defense: 30, dribbling: 86, physical: 66 },
  { id: 20, name: "Héctor Vargas",    pos: "ED",  rhythm: 80, shooting: 66, passing: 62, defense: 26, dribbling: 82, physical: 62 },

  // Delanteros centro
  { id: 21, name: "Miguel Torres",    pos: "DC",  rhythm: 82, shooting: 88, passing: 58, defense: 22, dribbling: 74, physical: 82 },
  { id: 22, name: "Cristian Blanco",  pos: "DC",  rhythm: 78, shooting: 84, passing: 54, defense: 20, dribbling: 70, physical: 80 },
  { id: 23, name: "Pedro Ríos",       pos: "DC",  rhythm: 76, shooting: 80, passing: 52, defense: 18, dribbling: 68, physical: 78 },
  { id: 14, name: "Roberto Iglesias", pos: "DC",  rhythm: 74, shooting: 76, passing: 50, defense: 16, dribbling: 66, physical: 76 },
];

const calcOverall = (p) => {
  const { pos, rhythm, shooting, passing, defense, dribbling, physical } = p;

  if (pos === "POR") {
    return Math.round((p.speed + p.reflexes + p.stretching + p.saque + p.positioning + p.saves) / 6);
  }

  const weights = {
    DC:  { shooting: 0.40, rhythm: 0.20, dribbling: 0.20, physical: 0.10, passing: 0.05, defense: 0.05 },
    EI:  { rhythm: 0.30, dribbling: 0.30, shooting: 0.20, passing: 0.10, physical: 0.05, defense: 0.05 },
    ED:  { rhythm: 0.30, dribbling: 0.30, shooting: 0.20, passing: 0.10, physical: 0.05, defense: 0.05 },
    MCO: { passing: 0.30, dribbling: 0.25, shooting: 0.20, rhythm: 0.10, physical: 0.10, defense: 0.05 },
    MC:  { passing: 0.25, dribbling: 0.20, defense: 0.20, physical: 0.15, shooting: 0.10, rhythm: 0.10 },
    MCD: { defense: 0.35, physical: 0.25, passing: 0.20, rhythm: 0.10, dribbling: 0.05, shooting: 0.05 },
    DEF: { defense: 0.40, physical: 0.30, rhythm: 0.15, passing: 0.10, dribbling: 0.03, shooting: 0.02 },
    LD:  { rhythm: 0.25, defense: 0.25, physical: 0.20, passing: 0.15, dribbling: 0.10, shooting: 0.05 },
    LI:  { rhythm: 0.25, defense: 0.25, physical: 0.20, passing: 0.15, dribbling: 0.10, shooting: 0.05 },
  };

  const w = weights[pos];
  const stats = { rhythm, shooting, passing, defense, dribbling, physical };

  return Math.round(
    Object.keys(w).reduce((sum, key) => sum + stats[key] * w[key], 0)
  );
};

const posColor = {
  POR: "#854F0B",
  DEF: "#185FA5", LD: "#1a6ab5", LI: "#1a6ab5",
  MCD: "#0a6b4e", MC: "#0F6E56", MCO: "#0e7a5e",
  EI: "#993C1D", ED: "#993C1D", DC: "#b52a1a",
};

const posGroups = [
  { label: "Porteros",        positions: ["POR"] },
  { label: "Defensas",        positions: ["DEF", "LD", "LI"] },
  { label: "Centrocampistas", positions: ["MCD", "MC", "MCO"] },
  { label: "Delanteros",      positions: ["EI", "ED", "DC"] },
];

const getStats = (p) => {
  if (p.pos === "POR") {
    return [
      { lbl: "Estirada",        val: p.stretching },
      { lbl: "Reflejos",        val: p.reflexes },
      { lbl: "Velocidad",       val: p.speed },
      { lbl: "Saque",           val: p.saque },
      { lbl: "Posicionamiento", val: p.positioning },
      { lbl: "Paradas",         val: p.saves },
    ];
  }
  return [
    { lbl: "Ritmo",   val: p.rhythm },
    { lbl: "Disparo", val: p.shooting },
    { lbl: "Pase",    val: p.passing },
    { lbl: "Defensa", val: p.defense },
    { lbl: "Regate",  val: p.dribbling },
    { lbl: "Físico",  val: p.physical },
  ];
};

export default function Squad({ t, navigate }) {
  const [players] = useState(initialPlayers);
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ flex: 1, overflowY: "auto", background: "#0a1628" }}>
      {/* Header */}
      <div style={{ background: "#0d1f3c", padding: "16px 20px", borderBottom: "0.5px solid #1e3a5f", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => navigate("home")} style={{ background: "none", border: "none", color: "#5a8ab0", fontSize: 20, cursor: "pointer", padding: 0 }}>←</button>
        <h1 style={{ fontSize: 18, fontWeight: 500, color: "#e8f4ff", margin: 0 }}>Plantilla</h1>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#5a8ab0" }}>{players.length} jugadores</span>
      </div>

      {/* Ficha jugador seleccionado */}
      {selected && (
        <div style={{ margin: 16, background: "#112240", borderRadius: 12, padding: 16, border: "0.5px solid #1D9E75" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#e8f4ff", margin: "0 0 4px" }}>{selected.name}</p>
              <span style={{ fontSize: 11, background: posColor[selected.pos], color: "#fff", padding: "2px 8px", borderRadius: 4 }}>{selected.pos}</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 28, fontWeight: 500, color: "#1D9E75", margin: 0 }}>{calcOverall(selected)}</p>
              <p style={{ fontSize: 10, color: "#5a8ab0", margin: 0 }}>overall</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {getStats(selected).map(s => (
              <div key={s.lbl}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: "#5a8ab0" }}>{s.lbl}</span>
                  <span style={{ fontSize: 11, color: "#e8f4ff" }}>{s.val}</span>
                </div>
                <div style={{ background: "#1e3a5f", borderRadius: 3, height: 4 }}>
                  <div style={{ width: s.val + "%", background: "#1D9E75", height: 4, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setSelected(null)} style={{ marginTop: 12, width: "100%", background: "none", border: "0.5px solid #1e3a5f", color: "#5a8ab0", padding: "8px 0", borderRadius: 8, cursor: "pointer", fontSize: 12 }}>Cerrar</button>
        </div>
      )}

      {/* Lista agrupada por posición */}
      <div style={{ padding: "8px 16px 16px" }}>
        {posGroups.map(group => {
          const groupPlayers = players.filter(p => group.positions.includes(p.pos));
          return (
            <div key={group.label} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 11, color: "#5a8ab0", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px" }}>
                {group.label} · {groupPlayers.length}
              </p>
              {groupPlayers.map(p => (
                <div key={p.id} onClick={() => setSelected(p)}
                  style={{ background: "#112240", borderRadius: 10, padding: "12px 14px", marginBottom: 8, border: "0.5px solid #1e3a5f", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                  <span style={{ fontSize: 10, background: posColor[p.pos], color: "#fff", padding: "2px 6px", borderRadius: 4, minWidth: 32, textAlign: "center" }}>{p.pos}</span>
                  <span style={{ fontSize: 14, color: "#e8f4ff", flex: 1 }}>{p.name}</span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "#1D9E75" }}>{calcOverall(p)}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
