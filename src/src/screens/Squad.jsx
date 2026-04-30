import React, { useState } from "react";

const initialPlayers = [
  { id: 1, name: "Carlos Ruiz", pos: "POR", speed: 55, shooting: 20, passing: 45, defense: 70, overall: 72 },
  { id: 2, name: "Marcos Gil", pos: "DEF", speed: 65, shooting: 30, passing: 55, defense: 78, overall: 74 },
  { id: 3, name: "David Sanz", pos: "DEF", speed: 60, shooting: 25, passing: 50, defense: 75, overall: 71 },
  { id: 4, name: "Luis Vera", pos: "DEF", speed: 68, shooting: 35, passing: 58, defense: 76, overall: 73 },
  { id: 5, name: "Pedro Ríos", pos: "DEF", speed: 62, shooting: 28, passing: 52, defense: 74, overall: 70 },
  { id: 6, name: "Andrés Mora", pos: "MED", speed: 72, shooting: 60, passing: 78, defense: 55, overall: 76 },
  { id: 7, name: "Sergio Leal", pos: "MED", speed: 70, shooting: 58, passing: 80, defense: 52, overall: 75 },
  { id: 8, name: "Javier Cano", pos: "MED", speed: 74, shooting: 62, passing: 76, defense: 50, overall: 74 },
  { id: 9, name: "Raúl Nieto", pos: "DEL", speed: 85, shooting: 82, passing: 65, defense: 30, overall: 82 },
  { id: 10, name: "Miguel Torres", pos: "DEL", speed: 88, shooting: 85, passing: 60, defense: 25, overall: 84 },
  { id: 11, name: "Diego Flores", pos: "DEL", speed: 82, shooting: 80, passing: 62, defense: 28, overall: 80 },
];

const posColor = { POR: "#854F0B", DEF: "#185FA5", MED: "#0F6E56", DEL: "#993C1D" };
const posLabel = { POR: "POR", DEF: "DEF", MED: "MED", DEL: "DEL" };

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
              <span style={{ fontSize: 11, background: posColor[selected.pos], color: "#fff", padding: "2px 8px", borderRadius: 4 }}>{posLabel[selected.pos]}</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 28, fontWeight: 500, color: "#1D9E75", margin: 0 }}>{selected.overall}</p>
              <p style={{ fontSize: 10, color: "#5a8ab0", margin: 0 }}>overall</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { lbl: "Velocidad", val: selected.speed },
              { lbl: "Disparo", val: selected.shooting },
              { lbl: "Pase", val: selected.passing },
              { lbl: "Defensa", val: selected.defense },
            ].map(s => (
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
            <span style={{ fontSize: 16, fontWeight: 500, color: "#1D9E75" }}>{p.overall}</span>
          </div>
        ))}
      </div>
    </div>
  );
}