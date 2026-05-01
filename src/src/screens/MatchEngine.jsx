import React from 'react';



const formations = {
  "4-2-3-1": [
    { id: 1,  pos: "POR", x: 50, y: 88 },
    { id: 2,  pos: "LD",  x: 82, y: 72 },
    { id: 3,  pos: "DEF", x: 62, y: 72 },
    { id: 4,  pos: "DEF", x: 38, y: 72 },
    { id: 5,  pos: "LI",  x: 18, y: 72 },
    { id: 6,  pos: "MCD", x: 35, y: 56 },
    { id: 7,  pos: "MCD", x: 65, y: 56 },
    { id: 8,  pos: "EI",  x: 15, y: 38 },
    { id: 9,  pos: "MCO", x: 50, y: 36 },
    { id: 10, pos: "ED",  x: 85, y: 38 },
    { id: 11, pos: "DC",  x: 50, y: 16 },
  ],
  "4-4-2": [
    { id: 1,  pos: "POR", x: 50, y: 88 },
    { id: 2,  pos: "LD",  x: 82, y: 72 },
    { id: 3,  pos: "DEF", x: 62, y: 72 },
    { id: 4,  pos: "DEF", x: 38, y: 72 },
    { id: 5,  pos: "LI",  x: 18, y: 72 },
    { id: 6,  pos: "EI",  x: 15, y: 50 },
    { id: 7,  pos: "MC",  x: 38, y: 50 },
    { id: 8,  pos: "MC",  x: 62, y: 50 },
    { id: 9,  pos: "ED",  x: 85, y: 50 },
    { id: 10, pos: "DC",  x: 35, y: 20 },
    { id: 11, pos: "DC",  x: 65, y: 20 },
  ],
  "4-3-3": [
    { id: 1,  pos: "POR", x: 50, y: 88 },
    { id: 2,  pos: "LD",  x: 82, y: 72 },
    { id: 3,  pos: "DEF", x: 62, y: 72 },
    { id: 4,  pos: "DEF", x: 38, y: 72 },
    { id: 5,  pos: "LI",  x: 18, y: 72 },
    { id: 6,  pos: "MC",  x: 25, y: 50 },
    { id: 7,  pos: "MC",  x: 50, y: 50 },
    { id: 8,  pos: "MC",  x: 75, y: 50 },
    { id: 9,  pos: "EI",  x: 18, y: 20 },
    { id: 10, pos: "DC",  x: 50, y: 18 },
    { id: 11, pos: "ED",  x: 82, y: 20 },
  ],
  "3-5-2": [
    { id: 1,  pos: "POR", x: 50, y: 88 },
    { id: 2,  pos: "DEF", x: 25, y: 72 },
    { id: 3,  pos: "DEF", x: 50, y: 72 },
    { id: 4,  pos: "DEF", x: 75, y: 72 },
    { id: 5,  pos: "LD",  x: 90, y: 52 },
    { id: 6,  pos: "MC",  x: 30, y: 50 },
    { id: 7,  pos: "MC",  x: 50, y: 48 },
    { id: 8,  pos: "MC",  x: 70, y: 50 },
    { id: 9,  pos: "LI",  x: 10, y: 52 },
    { id: 10, pos: "DC",  x: 35, y: 20 },
    { id: 11, pos: "DC",  x: 65, y: 20 },
  ],
  "5-3-2": [
    { id: 1,  pos: "POR", x: 50, y: 88 },
    { id: 2,  pos: "LD",  x: 90, y: 68 },
    { id: 3,  pos: "DEF", x: 68, y: 72 },
    { id: 4,  pos: "DEF", x: 50, y: 74 },
    { id: 5,  pos: "DEF", x: 32, y: 72 },
    { id: 6,  pos: "LI",  x: 10, y: 68 },
    { id: 7,  pos: "MC",  x: 28, y: 50 },
    { id: 8,  pos: "MC",  x: 50, y: 48 },
    { id: 9,  pos: "MC",  x: 72, y: 50 },
    { id: 10, pos: "DC",  x: 35, y: 20 },
    { id: 11, pos: "DC",  x: 65, y: 20 },
  ],
};

const posColor = {
  POR: "#854F0B", DEF: "#185FA5", LD: "#1a5fa5", LI: "#1a5fa5",
  MCD: "#0a6e4a", MC: "#0F6E56", MCO: "#0e8a5f",
  EI: "#7a3d9e", ED: "#7a3d9e", DC: "#993C1D",
};

const RIVAL_TEAMS = [
  { name: "Real Madrid", squad: {
    DC:[{n:"Mbappé",s:96},{n:"Benzema",s:91}], EI:[{n:"Vinicius",s:94}], ED:[{n:"Rodrygo",s:86}],
    MCO:[{n:"Bellingham",s:91}], MC:[{n:"Modric",s:84},{n:"Valverde",s:87}], MCD:[{n:"Camavinga",s:83},{n:"Tchouaméni",s:82}],
    DEF:[{n:"Militão",s:87},{n:"Alaba",s:84},{n:"Rüdiger",s:85},{n:"Nacho",s:80}],
    LD:[{n:"Carvajal",s:87}], LI:[{n:"Mendy",s:82}], POR:[{n:"Courtois",s:91},{n:"Lunin",s:78}]
  }},
  { name: "FC Barcelona", squad: {
    DC:[{n:"Lewandowski",s:90},{n:"Ferran Torres",s:79}], EI:[{n:"Raphinha",s:87}], ED:[{n:"Lamine Yamal",s:88}],
    MCO:[{n:"Dani Olmo",s:86}], MC:[{n:"Pedri",s:88},{n:"Gavi",s:85}], MCD:[{n:"De Jong",s:86},{n:"Christensen",s:79}],
    DEF:[{n:"Araújo",s:87},{n:"Iñigo Martínez",s:82},{n:"Cubarsí",s:80},{n:"Eric García",s:76}],
    LD:[{n:"Koundé",s:85}], LI:[{n:"Balde",s:82}], POR:[{n:"Ter Stegen",s:89},{n:"Peña",s:72}]
  }},
  { name: "Atlético Madrid", squad: {
    DC:[{n:"Griezmann",s:87},{n:"Julián Álvarez",s:86}], EI:[{n:"Lino",s:78}], ED:[{n:"Correa",s:76}],
    MCO:[{n:"De Paul",s:83}], MC:[{n:"Koke",s:79},{n:"Barrios",s:76}], MCD:[{n:"Gallagher",s:80},{n:"Witsel",s:75}],
    DEF:[{n:"Giménez",s:85},{n:"Hermoso",s:79},{n:"Lenglet",s:76},{n:"Azpilicueta",s:74}],
    LD:[{n:"Nahuel Molina",s:80}], LI:[{n:"Reinildo",s:75}], POR:[{n:"Oblak",s:90},{n:"Grbic",s:73}]
  }},
  { name: "Athletic Club", squad: {
    DC:[{n:"Williams I.",s:83},{n:"Guruzeta",s:79}], EI:[{n:"Berenguer",s:77}], ED:[{n:"Williams N.",s:84}],
    MCO:[{n:"Sancet",s:80}], MC:[{n:"Dani García",s:78},{n:"Vesga",s:76}], MCD:[{n:"Jauregizar",s:74},{n:"Ruiz de Galarreta",s:73}],
    DEF:[{n:"Vivian",s:78},{n:"Yeray",s:79},{n:"Paredes",s:74},{n:"Lekue",s:73}],
    LD:[{n:"De Marcos",s:76}], LI:[{n:"Yuri",s:75}], POR:[{n:"Unai Simón",s:84},{n:"Agirrezabala",s:72}]
  }},
  { name: "Villarreal CF", squad: {
    DC:[{n:"Danjuma",s:78},{n:"Morales",s:74}], EI:[{n:"Baena",s:79}], ED:[{n:"Yeremy Pino",s:80}],
    MCO:[{n:"Lo Celso",s:81}], MC:[{n:"Parejo",s:80},{n:"Capoue",s:75}], MCD:[{n:"Terrats",s:73},{n:"Coquelin",s:74}],
    DEF:[{n:"Albiol",s:77},{n:"Pau Torres",s:82},{n:"Costa",s:74},{n:"Foyth",s:76}],
    LD:[{n:"Foyth",s:76}], LI:[{n:"Pedraza",s:76}], POR:[{n:"Jorgensen",s:78},{n:"Pepe Reina",s:74}]
  }},
  { name: "Real Sociedad", squad: {
    DC:[{n:"Oyarzabal",s:83},{n:"Sørloth",s:80}], EI:[{n:"Kubo",s:83}], ED:[{n:"Cho",s:77}],
    MCO:[{n:"Merino",s:82}], MC:[{n:"Zubimendi",s:84},{n:"Brais Méndez",s:79}], MCD:[{n:"Turrientes",s:74},{n:"Martín Zubimendi",s:82}],
    DEF:[{n:"Le Normand",s:82},{n:"Zubeldia",s:76},{n:"Aritz Elustondo",s:74},{n:"Pacheco",s:73}],
    LD:[{n:"Gorosabel",s:74}], LI:[{n:"Munóz",s:75}], POR:[{n:"Remiro",s:82},{n:"Ryan",s:74}]
  }},
  { name: "Real Betis", squad: {
    DC:[{n:"Vitor Roque",s:78},{n:"Bakambu",s:74}], EI:[{n:"Antony",s:76}], ED:[{n:"Isco",s:79}],
    MCO:[{n:"Lo Celso",s:79}], MC:[{n:"Canales",s:78},{n:"Guido Rodríguez",s:76}], MCD:[{n:"William Carvalho",s:76},{n:"Fornals",s:75}],
    DEF:[{n:"Bartra",s:76},{n:"Pezzella",s:74},{n:"Llorente",s:73},{n:"Sabaly",s:74}],
    LD:[{n:"Sabaly",s:74}], LI:[{n:"Miranda",s:75}], POR:[{n:"Rui Silva",s:79},{n:"Fran Vieites",s:70}]
  }},
  { name: "Sevilla FC", squad: {
    DC:[{n:"Lukebakio",s:77},{n:"Rafa Mir",s:73}], EI:[{n:"Juanlu",s:74}], ED:[{n:"Nacho Gonzalez",s:74}],
    MCO:[{n:"Suso",s:76}], MC:[{n:"Idumbo",s:74},{n:"Saúl",s:73}], MCD:[{n:"Gudelj",s:76},{n:"Badé",s:74}],
    DEF:[{n:"Badé",s:78},{n:"Nianzou",s:75},{n:"Marcao",s:72},{n:"Pedrosa",s:73}],
    LD:[{n:"Navas",s:75}], LI:[{n:"Pedrosa",s:73}], POR:[{n:"Nyland",s:74},{n:"Dmitrovic",s:73}]
  }},
  { name: "Rayo Vallecano", squad: {
    DC:[{n:"Raúl de Tomás",s:77},{n:"Embarba",s:73}], EI:[{n:"Isi Palazón",s:78}], ED:[{n:"Álvaro García",s:74}],
    MCO:[{n:"Oscar Trejo",s:75}], MC:[{n:"Unai López",s:74},{n:"Ciss",s:72}], MCD:[{n:"Lejeune",s:72},{n:"Catena",s:71}],
    DEF:[{n:"Lejeune",s:74},{n:"Catena",s:72},{n:"Florentino",s:70},{n:"Grigore",s:70}],
    LD:[{n:"Balliu",s:71}], LI:[{n:"Fran García",s:73}], POR:[{n:"Dimitrievski",s:76},{n:"Comesaña",s:68}]
  }},
  { name: "Getafe CF", squad: {
    DC:[{n:"Borja Mayoral",s:76},{n:"Uche",s:72}], EI:[{n:"Arambarri",s:72}], ED:[{n:"Jaime Mata",s:72}],
    MCO:[{n:"Maksimovic",s:72}], MC:[{n:"Arambarri",s:74},{n:"Carles Aleñá",s:73}], MCD:[{n:"Djené",s:73},{n:"Duarte",s:72}],
    DEF:[{n:"Djené",s:74},{n:"Duarte",s:73},{n:"Iglesias",s:70},{n:"Nyom",s:70}],
    LD:[{n:"Nyom",s:70}], LI:[{n:"Gastón Álvarez",s:71}], POR:[{n:"David Soria",s:77},{n:"Guaita",s:74}]
  }},
  { name: "Celta de Vigo", squad: {
    DC:[{n:"Aspas",s:82},{n:"Williot Swedberg",s:74}], EI:[{n:"Carles Pérez",s:75}], ED:[{n:"Cervi",s:74}],
    MCO:[{n:"Beltrán",s:76}], MC:[{n:"Tapia",s:75},{n:"Méndez",s:73}], MCD:[{n:"Jailson",s:72},{n:"Sotelo",s:71}],
    DEF:[{n:"Unai Núñez",s:74},{n:"Aidoo",s:73},{n:"Mingueza",s:74},{n:"Carlos Domínguez",s:70}],
    LD:[{n:"Mingueza",s:74}], LI:[{n:"Javi Galán",s:74}], POR:[{n:"Guaita",s:74},{n:"Iván Villar",s:72}]
  }},
  { name: "Osasuna", squad: {
    DC:[{n:"Budimir",s:78},{n:"Ante Budimir",s:76}], EI:[{n:"Rubén García",s:76}], ED:[{n:"Aimar Oroz",s:74}],
    MCO:[{n:"Moncayola",s:74}], MC:[{n:"Torró",s:73},{n:"Lucas Torró",s:73}], MCD:[{n:"Nacho Vidal",s:72},{n:"Areso",s:71}],
    DEF:[{n:"Unai García",s:75},{n:"Herrando",s:73},{n:"David García",s:76},{n:"Cruz",s:70}],
    LD:[{n:"Nacho Vidal",s:72}], LI:[{n:"Juan Cruz",s:72}], POR:[{n:"Herrera",s:76},{n:"Cantero",s:68}]
  }},
  { name: "Girona FC", squad: {
    DC:[{n:"Dovbyk",s:83},{n:"Stuani",s:77}], EI:[{n:"Sávio",s:82}], ED:[{n:"Tsygankov",s:78}],
    MCO:[{n:"Aleix García",s:82}], MC:[{n:"Romeu",s:78},{n:"Herrera",s:75}], MCD:[{n:"Miguel Gutiérrez",s:74},{n:"Blind",s:73}],
    DEF:[{n:"Blind",s:74},{n:"Juanpe",s:73},{n:"Eric García",s:75},{n:"López",s:72}],
    LD:[{n:"Arnau Martínez",s:75}], LI:[{n:"Miguel Gutiérrez",s:76}], POR:[{n:"Gazzaniga",s:79},{n:"Juan Carlos",s:72}]
  }},
  { name: "Deportivo Alavés", squad: {
    DC:[{n:"Kike García",s:72},{n:"Boiro",s:68}], EI:[{n:"Luis Rioja",s:73}], ED:[{n:"Guridi",s:70}],
    MCO:[{n:"Proto",s:70}], MC:[{n:"Blanco",s:70},{n:"Toni Moya",s:69}], MCD:[{n:"Abqar",s:68},{n:"Escalante",s:70}],
    DEF:[{n:"Mouriño",s:72},{n:"Tenaglia",s:70},{n:"Diarra",s:69},{n:"Duarte",s:68}],
    LD:[{n:"Tenaglia",s:70}], LI:[{n:"Javi López",s:70}], POR:[{n:"Antonio Sivera",s:74},{n:"Pelayo",s:65}]
  }},
  { name: "Valencia CF", squad: {
    DC:[{n:"Hugo Duro",s:76},{n:"Rino",s:70}], EI:[{n:"Pepelu",s:74}], ED:[{n:"Fran Pérez",s:72}],
    MCO:[{n:"Almeida",s:74}], MC:[{n:"Guillamón",s:74},{n:"Javi Guerra",s:73}], MCD:[{n:"Mosquera",s:72},{n:"Thierry",s:70}],
    DEF:[{n:"Mosquera",s:72},{n:"Paulista",s:74},{n:"Diakhaby",s:72},{n:"Gayà",s:75}],
    LD:[{n:"Jesús Vázquez",s:72}], LI:[{n:"Gayà",s:75}], POR:[{n:"Mamardashvili",s:82},{n:"Canós",s:65}]
  }},
  { name: "Espanyol", squad: {
    DC:[{n:"Jofre Carreras",s:70},{n:"Lassad",s:68}], EI:[{n:"Puado",s:72}], ED:[{n:"Pol Lirola",s:70}],
    MCO:[{n:"Darder",s:75}], MC:[{n:"Aguado",s:71},{n:"Edu Expósito",s:70}], MCD:[{n:"Lecomte",s:68},{n:"Kumbulla",s:70}],
    DEF:[{n:"Cabrera",s:72},{n:"Calero",s:71},{n:"Kumbulla",s:70},{n:"Ruiz",s:68}],
    LD:[{n:"Pol Lirola",s:70}], LI:[{n:"Pedrosa",s:70}], POR:[{n:"Joan García",s:78},{n:"Oier",s:68}]
  }},
  { name: "RCD Mallorca", squad: {
    DC:[{n:"Muriqi",s:78},{n:"Abdón Prats",s:71}], EI:[{n:"Larin",s:72}], ED:[{n:"Samú Costa",s:70}],
    MCO:[{n:"Sergi Darder",s:73}], MC:[{n:"Maffeo",s:72},{n:"Dani Rodríguez",s:71}], MCD:[{n:"Morlanes",s:70},{n:"Mascarell",s:70}],
    DEF:[{n:"Valjent",s:75},{n:"Raíllo",s:74},{n:"Copete",s:70},{n:"Maffeo",s:72}],
    LD:[{n:"Maffeo",s:72}], LI:[{n:"Jaume Costa",s:70}], POR:[{n:"Greif",s:76},{n:"Leo Román",s:68}]
  }},
  { name: "CD Leganés", squad: {
    DC:[{n:"Miguel de la Fuente",s:68},{n:"Cyle Larin",s:70}], EI:[{n:"Óscar Rodríguez",s:72}], ED:[{n:"Brasanac",s:68}],
    MCO:[{n:"Caracol",s:69}], MC:[{n:"Recio",s:68},{n:"Gaku Shibasaki",s:68}], MCD:[{n:"Cissé",s:67},{n:"Tapia",s:67}],
    DEF:[{n:"Sergio González",s:70},{n:"Nastasic",s:69},{n:"Tarín",s:67},{n:"Jonathan Silva",s:68}],
    LD:[{n:"Kevin Rodrigues",s:68}], LI:[{n:"Jonathan Silva",s:68}], POR:[{n:"Pichu Cuéllar",s:70},{n:"Portilla",s:63}]
  }},
  { name: "Real Valladolid", squad: {
    DC:[{n:"Sergio León",s:67},{n:"Nano",s:64}], EI:[{n:"Monchu",s:67}], ED:[{n:"Plata",s:68}],
    MCO:[{n:"Raúl Moro",s:69}], MC:[{n:"Hervías",s:66},{n:"Meseguer",s:65}], MCD:[{n:"Roque Mesa",s:65},{n:"Anuar",s:64}],
    DEF:[{n:"Joaquín Fernández",s:68},{n:"Boyomo",s:66},{n:"Nigmatullin",s:65},{n:"Rosa",s:64}],
    LD:[{n:"Víctor García",s:65}], LI:[{n:"Rosa",s:64}], POR:[{n:"Hein",s:71},{n:"Masip",s:68}]
  }},
];

function avg(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 65; }
function norm(v)  { return Math.max(0, Math.min(1, (v - 50) / 50)); }

function calcSquadStrength(squad) {
  const g = pos => (squad[pos] || []).map(p => p.s);
  const avgDC  = avg(g("DC")),  avgEI  = avg(g("EI")),  avgED  = avg(g("ED"));
  const avgMCO = avg(g("MCO")), avgMC  = avg(g("MC")),  avgMCD = avg(g("MCD"));
  const avgDEF = avg(g("DEF")), avgLD  = avg(g("LD")),  avgLI  = avg(g("LI"));
  const avgPOR = avg(g("POR"));
  const atk      = avgDC*0.50 + ((avgEI+avgED)/2)*0.25 + avgMCO*0.15 + avgMC*0.07 + avgMCD*0.03;
  const defBase  = avgDEF*0.40 + ((avgLD+avgLI)/2)*0.20 + avgPOR*0.25 + avgMCD*0.10 + avgMC*0.05;
  const defFinal = defBase * (1 + (avgPOR / 200));
  const scorers  = [
    ...(squad.DC  || []).map(p => ({ n: p.n, s: p.s, w: 3   })),
    ...(squad.EI  || []).map(p => ({ n: p.n, s: p.s, w: 1.5 })),
    ...(squad.ED  || []).map(p => ({ n: p.n, s: p.s, w: 1.5 })),
    ...(squad.MCO || []).map(p => ({ n: p.n, s: p.s, w: 1   })),
    ...(squad.MC  || []).map(p => ({ n: p.n, s: p.s, w: 0.6 })),
    ...(squad.MCD || []).map(p => ({ n: p.n, s: p.s, w: 0.3 })),
    ...(squad.DEF || []).map(p => ({ n: p.n, s: p.s, w: 0.2 })),
  ];
  return { atk, def: defFinal, scorers };
}

function calcLineupStrength(lineup) {

  if (!lineup) lineup = [];
  const byPos    = pos => lineup.filter(p => p && p.pos === pos).map(p => p.shooting || 65);
  const defByPos = pos => lineup.filter(p => p && p.pos === pos).map(p => p.def || 60);
  const avgDC  = avg(byPos("DC")),  avgEI  = avg(byPos("EI")),  avgED  = avg(byPos("ED"));
  const avgMCO = avg(byPos("MCO")), avgMC  = avg(byPos("MC")),  avgMCD = avg(byPos("MCD"));
  const avgDEF = avg(defByPos("DEF")), avgLD = avg(defByPos("LD")), avgLI = avg(defByPos("LI"));
  const avgMCDs = avg(defByPos("MCD")), avgMCs = avg(defByPos("MC"));
  const porPlayer = lineup.find(p => p && p.pos === "POR");
  const avgPOR = porPlayer ? (porPlayer.gkStat || 75) : 75;
  const atk      = avgDC*0.50 + ((avgEI+avgED)/2)*0.25 + avgMCO*0.15 + avgMC*0.07 + avgMCD*0.03;
  const defBase  = avgDEF*0.40 + ((avgLD+avgLI)/2)*0.20 + avgPOR*0.25 + avgMCDs*0.10 + avgMCs*0.05;
  const defFinal = defBase * (1 + (avgPOR / 200));
  return { atk, def: defFinal };
}

function applyTactic(atk, def, tactic) {
  if (tactic === "ofensivo")      return { atk: atk * 1.10, def: def * 0.95 };
  if (tactic === "defensivo")     return { atk: atk * 0.95, def: def * 1.10 };
  if (tactic === "presión total") return { atk: atk * 1.08, def: def * 0.88 };
  return { atk, def };
}

function goalProb(atkN, defN, total) {
  let p = 0.012 + (atkN - defN) * 0.030 + ((atkN + defN) / 2) * 0.018;
  if (total >= 4) p *= 0.70;
  if (total >= 6) p *= 0.50;
  return Math.max(0.006, Math.min(0.09, p));
}

function pickLineupScorer(lineup) {
  const pool    = lineup.filter(p => p && p.pos !== "POR");
  const weights = { DC:3, EI:1.5, ED:1.5, MCO:1, MC:0.6, MCD:0.3, DEF:0.2, LD:0.15, LI:0.15 };
  const total   = pool.reduce((s, p) => s + (p.shooting || 50) * (weights[p.pos] || 0.2), 0);
  let r = Math.random() * total;
  for (const p of pool) { r -= (p.shooting || 50) * (weights[p.pos] || 0.2); if (r <= 0) return p.name; }
  return pool[pool.length - 1]?.name || "Jugador";
}

function pickRivalScorer(scorers) {
  const total = scorers.reduce((s, p) => s + p.s * p.w, 0);
  let r = Math.random() * total;
  for (const p of scorers) { r -= p.s * p.w; if (r <= 0) return p.n; }
  return scorers[scorers.length - 1].n;
}

function pickLineupCard(lineup) {
  const pool = lineup.filter(p => p && p.pos !== "POR");
  return pool[Math.floor(Math.random() * pool.length)]?.name || "Jugador";
}

function pickRivalCard(scorers) {
  return scorers[Math.floor(Math.random() * scorers.length)]?.n || "Jugador";
}

export default function MatchEngine({ club, setClub, season, calendar, setCalendar, onNextSeason, formation, mentality, lineup, externalPlayers, t, navigate }) {

  const MATCH_INTERVAL_MS = 333;

  const [tactic,       setTacticState]  = useState(mentality || "equilibrado");
  const [matchState,   setMatchState]   = useState("idle");
  const [minute,       setMinute]       = useState(0);
  const [homeGoals,    setHomeGoals]    = useState(0);
  const [awayGoals,    setAwayGoals]    = useState(0);
  const [events,       setEvents]       = useState([]);
  const [otherMatches, setOtherMatches] = useState([]);
  const [rival,        setRival]        = useState(null);
  const [rivalStr,     setRivalStr]     = useState(null);
  const [jornada,      setJornada]      = useState(1);
  const [yellowCards,  setYellowCards]  = useState({});

  const intervalRef  = useRef(null);
  const goalRefH     = useRef(0);
  const goalRefA     = useRef(0);
  const minuteRef    = useRef(0);
  const totalGoalRef = useRef(0);
  const yellowRef    = useRef({});
  const tacticRef    = useRef(tactic);
  const lineupRef = useRef(lineup || []);

  useEffect(() => { tacticRef.current = tactic; }, [tactic]);
  useEffect(() => { lineupRef.current = lineup || []; }, [lineup]);
  useEffect(() => () => clearInterval(intervalRef.current), []);

  function handleTactic(t) { setTacticState(t); tacticRef.current = t; }

  const lineupComplete = (lineup || []).filter(Boolean).length === 11;

  function initMatch() {
    const r    = RIVAL_TEAMS[Math.floor(Math.random() * RIVAL_TEAMS.length)];
    const rStr = calcSquadStrength(r.squad);
    setRival(r);
    setRivalStr(rStr);
    const pool   = RIVAL_TEAMS.filter(t => t.name !== r.name);
    const others = [];
    for (let i = 0; i + 1 < pool.length && others.length < 9; i += 2) {
      const hs = calcSquadStrength(pool[i].squad);
      const as = calcSquadStrength(pool[i + 1].squad);
      others.push({
        h: pool[i].name, a: pool[i + 1].name,
        hg: 0, ag: 0,
        hAtk: norm(hs.atk), hDef: norm(hs.def),
        aAtk: norm(as.atk), aDef: norm(as.def),
        min: 0, done: false, tot: 0,
      });
    }
    setOtherMatches(others);
    return { r, rStr, others };
  }

  function startMatch() {

    if (!lineupComplete) {
      console.log("⚠️ Alineación incompleta (se permite jugar)");
    }
    goalRefH.current     = 0;
    goalRefA.current     = 0;
    minuteRef.current    = 0;
    totalGoalRef.current = 0;
    yellowRef.current    = {};

    setHomeGoals(0);
    setAwayGoals(0);
    setMinute(0);
    setEvents([]);
    setYellowCards({});
    setMatchState("playing");

    const { r, rStr, others } = initMatch();
    const othersRef = others.map(o => ({ ...o }));

    intervalRef.current = setInterval(() => {
      minuteRef.current++;
      const min = minuteRef.current;
      setMinute(min);

      let currentLineup = lineupRef.current;

      if (!currentLineup || currentLineup.filter(Boolean).length < 11) {
        // usa los primeros 11 jugadores automáticamente
        currentLineup = initialPlayers.slice(0, 11).map((p, i) => ({
          ...p,
          pos: formations["4-4-2"][i].pos
        }));
      }
      const lineupStr     = calcLineupStrength(currentLineup);
      const tac           = tacticRef.current;
      const tacApplied    = applyTactic(lineupStr.atk, lineupStr.def, tac);
      const rand          = 1 + (Math.random() * 0.08 - 0.04);
      const hAtk          = norm(tacApplied.atk * rand * 1.05);
      const hDef          = norm(tacApplied.def * rand * 1.02);
      const aAtk          = norm(rStr.atk * (1 + (Math.random() * 0.08 - 0.04)));
      const aDef          = norm(rStr.def * (1 + (Math.random() * 0.08 - 0.04)));
      const tot           = totalGoalRef.current;
      const newEvents     = [];
      const redsHome = events.filter(e => e.side === "home" && e.type === "red").length;
const redsAway = events.filter(e => e.side === "away" && e.type === "red").length;

const redPenaltyHome = 1 - (redsHome * 0.15);
const redPenaltyAway = 1 - (redsAway * 0.15);

const finalHAtk = hAtk * redPenaltyHome;
const finalHDef = hDef * redPenaltyHome;
const finalAAtk = aAtk * redPenaltyAway;
const finalADef = aDef * redPenaltyAway;

      if (Math.random() < goalProb(finalHAtk, finalADef, tot)) {
        goalRefH.current++;
        totalGoalRef.current++;
        setHomeGoals(goalRefH.current);
        newEvents.push({ min, type: "goal", player: pickLineupScorer(currentLineup), side: "home" });
      }
      if (Math.random() < goalProb(finalAAtk, finalHDef, tot)) {
        goalRefA.current++;
        totalGoalRef.current++;
        setAwayGoals(goalRefA.current);
        newEvents.push({ min, type: "goal", player: pickRivalScorer(rStr.scorers), side: "away" });
      }

      if (Math.random() < 0.016) {
        const side   = Math.random() < 0.5 ? "home" : "away";
        const player = side === "home" ? pickLineupCard(currentLineup) : pickRivalCard(rStr.scorers);
        const yc     = yellowRef.current;
        if (yc[player]) {
          delete yc[player];
          yellowRef.current = { ...yc };
          setYellowCards({ ...yc });
          newEvents.push({ min, type: "red",     player, side });
          newEvents.push({ min, type: "yellow2", player, side });
        } else if (Math.random() < 0.12) {
          newEvents.push({ min, type: "red", player, side });
        } else {
          yc[player] = true;
          yellowRef.current = { ...yc };
          setYellowCards({ ...yc });
          newEvents.push({ min, type: "yellow", player, side });
        }
      }

      if (newEvents.length > 0) setEvents(prev => [...newEvents.reverse(), ...prev]);

      othersRef.forEach(m => {
        if (!m.done) {
          m.min = min;
          if (Math.random() < goalProb(m.hAtk, m.aDef, m.tot)) { m.hg++; m.tot++; }
          if (Math.random() < goalProb(m.aAtk, m.hDef, m.tot)) { m.ag++; m.tot++; }
          if (min >= 90) m.done = true;
        }
      });
      setOtherMatches([...othersRef]);

      if (min >= 90) {
        clearInterval(intervalRef.current);
        setMatchState("finished");
        setJornada(j => j + 1);
      }
    }, MATCH_INTERVAL_MS);
  }

  function resetMatch() {
    setEvents([]);
    setMinute(0);
    setHomeGoals(0);
    setAwayGoals(0);
    setMatchState("idle");
    setRival(null);
    setOtherMatches([]);
  }

  const s = {
    wrap:         { background:"#0a1628", minHeight:"100vh", padding:12, color:"#e8f4ff", maxWidth:390, margin:"0 auto" },
    topBar:       { fontSize:11, color:"#5a8ab0", marginBottom:2 },
    card:         { background:"#112240", borderRadius:12, border:"0.5px solid #1e3a5f", padding:14, marginBottom:10 },
    clockRow: { display:"flex", justifyContent:"flex-end", marginBottom:2 },
    teamsRow:     { display:"flex", alignItems:"center", justifyContent:"space-between", gap:8, marginBottom:8 },
    teamHome:     { fontSize:15, fontWeight:500, color:"#f1c40f", flex:1, lineHeight:1.3 },
    teamAway:     { fontSize:15, fontWeight:500, color:"#e8f4ff", flex:1, textAlign:"right", lineHeight:1.3 },
    score:        { fontSize:30, fontWeight:700, color:"#e8f4ff", minWidth:64, textAlign:"center" },
    eventsGrid:   { display:"grid", gridTemplateColumns:"1fr 1fr", gap:4, minHeight:44, marginBottom:4 },
    eventHome:    { display:"flex", alignItems:"center", gap:4, fontSize:10, color:"#b0c8e8", padding:"2px 0" },
    eventAway:    { display:"flex", flexDirection:"row-reverse", alignItems:"center", gap:4, fontSize:10, color:"#b0c8e8", padding:"2px 0" },
    goalIcon:     { width:14, height:14, borderRadius:"50%", background:"#1D9E75", display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, flexShrink:0, color:"#fff" },
    yellowIcon:   { width:10, height:13, borderRadius:2, background:"#f1c40f", flexShrink:0 },
    redIcon:      { width:10, height:13, borderRadius:2, background:"#e74c3c", flexShrink:0 },
    tacRow:       { display:"flex", gap:6, marginBottom:8 },
    tacBtnBase:   { flex:1, border:"0.5px solid #1e3a5f", color:"#5a8ab0", padding:"6px 0", borderRadius:8, fontSize:11, cursor:"pointer", background:"#0d1f3c" },
    tacBtnActive: { flex:1, border:"1.5px solid #1D9E75", color:"#1D9E75", padding:"6px 0", borderRadius:8, fontSize:11, cursor:"pointer", background:"#0a2a1e" },
    btn:          { width:"100%", background:"#1D9E75", border:"none", color:"#fff", padding:"10px 0", borderRadius:10, fontSize:13, fontWeight:500, cursor:"pointer", marginBottom:8 },
    btnDisabled:  { width:"100%", background:"#1e3a5f", border:"none", color:"#5a8ab0", padding:"10px 0", borderRadius:10, fontSize:13, cursor:"not-allowed", marginBottom:8 },
    backBtn:      { width:"100%", background:"#0d1f3c", border:"0.5px solid #1e3a5f", color:"#5a8ab0", padding:"10px 0", borderRadius:10, fontSize:13, cursor:"pointer", marginBottom:8 },
    liveSection:  { background:"#112240", borderRadius:12, border:"0.5px solid #1e3a5f", padding:12 },
    liveTitle:    { fontSize:11, color:"#1D9E75", textTransform:"uppercase", letterSpacing:1, marginBottom:8, display:"flex", alignItems:"center", gap:6 },
    liveDot:      { width:7, height:7, borderRadius:"50%", background:"#1D9E75" },
    liveDotOff:   { width:7, height:7, borderRadius:"50%", background:"#5a8ab0" },
    matchRow:     { display:"flex", justifyContent:"space-between", alignItems:"center", padding:"4px 0", borderBottom:"0.5px solid #1e3a5f" },
    mTeam:        { fontSize:11, color:"#b0c8e8", flex:1 },
    mTeamR:       { fontSize:11, color:"#b0c8e8", flex:1, textAlign:"right" },
    mScore:       { fontSize:12, fontWeight:500, color:"#e8f4ff", minWidth:36, textAlign:"center" },
    finMsg:       { fontSize:13, textAlign:"center", marginTop:6, fontWeight:500 },
  };

  const progress = (minute / 90) * 113;
  const dash     = `${progress} ${113 - progress}`;
  const result   = matchState === "finished"
    ? homeGoals > awayGoals ? { text:`Victoria ${homeGoals}-${awayGoals}`, color:"#1D9E75" }
    : awayGoals > homeGoals ? { text:`Derrota ${homeGoals}-${awayGoals}`,  color:"#e74c3c" }
    : { text:`Empate ${homeGoals}-${awayGoals}`, color:"#f1c40f" }
    : null;

  return (
    <div style={s.wrap}>
      <div style={s.topBar}>
        {club?.division === 1 ? "Primera División" : club?.division === 2 ? "Segunda División" : "Tercera División"} · Jornada {jornada}
      </div>

      <div style={s.card}>
      {!lineupComplete && (
  <div style={{
    fontSize: 11,
    color: "#f1c40f",
    textAlign: "center",
    marginBottom: 6
  }}>
    ⚠️ Alineación incompleta
  </div>
)}
        <div style={s.clockRow}>
          <div style={{ width:36, height:36, position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg viewBox="0 0 44 44" width="44" height="44" style={{ position:"absolute", top:0, left:0 }}>
              <circle cx="22" cy="22" r="18" fill="none" stroke="#1e3a5f" strokeWidth="3"/>
              <circle cx="22" cy="22" r="18" fill="none" stroke="#1D9E75" strokeWidth="3"
                strokeDasharray={dash} strokeLinecap="round" transform="rotate(-90 22 22)"/>
            </svg>
            <span style={{ fontSize:12, fontWeight:500, color:"#e8f4ff", zIndex:1 }}>{minute}'</span>
          </div>
        </div>

        <div style={s.teamsRow}>
        <span style={s.teamHome}>
  {club && club.name ? club.name : "UD Las Palmas"}
</span>
          <span style={s.score}>{homeGoals} - {awayGoals}</span>
          <span style={s.teamAway}>{rival?.name || "-"}</span>
        </div>

        <div style={s.eventsGrid}>
          <div>
            {events.filter(e => e.side === "home").map((e, i) => (
              <div key={i} style={s.eventHome}>
                {e.type === "goal"    && <div style={s.goalIcon}>G</div>}
                {e.type === "yellow"  && <div style={s.yellowIcon}/>}
                {e.type === "yellow2" && <div style={s.yellowIcon}/>}
                {e.type === "red"     && <div style={s.redIcon}/>}
                <span style={{ fontSize:10, color:"#b0c8e8", lineHeight:1.3 }}>{e.min}' {e.player}</span>
              </div>
            ))}
          </div>
          <div>
            {events.filter(e => e.side === "away").map((e, i) => (
              <div key={i} style={s.eventAway}>
                {e.type === "goal"    && <div style={s.goalIcon}>G</div>}
                {e.type === "yellow"  && <div style={s.yellowIcon}/>}
                {e.type === "yellow2" && <div style={s.yellowIcon}/>}
                {e.type === "red"     && <div style={s.redIcon}/>}
                <span style={{ fontSize:10, color:"#b0c8e8", lineHeight:1.3, textAlign:"right" }}>{e.min}' {e.player}</span>
              </div>
            ))}
          </div>
        </div>

        {result && <div style={{ ...s.finMsg, color: result.color }}>{result.text}</div>}
      </div>

      <div style={s.tacRow}>
        {["ofensivo","equilibrado","defensivo"].map(t => (
          <button key={t} onClick={() => handleTactic(t)}
            style={tactic === t ? s.tacBtnActive : s.tacBtnBase}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {matchState === "idle" && (
        <button style={s.btn} onClick={startMatch}>Jugar partido</button>
      )}
      {matchState === "playing" && (
        <button style={s.btnDisabled} disabled>Partido en curso...</button>
      )}
      {matchState === "finished" && (
        <>
          <button style={s.btn} onClick={() => navigate("home")}>Volver al inicio</button>
          <button style={s.backBtn} onClick={resetMatch}>Jugar siguiente jornada</button>
        </>
      )}

      <div style={s.liveSection}>
        <div style={s.liveTitle}>
          <div style={matchState === "playing" ? s.liveDot : s.liveDotOff}/>
          <span>{matchState === "finished" ? "Resultados finales" : "Resultados de la jornada"}</span>
        </div>
        {otherMatches.map((m, i) => (
          <div key={i} style={{ ...s.matchRow, ...(i === otherMatches.length-1 ? { borderBottom:"none" } : {}) }}>
            <span style={s.mTeam}>{m.h}</span>
            <span style={s.mScore}>
              {m.hg} - {m.ag}
              {!m.done && m.min > 0 && <span style={{ fontSize:9, color:"#1D9E75" }}> {m.min}'</span>}
            </span>
            <span style={s.mTeamR}>{m.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}