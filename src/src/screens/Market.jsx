import React from "react";

export default function Market({ t }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a1628",
        minHeight: "60vh",
      }}
    >
      <div style={{ textAlign: "center", padding: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🏪</div>
        <p style={{ fontSize: 18, color: "#e8f4ff", fontWeight: 500, margin: "0 0 8px" }}>
          Mercado de fichajes
        </p>
        <p style={{ fontSize: 13, color: "#5a8ab0" }}>Próximamente disponible</p>
      </div>
    </div>
  );
}