import React, { useState } from "react";

const formations = {
  "4-4-2": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "DEF", x: 18, y: 70 }, { id: 3, pos: "DEF", x: 38, y: 70 },
    { id: 4, pos: "DEF", x: 62, y: 70 }, { id: 5, pos: "DEF", x: 82, y: 70 },
    { id: 6, pos: "MED", x: 18, y: 50 }, { id: 7, pos: "MED", x: 38, y: 50 },
    { id: 8, pos: "MED", x: 62, y: 50 }, { id: 9, pos: "MED", x: 82, y: 50 },
    { id: 10, pos: "DEL", x: 35, y: 20 }, { id: 11, pos: "DEL", x: 65, y: 20 },
  ],
  "4-3-3": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "DEF", x: 18, y: 70 }, { id: 3, pos: "DEF", x: 38, y: 70 },
    { id: 4, pos: "DEF", x: 62, y: 70 }, { id: 5, pos: "DEF", x: 82, y: 70 },
    { id: 6, pos: "MED", x: 25, y: 50 }, { id: 7, pos: "MED", x: 50, y: 50 }, { id: 8, pos: "MED", x: 75, y: 50 },
    { id: 9, pos: "DEL", x: 20, y: 20 }, { id: 10, pos: "DEL", x: 50, y: 18 }, { id: 11, pos: "DEL", x: 80, y: 20 },
  ],
  "3-5-2": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "DEF", x: 25, y: 72 }, { id: 3, pos: "DEF", x: 50, y: 72 }, { id: 4, pos: "DEF", x: 75, y: 72 },
    { id: 5, pos: "MED", x: 10, y: 50 }, { id: 6, pos: "MED", x: 30, y: 50 },
    { id: 7, pos: "MED", x: 50, y: 48 }, { id: 8, pos: "MED", x: 70, y: 50 }, { id: 9, pos: "MED", x: 90, y: 50 },
    { id: 10, pos: "DEL", x: 35, y: 20 }, { id: 11, pos: "DEL", x: 65, y: 20 },
  ],
  "4-2-3-1": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "DEF", x: 18, y: 72 }, { id: 3, pos: "DEF", x: 38, y: 72 },
    { id: 4, pos: "DEF", x: 62, y: 72 }, { id: 5, pos: "DEF", x: 82, y: 72 },
    { id: 6, pos: "MED", x: 35, y: 56 }, { id: 7, pos: "MED", x: 65, y: 56 },
    { id: 8, pos: "MED", x: 20, y: 36 }, { id: 9, pos: "MED", x: 50, y: 34 }, { id: 10, pos: "MED", x: 80, y: 36 },
    { id: 11, pos: "DEL", x: 50, y: 16 },
  ],
};

const posColor = { POR: "#854F0B", DEF: "#185FA5", MED: "#0F6E56", DEL: "#993C1D" };

export default function Tactics({ navigate }) {
  const [formation, setFormation] = useState("4-4-2");
  const [mentality, setMentality] = useState("equilibrado");

  const players = formations[formation];

  return (
    <div style={{ flex: 1, overflowY: "auto", background: "#0a1628" }}>
      <div style={{ background: "#0d1f3c", padding: "16px 20px", borderBottom: "0.5px solid #1e3a5f", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => navigate("home")} style={{ background: "none", border: "none", color: "#5a8ab0", fontSize: 20, cursor: "pointer", padding: 0 }}>←</button>
        <h1 style={{ fontSize: 18, fontWeight: 500, color: "#e8f4ff", margin: 0 }}>Tácticas</h1>
      </div>

      <div style={{ padding: 16 }}>
        <p style={{ fontSize: 11, color: "#5a8ab0", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Formación</p>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          {Object.keys(formations).map(f => (
            <button key={f} onClick={() => setFormation(f)}
              style={{ background: formation === f ? "#1D9E75" : "#112240", border: formation === f ? "none" : "0.5px solid #1e3a5f", color: formation === f ? "#E1F5EE" : "#a0c4e0", padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer" }}>
              {f}
            </button>
          ))}
        </div>

        <div style={{ position: "relative", width: "100%", paddingBottom: "140%", background: "#0a3d1a", borderRadius: 12, overflow: "hidden", marginBottom: 16, border: "0.5px solid #1e3a5f" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <div style={{ position: "absolute", top: "50%", left: "5%", right: "5%", height: "0.5px", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ position: "absolute", top: "5%", bottom: "5%", left: "50%", width: "0.5px", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "20%", paddingBottom: "20%", borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.15)" }} />
            <div style={{ position: "absolute", bottom: "5%", left: "25%", right: "25%", height: "18%", border: "0.5px solid rgba(255,255,255,0.15)", borderBottom: "none" }} />
            <div style={{ position: "absolute", top: "5%", left: "25%", right: "25%", height: "18%", border: "0.5px solid rgba(255,255,255,0.15)", borderTop: "none" }} />
            {players.map(p => (
              <div key={p.id} style={{ position: "absolute", left: p.x + "%", top: p.y + "%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: posColor[p.pos], border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 8, color: "#fff", fontWeight: 500 }}>{p.pos}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: 11, color: "#5a8ab0", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mentalidad</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["defensivo", "equilibrado", "ofensivo", "presión total"].map(m => (
            <button key={m} onClick={() => setMentality(m)}
              style={{ background: mentality === m ? "#185FA5" : "#112240", border: mentality === m ? "none" : "0.5px solid #1e3a5f", color: mentality === m ? "#E6F1FB" : "#a0c4e0", padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}