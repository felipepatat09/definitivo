import React from "react";

export default function Home({ club, t, lang, setLang, navigate }) {
  const fmt = (n) =>
    n >= 1000000 ? (n / 1000000).toFixed(1) + "M" : n.toLocaleString();

  const lineupComplete = true; // simplificado para evitar bloqueos

  const startMatch = () => {
    navigate("match");
  };

  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <div
        style={{
          background: "#0d1f3c",
          padding: "20px 20px 16px",
          textAlign: "center",
          borderBottom: "0.5px solid #1e3a5f",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }} />
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#e8f4ff",
              margin: "0 0 2px",
            }}
          >
            TACTIC GOAL
          </h1>
          <p style={{ fontSize: 11, color: "#5a8ab0", margin: 0 }}>
            {t("home.season")}
          </p>
        </div>

        <div style={{ flex: 1, textAlign: "right" }}>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{
              background: "#112240",
              border: "0.5px solid #1e3a5f",
              color: "#a0c4e0",
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>

      <div style={{ padding: 16 }}>
        {/* BOTÓN JUGAR PARTIDO FIXED */}
        <button
          onClick={startMatch}
          style={{
            width: "100%",
            background: "#1D9E75",
            border: "none",
            color: "white",
            padding: "12px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: 14,
          }}
        >
          JUGAR PARTIDO
        </button>

        <div
          style={{
            background: "#112240",
            borderRadius: 12,
            padding: 14,
            marginBottom: 14,
            border: "0.5px solid #1e3a5f",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "#1D9E75",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              color: "#E1F5EE",
              fontWeight: 500,
            }}
          >
            TG
          </div>

          <div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#e8f4ff",
                margin: "0 0 2px",
              }}
            >
              {club.name}
            </p>
            <p style={{ fontSize: 11, color: "#5a8ab0", margin: 0 }}>
              {t("home.division")} {club.division} · {t("home.matchday")}{" "}
              {club.matchday}/38
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 8,
            marginBottom: 14,
          }}
        >
          {[
            { val: club.position + "°", lbl: t("home.position") },
            { val: club.points, lbl: t("home.points") },
            { val: fmt(club.budget), lbl: t("home.budget") },
          ].map((s) => (
            <div
              key={s.lbl}
              style={{
                background: "#112240",
                borderRadius: 8,
                padding: "10px 8px",
                textAlign: "center",
                border: "0.5px solid #1e3a5f",
              }}
            >
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#e8f4ff",
                  margin: "0 0 2px",
                }}
              >
                {s.val}
              </p>
              <p style={{ fontSize: 10, color: "#5a8ab0", margin: 0 }}>
                {s.lbl}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { id: "match", label: t("home.playMatch"), color: "#0F6E56" },
            { id: "squad", label: t("home.squad"), color: "#185FA5" },
            { id: "tactics", label: t("home.tactics"), color: "#854F0B" },
            { id: "league", label: t("home.standings"), color: "#534AB7" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() =>
                navigate(btn.id === "match" ? "match" : btn.id)
              }
              style={{
                background: "#112240",
                borderRadius: 10,
                padding: "14px 10px",
                border: "0.5px solid #1e3a5f",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: btn.color,
                  margin: "0 auto 6px",
                }}
              />
              <p
                style={{
                  fontSize: 11,
                  color: "#a0c4e0",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {btn.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}