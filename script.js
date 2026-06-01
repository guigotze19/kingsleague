const SAVE_KEY = "kings-league-simulator-save-v3";
const OLD_SAVE_KEYS = [
  "kings-league-simulator-save-v2",
  "kings-league-simulator-save-v1"
];

const TEAM_DATABASE = [
  { id: 1, name: "Batista", overall: 84, goalkeeper: 82, defense: 84, midfield: 85, attack: 86, defaultStyle: "Balanced", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 2, name: "Black Dragons", overall: 75, goalkeeper: 76, defense: 78, midfield: 74, attack: 72, defaultStyle: "Counter Attack", defaultMarking: "Medium", defaultMentality: "Defensive" },
  { id: 3, name: "CNB", overall: 76, goalkeeper: 75, defense: 76, midfield: 79, attack: 74, defaultStyle: "Possession", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 4, name: "Dignitas", overall: 74, goalkeeper: 74, defense: 75, midfield: 74, attack: 73, defaultStyle: "Balanced", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 5, name: "Dinasty", overall: 73, goalkeeper: 72, defense: 73, midfield: 72, attack: 75, defaultStyle: "Direct Play", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 6, name: "DP Tigers", overall: 83, goalkeeper: 80, defense: 82, midfield: 84, attack: 86, defaultStyle: "High Press", defaultMarking: "Strong", defaultMentality: "Attacking" },
  { id: 7, name: "Furia", overall: 86, goalkeeper: 84, defense: 85, midfield: 87, attack: 89, defaultStyle: "High Press", defaultMarking: "Strong", defaultMentality: "Attacking" },
  { id: 8, name: "G3X", overall: 84, goalkeeper: 81, defense: 82, midfield: 86, attack: 88, defaultStyle: "Attacking", defaultMarking: "Medium", defaultMentality: "Attacking" },
  { id: 9, name: "Horizon", overall: 81, goalkeeper: 80, defense: 81, midfield: 84, attack: 79, defaultStyle: "Possession", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 10, name: "Keyd", overall: 80, goalkeeper: 78, defense: 79, midfield: 80, attack: 83, defaultStyle: "Counter Attack", defaultMarking: "Medium", defaultMentality: "Attacking" },
  { id: 11, name: "Legacy", overall: 77, goalkeeper: 77, defense: 78, midfield: 77, attack: 76, defaultStyle: "Balanced", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 12, name: "Loud", overall: 81, goalkeeper: 79, defense: 78, midfield: 82, attack: 86, defaultStyle: "Attacking", defaultMarking: "Medium", defaultMentality: "Attacking" },
  { id: 13, name: "MIBR", overall: 82, goalkeeper: 83, defense: 85, midfield: 81, attack: 79, defaultStyle: "Balanced", defaultMarking: "Strong", defaultMentality: "Balanced" },
  { id: 14, name: "Nation", overall: 79, goalkeeper: 78, defense: 79, midfield: 82, attack: 77, defaultStyle: "Possession", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 15, name: "Olympia", overall: 89, goalkeeper: 88, defense: 88, midfield: 90, attack: 91, defaultStyle: "Attacking", defaultMarking: "Medium", defaultMentality: "Attacking" },
  { id: 16, name: "Vorax", overall: 72, goalkeeper: 74, defense: 76, midfield: 70, attack: 68, defaultStyle: "Defensive", defaultMarking: "Strong", defaultMentality: "Defensive" },
  { id: 17, name: "West Orange", overall: 87, goalkeeper: 86, defense: 88, midfield: 87, attack: 86, defaultStyle: "Counter Attack", defaultMarking: "Medium", defaultMentality: "Balanced" },
  { id: 18, name: "Wolverines", overall: 88, goalkeeper: 87, defense: 87, midfield: 90, attack: 88, defaultStyle: "Possession", defaultMarking: "Medium", defaultMentality: "Attacking" }
];

const initialPrinceCupSeeding = [
  "Wolverines",
  "Olympia",
  "West Orange",
  "Furia",
  "Batista",
  "G3X",
  "DP Tigers",
  "MIBR",
  "Horizon",
  "Loud",
  "Keyd",
  "Nation",
  "Legacy",
  "CNB",
  "Black Dragons",
  "Dignitas",
  "Dinasty",
  "Vorax"
];

const PRINCE_STAGES = [
  { key: "play_in", name: "Play-in" },
  { key: "round_of_16", name: "Round of 16" },
  { key: "quarter_final", name: "Quarter-finals" },
  { key: "semi_final", name: "Semi-finals" },
  { key: "final", name: "Final" }
];

const PLAYER_FIRST_NAMES = ["Alex", "Bruno", "Caio", "Davi", "Enzo", "Felipe", "Igor", "Joao", "Leo", "Mateus", "Nico", "Otavio"];
const PLAYER_LAST_NAMES = ["Alves", "Barbosa", "Costa", "Dias", "Ferreira", "Lima", "Martins", "Moura", "Ramos", "Rocha", "Santos", "Silva"];
const NATIONALITIES = ["Brazil", "Argentina", "Chile", "Colombia", "Portugal", "Spain", "Uruguay"];
const PLAYER_POSITIONS = ["GK", "CB", "RB", "LB", "CDM", "CM", "CAM", "LW", "RW", "ST"];
const ATTRIBUTE_KEYS = ["pace", "attacking", "defending", "finishing", "passing", "crossing", "dribbling", "heading", "jumping", "stamina", "strength", "discipline", "penalties", "goalkeeping"];
const LINEUP_POSITIONS = ["GK", "RB", "CB", "CB", "LB", "CDM", "CM", "CAM", "LW", "RW", "ST"];
const FORMATIONS = {
  "4-3-3": ["GK", "RB", "CB", "CB", "LB", "CDM", "CM", "CM", "RW", "ST", "LW"],
  "4-2-3-1": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "RW", "CAM", "LW", "ST"],
  "4-4-2": ["GK", "RB", "CB", "CB", "LB", "RW", "CM", "CM", "LW", "ST", "ST"],
  "4-3-1-2": ["GK", "RB", "CB", "CB", "LB", "CDM", "CM", "CM", "CAM", "ST", "ST"],
  "5-4-1": ["GK", "RB", "CB", "CB", "CB", "LB", "RW", "CM", "CM", "LW", "ST"],
  "3-5-2": ["GK", "CB", "CB", "CB", "CDM", "CM", "CM", "RW", "LW", "ST", "ST"]
};
const AVAILABLE_FORMATIONS = Object.keys(FORMATIONS);
// Pitch coordinates [x%, y%] per slot, index-aligned with FORMATIONS.
// y: 0 = top (attack), 100 = bottom (own goal / GK).
const FORMATION_COORDS = {
  "4-3-3":   [[50,90],[85,70],[63,74],[37,74],[15,70],[50,55],[70,45],[30,45],[80,22],[50,15],[20,22]],
  "4-2-3-1": [[50,90],[85,71],[62,75],[38,75],[15,71],[63,55],[37,55],[80,30],[50,35],[20,30],[50,13]],
  "4-4-2":   [[50,90],[85,69],[63,73],[37,73],[15,69],[82,47],[60,49],[40,49],[18,47],[62,18],[38,18]],
  "4-3-1-2": [[50,90],[85,70],[63,74],[37,74],[15,70],[50,57],[72,49],[28,49],[50,34],[63,16],[37,16]],
  "5-4-1":   [[50,90],[88,67],[68,73],[50,76],[32,73],[12,67],[82,45],[61,48],[39,48],[18,45],[50,16]],
  "3-5-2":   [[50,90],[68,73],[50,76],[32,73],[50,57],[70,49],[30,49],[85,40],[15,40],[62,16],[38,16]]
};
const COMPETITION_KEYS = ["all", "Kings League", "Prince Cup", "Joker Supercup"];
const DEFAULT_SIMULATION_SETTINGS = {
  randomnessLevel: 50,
  goalFrequency: 100,
  cardFrequency: 100,
  injuryFrequency: 0,
  favoriteAdvantage: 100,
  homeAdvantage: 100,
  upsetChance: 100,
  substitutionFrequency: 100
};
const SIMULATION_SETTING_LABELS = {
  randomnessLevel: "Randomness",
  goalFrequency: "Goals",
  cardFrequency: "Cards",
  injuryFrequency: "Injuries",
  favoriteAdvantage: "Favorite",
  homeAdvantage: "Home",
  upsetChance: "Upsets",
  substitutionFrequency: "Subs"
};
const PAGE_SUBTITLES = {
  dashboard: "Season overview, table, and next fixture.",
  teams: "Club strengths, tactics, default formations, and key players.",
  players: "Search, filter, and edit the full player database.",
  league: "Kings League standings and round controls.",
  "prince-cup": "Cup bracket, two-legged ties, aggregates, and fixtures.",
  "joker-supercup": "Season opener between last season's qualified teams.",
  calendar: "All competitions in chronological order.",
  stats: "Leaderboards by competition, team, and season.",
  "match-center": "Prepare lineups, simulate matches, and review results.",
  "season-review": "Champions, final table, and season awards.",
  "transfer-window": "Move, add, remove, and edit players between seasons.",
  history: "Saved seasons and recent match results.",
  settings: "Simulation balance, save backup, import, and reset tools."
};
const TEAM_ID_BY_SLUG = {
  batista: 1,
  blackDragons: 2,
  cnb: 3,
  dignitas: 4,
  dinasty: 5,
  dpTigers: 6,
  furia: 7,
  g3x: 8,
  horizon: 9,
  keyd: 10,
  legacy: 11,
  loud: 12,
  mibr: 13,
  nation: 14,
  olympia: 15,
  vorax: 16,
  westOrange: 17,
  wolverines: 18
};

const playersBatch1 = [
  { name: "Victor Caires", teamId: "batista", nationality: "Brazil", position: "CAM", overall: 87 },
  { name: "Gui Girão", teamId: "batista", nationality: "Brazil", position: "ST", overall: 86 },
  { name: "Gustavo Henrique", teamId: "batista", nationality: "Brazil", position: "CB", overall: 85 },
  { name: "Pedro Rios", teamId: "batista", nationality: "Brazil", position: "RW", overall: 85 },
  { name: "Gui Dias", teamId: "batista", nationality: "Brazil", position: "GK", overall: 84 },
  { name: "Igor Barril", teamId: "batista", nationality: "Brazil", position: "CB", overall: 83 },
  { name: "Carlos Meneghini", teamId: "batista", nationality: "Brazil", position: "CDM", overall: 81 },
  { name: "Lucas Armond", teamId: "batista", nationality: "Brazil", position: "RB", overall: 80 },
  { name: "Thiago Assis", teamId: "batista", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Eduardo Lira", teamId: "batista", nationality: "Brazil", position: "LB", overall: 79 },
  { name: "Matheus Carvalhal", teamId: "batista", nationality: "Brazil", position: "LW", overall: 78 },
  { name: "Diego Montanha", teamId: "batista", nationality: "Brazil", position: "ST", overall: 77 },
  { name: "Rafael Sarmento", teamId: "batista", nationality: "Brazil", position: "CB", overall: 76 },
  { name: "Ramon Silveira", teamId: "batista", nationality: "Brazil", position: "CDM", overall: 75 },
  { name: "Allan Moraes", teamId: "batista", nationality: "Brazil", position: "CM", overall: 75 },
  { name: "João Lacerda", teamId: "batista", nationality: "Brazil", position: "LW", overall: 75 },
  { name: "João Felipe Tavares", teamId: "batista", nationality: "Brazil", position: "LB", overall: 74 },
  { name: "Eduardo Magalhães", teamId: "batista", nationality: "Brazil", position: "GK", overall: 74 },
  { name: "Leonardo Britto", teamId: "batista", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Renato Furlani", teamId: "batista", nationality: "Brazil", position: "ST", overall: 74 },
  { name: "Henrique Peçanha", teamId: "batista", nationality: "Brazil", position: "RW", overall: 74 },
  { name: "Matheus Torres", teamId: "batista", nationality: "Brazil", position: "RB", overall: 74 },
  { name: "Lucas Vidigal", teamId: "batista", nationality: "Brazil", position: "CAM", overall: 72 },
  { name: "Jonathan Freire", teamId: "batista", nationality: "Brazil", position: "CB", overall: 72 },
  { name: "Rodrigo Cerqueira", teamId: "batista", nationality: "Brazil", position: "GK", overall: 72 },
  { name: "Miguel Torrés", teamId: "blackDragons", nationality: "Spain", position: "RW", overall: 84 },
  { name: "Hiroshi Tanaka", teamId: "blackDragons", nationality: "Japan", position: "ST", overall: 83 },
  { name: "Rafael Monteiro", teamId: "blackDragons", nationality: "Brazil", position: "GK", overall: 81 },
  { name: "Gustavo Ibarra", teamId: "blackDragons", nationality: "Paraguay", position: "CAM", overall: 80 },
  { name: "Bruno Castilho", teamId: "blackDragons", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Daniel Sørensen", teamId: "blackDragons", nationality: "Denmark", position: "RB", overall: 79 },
  { name: "Lucas Amaral", teamId: "blackDragons", nationality: "Brazil", position: "CB", overall: 79 },
  { name: "Nikolai Volkov", teamId: "blackDragons", nationality: "Russia", position: "LW", overall: 78 },
  { name: "Henrique Valença", teamId: "blackDragons", nationality: "Brazil", position: "CB", overall: 78 },
  { name: "Simón Cárdenas", teamId: "blackDragons", nationality: "Colombia", position: "CDM", overall: 78 },
  { name: "Pedro Azevedo", teamId: "blackDragons", nationality: "Brazil", position: "RB", overall: 77 },
  { name: "Gabriel Klein", teamId: "blackDragons", nationality: "Germany", position: "GK", overall: 76 },
  { name: "Weslley Nascimento", teamId: "blackDragons", nationality: "Brazil", position: "LW", overall: 76 },
  { name: "Matías Correa", teamId: "blackDragons", nationality: "Uruguay", position: "CB", overall: 75 },
  { name: "Arthur Silveira", teamId: "blackDragons", nationality: "Brazil", position: "ST", overall: 74 },
  { name: "Thiago Rangel", teamId: "blackDragons", nationality: "Brazil", position: "RW", overall: 74 },
  { name: "Julián Meza", teamId: "blackDragons", nationality: "Chile", position: "LB", overall: 74 },
  { name: "Eduardo Farias", teamId: "blackDragons", nationality: "Brazil", position: "CDM", overall: 74 },
  { name: "Felipe Mendonça", teamId: "blackDragons", nationality: "Brazil", position: "CAM", overall: 72 },
  { name: "Tomás Villalba", teamId: "blackDragons", nationality: "Argentina", position: "CB", overall: 70 },
  { name: "João Victor Prado", teamId: "blackDragons", nationality: "Brazil", position: "GK", overall: 70 },
  { name: "Caio Ramos", teamId: "blackDragons", nationality: "Brazil", position: "LB", overall: 69 },
  { name: "Ramon Cavalcanti", teamId: "blackDragons", nationality: "Brazil", position: "ST", overall: 69 },
  { name: "Sérgio Duarte", teamId: "blackDragons", nationality: "Brazil", position: "CB", overall: 68 },
  { name: "Álvaro Benítez", teamId: "cnb", nationality: "Mexico", position: "LW", overall: 83 },
  { name: "Leonardo Pires", teamId: "cnb", nationality: "Brazil", position: "CAM", overall: 81 },
  { name: "Alex Montecchio", teamId: "cnb", nationality: "Italy", position: "ST", overall: 81 },
  { name: "Gabriel Siqueira", teamId: "cnb", nationality: "Brazil", position: "RW", overall: 81 },
  { name: "Rafinha Moura", teamId: "cnb", nationality: "Brazil", position: "CDM", overall: 80 },
  { name: "Mateo Roldán", teamId: "cnb", nationality: "Argentina", position: "CDM", overall: 79 },
  { name: "Dimitri Savic", teamId: "cnb", nationality: "Serbia", position: "GK", overall: 79 },
  { name: "Lucca Ferraz", teamId: "cnb", nationality: "Brazil", position: "RB", overall: 78 },
  { name: "Eduardo Leme", teamId: "cnb", nationality: "Brazil", position: "CB", overall: 77 },
  { name: "Rodrigo Tavares", teamId: "cnb", nationality: "Brazil", position: "ST", overall: 77 },
  { name: "Gerard Toussaint", teamId: "cnb", nationality: "France", position: "CB", overall: 77 },
  { name: "Marco Valdés", teamId: "cnb", nationality: "Ecuador", position: "LB", overall: 77 },
  { name: "Matheus Cardozo", teamId: "cnb", nationality: "Brazil", position: "GK", overall: 76 },
  { name: "Renato Oliveira", teamId: "cnb", nationality: "Brazil", position: "GK", overall: 76 },
  { name: "Ian Costa", teamId: "cnb", nationality: "Brazil", position: "CAM", overall: 75 },
  { name: "Miguel Aragonés", teamId: "cnb", nationality: "Spain", position: "LW", overall: 74 },
  { name: "Henrique Saldanha", teamId: "cnb", nationality: "Brazil", position: "LB", overall: 74 },
  { name: "Caio Bernardes", teamId: "cnb", nationality: "Brazil", position: "CB", overall: 73 },
  { name: "Felipe Bastos", teamId: "cnb", nationality: "Brazil", position: "CAM", overall: 73 },
  { name: "Bruno Farias", teamId: "cnb", nationality: "Brazil", position: "ST", overall: 72 },
  { name: "Yago Martins", teamId: "cnb", nationality: "Brazil", position: "CDM", overall: 72 },
  { name: "Rafael Campello", teamId: "cnb", nationality: "Brazil", position: "CB", overall: 72 },
  { name: "Jorge Macao", teamId: "cnb", nationality: "Brazil", position: "CB", overall: 71 },
  { name: "João Pedro Lacerda", teamId: "cnb", nationality: "Brazil", position: "RW", overall: 70 },
  { name: "Vitor Marques", teamId: "cnb", nationality: "Brazil", position: "RB", overall: 68 },
  { name: "Enzo Paladini", teamId: "dignitas", nationality: "Italy", position: "RW", overall: 84 },
  { name: "Caio Albuquerque", teamId: "dignitas", nationality: "Brazil", position: "LW", overall: 80 },
  { name: "Eduardo Seabra", teamId: "dignitas", nationality: "Brazil", position: "ST", overall: 80 },
  { name: "Tomislav Kovac", teamId: "dignitas", nationality: "Croatia", position: "CB", overall: 79 },
  { name: "Wellington Prado", teamId: "dignitas", nationality: "Brazil", position: "CAM", overall: 79 },
  { name: "Matheus Pradella", teamId: "dignitas", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Davi Alcântara", teamId: "dignitas", nationality: "Brazil", position: "CDM", overall: 78 },
  { name: "Rodrigo Passos", teamId: "dignitas", nationality: "Brazil", position: "LB", overall: 77 },
  { name: "Thiago Cunha", teamId: "dignitas", nationality: "Brazil", position: "GK", overall: 77 },
  { name: "Murilo Santini", teamId: "dignitas", nationality: "Brazil", position: "CB", overall: 77 },
  { name: "Hassan Al-Bakr", teamId: "dignitas", nationality: "Saudi Arabia", position: "ST", overall: 77 },
  { name: "Nicolás Zamorano", teamId: "dignitas", nationality: "Chile", position: "CAM", overall: 77 },
  { name: "Rafael Serrano", teamId: "dignitas", nationality: "Brazil", position: "RB", overall: 76 },
  { name: "Jhonatan Guarín", teamId: "dignitas", nationality: "Colombia", position: "RW", overall: 75 },
  { name: "Óscar Valverde", teamId: "dignitas", nationality: "Costa Rica", position: "CDM", overall: 75 },
  { name: "Sebastián Núñez", teamId: "dignitas", nationality: "Chile", position: "RB", overall: 75 },
  { name: "Lucas Figueiredo", teamId: "dignitas", nationality: "Brazil", position: "CAM", overall: 74 },
  { name: "Ruan Brito", teamId: "dignitas", nationality: "Brazil", position: "LW", overall: 74 },
  { name: "Andrei Paun", teamId: "dignitas", nationality: "Romania", position: "LB", overall: 73 },
  { name: "Pablo Arrieta", teamId: "dignitas", nationality: "Argentina", position: "CB", overall: 73 },
  { name: "João Gabriel Lins", teamId: "dignitas", nationality: "Brazil", position: "CB", overall: 73 },
  { name: "Felipe Godoy", teamId: "dignitas", nationality: "Brazil", position: "ST", overall: 73 },
  { name: "Carlos Medeiros", teamId: "dignitas", nationality: "Brazil", position: "GK", overall: 72 },
  { name: "Daniel Arantes", teamId: "dignitas", nationality: "Brazil", position: "CAM", overall: 71 },
  { name: "Vinícius Barcellos", teamId: "dignitas", nationality: "Brazil", position: "CB", overall: 71 }
];

const playersBatch2 = [
  { name: "Cristian Valdés", teamId: "dinasty", nationality: "Chile", position: "CAM", overall: 84 },
  { name: "Andrés Molina", teamId: "dinasty", nationality: "Paraguay", position: "RB", overall: 83 },
  { name: "Lukas Hermann", teamId: "dinasty", nationality: "Germany", position: "CDM", overall: 82 },
  { name: "Juliano Teixeira", teamId: "dinasty", nationality: "Brazil", position: "GK", overall: 80 },
  { name: "Rafael Bittencourt", teamId: "dinasty", nationality: "Brazil", position: "ST", overall: 80 },
  { name: "Caio Kalil", teamId: "dinasty", nationality: "Brazil", position: "RW", overall: 79 },
  { name: "Matheus Diniz", teamId: "dinasty", nationality: "Brazil", position: "LW", overall: 77 },
  { name: "Leandro Vital", teamId: "dinasty", nationality: "Brazil", position: "CB", overall: 77 },
  { name: "Gabriel Pontes", teamId: "dinasty", nationality: "Brazil", position: "CDM", overall: 76 },
  { name: "Matheus Alvarenga", teamId: "dinasty", nationality: "Brazil", position: "LB", overall: 76 },
  { name: "Konstantin Markov", teamId: "dinasty", nationality: "Russia", position: "ST", overall: 76 },
  { name: "Franco Da Silva", teamId: "dinasty", nationality: "Uruguay", position: "LW", overall: 75 },
  { name: "Ricardo Baroni", teamId: "dinasty", nationality: "Italy", position: "LB", overall: 74 },
  { name: "João Paulo Sena", teamId: "dinasty", nationality: "Brazil", position: "CAM", overall: 74 },
  { name: "Gustavo Neres", teamId: "dinasty", nationality: "Brazil", position: "RB", overall: 74 },
  { name: "Álvaro Santamaría", teamId: "dinasty", nationality: "Spain", position: "GK", overall: 74 },
  { name: "César Mendonça", teamId: "dinasty", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Leonardo Vilar", teamId: "dinasty", nationality: "Brazil", position: "ST", overall: 73 },
  { name: "André Silveira", teamId: "dinasty", nationality: "Brazil", position: "CDM", overall: 73 },
  { name: "Renan Tavares", teamId: "dinasty", nationality: "Brazil", position: "CAM", overall: 73 },
  { name: "Santiago Valverde", teamId: "dinasty", nationality: "Bolivia", position: "RW", overall: 72 },
  { name: "Omar Helou", teamId: "dinasty", nationality: "Lebanon", position: "CB", overall: 68 },
  { name: "Ezequiel Bustos", teamId: "dinasty", nationality: "Argentina", position: "CB", overall: 72 },
  { name: "Thierry Dubois", teamId: "dpTigers", nationality: "France", position: "LW", overall: 84 },
  { name: "Matheus Cunha", teamId: "dpTigers", nationality: "Brazil", position: "CDM", overall: 84 },
  { name: "Guilherme Rocha", teamId: "dpTigers", nationality: "Brazil", position: "GK", overall: 84 },
  { name: "João Ribas", teamId: "dpTigers", nationality: "Brazil", position: "RW", overall: 83 },
  { name: "Malik N'Doye", teamId: "dpTigers", nationality: "Senegal", position: "CB", overall: 83 },
  { name: "Alexandre Barros", teamId: "dpTigers", nationality: "Brazil", position: "ST", overall: 81 },
  { name: "Diego Amaral", teamId: "dpTigers", nationality: "Brazil", position: "CDM", overall: 80 },
  { name: "Lucas Barcellos", teamId: "dpTigers", nationality: "Brazil", position: "LB", overall: 79 },
  { name: "Rafael Salles", teamId: "dpTigers", nationality: "Brazil", position: "CB", overall: 78 },
  { name: "Artem Kolesnikov", teamId: "dpTigers", nationality: "Ukraine", position: "CDM", overall: 77 },
  { name: "Thiago Venturi", teamId: "dpTigers", nationality: "Brazil", position: "RB", overall: 77 },
  { name: "Samuel Delatorre", teamId: "dpTigers", nationality: "Brazil", position: "CAM", overall: 77 },
  { name: "Luis Cantón", teamId: "dpTigers", nationality: "Mexico", position: "RW", overall: 76 },
  { name: "Felipe Moretti", teamId: "dpTigers", nationality: "Brazil", position: "LW", overall: 76 },
  { name: "Miguel Ferreyra", teamId: "dpTigers", nationality: "Argentina", position: "CAM", overall: 76 },
  { name: "Ethan McAllister", teamId: "dpTigers", nationality: "Ireland", position: "GK", overall: 75 },
  { name: "João Medeiros", teamId: "dpTigers", nationality: "Brazil", position: "CB", overall: 75 },
  { name: "Esteban Moreira", teamId: "dpTigers", nationality: "Venezuela", position: "LB", overall: 74 },
  { name: "Gabriel Lencina", teamId: "dpTigers", nationality: "Brazil", position: "ST", overall: 74 },
  { name: "Henrique Toscani", teamId: "dpTigers", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Pedro Maranhão", teamId: "dpTigers", nationality: "Brazil", position: "GK", overall: 72 },
  { name: "Álvaro Córdova", teamId: "dpTigers", nationality: "Chile", position: "CB", overall: 72 },
  { name: "Rami Al-Zahir", teamId: "dpTigers", nationality: "Egypt", position: "RB", overall: 72 },
  { name: "Caio Mourão", teamId: "dpTigers", nationality: "Brazil", position: "CAM", overall: 70 },
  { name: "Danniel", teamId: "furia", nationality: "Brazil", position: "ST", overall: 86 },
  { name: "Nikolaj Skovsen", teamId: "furia", nationality: "Denmark", position: "RW", overall: 84 },
  { name: "Marcelo Dutra", teamId: "furia", nationality: "Brazil", position: "GK", overall: 83 },
  { name: "João Fontes", teamId: "furia", nationality: "Brazil", position: "CB", overall: 83 },
  { name: "Matheus Alcântara", teamId: "furia", nationality: "Brazil", position: "RB", overall: 83 },
  { name: "Mateus Furlan", teamId: "furia", nationality: "Brazil", position: "CDM", overall: 82 },
  { name: "Tomás Ricci", teamId: "furia", nationality: "Argentina", position: "CB", overall: 82 },
  { name: "Anvy", teamId: "furia", nationality: "Brazil", position: "CAM", overall: 82 },
  { name: "Thiago Barcellos", teamId: "furia", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Yuri Matos", teamId: "furia", nationality: "Brazil", position: "LW", overall: 79 },
  { name: "César Braga", teamId: "furia", nationality: "Brazil", position: "LB", overall: 78 },
  { name: "Elias Fajardo", teamId: "furia", nationality: "Chile", position: "RW", overall: 77 },
  { name: "Gustavo Valverde", teamId: "furia", nationality: "Brazil", position: "ST", overall: 77 },
  { name: "Henrique Tourinho", teamId: "furia", nationality: "Brazil", position: "GK", overall: 77 },
  { name: "Leonardo Quintanilha", teamId: "furia", nationality: "Brazil", position: "CB", overall: 76 },
  { name: "Marek Zelenka", teamId: "furia", nationality: "Czech Republic", position: "LB", overall: 76 },
  { name: "Rico Álvarez", teamId: "furia", nationality: "Paraguay", position: "CDM", overall: 76 },
  { name: "Fabrício Mendes", teamId: "furia", nationality: "Brazil", position: "CAM", overall: 76 },
  { name: "Emanuel Ospina", teamId: "furia", nationality: "Colombia", position: "CB", overall: 75 },
  { name: "Renato Carrara", teamId: "furia", nationality: "Brazil", position: "LW", overall: 75 },
  { name: "Rogério Matos", teamId: "furia", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Gabriel Loureiro", teamId: "furia", nationality: "Brazil", position: "RB", overall: 74 },
  { name: "Hiroto Sugawara", teamId: "furia", nationality: "Japan", position: "ST", overall: 70 },
  { name: "Lucca Santoro", teamId: "furia", nationality: "Brazil", position: "CAM", overall: 70 },
  { name: "Vitinho", teamId: "g3x", nationality: "Brazil", position: "CAM", overall: 85 },
  { name: "Tadeusz Kowalski", teamId: "g3x", nationality: "Poland", position: "RW", overall: 84 },
  { name: "Well", teamId: "g3x", nationality: "Brazil", position: "ST", overall: 84 },
  { name: "Wesley Baroni", teamId: "g3x", nationality: "Brazil", position: "CDM", overall: 81 },
  { name: "Matheus Brenner", teamId: "g3x", nationality: "Brazil", position: "LW", overall: 80 },
  { name: "Felipe Aragão", teamId: "g3x", nationality: "Brazil", position: "CDM", overall: 80 },
  { name: "Thiago Morelli", teamId: "g3x", nationality: "Brazil", position: "GK", overall: 80 },
  { name: "André Fogaça", teamId: "g3x", nationality: "Brazil", position: "CB", overall: 80 },
  { name: "Pablo Barrenechea", teamId: "g3x", nationality: "Argentina", position: "CB", overall: 80 },
  { name: "Guilherme Cascais", teamId: "g3x", nationality: "Brazil", position: "RB", overall: 78 },
  { name: "Matheus Vieira", teamId: "g3x", nationality: "Brazil", position: "LB", overall: 77 },
  { name: "Bruno Calazans", teamId: "g3x", nationality: "Brazil", position: "GK", overall: 76 },
  { name: "Lucas Ferreti", teamId: "g3x", nationality: "Brazil", position: "LW", overall: 76 },
  { name: "Martin Luis", teamId: "g3x", nationality: "Uruguay", position: "CDM", overall: 76 },
  { name: "Noah Christiansen", teamId: "g3x", nationality: "Norway", position: "RB", overall: 75 },
  { name: "Caio Salustiano", teamId: "g3x", nationality: "Brazil", position: "ST", overall: 75 },
  { name: "Jorge Restrepo", teamId: "g3x", nationality: "Colombia", position: "CB", overall: 75 },
  { name: "Ivan Montebello", teamId: "g3x", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Luis Fernando Pena", teamId: "g3x", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Enrique Montalvo", teamId: "g3x", nationality: "Peru", position: "RW", overall: 74 },
  { name: "Luan Figueira", teamId: "g3x", nationality: "Brazil", position: "CAM", overall: 73 },
  { name: "Ricardo Menegon", teamId: "g3x", nationality: "Brazil", position: "CAM", overall: 71 },
  { name: "Samuel Retamar", teamId: "g3x", nationality: "Bolivia", position: "LB", overall: 70 },
  { name: "Rodolfo Steiner", teamId: "g3x", nationality: "Austria", position: "GK", overall: 70 }
];

const playersBatch3 = [
  { name: "Yann Dumont", teamId: "horizon", nationality: "France", position: "RB", overall: 84 },
  { name: "Hernán Aguirrez", teamId: "horizon", nationality: "Argentina", position: "ST", overall: 83 },
  { name: "Matt Jones", teamId: "horizon", nationality: "United States", position: "LW", overall: 83 },
  { name: "Caio Benatti", teamId: "horizon", nationality: "Brazil", position: "CB", overall: 82 },
  { name: "Omar Saad", teamId: "horizon", nationality: "Morocco", position: "CAM", overall: 82 },
  { name: "Gabriel Lacerda", teamId: "horizon", nationality: "Brazil", position: "GK", overall: 80 },
  { name: "Sebastián Ordoñez", teamId: "horizon", nationality: "Ecuador", position: "CB", overall: 80 },
  { name: "Borislav Milenkovic", teamId: "horizon", nationality: "Serbia", position: "CDM", overall: 80 },
  { name: "João Henrique Pires", teamId: "horizon", nationality: "Brazil", position: "LB", overall: 79 },
  { name: "Victor Donatelli", teamId: "horizon", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Nicolás Duarte", teamId: "horizon", nationality: "Paraguay", position: "RW", overall: 79 },
  { name: "Arthur Lemos", teamId: "horizon", nationality: "Brazil", position: "LW", overall: 76 },
  { name: "Rafael Mourão", teamId: "horizon", nationality: "Brazil", position: "CB", overall: 76 },
  { name: "Matheus Dornelles", teamId: "horizon", nationality: "Brazil", position: "GK", overall: 76 },
  { name: "Diego Tartalga", teamId: "horizon", nationality: "Brazil", position: "ST", overall: 76 },
  { name: "Leonardo Cavallari", teamId: "horizon", nationality: "Brazil", position: "CAM", overall: 75 },
  { name: "Guilherme Rezende", teamId: "horizon", nationality: "Brazil", position: "CDM", overall: 75 },
  { name: "Matías Fuentes", teamId: "horizon", nationality: "Chile", position: "LB", overall: 75 },
  { name: "Jhonatan Tejada", teamId: "horizon", nationality: "Peru", position: "CB", overall: 75 },
  { name: "Kevin Barbosa", teamId: "horizon", nationality: "Brazil", position: "CAM", overall: 74 },
  { name: "Lucas Novaes", teamId: "horizon", nationality: "Brazil", position: "RB", overall: 74 },
  { name: "Marcelo Kamei", teamId: "horizon", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Diego Larráin", teamId: "horizon", nationality: "Chile", position: "ST", overall: 72 },
  { name: "Deco Machado", teamId: "keyd", nationality: "Portugal", position: "ST", overall: 85 },
  { name: "Victor Amaral", teamId: "keyd", nationality: "Brazil", position: "CB", overall: 82 },
  { name: "Aleksandar Vukovic", teamId: "keyd", nationality: "Serbia", position: "CB", overall: 82 },
  { name: "Hiroshi Amada", teamId: "keyd", nationality: "Japan", position: "LW", overall: 82 },
  { name: "Tobias Kjellberg", teamId: "keyd", nationality: "Sweden", position: "CDM", overall: 81 },
  { name: "Dudu Fernandez", teamId: "keyd", nationality: "Brazil", position: "CDM", overall: 80 },
  { name: "Emir Kutlu", teamId: "keyd", nationality: "Turkey", position: "RW", overall: 80 },
  { name: "Fernando Iñiguez", teamId: "keyd", nationality: "Chile", position: "CAM", overall: 79 },
  { name: "Pavel Morozov", teamId: "keyd", nationality: "Russia", position: "RB", overall: 79 },
  { name: "Mateo Rivas", teamId: "keyd", nationality: "Argentina", position: "GK", overall: 79 },
  { name: "Lucas Parreiras", teamId: "keyd", nationality: "Brazil", position: "CAM", overall: 77 },
  { name: "Guilherme Barreto", teamId: "keyd", nationality: "Brazil", position: "LB", overall: 77 },
  { name: "Bruno Cassiano", teamId: "keyd", nationality: "Brazil", position: "CB", overall: 76 },
  { name: "Rafael Nogueira", teamId: "keyd", nationality: "Brazil", position: "GK", overall: 76 },
  { name: "Henrique Guallar", teamId: "keyd", nationality: "Brazil", position: "ST", overall: 75 },
  { name: "Rodrigo Pimentel", teamId: "keyd", nationality: "Brazil", position: "RB", overall: 75 },
  { name: "Enrique Solano", teamId: "keyd", nationality: "Costa Rica", position: "CB", overall: 75 },
  { name: "Juan Manuel Leco", teamId: "keyd", nationality: "Uruguay", position: "LB", overall: 75 },
  { name: "Cassio Bernardes", teamId: "keyd", nationality: "Brazil", position: "CDM", overall: 74 },
  { name: "Thiago Lupercio", teamId: "keyd", nationality: "Brazil", position: "RW", overall: 74 },
  { name: "Veloso Queiroz", teamId: "keyd", nationality: "Brazil", position: "LW", overall: 73 },
  { name: "Leonardo Sanches", teamId: "keyd", nationality: "Brazil", position: "CB", overall: 72 },
  { name: "Vitório Nascimento", teamId: "keyd", nationality: "Brazil", position: "CAM", overall: 70 },
  { name: "João Butzker", teamId: "legacy", nationality: "Brazil", position: "CDM", overall: 84 },
  { name: "Luciano", teamId: "legacy", nationality: "Brazil", position: "CAM", overall: 82 },
  { name: "Rasmus Lund", teamId: "legacy", nationality: "Denmark", position: "ST", overall: 82 },
  { name: "Adrian Montoro", teamId: "legacy", nationality: "Spain", position: "CDM", overall: 80 },
  { name: "Santiago Molina", teamId: "legacy", nationality: "Argentina", position: "LB", overall: 80 },
  { name: "Rafael Guimarães", teamId: "legacy", nationality: "Brazil", position: "CB", overall: 79 },
  { name: "Matheus Correia", teamId: "legacy", nationality: "Brazil", position: "RW", overall: 79 },
  { name: "Ignacio Pereira", teamId: "legacy", nationality: "Portugal", position: "CB", overall: 78 },
  { name: "Ruan Fellipe", teamId: "legacy", nationality: "Brazil", position: "LW", overall: 78 },
  { name: "Tomas Luiz", teamId: "legacy", nationality: "Brazil", position: "RB", overall: 77 },
  { name: "Eduardo Malta", teamId: "legacy", nationality: "Brazil", position: "CAM", overall: 77 },
  { name: "Marcus Avelar", teamId: "legacy", nationality: "Brazil", position: "GK", overall: 77 },
  { name: "Guilherme Serafim", teamId: "legacy", nationality: "Brazil", position: "CDM", overall: 76 },
  { name: "Emanuel Díaz", teamId: "legacy", nationality: "Argentina", position: "RW", overall: 76 },
  { name: "João Adler", teamId: "legacy", nationality: "Brazil", position: "GK", overall: 75 },
  { name: "Leonardo Martins", teamId: "legacy", nationality: "Brazil", position: "ST", overall: 75 },
  { name: "Matheus Albuquerque", teamId: "legacy", nationality: "Brazil", position: "LB", overall: 73 },
  { name: "Emiliano Peralta", teamId: "legacy", nationality: "Uruguay", position: "ST", overall: 73 },
  { name: "Håkon Skjelstad", teamId: "legacy", nationality: "Norway", position: "RB", overall: 72 },
  { name: "César Portela", teamId: "legacy", nationality: "Brazil", position: "CB", overall: 72 },
  { name: "Henrique Castanhari", teamId: "legacy", nationality: "Brazil", position: "ST", overall: 70 },
  { name: "Lucas Freire", teamId: "legacy", nationality: "Brazil", position: "CB", overall: 73 },
  { name: "Lucas Amarilho", teamId: "legacy", nationality: "Brazil", position: "CDM", overall: 72 },
  { name: "Dyon Scar", teamId: "loud", nationality: "Brazil", position: "CAM", overall: 87 },
  { name: "Felipe Alcântara", teamId: "loud", nationality: "Brazil", position: "LW", overall: 85 },
  { name: "Renan Coutinho", teamId: "loud", nationality: "Brazil", position: "RW", overall: 83 },
  { name: "Elliot Harrison", teamId: "loud", nationality: "England", position: "RB", overall: 83 },
  { name: "Rafael Tonelli", teamId: "loud", nationality: "Brazil", position: "CB", overall: 82 },
  { name: "Felipe Nardelli", teamId: "loud", nationality: "Brazil", position: "GK", overall: 82 },
  { name: "Fernando Zambrano", teamId: "loud", nationality: "Peru", position: "CDM", overall: 82 },
  { name: "Cristian Arboleda", teamId: "loud", nationality: "Colombia", position: "LB", overall: 81 },
  { name: "Gustavo Camatta", teamId: "loud", nationality: "Brazil", position: "CDM", overall: 80 },
  { name: "Daniel Krueger", teamId: "loud", nationality: "Germany", position: "CB", overall: 80 },
  { name: "Arthur Salles", teamId: "loud", nationality: "Brazil", position: "ST", overall: 79 },
  { name: "Maurício Ortega", teamId: "loud", nationality: "Mexico", position: "ST", overall: 79 },
  { name: "Lucas Nascimento", teamId: "loud", nationality: "Brazil", position: "CAM", overall: 76 },
  { name: "Thiago Lopes", teamId: "loud", nationality: "Brazil", position: "CDM", overall: 76 },
  { name: "Elias Monteiro", teamId: "loud", nationality: "Brazil", position: "RW", overall: 75 },
  { name: "Hugo Bernardes", teamId: "loud", nationality: "Brazil", position: "GK", overall: 75 },
  { name: "Pedro Calmon", teamId: "loud", nationality: "Brazil", position: "LB", overall: 74 },
  { name: "Luiz Otávio Salles", teamId: "loud", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Marcos Fagundes", teamId: "loud", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Thiago Rezende", teamId: "loud", nationality: "Brazil", position: "RB", overall: 74 },
  { name: "Sebastián Cruz", teamId: "loud", nationality: "Chile", position: "LW", overall: 73 },
  { name: "Lukas Paulo", teamId: "loud", nationality: "Brazil", position: "CAM", overall: 72 },
  { name: "Matías Arechavaleta", teamId: "loud", nationality: "Uruguay", position: "CAM", overall: 72 },
  { name: "Guilherme Prado", teamId: "loud", nationality: "Brazil", position: "ST", overall: 72 },
  { name: "Juan Herrera", teamId: "loud", nationality: "Venezuela", position: "CB", overall: 70 }
];

const playersBatch4 = [
  { name: "Erick Oliveira", teamId: "mibr", nationality: "Brazil", position: "ST", overall: 82 },
  { name: "Marquinhos Tude", teamId: "mibr", nationality: "Brazil", position: "CB", overall: 81 },
  { name: "Thesz Azevedo", teamId: "mibr", nationality: "Brazil", position: "LW", overall: 80 },
  { name: "Gustavo Silotto", teamId: "mibr", nationality: "Brazil", position: "CAM", overall: 79 },
  { name: "Rafael Stropa", teamId: "mibr", nationality: "Brazil", position: "RB", overall: 79 },
  { name: "Rodrigo Menotti", teamId: "mibr", nationality: "Brazil", position: "GK", overall: 79 },
  { name: "Paulo Ribeiro", teamId: "mibr", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Vitor Fagundes", teamId: "mibr", nationality: "Brazil", position: "CDM", overall: 78 },
  { name: "Rian Moreira", teamId: "mibr", nationality: "Brazil", position: "RW", overall: 78 },
  { name: "Caio Martins", teamId: "mibr", nationality: "Brazil", position: "LB", overall: 78 },
  { name: "Henrique Lacerda", teamId: "mibr", nationality: "Brazil", position: "CB", overall: 77 },
  { name: "Lucas Teixeira", teamId: "mibr", nationality: "Brazil", position: "CDM", overall: 76 },
  { name: "André Morais", teamId: "mibr", nationality: "Brazil", position: "CAM", overall: 76 },
  { name: "Lucas Amaral", teamId: "mibr", nationality: "Brazil", position: "GK", overall: 76 },
  { name: "Patrick F. Silva", teamId: "mibr", nationality: "Brazil", position: "RW", overall: 76 },
  { name: "Fabrício Nogueira", teamId: "mibr", nationality: "Brazil", position: "CB", overall: 76 },
  { name: "Diego Fontanelli", teamId: "mibr", nationality: "Brazil", position: "CB", overall: 75 },
  { name: "Felipe Costa", teamId: "mibr", nationality: "Brazil", position: "CAM", overall: 75 },
  { name: "Leonardo Tadeu", teamId: "mibr", nationality: "Brazil", position: "ST", overall: 75 },
  { name: "Maurício Braga", teamId: "mibr", nationality: "Brazil", position: "ST", overall: 73 },
  { name: "Matheus Pradela", teamId: "mibr", nationality: "Brazil", position: "LB", overall: 73 },
  { name: "João Vilar", teamId: "mibr", nationality: "Brazil", position: "RB", overall: 73 },
  { name: "Kelvin Rocha", teamId: "mibr", nationality: "Brazil", position: "CB", overall: 73 },
  { name: "Bernardo Nunes", teamId: "mibr", nationality: "Brazil", position: "CAM", overall: 72 },
  { name: "Thiago Palhares", teamId: "mibr", nationality: "Brazil", position: "GK", overall: 70 },
  { name: "Bruno Del Vecchio", teamId: "nation", nationality: "Brazil", position: "GK", overall: 84 },
  { name: "Tiago Ribeiro", teamId: "nation", nationality: "Portugal", position: "CAM", overall: 84 },
  { name: "Marcelo Torres", teamId: "nation", nationality: "Brazil", position: "ST", overall: 83 },
  { name: "Vitor Amaral", teamId: "nation", nationality: "Brazil", position: "CDM", overall: 82 },
  { name: "Pedro Naves", teamId: "nation", nationality: "Brazil", position: "CB", overall: 81 },
  { name: "Agustín Villalba", teamId: "nation", nationality: "Argentina", position: "CB", overall: 79 },
  { name: "Eduardo Sales", teamId: "nation", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Rafael Senna", teamId: "nation", nationality: "Brazil", position: "RW", overall: 79 },
  { name: "Henrique Assunção", teamId: "nation", nationality: "Brazil", position: "RB", overall: 78 },
  { name: "Bruno Linhares", teamId: "nation", nationality: "Brazil", position: "LW", overall: 78 },
  { name: "Luiz Fellipe Prado", teamId: "nation", nationality: "Brazil", position: "ST", overall: 78 },
  { name: "Gustavo Thomé", teamId: "nation", nationality: "Brazil", position: "CAM", overall: 77 },
  { name: "Rony Fernandes", teamId: "nation", nationality: "Brazil", position: "LB", overall: 77 },
  { name: "Márcio Bezerra", teamId: "nation", nationality: "Brazil", position: "CDM", overall: 76 },
  { name: "Lucas Freires", teamId: "nation", nationality: "Brazil", position: "CB", overall: 76 },
  { name: "Joaquín Barreto", teamId: "nation", nationality: "Argentina", position: "CB", overall: 75 },
  { name: "Rafael Moura", teamId: "nation", nationality: "Brazil", position: "GK", overall: 75 },
  { name: "Leonardo Milhomem", teamId: "nation", nationality: "Brazil", position: "LB", overall: 74 },
  { name: "Rodrigo Jucá", teamId: "nation", nationality: "Brazil", position: "RW", overall: 74 },
  { name: "Matheus Carrilho", teamId: "nation", nationality: "Brazil", position: "CB", overall: 73 },
  { name: "Vinícius Bacelar", teamId: "nation", nationality: "Brazil", position: "CAM", overall: 73 },
  { name: "João Diniz", teamId: "nation", nationality: "Brazil", position: "GK", overall: 72 },
  { name: "Jean Matheus", teamId: "nation", nationality: "Brazil", position: "CAM", overall: 72 },
  { name: "Diego Maranhão", teamId: "nation", nationality: "Brazil", position: "ST", overall: 72 },
  { name: "Fabrício Laranjeira", teamId: "nation", nationality: "Brazil", position: "LW", overall: 71 },
  {
    name: "Kevin Oliveira",
    teamId: "olympia",
    nationality: "Brazil",
    position: "ST",
    overall: 90,
    playerStyle: "Speed Striker",
    attributeMode: "manual",
    attributes: {
      pace: 94,
      attacking: 93,
      defending: 40,
      finishing: 94,
      passing: 78,
      crossing: 62,
      dribbling: 92,
      heading: 82,
      jumping: 87,
      stamina: 88,
      strength: 84,
      discipline: 80,
      penalties: 88,
      goalkeeping: 35
    }
  },
  { name: "Pedro Barbosa", teamId: "olympia", nationality: "Brazil", position: "LW", overall: 89 },
  { name: "Pedro Resende", teamId: "olympia", nationality: "Brazil", position: "CB", overall: 88 },
  { name: "Thiago", teamId: "olympia", nationality: "Brazil", position: "CDM", overall: 88 },
  { name: "Alex", teamId: "olympia", nationality: "Brazil", position: "CAM", overall: 88 },
  { name: "Alisson Beccer", teamId: "olympia", nationality: "Brazil", position: "GK", overall: 88 },
  { name: "Dayvisson Belo", teamId: "olympia", nationality: "Brazil", position: "CB", overall: 87 },
  { name: "Izquierdo", teamId: "olympia", nationality: "Colombia", position: "RW", overall: 85 },
  { name: "Dodo", teamId: "olympia", nationality: "Brazil", position: "LB", overall: 85 },
  { name: "Lucas Matta", teamId: "olympia", nationality: "Brazil", position: "CDM", overall: 84 },
  { name: "Eduardo Vidal", teamId: "olympia", nationality: "Chile", position: "CDM", overall: 84 },
  { name: "Tyler McKenzie", teamId: "olympia", nationality: "United States", position: "RB", overall: 83 },
  { name: "Bruno Salles", teamId: "olympia", nationality: "Brazil", position: "RW", overall: 78 },
  { name: "Matheus Breno", teamId: "olympia", nationality: "Brazil", position: "ST", overall: 77 },
  { name: "Ryan O'Neill", teamId: "olympia", nationality: "United States", position: "GK", overall: 77 },
  { name: "Renan Valadares", teamId: "olympia", nationality: "Russia", position: "CB", overall: 77 },
  { name: "Matheus Lorenzzo", teamId: "olympia", nationality: "Brazil", position: "CAM", overall: 77 },
  { name: "Marcelo Siqueira", teamId: "olympia", nationality: "Brazil", position: "CB", overall: 76 },
  { name: "Henrique Maia", teamId: "olympia", nationality: "Brazil", position: "LW", overall: 76 },
  { name: "Caio Almeida", teamId: "olympia", nationality: "Brazil", position: "LB", overall: 76 },
  { name: "Rafael Tormes", teamId: "olympia", nationality: "Brazil", position: "RB", overall: 75 },
  { name: "Rodrigo Farias", teamId: "olympia", nationality: "Brazil", position: "ST", overall: 74 },
  { name: "Felipe Cardozo", teamId: "olympia", nationality: "Brazil", position: "CAM", overall: 72 },
  { name: "João Guilherme Duarte", teamId: "olympia", nationality: "Brazil", position: "GK", overall: 72 },
  { name: "Lucas Prado", teamId: "olympia", nationality: "Brazil", position: "CB", overall: 70 },
  { name: "Seong Min-woo", teamId: "vorax", nationality: "South Korea", position: "CDM", overall: 83 },
  { name: "Juan Castillo", teamId: "vorax", nationality: "Colombia", position: "RW", overall: 80 },
  { name: "Oliver Hartmann", teamId: "vorax", nationality: "Germany", position: "GK", overall: 80 },
  { name: "Gonzalo Herrera", teamId: "vorax", nationality: "Argentina", position: "CB", overall: 80 },
  { name: "Daniel Benassi", teamId: "vorax", nationality: "Brazil", position: "ST", overall: 79 },
  { name: "Júnior Caldeira", teamId: "vorax", nationality: "Brazil", position: "CB", overall: 78 },
  { name: "Álvaro Montenegro", teamId: "vorax", nationality: "Spain", position: "CAM", overall: 78 },
  { name: "Davi Freire", teamId: "vorax", nationality: "Brazil", position: "LW", overall: 78 },
  { name: "Bruno Mattioni", teamId: "vorax", nationality: "Brazil", position: "RB", overall: 78 },
  { name: "Tomás Quintana", teamId: "vorax", nationality: "Uruguay", position: "LB", overall: 77 },
  { name: "Vitor Ramos", teamId: "vorax", nationality: "Brazil", position: "RW", overall: 76 },
  { name: "Lucas Serrano", teamId: "vorax", nationality: "Brazil", position: "CAM", overall: 76 },
  { name: "Leon Kuznetsov", teamId: "vorax", nationality: "Russia", position: "LW", overall: 76 },
  { name: "Vinícius Prado", teamId: "vorax", nationality: "Brazil", position: "CDM", overall: 75 },
  { name: "Rafael Godinho", teamId: "vorax", nationality: "Brazil", position: "ST", overall: 75 },
  { name: "Gustavo Arcanjo", teamId: "vorax", nationality: "Brazil", position: "CAM", overall: 75 },
  { name: "Erick Nascimento", teamId: "vorax", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Ricardo Vasques", teamId: "vorax", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Henrique Labate", teamId: "vorax", nationality: "Brazil", position: "LB", overall: 74 },
  { name: "Marcos Fialho", teamId: "vorax", nationality: "Brazil", position: "CDM", overall: 74 },
  { name: "Ivan Machado", teamId: "vorax", nationality: "Brazil", position: "RB", overall: 73 },
  { name: "Daniel Moreira", teamId: "vorax", nationality: "Brazil", position: "GK", overall: 73 },
  { name: "Caio Fontes", teamId: "vorax", nationality: "Brazil", position: "GK", overall: 72 },
  { name: "Shinji Takahashi", teamId: "vorax", nationality: "Japan", position: "ST", overall: 72 }
];

const playersBatch5 = [
  { name: "Ronaldão", teamId: "westOrange", nationality: "Brazil", position: "ST", overall: 87 },
  { name: "Rafael Toledo", teamId: "westOrange", nationality: "Brazil", position: "CDM", overall: 84 },
  { name: "Marcos Paredes", teamId: "westOrange", nationality: "Brazil", position: "CAM", overall: 83 },
  { name: "Matías Romero", teamId: "westOrange", nationality: "Argentina", position: "CB", overall: 81 },
  { name: "Wellington Braga", teamId: "westOrange", nationality: "Brazil", position: "LW", overall: 80 },
  { name: "David Muñoz", teamId: "westOrange", nationality: "Colombia", position: "RW", overall: 80 },
  { name: "Anthony Brooks", teamId: "westOrange", nationality: "United States", position: "RB", overall: 80 },
  { name: "Matheus Curi", teamId: "westOrange", nationality: "Brazil", position: "GK", overall: 80 },
  { name: "Luiz Henrique Braga", teamId: "westOrange", nationality: "Brazil", position: "CDM", overall: 79 },
  { name: "Leonardo Vasconcellos", teamId: "westOrange", nationality: "Brazil", position: "CB", overall: 79 },
  { name: "Eduardo Farias", teamId: "westOrange", nationality: "Brazil", position: "LB", overall: 79 },
  { name: "Felipe Cortes", teamId: "westOrange", nationality: "Brazil", position: "CAM", overall: 77 },
  { name: "João Victor Santoro", teamId: "westOrange", nationality: "Brazil", position: "CB", overall: 77 },
  { name: "JB Monteiro", teamId: "westOrange", nationality: "Brazil", position: "ST", overall: 77 },
  { name: "Thiago Matos", teamId: "westOrange", nationality: "Brazil", position: "CDM", overall: 76 },
  { name: "Caio Maranhão", teamId: "westOrange", nationality: "Brazil", position: "RW", overall: 76 },
  { name: "João Ricardo Paiva", teamId: "westOrange", nationality: "Brazil", position: "LW", overall: 75 },
  { name: "Felipe Andrade", teamId: "westOrange", nationality: "Brazil", position: "GK", overall: 75 },
  { name: "Henrique Fagundes", teamId: "westOrange", nationality: "Brazil", position: "LB", overall: 75 },
  { name: "Carlos Mendonça", teamId: "westOrange", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Adriano Silveira", teamId: "westOrange", nationality: "Brazil", position: "CAM", overall: 73 },
  { name: "Brandon McCall", teamId: "westOrange", nationality: "United States", position: "GK", overall: 73 },
  { name: "Emanuel Duarte", teamId: "westOrange", nationality: "Brazil", position: "CB", overall: 73 },
  { name: "Lucas Pessanha", teamId: "westOrange", nationality: "Brazil", position: "RB", overall: 72 },
  { name: "Luis Matos", teamId: "westOrange", nationality: "Brazil", position: "ST", overall: 72 },
  {
    name: "Guilherme",
    teamId: "wolverines",
    nationality: "Brazil",
    position: "RW",
    overall: 96,
    playerStyle: "Elite Inside Forward",
    attributeMode: "manual",
    attributes: {
      pace: 97,
      attacking: 98,
      defending: 52,
      finishing: 98,
      passing: 91,
      crossing: 86,
      dribbling: 99,
      heading: 73,
      jumping: 82,
      stamina: 94,
      strength: 80,
      discipline: 85,
      penalties: 93,
      goalkeeping: 35
    }
  },
  { name: "Eriksen", teamId: "wolverines", nationality: "England", position: "CAM", overall: 90 },
  { name: "Rafael", teamId: "wolverines", nationality: "Brazil", position: "GK", overall: 89 },
  { name: "Valentin", teamId: "wolverines", nationality: "Argentina", position: "CB", overall: 89 },
  {
    name: "Cavalcante",
    teamId: "wolverines",
    nationality: "Brazil",
    position: "ST",
    overall: 88,
    playerStyle: "Complete Forward",
    attributeMode: "manual",
    attributes: {
      pace: 86,
      attacking: 90,
      defending: 42,
      finishing: 91,
      passing: 86,
      crossing: 66,
      dribbling: 84,
      heading: 84,
      jumping: 82,
      stamina: 86,
      strength: 85,
      discipline: 82,
      penalties: 86,
      goalkeeping: 35
    }
  },
  { name: "Firmino", teamId: "wolverines", nationality: "Brazil", position: "LW", overall: 87 },
  { name: "Sule", teamId: "wolverines", nationality: "Germany", position: "CB", overall: 87 },
  { name: "Andre Gomes", teamId: "wolverines", nationality: "Portugal", position: "CDM", overall: 86 },
  { name: "Gutti", teamId: "wolverines", nationality: "Spain", position: "CDM", overall: 86 },
  { name: "Lucas", teamId: "wolverines", nationality: "Brazil", position: "RB", overall: 84 },
  { name: "Prates", teamId: "wolverines", nationality: "Brazil", position: "LB", overall: 83 },
  { name: "Mauricio", teamId: "wolverines", nationality: "Brazil", position: "CAM", overall: 80 },
  { name: "Joel", teamId: "wolverines", nationality: "Cameroon", position: "ST", overall: 79 },
  { name: "Camilo", teamId: "wolverines", nationality: "Brazil", position: "LW", overall: 78 },
  { name: "Mauro", teamId: "wolverines", nationality: "Brazil", position: "GK", overall: 77 },
  { name: "Vieirinha", teamId: "wolverines", nationality: "Portugal", position: "RB", overall: 77 },
  { name: "Lassan", teamId: "wolverines", nationality: "Germany", position: "CDM", overall: 77 },
  { name: "Igor Sad", teamId: "wolverines", nationality: "Brazil", position: "CB", overall: 77 },
  { name: "Joselu Ronald", teamId: "wolverines", nationality: "Uruguay", position: "RW", overall: 76 },
  { name: "Marquinhos", teamId: "wolverines", nationality: "Brazil", position: "LB", overall: 76 },
  { name: "Danilo Fernandes", teamId: "wolverines", nationality: "Brazil", position: "CB", overall: 75 },
  { name: "Alemão", teamId: "wolverines", nationality: "Brazil", position: "CDM", overall: 75 },
  { name: "Gabriel Mansur", teamId: "wolverines", nationality: "Brazil", position: "CAM", overall: 74 },
  { name: "Tim Ream", teamId: "wolverines", nationality: "United States", position: "GK", overall: 74 },
  { name: "Marcelo Guzman", teamId: "wolverines", nationality: "Colombia", position: "ST", overall: 74 },
  { name: "Arthur Campello", teamId: "wolverines", nationality: "Brazil", position: "CB", overall: 74 },
  { name: "Luka Kaito", teamId: "wolverines", nationality: "Canada", position: "CDM", overall: 74 }
];

const manualPlayerPatches = [
  {
    patchId: "guilherme-wolverines-elite-inside-forward",
    name: "Guilherme",
    teamId: "wolverines",
    playerStyle: "Elite Inside Forward",
    position: "RW",
    overall: 96,
    attributeMode: "manual",
    attributes: {
      pace: 97,
      attacking: 98,
      defending: 52,
      finishing: 98,
      passing: 91,
      crossing: 86,
      dribbling: 99,
      heading: 73,
      jumping: 82,
      stamina: 94,
      strength: 80,
      discipline: 85,
      penalties: 93,
      goalkeeping: 35
    }
  },
  {
    patchId: "cavalcante-wolverines-complete-forward",
    name: "Cavalcante",
    teamId: "wolverines",
    playerStyle: "Complete Forward",
    position: "ST",
    overall: 88,
    attributeMode: "manual",
    attributes: {
      pace: 86,
      attacking: 90,
      defending: 42,
      finishing: 91,
      passing: 86,
      crossing: 66,
      dribbling: 84,
      heading: 84,
      jumping: 82,
      stamina: 86,
      strength: 85,
      discipline: 82,
      penalties: 86,
      goalkeeping: 35
    }
  },
  {
    patchId: "kevin-oliveira-olympia-speed-striker",
    name: "Kevin Oliveira",
    teamId: "olympia",
    playerStyle: "Speed Striker",
    position: "ST",
    overall: 90,
    attributeMode: "manual",
    attributes: {
      pace: 94,
      attacking: 93,
      defending: 40,
      finishing: 94,
      passing: 78,
      crossing: 62,
      dribbling: 92,
      heading: 82,
      jumping: 87,
      stamina: 88,
      strength: 84,
      discipline: 80,
      penalties: 88,
      goalkeeping: 35
    }
  }
];

const manualPlayerStylePatches = [
  ["wolverines", "Eriksen", "Playmaker"],
  ["wolverines", "Rafael", "Shot Stopper"],
  ["wolverines", "Valentin", "Ball Playing Defender"],
  ["wolverines", "Firmino", "Inside Forward"],
  ["wolverines", "Sule", "Aerial Defender"],
  ["wolverines", "Andre Gomes", "Deep Playmaker"],
  ["wolverines", "Gutti", "Ball Winner"],
  ["wolverines", "Lucas", "Wingback"],
  ["wolverines", "Prates", "Fullback"],
  ["olympia", "Pedro Barbosa", "Inside Forward"],
  ["olympia", "Pedro Resende", "Ball Playing Defender"],
  ["olympia", "Thiago", "Anchor Man"],
  ["olympia", "Alex", "Creator"],
  ["olympia", "Alisson Beccer", "Shot Stopper"],
  ["olympia", "Dayvisson Belo", "Destroyer"],
  ["olympia", "Izquierdo", "Winger"],
  ["olympia", "Dodo", "Wingback"],
  ["olympia", "Lucas Matta", "Deep Playmaker"],
  ["olympia", "Eduardo Vidal", "Ball Winner"],
  ["olympia", "Tyler McKenzie", "Fullback"],
  ["loud", "Dyon Scar", "Creator"],
  ["loud", "Felipe Alcântara", "Inside Forward"],
  ["loud", "Renan Coutinho", "Winger"],
  ["loud", "Elliot Harrison", "Wingback"],
  ["loud", "Rafael Tonelli", "Stopper"],
  ["loud", "Felipe Nardelli", "Shot Stopper"],
  ["loud", "Fernando Zambrano", "Ball Winner"],
  ["furia", "Danniel", "Poacher"],
  ["furia", "Nikolaj Skovsen", "Winger"],
  ["furia", "Marcelo Dutra", "Shot Stopper"],
  ["furia", "João Fontes", "Stopper"],
  ["furia", "Matheus Alcântara", "Wingback"],
  ["furia", "Mateus Furlan", "Ball Winner"],
  ["furia", "Tomás Ricci", "Aerial Defender"],
  ["furia", "Anvy", "Playmaker"],
  ["westOrange", "Ronaldão", "Target Man"],
  ["westOrange", "Rafael Toledo", "Ball Winner"],
  ["westOrange", "Marcos Paredes", "Creator"],
  ["westOrange", "Matías Romero", "Stopper"],
  ["westOrange", "Wellington Braga", "Inside Forward"],
  ["westOrange", "David Muñoz", "Winger"],
  ["westOrange", "Anthony Brooks", "Fullback"],
  ["westOrange", "Matheus Curi", "Shot Stopper"],
  ["g3x", "Vitinho", "Creator"],
  ["g3x", "Well", "Complete Forward"],
  ["g3x", "Tadeusz Kowalski", "Winger"],
  ["g3x", "Wesley Baroni", "Anchor Man"],
  ["g3x", "Matheus Brenner", "Inside Forward"],
  ["g3x", "Felipe Aragão", "Ball Winner"],
  ["g3x", "Thiago Morelli", "Shot Stopper"],
  ["keyd", "Deco Machado", "Complete Forward"],
  ["keyd", "Hiroshi Amada", "Inside Forward"],
  ["keyd", "Emir Kutlu", "Winger"],
  ["keyd", "Victor Amaral", "Stopper"],
  ["keyd", "Aleksandar Vukovic", "Aerial Defender"],
  ["keyd", "Tobias Kjellberg", "Anchor Man"],
  ["keyd", "Dudu Fernandez", "Deep Playmaker"],
  ["keyd", "Mateo Rivas", "Shot Stopper"],
  ["legacy", "João Butzker", "Ball Winner"],
  ["legacy", "Luciano", "Playmaker"],
  ["legacy", "Rasmus Lund", "Complete Forward"],
  ["legacy", "Adrian Montoro", "Deep Playmaker"],
  ["legacy", "Santiago Molina", "Wingback"],
  ["legacy", "Rafael Guimarães", "Stopper"],
  ["legacy", "Matheus Correia", "Winger"],
  ["nation", "Bruno Del Vecchio", "Shot Stopper"],
  ["nation", "Tiago Ribeiro", "Creator"],
  ["nation", "Marcelo Torres", "Poacher"],
  ["nation", "Vitor Amaral", "Ball Winner"],
  ["nation", "Pedro Naves", "Stopper"],
  ["nation", "Rafael Senna", "Winger"],
  ["nation", "Bruno Linhares", "Inside Forward"],
  ["mibr", "Erick Oliveira", "Poacher"],
  ["mibr", "Marquinhos Tude", "Stopper"],
  ["mibr", "Thesz Azevedo", "Inside Forward"],
  ["mibr", "Gustavo Silotto", "Playmaker"],
  ["mibr", "Rafael Stropa", "Fullback"],
  ["mibr", "Rodrigo Menotti", "Shot Stopper"],
  ["mibr", "Paulo Ribeiro", "Anchor Man"],
  ["horizon", "Hernán Aguirrez", "Complete Forward"],
  ["horizon", "Matt Jones", "Inside Forward"],
  ["horizon", "Omar Saad", "Creator"],
  ["horizon", "Yann Dumont", "Wingback"],
  ["horizon", "Caio Benatti", "Stopper"],
  ["horizon", "Gabriel Lacerda", "Shot Stopper"],
  ["horizon", "Borislav Milenkovic", "Anchor Man"],
  ["horizon", "Nicolás Duarte", "Winger"],
  ["dpTigers", "Thierry Dubois", "Inside Forward"],
  ["dpTigers", "João Ribas", "Winger"],
  ["dpTigers", "Matheus Cunha", "Ball Winner"],
  ["dpTigers", "Guilherme Rocha", "Shot Stopper"],
  ["dpTigers", "Malik N'Doye", "Aerial Defender"],
  ["dpTigers", "Alexandre Barros", "Poacher"],
  ["batista", "Victor Caires", "Creator"],
  ["batista", "Gui Girão", "Poacher"],
  ["batista", "Gustavo Henrique", "Stopper"],
  ["batista", "Pedro Rios", "Winger"],
  ["batista", "Gui Dias", "Shot Stopper"],
  ["batista", "Igor Barril", "Destroyer"],
  ["batista", "Carlos Meneghini", "Anchor Man"],
  ["cnb", "Álvaro Benítez", "Inside Forward"],
  ["cnb", "Leonardo Pires", "Playmaker"],
  ["cnb", "Alex Montecchio", "Complete Forward"],
  ["cnb", "Gabriel Siqueira", "Winger"],
  ["cnb", "Rafinha Moura", "Ball Winner"],
  ["cnb", "Dimitri Savic", "Shot Stopper"],
  ["dignitas", "Enzo Paladini", "Winger"],
  ["dignitas", "Caio Albuquerque", "Inside Forward"],
  ["dignitas", "Eduardo Seabra", "Poacher"],
  ["dignitas", "Tomislav Kovac", "Stopper"],
  ["dignitas", "Wellington Prado", "Creator"],
  ["dignitas", "Matheus Pradella", "Anchor Man"],
  ["dignitas", "Thiago Cunha", "Shot Stopper"],
  ["dinasty", "Cristian Valdés", "Creator"],
  ["dinasty", "Andrés Molina", "Wingback"],
  ["dinasty", "Lukas Hermann", "Deep Playmaker"],
  ["dinasty", "Juliano Teixeira", "Shot Stopper"],
  ["dinasty", "Rafael Bittencourt", "Poacher"],
  ["dinasty", "Caio Kalil", "Winger"],
  ["dinasty", "Matheus Diniz", "Inside Forward"],
  ["vorax", "Seong Min-woo", "Ball Winner"],
  ["vorax", "Juan Castillo", "Winger"],
  ["vorax", "Oliver Hartmann", "Shot Stopper"],
  ["vorax", "Gonzalo Herrera", "Stopper"],
  ["vorax", "Daniel Benassi", "Poacher"],
  ["vorax", "Álvaro Montenegro", "Playmaker"],
  ["vorax", "Davi Freire", "Inside Forward"]
].map(([teamId, name, playerStyle]) => ({ teamId, name, playerStyle }));

const state = loadSave() || createNewGame();
const elements = {};
let liveMatchTimer = null;

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  render();
  saveGame("Auto-saved");
});

function cacheElements() {
  document.querySelectorAll("[id]").forEach((node) => {
    elements[toCamelCase(node.id)] = node;
  });
  elements.navItems = document.querySelectorAll(".nav-item");
  elements.pages = document.querySelectorAll(".page");
}

function bindEvents() {
  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.section, button.textContent));
  });

  [elements.quickMatch, elements.simulateMatch].forEach((button) => {
    button.addEventListener("click", simulateNextMatch);
  });

  [elements.quickRound, elements.leagueRound, elements.simulateRound].forEach((button) => {
    button.addEventListener("click", simulateCurrentRound);
  });

  elements.calendarFilter.addEventListener("change", () => {
    state.calendarFilter = elements.calendarFilter.value;
    renderCalendar();
    saveGame("Auto-saved");
  });

  elements.simulatePrinceMatch.addEventListener("click", simulateNextPrinceMatch);
  elements.simulatePrinceStage.addEventListener("click", simulateCurrentPrinceStage);
  elements.simulateSupercup.addEventListener("click", simulateSupercup);
  elements.matchControl.addEventListener("click", handleMatchCenterAction);
  elements.matchControl.addEventListener("change", handleMatchCenterChange);
  elements.matchSummary.addEventListener("click", handleMatchCenterAction);
  elements.matchSummary.addEventListener("submit", handleMatchEditSubmit);
  elements.playerSearch.addEventListener("input", renderPlayersPage);
  elements.playersTeamFilter.addEventListener("change", renderPlayersPage);
  elements.playersPositionFilter.addEventListener("change", renderPlayersPage);
  elements.playersSort.addEventListener("change", renderPlayersPage);
  elements.statsCompetitionFilter.addEventListener("change", renderStats);
  elements.statsTeamFilter.addEventListener("change", renderStats);
  elements.statsSeasonFilter.addEventListener("change", renderStats);
  Object.keys(DEFAULT_SIMULATION_SETTINGS).forEach((key) => {
    const field = elements[toCamelCase(`setting-${key}`)];
    if (field) field.addEventListener("input", () => updateSimulationSetting(key, field.value));
  });
  elements.finishSeason.addEventListener("click", finishSeason);
  elements.openTransferWindow.addEventListener("click", openTransferWindow);
  elements.startNextSeason.addEventListener("click", startNextSeason);
  elements.transferPlayer.addEventListener("change", loadSelectedPlayerIntoForm);
  elements.movePlayer.addEventListener("click", moveSelectedPlayer);
  elements.addPlayer.addEventListener("click", addNewPlayer);
  elements.savePlayer.addEventListener("click", saveSelectedPlayerEdits);
  elements.removePlayer.addEventListener("click", removeSelectedPlayer);
  elements.regenerateAttributes.addEventListener("click", regenerateSelectedPlayerAttributes);
  elements.regenerateAutoStyle.addEventListener("click", regenerateSelectedPlayerStyle);
  elements.setManualAttributes.addEventListener("click", setSelectedPlayerManual);
  elements.setAutoAttributes.addEventListener("click", setSelectedPlayerAuto);
  [
    elements.playerName,
    elements.playerNationality,
    elements.playerPosition,
    elements.playerStyle,
    elements.playerOverall,
    elements.playerPace,
    elements.playerAttacking,
    elements.playerDefending,
    elements.playerFinishing,
    elements.playerPassing,
    elements.playerCrossing,
    elements.playerDribbling,
    elements.playerHeading,
    elements.playerJumping,
    elements.playerStamina,
    elements.playerStrength,
    elements.playerDiscipline,
    elements.playerPenalties,
    elements.playerGoalkeeping
  ].forEach((field) => field.addEventListener("change", saveSelectedPlayerEdits));
  elements.exportSave.addEventListener("click", exportSave);
  elements.importSave.addEventListener("change", importSave);
  elements.resetSave.addEventListener("click", resetSave);
}

function createNewGame() {
  const teams = TEAM_DATABASE.map((team) => ({
    ...team,
    short: makeShortName(team.name),
    color: pickTeamColor(team.id - 1),
    preferredFormation: "4-2-3-1",
    autoFormation: true,
    table: blankTable()
  }));

  const players = generateInitialPlayers(teams);
  const newState = {
    version: 3,
    seasonYear: 1,
    seasonPhase: "Joker Supercup",
    currentRound: 1,
    selectedRound: 1,
    calendarFilter: "all",
    simulationSettings: { ...DEFAULT_SIMULATION_SETTINGS },
    matchCenter: {
      mode: "pre",
      selectedTab: "summary",
      live: null
    },
    teams,
    players,
    nextPlayerId: Math.max(...players.map((player) => player.id)) + 1,
    realPlayerBatchesApplied: [],
    transferLog: [],
    seasonHistory: [],
    previousSeasonStandings: initialPrinceCupSeeding.map((teamName, index) => ({
      position: index + 1,
      teamId: getTeamIdByName(teamName),
      teamName
    })),
    initialPrinceCupSeeding,
    fixtures: generateFixtures(teams),
    princeCup: createPrinceCup(),
    jokerSupercup: createInitialSupercup(),
    history: [],
    lastMatch: null
  };
  applyRealPlayerBatch(newState, "batch1", playersBatch1);
  applyRealPlayerBatch(newState, "batch2", playersBatch2);
  applyRealPlayerBatch(newState, "batch3", playersBatch3);
  applyRealPlayerBatch(newState, "batch4", playersBatch4);
  applyRealPlayerBatch(newState, "batch5", playersBatch5);
  applyManualPlayerPatches(newState);
  applyManualPlayerStylePatches(newState);
  refreshAutoPlayerStyles(newState);
  return newState;
}

function generateInitialPlayers(teams) {
  return teams.flatMap((team) => {
    const positions = ["GK", "CB", "CB", "RB", "LB", "CDM", "CM", "CAM", "LW", "RW", "ST", "ST", "CM", "CB"];
    return positions.map((position, index) => createPlayer({
      id: (team.id - 1) * positions.length + index + 1,
      teamId: team.id,
      position,
      baseRating: getPositionBaseRating(team, position),
      name: `${PLAYER_FIRST_NAMES[(team.id + index) % PLAYER_FIRST_NAMES.length]} ${PLAYER_LAST_NAMES[(team.id * 2 + index) % PLAYER_LAST_NAMES.length]}`,
      nationality: NATIONALITIES[(team.id + index) % NATIONALITIES.length]
    }));
  });
}

function createPlayer({ id, teamId, position, baseRating, overall: exactOverall, name, nationality, attributes, attributeMode, playerStyle }) {
  const overall = clamp(exactOverall || baseRating + randomInt(-4, 4), 50, 99);
  const finalAttributes = attributes || createAttributesForPosition(position, overall);
  const player = {
    id,
    teamId,
    name,
    nationality,
    position,
    overall,
  playerStyle: playerStyle || "",
    playerStyleMode: playerStyle ? "manual" : "auto",
    attributeMode: attributeMode || (attributes ? "manual" : "auto"),
    attributes: finalAttributes,
    stats: blankPlayerStats()
  };
  if (!player.playerStyle && player.playerStyleMode === "auto") {
    player.playerStyle = generatePlayerStyle(player);
  }
  return player;
}

function createAttributesForPosition(position, overall) {
  const modifiers = getPositionAttributeModifiers(position);
  const attributes = {};
  ATTRIBUTE_KEYS.forEach((key) => {
    attributes[key] = clamp(Math.round(overall + (modifiers[key] || 0) + randomInt(-4, 4)), 35, 99);
  });
  return attributes;
}

function getPositionAttributeModifiers(position) {
  const low = -18;
  const lowMedium = -8;
  const medium = 0;
  const mediumHigh = 5;
  const high = 9;
  const important = 11;
  const base = {
    pace: medium,
    attacking: medium,
    defending: medium,
    finishing: medium,
    passing: medium,
    crossing: medium,
    dribbling: medium,
    heading: medium,
    jumping: medium,
    stamina: medium,
    strength: medium,
    discipline: medium,
    penalties: medium,
    goalkeeping: low
  };

  const shape = {
    GK: { goalkeeping: important, jumping: high, passing: mediumHigh, discipline: high, finishing: low, attacking: low, crossing: low, pace: lowMedium, dribbling: lowMedium },
    CB: { defending: important, heading: high, jumping: high, strength: high, discipline: high, passing: medium, stamina: medium, finishing: low, crossing: low, attacking: lowMedium, dribbling: lowMedium, pace: lowMedium },
    RB: { pace: important, defending: high, crossing: high, stamina: high, passing: medium, dribbling: medium, attacking: medium, finishing: lowMedium, goalkeeping: low },
    LB: { pace: important, defending: high, crossing: high, stamina: high, passing: medium, dribbling: medium, attacking: medium, finishing: lowMedium, goalkeeping: low },
    CDM: { defending: important, passing: high, stamina: high, strength: high, discipline: high, attacking: medium, heading: medium, jumping: medium, finishing: low, goalkeeping: low },
    CM: { passing: important, stamina: high, discipline: high, attacking: medium, defending: medium, dribbling: medium, finishing: lowMedium, heading: lowMedium, goalkeeping: low },
    CAM: { passing: important, attacking: high, dribbling: high, finishing: mediumHigh, crossing: mediumHigh, penalties: mediumHigh, defending: lowMedium, heading: lowMedium, goalkeeping: low },
    LW: { pace: important, attacking: high, dribbling: high, crossing: high, finishing: high, passing: medium, stamina: medium, penalties: medium, defending: low, heading: lowMedium, goalkeeping: low },
    RW: { pace: important, attacking: high, dribbling: high, crossing: high, finishing: high, passing: medium, stamina: medium, penalties: medium, defending: low, heading: lowMedium, goalkeeping: low },
    ST: { finishing: important, attacking: high, heading: mediumHigh, jumping: mediumHigh, strength: mediumHigh, dribbling: mediumHigh, passing: medium, pace: medium, penalties: medium, defending: low, crossing: low, goalkeeping: low }
  };

  return { ...base, ...(shape[position] || shape.CM) };
}

function blankPlayerStats() {
  const stats = {
    appearances: 0,
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    cleanSheets: 0,
    potm: 0,
    ownGoals: 0,
    ratingTotal: 0,
    ratingCount: 0
  };
  stats.byCompetition = {};
  COMPETITION_KEYS.filter((key) => key !== "all").forEach((competition) => {
    stats.byCompetition[competition] = blankFlatPlayerStats();
  });
  return stats;
}

function blankFlatPlayerStats() {
  return {
    appearances: 0,
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    cleanSheets: 0,
    potm: 0,
    ownGoals: 0,
    ratingTotal: 0,
    ratingCount: 0
  };
}

function getPositionBaseRating(team, position) {
  if (position === "GK") return team.goalkeeper;
  if (["CB", "RB", "LB", "CDM"].includes(position)) return team.defense;
  if (["CM", "CAM"].includes(position)) return team.midfield;
  return team.attack;
}

function createPrinceCup() {
  const seeds = initialPrinceCupSeeding.map((teamName, index) => ({
    seed: index + 1,
    teamId: getTeamIdByName(teamName),
    teamName
  }));

  return {
    status: "active",
    currentStage: "play_in",
    seeds,
    stages: [
      {
        key: "play_in",
        name: "Play-in",
        ties: [
          createTwoLegTie("PC-PI-1", "play_in", "Play-in", getSeedTeamId(15, seeds), getSeedTeamId(18, seeds), "Play-in", seeds),
          createTwoLegTie("PC-PI-2", "play_in", "Play-in", getSeedTeamId(16, seeds), getSeedTeamId(17, seeds), "Play-in", seeds)
        ]
      }
    ],
    championId: null,
    runnerUpId: null
  };
}

function createBlankSupercup() {
  return {
    status: "locked",
    match: null,
    championId: null,
    runnerUpId: null
  };
}

function createInitialSupercup() {
  const leagueChampionId = getTeamIdByName(initialPrinceCupSeeding[0]);
  const cupChampionId = getTeamIdByName(initialPrinceCupSeeding[1]);
  const cupRunnerUpId = getTeamIdByName(initialPrinceCupSeeding[2]);
  const opponentId = leagueChampionId === cupChampionId ? cupRunnerUpId : cupChampionId;
  const opponentRole = leagueChampionId === cupChampionId ? "Prince Cup Runner-up" : "Prince Cup Champion";
  return createReadySupercup(1, leagueChampionId, opponentId, opponentRole);
}

function createReadySupercup(seasonYear, leagueChampionId, opponentId, opponentRole = "Prince Cup Champion") {
  return {
    status: "ready",
    match: {
      id: `JS-S${seasonYear}`,
      competition: "Joker Supercup",
      label: "Final",
      homeId: leagueChampionId,
      awayId: opponentId,
      neutral: true,
      played: false,
      result: null,
      winnerId: null,
      loserId: null,
      awayRole: opponentRole
    },
    championId: null,
    runnerUpId: null
  };
}

function blankTable() {
  return {
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    form: []
  };
}

function generateFixtures(teams) {
  const teamIds = teams.map((team) => team.id);
  const firstHalf = [];
  const rotating = [...teamIds];
  const rounds = teamIds.length - 1;
  const matchesPerRound = teamIds.length / 2;

  for (let roundIndex = 0; roundIndex < rounds; roundIndex += 1) {
    const round = [];
    for (let matchIndex = 0; matchIndex < matchesPerRound; matchIndex += 1) {
      const home = rotating[matchIndex];
      const away = rotating[rotating.length - 1 - matchIndex];
      const reverseOpeningPair = matchIndex === 0 && roundIndex % 2 === 1;
      round.push({
        id: `KL-R${roundIndex + 1}M${matchIndex + 1}`,
        round: roundIndex + 1,
        homeId: reverseOpeningPair ? away : home,
        awayId: reverseOpeningPair ? home : away,
        played: false,
        result: null
      });
    }
    rotating.splice(1, 0, rotating.pop());
    firstHalf.push(round);
  }

  const secondHalf = firstHalf.map((round, index) => round.map((match, matchIndex) => ({
    id: `KL-R${index + 18}M${matchIndex + 1}`,
    round: index + 18,
    homeId: match.awayId,
    awayId: match.homeId,
    played: false,
    result: null
  })));

  return [...firstHalf, ...secondHalf];
}

function simulateNextMatch() {
  const next = getNextScheduledItem();
  if (!next) return;

  const summary = finalizeScheduledItem(next);
  if (!summary) return;
  state.matchCenter.mode = "post";
  state.matchCenter.live = null;
  render();
  saveGame("Auto-saved");
}

function finalizeScheduledItem(item, forcedGoals = null) {
  if (!item || item.match.played) return null;
  if (!validateScheduledLineups(item)) return null;

  if (item.type === "supercup") {
    return simulateSupercup(forcedGoals);
  }

  if (item.type === "prince") {
    const next = findPrinceLegById(item.match.id);
    if (!next) return null;
    const summary = playPrinceLeg(next.tie, next.leg, forcedGoals);
    if (!summary) return null;
    afterPrinceMatchPlayed();
    return summary;
  }

  const summary = playMatch(item.match, forcedGoals);
  if (!summary) return null;
  state.lastMatch = summary;
  state.history.unshift(summary);
  updateCurrentRound();
  updateSeasonPhase();
  return summary;
}

function validateScheduledLineups(item) {
  const home = getPreparedMatchLineup(item.match.id, item.match.homeId);
  const away = getPreparedMatchLineup(item.match.id, item.match.awayId);
  const issues = [];
  if (!home.validation.valid) issues.push(`${getTeam(item.match.homeId).name}: ${home.validation.errors.join(" ")}`);
  if (!away.validation.valid) issues.push(`${getTeam(item.match.awayId).name}: ${away.validation.errors.join(" ")}`);
  if (!issues.length) return true;
  alert(`Fix the lineup before starting this match:\n${issues.join("\n")}`);
  return false;
}

function simulateCurrentRound() {
  const next = getNextScheduledItem();
  if (next && (next.type !== "kings" || next.match.round !== state.currentRound)) {
    alert(`Next scheduled match is ${next.competition}. Play it before continuing the Kings League round.`);
    return;
  }

  const round = state.fixtures[state.currentRound - 1];
  if (!round) return;

  round.filter((match) => !match.played).forEach((match) => {
    const summary = playMatch(match);
    state.lastMatch = summary;
    state.history.unshift(summary);
  });

  updateCurrentRound();
  updateSeasonPhase();
  render();
  saveGame("Auto-saved");
}

function simulateNextPrinceMatch() {
  const scheduled = getNextScheduledItem();
  if (scheduled && scheduled.type !== "prince") {
    alert(`Next scheduled match is ${scheduled.competition}. Play it before continuing the Prince Cup.`);
    return;
  }

  const next = getNextPrinceLeg();
  if (!next) return;
  if (scheduled && !validateScheduledLineups(scheduled)) return;

  const summary = playPrinceLeg(next.tie, next.leg);
  if (summary) afterPrinceMatchPlayed();
}

function simulatePrinceLegById(legId, forcedGoals = null) {
  const next = findPrinceLegById(legId);
  if (!next || next.leg.played) return;

  const summary = playPrinceLeg(next.tie, next.leg, forcedGoals);
  if (summary) afterPrinceMatchPlayed();
}

function simulateCurrentPrinceStage() {
  const scheduled = getNextScheduledItem();
  if (scheduled && scheduled.type !== "prince") {
    alert(`Next scheduled match is ${scheduled.competition}. Play it before continuing the Prince Cup.`);
    return;
  }

  const next = getNextPrinceLeg();
  if (!next) return;

  const stage = next.tie.stage;
  let current = next;
  while (current && current.tie.stage === stage) {
    const scheduled = getNextScheduledItem();
    if (!scheduled || scheduled.type !== "prince" || scheduled.match.id !== current.leg.id) break;

    if (!validateScheduledLineups(scheduled)) break;
    playPrinceLeg(current.tie, current.leg);
    current = getNextPrinceLeg();
  }

  afterPrinceMatchPlayed();
}

function playPrinceLeg(tie, leg, forcedGoals = null) {
  const home = getTeam(leg.homeId);
  const away = getTeam(leg.awayId);
  const homePrepared = getPreparedMatchLineup(leg.id, home.id);
  const awayPrepared = getPreparedMatchLineup(leg.id, away.id);
  const homeLineup = homePrepared.lineup;
  const awayLineup = awayPrepared.lineup;
  const homeBench = homePrepared.bench;
  const awayBench = awayPrepared.bench;
  const homeGoals = forcedGoals ? forcedGoals.homeGoals : calculateGoalsFromLineups(home, away, homeLineup, awayLineup, true);
  const awayGoals = forcedGoals ? forcedGoals.awayGoals : calculateGoalsFromLineups(away, home, awayLineup, homeLineup, false);

  leg.played = true;
  leg.result = { homeGoals, awayGoals };

  const summary = buildCupSummary(home, away, homeGoals, awayGoals, "Prince Cup", `${tie.label} - Leg ${leg.legNumber}`, homeLineup, awayLineup, homeBench, awayBench);
  summary.matchId = leg.id;
  summary.matchType = "prince";
  state.lastMatch = summary;
  state.history.unshift(summary);

  if (tie.legs.every((item) => item.played)) {
    resolveTwoLegTie(tie);
  }

  return summary;
}

function afterPrinceMatchPlayed() {
  advancePrinceCup();
  maybeUnlockSupercup();
  updateSeasonPhase();
  render();
  saveGame("Auto-saved");
}

function createRoundOf16() {
  const seeds = state.princeCup.seeds;
  const playInWinners = getStage("play_in").ties
    .map((tie) => ({ teamId: tie.winnerId, seed: getSeed(tie.winnerId) }))
    .sort((a, b) => a.seed - b.seed);
  const bestPlayInWinner = playInWinners[0].teamId;
  const worstPlayInWinner = playInWinners[playInWinners.length - 1].teamId;

  return {
    key: "round_of_16",
    name: "Round of 16",
    ties: [
      createTwoLegTie("PC-R16-A1", "round_of_16", "Side A", getSeedTeamId(1, seeds), worstPlayInWinner, "Round of 16", seeds),
      createTwoLegTie("PC-R16-A2", "round_of_16", "Side A", getSeedTeamId(8, seeds), getSeedTeamId(9, seeds), "Round of 16", seeds),
      createTwoLegTie("PC-R16-A3", "round_of_16", "Side A", getSeedTeamId(4, seeds), getSeedTeamId(13, seeds), "Round of 16", seeds),
      createTwoLegTie("PC-R16-A4", "round_of_16", "Side A", getSeedTeamId(5, seeds), getSeedTeamId(12, seeds), "Round of 16", seeds),
      createTwoLegTie("PC-R16-B1", "round_of_16", "Side B", getSeedTeamId(2, seeds), bestPlayInWinner, "Round of 16", seeds),
      createTwoLegTie("PC-R16-B2", "round_of_16", "Side B", getSeedTeamId(7, seeds), getSeedTeamId(10, seeds), "Round of 16", seeds),
      createTwoLegTie("PC-R16-B3", "round_of_16", "Side B", getSeedTeamId(3, seeds), getSeedTeamId(14, seeds), "Round of 16", seeds),
      createTwoLegTie("PC-R16-B4", "round_of_16", "Side B", getSeedTeamId(6, seeds), getSeedTeamId(11, seeds), "Round of 16", seeds)
    ]
  };
}

function createNextPrinceStage(stageKey) {
  const previous = state.princeCup.stages[state.princeCup.stages.length - 1];
  const winners = previous.ties.map((tie) => tie.winnerId);

  if (stageKey === "quarter_final") {
    return createWinnerStage("quarter_final", "Quarter-finals", winners, ["Side A", "Side A", "Side B", "Side B"], "PC-QF");
  }

  if (stageKey === "semi_final") {
    return createWinnerStage("semi_final", "Semi-finals", winners, ["Side A", "Side B"], "PC-SF");
  }

  if (stageKey === "final") {
    return createWinnerStage("final", "Final", winners, ["Final"], "PC-F");
  }

  return null;
}

function createWinnerStage(key, name, winners, sides, prefix) {
  const ties = [];
  for (let index = 0; index < winners.length; index += 2) {
    ties.push(createTwoLegTie(`${prefix}-${index / 2 + 1}`, key, sides[index / 2], winners[index], winners[index + 1], name, state.princeCup.seeds));
  }
  return { key, name, ties };
}

function createTwoLegTie(id, stage, side, teamAId, teamBId, label, seeds) {
  const seedA = getSeedFromSeedList(teamAId, seeds);
  const seedB = getSeedFromSeedList(teamBId, seeds);
  const betterSeedId = seedA <= seedB ? teamAId : teamBId;
  const worseSeedId = betterSeedId === teamAId ? teamBId : teamAId;

  return {
    id,
    stage,
    side,
    label,
    teamAId,
    teamBId,
    betterSeedId,
    legs: [
      createCupLeg(`${id}-L1`, stage, label, worseSeedId, betterSeedId, 1),
      createCupLeg(`${id}-L2`, stage, label, betterSeedId, worseSeedId, 2)
    ],
    aggregate: { teamA: 0, teamB: 0 },
    winnerId: null,
    loserId: null,
    penalties: null
  };
}

function createCupLeg(id, stage, label, homeId, awayId, legNumber) {
  return {
    id,
    competition: "Prince Cup",
    stage,
    label,
    legNumber,
    homeId,
    awayId,
    played: false,
    result: null
  };
}

function resolveTwoLegTie(tie) {
  tie.aggregate = tie.legs.reduce((aggregate, leg) => {
    const homeIsA = leg.homeId === tie.teamAId;
    aggregate.teamA += homeIsA ? leg.result.homeGoals : leg.result.awayGoals;
    aggregate.teamB += homeIsA ? leg.result.awayGoals : leg.result.homeGoals;
    return aggregate;
  }, { teamA: 0, teamB: 0 });

  if (tie.aggregate.teamA > tie.aggregate.teamB) {
    tie.winnerId = tie.teamAId;
    tie.loserId = tie.teamBId;
    tie.winnerTeamId = tie.winnerId;
  } else if (tie.aggregate.teamB > tie.aggregate.teamA) {
    tie.winnerId = tie.teamBId;
    tie.loserId = tie.teamAId;
    tie.winnerTeamId = tie.winnerId;
  } else {
    tie.penalties = simulatePenalties(tie.teamAId, tie.teamBId);
    tie.winnerId = tie.penalties.teamAScore > tie.penalties.teamBScore ? tie.teamAId : tie.teamBId;
    tie.loserId = tie.winnerId === tie.teamAId ? tie.teamBId : tie.teamAId;
    tie.winnerTeamId = tie.winnerId;
    tie.penaltyWinnerTeamId = tie.winnerId;
  }
}

function advancePrinceCup() {
  const cup = state.princeCup;
  if (cup.status !== "active") return;

  const current = getStage(cup.currentStage);
  if (!current || !current.ties.every((tie) => tie.winnerId)) return;

  if (cup.currentStage === "play_in") {
    cup.stages.push(createRoundOf16());
    cup.currentStage = "round_of_16";
    return;
  }

  const stageOrder = ["round_of_16", "quarter_final", "semi_final", "final"];
  const stageIndex = stageOrder.indexOf(cup.currentStage);

  if (cup.currentStage === "final") {
    const finalTie = current.ties[0];
    cup.status = "complete";
    cup.championId = finalTie.winnerId;
    cup.runnerUpId = finalTie.loserId;
    return;
  }

  const nextStage = createNextPrinceStage(stageOrder[stageIndex + 1]);
  cup.stages.push(nextStage);
  cup.currentStage = nextStage.key;
}

function maybeUnlockSupercup() {
  if (state.jokerSupercup.status !== "locked") return;
  if (state.seasonYear === 1 && !state.seasonHistory.length) {
    state.jokerSupercup = createInitialSupercup();
  }
}

function simulateSupercup(forcedGoals = null) {
  maybeUnlockSupercup();
  if (state.jokerSupercup.status !== "ready") return;

  const match = state.jokerSupercup.match;
  if (!validateScheduledLineups({ type: "supercup", competition: "Joker Supercup", match })) return null;
  const home = getTeam(match.homeId);
  const away = getTeam(match.awayId);
  const homePrepared = getPreparedMatchLineup(match.id, home.id);
  const awayPrepared = getPreparedMatchLineup(match.id, away.id);
  const homeLineup = homePrepared.lineup;
  const awayLineup = awayPrepared.lineup;
  const homeBench = homePrepared.bench;
  const awayBench = awayPrepared.bench;
  const regularTimeHomeGoals = forcedGoals ? forcedGoals.homeGoals : calculateGoalsFromLineups(home, away, homeLineup, awayLineup, false);
  const regularTimeAwayGoals = forcedGoals ? forcedGoals.awayGoals : calculateGoalsFromLineups(away, home, awayLineup, homeLineup, false);
  let extraTimeHomeGoals = 0;
  let extraTimeAwayGoals = 0;
  let wentToExtraTime = false;
  let wentToPenalties = false;
  let penaltyShootout = null;

  if (regularTimeHomeGoals === regularTimeAwayGoals) {
    wentToExtraTime = true;
    const extraTime = randomExtraTimeResult(home, away);
    extraTimeHomeGoals = extraTime.homeGoals;
    extraTimeAwayGoals = extraTime.awayGoals;
  }

  const homeGoals = regularTimeHomeGoals + extraTimeHomeGoals;
  const awayGoals = regularTimeAwayGoals + extraTimeAwayGoals;
  const summary = buildCupSummary(home, away, homeGoals, awayGoals, "Joker Supercup", "Final", homeLineup, awayLineup, homeBench, awayBench);
  summary.matchId = match.id;
  summary.matchType = "supercup";
  summary.regularTimeHomeGoals = regularTimeHomeGoals;
  summary.regularTimeAwayGoals = regularTimeAwayGoals;
  summary.extraTimeHomeGoals = extraTimeHomeGoals;
  summary.extraTimeAwayGoals = extraTimeAwayGoals;
  summary.wentToExtraTime = wentToExtraTime;
  summary.extraTime = wentToExtraTime ? { homeGoals: extraTimeHomeGoals, awayGoals: extraTimeAwayGoals } : null;

  if (homeGoals === awayGoals) {
    wentToPenalties = true;
    const penalties = simulatePenalties(home.id, away.id);
    penaltyShootout = {
      homePens: penalties.teamAScore,
      awayPens: penalties.teamBScore,
      winnerTeamId: penalties.teamAScore > penalties.teamBScore ? home.id : away.id
    };
    summary.penalties = penalties;
    summary.winnerId = penaltyShootout.winnerTeamId;
  } else {
    summary.winnerId = homeGoals > awayGoals ? home.id : away.id;
  }
  summary.wentToPenalties = wentToPenalties;
  summary.penaltyShootout = penaltyShootout;
  summary.winnerTeamId = summary.winnerId;
  appendTiebreakFeedEvents(summary);

  match.played = true;
  match.result = {
    homeGoals,
    awayGoals,
    regularTimeHomeGoals,
    regularTimeAwayGoals,
    extraTimeHomeGoals,
    extraTimeAwayGoals,
    wentToExtraTime,
    wentToPenalties,
    penaltyShootout,
    extraTime: wentToExtraTime ? { homeGoals: extraTimeHomeGoals, awayGoals: extraTimeAwayGoals } : null,
    penalties: summary.penalties,
    winnerTeamId: summary.winnerId
  };
  match.winnerId = summary.winnerId;
  match.loserId = summary.winnerId === match.homeId ? match.awayId : match.homeId;
  state.jokerSupercup.status = "complete";
  state.jokerSupercup.championId = match.winnerId;
  state.jokerSupercup.runnerUpId = match.loserId;
  state.lastMatch = summary;
  state.history.unshift(summary);
  updateSeasonPhase();
  render();
  saveGame("Auto-saved");
  return summary;
}

function appendTiebreakFeedEvents(match) {
  if (!match.events) match.events = [];
  if (match.wentToExtraTime) {
    match.events.push({
      minute: 91,
      type: "extraTimeStart",
      teamId: null,
      text: "Extra time starts."
    });
    match.events.push({
      minute: 120,
      type: "extraTimeEnd",
      teamId: null,
      text: `Extra time ends: ${match.homeName} ${match.homeGoals}-${match.awayGoals} ${match.awayName}.`
    });
  }
  if (match.penaltyShootout) {
    match.events.push({
      minute: 121,
      type: "penaltyShootout",
      teamId: match.penaltyShootout.winnerTeamId,
      text: `Penalty shootout: ${match.homeName} ${match.penaltyShootout.homePens}-${match.penaltyShootout.awayPens} ${match.awayName}. Winner: ${getTeam(match.penaltyShootout.winnerTeamId).name}.`
    });
  }
  match.events = match.events.sort((a, b) => a.minute - b.minute || eventSortWeight(a.type) - eventSortWeight(b.type));
}

function buildCupSummary(home, away, homeGoals, awayGoals, competition, label, homeLineup, awayLineup, homeBench = getBenchPlayers(home.id, homeLineup).slice(0, 9), awayBench = getBenchPlayers(away.id, awayLineup).slice(0, 9)) {
  return createMatchSummary({
    id: `${competition}-${Date.now()}-${randomInt(100, 999)}`,
    competition,
    label,
    stage: label,
    home,
    away,
    homeGoals,
    awayGoals,
    homeLineup,
    awayLineup,
    homeBench,
    awayBench
  });
}

function createMatchSummary(config) {
  const {
    id,
    matchId,
    matchType,
    competition,
    label,
    stage,
    round,
    home,
    away,
    homeGoals,
    awayGoals,
    homeLineup,
    awayLineup,
    homeBench,
    awayBench
  } = config;
  const homeYellowCards = calculateCards(home, homeLineup, "yellow");
  const awayYellowCards = calculateCards(away, awayLineup, "yellow");
  const homeRedCards = calculateCards(home, homeLineup, "red");
  const awayRedCards = calculateCards(away, awayLineup, "red");
  const homeSubstitutions = createAutomaticSubstitutions({
    team: home,
    starters: homeLineup,
    bench: homeBench,
    goalsFor: homeGoals,
    goalsAgainst: awayGoals,
    yellowCards: homeYellowCards,
    redCards: homeRedCards
  });
  const awaySubstitutions = createAutomaticSubstitutions({
    team: away,
    starters: awayLineup,
    bench: awayBench,
    goalsFor: awayGoals,
    goalsAgainst: homeGoals,
    yellowCards: awayYellowCards,
    redCards: awayRedCards
  });
  const stats = createMatchStats(home, away, homeGoals, awayGoals, homeYellowCards, awayYellowCards, homeRedCards, awayRedCards);
  const events = createStructuredMatchEvents({
    home,
    away,
    homeLineup,
    awayLineup,
    homeSubstitutions,
    awaySubstitutions,
    homeGoals,
    awayGoals,
    homeYellowCards,
    awayYellowCards,
    homeRedCards,
    awayRedCards
  });
  const playerStats = recordMatchPlayerStats({
    competition,
    home,
    away,
    homeLineup,
    awayLineup,
    homeSubstitutions,
    awaySubstitutions,
    homeGoals,
    awayGoals,
    stats,
    events
  });
  const winner = homeGoals === awayGoals ? null : homeGoals > awayGoals ? home : away;

  return {
    id,
    matchId,
    matchType,
    competition,
    stage,
    label,
    round,
    homeTeamId: home.id,
    awayTeamId: away.id,
    homeId: home.id,
    awayId: away.id,
    homeName: home.name,
    awayName: away.name,
    homeGoals,
    awayGoals,
    winnerId: winner ? winner.id : null,
    status: "complete",
    extraTime: null,
    penalties: null,
    potm: playerStats.potm ? `${playerStats.potm.name} (${getTeam(playerStats.potm.teamId).name})` : "TBD",
    potmPlayerId: playerStats.potm ? playerStats.potm.playerId : null,
    stats,
    lineups: {
      homeFormation: homeLineup.formation,
      awayFormation: awayLineup.formation,
      home: lineupWithMinutes(homeLineup, homeSubstitutions),
      away: lineupWithMinutes(awayLineup, awaySubstitutions),
      homeBench: benchWithMinutes(homeBench, homeSubstitutions),
      awayBench: benchWithMinutes(awayBench, awaySubstitutions),
      homeSubstitutions: homeSubstitutions.map(substitutionSnapshot),
      awaySubstitutions: awaySubstitutions.map(substitutionSnapshot)
    },
    substitutions: [...homeSubstitutions, ...awaySubstitutions].map(substitutionSnapshot).sort((a, b) => a.minute - b.minute),
    playerRatings: playerStats.ratings,
    goalScorers: events.filter((event) => event.type === "goal").map(goalEventToScorer),
    assists: events.filter((event) => event.type === "goal" && event.assistPlayerId).map(goalEventToAssist),
    cards: events.filter((event) => event.type === "yellowCard" || event.type === "redCard").map(cardEventToSummary),
    events
  };
}

function createMatchStats(home, away, homeGoals, awayGoals, homeYellowCards, awayYellowCards, homeRedCards, awayRedCards) {
  const homePossession = clamp(48 + Math.round((home.midfield - away.midfield) / 4) + tacticPossessionBonus(home) - tacticPossessionBonus(away) + randomInt(-7, 7), 34, 66);
  const awayPossession = 100 - homePossession;
  const homeShots = clamp(homeGoals * 3 + randomInt(5, 13) + tacticShotBonus(home), Math.max(homeGoals, 2), 25);
  const awayShots = clamp(awayGoals * 3 + randomInt(4, 12) + tacticShotBonus(away), Math.max(awayGoals, 1), 24);
  const homeOnTarget = clamp(homeGoals + randomInt(homeGoals ? 0 : 1, 5), homeGoals, homeShots);
  const awayOnTarget = clamp(awayGoals + randomInt(awayGoals ? 0 : 1, 5), awayGoals, awayShots);
  const homeFouls = randomInt(7, 16) + homeYellowCards + homeRedCards;
  const awayFouls = randomInt(7, 16) + awayYellowCards + awayRedCards;
  const homeCorners = clamp(Math.round(homeShots / 3) + randomInt(0, 3), 0, 12);
  const awayCorners = clamp(Math.round(awayShots / 3) + randomInt(0, 3), 0, 12);
  const homeOffsides = randomInt(0, 4);
  const awayOffsides = randomInt(0, 4);
  const homeXg = Number((homeGoals * 0.45 + homeShots * 0.08 + homeOnTarget * 0.12).toFixed(2));
  const awayXg = Number((awayGoals * 0.45 + awayShots * 0.08 + awayOnTarget * 0.12).toFixed(2));

  return {
    possession: `${homePossession}% - ${awayPossession}%`,
    shots: `${homeShots} - ${awayShots}`,
    shotsOnTarget: `${homeOnTarget} - ${awayOnTarget}`,
    fouls: `${homeFouls} - ${awayFouls}`,
    yellowCards: `${homeYellowCards} - ${awayYellowCards}`,
    redCards: `${homeRedCards} - ${awayRedCards}`,
    corners: `${homeCorners} - ${awayCorners}`,
    offsides: `${homeOffsides} - ${awayOffsides}`,
    xg: `${homeXg} - ${awayXg}`,
    detail: {
      home: { goals: homeGoals, possession: homePossession, shots: homeShots, shotsOnTarget: homeOnTarget, fouls: homeFouls, yellowCards: homeYellowCards, redCards: homeRedCards, corners: homeCorners, offsides: homeOffsides, xg: homeXg },
      away: { goals: awayGoals, possession: awayPossession, shots: awayShots, shotsOnTarget: awayOnTarget, fouls: awayFouls, yellowCards: awayYellowCards, redCards: awayRedCards, corners: awayCorners, offsides: awayOffsides, xg: awayXg }
    }
  };
}

function randomExtraTimeResult(home, away) {
  const homeChance = (0.22 + (home.attack - away.defense) / 240) * settingScale("goalFrequency");
  const awayChance = (0.2 + (away.attack - home.defense) / 240) * settingScale("goalFrequency");
  return {
    homeGoals: Math.random() < homeChance ? 1 : 0,
    awayGoals: Math.random() < awayChance ? 1 : 0
  };
}

function simulatePenalties(teamAId, teamBId) {
  let teamAScore = randomInt(3, 5);
  let teamBScore = randomInt(3, 5);

  while (teamAScore === teamBScore) {
    if (Math.random() > 0.5) teamAScore += 1;
    else teamBScore += 1;
  }

  return { teamAId, teamBId, teamAScore, teamBScore };
}

function playMatch(match, forcedGoals = null) {
  const home = getTeam(match.homeId);
  const away = getTeam(match.awayId);
  const homePrepared = getPreparedMatchLineup(match.id, home.id);
  const awayPrepared = getPreparedMatchLineup(match.id, away.id);
  const homeLineup = homePrepared.lineup;
  const awayLineup = awayPrepared.lineup;
  const homeBench = homePrepared.bench;
  const awayBench = awayPrepared.bench;
  const homeGoals = forcedGoals ? forcedGoals.homeGoals : calculateGoalsFromLineups(home, away, homeLineup, awayLineup, true);
  const awayGoals = forcedGoals ? forcedGoals.awayGoals : calculateGoalsFromLineups(away, home, awayLineup, homeLineup, false);

  match.played = true;
  match.result = { homeGoals, awayGoals };

  applyTableResult(home, away, homeGoals, awayGoals);

  return createMatchSummary({
    id: `${match.id}-${Date.now()}`,
    matchId: match.id,
    matchType: "kings",
    competition: "Kings League",
    label: `Round ${match.round}`,
    stage: `Round ${match.round}`,
    round: match.round,
    home,
    away,
    homeGoals,
    awayGoals,
    homeLineup,
    awayLineup,
    homeBench,
    awayBench
  });
}

function calculateGoals(attackingTeam, defendingTeam, homeAdvantage) {
  const attackPower = attackingTeam.attack * 0.5 + attackingTeam.midfield * 0.25 + attackingTeam.overall * 0.25;
  const defensePower = defendingTeam.defense * 0.48 + defendingTeam.goalkeeper * 0.32 + defendingTeam.overall * 0.2;
  const styleBonus = tacticGoalBonus(attackingTeam) - tacticDefenseBonus(defendingTeam);
  const base = 0.72 + (attackPower - defensePower) / 42 + styleBonus + (homeAdvantage ? 0.22 : 0);
  const chances = Math.max(0.22, base + Math.random() * 2.05);
  let goals = 0;

  for (let i = 0; i < 6; i += 1) {
    if (Math.random() < chances / 6) goals += 1;
  }

  return clamp(goals, 0, 7);
}

function calculateGoalsFromLineups(attackingTeam, defendingTeam, attackingLineup, defendingLineup, homeAdvantage) {
  const settings = getSimulationSettings();
  const attackPower = average(attackingLineup.map((player) => {
    const attrs = player.attributes;
    const positionBonus = ["ST", "LW", "RW", "CAM"].includes(player.position) ? 4 : 0;
    return attrs.finishing * 0.28 + attrs.attacking * 0.22 + attrs.dribbling * 0.14 + attrs.pace * 0.12 + attrs.passing * 0.1 + attrs.crossing * 0.06 + attrs.heading * 0.06 + player.overall * 0.02 + positionBonus + getPlayerStyleModifier(player, "attack");
  })) || attackingTeam.attack;
  const defensePower = average(defendingLineup.map((player) => {
    const attrs = player.attributes;
    return attrs.defending * 0.28 + attrs.goalkeeping * (player.position === "GK" ? 0.3 : 0.03) + attrs.strength * 0.12 + attrs.stamina * 0.1 + attrs.discipline * 0.08 + attrs.jumping * 0.08 + attrs.heading * 0.08 + player.overall * 0.06 + getPlayerStyleModifier(player, "defense");
  })) || defendingTeam.defense;
  const styleBonus = tacticGoalBonus(attackingTeam) - tacticDefenseBonus(defendingTeam);
  const favoriteDiff = attackingTeam.overall - defendingTeam.overall;
  const favoriteAdjustment = favoriteDiff >= 0
    ? favoriteDiff / 130 * settingScale("favoriteAdvantage")
    : favoriteDiff / 190 * settingScale("favoriteAdvantage");
  const upsetSwing = favoriteDiff < 0 ? Math.random() * 0.22 * settingScale("upsetChance") : 0;
  const homeBoost = homeAdvantage ? 0.22 * settingScale("homeAdvantage") : 0;
  const randomSwing = Math.random() * 2.05 * (0.55 + settings.randomnessLevel / 110);
  const base = 0.72 + (attackPower - defensePower) / 44 + styleBonus + homeBoost + favoriteAdjustment + upsetSwing;
  const chances = Math.max(0.18, base * settingScale("goalFrequency") + randomSwing);
  let goals = 0;

  for (let i = 0; i < 6; i += 1) {
    if (Math.random() < chances / 6) goals += 1;
  }

  return clamp(goals, 0, 7);
}

function tacticGoalBonus(team) {
  const style = team.defaultStyle;
  const mentality = team.defaultMentality;
  return (style === "Attacking" || style === "High Press" ? 0.16 : 0)
    + (style === "Counter Attack" || style === "Direct Play" ? 0.08 : 0)
    + (mentality === "Attacking" ? 0.12 : 0)
    - (mentality === "Defensive" ? 0.12 : 0);
}

function tacticDefenseBonus(team) {
  return (team.defaultStyle === "Defensive" ? 0.12 : 0)
    + (team.defaultMarking === "Strong" ? 0.08 : 0)
    + (team.defaultMentality === "Defensive" ? 0.1 : 0)
    - (team.defaultMentality === "Attacking" ? 0.05 : 0);
}

function tacticPossessionBonus(team) {
  if (team.defaultStyle === "Possession") return 5;
  if (team.defaultStyle === "High Press") return 2;
  if (team.defaultStyle === "Counter Attack" || team.defaultStyle === "Direct Play") return -3;
  return 0;
}

function tacticShotBonus(team) {
  return (team.defaultMentality === "Attacking" ? 2 : 0) + (team.defaultStyle === "Attacking" || team.defaultStyle === "High Press" ? 1 : 0);
}

function calculateCards(team, lineup, type) {
  const averageDiscipline = average(lineup.map((player) => player.attributes.discipline));
  const defensiveLoad = average(lineup.filter((player) => ["CB", "RB", "LB", "CDM"].includes(player.position)).map((player) => 100 - player.attributes.defending));
  const styleRisk = average(lineup.map((player) => getPlayerStyleModifier(player, "cardRisk")));
  const markingPenalty = team.defaultMarking === "Strong" ? 0.55 : 0.1;
  const base = type === "yellow" ? 0.9 : 0.08;
  const pressure = (base + markingPenalty + styleRisk + (100 - averageDiscipline) / (type === "yellow" ? 38 : 180) + defensiveLoad / (type === "yellow" ? 120 : 520)) * settingScale("cardFrequency");
  const maxCards = type === "yellow" ? 5 : 2;
  let cards = 0;

  for (let i = 0; i < maxCards; i += 1) {
    if (Math.random() < pressure / (type === "yellow" ? 6 : 7)) cards += 1;
  }

  return cards;
}

function applyTableResult(home, away, homeGoals, awayGoals) {
  home.table.played += 1;
  away.table.played += 1;
  home.table.goalsFor += homeGoals;
  home.table.goalsAgainst += awayGoals;
  away.table.goalsFor += awayGoals;
  away.table.goalsAgainst += homeGoals;

  if (homeGoals > awayGoals) {
    home.table.wins += 1;
    home.table.points += 3;
    away.table.losses += 1;
    pushForm(home, "W");
    pushForm(away, "L");
  } else if (awayGoals > homeGoals) {
    away.table.wins += 1;
    away.table.points += 3;
    home.table.losses += 1;
    pushForm(away, "W");
    pushForm(home, "L");
  } else {
    home.table.draws += 1;
    away.table.draws += 1;
    home.table.points += 1;
    away.table.points += 1;
    pushForm(home, "D");
    pushForm(away, "D");
  }
}

function pushForm(team, result) {
  team.table.form.unshift(result);
  team.table.form = team.table.form.slice(0, 5);
}

function buildEvents(home, away, homeGoals, awayGoals, substitutions = []) {
  const events = [];
  for (let i = 0; i < homeGoals; i += 1) {
    events.push({ minute: randomInt(3, 88), text: `${home.name} goal by ${randomPlayerName()}` });
  }
  for (let i = 0; i < awayGoals; i += 1) {
    events.push({ minute: randomInt(3, 88), text: `${away.name} goal by ${randomPlayerName()}` });
  }
  events.push({ minute: randomInt(12, 38), text: `${Math.random() > 0.5 ? home.name : away.name} controls the tempo` });
  events.push({ minute: randomInt(55, 84), text: `${Math.random() > 0.5 ? home.name : away.name} forces a big save` });
  substitutions.forEach((substitution) => {
    events.push({
      minute: substitution.minute,
      text: `${substitution.teamName} substitution: ${substitution.playerIn.name} replaces ${substitution.playerOut.name}`
    });
  });
  return events.sort((a, b) => a.minute - b.minute).map((event) => `${event.minute}' ${event.text}`);
}

function createStructuredMatchEvents(context) {
  const {
    home,
    away,
    homeLineup,
    awayLineup,
    homeSubstitutions,
    awaySubstitutions,
    homeGoals,
    awayGoals,
    homeYellowCards,
    awayYellowCards,
    homeRedCards,
    awayRedCards
  } = context;
  const events = [{
    minute: 0,
    type: "kickoff",
    teamId: null,
    text: `Kickoff: ${home.name} vs ${away.name}.`
  }];

  addStructuredGoals(events, home, homeLineup, homeSubstitutions, homeGoals);
  addStructuredGoals(events, away, awayLineup, awaySubstitutions, awayGoals);
  addStructuredChance(events, home, homeLineup, homeSubstitutions);
  addStructuredChance(events, away, awayLineup, awaySubstitutions);
  addStructuredCards(events, home, homeLineup, homeSubstitutions, homeYellowCards, "yellowCard");
  addStructuredCards(events, away, awayLineup, awaySubstitutions, awayYellowCards, "yellowCard");
  addStructuredCards(events, home, homeLineup, homeSubstitutions, homeRedCards, "redCard");
  addStructuredCards(events, away, awayLineup, awaySubstitutions, awayRedCards, "redCard");
  [...homeSubstitutions, ...awaySubstitutions].forEach((substitution) => {
    events.push({
      minute: substitution.minute,
      type: "substitution",
      teamId: substitution.teamId,
      playerOutId: substitution.playerOut.id,
      playerInId: substitution.playerIn.id,
      text: substitutionEventText(substitution)
    });
  });
  events.push({
    minute: 45,
    type: "halfTime",
    teamId: null,
    text: "Half-time."
  });
  events.push({
    minute: 90,
    type: "fullTime",
    teamId: null,
    text: `Full-time: ${home.name} ${homeGoals}-${awayGoals} ${away.name}.`
  });

  return events.sort((a, b) => a.minute - b.minute || eventSortWeight(a.type) - eventSortWeight(b.type));
}

function addStructuredChance(events, team, starters, substitutions) {
  if (Math.random() > 0.7) return;
  const minute = randomInt(12, 84);
  const onField = getPlayersOnFieldAtMinute(starters, substitutions, minute);
  const player = pickWeightedPlayer(onField.filter((item) => item.position !== "GK"), Math.random() > 0.5 ? "goal" : "assist");
  if (!player) return;
  const actions = [
    `${player.name} finds space and forces a save for ${team.name}.`,
    `${player.name} creates a dangerous move for ${team.name}.`,
    `${player.name} gets into the box but the chance is cleared.`
  ];
  events.push({
    minute,
    type: "chance",
    teamId: team.id,
    playerId: player.id,
    text: actions[randomInt(0, actions.length - 1)]
  });
}

function addStructuredGoals(events, team, starters, substitutions, goalCount) {
  for (let index = 0; index < goalCount; index += 1) {
    const minute = randomInt(4, 89);
    const onField = getPlayersOnFieldAtMinute(starters, substitutions, minute);
    const scorer = pickWeightedPlayer(onField.filter((player) => player.position !== "GK"), "goal");
    const assistPool = onField.filter((player) => scorer && player.id !== scorer.id && player.position !== "GK");
    const assister = Math.random() < 0.78 ? pickWeightedPlayer(assistPool, "assist") : null;
    if (!scorer) continue;
    events.push({
      minute,
      type: "goal",
      teamId: team.id,
      playerId: scorer.id,
      assistPlayerId: assister ? assister.id : null,
      text: goalEventText(team, scorer, assister)
    });
  }
}

function addStructuredCards(events, team, starters, substitutions, count, type) {
  for (let index = 0; index < count; index += 1) {
    const minute = randomInt(type === "redCard" ? 18 : 8, 88);
    const onField = getPlayersOnFieldAtMinute(starters, substitutions, minute);
    const player = pickCardPlayer(onField, type);
    if (!player) continue;
    events.push({
      minute,
      type,
      teamId: team.id,
      playerId: player.id,
      text: cardEventText(player, type)
    });
  }
}

function getPlayersOnFieldAtMinute(starters, substitutions, minute) {
  const outIds = new Set(substitutions.filter((substitution) => substitution.minute <= minute).map((substitution) => substitution.playerOut.id));
  const inPlayers = substitutions.filter((substitution) => substitution.minute <= minute).map((substitution) => substitution.playerIn);
  return [...starters.filter((player) => !outIds.has(player.id)), ...inPlayers];
}

function pickCardPlayer(players, type) {
  const pool = players
    .filter((player) => player.position !== "GK")
    .sort((a, b) => (100 - b.attributes.discipline + getPlayerStyleModifier(b, "cardRisk") * 10) - (100 - a.attributes.discipline + getPlayerStyleModifier(a, "cardRisk") * 10));
  const limit = type === "redCard" ? 4 : 7;
  return pool[randomInt(0, Math.min(pool.length - 1, limit))];
}

function goalEventText(team, scorer, assister) {
  return assister
    ? `Goal for ${team.name}! ${scorer.name} scores after an assist from ${assister.name}.`
    : `Goal for ${team.name}! ${scorer.name} scores.`;
}

function cardEventText(player, type) {
  return `${type === "redCard" ? "Red" : "Yellow"} card for ${player.name}.`;
}

function substitutionEventText(substitution) {
  return `Substitution for ${substitution.teamName}: ${substitution.playerIn.name} replaces ${substitution.playerOut.name}.`;
}

function eventSortWeight(type) {
  return { kickoff: 0, goal: 1, yellowCard: 2, redCard: 3, substitution: 4, chance: 5, halfTime: 6, extraTimeStart: 7, extraTimeEnd: 8, penaltyShootout: 9, fullTime: 10 }[type] || 11;
}

function goalEventToScorer(event) {
  const player = getPlayerById(event.playerId);
  return { playerId: event.playerId, name: player ? player.name : "Unknown", teamId: event.teamId, minute: event.minute, assistPlayerId: event.assistPlayerId };
}

function goalEventToAssist(event) {
  const player = getPlayerById(event.assistPlayerId);
  return { playerId: event.assistPlayerId, name: player ? player.name : "Unknown", teamId: event.teamId, minute: event.minute };
}

function cardEventToSummary(event) {
  const player = getPlayerById(event.playerId);
  return { playerId: event.playerId, name: player ? player.name : "Unknown", teamId: event.teamId, type: event.type === "redCard" ? "redCards" : "yellowCards", minute: event.minute };
}

function createAutomaticSubstitutions({ team, starters, bench, goalsFor, goalsAgainst, yellowCards, redCards }) {
  const substitutions = [];
  const frequency = settingScale("substitutionFrequency");
  if (frequency <= 0) return substitutions;
  const usedBenchIds = new Set();
  const subbedOutIds = new Set();
  const losing = goalsFor < goalsAgainst;
  const winning = goalsFor > goalsAgainst;
  const baseTargetCount = 2 + (losing ? 1 : 0) + (redCards > 0 ? 1 : 0) + (Math.random() > 0.55 ? 1 : 0);
  const targetCount = clamp(Math.round(baseTargetCount * frequency), frequency < 0.5 ? 0 : 1, 5);
  const starterRisk = starters
    .filter((player) => player.position !== "GK")
    .map((player) => ({
      player,
      score: substitutionNeedScore(player, { team, losing, winning, yellowCards, redCards })
    }))
    .sort((a, b) => b.score - a.score);

  for (const candidate of starterRisk) {
    if (substitutions.length >= targetCount) break;
    if (subbedOutIds.has(candidate.player.id)) continue;
    if (candidate.score < 24 && substitutions.length >= 2) continue;

    const minute = pickSubstitutionMinute(candidate.player, substitutions.length, redCards);
    const replacement = findBestSubstitute(candidate.player, bench, usedBenchIds, { team, losing, winning });
    if (!replacement) continue;

    substitutions.push({
      minute,
      teamId: team.id,
      teamName: team.name,
      playerOut: candidate.player,
      playerIn: replacement,
      reason: substitutionReason(candidate.player, { losing, winning, yellowCards, redCards })
    });
    subbedOutIds.add(candidate.player.id);
    usedBenchIds.add(replacement.id);
  }

  return substitutions.sort((a, b) => a.minute - b.minute).slice(0, 5);
}

function substitutionNeedScore(player, context) {
  const attrs = player.attributes;
  const staminaNeed = 100 - attrs.stamina;
  const disciplineNeed = ["CB", "RB", "LB", "CDM", "CM"].includes(player.position) ? Math.max(0, 76 - attrs.discipline) : 0;
  const performanceNeed = Math.max(0, 80 - player.overall) * 0.9;
  const tacticalNeed = context.losing && ["CDM", "CM", "RB", "LB"].includes(player.position) ? 10 : 0;
  const protectLeadNeed = context.winning && ["LW", "RW", "CAM", "ST"].includes(player.position) ? 6 : 0;
  const cardRiskNeed = context.yellowCards > 1 && ["CB", "RB", "LB", "CDM"].includes(player.position) ? 13 : 0;
  const redEmergency = context.redCards > 0 && ["LW", "RW", "CAM", "ST"].includes(player.position) ? 9 : 0;
  const keyAttackerProtection = player.overall >= 86 && ["ST", "LW", "RW", "CAM"].includes(player.position) && !context.winning ? -14 : 0;
  return staminaNeed * 0.58 + disciplineNeed * 0.35 + performanceNeed + tacticalNeed + protectLeadNeed + cardRiskNeed + redEmergency + keyAttackerProtection + randomInt(-4, 7);
}

function pickSubstitutionMinute(player, index, redCards) {
  if (redCards > 0 && index === 0) return randomInt(35, 58);
  if (player.attributes.stamina < 68) return randomInt(52, 68);
  return randomInt(55 + index * 3, Math.min(84, 72 + index * 4));
}

function substitutionReason(player, context) {
  if (context.redCards > 0) return "Emergency balance";
  if (context.losing && ["CDM", "CM", "RB", "LB"].includes(player.position)) return "Attacking change";
  if (context.winning && ["LW", "RW", "CAM", "ST"].includes(player.position)) return "Protect lead";
  if (["CB", "RB", "LB", "CDM"].includes(player.position) && context.yellowCards > 1) return "Card risk";
  if (player.attributes.stamina < 72) return "Stamina";
  return "Tactical";
}

function findBestSubstitute(playerOut, bench, usedBenchIds, context) {
  return bench
    .filter((player) => !usedBenchIds.has(player.id))
    .filter((player) => playerOut.position === "GK" ? player.position === "GK" : player.position !== "GK")
    .sort((a, b) => substituteFitScore(b, playerOut.position, context) - substituteFitScore(a, playerOut.position, context))[0];
}

function substituteFitScore(player, outgoingPosition, context) {
  const compatibility = getSubstitutionCompatibility(player.position, outgoingPosition);
  const attackingNeed = context.losing ? (player.attributes.attacking + player.attributes.finishing + player.attributes.pace) / 12 : 0;
  const defensiveNeed = context.winning ? (player.attributes.defending + player.attributes.stamina + player.attributes.discipline) / 12 : 0;
  return player.overall + compatibility + attackingNeed + defensiveNeed + player.attributes.stamina / 12;
}

function getSubstitutionCompatibility(position, outgoingPosition) {
  const map = {
    GK: ["GK"],
    RW: ["RW", "LW", "CAM", "ST"],
    LW: ["LW", "RW", "CAM", "ST"],
    ST: ["ST", "LW", "RW", "CAM"],
    CAM: ["CAM", "CM", "CDM", "LW", "RW"],
    CM: ["CM", "CDM", "CAM"],
    CDM: ["CDM", "CM", "CAM"],
    CB: ["CB", "CDM", "RB", "LB"],
    RB: ["RB", "LB", "CB", "CDM"],
    LB: ["LB", "RB", "CB", "CDM"]
  };
  const options = map[outgoingPosition] || [outgoingPosition];
  const index = options.indexOf(position);
  if (index === 0) return 38;
  if (index > 0) return 24 - index * 3;
  return getPositionCompatibility(position, outgoingPosition) / 2;
}

function recordMatchPlayerStats(context) {
  const {
    competition,
    home,
    away,
    homeLineup,
    awayLineup,
    homeSubstitutions = [],
    awaySubstitutions = [],
    homeGoals,
    awayGoals,
    stats,
    events = []
  } = context;
  const homeParticipants = getMatchParticipants(homeLineup, homeSubstitutions);
  const awayParticipants = getMatchParticipants(awayLineup, awaySubstitutions);
  const activePlayers = [...homeParticipants, ...awayParticipants];
  const homeEligible = homeParticipants.filter((player) => player.minutesPlayed >= 15 || player.started);
  const awayEligible = awayParticipants.filter((player) => player.minutesPlayed >= 15 || player.started);
  const ratings = [];
  const goals = [];
  const assists = [];
  const cards = [];

  activePlayers.forEach((player) => {
    incrementPlayerStat(player, competition, "appearances", 1);
  });

  events.forEach((event) => {
    if (event.type === "goal") {
      const scorer = getPlayerById(event.playerId);
      const assister = getPlayerById(event.assistPlayerId);
      if (scorer) {
        incrementPlayerStat(scorer, competition, "goals", 1);
        goals.push({ playerId: scorer.id, name: scorer.name, teamId: scorer.teamId, minute: event.minute, assistPlayerId: event.assistPlayerId });
      }
      if (assister) {
        incrementPlayerStat(assister, competition, "assists", 1);
        assists.push({ playerId: assister.id, name: assister.name, teamId: assister.teamId, minute: event.minute });
      }
    }
    if (event.type === "yellowCard" || event.type === "redCard") {
      const player = getPlayerById(event.playerId);
      const statKey = event.type === "redCard" ? "redCards" : "yellowCards";
      if (player) {
        incrementPlayerStat(player, competition, statKey, 1);
        cards.push({ playerId: player.id, name: player.name, teamId: player.teamId, type: statKey, minute: event.minute });
      }
    }
  });

  if (awayGoals === 0) homeLineup.filter((player) => player.position === "GK").forEach((player) => incrementPlayerStat(player, competition, "cleanSheets", 1));
  if (homeGoals === 0) awayLineup.filter((player) => player.position === "GK").forEach((player) => incrementPlayerStat(player, competition, "cleanSheets", 1));

  if (Math.random() < 0.03) {
    const ownGoalPool = [...homeLineup, ...awayLineup].filter((player) => player.position !== "GK");
    const ownGoalPlayer = ownGoalPool[randomInt(0, ownGoalPool.length - 1)];
    if (ownGoalPlayer) incrementPlayerStat(ownGoalPlayer, competition, "ownGoals", 1);
  }

  activePlayers.forEach((player) => {
    const playerGoals = goals.filter((item) => item.playerId === player.id).length;
    const playerAssists = assists.filter((item) => item.playerId === player.id).length;
    const playerCards = cards.filter((item) => item.playerId === player.id);
    const teamConceded = player.teamId === home.id ? awayGoals : homeGoals;
    const teamGoals = player.teamId === home.id ? homeGoals : awayGoals;
    const won = teamGoals > teamConceded;
    const lost = teamGoals < teamConceded;
    const cleanSheet = teamConceded === 0 && ["GK", "CB", "RB", "LB", "CDM"].includes(player.position);
    const minutesFactor = clamp(player.minutesPlayed / 90, 0.18, 1);
    const shotsOnTargetAgainst = player.teamId === home.id ? stats.detail.away.shotsOnTarget : stats.detail.home.shotsOnTarget;
    const saves = player.position === "GK" ? Math.max(0, shotsOnTargetAgainst - teamConceded) : 0;
    const defensiveBonus = ["GK", "CB", "RB", "LB", "CDM"].includes(player.position) ? (player.attributes.defending + player.attributes.discipline + player.attributes.stamina - 210) / 180 : 0;
    const attackingBonus = ["ST", "LW", "RW", "CAM"].includes(player.position) ? (player.attributes.attacking + player.attributes.dribbling + player.attributes.pace - 220) / 220 : 0;
    const rating = clamp(
      6.15
      + ((player.overall - 75) / 45) * minutesFactor
      + playerGoals * randomFloat(0.8, 1.2)
      + playerAssists * randomFloat(0.4, 0.7)
      + (cleanSheet ? (player.position === "GK" ? 0.65 : 0.4) : 0)
      + defensiveBonus * minutesFactor
      + attackingBonus * minutesFactor
      + saves * 0.12
      + (won ? 0.18 : 0)
      - (lost ? 0.16 : 0)
      - Math.max(0, teamConceded - 1) * (["GK", "CB", "RB", "LB", "CDM"].includes(player.position) ? 0.28 : 0.08)
      - (!player.started && player.minutesPlayed < 20 ? 0.25 : 0)
      - playerCards.filter((card) => card.type === "yellowCards").length * 0.25
      - playerCards.filter((card) => card.type === "redCards").length * randomFloat(1.2, 2)
      + Math.random() * 0.35,
      4,
      10
    );
    addPlayerRating(player, competition, rating);
    ratings.push({ playerId: player.id, name: player.name, teamId: player.teamId, rating: Number(rating.toFixed(1)), minutesPlayed: player.minutesPlayed, started: player.started, saves });
  });

  const potm = selectPotmFromRatings(ratings, homeGoals, awayGoals, home.id, away.id);
  const potmPlayer = potm ? getPlayerById(potm.playerId) : null;
  if (potmPlayer) incrementPlayerStat(potmPlayer, competition, "potm", 1);
  return { potm, ratings, goals, assists, cards };
}

function getMatchParticipants(starters, substitutions) {
  const participantMap = new Map();
  starters.forEach((player) => {
    const substitution = substitutions.find((item) => item.playerOut.id === player.id);
    participantMap.set(player.id, decorateMatchPlayer(player, {
      started: true,
      minutesPlayed: substitution ? substitution.minute : 90,
      subbedOut: Boolean(substitution),
      subbedIn: false
    }));
  });

  substitutions.forEach((substitution) => {
    participantMap.set(substitution.playerIn.id, decorateMatchPlayer(substitution.playerIn, {
      started: false,
      minutesPlayed: 90 - substitution.minute,
      subbedOut: false,
      subbedIn: true
    }));
  });

  return [...participantMap.values()];
}

function selectPotmFromRatings(ratings, homeGoals, awayGoals, homeId, awayId) {
  const winnerId = homeGoals === awayGoals ? null : homeGoals > awayGoals ? homeId : awayId;
  const sorted = [...ratings]
    .filter((rating) => rating.minutesPlayed >= 25 || rating.rating >= 8)
    .sort((a, b) => {
      const winnerBias = (b.teamId === winnerId ? 0.18 : 0) - (a.teamId === winnerId ? 0.18 : 0);
      return (b.rating + (b.teamId === winnerId ? 0.18 : 0)) - (a.rating + (a.teamId === winnerId ? 0.18 : 0)) || winnerBias;
    });
  const best = sorted[0] || ratings[0];
  if (!best) return null;
  if (winnerId && best.teamId !== winnerId && best.rating < 8.2) {
    return sorted.find((rating) => rating.teamId === winnerId && rating.rating >= 6.8) || best;
  }
  return best.rating < 6.5 ? sorted.find((rating) => rating.rating >= 6.5) || best : best;
}

function decorateMatchPlayer(player, matchData) {
  return {
    ...player,
    sourcePlayer: player,
    started: matchData.started,
    subbedIn: matchData.subbedIn,
    subbedOut: matchData.subbedOut,
    minutesPlayed: clamp(matchData.minutesPlayed, 0, 90)
  };
}

function addGoalContributions(players, goalCount, competition, goals, assists) {
  for (let index = 0; index < goalCount; index += 1) {
    const scorer = pickWeightedPlayer(players, "goal");
    if (scorer) {
      incrementPlayerStat(scorer, competition, "goals", 1);
      goals.push({ playerId: scorer.id, name: scorer.name, teamId: scorer.teamId });
    }
    const assister = pickWeightedPlayer(players.filter((player) => !scorer || player.id !== scorer.id), "assist");
    if (assister) {
      incrementPlayerStat(assister, competition, "assists", 1);
      assists.push({ playerId: assister.id, name: assister.name, teamId: assister.teamId });
    }
  }
}

function addCards(players, count, cardType, competition, cards) {
  for (let index = 0; index < count; index += 1) {
    const player = players[randomInt(0, players.length - 1)];
    if (player) {
      incrementPlayerStat(player, competition, cardType, 1);
      cards.push({ playerId: player.id, name: player.name, teamId: player.teamId, type: cardType });
    }
  }
}

function pickWeightedPlayer(players, type) {
  if (!players.length) return null;
  const preferred = players.filter((player) => {
    if (type === "goal") return ["ST", "LW", "RW", "CAM"].includes(player.position);
    return ["CM", "CAM", "LW", "RW", "CDM"].includes(player.position);
  });
  const pool = (preferred.length ? preferred : players).sort((a, b) => weightedContributionScore(b, type) - weightedContributionScore(a, type));
  return pool[randomInt(0, Math.min(pool.length - 1, 4))];
}

function weightedContributionScore(player, type) {
  const attrs = player.attributes;
  if (type === "assist") {
    return attrs.passing * 0.36 + attrs.crossing * 0.28 + attrs.attacking * 0.18 + attrs.dribbling * 0.1 + player.overall * 0.08 + getPlayerStyleModifier(player, "assist");
  }
  return attrs.finishing * 0.34 + attrs.attacking * 0.24 + attrs.heading * 0.12 + attrs.dribbling * 0.1 + attrs.pace * 0.08 + player.overall * 0.12 + getPlayerStyleModifier(player, "goal");
}

function getPlayerStyleModifier(player, phase) {
  const style = player.playerStyle || "";
  const bonuses = {
    "Elite Inside Forward": { attack: 7, goal: 10, assist: 3 },
    "Inside Forward": { attack: 4, goal: 6, assist: 1 },
    "Winger": { attack: 2, assist: 6, goal: 1 },
    "Playmaker": { attack: 2, assist: 7 },
    "Creator": { attack: 3, assist: 8 },
    "Poacher": { attack: 3, goal: 8 },
    "Speed Striker": { attack: 7, goal: 9, assist: 1 },
    "Complete Forward": { attack: 5, goal: 5, assist: 4 },
    "Target Man": { attack: 4, goal: 6 },
    "Ball Playing Defender": { defense: 4, assist: 2 },
    "Aerial Defender": { defense: 6 },
    "Destroyer": { defense: 6, cardRisk: 1 },
    "Stopper": { defense: 5 },
    "Ball Winner": { defense: 5, cardRisk: 0.5 },
    "Anchor Man": { defense: 5 },
    "Deep Playmaker": { defense: 2, assist: 4 },
    "Wingback": { attack: 2, defense: 2, assist: 4 },
    "Fullback": { defense: 3, assist: 1 },
    "Defensive Fullback": { defense: 5 },
    "Shot Stopper": { defense: 7 }
  };
  return (bonuses[style] && bonuses[style][phase]) || 0;
}

function selectStartingLineup(teamId, formationSettings = null) {
  const team = getTeam(teamId);
  const settings = formationSettings || { preferredFormation: team.preferredFormation, autoFormation: team.autoFormation };
  const formation = settings.autoFormation ? chooseBestFormation(teamId, settings.preferredFormation) : (FORMATIONS[settings.preferredFormation] ? settings.preferredFormation : "4-2-3-1");
  const slots = FORMATIONS[formation] || FORMATIONS["4-2-3-1"];
  const available = [...getTeamPlayers(teamId)].sort((a, b) => b.overall - a.overall);
  const selected = [];

  slots.forEach((position) => {
    const player = findBestPlayerForPosition(available, selected, position);
    if (player) selected.push(player);
  });

  available.forEach((player) => {
    if (selected.length < 11 && !selected.some((item) => item.id === player.id)) selected.push(player);
  });

  const lineup = selected.slice(0, 11);
  lineup.formation = formation;
  lineup.slots = slots;
  validateGeneratedLineup(team, lineup, getBenchPlayers(teamId, lineup).slice(0, 9));
  return lineup;
}

function getPreparedMatchLineup(matchId, teamId) {
  const settings = getMatchFormationSettings(matchId, teamId);
  const formation = settings.autoFormation ? chooseBestFormation(teamId, settings.preferredFormation) : (FORMATIONS[settings.preferredFormation] ? settings.preferredFormation : "4-2-3-1");

  if (settings.autoLineup === false && Array.isArray(settings.startingXI) && settings.startingXI.length) {
    const lineup = settings.startingXI.map((id) => {
      const player = id ? getPlayerById(id) : null;
      return player && player.teamId === teamId ? player : null;
    });
    const starterIds = new Set(lineup.filter(Boolean).map((player) => player.id));
    const bench = (settings.bench || []).map((id) => id ? getPlayerById(id) : null).filter((player) => player && player.teamId === teamId && !starterIds.has(player.id)).slice(0, 9);
    lineup.formation = formation;
    lineup.slots = FORMATIONS[formation] || FORMATIONS["4-2-3-1"];
    const prepared = { settings: { ...settings, preferredFormation: formation }, lineup, bench, reserves: getLineupReserves(teamId, lineup, bench) };
    prepared.validation = validateMatchLineupState(teamId, prepared.lineup, prepared.bench);
    return prepared;
  }

  const autoSettings = { ...settings, preferredFormation: formation, autoFormation: false };
  const lineup = selectStartingLineup(teamId, autoSettings);
  const bench = getBenchPlayers(teamId, lineup).slice(0, 9);
  const prepared = { settings: { ...settings, preferredFormation: lineup.formation }, lineup, bench, reserves: getLineupReserves(teamId, lineup, bench) };
  prepared.validation = validateMatchLineupState(teamId, lineup, bench);
  return prepared;
}

function getLineupReserves(teamId, lineup, bench) {
  const selectedIds = new Set([...lineup, ...bench].filter(Boolean).map((player) => player.id));
  return getTeamPlayers(teamId).filter((player) => !selectedIds.has(player.id)).sort((a, b) => b.overall - a.overall);
}

function validateMatchLineupState(teamId, lineup, bench) {
  const team = getTeam(teamId);
  const slots = lineup.slots || [];
  const errors = [];
  const warnings = [];
  const allPlayers = [...lineup, ...bench].filter(Boolean);
  const ids = allPlayers.map((player) => player.id);

  if (lineup.length !== 11) errors.push("Starting XI must have exactly 11 players.");
  if (bench.length > 9) errors.push("Bench can have up to 9 players.");
  if (new Set(ids).size !== ids.length) errors.push("Lineup has duplicate players.");
  if (slots.length !== 11) errors.push("Formation must define 11 slots.");

  slots.forEach((slot, index) => {
    const player = lineup[index];
    if (!player) {
      errors.push(`Missing player for ${slot}.`);
      return;
    }
    if (player.teamId !== teamId) errors.push(`${player.name} does not belong to ${team.name}.`);
    if (slot === "GK" && player.position !== "GK") errors.push("GK slot must use a goalkeeper.");
    else {
      const compatibility = getPositionCompatibility(player.position, slot);
      if (compatibility < 0) warnings.push(`${player.name} is out of position at ${slot}. Compatibility ${formatCompatibility(compatibility)}.`);
      else if (compatibility < 18) warnings.push(`${player.name} can cover ${slot}, but compatibility is only ${formatCompatibility(compatibility)}.`);
    }
  });

  bench.forEach((player) => {
    if (player.teamId !== teamId) errors.push(`${player.name} cannot be on ${team.name}'s bench.`);
  });

  return { valid: errors.length === 0, errors, warnings };
}

function formatCompatibility(score) {
  if (score >= 35) return "Excellent";
  if (score >= 24) return "Good";
  if (score >= 10) return "Acceptable";
  if (score >= 0) return "Emergency";
  return "Poor";
}

function findBestPlayerForPosition(players, selected, position) {
  let candidates = players.filter((player) => !selected.some((item) => item.id === player.id));
  if (position === "GK" && candidates.some((player) => player.position === "GK")) {
    candidates = candidates.filter((player) => player.position === "GK");
  }
  return candidates
    .sort((a, b) => positionFitScore(b, position) - positionFitScore(a, position))
    [0];
}

function positionFitScore(player, targetPosition) {
  const compatibility = getPositionCompatibility(player.position, targetPosition);
  return player.overall * 1.8 + compatibility + playerAttributeForPosition(player, targetPosition) / 8 + styleSlotBonus(player, targetPosition);
}

function getPositionCompatibility(position, targetPosition) {
  if (position === targetPosition) return 40;
  const compatibility = {
    GK: { GK: 60 },
    CB: { CDM: 24, RB: 10, LB: 10 },
    RB: { LB: 25, CB: 12, RW: 6 },
    LB: { RB: 25, CB: 12, LW: 6 },
    CDM: { CM: 28, CB: 22, CAM: 8 },
    CM: { CDM: 28, CAM: 26 },
    CAM: { CM: 28, LW: 18, RW: 18, CDM: 6 },
    LW: { RW: 28, CAM: 22, ST: 16 },
    RW: { LW: 28, CAM: 22, ST: 16 },
    ST: { LW: 20, RW: 20, CAM: 12 }
  };
  return (compatibility[targetPosition] && compatibility[targetPosition][position]) || -35;
}

function playerAttributeForPosition(player, position) {
  if (position === "GK") return player.attributes.goalkeeping;
  if (position === "CB") return player.attributes.defending + player.attributes.heading + player.attributes.strength;
  if (["RB", "LB"].includes(position)) return player.attributes.pace + player.attributes.defending + player.attributes.crossing + player.attributes.stamina;
  if (position === "CDM") return player.attributes.defending + player.attributes.passing + player.attributes.stamina;
  if (["CM", "CAM"].includes(position)) return player.attributes.passing + player.attributes.dribbling + player.attributes.attacking;
  return player.attributes.finishing + player.attributes.attacking + player.attributes.pace + player.attributes.dribbling;
}

function styleSlotBonus(player, slot) {
  const style = player.playerStyle || "";
  if (slot === "GK" && (style.includes("Keeper") || style === "Shot Stopper")) return 8;
  if (["LW", "RW"].includes(slot) && ["Inside Forward", "Elite Inside Forward", "Winger", "Playmaking Winger", "Speed Winger"].includes(style)) return 8;
  if (slot === "ST" && ["Poacher", "Complete Forward", "Target Man", "Speed Striker", "Deep-Lying Forward"].includes(style)) return 8;
  if (slot === "CAM" && ["Creator", "Playmaker", "Shadow Striker", "Dribbler"].includes(style)) return 8;
  if (["CDM", "CM"].includes(slot) && ["Anchor Man", "Ball Winner", "Deep Playmaker", "Playmaker", "Box-to-Box", "Engine"].includes(style)) return 7;
  if (["RB", "LB"].includes(slot) && ["Wingback", "Fullback", "Defensive Fullback", "Inverted Fullback"].includes(style)) return 7;
  if (slot === "CB" && ["Stopper", "Aerial Defender", "Destroyer", "Ball Playing Defender"].includes(style)) return 7;
  return 0;
}

function chooseBestFormation(teamId, fallbackFormation = "4-2-3-1") {
  const players = getTeamPlayers(teamId);
  const team = getTeam(teamId);
  const scored = AVAILABLE_FORMATIONS.map((formation) => ({
    formation,
    score: formationScore(players, formation, team) + (formation === fallbackFormation ? 4 : 0)
  })).sort((a, b) => b.score - a.score);
  return scored[0] ? scored[0].formation : fallbackFormation;
}

function formationScore(players, formation, team = null) {
  const selected = [];
  const slotScore = (FORMATIONS[formation] || FORMATIONS["4-2-3-1"]).reduce((score, slot) => {
    const player = findBestPlayerForPosition(players, selected, slot);
    if (!player) return score - 80;
    selected.push(player);
    return score + positionFitScore(player, slot);
  }, 0);
  return slotScore + formationTacticBonus(formation, team);
}

function formationTacticBonus(formation, team) {
  if (!team) return 0;
  let bonus = 0;
  if (team.defaultMentality === "Attacking" && ["4-3-3", "4-2-3-1", "3-5-2"].includes(formation)) bonus += 18;
  if (team.defaultMentality === "Defensive" && ["5-4-1", "4-4-2"].includes(formation)) bonus += 18;
  if (team.defaultStyle === "Possession" && ["4-3-3", "4-3-1-2", "4-2-3-1"].includes(formation)) bonus += 16;
  if (team.defaultStyle === "High Press" && ["4-3-3", "4-2-3-1"].includes(formation)) bonus += 14;
  if (team.defaultStyle === "Counter Attack" && ["4-4-2", "5-4-1", "4-2-3-1"].includes(formation)) bonus += 14;
  if (team.defaultStyle === "Direct Play" && ["4-4-2", "3-5-2"].includes(formation)) bonus += 14;
  return bonus;
}

function validateGeneratedLineup(team, lineup, bench) {
  const ids = [...lineup, ...bench].map((player) => player.id);
  if (lineup.length !== 11) console.warn(`${team.name} lineup has ${lineup.length} players.`);
  if (bench.length > 9) console.warn(`${team.name} bench has more than 9 players.`);
  if (new Set(ids).size !== ids.length) console.warn(`${team.name} has duplicate players in lineup/bench.`);
  (lineup.slots || []).forEach((slot, index) => {
    const player = lineup[index];
    if (!player) console.warn(`${team.name} missing player for ${slot}.`);
    else if (getPositionCompatibility(player.position, slot) < 0) console.warn(`${team.name}: ${player.name} used in low-compatibility ${slot} slot.`);
    const betterBench = bench.find((candidate) => positionFitScore(candidate, slot) > positionFitScore(player, slot) + 12);
    if (betterBench) console.warn(`${team.name}: ${betterBench.name} may be a better ${slot} than ${player.name}.`);
  });
}

function playerImpactScore(player) {
  const attrs = player.attributes;
  return player.overall
    + attrs.attacking * 0.12
    + attrs.finishing * 0.12
    + attrs.passing * 0.1
    + attrs.dribbling * 0.08
    + attrs.pace * 0.06
    + attrs.defending * 0.08
    + attrs.discipline * 0.04
    + attrs.goalkeeping * (player.position === "GK" ? 0.2 : 0);
}

function isCleanSheetEligible(player) {
  return ["GK", "CB", "RB", "LB", "CDM"].includes(player.position);
}

function incrementPlayerStat(player, competition, statKey, amount) {
  player = player.sourcePlayer || player;
  ensurePlayerStats(player);
  player.stats[statKey] += amount;
  ensureCompetitionStats(player, competition);
  player.stats.byCompetition[competition][statKey] += amount;
}

function addPlayerRating(player, competition, rating) {
  player = player.sourcePlayer || player;
  ensurePlayerStats(player);
  player.stats.ratingTotal += rating;
  player.stats.ratingCount += 1;
  ensureCompetitionStats(player, competition);
  player.stats.byCompetition[competition].ratingTotal += rating;
  player.stats.byCompetition[competition].ratingCount += 1;
}

function ensureCompetitionStats(player, competition) {
  ensurePlayerStats(player);
  if (!player.stats.byCompetition[competition]) {
    player.stats.byCompetition[competition] = blankFlatPlayerStats();
  }
}

function ensurePlayerStats(player) {
  if (!player.stats) player.stats = blankPlayerStats();
  if (!player.stats.byCompetition) {
    const oldStats = { ...player.stats };
    player.stats = blankPlayerStats();
    Object.keys(oldStats).forEach((key) => {
      if (key in player.stats && key !== "byCompetition") player.stats[key] = oldStats[key] || 0;
    });
  }
  if (player.stats.ownGoals === undefined) player.stats.ownGoals = 0;
}

function playerSnapshot(player) {
  return {
    id: player.id,
    name: player.name,
    teamId: player.teamId,
    position: player.position,
    overall: player.overall,
    playerStyle: player.playerStyle || "",
    minutesPlayed: player.minutesPlayed,
    started: player.started,
    subbedIn: player.subbedIn,
    subbedOut: player.subbedOut
  };
}

function substitutionSnapshot(substitution) {
  return {
    minute: substitution.minute,
    teamId: substitution.teamId,
    teamName: substitution.teamName,
    playerIn: playerSnapshot(substitution.playerIn),
    playerOut: playerSnapshot(substitution.playerOut),
    reason: substitution.reason
  };
}

function lineupWithMinutes(lineup, substitutions) {
  return lineup.map((player) => {
    const substitution = substitutions.find((item) => item.playerOut.id === player.id);
    return playerSnapshot({
      ...player,
      started: true,
      subbedOut: Boolean(substitution),
      minutesPlayed: substitution ? substitution.minute : 90
    });
  });
}

function benchWithMinutes(bench, substitutions) {
  return bench.map((player) => {
    const substitution = substitutions.find((item) => item.playerIn.id === player.id);
    return playerSnapshot({
      ...player,
      started: false,
      subbedIn: Boolean(substitution),
      minutesPlayed: substitution ? 90 - substitution.minute : 0
    });
  });
}

function render() {
  renderStatus();
  renderTables();
  renderTeams();
  renderPlayersPage();
  renderNextMatch();
  renderCalendar();
  renderStats();
  renderMatchCenter();
  renderPrinceCup();
  renderSupercup();
  renderSeasonReview();
  renderTransferWindow();
  renderHistory();
  renderSettings();
}

function renderStatus() {
  const leaguePlayed = state.fixtures.flat().filter((match) => match.played).length;
  const princePlayed = getPrinceLegs().filter((match) => match.played).length;
  const supercupPlayed = state.jokerSupercup.match && state.jokerSupercup.match.played ? 1 : 0;
  const leader = getSortedTeams()[0];
  elements.roundStatus.textContent = `Season ${state.seasonYear} - ${state.seasonPhase} - Round ${Math.min(state.currentRound, 34)} / 34`;
  elements.teamCount.textContent = state.teams.length;
  elements.matchesPlayed.textContent = leaguePlayed + princePlayed + supercupPlayed;
  elements.leagueLeader.textContent = leader ? leader.name : "-";
}

function renderTables() {
  fillTable(elements.leagueTable.querySelector("tbody"), getSortedTeams(), false);
  fillTable(elements.leagueTableFull.querySelector("tbody"), getSortedTeams(), true);
}

function fillTable(tbody, teams, showPlayed) {
  tbody.innerHTML = teams.map((team, index) => {
    const goalDifference = team.table.goalsFor - team.table.goalsAgainst;
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${teamCell(team)}</td>
        ${showPlayed ? `<td>${team.table.played}</td>` : ""}
        <td><strong>${team.table.points}</strong></td>
        <td>${team.table.wins}</td>
        <td>${team.table.draws}</td>
        <td>${team.table.losses}</td>
        <td>${team.table.goalsFor}</td>
        <td>${team.table.goalsAgainst}</td>
        <td>${goalDifference > 0 ? "+" : ""}${goalDifference}</td>
        <td>${renderForm(team.table.form)}</td>
      </tr>
    `;
  }).join("");
}

function renderTeams() {
  elements.teamsGrid.innerHTML = state.teams.map((team) => `
    <article class="team-card">
      ${crest(team)}
      <div class="team-card-body">
        <div class="team-card-title">
          <strong>${team.name}</strong>
          <span>OVR ${team.overall}</span>
        </div>
        <div class="rating-grid">
          <span>GK <strong>${team.goalkeeper}</strong></span>
          <span>DEF <strong>${team.defense}</strong></span>
          <span>MID <strong>${team.midfield}</strong></span>
          <span>ATK <strong>${team.attack}</strong></span>
        </div>
        <div class="team-meta">${team.defaultStyle} - ${team.defaultMarking} - ${team.defaultMentality}</div>
        <div class="key-player-strip">
          ${getTeamPlayers(team.id).sort((a, b) => b.overall - a.overall).slice(0, 3).map((player) => `<span>${player.position} ${player.name}</span>`).join("")}
        </div>
        <div class="formation-controls">
          <label>Formation
            <select data-team-formation="${team.id}">
              ${formationOptions(team.preferredFormation)}
            </select>
          </label>
          <label class="toggle-label">
            <input type="checkbox" data-team-auto-formation="${team.id}" ${team.autoFormation ? "checked" : ""}>
            Auto
          </label>
        </div>
      </div>
    </article>
  `).join("");

  elements.teamsGrid.querySelectorAll("[data-team-formation]").forEach((select) => {
    select.addEventListener("change", () => updateTeamFormation(Number(select.dataset.teamFormation), select.value));
  });
  elements.teamsGrid.querySelectorAll("[data-team-auto-formation]").forEach((input) => {
    input.addEventListener("change", () => updateTeamAutoFormation(Number(input.dataset.teamAutoFormation), input.checked));
  });
}

function renderPlayersPage() {
  const currentTeamFilter = elements.playersTeamFilter.value || "all";
  const currentPositionFilter = elements.playersPositionFilter.value || "all";
  elements.playersTeamFilter.innerHTML = `<option value="all">All teams</option>${state.teams.map((team) => `<option value="${team.id}">${team.name}</option>`).join("")}`;
  elements.playersPositionFilter.innerHTML = `<option value="all">All positions</option>${PLAYER_POSITIONS.map((position) => `<option value="${position}">${position}</option>`).join("")}`;
  elements.playersTeamFilter.value = currentTeamFilter;
  elements.playersPositionFilter.value = currentPositionFilter;

  const query = elements.playerSearch.value.trim().toLowerCase();
  const teamFilter = elements.playersTeamFilter.value || "all";
  const positionFilter = elements.playersPositionFilter.value || "all";
  const sort = elements.playersSort.value || "overall";
  let players = [...state.players].map(normalizePlayer);

  if (query) players = players.filter((player) => player.name.toLowerCase().includes(query));
  if (teamFilter !== "all") players = players.filter((player) => player.teamId === Number(teamFilter));
  if (positionFilter !== "all") players = players.filter((player) => player.position === positionFilter);

  players.sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "team") return getTeam(a.teamId).name.localeCompare(getTeam(b.teamId).name);
    if (sort === "position") return a.position.localeCompare(b.position);
    return b.overall - a.overall;
  });

  elements.playersList.innerHTML = players.length
    ? `
      <div class="table-wrap">
        <table class="players-table">
          <thead><tr><th>Player</th><th>Team</th><th>Position</th><th>Style</th><th>OVR</th><th></th></tr></thead>
          <tbody>
            ${players.map((player) => `
              <tr>
                <td><strong>${player.name}</strong><div class="table-subtext">${player.nationality}</div></td>
                <td>${getTeam(player.teamId).name}</td>
                <td>${player.position}</td>
                <td>${player.playerStyle || "-"}</td>
                <td><strong>${player.overall}</strong></td>
                <td><button class="secondary-action small-action" data-edit-player="${player.id}">Edit</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `
    : `<div class="empty-state">No players found.</div>`;

  elements.playersList.querySelectorAll("[data-edit-player]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.transferPlayer.value = button.dataset.editPlayer;
      showSection("transfer-window", "Transfer Window");
      loadSelectedPlayerIntoForm();
    });
  });
}

function renderNextMatch() {
  const next = getNextScheduledItem();
  elements.nextMatch.innerHTML = next ? fixtureMarkup(next.match, next.competition) : `<div class="empty-state">Season complete.</div>`;
}

function renderCalendar() {
  elements.calendarFilter.value = state.calendarFilter || "all";
  const filter = elements.calendarFilter.value;
  const matches = getCombinedCalendar().filter((item) => filter === "all" || item.type === filter);
  elements.fixtureList.innerHTML = matches.length
    ? matches.map((item) => fixtureMarkup(item.match, item.competition)).join("")
    : `<div class="empty-state">No matches available for this competition yet.</div>`;
}

function renderStats() {
  const currentTeam = elements.statsTeamFilter.value || "all";
  const currentSeason = elements.statsSeasonFilter.value || "current";
  elements.statsTeamFilter.innerHTML = `<option value="all">All teams</option>${state.teams.map((team) => `<option value="${team.id}">${team.name}</option>`).join("")}`;
  elements.statsSeasonFilter.innerHTML = `<option value="current">Current season</option>${state.seasonHistory.map((season) => `<option value="${season.seasonYear}">Season ${season.seasonYear}</option>`).join("")}`;
  elements.statsTeamFilter.value = currentTeam;
  elements.statsSeasonFilter.value = currentSeason;

  const competition = elements.statsCompetitionFilter.value || "all";
  const players = getPlayersForStats(currentSeason, currentTeam);
  fillPlayerLeaderboard(elements.statsGoals, players, competition, "goals");
  fillPlayerLeaderboard(elements.statsAssists, players, competition, "assists");
  fillPlayerLeaderboard(elements.statsYellowCards, players, competition, "yellowCards");
  fillPlayerLeaderboard(elements.statsRedCards, players, competition, "redCards");
  fillPlayerLeaderboard(elements.statsCleanSheets, players, competition, "cleanSheets");
  fillPlayerLeaderboard(elements.statsPotm, players, competition, "potm");
  fillPlayerLeaderboard(elements.statsAverageRating, players, competition, "averageRating");
  fillPlayerLeaderboard(elements.statsOwnGoals, players, competition, "ownGoals");
}

function preMatchMarkup(item) {
  const home = getTeam(item.match.homeId);
  const away = getTeam(item.match.awayId);
  const homePrepared = getPreparedMatchLineup(item.match.id, home.id);
  const awayPrepared = getPreparedMatchLineup(item.match.id, away.id);
  const homeSettings = homePrepared.settings;
  const awaySettings = awayPrepared.settings;
  const homeLineup = homePrepared.lineup;
  const awayLineup = awayPrepared.lineup;
  const homeBench = homePrepared.bench;
  const awayBench = awayPrepared.bench;
  const chances = getChanceDistribution(home, away, item.match.neutral);
  const homeStrength = getLineupStrength(homeLineup);
  const awayStrength = getLineupStrength(awayLineup);

  return `
    <article class="match-hero-card">
      <div class="fixture-meta">${item.competition} - ${getFixtureMeta(item.match, item.competition)}</div>
      <div class="match-score">
        <span>${home.name}</span>
        <strong>vs</strong>
        <span>${away.name}</span>
      </div>
      <div class="status-strip">
        <span>${item.match.neutral ? "Neutral field" : `${home.name} home`}</span>
        <span>Pending</span>
      </div>
    </article>
    <div class="team-setup-grid">
      ${teamSetupCard("Home Team Setup", home, item.match.id, homeSettings, homeLineup, homeBench, homeStrength, homePrepared.validation)}
      ${teamSetupCard("Away Team Setup", away, item.match.id, awaySettings, awayLineup, awayBench, awayStrength, awayPrepared.validation)}
    </div>
    <div class="match-preview-grid">
      ${homePrepared.settings.editorOpen ? lineupEditorCard(home, item.match.id, homePrepared) : ""}
      ${awayPrepared.settings.editorOpen ? lineupEditorCard(away, item.match.id, awayPrepared) : ""}
    </div>
    <div class="action-row match-actions-row">
      <button class="primary-action" data-match-action="start">Start Match</button>
      <button class="secondary-action" data-match-action="instant">Simulate Instantly</button>
      <button class="secondary-action" data-match-action="calendar">Back to Calendar</button>
    </div>
    <article class="review-card">
      <h4>Chance Distribution</h4>
      <div class="chance-grid">
        ${summaryStat(`${home.name} win`, `${chances.home}%`)}
        ${summaryStat("Draw", `${chances.draw}%`)}
        ${summaryStat(`${away.name} win`, `${chances.away}%`)}
      </div>
    </article>
  `;
}

function teamSetupCard(title, team, matchId, settings, lineup, bench, strength, validation) {
  return `
    <article class="review-card team-setup-card">
      <div class="team-setup-heading">
        <h4>${title}</h4>
        <strong>${team.name}</strong>
      </div>
      <div class="team-control-row">
        <label>Formation
          <select data-match-formation="${matchId}" data-team-id="${team.id}">
            ${formationOptions(settings.preferredFormation)}
          </select>
        </label>
        <button class="secondary-action" data-match-action="best-auto-formation" data-match-id="${matchId}" data-team-id="${team.id}">Best Formation</button>
        <button class="secondary-action" data-match-action="toggle-lineup-editor" data-match-id="${matchId}" data-team-id="${team.id}">${settings.editorOpen ? "Close Editor" : "Edit"}</button>
        <div class="more-menu ${settings.moreOpen ? "open" : ""}">
          <button class="secondary-action" data-match-action="toggle-more-menu" data-match-id="${matchId}" data-team-id="${team.id}">More</button>
          ${settings.moreOpen ? `
            <div class="more-menu-list">
              <button type="button" data-match-action="reset-best-xi" data-match-id="${matchId}" data-team-id="${team.id}">Reset to Best XI</button>
              <button type="button" data-match-action="save-formation-default" data-team-id="${team.id}">Save as Default</button>
            </div>
          ` : ""}
        </div>
      </div>
      <div class="team-setup-meta">
        <span>${team.defaultStyle}</span>
        <span>${team.defaultMentality}</span>
        <span>Strength ${strength}</span>
      </div>
      ${pitchLineup(team, lineup, bench, settings.preferredFormation)}
      ${validation && !validation.valid ? `<div class="lineup-warning">${validation.errors.join("<br>")}</div>` : ""}
    </article>
  `;
}

function teamPreviewCard(team, lineup, bench, strength, validation) {
  return `
    <article class="review-card">
      <h4>${team.name}</h4>
      <div class="status-strip">
        <span>Formation ${lineup.formation}</span>
        <span>${team.defaultStyle}</span>
        <span>${team.defaultMarking} marking</span>
        <span>${team.defaultMentality}</span>
        <span>Strength ${strength}</span>
      </div>
      ${pitchLineup(team, lineup, bench, lineup.formation)}
      ${validation && !validation.valid ? `<div class="lineup-warning">${validation.errors.join("<br>")}</div>` : ""}
    </article>
  `;
}

function lineupEditorCard(team, matchId, prepared) {
  const slots = prepared.lineup.slots || FORMATIONS[prepared.settings.preferredFormation] || FORMATIONS["4-2-3-1"];
  const teamPlayers = getTeamPlayers(team.id).sort((a, b) => b.overall - a.overall || a.name.localeCompare(b.name));
  const selectedIds = new Set([...prepared.lineup, ...prepared.bench].filter(Boolean).map((player) => player.id));
  const reserves = teamPlayers.filter((player) => !selectedIds.has(player.id));
  return `
    <article class="review-card lineup-editor">
      <h4>${team.name} Edit Lineup</h4>
      <div class="status-strip">
        <span>${prepared.settings.autoLineup ? "Auto lineup" : "Manual lineup"}</span>
        <span>${prepared.lineup.formation}</span>
      </div>
      ${prepared.validation.warnings.length ? `<div class="lineup-warning">${prepared.validation.warnings.join("<br>")}</div>` : ""}
      ${prepared.validation.errors.length ? `<div class="lineup-warning">${prepared.validation.errors.join("<br>")}</div>` : ""}
      <div class="action-row compact-actions">
        <button class="secondary-action" data-match-action="autofill-lineup" data-match-id="${matchId}" data-team-id="${team.id}">Auto-fill Empty Slots</button>
        <button class="secondary-action" data-match-action="reset-best-xi" data-match-id="${matchId}" data-team-id="${team.id}">Reset to Best XI</button>
      </div>
      <div class="lineup-editor-grid">
        <div class="mini-list">
          <strong>Starting XI</strong>
          ${slots.map((slot, index) => lineupSelectRow({
            label: slot,
            players: teamPlayers,
            selectedId: prepared.lineup[index] ? prepared.lineup[index].id : "",
            attr: "data-lineup-slot",
            slotIndex: index,
            matchId,
            teamId: team.id,
            allowEmpty: true
          })).join("")}
        </div>
        <div class="mini-list">
          <strong>Bench</strong>
          ${Array.from({ length: 9 }, (_, index) => lineupSelectRow({
            label: `B${index + 1}`,
            players: teamPlayers,
            selectedId: prepared.bench[index] ? prepared.bench[index].id : "",
            attr: "data-bench-slot",
            slotIndex: index,
            matchId,
            teamId: team.id,
            allowEmpty: true
          })).join("")}
        </div>
        <div class="mini-list">
          <strong>Reserves</strong>
          ${reserves.length ? reserves.slice(0, 16).map(playerLine).join("") : "<span>No reserves</span>"}
        </div>
      </div>
    </article>
  `;
}

function lineupSelectRow({ label, players, selectedId, attr, slotIndex, matchId, teamId, allowEmpty = false }) {
  return `
    <label class="lineup-select-row"><span>${label}</span>
      <select ${attr}="${slotIndex}" data-match-id="${matchId}" data-team-id="${teamId}">
        ${allowEmpty ? `<option value="">Empty</option>` : ""}
        ${lineupPlayerOptions(players, selectedId, label)}
      </select>
    </label>
  `;
}

function lineupPlayerOptions(players, selectedId, slot) {
  const useCompatibility = FORMATIONS["4-2-3-1"].includes(slot) || PLAYER_POSITIONS.includes(slot);
  const sorted = [...players].sort((a, b) => {
    if (!useCompatibility) return b.overall - a.overall || a.name.localeCompare(b.name);
    return getPositionCompatibility(b.position, slot) - getPositionCompatibility(a.position, slot)
      || positionFitScore(b, slot) - positionFitScore(a, slot)
      || a.name.localeCompare(b.name);
  });
  return sorted.map((player) => {
    const compatibility = useCompatibility ? getPositionCompatibility(player.position, slot) : 40;
    const warning = useCompatibility && compatibility < 0 ? " | out of position" : useCompatibility && compatibility < 18 ? " | cover" : "";
    return `<option value="${player.id}" ${String(player.id) === String(selectedId) ? "selected" : ""}>${player.name} - ${player.position} - ${player.overall}${player.playerStyle ? ` - ${player.playerStyle}` : ""}${warning}</option>`;
  }).join("");
}

function playerLine(player) {
  return `<span>${player.position} ${player.name} - OVR ${player.overall}${player.playerStyle ? ` - ${player.playerStyle}` : ""}</span>`;
}

function pitchJerseySvg(color) {
  const c = color || "#2e90ff";
  return `<svg class="pitch-jersey-svg" viewBox="0 0 100 92" aria-hidden="true">
    <path d="M30 8 L18 14 L7 31 L20 41 L26 33 L26 84 L74 84 L74 33 L80 41 L93 31 L82 14 L70 8 C64 19 36 19 30 8 Z"
      fill="${c}" stroke="rgba(0,0,0,0.28)" stroke-width="2" stroke-linejoin="round"/>
  </svg>`;
}

function pitchPitchLines() {
  return `<svg class="pitch-lines" viewBox="0 0 100 150" preserveAspectRatio="none" aria-hidden="true">
    <rect x="3" y="3" width="94" height="144" rx="2"/>
    <circle cx="50" cy="2" r="16"/>
    <line x1="3" y1="14" x2="97" y2="14"/>
    <rect x="18" y="112" width="64" height="35"/>
    <rect x="35" y="131" width="30" height="16"/>
    <path d="M30 112 A22 22 0 0 0 70 112"/>
  </svg>`;
}

function pitchPlayer(player, slotLabel, x, y, color) {
  if (!player) {
    return `<div class="pitch-player pitch-player-empty" style="left:${x}%;top:${y}%;">
      <div class="pitch-jersey">${pitchJerseySvg("#39414f")}</div>
      <span class="pitch-name">${slotLabel || "—"}</span>
    </div>`;
  }
  return `<div class="pitch-player" style="left:${x}%;top:${y}%;">
    <div class="pitch-jersey">${pitchJerseySvg(color)}<span class="pitch-ovr">${player.overall}</span></div>
    <span class="pitch-name" title="${player.name}">${player.name}</span>
  </div>`;
}

function pitchSubRow(color, player) {
  return `<div class="pitch-sub">
    <span class="pitch-sub-dot" style="background:${color || "#2e90ff"}">${player.position}</span>
    <span class="pitch-sub-name" title="${player.name}">${player.name}</span>
    <span class="pitch-sub-ovr">${player.overall}</span>
  </div>`;
}

function pitchLineup(team, lineup, bench, formationName) {
  const formation = formationName || (lineup && lineup.formation) || "4-2-3-1";
  const slots = (lineup && lineup.slots) || FORMATIONS[formation] || FORMATIONS["4-2-3-1"];
  const coords = FORMATION_COORDS[formation] || FORMATION_COORDS["4-2-3-1"];
  const color = (team && team.color) || "#2e90ff";
  const players = coords.map((c, i) =>
    pitchPlayer(lineup ? lineup[i] : null, slots[i] || "", c[0], c[1], color)
  ).join("");
  const subs = (bench || []).filter(Boolean);
  return `
    <div class="pitch-wrap">
      <div class="pitch" style="--kit:${color};">
        ${pitchPitchLines()}
        ${players}
      </div>
      <div class="pitch-subs">
        <strong>Substitutes${subs.length ? ` (${subs.length})` : ""}</strong>
        <div class="pitch-subs-list">
          ${subs.length ? subs.map((p) => pitchSubRow(color, p)).join("") : `<span class="pitch-sub-empty">No substitutes</span>`}
        </div>
      </div>
    </div>
  `;
}

function formationOptions(selected) {
  return AVAILABLE_FORMATIONS.map((formation) => `<option value="${formation}" ${formation === selected ? "selected" : ""}>${formation}</option>`).join("");
}

function updateTeamFormation(teamId, formation) {
  const team = getTeam(teamId);
  if (!team || !FORMATIONS[formation]) return;
  team.preferredFormation = formation;
  render();
  saveGame("Formation saved");
}

function updateTeamAutoFormation(teamId, autoFormation) {
  const team = getTeam(teamId);
  if (!team) return;
  team.autoFormation = autoFormation;
  render();
  saveGame("Formation saved");
}

function liveMatchMarkup(live) {
  const item = getCalendarItemByTypeAndId(live.type, live.matchId);
  const home = getTeam(live.homeId);
  const away = getTeam(live.awayId);
  const homeEvents = live.plan.events.filter((event) => event.type === "goal" && event.minute <= live.minute && event.teamId === home.id).length;
  const awayEvents = live.plan.events.filter((event) => event.type === "goal" && event.minute <= live.minute && event.teamId === away.id).length;
  const homeScore = Math.min(homeEvents, live.plan.homeGoals);
  const awayScore = Math.min(awayEvents, live.plan.awayGoals);

  return `
    <article class="match-hero-card live">
      <div class="fixture-meta">${item ? item.competition : "Match"} - ${live.paused ? "Paused" : `Minute ${live.minute}`}</div>
      <div class="match-score">
        <span>${home.name}</span>
        <strong>${homeScore} - ${awayScore}</strong>
        <span>${away.name}</span>
      </div>
      <div class="match-clock">
        <span>${live.minute}'</span>
        <progress max="90" value="${live.minute}"></progress>
        <span>${live.speed}x</span>
      </div>
    </article>
    <div class="action-row">
      <button class="secondary-action" data-match-action="pause">Pause</button>
      <button class="secondary-action" data-match-action="resume">Resume</button>
      <button class="secondary-action" data-match-action="speed" data-speed="1">Speed 1x</button>
      <button class="secondary-action" data-match-action="speed" data-speed="2">Speed 2x</button>
      <button class="secondary-action" data-match-action="speed" data-speed="5">Speed 5x</button>
      <button class="primary-action" data-match-action="skip">Skip to End</button>
      <button class="danger-action" data-match-action="restart">Restart Match</button>
    </div>
  `;
}

function liveMatchDetailsMarkup(live) {
  const visibleEvents = live.plan.events.filter((event) => event.minute <= live.minute);
  return `
    <div class="summary-stats">
      ${summaryStat("Possession", live.plan.stats.possession)}
      ${summaryStat("Shots", live.plan.stats.shots)}
      ${summaryStat("Shots on Target", live.plan.stats.shotsOnTarget)}
      ${summaryStat("xG", live.plan.stats.xg)}
    </div>
    ${matchFeedMarkup(visibleEvents)}
  `;
}

function postMatchControlMarkup(match, next) {
  return `
    <article class="match-hero-card">
      <div class="fixture-meta">${match.competition || "Kings League"} - ${match.label || `Round ${match.round}`}</div>
      <div class="match-score">
        <span>${match.homeName}</span>
        <strong>${match.homeGoals} - ${match.awayGoals}</strong>
        <span>${match.awayName}</span>
      </div>
      <div class="status-strip">
        <span>POTM ${match.potm || "TBD"}</span>
        <span>${next ? `Next: ${next.competition}` : "Season schedule complete"}</span>
      </div>
    </article>
    <div class="action-row">
      <button class="primary-action" data-match-action="next-pre">Next Match</button>
      <button class="secondary-action" data-match-action="edit">Edit Result</button>
      <button class="danger-action" data-match-action="restart">Restart Match</button>
    </div>
  `;
}

function postMatchTabsMarkup(match) {
  const tab = state.matchCenter.selectedTab || "summary";
  const tabs = ["summary", "events", "stats", "lineups", "ratings", "impact", "info"];
  return `
    <div class="match-tabs">
      ${tabs.map((item) => `<button class="${tab === item ? "active" : ""}" data-match-tab="${item}">${formatStatus(item)}</button>`).join("")}
    </div>
    <div class="match-tab-body">${matchTabMarkup(match, tab)}</div>
  `;
}

function matchTabMarkup(match, tab) {
  if (tab === "feed" || tab === "events") return matchFeedMarkup(match.events);
  if (tab === "stats") return matchStatsMarkup(match);
  if (tab === "lineups") return matchLineupsMarkup(match);
  if (tab === "ratings") return matchRatingsMarkup(match);
  if (tab === "impact") return matchImpactMarkup(match);
  if (tab === "info") return matchInfoMarkup(match);
  if (tab === "edit") return editResultMarkup(match);
  return summaryMarkup(match);
}

function matchStatsMarkup(match) {
  if (!match.stats.detail) {
    return `
      ${manualAdjustmentMarkup(match)}
      <div class="summary-stats">
        ${summaryStat("Possession", match.stats.possession)}
        ${summaryStat("Shots", match.stats.shots)}
        ${summaryStat("Shots on Target", match.stats.shotsOnTarget)}
        ${summaryStat("Fouls", match.stats.fouls)}
        ${summaryStat("Yellow Cards", match.stats.yellowCards)}
        ${summaryStat("Red Cards", match.stats.redCards)}
      </div>
    `;
  }
  return `
    ${manualAdjustmentMarkup(match)}
    <div class="stat-compare-list">
      ${statCompareRow("Goals", match.stats.detail.home.goals, match.stats.detail.away.goals)}
      ${statCompareRow("Shots", match.stats.detail.home.shots, match.stats.detail.away.shots)}
      ${statCompareRow("Shots on Target", match.stats.detail.home.shotsOnTarget, match.stats.detail.away.shotsOnTarget)}
      ${statCompareRow("Possession", match.stats.detail.home.possession, match.stats.detail.away.possession, "%")}
      ${statCompareRow("Corners", match.stats.detail.home.corners, match.stats.detail.away.corners)}
      ${statCompareRow("Fouls", match.stats.detail.home.fouls, match.stats.detail.away.fouls)}
      ${statCompareRow("Offsides", match.stats.detail.home.offsides, match.stats.detail.away.offsides)}
      ${statCompareRow("Yellow Cards", match.stats.detail.home.yellowCards, match.stats.detail.away.yellowCards)}
      ${statCompareRow("Red Cards", match.stats.detail.home.redCards, match.stats.detail.away.redCards)}
      ${statCompareRow("xG", match.stats.detail.home.xg, match.stats.detail.away.xg)}
    </div>
  `;
}

function matchLineupsMarkup(match) {
  if (!match.lineups) return `<div class="empty-state">Lineups unavailable.</div>`;
  return `
    <div class="match-preview-grid">
      ${lineupCard(match.homeName, match.lineups.home, match.lineups.homeBench, match.lineups.homeFormation)}
      ${lineupCard(match.awayName, match.lineups.away, match.lineups.awayBench, match.lineups.awayFormation)}
    </div>
    ${match.substitutions ? reviewList("Substituted Players", match.substitutions.map((item) => `${item.minute}' ${item.teamName}: ${item.playerIn.name} replaced ${item.playerOut.name}`)) : ""}
  `;
}

function lineupCard(teamName, lineup, bench = [], formation = "4-2-3-1") {
  return `
    <article class="review-card">
      <h4>${teamName} - ${formation}</h4>
      <div class="mini-list">
        <strong>Starting XI</strong>
        ${lineup.map((player) => {
          const source = state.players.find((item) => item.id === player.id) || player;
          return `<span>${player.position} ${player.name} - OVR ${player.overall}${source.playerStyle ? ` - ${source.playerStyle}` : ""}${player.minutesPlayed !== undefined ? ` - ${player.minutesPlayed}'` : ""}</span>`;
        }).join("")}
      </div>
      <div class="mini-list">
        <strong>Bench</strong>
        ${(bench || []).slice(0, 9).map((player) => {
          const source = state.players.find((item) => item.id === player.id) || player;
          return `<span>${player.position} ${player.name} - OVR ${player.overall}${source.playerStyle ? ` - ${source.playerStyle}` : ""}${player.minutesPlayed !== undefined ? ` - ${player.minutesPlayed}'` : ""}</span>`;
        }).join("") || "<span>No bench listed</span>"}
      </div>
    </article>
  `;
}

function matchRatingsMarkup(match) {
  if (!match.playerRatings) return `<div class="empty-state">Ratings unavailable.</div>`;
  return `
    <div class="table-wrap">
      <table class="ratings-table">
        <thead><tr><th>#</th><th>Player</th><th>Team</th><th>Rating</th><th>Notes</th></tr></thead>
        <tbody>
          ${[...match.playerRatings].sort((a, b) => b.rating - a.rating).map((item, index) => {
        const goals = (match.goalScorers || []).filter((goal) => goal.playerId === item.playerId).length;
        const assists = (match.assists || []).filter((assist) => assist.playerId === item.playerId).length;
        const cards = (match.cards || []).filter((card) => card.playerId === item.playerId).map((card) => card.type === "redCards" ? "RC" : "YC").join(" ");
        const clean = isRatingCleanSheet(match, item) ? "CS" : "";
        return `<tr><td>${index + 1}</td><td><strong>${item.name}</strong></td><td>${getTeam(item.teamId).name}</td><td><strong>${item.rating}</strong></td><td>${goals ? `G${goals}` : ""} ${assists ? `A${assists}` : ""} ${cards} ${clean}</td></tr>`;
      }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function matchImpactMarkup(match) {
  if (match.competition === "Kings League") {
    return `
      <div class="table-wrap">
        <table>
          <thead><tr><th>#</th><th>Team</th><th>Pts</th><th>W</th><th>D</th><th>L</th><th>GD</th></tr></thead>
          <tbody>${getSortedTeams().map((team, index) => `<tr><td>${index + 1}</td><td>${teamCell(team)}</td><td>${team.table.points}</td><td>${team.table.wins}</td><td>${team.table.draws}</td><td>${team.table.losses}</td><td>${team.table.goalsFor - team.table.goalsAgainst}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    `;
  }
  if (match.competition === "Prince Cup") {
    const tie = findPrinceTieByLegId(match.matchId);
    return tie ? tieDetailMarkup(tie) : `<div class="empty-state">Cup aggregate unavailable.</div>`;
  }
  return `<div class="summary-stats">${summaryStat("Champion", state.jokerSupercup.championId ? getTeam(state.jokerSupercup.championId).name : "Not decided")}${summaryStat("Runner-up", state.jokerSupercup.runnerUpId ? getTeam(state.jokerSupercup.runnerUpId).name : "Not decided")}</div>`;
}

function matchInfoMarkup(match) {
  return `
    ${manualAdjustmentMarkup(match)}
    <div class="summary-stats">
      ${summaryStat("Competition", match.competition || "Kings League")}
      ${summaryStat("Stage", match.label || `Round ${match.round}`)}
      ${summaryStat("Home Team", match.homeName)}
      ${summaryStat("Away Team", match.awayName)}
      ${summaryStat("Venue", match.matchType === "supercup" ? "Neutral field" : `${match.homeName} home`)}
      ${summaryStat("Match ID", match.matchId || match.id)}
    </div>
  `;
}

function editResultMarkup(match) {
  return `
    <form class="edit-result-form" data-edit-result="true">
      <label>${match.homeName}<input name="homeGoals" type="number" min="0" max="20" value="${match.homeGoals}"></label>
      <label>${match.awayName}<input name="awayGoals" type="number" min="0" max="20" value="${match.awayGoals}"></label>
      <button class="primary-action" type="submit">Save Result</button>
      <button class="secondary-action" type="button" data-match-tab="summary">Cancel</button>
    </form>
  `;
}

function manualAdjustmentMarkup(match) {
  if (!match.manualAdjustment) return "";
  return `<article class="review-card manual-adjustment"><h4>Manual Adjustment</h4><p>${match.manualAdjustment.note}</p></article>`;
}

function isRatingCleanSheet(match, rating) {
  if (!match.lineups) return false;
  const homeClean = match.awayGoals === 0 && match.lineups.home.some((player) => player.id === rating.playerId && isCleanSheetEligible(player));
  const awayClean = match.homeGoals === 0 && match.lineups.away.some((player) => player.id === rating.playerId && isCleanSheetEligible(player));
  return homeClean || awayClean;
}

function handleMatchCenterAction(event) {
  const tabButton = event.target.closest("[data-match-tab]");
  if (tabButton) {
    state.matchCenter.selectedTab = tabButton.dataset.matchTab;
    renderMatchCenter();
    saveGame("Auto-saved");
    return;
  }

  const button = event.target.closest("[data-match-action]");
  if (!button) return;

  const action = button.dataset.matchAction;
  if (action === "start") startLiveMatch();
  if (action === "instant") simulateNextMatch();
  if (action === "calendar") showSection("calendar", "Calendar");
  if (action === "pause") setLivePaused(true);
  if (action === "resume") setLivePaused(false);
  if (action === "speed") setLiveSpeed(Number(button.dataset.speed));
  if (action === "skip") skipLiveMatchToEnd();
  if (action === "restart") restartMatchCenterMatch();
  if (action === "next-pre") {
    state.matchCenter.mode = "pre";
    state.matchCenter.selectedTab = "summary";
    render();
    saveGame("Auto-saved");
  }
  if (action === "edit") {
    state.matchCenter.selectedTab = "edit";
    renderMatchCenter();
  }
  if (action === "save-formation-default") {
    saveMatchFormationAsDefault(Number(button.dataset.teamId));
  }
  if (action === "best-auto-formation") {
    setBestAutoFormation(button.dataset.matchId, Number(button.dataset.teamId));
  }
  if (action === "reset-best-xi") {
    resetMatchBestXi(button.dataset.matchId, Number(button.dataset.teamId));
  }
  if (action === "toggle-lineup-editor") {
    toggleLineupEditor(button.dataset.matchId, Number(button.dataset.teamId));
  }
  if (action === "toggle-more-menu") {
    toggleMoreMenu(button.dataset.matchId, Number(button.dataset.teamId));
  }
  if (action === "autofill-lineup") {
    autofillManualLineup(button.dataset.matchId, Number(button.dataset.teamId));
  }
}

function handleMatchCenterChange(event) {
  const formation = event.target.closest("[data-match-formation]");
  if (formation) {
    changeMatchFormation(formation.dataset.matchFormation, Number(formation.dataset.teamId), formation.value);
    return;
  }

  const auto = event.target.closest("[data-match-auto-formation]");
  if (auto) {
    updateMatchFormationSetting(auto.dataset.matchAutoFormation, Number(auto.dataset.teamId), { autoFormation: auto.checked });
    return;
  }

  const autoLineup = event.target.closest("[data-match-auto-lineup]");
  if (autoLineup) {
    updateMatchFormationSetting(autoLineup.dataset.matchAutoLineup, Number(autoLineup.dataset.teamId), { autoLineup: autoLineup.checked });
    return;
  }

  const lineupSlot = event.target.closest("[data-lineup-slot]");
  if (lineupSlot) {
    updateManualLineupSlot(lineupSlot.dataset.matchId, Number(lineupSlot.dataset.teamId), Number(lineupSlot.dataset.lineupSlot), Number(lineupSlot.value), "startingXI");
    return;
  }

  const benchSlot = event.target.closest("[data-bench-slot]");
  if (benchSlot) {
    updateManualLineupSlot(benchSlot.dataset.matchId, Number(benchSlot.dataset.teamId), Number(benchSlot.dataset.benchSlot), Number(benchSlot.value) || null, "bench");
  }
}

function handleMatchEditSubmit(event) {
  if (!event.target.matches("[data-edit-result]")) return;
  event.preventDefault();
  const homeGoals = clamp(Number(event.target.elements.homeGoals.value), 0, 20);
  const awayGoals = clamp(Number(event.target.elements.awayGoals.value), 0, 20);
  editLastMatchResult(homeGoals, awayGoals);
}

function startLiveMatch() {
  const item = getNextScheduledItem();
  if (!item) return;
  if (!validateScheduledLineups(item)) return;

  state.matchCenter.mode = "live";
  state.matchCenter.live = createLiveMatchState(item);
  saveGame("Match started");
  render();
  startLiveMatchTimer();
}

function createLiveMatchState(item) {
  return {
    type: item.type,
    matchId: item.match.id,
    homeId: item.match.homeId,
    awayId: item.match.awayId,
    minute: 0,
    speed: 1,
    paused: false,
    finalized: false,
    plan: createPendingMatchPlan(item)
  };
}

function createPendingMatchPlan(item) {
  const home = getTeam(item.match.homeId);
  const away = getTeam(item.match.awayId);
  const homePrepared = getPreparedMatchLineup(item.match.id, home.id);
  const awayPrepared = getPreparedMatchLineup(item.match.id, away.id);
  const homeLineup = homePrepared.lineup;
  const awayLineup = awayPrepared.lineup;
  const homeBench = homePrepared.bench;
  const awayBench = awayPrepared.bench;
  const homeGoals = calculateGoalsFromLineups(home, away, homeLineup, awayLineup, item.type === "kings");
  const awayGoals = calculateGoalsFromLineups(away, home, awayLineup, homeLineup, false);
  const homePossession = clamp(48 + Math.round((home.midfield - away.midfield) / 4) + tacticPossessionBonus(home) - tacticPossessionBonus(away) + randomInt(-7, 7), 34, 66);
  const homeShots = clamp(homeGoals * 3 + randomInt(5, 13) + tacticShotBonus(home), 3, 25);
  const awayShots = clamp(awayGoals * 3 + randomInt(4, 12) + tacticShotBonus(away), 2, 24);
  const homeYellowCards = calculateCards(home, homeLineup, "yellow");
  const awayYellowCards = calculateCards(away, awayLineup, "yellow");
  const homeRedCards = calculateCards(home, homeLineup, "red");
  const awayRedCards = calculateCards(away, awayLineup, "red");
  const homeSubstitutions = createAutomaticSubstitutions({
    team: home,
    starters: homeLineup,
    bench: homeBench,
    goalsFor: homeGoals,
    goalsAgainst: awayGoals,
    yellowCards: homeYellowCards,
    redCards: homeRedCards
  });
  const awaySubstitutions = createAutomaticSubstitutions({
    team: away,
    starters: awayLineup,
    bench: awayBench,
    goalsFor: awayGoals,
    goalsAgainst: homeGoals,
    yellowCards: awayYellowCards,
    redCards: awayRedCards
  });
  const stats = createMatchStats(home, away, homeGoals, awayGoals, homeYellowCards, awayYellowCards, homeRedCards, awayRedCards);
  const events = createStructuredMatchEvents({
    home,
    away,
    homeLineup,
    awayLineup,
    homeSubstitutions,
    awaySubstitutions,
    homeGoals,
    awayGoals,
    homeYellowCards,
    awayYellowCards,
    homeRedCards,
    awayRedCards
  });
  return {
    homeGoals,
    awayGoals,
    stats,
    lineups: {
      homeFormation: homeLineup.formation,
      awayFormation: awayLineup.formation,
      home: homeLineup.map(playerSnapshot),
      away: awayLineup.map(playerSnapshot),
      homeBench: homeBench.map(playerSnapshot),
      awayBench: awayBench.map(playerSnapshot)
    },
    substitutions: [...homeSubstitutions, ...awaySubstitutions].map(substitutionSnapshot).sort((a, b) => a.minute - b.minute),
    events
  };
}

function createLiveEvents(home, away, homeGoals, awayGoals, substitutions = []) {
  const events = [];
  for (let index = 0; index < homeGoals; index += 1) {
    events.push({ minute: randomInt(4, 89), teamId: home.id, kind: "goal", text: `${home.name} goal` });
  }
  for (let index = 0; index < awayGoals; index += 1) {
    events.push({ minute: randomInt(4, 89), teamId: away.id, kind: "goal", text: `${away.name} goal` });
  }
  events.push({ minute: randomInt(10, 35), teamId: Math.random() > 0.5 ? home.id : away.id, kind: "moment", text: "Pressure builds in midfield" });
  events.push({ minute: randomInt(50, 80), teamId: Math.random() > 0.5 ? home.id : away.id, kind: "moment", text: "A big chance is saved" });
  substitutions.forEach((substitution) => {
    events.push({
      minute: substitution.minute,
      teamId: substitution.teamId,
      kind: "substitution",
      text: `${substitution.teamName} substitution: ${substitution.playerIn.name} replaces ${substitution.playerOut.name}`
    });
  });
  return events.sort((a, b) => a.minute - b.minute);
}

function startLiveMatchTimer() {
  stopLiveMatchTimer();
  const live = state.matchCenter.live;
  if (!live || state.matchCenter.mode !== "live") return;

  liveMatchTimer = setInterval(() => {
    const current = state.matchCenter.live;
    if (!current || current.paused) return;
    current.minute = Math.min(90, current.minute + 1);
    renderMatchCenter();
    if (current.minute >= 90) finalizeLiveMatch();
  }, Math.max(160, 900 / live.speed));
}

function stopLiveMatchTimer() {
  if (liveMatchTimer) {
    clearInterval(liveMatchTimer);
    liveMatchTimer = null;
  }
}

function setLivePaused(paused) {
  if (!state.matchCenter.live) return;
  state.matchCenter.live.paused = paused;
  renderMatchCenter();
  saveGame(paused ? "Match paused" : "Match resumed");
}

function setLiveSpeed(speed) {
  if (!state.matchCenter.live) return;
  state.matchCenter.live.speed = speed;
  renderMatchCenter();
  startLiveMatchTimer();
  saveGame(`Speed ${speed}x`);
}

function skipLiveMatchToEnd() {
  if (!state.matchCenter.live) return;
  state.matchCenter.live.minute = 90;
  finalizeLiveMatch();
}

function finalizeLiveMatch() {
  const live = state.matchCenter.live;
  if (!live || live.finalized) return;
  live.finalized = true;
  stopLiveMatchTimer();
  const item = getCalendarItemByTypeAndId(live.type, live.matchId);
  const summary = finalizeScheduledItem(item, { homeGoals: live.plan.homeGoals, awayGoals: live.plan.awayGoals });
  state.matchCenter.mode = "post";
  state.matchCenter.live = null;
  state.matchCenter.selectedTab = "summary";
  if (summary) state.lastMatch = summary;
  render();
  saveGame("Match finished");
}

function restartMatchCenterMatch() {
  if (state.matchCenter.mode === "live" && state.matchCenter.live) {
    state.matchCenter.live = createLiveMatchState(getCalendarItemByTypeAndId(state.matchCenter.live.type, state.matchCenter.live.matchId));
    render();
    startLiveMatchTimer();
    saveGame("Match restarted");
    return;
  }

  if (state.lastMatch && confirm("This match has already been finalized. Edit the saved result instead?")) {
    state.matchCenter.selectedTab = "edit";
    renderMatchCenter();
  }
}

function getBenchPlayers(teamId, lineup) {
  const starterIds = new Set(lineup.map((player) => player.id));
  const remaining = getTeamPlayers(teamId)
    .filter((player) => !starterIds.has(player.id))
    .sort((a, b) => b.overall - a.overall);
  const bench = [];
  const addBest = (predicate, count) => {
    remaining.filter((player) => predicate(player) && !bench.some((item) => item.id === player.id)).slice(0, count).forEach((player) => bench.push(player));
  };

  addBest((player) => player.position === "GK", 1);
  addBest((player) => ["CB", "RB", "LB"].includes(player.position), 2);
  addBest((player) => ["CDM", "CM", "CAM"].includes(player.position), 2);
  addBest((player) => ["LW", "RW", "ST"].includes(player.position), 2);
  remaining.forEach((player) => {
    if (bench.length < 9 && !bench.some((item) => item.id === player.id)) bench.push(player);
  });
  return bench.slice(0, 9);
}

function getLineupStrength(lineup) {
  return Math.round(average(lineup.filter(Boolean).map((player) => player.overall)));
}

function getChanceDistribution(home, away, neutral) {
  const homePower = home.overall + home.attack * 0.28 + home.midfield * 0.2 + home.defense * 0.17 + (neutral ? 0 : 3);
  const awayPower = away.overall + away.attack * 0.28 + away.midfield * 0.2 + away.defense * 0.17;
  const diff = homePower - awayPower;
  const draw = clamp(26 - Math.abs(diff) * 0.35, 14, 30);
  const homeWin = clamp((100 - draw) / 2 + diff * 1.15, 8, 82);
  const awayWin = clamp(100 - draw - homeWin, 8, 82);
  const total = homeWin + draw + awayWin;
  return { home: Math.round(homeWin / total * 100), draw: Math.round(draw / total * 100), away: Math.round(awayWin / total * 100) };
}

function getCalendarItemByTypeAndId(type, matchId) {
  return getCombinedCalendar().find((item) => item.type === type && item.match.id === matchId);
}

function findPrinceTieByLegId(legId) {
  for (const stage of state.princeCup.stages) {
    for (const tie of stage.ties) {
      if (tie.legs.some((leg) => leg.id === legId)) return tie;
    }
  }
  return null;
}

function editLastMatchResult(homeGoals, awayGoals) {
  const match = state.lastMatch;
  if (!match || !match.matchId) return;

  const oldResult = { homeGoals: match.homeGoals, awayGoals: match.awayGoals };
  match.homeGoals = homeGoals;
  match.awayGoals = awayGoals;
  match.manualAdjustment = createManualAdjustment(oldResult, { homeGoals, awayGoals });
  if (match.stats) {
    match.stats.shots = `${Math.max(homeGoals, randomInt(homeGoals + 4, homeGoals + 12))} - ${Math.max(awayGoals, randomInt(awayGoals + 4, awayGoals + 12))}`;
    match.stats.shotsOnTarget = `${Math.max(homeGoals, randomInt(homeGoals + 1, homeGoals + 5))} - ${Math.max(awayGoals, randomInt(awayGoals + 1, awayGoals + 5))}`;
  }

  const historyMatch = state.history.find((item) => item.id === match.id);
  if (historyMatch && historyMatch !== match) {
    historyMatch.homeGoals = homeGoals;
    historyMatch.awayGoals = awayGoals;
    historyMatch.stats = match.stats;
    historyMatch.manualAdjustment = match.manualAdjustment;
  }

  if (match.matchType === "kings") {
    const fixture = state.fixtures.flat().find((item) => item.id === match.matchId);
    if (fixture) fixture.result = { homeGoals, awayGoals };
    rebuildLeagueTableFromFixtures();
  }

  if (match.matchType === "prince") {
    const legInfo = findPrinceLegById(match.matchId);
    if (legInfo) {
      legInfo.leg.result = { homeGoals, awayGoals };
      rebuildPrinceCupAfterEditedLeg(match.matchId);
    }
  }

  if (match.matchType === "supercup") {
    const fixture = state.jokerSupercup.match;
    const penalties = homeGoals === awayGoals ? simulatePenalties(fixture.homeId, fixture.awayId) : null;
    fixture.result = { ...fixture.result, homeGoals, awayGoals, penalties };
    fixture.winnerId = homeGoals === awayGoals ? (penalties.teamAScore > penalties.teamBScore ? fixture.homeId : fixture.awayId) : homeGoals > awayGoals ? fixture.homeId : fixture.awayId;
    fixture.loserId = fixture.winnerId === fixture.homeId ? fixture.awayId : fixture.homeId;
    state.jokerSupercup.championId = fixture.winnerId;
    state.jokerSupercup.runnerUpId = fixture.loserId;
    match.penalties = penalties;
    match.winnerId = fixture.winnerId;
  }

  state.matchCenter.selectedTab = "summary";
  updateSeasonPhase();
  render();
  saveGame("Result edited");
}

function createManualAdjustment(oldResult, newResult) {
  return {
    resultEdited: true,
    oldResult,
    newResult,
    detailedEventsEdited: false,
    playerStatsRecalculated: false,
    note: "Result was manually edited. League table, calendar, and bracket impact were recalculated; detailed player events and player stat totals were not edited yet."
  };
}

function rebuildLeagueTableFromFixtures() {
  state.teams.forEach((team) => {
    team.table = blankTable();
  });

  state.fixtures.flat().filter((match) => match.played && match.result).forEach((match) => {
    applyTableResult(getTeam(match.homeId), getTeam(match.awayId), match.result.homeGoals, match.result.awayGoals);
  });
}

function rebuildPrinceCupAfterEditedLeg(legId) {
  const stageIndex = state.princeCup.stages.findIndex((stage) => stage.ties.some((tie) => tie.legs.some((leg) => leg.id === legId)));
  if (stageIndex === -1) return;

  state.princeCup.stages = state.princeCup.stages.slice(0, stageIndex + 1);
  state.princeCup.status = "active";
  state.princeCup.championId = null;
  state.princeCup.runnerUpId = null;

  const stage = state.princeCup.stages[stageIndex];
  state.princeCup.currentStage = stage.key;
  stage.ties.forEach((tie) => {
    tie.aggregate = { teamA: 0, teamB: 0 };
    tie.winnerId = null;
    tie.loserId = null;
    tie.penalties = null;
    if (tie.legs.every((leg) => leg.played && leg.result)) resolveTwoLegTie(tie);
  });

  if (stage.ties.every((tie) => tie.winnerId)) advancePrinceCup();
}

function renderMatchCenter() {
  const mode = state.matchCenter.mode || "pre";
  const live = state.matchCenter.live;
  if (elements.matchCenter) {
    elements.matchCenter.classList.toggle("pre-match-mode", mode !== "post");
    elements.matchCenter.classList.toggle("post-match-mode", mode === "post");
  }

  if (mode === "live" && live) {
    elements.matchControl.innerHTML = liveMatchMarkup(live);
    elements.matchSummary.innerHTML = liveMatchDetailsMarkup(live);
    elements.matchSummary.classList.remove("empty-state");
    renderMatchFeed();
    return;
  }

  const next = getNextScheduledItem();
  if (mode === "post" && state.lastMatch) {
    elements.matchControl.innerHTML = postMatchControlMarkup(state.lastMatch, next);
    elements.matchSummary.innerHTML = postMatchTabsMarkup(state.lastMatch);
    elements.matchSummary.classList.remove("empty-state");
    renderMatchFeed();
    return;
  }

  elements.matchControl.innerHTML = next ? preMatchMarkup(next) : `<div class="empty-state">All scheduled matches have been played.</div>`;
  elements.matchSummary.innerHTML = state.lastMatch ? postMatchTabsMarkup(state.lastMatch) : "No match simulated yet.";
  elements.matchSummary.classList.toggle("empty-state", !state.lastMatch);
  renderMatchFeed();
}

function renderMatchFeed() {
  if (!elements.matchFeed) return;
  const live = state.matchCenter.live;
  if (state.matchCenter.mode === "live" && live) {
    const events = live.plan.events.filter((event) => event.minute <= live.minute);
    elements.matchFeed.innerHTML = matchFeedMarkup(events);
    elements.matchFeed.classList.remove("empty-state");
    return;
  }
  if (state.lastMatch && state.lastMatch.events) {
    elements.matchFeed.innerHTML = matchFeedMarkup(state.lastMatch.events);
    elements.matchFeed.classList.remove("empty-state");
    return;
  }
  elements.matchFeed.innerHTML = "No match feed yet.";
  elements.matchFeed.classList.add("empty-state");
}

function renderPrinceCup() {
  const cup = state.princeCup;
  const champion = cup.championId ? getTeam(cup.championId).name : "Not decided";
  elements.princeStatus.innerHTML = `
    <div class="status-strip">
      <span>Status: ${formatStatus(cup.status)}</span>
      <span>Current stage: ${getStageLabel(cup.currentStage)}</span>
      <span>Champion: ${champion}</span>
    </div>
  `;

  elements.princeBracket.innerHTML = cup.stages.map((stage) => `
    <section class="bracket-stage">
      <h4>${stage.name}</h4>
      ${stage.ties.map(tieMarkup).join("")}
    </section>
  `).join("");

  elements.princeDetails.innerHTML = cup.stages.flatMap((stage) => stage.ties.map(tieDetailMarkup)).join("");
}

function renderSupercup() {
  maybeUnlockSupercup();
  const cup = state.jokerSupercup;

  if (cup.status === "locked") {
    elements.supercupStatus.innerHTML = `<div class="empty-state">Start the next season to generate the Joker Supercup opener.</div>`;
    elements.supercupFixture.innerHTML = "";
    elements.supercupTeams.innerHTML = "";
    return;
  }

  elements.supercupStatus.innerHTML = `
    <div class="status-strip">
      <span>Status: ${formatStatus(cup.status)}</span>
      <span>Champion: ${cup.championId ? getTeam(cup.championId).name : "Not decided"}</span>
    </div>
  `;
  elements.supercupFixture.innerHTML = fixtureMarkup(cup.match, "Joker Supercup");
  elements.supercupTeams.innerHTML = `
    <article class="fixture-card">
      <div class="fixture-meta">Kings League Champion</div>
      <strong>${getTeam(cup.match.homeId).name}</strong>
    </article>
    <article class="fixture-card">
      <div class="fixture-meta">${cup.match.awayRole || "Prince Cup Champion"}</div>
      <strong>${getTeam(cup.match.awayId).name}</strong>
    </article>
  `;
}

function renderSeasonReview() {
  const leagueChampion = getSortedTeams()[0];
  const cupChampion = state.princeCup.championId ? getTeam(state.princeCup.championId) : null;
  const supercupChampion = state.jokerSupercup.championId ? getTeam(state.jokerSupercup.championId) : null;
  const table = getSortedTeams();

  elements.seasonReviewContent.innerHTML = `
    <article class="review-card">
      <h4>Champions</h4>
      <ul>
        <li>Kings League: ${leagueChampion ? leagueChampion.name : "TBD"}</li>
        <li>Prince Cup: ${cupChampion ? cupChampion.name : "TBD"}</li>
        <li>Joker Supercup: ${supercupChampion ? supercupChampion.name : "TBD"}</li>
      </ul>
    </article>
    ${reviewList("Kings League Final Table", table.map((team, index) => `${index + 1}. ${team.name} - ${team.table.points} pts`))}
    ${reviewList("Top Scorers", getTopPlayers("goals").map((player) => playerStatLine(player, "goals")))}
    ${reviewList("Top Assists", getTopPlayers("assists").map((player) => playerStatLine(player, "assists")))}
    ${reviewList("Most Yellow Cards", getTopPlayers("yellowCards").map((player) => playerStatLine(player, "yellowCards")))}
    ${reviewList("Most Red Cards", getTopPlayers("redCards").map((player) => playerStatLine(player, "redCards")))}
    ${reviewList("Most Clean Sheets", getTopPlayers("cleanSheets").map((player) => playerStatLine(player, "cleanSheets")))}
    ${reviewList("Most POTM", getTopPlayers("potm").map((player) => playerStatLine(player, "potm")))}
    ${reviewList("Best Average Rating", getTopAverageRatings().map((player) => `${player.name} (${getTeam(player.teamId).name}) - ${getAverageRating(player).toFixed(2)}`))}
  `;
}

function renderTransferWindow() {
  const selectedId = elements.transferPlayer.value;
  elements.transferTeam.innerHTML = state.teams.map((team) => `<option value="${team.id}">${team.name}</option>`).join("");
  elements.transferPlayer.innerHTML = state.players.map((player) => `<option value="${player.id}">${player.name} - ${getTeam(player.teamId).name}</option>`).join("");
  if (selectedId && state.players.some((player) => player.id === Number(selectedId))) elements.transferPlayer.value = selectedId;
  if (!elements.transferPlayer.value && state.players[0]) elements.transferPlayer.value = state.players[0].id;
  loadSelectedPlayerIntoForm(false);
  elements.transferLog.innerHTML = state.transferLog.length
    ? state.transferLog.slice(0, 80).map((entry) => `
      <article class="history-card">
        <strong>${entry.type}</strong>
        <div class="history-meta">Season ${entry.seasonYear} - ${entry.text}</div>
      </article>
    `).join("")
    : `<div class="empty-state">No transfer activity yet.</div>`;
}

function renderSettings() {
  const settings = getSimulationSettings();
  Object.keys(DEFAULT_SIMULATION_SETTINGS).forEach((key) => {
    const field = elements[toCamelCase(`setting-${key}`)];
    const value = elements[toCamelCase(`setting-${key}-value`)];
    if (!field || !value) return;

    field.value = settings[key];
    value.textContent = `${SIMULATION_SETTING_LABELS[key]} ${settings[key]}${key === "injuryFrequency" ? " (saved)" : ""}`;
  });
}

function renderHistory() {
  const seasonRows = state.seasonHistory.map((season) => `
    <article class="history-card">
      <strong>Season ${season.seasonYear}</strong>
      <div class="history-meta">Kings League: ${season.champions.kingsLeague.teamName} - Prince Cup: ${season.champions.princeCup.teamName} - Joker Supercup: ${season.champions.jokerSupercup.teamName}</div>
    </article>
  `);
  const matchRows = state.history.slice(0, 60).map((match) => `
      <article class="history-card">
        <div class="fixture-score">
          <span>${match.homeName}</span>
          <strong>${match.homeGoals} - ${match.awayGoals}</strong>
          <span>${match.awayName}</span>
        </div>
        <div class="history-meta">${match.competition || "Kings League"} - ${match.label || `Round ${match.round}`} - POTM ${match.potm}</div>
      </article>
    `);
  elements.historyList.innerHTML = [...seasonRows, ...matchRows].length
    ? [...seasonRows, ...matchRows].join("")
    : `<div class="empty-state">No matches in history yet.</div>`;
}

function fixtureMarkup(match, competition = "Kings League") {
  const home = getTeam(match.homeId);
  const away = getTeam(match.awayId);
  const score = match.played ? `${match.result.homeGoals} - ${match.result.awayGoals}` : "vs";
  return `
    <article class="fixture-card ${match.played ? "played" : ""}">
      <div class="fixture-score">
        <span>${home.name}</span>
        <strong>${score}</strong>
        <span>${away.name}</span>
      </div>
      <div class="fixture-meta"><span class="competition-tag">${competition}</span> ${getFixtureMeta(match, competition)}</div>
      ${match.result && match.result.extraTime ? `<div class="fixture-meta">Extra time: ${match.result.extraTime.homeGoals} - ${match.result.extraTime.awayGoals}</div>` : ""}
      ${match.result && match.result.penalties ? `<div class="fixture-meta">Penalties: ${formatPenalties(match.result.penalties)}</div>` : ""}
    </article>
  `;
}

function tieMarkup(tie) {
  return `
    <article class="tie-card">
      <div class="tie-side">${tie.side}</div>
      <div class="tie-teams">
        <span>${seededTeamName(tie.teamAId)}</span>
        <strong>${tieAggregateText(tie)}</strong>
        <span>${seededTeamName(tie.teamBId)}</span>
      </div>
      <div class="fixture-meta">Qualified: ${tie.winnerId ? getTeam(tie.winnerId).name : "TBD"}</div>
      ${tie.penalties ? `<div class="fixture-meta">Penalties: ${formatPenalties(tie.penalties)}</div>` : ""}
    </article>
  `;
}

function tieDetailMarkup(tie) {
  return `
    <article class="fixture-card">
      <strong>${tie.label} - ${tie.side}</strong>
      ${tie.legs.map((leg) => fixtureMarkup(leg, "Prince Cup")).join("")}
      <div class="fixture-meta">Aggregate: ${tieAggregateText(tie)}</div>
      <div class="fixture-meta">Qualified: ${tie.winnerId ? getTeam(tie.winnerId).name : "TBD"}</div>
    </article>
  `;
}

function summaryMarkup(match) {
  return `
    ${manualAdjustmentMarkup(match)}
    <div class="match-score">
      <span>${match.homeName}</span>
      <strong>${match.homeGoals} - ${match.awayGoals}</strong>
      <span>${match.awayName}</span>
    </div>
    <div class="fixture-meta">${match.competition || "Kings League"} - ${match.label || `Round ${match.round}`}</div>
    <div class="summary-stats">
      ${summaryStat("Possession", match.stats.possession)}
      ${summaryStat("Shots", match.stats.shots)}
      ${summaryStat("Shots on Target", match.stats.shotsOnTarget)}
      ${summaryStat("Fouls", match.stats.fouls)}
      ${summaryStat("Yellow Cards", match.stats.yellowCards)}
      ${summaryStat("Red Cards", match.stats.redCards)}
      ${summaryStat("POTM", match.potm)}
      ${match.wentToExtraTime ? summaryStat("FT", `${match.regularTimeHomeGoals} - ${match.regularTimeAwayGoals}`) : ""}
      ${match.wentToExtraTime ? summaryStat("AET", `${match.homeGoals} - ${match.awayGoals}`) : ""}
      ${match.penaltyShootout ? summaryStat("Penalties", `${match.homeName} ${match.penaltyShootout.homePens} - ${match.penaltyShootout.awayPens} ${match.awayName}`) : match.penalties ? summaryStat("Penalties", formatPenalties(match.penalties)) : ""}
      ${match.winnerTeamId ? summaryStat("Winner", getTeam(match.winnerTeamId).name) : ""}
    </div>
    ${matchEventColumns(match)}
    ${match.lineups ? reviewList(`${match.homeName} Lineup`, match.lineups.home.map((player) => `${player.position} ${player.name} - ${player.overall}`)) : ""}
    ${match.lineups ? reviewList(`${match.awayName} Lineup`, match.lineups.away.map((player) => `${player.position} ${player.name} - ${player.overall}`)) : ""}
    ${match.playerRatings ? reviewList("Player Ratings", match.playerRatings.sort((a, b) => b.rating - a.rating).map((item) => `${item.name} (${getTeam(item.teamId).name}) - ${item.rating}`)) : ""}
  `;
}

function matchEventColumns(match) {
  const important = match.events.filter((event) => typeof event !== "string" && ["goal", "yellowCard", "redCard", "substitution"].includes(event.type));
  const homeEvents = important.filter((event) => event.teamId === match.homeId || event.teamId === match.homeTeamId);
  const awayEvents = important.filter((event) => event.teamId === match.awayId || event.teamId === match.awayTeamId);
  return `
    <div class="event-columns">
      <article class="review-card"><h4>${match.homeName}</h4>${eventColumnRows(homeEvents)}</article>
      <article class="review-card"><h4>${match.awayName}</h4>${eventColumnRows(awayEvents)}</article>
    </div>
  `;
}

function eventColumnRows(events) {
  return events.length
    ? events.map((event) => `<div class="event-row"><span>${event.minute}'</span><strong>${eventIcon(event.type)}</strong><span>${eventSummaryText(event)}</span></div>`).join("")
    : `<div class="empty-state">No major events.</div>`;
}

function eventIcon(type) {
  return { goal: "Goal", yellowCard: "Yellow", redCard: "Red", substitution: "Sub" }[type] || "Info";
}

function eventSummaryText(event) {
  if (event.type === "goal") {
    const scorer = getPlayerById(event.playerId);
    const assister = getPlayerById(event.assistPlayerId);
    return `${scorer ? scorer.name : "Unknown"}${assister ? ` - Assist: ${assister.name}` : ""}`;
  }
  if (event.type === "substitution") {
    const playerIn = getPlayerById(event.playerInId);
    const playerOut = getPlayerById(event.playerOutId);
    return `${playerIn ? playerIn.name : "Unknown"} in, ${playerOut ? playerOut.name : "Unknown"} out`;
  }
  const player = getPlayerById(event.playerId);
  return player ? player.name : "Unknown";
}

function eventText(event) {
  if (typeof event === "string") return event;
  return `${event.minute}' ${event.text || eventSummaryText(event)}`;
}

function matchFeedMarkup(events = []) {
  return `
    <ul class="event-feed">
      ${events.length ? events.map((event) => `<li>${eventText(event)}</li>`).join("") : "<li>0' Match kicked off.</li>"}
    </ul>
  `;
}

function statCompareRow(label, homeValue, awayValue, suffix = "") {
  const homeNumber = Number(homeValue) || 0;
  const awayNumber = Number(awayValue) || 0;
  const total = Math.max(homeNumber + awayNumber, 1);
  return `
    <div class="stat-compare-row">
      <span>${homeValue}${suffix}</span>
      <div>
        <strong>${label}</strong>
        <div class="compare-bar"><i style="width:${homeNumber / total * 100}%"></i><b style="width:${awayNumber / total * 100}%"></b></div>
      </div>
      <span>${awayValue}${suffix}</span>
    </div>
  `;
}

function summaryStat(label, value) {
  return `<div class="summary-stat"><span>${label}</span><strong>${value}</strong></div>`;
}

function reviewList(title, items) {
  const rows = items.length ? items.slice(0, 10).map((item) => `<li>${item}</li>`).join("") : "<li>No data yet</li>";
  return `<article class="review-card"><h4>${title}</h4><ol>${rows}</ol></article>`;
}

function getTopPlayers(statKey) {
  return [...state.players]
    .filter((player) => player.stats && player.stats[statKey] > 0)
    .sort((a, b) => b.stats[statKey] - a.stats[statKey] || b.overall - a.overall)
    .slice(0, 10);
}

function getTopAverageRatings() {
  return [...state.players]
    .filter((player) => player.stats && player.stats.ratingCount > 0)
    .sort((a, b) => getAverageRating(b) - getAverageRating(a))
    .slice(0, 10);
}

function getAverageRating(player) {
  return player.stats.ratingCount ? player.stats.ratingTotal / player.stats.ratingCount : 0;
}

function playerStatLine(player, statKey) {
  return `${player.name} (${getTeam(player.teamId).name}) - ${player.stats[statKey]}`;
}

function rankingRow(team, index, value) {
  return `
    <div class="ranking-row">
      <strong>${index + 1}</strong>
      <span>${team.name}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function getPlayersForStats(seasonValue, teamValue) {
  let players;
  if (seasonValue && seasonValue !== "current") {
    const season = state.seasonHistory.find((item) => String(item.seasonYear) === String(seasonValue));
    players = season ? season.playerStats : [];
  } else {
    players = state.players;
  }

  return players
    .map((player) => normalizePlayer({ ...player, stats: player.stats ? { ...player.stats } : blankPlayerStats() }))
    .filter((player) => teamValue === "all" || player.teamId === Number(teamValue));
}

function fillPlayerLeaderboard(container, players, competition, statKey) {
  const ranked = players
    .map((player) => ({ player, value: getPlayerStatValue(player, competition, statKey) }))
    .filter((entry) => entry.value > 0)
    .sort((a, b) => b.value - a.value || b.player.overall - a.player.overall)
    .slice(0, 10);

  container.innerHTML = ranked.length
    ? ranked.map((entry, index) => rankingRow({ name: `${entry.player.name} (${getTeam(entry.player.teamId).name})` }, index, statKey === "averageRating" ? entry.value.toFixed(2) : entry.value)).join("")
    : `<div class="empty-state">No data yet.</div>`;
}

function getPlayerStatValue(player, competition, statKey) {
  const stats = competition === "all" ? player.stats : (player.stats.byCompetition && player.stats.byCompetition[competition]) || blankFlatPlayerStats();
  if (statKey === "averageRating") return stats.ratingCount ? stats.ratingTotal / stats.ratingCount : 0;
  return stats[statKey] || 0;
}

function teamCell(team) {
  return `<span class="team-cell">${crest(team)} ${team.name}</span>`;
}

function crest(team) {
  return `<span class="crest" style="background:${team.color}">${team.short}</span>`;
}

function renderForm(form) {
  return `<span class="form">${form.length ? form.map((item) => `<span class="${item}">${item}</span>`).join("") : "-"}</span>`;
}

function showSection(sectionId, title) {
  elements.navItems.forEach((item) => item.classList.toggle("active", item.dataset.section === sectionId));
  elements.pages.forEach((page) => page.classList.toggle("active-page", page.id === sectionId));
  elements.pageTitle.textContent = title;
  if (elements.pageSubtitle) elements.pageSubtitle.textContent = PAGE_SUBTITLES[sectionId] || "Manage the season and keep the league moving.";
}

function updateCurrentRound() {
  const nextRoundIndex = state.fixtures.findIndex((round) => round.some((match) => !match.played));
  state.currentRound = nextRoundIndex === -1 ? 34 : nextRoundIndex + 1;
  state.selectedRound = state.currentRound;
}

function finishSeason() {
  if (!areAllCompetitionsFinished()) {
    alert("Finish Kings League, Prince Cup, and Joker Supercup before finishing the season.");
    return;
  }

  const finalTable = getSortedTeams().map((team, index) => ({
    position: index + 1,
    teamId: team.id,
    teamName: team.name,
    table: { ...team.table }
  }));
  const snapshot = {
    seasonYear: state.seasonYear,
    finishedAt: new Date().toISOString(),
    champions: {
      kingsLeague: finalTable[0],
      princeCup: championSnapshot(state.princeCup.championId),
      jokerSupercup: championSnapshot(state.jokerSupercup.championId)
    },
    finalTable,
    playerStats: state.players.map((player) => ({ ...player, stats: { ...player.stats } })),
    teamStats: state.teams.map((team) => ({ teamId: team.id, teamName: team.name, table: { ...team.table } }))
  };

  state.seasonHistory = state.seasonHistory.filter((item) => item.seasonYear !== state.seasonYear);
  state.seasonHistory.unshift(snapshot);
  state.previousSeasonStandings = finalTable.map((row) => ({
    position: row.position,
    teamId: row.teamId,
    teamName: row.teamName
  }));
  state.initialPrinceCupSeeding = state.previousSeasonStandings.map((row) => row.teamName);
  state.seasonPhase = "Transfer Window";
  logTransfer("Season Finished", `Season ${state.seasonYear} archived and transfer window opened.`);
  showSection("transfer-window", "Transfer Window");
  render();
  saveGame("Season finished");
}

function openTransferWindow() {
  state.seasonPhase = "Transfer Window";
  showSection("transfer-window", "Transfer Window");
  render();
  saveGame("Transfer window opened");
}

function startNextSeason() {
  if (state.seasonPhase !== "Transfer Window") {
    alert("Open or finish the season into the Transfer Window before starting next season.");
    return;
  }

  const lastCupRunnerUpId = state.princeCup.runnerUpId;
  state.seasonYear += 1;
  state.seasonPhase = "Joker Supercup";
  state.currentRound = 1;
  state.selectedRound = 1;
  state.teams.forEach((team) => {
    team.table = blankTable();
  });
  state.players.forEach((player) => {
    player.stats = blankPlayerStats();
  });
  state.fixtures = generateFixtures(state.teams);
  state.princeCup = createPrinceCupFromStandings(state.previousSeasonStandings);
  state.jokerSupercup = createNextSeasonSupercup(lastCupRunnerUpId);
  state.history = [];
  state.lastMatch = null;
  state.calendarFilter = "all";
  render();
  saveGame("Next season started");
}

function createPrinceCupFromStandings(standings) {
  const seeds = standings.map((row, index) => ({
    seed: index + 1,
    teamId: row.teamId,
    teamName: row.teamName
  }));

  return {
    status: "active",
    currentStage: "play_in",
    seeds,
    stages: [
      {
        key: "play_in",
        name: "Play-in",
        ties: [
          createTwoLegTie("PC-PI-1", "play_in", "Play-in", getSeedTeamId(15, seeds), getSeedTeamId(18, seeds), "Play-in", seeds),
          createTwoLegTie("PC-PI-2", "play_in", "Play-in", getSeedTeamId(16, seeds), getSeedTeamId(17, seeds), "Play-in", seeds)
        ]
      }
    ],
    championId: null,
    runnerUpId: null
  };
}

function createNextSeasonSupercup(cupRunnerUpId) {
  const lastSeason = state.seasonHistory[0];
  if (!lastSeason) return createBlankSupercup();

  const leagueChampionId = lastSeason.champions.kingsLeague.teamId;
  const cupChampionId = lastSeason.champions.princeCup.teamId;
  const opponentId = leagueChampionId === cupChampionId ? (cupRunnerUpId || cupChampionId) : cupChampionId;
  const opponentRole = leagueChampionId === cupChampionId ? "Prince Cup Runner-up" : "Prince Cup Champion";

  return createReadySupercup(state.seasonYear, leagueChampionId, opponentId, opponentRole);
}

function areAllCompetitionsFinished() {
  return isKingsLeagueComplete() && state.princeCup.status === "complete" && state.jokerSupercup.status === "complete";
}

function updateSeasonPhase() {
  if (state.seasonPhase === "Transfer Window") return;
  if (areAllCompetitionsFinished()) {
    state.seasonPhase = "Season Review";
    return;
  }

  const next = getNextScheduledItem();
  if (next && next.type === "supercup") {
    state.seasonPhase = "Joker Supercup";
  } else if (next && next.type === "prince") {
    state.seasonPhase = "Prince Cup";
  } else if (!isKingsLeagueComplete()) {
    state.seasonPhase = "Kings League";
  } else if (state.princeCup.status !== "complete") {
    state.seasonPhase = "Prince Cup";
  } else {
    state.seasonPhase = "Season Review";
  }
}

function championSnapshot(teamId) {
  const team = getTeam(teamId);
  return team ? { teamId: team.id, teamName: team.name } : null;
}

function loadSelectedPlayerIntoForm(shouldSave = false) {
  const player = getSelectedPlayer();
  if (!player) return;
  normalizePlayer(player);

  elements.transferTeam.value = player.teamId;
  elements.playerName.value = player.name;
  elements.playerNationality.value = player.nationality;
  elements.playerPosition.value = player.position;
  elements.playerStyle.value = player.playerStyle || "";
  elements.playerOverall.value = player.overall;
  ATTRIBUTE_KEYS.forEach((key) => {
    elements[toCamelCase(`player-${key}`)].value = player.attributes[key];
  });
  if (shouldSave) saveGame("Auto-saved");
}

function moveSelectedPlayer() {
  const player = getSelectedPlayer();
  if (!player) return;

  const oldTeam = getTeam(player.teamId).name;
  player.teamId = Number(elements.transferTeam.value);
  logTransfer("Move", `${player.name} moved from ${oldTeam} to ${getTeam(player.teamId).name}.`);
  render();
  saveGame("Transfer saved");
}

function addNewPlayer() {
  const teamId = Number(elements.transferTeam.value) || state.teams[0].id;
  const player = createPlayer({
    id: state.nextPlayerId,
    teamId,
    position: elements.playerPosition.value || "CM",
    baseRating: Number(elements.playerOverall.value) || 70,
    name: elements.playerName.value.trim() || `New Player ${state.nextPlayerId}`,
    nationality: elements.playerNationality.value.trim() || "Brazil"
  });

  state.nextPlayerId += 1;
  state.players.push(player);
  logTransfer("Add", `${player.name} joined ${getTeam(teamId).name}.`);
  render();
  elements.transferPlayer.value = player.id;
  loadSelectedPlayerIntoForm();
  saveGame("Player added");
}

function saveSelectedPlayerEdits() {
  const player = getSelectedPlayer();
  if (!player) return;
  normalizePlayer(player);

  const oldPosition = player.position;
  const oldOverall = player.overall;
  player.name = elements.playerName.value.trim() || player.name;
  player.nationality = elements.playerNationality.value.trim() || player.nationality;
  player.position = elements.playerPosition.value;
  const editedStyle = elements.playerStyle.value.trim();
  if (editedStyle && editedStyle !== player.playerStyle) {
    player.playerStyle = editedStyle;
    player.playerStyleMode = "manual";
  } else if (!editedStyle && player.playerStyleMode === "auto") {
    player.playerStyle = generatePlayerStyle(player);
  }
  player.overall = clamp(Number(elements.playerOverall.value) || player.overall, 1, 99);
  if (player.attributeMode === "auto" && (oldPosition !== player.position || oldOverall !== player.overall)) {
    player.attributes = createAttributesForPosition(player.position, player.overall);
  } else if (player.attributeMode === "manual") {
    player.attributes = player.attributes || createAttributesForPosition(player.position, player.overall);
    ATTRIBUTE_KEYS.forEach((key) => {
      player.attributes[key] = clamp(Number(elements[toCamelCase(`player-${key}`)].value) || player.attributes[key], 35, 99);
    });
  }
  logTransfer("Edit", `${player.name} was edited.`);
  render();
  saveGame("Player saved");
}

function regenerateSelectedPlayerAttributes() {
  const player = getSelectedPlayer();
  if (!player || !confirm(`Regenerate attributes for ${player.name} from position and overall?`)) return;

  player.attributes = createAttributesForPosition(player.position, player.overall);
  player.attributeMode = "auto";
  logTransfer("Attributes", `${player.name} attributes regenerated.`);
  render();
  saveGame("Attributes regenerated");
}

function setSelectedPlayerManual() {
  const player = getSelectedPlayer();
  if (!player) return;

  saveSelectedPlayerEdits();
  player.attributeMode = "manual";
  logTransfer("Attributes", `${player.name} set to manual attributes.`);
  render();
  saveGame("Manual attributes");
}

function setSelectedPlayerAuto() {
  const player = getSelectedPlayer();
  if (!player) return;

  player.attributeMode = "auto";
  logTransfer("Attributes", `${player.name} set to auto attributes.`);
  render();
  saveGame("Auto attributes");
}

function regenerateSelectedPlayerStyle() {
  const player = getSelectedPlayer();
  if (!player) return;

  if (player.playerStyleMode === "manual" && !confirm(`Overwrite manual playerStyle for ${player.name}?`)) return;

  player.playerStyle = generatePlayerStyle(player);
  player.playerStyleMode = "auto";
  logTransfer("Style", `${player.name} style regenerated as ${player.playerStyle}.`);
  render();
  saveGame("Player style regenerated");
}

function removeSelectedPlayer() {
  const player = getSelectedPlayer();
  if (!player || !confirm(`Remove ${player.name} from the league?`)) return;

  state.players = state.players.filter((item) => item.id !== player.id);
  logTransfer("Remove", `${player.name} was removed from the league.`);
  render();
  saveGame("Player removed");
}

function logTransfer(type, text) {
  state.transferLog.unshift({
    id: `${Date.now()}-${randomInt(100, 999)}`,
    seasonYear: state.seasonYear,
    type,
    text
  });
}

function getSelectedPlayer() {
  return state.players.find((player) => player.id === Number(elements.transferPlayer.value));
}

function getSimulationSettings() {
  if (!state.simulationSettings) state.simulationSettings = { ...DEFAULT_SIMULATION_SETTINGS };
  state.simulationSettings = normalizeSimulationSettings(state.simulationSettings);
  return state.simulationSettings;
}

function getMatchFormationSettings(matchId, teamId) {
  state.matchCenter = state.matchCenter || { mode: "pre", selectedTab: "summary", live: null };
  state.matchCenter.formationOverrides = state.matchCenter.formationOverrides || {};
  const team = getTeam(teamId);
  const override = state.matchCenter.formationOverrides[matchId] && state.matchCenter.formationOverrides[matchId][teamId];
  const preferredFormation = override && override.preferredFormation ? override.preferredFormation : team.preferredFormation;
  const defaultLineup = !override && team.defaultLineup && team.defaultLineup.formation === preferredFormation ? team.defaultLineup : null;
  return {
    preferredFormation: FORMATIONS[preferredFormation] ? preferredFormation : "4-2-3-1",
    autoFormation: override && override.autoFormation !== undefined ? override.autoFormation : team.autoFormation,
    autoLineup: override && override.autoLineup !== undefined ? override.autoLineup : !defaultLineup,
    editorOpen: override && override.editorOpen === true,
    moreOpen: override && override.moreOpen === true,
    startingXI: override && Array.isArray(override.startingXI) ? override.startingXI : defaultLineup ? defaultLineup.startingXI : null,
    bench: override && Array.isArray(override.bench) ? override.bench : defaultLineup ? defaultLineup.bench : null
  };
}

function updateMatchFormationSetting(matchId, teamId, patch) {
  state.matchCenter.formationOverrides = state.matchCenter.formationOverrides || {};
  state.matchCenter.formationOverrides[matchId] = state.matchCenter.formationOverrides[matchId] || {};
  const current = getMatchFormationSettings(matchId, teamId);
  state.matchCenter.formationOverrides[matchId][teamId] = { ...current, ...patch };
  syncMatchLineupSelection(matchId, teamId);
  renderMatchCenter();
  saveGame("Match formation updated");
}

function syncMatchLineupSelection(matchId, teamId) {
  const match = getMatchById(matchId);
  if (!match) return;
  const settings = getMatchFormationSettings(matchId, teamId);
  const prepared = getPreparedMatchLineup(matchId, teamId);
  match.lineupSelections = match.lineupSelections || {};
  match.lineupSelections[teamId] = {
    selectedFormation: prepared.lineup.formation || settings.preferredFormation,
    autoLineup: settings.autoLineup,
    startingXI: settings.startingXI || prepared.lineup.filter(Boolean).map((player) => player.id),
    bench: settings.bench || prepared.bench.filter(Boolean).map((player) => player.id)
  };
}

function changeMatchFormation(matchId, teamId, formation) {
  if (!FORMATIONS[formation]) return;
  const current = getMatchFormationSettings(matchId, teamId);
  if (hasManualMatchLineup(matchId, teamId) && !confirm("Changing formation will reset the manual lineup. Continue?")) {
    renderMatchCenter();
    return;
  }
  updateMatchFormationSetting(matchId, teamId, {
    preferredFormation: formation,
    autoFormation: false,
    autoLineup: true,
    startingXI: null,
    bench: null
  });
}

function hasManualMatchLineup(matchId, teamId) {
  const override = state.matchCenter.formationOverrides && state.matchCenter.formationOverrides[matchId] && state.matchCenter.formationOverrides[matchId][teamId];
  return Boolean(override && override.autoLineup === false && Array.isArray(override.startingXI));
}

function setBestAutoFormation(matchId, teamId) {
  const formation = chooseBestFormation(teamId, getTeam(teamId).preferredFormation);
  updateMatchFormationSetting(matchId, teamId, {
    preferredFormation: formation,
    autoFormation: true,
    autoLineup: true,
    startingXI: null,
    bench: null
  });
}

function resetMatchBestXi(matchId, teamId) {
  const settings = getMatchFormationSettings(matchId, teamId);
  updateMatchFormationSetting(matchId, teamId, {
    preferredFormation: settings.preferredFormation,
    autoFormation: false,
    autoLineup: true,
    startingXI: null,
    bench: null
  });
}

function toggleLineupEditor(matchId, teamId) {
  const settings = getMatchFormationSettings(matchId, teamId);
  updateMatchFormationSetting(matchId, teamId, { editorOpen: !settings.editorOpen });
}

function toggleMoreMenu(matchId, teamId) {
  const settings = getMatchFormationSettings(matchId, teamId);
  updateMatchFormationSetting(matchId, teamId, { moreOpen: !settings.moreOpen });
}

function autofillManualLineup(matchId, teamId) {
  const manual = ensureManualLineupState(matchId, teamId);
  const settings = getMatchFormationSettings(matchId, teamId);
  const formation = settings.preferredFormation;
  const slots = FORMATIONS[formation] || FORMATIONS["4-2-3-1"];
  const selectedIds = new Set([...manual.startingXI, ...manual.bench].filter(Boolean));
  const available = getTeamPlayers(teamId).filter((player) => !selectedIds.has(player.id));

  slots.forEach((slot, index) => {
    if (manual.startingXI[index]) return;
    const player = findBestPlayerForPosition(available, [], slot);
    if (!player) return;
    manual.startingXI[index] = player.id;
    selectedIds.add(player.id);
    const removeIndex = available.findIndex((item) => item.id === player.id);
    if (removeIndex !== -1) available.splice(removeIndex, 1);
  });

  available.sort((a, b) => b.overall - a.overall).forEach((player) => {
    const emptyIndex = manual.bench.findIndex((id) => !id);
    if (emptyIndex !== -1 && manual.bench.length <= 9) manual.bench[emptyIndex] = player.id;
    else if (manual.bench.length < 9) manual.bench.push(player.id);
  });

  updateMatchFormationSetting(matchId, teamId, {
    autoLineup: false,
    startingXI: manual.startingXI.slice(0, 11),
    bench: manual.bench.slice(0, 9)
  });
}

function updateManualLineupSlot(matchId, teamId, slotIndex, playerId, listKey) {
  const manual = ensureManualLineupState(matchId, teamId);
  const currentValue = manual[listKey] ? manual[listKey][slotIndex] : null;
  if (playerId) {
    manual.startingXI = manual.startingXI.map((id) => id === playerId ? currentValue || null : id);
    manual.bench = manual.bench.map((id) => id === playerId ? currentValue || null : id);
  }
  const list = [...(manual[listKey] || [])];
  list[slotIndex] = playerId || null;
  manual[listKey] = list;
  updateMatchFormationSetting(matchId, teamId, {
    autoLineup: false,
    startingXI: manual.startingXI,
    bench: manual.bench
  });
}

function ensureManualLineupState(matchId, teamId) {
  const settings = getMatchFormationSettings(matchId, teamId);
  if (settings.autoLineup === false && settings.startingXI) {
    return {
      startingXI: [...settings.startingXI],
      bench: [...(settings.bench || [])]
    };
  }
  const prepared = getPreparedMatchLineup(matchId, teamId);
  return {
    startingXI: prepared.lineup.map((player) => player.id),
    bench: prepared.bench.map((player) => player.id)
  };
}

function resetMatchAutoLineup(matchId, teamId) {
  updateMatchFormationSetting(matchId, teamId, { autoLineup: true, startingXI: null, bench: null });
}

function saveMatchFormationAsDefault(teamId) {
  const next = getNextScheduledItem();
  const team = getTeam(teamId);
  if (!next || !team) return;

  const settings = getMatchFormationSettings(next.match.id, teamId);
  const prepared = getPreparedMatchLineup(next.match.id, teamId);
  if (!prepared.validation.valid) {
    alert(`Fix ${team.name}'s lineup before saving it as default.`);
    return;
  }
  if (!confirm(`Save ${team.name}'s current formation and lineup as default?`)) return;
  team.preferredFormation = settings.preferredFormation;
  team.autoFormation = false;
  team.defaultLineup = {
    formation: prepared.lineup.formation,
    startingXI: prepared.lineup.filter(Boolean).map((player) => player.id),
    bench: prepared.bench.filter(Boolean).slice(0, 9).map((player) => player.id)
  };
  render();
  saveGame("Team default saved");
}

function normalizeSimulationSettings(settings = {}) {
  return Object.keys(DEFAULT_SIMULATION_SETTINGS).reduce((normalized, key) => {
    const value = Number(settings[key]);
    normalized[key] = clamp(Number.isFinite(value) ? value : DEFAULT_SIMULATION_SETTINGS[key], 0, 200);
    return normalized;
  }, {});
}

function settingScale(key) {
  return getSimulationSettings()[key] / 100;
}

function updateSimulationSetting(key, value) {
  state.simulationSettings = getSimulationSettings();
  const numeric = Number(value);
  state.simulationSettings[key] = clamp(Number.isFinite(numeric) ? numeric : DEFAULT_SIMULATION_SETTINGS[key], 0, 200);
  renderSettings();
  saveGame("Simulation settings saved");
}

function getCombinedCalendar() {
  const kings = state.fixtures.flat().map((match) => ({ type: "kings", competition: "Kings League", match }));
  const prince = getPrinceLegs().map((match) => ({ type: "prince", competition: "Prince Cup", match }));
  const supercup = state.jokerSupercup.match ? [{ type: "supercup", competition: "Joker Supercup", match: state.jokerSupercup.match }] : [];
  return [...supercup, ...kings, ...prince]
    .map((item) => ({ ...item, sortOrder: getCalendarSortOrder(item) }))
    .sort((a, b) => a.sortOrder - b.sortOrder || itemIdSort(a.match.id, b.match.id));
}

function getCalendarSortOrder(item) {
  if (item.type === "supercup") return 0;
  if (item.type === "kings") return item.match.round * 10;

  const stageRound = {
    play_in: 2,
    round_of_16: 6,
    quarter_final: 12,
    semi_final: 20,
    final: 30
  };
  const anchorRound = stageRound[item.match.stage] || 30;
  return (anchorRound + item.match.legNumber - 1) * 10 + 5;
}

function itemIdSort(a, b) {
  return String(a).localeCompare(String(b), undefined, { numeric: true });
}

function getFixtureMeta(match, competition) {
  if (competition === "Kings League") return `Round ${match.round} - ${match.played ? "Played" : "Pending"}`;
  if (competition === "Prince Cup") return `${match.label} - Leg ${match.legNumber} - ${match.played ? "Played" : "Pending"}`;
  return `${match.label} - Neutral field - ${match.played ? "Played" : "Pending"}`;
}

function getNextPrinceLeg() {
  const leg = getPrinceLegs()
    .filter((item) => !item.played)
    .sort((a, b) => getCalendarSortOrder({ type: "prince", match: a }) - getCalendarSortOrder({ type: "prince", match: b }) || itemIdSort(a.id, b.id))[0];

  return leg ? findPrinceLegById(leg.id) : null;
}

function getPrinceLegs() {
  return state.princeCup.stages.flatMap((stage) => stage.ties.flatMap((tie) => tie.legs));
}

function findPrinceLegById(legId) {
  for (const stage of state.princeCup.stages) {
    for (const tie of stage.ties) {
      const leg = tie.legs.find((item) => item.id === legId);
      if (leg) return { tie, leg };
    }
  }
  return null;
}

function getStage(key) {
  return state.princeCup.stages.find((stage) => stage.key === key);
}

function getStageLabel(key) {
  const stage = PRINCE_STAGES.find((item) => item.key === key);
  return stage ? stage.name : "Not started";
}

function tieAggregateText(tie) {
  if (!tie.legs.some((leg) => leg.played)) return "0 - 0";
  const aggregate = tie.legs.reduce((total, leg) => {
    if (!leg.played) return total;
    const homeIsA = leg.homeId === tie.teamAId;
    total.teamA += homeIsA ? leg.result.homeGoals : leg.result.awayGoals;
    total.teamB += homeIsA ? leg.result.awayGoals : leg.result.homeGoals;
    return total;
  }, { teamA: 0, teamB: 0 });
  return `${aggregate.teamA} - ${aggregate.teamB}`;
}

function getNextUnplayedMatch() {
  const next = getNextScheduledItem();
  return next ? next.match : null;
}

function getNextScheduledItem() {
  return getCombinedCalendar().find((item) => !item.match.played);
}

function getMatchById(matchId) {
  if (state.jokerSupercup.match && state.jokerSupercup.match.id === matchId) return state.jokerSupercup.match;
  const leagueMatch = state.fixtures.flat().find((match) => match.id === matchId);
  if (leagueMatch) return leagueMatch;
  return getPrinceLegs().find((leg) => leg.id === matchId) || null;
}

function getTeam(id) {
  return state.teams.find((team) => team.id === id);
}

function getTeamPlayers(teamId) {
  return state.players.filter((player) => player.teamId === teamId);
}

function getPlayerById(playerId) {
  return state.players.find((player) => player.id === playerId);
}

function getTeamIdByName(name) {
  return TEAM_DATABASE.find((team) => team.name === name).id;
}

function getSeedTeamId(seed, seeds = state.princeCup.seeds) {
  return seeds.find((item) => item.seed === seed).teamId;
}

function getSeed(teamId) {
  return getSeedFromSeedList(teamId, state.princeCup.seeds);
}

function getSeedFromSeedList(teamId, seeds) {
  const seeded = seeds.find((item) => item.teamId === teamId);
  return seeded ? seeded.seed : 99;
}

function seededTeamName(teamId) {
  return `${getTeam(teamId).name} (${getSeed(teamId)})`;
}

function isKingsLeagueComplete() {
  return state.fixtures.flat().every((match) => match.played);
}

function formatPenalties(penalties) {
  return `${getTeam(penalties.teamAId).short} ${penalties.teamAScore} - ${penalties.teamBScore} ${getTeam(penalties.teamBId).short}`;
}

function formatStatus(status) {
  return status.replace("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getSortedTeams() {
  return [...state.teams].sort((a, b) => {
    const gdA = a.table.goalsFor - a.table.goalsAgainst;
    const gdB = b.table.goalsFor - b.table.goalsAgainst;
    return b.table.points - a.table.points
      || gdB - gdA
      || b.table.goalsFor - a.table.goalsFor
      || b.overall - a.overall
      || a.name.localeCompare(b.name);
  });
}

function saveGame(message) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  OLD_SAVE_KEYS.forEach((key) => localStorage.removeItem(key));
  elements.saveStatus.textContent = message;
  setTimeout(() => {
    elements.saveStatus.textContent = "Auto-saved";
  }, 1300);
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const save = JSON.parse(raw);
    return isOfficialTeamSave(save) ? normalizeSave(save) : null;
  } catch (error) {
    return null;
  }
}

function normalizeSave(save) {
  save.version = 3;
  save.seasonYear = save.seasonYear || 1;
  save.seasonPhase = save.seasonPhase || "Joker Supercup";
  save.calendarFilter = save.calendarFilter || "all";
  save.simulationSettings = normalizeSimulationSettings(save.simulationSettings);
  save.matchCenter = save.matchCenter || { mode: "pre", selectedTab: "summary", live: null };
  save.matchCenter.formationOverrides = save.matchCenter.formationOverrides || {};
  save.matchCenter.mode = save.matchCenter.mode || "pre";
  save.matchCenter.selectedTab = save.matchCenter.selectedTab || "summary";
  if (save.matchCenter.selectedTab === "events") save.matchCenter.selectedTab = "feed";
  if (save.matchCenter.mode === "live") save.matchCenter.live = null;
  save.players = save.players && save.players.length ? save.players : generateInitialPlayers(save.teams);
  save.players.forEach((player) => {
    normalizePlayer(player);
  });
  save.nextPlayerId = Math.max(save.nextPlayerId || 1, Math.max(...save.players.map((player) => player.id)) + 1);
  save.realPlayerBatchesApplied = save.realPlayerBatchesApplied || [];
  applyRealPlayerBatch(save, "batch1", playersBatch1);
  applyRealPlayerBatch(save, "batch2", playersBatch2);
  applyRealPlayerBatch(save, "batch3", playersBatch3);
  applyRealPlayerBatch(save, "batch4", playersBatch4);
  applyRealPlayerBatch(save, "batch5", playersBatch5);
  applyManualPlayerPatches(save);
  applyManualPlayerStylePatches(save);
  refreshAutoPlayerStyles(save);
  save.transferLog = save.transferLog || [];
  save.teams.forEach((team) => {
    team.preferredFormation = FORMATIONS[team.preferredFormation] ? team.preferredFormation : "4-2-3-1";
    team.autoFormation = team.autoFormation !== false;
  });
  save.seasonHistory = save.seasonHistory || [];
  save.previousSeasonStandings = save.previousSeasonStandings || initialPrinceCupSeeding.map((teamName, index) => ({
    position: index + 1,
    teamId: getTeamIdByName(teamName),
    teamName
  }));
  save.initialPrinceCupSeeding = save.initialPrinceCupSeeding || initialPrinceCupSeeding;
  save.princeCup = save.princeCup || createPrinceCup();
  save.jokerSupercup = save.jokerSupercup || createInitialSupercup();
  const princeHasPlayed = save.princeCup.stages.flatMap((stage) => stage.ties.flatMap((tie) => tie.legs)).some((leg) => leg.played);
  if (save.seasonYear === 1 && !princeHasPlayed && !save.seasonHistory.length) {
    save.initialPrinceCupSeeding = initialPrinceCupSeeding;
    save.previousSeasonStandings = initialPrinceCupSeeding.map((teamName, index) => ({
      position: index + 1,
      teamId: getTeamIdByName(teamName),
      teamName
    }));
    save.princeCup = createPrinceCup();
    if (save.jokerSupercup.status === "locked") save.jokerSupercup = createInitialSupercup();
  }
  if (save.jokerSupercup.match && !save.jokerSupercup.match.awayRole) save.jokerSupercup.match.awayRole = "Prince Cup Champion";
  save.fixtures.flat().forEach((match) => {
    match.id = match.id.startsWith("KL-") ? match.id : `KL-${match.id}`;
  });
  return save;
}

function normalizePlayer(player) {
  if (!PLAYER_POSITIONS.includes(player.position)) {
    if (player.position === "DEF") player.position = "CB";
    else if (player.position === "MID") player.position = "CM";
    else if (player.position === "ATK") player.position = "ST";
    else player.position = "CM";
  }
  if (!player.attributes) {
    player.attributes = createAttributesForPosition(player.position, player.overall || 70);
    if (player.goalkeeper) player.attributes.goalkeeping = player.goalkeeper;
    if (player.defense) player.attributes.defending = player.defense;
    if (player.midfield) player.attributes.passing = player.midfield;
    if (player.attack) {
      player.attributes.attacking = player.attack;
      player.attributes.finishing = player.attack;
    }
  }
  player.playerStyle = player.playerStyle || "";
  if (player.playerStyleMode !== "manual") {
    player.playerStyleMode = "auto";
  }
  if ((!player.playerStyle || player.playerStyleMode === "auto") && player.playerStyleMode !== "manual") {
    player.playerStyle = generatePlayerStyle(player);
  }
  player.attributeMode = player.attributeMode || "auto";
  ATTRIBUTE_KEYS.forEach((key) => {
    if (player.attributes[key] === undefined && player.attributeMode === "auto") {
      player.attributes[key] = createAttributesForPosition(player.position, player.overall || 70)[key];
    }
    player.attributes[key] = clamp(Number(player.attributes[key]) || player.overall || 70, 35, 99);
  });
  ensurePlayerStats(player);
  return player;
}

function generatePlayerStyle(player) {
  const attrs = player.attributes || createAttributesForPosition(player.position, player.overall || 70);
  if (player.position === "GK") {
    if (attrs.passing >= 78) return "Sweeper Keeper";
    if (attrs.penalties >= 80 && attrs.discipline >= 80) return "Penalty Specialist";
    return "Shot Stopper";
  }
  if (player.position === "CB") {
    if (attrs.passing >= 78) return "Ball Playing Defender";
    if (attrs.heading >= 78 && attrs.jumping >= 78 && attrs.strength >= 78) return "Aerial Defender";
    if (attrs.defending >= 78 && attrs.strength >= 78) return "Destroyer";
    return "Stopper";
  }
  if (["RB", "LB"].includes(player.position)) {
    if (attrs.pace >= 78 && attrs.crossing >= 76 && attrs.stamina >= 78) return "Wingback";
    if (attrs.defending >= 78 && attrs.attacking < 74 && attrs.crossing < 74) return "Defensive Fullback";
    if (attrs.passing >= 76 && attrs.dribbling >= 76) return "Inverted Fullback";
    return "Fullback";
  }
  if (player.position === "CDM") {
    if (attrs.passing >= 80) return "Deep Playmaker";
    if (attrs.defending >= 78 && attrs.strength >= 78) return "Ball Winner";
    if (attrs.defending >= 78 && attrs.discipline >= 78) return "Anchor Man";
    return "Ball Winner";
  }
  if (player.position === "CM") {
    if (attrs.passing >= 80) return "Playmaker";
    if (attrs.stamina >= 78 && attrs.attacking >= 74 && attrs.defending >= 74) return "Box-to-Box";
    if (attrs.stamina >= 84) return "Engine";
    return "Balanced Midfielder";
  }
  if (player.position === "CAM") {
    if (attrs.passing >= 86) return "Playmaker";
    if (attrs.passing >= 80 && attrs.attacking >= 80) return "Creator";
    if (attrs.finishing >= 80) return "Shadow Striker";
    if (attrs.dribbling >= 82) return "Dribbler";
    return "Creator";
  }
  if (["LW", "RW"].includes(player.position)) {
    if (attrs.finishing >= 78 && attrs.attacking >= 78 && attrs.dribbling >= 78) return "Inside Forward";
    if (attrs.crossing >= 78 && attrs.pace >= 78) return "Winger";
    if (attrs.passing >= 78 && attrs.crossing >= 78) return "Playmaking Winger";
    if (attrs.pace >= 86) return "Speed Winger";
    return "Winger";
  }
  if (player.position === "ST") {
    if (attrs.finishing >= 86 && attrs.passing < 78) return "Poacher";
    if (attrs.finishing >= 80 && attrs.passing >= 78 && attrs.dribbling >= 78) return "Complete Forward";
    if (attrs.heading >= 80 && attrs.strength >= 80) return "Target Man";
    if (attrs.pace >= 82 && attrs.dribbling >= 80) return "Speed Striker";
    if (attrs.passing >= 78) return "Deep-Lying Forward";
    return "Poacher";
  }
  return "";
}

function applyRealPlayerBatch(save, batchId, batchPlayers) {
  save.realPlayerBatchesApplied = save.realPlayerBatchesApplied || [];
  if (save.realPlayerBatchesApplied.includes(batchId)) return;

  const batchTeamIds = [...new Set(batchPlayers.map((player) => getTeamIdFromBatchSlug(player.teamId)))];
  save.players = save.players.filter((player) => !batchTeamIds.includes(player.teamId));
  save.nextPlayerId = save.nextPlayerId || (save.players.length ? Math.max(...save.players.map((player) => player.id)) + 1 : 1);

  batchPlayers.forEach((batchPlayer) => {
    const player = createPlayer({
      id: save.nextPlayerId,
      teamId: getTeamIdFromBatchSlug(batchPlayer.teamId),
      position: batchPlayer.position,
      overall: batchPlayer.overall,
      baseRating: batchPlayer.overall,
      name: batchPlayer.name,
      nationality: batchPlayer.nationality,
      attributes: batchPlayer.attributes,
      attributeMode: batchPlayer.attributeMode,
      playerStyle: batchPlayer.playerStyle
    });
    save.nextPlayerId += 1;
    save.players.push(player);
  });

  save.realPlayerBatchesApplied.push(batchId);
}

function applyManualPlayerPatches(save) {
  save.manualPlayerPatchesApplied = save.manualPlayerPatchesApplied || [];
  manualPlayerPatches.forEach((patch) => {
    if (save.manualPlayerPatchesApplied.includes(patch.patchId)) return;

    const teamId = getTeamIdFromBatchSlug(patch.teamId);
    const player = save.players.find((item) => item.name === patch.name && item.teamId === teamId);
    if (!player) return;

    player.position = patch.position;
    player.overall = patch.overall;
    player.playerStyle = patch.playerStyle;
    player.playerStyleMode = "manual";
    player.attributeMode = patch.attributeMode;
    player.attributes = { ...patch.attributes };
    normalizePlayer(player);
    save.manualPlayerPatchesApplied.push(patch.patchId);
  });
}

function applyManualPlayerStylePatches(save) {
  save.manualPlayerStylePatchesApplied = save.manualPlayerStylePatchesApplied || [];
  const patchId = "important-player-styles-v1";
  if (save.manualPlayerStylePatchesApplied.includes(patchId)) return;

  manualPlayerStylePatches.forEach((patch) => {
    const teamId = getTeamIdFromBatchSlug(patch.teamId);
    const player = save.players.find((item) => item.name === patch.name && item.teamId === teamId);
    if (!player) return;

    player.playerStyle = patch.playerStyle;
    player.playerStyleMode = "manual";
    normalizePlayer(player);
  });

  save.manualPlayerStylePatchesApplied.push(patchId);
}

function refreshAutoPlayerStyles(save) {
  save.autoPlayerStyleVersion = save.autoPlayerStyleVersion || 0;
  if (save.autoPlayerStyleVersion >= 2) return;

  save.players.forEach((player) => {
    if (player.playerStyleMode === "manual") return;
    player.playerStyleMode = "auto";
    player.playerStyle = generatePlayerStyle(player);
  });
  save.autoPlayerStyleVersion = 2;
}

function getTeamIdFromBatchSlug(slug) {
  const teamId = TEAM_ID_BY_SLUG[slug];
  if (!teamId) throw new Error(`Unknown team slug: ${slug}`);
  return teamId;
}

function isOfficialTeamSave(save) {
  return save && Array.isArray(save.teams)
    && save.teams.length === TEAM_DATABASE.length
    && save.teams.every((team) => TEAM_DATABASE.some((official) => official.id === team.id && official.name === team.name));
}

function exportSave() {
  const payload = JSON.stringify(state, null, 2);
  const fileName = `kings-league-simulator-season-${state.seasonYear}-backup.json`;
  elements.exportOutput.value = payload;
  elements.exportOutput.select();
  downloadJsonBackup(payload, fileName);
}

function downloadJsonBackup(payload, fileName) {
  if (typeof Blob === "undefined" || typeof URL === "undefined" || !document.createElement || !document.body) return;
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importSave(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = normalizeSave(JSON.parse(reader.result));
      validateSave(imported);
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, imported);
      render();
      saveGame("Imported");
    } catch (error) {
      alert("That file is not a valid Kings League Simulator save.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function resetSave() {
  if (!confirm("Reset the current Kings League save?")) return;

  const fresh = createNewGame();
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, fresh);
  localStorage.removeItem(SAVE_KEY);
  OLD_SAVE_KEYS.forEach((key) => localStorage.removeItem(key));
  render();
  saveGame("Reset");
}

function validateSave(save) {
  if (!save || !Array.isArray(save.teams) || !Array.isArray(save.fixtures) || save.teams.length !== 18 || save.fixtures.length !== 34 || !isOfficialTeamSave(save)) {
    throw new Error("Invalid save");
  }
}

function makeShortName(name) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 3).toUpperCase();
}

function pickTeamColor(index) {
  const colors = [
    "#48a6ff", "#8e5cff", "#ff4d95", "#38e2d0", "#f3c74e", "#49d17d",
    "#ff7b54", "#6c7cff", "#e84cff", "#29b6f6", "#ff5d6c", "#8bd450",
    "#b36dff", "#00c2a8", "#f06292", "#4dd0e1", "#c0ca33", "#7e57c2"
  ];
  return colors[index % colors.length];
}

function pickPotm(team) {
  return `${randomPlayerName()} (${team.name})`;
}

function randomPlayerName() {
  const firstNames = ["Leo", "Nico", "Dani", "Alex", "Mario", "Iker", "Bruno", "Toni", "Rafa", "Sergi"];
  const lastNames = ["Reyes", "Costa", "Marin", "Vega", "Santos", "Ramos", "Silva", "Torres", "Molina", "Blanco"];
  return `${firstNames[randomInt(0, firstNames.length - 1)]} ${lastNames[randomInt(0, lastNames.length - 1)]}`;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}

function average(values) {
  const clean = values.filter((value) => Number.isFinite(value));
  return clean.length ? clean.reduce((sum, value) => sum + value, 0) / clean.length : 0;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function toCamelCase(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}