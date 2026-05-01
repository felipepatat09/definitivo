import React, { useState } from "react";

const formations = {
  "4-4-2": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "LD", x: 82, y: 72 },
    { id: 3, pos: "DEF", x: 62, y: 72 },
    { id: 4, pos: "DEF", x: 38, y: 72 },
    { id: 5, pos: "LI", x: 18, y: 72 },
    { id: 6, pos: "EI", x: 15, y: 50 },
    { id: 7, pos: "MC", x: 38, y: 50 },
    { id: 8, pos: "MC", x: 62, y: 50 },
    { id: 9, pos: "ED", x: 85, y: 50 },
    { id: 10, pos: "DC", x: 35, y: 20 },
    { id: 11, pos: "DC", x: 65, y: 20 },
  ],
  "4-3-3": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "LD", x: 82, y: 72 },
    { id: 3, pos: "DEF", x: 62, y: 72 },
    { id: 4, pos: "DEF", x: 38, y: 72 },
    { id: 5, pos: "LI", x: 18, y: 72 },
    { id: 6, pos: "MC", x: 25, y: 50 },
    { id: 7, pos: "MC", x: 50, y: 50 },
    { id: 8, pos: "MC", x: 75, y: 50 },
    { id: 9, pos: "EI", x: 18, y: 20 },
    { id: 10, pos: "DC", x: 50, y: 18 },
    { id: 11, pos: "ED", x: 82, y: 20 },
  ],
  "4-2-3-1": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "LD", x: 82, y: 72 },
    { id: 3, pos: "DEF", x: 62, y: 72 },
    { id: 4, pos: "DEF", x: 38, y: 72 },
    { id: 5, pos: "LI", x: 18, y: 72 },
    { id: 6, pos: "MCD", x: 35, y: 56 },
    { id: 7, pos: "MCD", x: 65, y: 56 },
    { id: 8, pos: "EI", x: 15, y: 38 },
    { id: 9, pos: "MCO", x: 50, y: 36 },
    { id: 10, pos: "ED", x: 85, y: 38 },
    { id: 11, pos: "DC", x: 50, y: 16 },
  ],
  "3-5-2": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "DEF", x: 25, y: 72 },
    { id: 3, pos: "DEF", x: 50, y: 72 },
    { id: 4, pos: "DEF", x: 75, y: 72 },
    { id: 5, pos: "LD", x: 90, y: 52 },
    { id: 6, pos: "MC", x: 30, y: 50 },
    { id: 7, pos: "MC", x: 50, y: 48 },
    { id: 8, pos: "MC", x: 70, y: 50 },
    { id: 9, pos: "LI", x: 10, y: 52 },
    { id: 10, pos: "DC", x: 35, y: 20 },
    { id: 11, pos: "DC", x: 65, y: 20 },
  ],
  "5-3-2": [
    { id: 1, pos: "POR", x: 50, y: 88 },
    { id: 2, pos: "LD", x: 90, y: 68 },
    { id: 3, pos: "DEF", x: 68, y: 72 },
    { id: 4, pos: "DEF", x: 50, y: 74 },
    { id: 5, pos: "DEF", x: 32, y: 72 },
    { id: 6, pos: "LI", x: 10, y: 68 },
    { id: 7, pos: "MC", x: 28, y: 50 },
    { id: 8, pos: "MC", x: 50, y: 48 },
    { id: 9, pos: "MC", x: 72, y: 50 },
    { id: 10, pos: "DC", x: 35, y: 20 },
    { id: 11, pos: "DC", x: 65, y: 20 },
  ],
};

const posColor = {
  POR: "#854F0B",
  DEF: "#185FA5", LD: "#1a6ab5", LI: "#1a6ab5",
  MCD: "#0a6b4e", MC: "#0F6E56", MCO: "#0e7a5e",
  EI: "#7a3d9e", ED: "#7a3d9e", DC: "#993C1D",
};

export default function Tactics({
  navigate,
  formation,
  setFormation,
  mentality,
  setMentality,
  externalPlayers,
  lineup,
  setLineup,
}) {
  const [selectingSlot, setSelectingSlot] = useState(null);

  // Validar props
  const players = Array.isArray(externalPlayers) ? externalPlayers : [];
  const slots = formations[formation] || formations["4-4-2"];
  const safeLineup = Array.isArray(lineup) ? lineup : Array(slots.length).fill(null);

  function handleSlotClick(i) {
    setSelectingSlot(i);
  }

  function handlePlayerSelect(player) {
    if (selectingSlot === null) return;
    const newLineup = [...safeLineup];
    const existing = newLineup.findIndex((p) => p && p.id === player.id);
    if (existing !== -1) newLineup[existing] = null;
    newLineup[selectingSlot] = player;
    setLineup(newLineup);
    setSelectingSlot(null);
  }

  function handleRemove(i) {
    const newLineup = [...safeLineup];
    newLineup[i] = null;
    setLineup(newLineup);
  }

  const lineupCount = safeLineup.filter(Boolean).length;

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
        <h1 style={{ fontSize: 18, fontWeight: 500, color: "#e8f4ff", margin: 0 }}>Tácticas</h1>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 12,
            color: lineupCount === 11 ? "#1D9E75" : "#5a8ab0",
          }}
        >
          {lineupCount}/11
        </span>
      </div>

      <div style={{ padding: 16 }}>
        {/* Selector de formación */}
        <p style={{ fontSize: 11, color: "#5a8ab0", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Formación
        </p>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          {Object.keys(formations).map((f) => (
            <button
              key={f}
              onClick={() => {
                setFormation(f);
                setLineup(Array(formations[f].length).fill(null));
              }}
              style={{
                background: formation === f ? "#1D9E75" : "#112240",
                border: formation === f ? "none" : "0.5px solid #1e3a5f",
                color: formation === f ? "#E1F5EE" : "#a0c4e0",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Campo con posiciones */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "140%",
            background: "#0a3d1a",
            borderRadius: 12,
            overflow: "hidden",
            marginBottom: 16,
            border: "0.5px solid #1e3a5f",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            {/* Líneas del campo */}
            <div style={{ position: "absolute", top: "50%", left: "5%", right: "5%", height: "0.5px", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "20%", paddingBottom: "20%", borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.15)" }} />
            <div style={{ position: "absolute", bottom: "5%", left: "25%", right: "25%", height: "18%", border: "0.5px solid rgba(255,255,255,0.15)", borderBottom: "none" }} />
            <div style={{ position: "absolute", top: "5%", left: "25%", right: "25%", height: "18%", border: "0.5px solid rgba(255,255,255,0.15)", borderTop: "none" }} />

            {/* Jugadores en el campo */}
            {slots.map((slot, i) => {
              const player = safeLineup[i];
              return (
                <div
                  key={slot.id}
                  onClick={() => (player ? handleRemove(i) : handleSlotClick(i))}
                  style={{
                    position: "absolute",
                    left: slot.x + "%",
                    top: slot.y + "%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: player ? posColor[slot.pos] || "#333" : "rgba(255,255,255,0.1)",
                      border: player ? "2px solid rgba(255,255,255,0.4)" : "2px dashed rgba(255,255,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {player ? (
                      <span style={{ fontSize: 7, color: "#fff", fontWeight: 500, textAlign: "center", padding: "0 2px", lineHeight: 1.2 }}>
                        {player.name.split(" ")[0]}
                      </span>
                    ) : (
                      <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>+</span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 8,
                      color: player ? "#1D9E75" : "rgba(255,255,255,0.3)",
                      background: "rgba(0,0,0,0.5)",
                      padding: "1px 3px",
                      borderRadius: 2,
                    }}
                  >
                    {slot.pos}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel de selección de jugador */}
        {selectingSlot !== null && (
          <div
            style={{
              marginBottom: 16,
              background: "#0d1f3c",
              borderRadius: 12,
              padding: 12,
              border: "0.5px solid #1D9E75",
            }}
          >
            <p style={{ fontSize: 11, color: "#5a8ab0", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Elegir jugador — {slots[selectingSlot]?.pos}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 200, overflowY: "auto" }}>
              {players
                .filter((p) => !safeLineup.some((l, i) => l && l.id === p.id && i !== selectingSlot))
                .map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handlePlayerSelect(p)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      background: "#112240",
                      borderRadius: 8,
                      padding: "8px 12px",
                      cursor: "pointer",
                      border: "0.5px solid #1e3a5f",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        background: posColor[p.pos] || "#333",
                        color: "#fff",
                        padding: "2px 6px",
                        borderRadius: 4,
                        minWidth: 28,
                        textAlign: "center",
                      }}
                    >
                      {p.pos}
                    </span>
                    <span style={{ fontSize: 13, color: "#e8f4ff", flex: 1 }}>{p.name}</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#1D9E75" }}>{p.overall ?? "-"}</span>
                  </div>
                ))}
            </div>
            <button
              onClick={() => setSelectingSlot(null)}
              style={{
                marginTop: 8,
                width: "100%",
                background: "none",
                border: "0.5px solid #1e3a5f",
                color: "#5a8ab0",
                padding: "8px 0",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              Cancelar
            </button>
          </div>
        )}

        {/* Selector de mentalidad */}
        <p style={{ fontSize: 11, color: "#5a8ab0", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Mentalidad
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["defensivo", "equilibrado", "ofensivo", "presión total"].map((m) => (
            <button
              key={m}
              onClick={() => setMentality(m)}
              style={{
                background: mentality === m ? "#185FA5" : "#112240",
                border: mentality === m ? "none" : "0.5px solid #1e3a5f",
                color: mentality === m ? "#E6F1FB" : "#a0c4e0",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 12,
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}