import React, { useState } from "react";

const initialPlayers = [
  { id: 1, name: "Carlos Ruiz", pos: "POR", speed: 55, reflexes: 74, stretching: 72, saque: 48, positioning: 70, saves: 75 },
  { id: 2, name: "Marcos Gil", pos: "DEF", rhythm: 65, shooting: 30, passing: 55, defense: 78, dribbling: 52, physical: 74 },
  { id: 3, name: "David Sanz", pos: "DEF", rhythm: 60, shooting: 25, passing: 50, defense: 75, dribbling: 48, physical: 71 },
  { id: 4, name: "Luis Vera", pos: "DEF", rhythm: 68, shooting: 35, passing: 58, defense: 76, dribbling: 55, physical: 73 },
  { id: 5, name: "Pedro Ríos", pos: "DEF", rhythm: 62, shooting: 28, passing: 52, defense: 74, dribbling: 50, physical: 70 },
  { id: 6, name: "Andrés Mora", pos: "MED", rhythm: 72, shooting: 60, passing: 78, defense: 55, dribbling: 70, physical: 68 },
  { id: 7, name: "Sergio Leal", pos: "MED", rhythm: 70, shooting: 58, passing: 80, defense: 52, dribbling: 72, physical: 66 },
  { id: 8, name: "Javier Cano", pos: "MED", rhythm: 74, shooting: 62, passing: 76, defense: 50, dribbling: 68, physical: 70 },
  { id: 9, name: "Raúl Nieto", pos: "DEL", rhythm: 85, shooting: 82, passing: 65, defense: 30, dribbling: 80, physical: 72 },
  { id: 10, name: "Miguel Torres", pos: "DEL", rhythm: 88, shooting: 85, passing: 60, defense: 25, dribbling: 84, physical: 75 },
  { id: 11, name: "Diego Flores", pos: "DEL", rhythm: 82, shooting: 80, passing: 62, defense: 28, dribbling: 78, physical: 70 },
];

const calcOverall = (p) => {
  if (p.pos === "POR") {
    return Math.round((p.speed + p.reflexes + p.stretching + p.saque + p.positioning + p.saves) / 6);
  }
  return Math.round((p.rhythm + p.shooting + p.passing + p.defense + p.dribbling + p.physical) / 6);
};

const posColor = { POR: "#854F0B", DEF: "#185FA5", MED: "#0F6E56", DEL: "#993C1D" };

const getStats = (p) => {
  if (p.pos === "POR") {
    return [
      { lbl: "Estirada", val: p.stretching },
      { lbl: "Reflejos", val: p.reflexes },
      { lbl: "Velocidad", val: p.speed },
      { lbl: "Saque", val: p.saque },
      { lbl: "Posicionamiento", val: p.positioning },
      { lbl: "Paradas", val: p.saves },
    ];
  }
  return [
    { lbl: "Ritmo", val: p.rhythm },
    { lbl: "Disparo", val: p.shooting },
    { lbl: "Pase", val: p.passing },
    { lbl: "Defensa", val: p.defense },
    { lbl: "Regate", val: p.dribbling },
    { lbl: "Físico", val: p.physical },
  ];
};

export default function Squad({ t, navigate }) {
  const [players] = useState(initialPlayers);
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ flex: 1, overflowY: "auto", background: "#0a1628" }}>
      <div style={{ background: "#0d1f3c", padding: "16px 20px", borderBottom: "0.5px solid #1e3a5f", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => navigate("home")} style={{ background: "none", border: "none", color: "#5a8ab0", fontSize: 20, cursor: "pointer", padding: 0 }}>←</button>
        <h1 style={{ fontSize: 18, fontWeight: 500, color: "#e8f4ff", margin: 0 }}>Plantilla</h1>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#5a8ab0" }}>{players.length} jugadores</span>
      </div>

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

      <div style={{ padding: "8px 16px 16px" }}>
        {players.map(p => (
          <div key={p.id} onClick={() => setSelected(p)}
            style={{ background: "#112240", borderRadius: 10, padding: "12px 14px", marginBottom: 8, border: "0.5px solid #1e3a5f", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <span style={{ fontSize: 10, background: posColor[p.pos], color: "#fff", padding: "2px 6px", borderRadius: 4, minWidth: 28, textAlign: "center" }}>{p.pos}</span>
            <span style={{ fontSize: 14, color: "#e8f4ff", flex: 1 }}>{p.name}</span>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#1D9E75" }}>{calcOverall(p)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

