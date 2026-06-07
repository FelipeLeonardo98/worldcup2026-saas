const teams = {
  brazil: {
    name: "Brazil",
    flag: "assets/brazil-flag.svg",
    theme: "brazil",
    quick: [
      ["", "All"],
      ["7", "#7"],
      ["vini", "Vini Jr"],
      ["10", "#10"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Alisson Becker", "Liverpool", 1, "Goalkeeper", "1.93 m", "91 kg", 33, ["alisson"]),
      p(2, "Wesley", "Roma", 43, "Defender", "1.78 m", "70 kg", 22, ["wesley franca"]),
      p(3, "Gabriel Magalhaes", "Arsenal", 6, "Defender", "1.90 m", "87 kg", 28, ["gabriel"]),
      p(4, "Marquinhos", "Paris Saint-Germain", 5, "Defender", "1.83 m", "75 kg", 32),
      p(5, "Casemiro", "Manchester United", 18, "Midfielder", "1.85 m", "84 kg", 34),
      p(6, "Alex Sandro", "Flamengo", 26, "Defender", "1.80 m", "80 kg", 35),
      p(7, "Vinicius Junior", "Real Madrid", 7, "Forward", "1.76 m", "73 kg", 25, ["vini", "vini jr", "vinicius jr"]),
      p(8, "Bruno Guimaraes", "Newcastle United", 39, "Midfielder", "1.82 m", "74 kg", 28, ["bruno"]),
      p(9, "Matheus Cunha", "Manchester United", 10, "Forward", "1.84 m", "76 kg", 27, ["cunha"]),
      p(10, "Neymar Junior", "Santos", 10, "Forward", "1.75 m", "68 kg", 34, ["neymar", "ney", "neymar jr"]),
      p(11, "Raphinha", "Barcelona", 11, "Forward", "1.76 m", "68 kg", 29),
      p(12, "Weverton", "Palmeiras", 21, "Goalkeeper", "1.89 m", "91 kg", 38),
      p(13, "Danilo", "Flamengo", 13, "Defender", "1.84 m", "78 kg", 34),
      p(14, "Gleison Bremer", "Juventus", 3, "Defender", "1.88 m", "80 kg", 29, ["bremer"]),
      p(15, "Leo Pereira", "Flamengo", 4, "Defender", "1.89 m", "80 kg", 30, ["leonardo pereira"]),
      p(16, "Douglas Santos", "Zenit St. Petersburg", 3, "Defender", "1.75 m", "70 kg", 32),
      p(17, "Fabinho", "Al Ittihad", 8, "Midfielder", "1.88 m", "78 kg", 32),
      p(18, "Danilo Santos", "Botafogo", 5, "Midfielder", "1.82 m", "76 kg", 25, ["danilo barbosa"]),
      p(19, "Endrick", "Lyon", 9, "Forward", "1.73 m", "66 kg", 19),
      p(20, "Lucas Paqueta", "West Ham United", 10, "Midfielder", "1.80 m", "72 kg", 28, ["paqueta"]),
      p(21, "Luiz Henrique", "Zenit St. Petersburg", 11, "Forward", "1.82 m", "78 kg", 25),
      p(22, "Gabriel Martinelli", "Arsenal", 11, "Forward", "1.78 m", "75 kg", 25, ["martinelli"]),
      p(23, "Ederson", "Fenerbahce", 31, "Goalkeeper", "1.88 m", "86 kg", 32, ["ederson moraes"]),
      p(24, "Roger Ibanez", "Al Ahli", 3, "Defender", "1.86 m", "79 kg", 27, ["ibanez"]),
      p(25, "Igor Thiago", "Brentford", 9, "Forward", "1.91 m", "85 kg", 25),
      p(26, "Rayan", "AFC Bournemouth", 17, "Forward", "1.85 m", "78 kg", 19, ["rayann"]),
    ],
  },
  france: {
    name: "France",
    flag: "assets/france-flag.svg",
    theme: "france",
    quick: [
      ["", "All"],
      ["10", "#10"],
      ["mbappe", "Mbappe"],
      ["7", "#7"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Brice Samba", "Stade Rennais", 30, "Goalkeeper", "1.87 m", "79 kg", 32, ["samba"]),
      p(2, "Malo Gusto", "Chelsea", 27, "Defender", "1.79 m", "76 kg", 23),
      p(3, "Lucas Digne", "Aston Villa", 12, "Defender", "1.78 m", "74 kg", 32),
      p(4, "Dayot Upamecano", "Bayern Munich", 2, "Defender", "1.86 m", "90 kg", 27),
      p(5, "Jules Kounde", "Barcelona", 23, "Defender", "1.80 m", "75 kg", 27),
      p(6, "Manu Kone", "Roma", 17, "Midfielder", "1.85 m", "80 kg", 25, ["kouadio kone"]),
      p(7, "Ousmane Dembele", "Paris Saint-Germain", 10, "Forward", "1.78 m", "67 kg", 29, ["dembele"]),
      p(8, "Aurelien Tchouameni", "Real Madrid", 14, "Midfielder", "1.88 m", "81 kg", 26, ["tchouameni"]),
      p(9, "Marcus Thuram", "Inter Milan", 9, "Forward", "1.92 m", "90 kg", 28),
      p(10, "Kylian Mbappe", "Real Madrid", 10, "Forward", "1.78 m", "75 kg", 27, ["mbappe"]),
      p(11, "Michael Olise", "Bayern Munich", 17, "Forward", "1.84 m", "76 kg", 24),
      p(12, "Bradley Barcola", "Paris Saint-Germain", 29, "Forward", "1.82 m", "73 kg", 23),
      p(13, "N'Golo Kante", "Fenerbahce", 13, "Midfielder", "1.68 m", "68 kg", 35, ["kante"]),
      p(14, "Adrien Rabiot", "AC Milan", 14, "Midfielder", "1.88 m", "72 kg", 31),
      p(15, "Ibrahima Konate", "Liverpool", 5, "Defender", "1.94 m", "95 kg", 27, ["konate"]),
      p(16, "Mike Maignan", "AC Milan", 16, "Goalkeeper", "1.91 m", "89 kg", 30),
      p(17, "William Saliba", "Arsenal", 2, "Defender", "1.92 m", "92 kg", 25),
      p(18, "Warren Zaire-Emery", "Paris Saint-Germain", 33, "Midfielder", "1.78 m", "70 kg", 20, ["zaire emery"]),
      p(19, "Theo Hernandez", "Al Hilal", 19, "Defender", "1.84 m", "81 kg", 28),
      p(20, "Desire Doue", "Paris Saint-Germain", 14, "Forward", "1.81 m", "76 kg", 21, ["doue"]),
      p(21, "Lucas Hernandez", "Paris Saint-Germain", 21, "Defender", "1.84 m", "79 kg", 30),
      p(22, "Jean-Philippe Mateta", "Crystal Palace", 14, "Forward", "1.92 m", "88 kg", 28, ["mateta"]),
      p(23, "Robin Risser", "RC Lens", 30, "Goalkeeper", "1.93 m", "82 kg", 21),
      p(24, "Rayan Cherki", "Manchester City", 18, "Midfielder", "1.76 m", "71 kg", 22, ["cherki"]),
      p(25, "Maghnes Akliouche", "AS Monaco", 11, "Midfielder", "1.83 m", "70 kg", 24, ["akliouche"]),
      p(26, "Maxence Lacroix", "Crystal Palace", 5, "Defender", "1.90 m", "88 kg", 26, ["lacroix"]),
    ],
  },
  germany: {
    name: "Germany",
    flag: "assets/germany-flag.svg",
    theme: "germany",
    quick: [
      ["", "All"],
      ["10", "#10"],
      ["musiala", "Musiala"],
      ["17", "#17"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Manuel Neuer", "Bayern Munich", 1, "Goalkeeper", "1.93 m", "93 kg", 40),
      p(2, "Antonio Rudiger", "Real Madrid", 22, "Defender", "1.90 m", "85 kg", 33, ["rudiger"]),
      p(3, "Waldemar Anton", "Borussia Dortmund", 3, "Defender", "1.89 m", "84 kg", 29),
      p(4, "Jonathan Tah", "Bayern Munich", 4, "Defender", "1.95 m", "94 kg", 30),
      p(5, "Aleksandar Pavlovic", "Bayern Munich", 45, "Midfielder", "1.88 m", "76 kg", 22, ["pavlovic"]),
      p(6, "Joshua Kimmich", "Bayern Munich", 6, "Defender", "1.77 m", "75 kg", 31),
      p(7, "Kai Havertz", "Arsenal", 29, "Forward", "1.93 m", "83 kg", 27),
      p(8, "Leon Goretzka", "Bayern Munich", 8, "Midfielder", "1.89 m", "82 kg", 31),
      p(9, "Jamie Leweling", "VfB Stuttgart", 18, "Midfielder", "1.84 m", "86 kg", 25),
      p(10, "Jamal Musiala", "Bayern Munich", 42, "Midfielder", "1.84 m", "72 kg", 23),
      p(11, "Nick Woltemade", "Newcastle United", 11, "Forward", "1.98 m", "90 kg", 24),
      p(12, "Oliver Baumann", "TSG Hoffenheim", 1, "Goalkeeper", "1.87 m", "82 kg", 36),
      p(13, "Pascal Gross", "Brighton & Hove Albion", 13, "Midfielder", "1.81 m", "78 kg", 34, ["gross"]),
      p(14, "Maximilian Beier", "Borussia Dortmund", 14, "Forward", "1.85 m", "75 kg", 23),
      p(15, "Nico Schlotterbeck", "Borussia Dortmund", 4, "Defender", "1.91 m", "86 kg", 26),
      p(16, "Angelo Stiller", "VfB Stuttgart", 6, "Midfielder", "1.83 m", "73 kg", 25),
      p(17, "Florian Wirtz", "Liverpool", 7, "Midfielder", "1.77 m", "72 kg", 23),
      p(18, "Nathaniel Brown", "Eintracht Frankfurt", 21, "Defender", "1.80 m", "75 kg", 23),
      p(19, "Leroy Sane", "Galatasaray", 10, "Midfielder", "1.83 m", "80 kg", 30, ["sane"]),
      p(20, "Nadiem Amiri", "Mainz 05", 18, "Midfielder", "1.80 m", "76 kg", 29),
      p(21, "Alexander Nubel", "VfB Stuttgart", 33, "Goalkeeper", "1.93 m", "86 kg", 29, ["nubel"]),
      p(22, "David Raum", "RB Leipzig", 22, "Defender", "1.80 m", "75 kg", 28),
      p(23, "Felix Nmecha", "Borussia Dortmund", 8, "Midfielder", "1.88 m", "73 kg", 25),
      p(24, "Malick Thiaw", "Newcastle United", 12, "Defender", "1.94 m", "88 kg", 24),
      p(25, "Assan Ouedraogo", "RB Leipzig", 20, "Midfielder", "1.91 m", "83 kg", 20, ["ouedraogo"]),
      p(26, "Deniz Undav", "VfB Stuttgart", 26, "Forward", "1.79 m", "86 kg", 29),
    ],
  },
  argentina: {
    name: "Argentina",
    flag: "assets/argentina-flag.svg",
    theme: "argentina",
    quick: [
      ["", "All"],
      ["10", "#10"],
      ["messi", "Messi"],
      ["9", "#9"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Juan Musso", "Atletico Madrid", 1, "Goalkeeper", "1.91 m", "93 kg", 32),
      p(2, "Leonardo Balerdi", "Marseille", 5, "Defender", "1.87 m", "85 kg", 27, ["leo balerdi"]),
      p(3, "Nicolas Tagliafico", "Lyon", 3, "Defender", "1.72 m", "65 kg", 33),
      p(4, "Gonzalo Montiel", "River Plate", 4, "Defender", "1.75 m", "70 kg", 29),
      p(5, "Leandro Paredes", "Boca Juniors", 5, "Midfielder", "1.80 m", "75 kg", 31),
      p(6, "Lisandro Martinez", "Manchester United", 6, "Defender", "1.75 m", "77 kg", 28),
      p(7, "Rodrigo De Paul", "Inter Miami", 7, "Midfielder", "1.80 m", "70 kg", 32),
      p(8, "Valentin Barco", "Strasbourg", 19, "Midfielder", "1.72 m", "64 kg", 21),
      p(9, "Julian Alvarez", "Atletico Madrid", 19, "Forward", "1.70 m", "71 kg", 26),
      p(10, "Lionel Messi", "Inter Miami", 10, "Forward", "1.70 m", "72 kg", 38, ["leo messi", "messi"]),
      p(11, "Giovani Lo Celso", "Real Betis", 20, "Midfielder", "1.77 m", "68 kg", 30, ["gio lo celso"]),
      p(12, "Geronimo Rulli", "Marseille", 1, "Goalkeeper", "1.89 m", "84 kg", 34),
      p(13, "Cristian Romero", "Tottenham Hotspur", 17, "Defender", "1.85 m", "79 kg", 28, ["cuti romero"]),
      p(14, "Exequiel Palacios", "Bayer Leverkusen", 25, "Midfielder", "1.77 m", "67 kg", 27),
      p(15, "Nicolas Gonzalez", "Atletico Madrid", 15, "Forward", "1.80 m", "72 kg", 28),
      p(16, "Thiago Almada", "Atletico Madrid", 10, "Midfielder", "1.71 m", "63 kg", 25),
      p(17, "Giuliano Simeone", "Atletico Madrid", 20, "Forward", "1.73 m", "73 kg", 23),
      p(18, "Nico Paz", "Como", 79, "Forward", "1.86 m", "74 kg", 21, ["nicolas paz"]),
      p(19, "Nicolas Otamendi", "Benfica", 30, "Defender", "1.83 m", "81 kg", 38),
      p(20, "Alexis Mac Allister", "Liverpool", 10, "Midfielder", "1.76 m", "72 kg", 27, ["mac allister"]),
      p(21, "Jose Manuel Lopez", "Palmeiras", 42, "Forward", "1.88 m", "83 kg", 25, ["flaco lopez"]),
      p(22, "Lautaro Martinez", "Inter Milan", 10, "Forward", "1.74 m", "72 kg", 28),
      p(23, "Emiliano Martinez", "Aston Villa", 23, "Goalkeeper", "1.95 m", "88 kg", 33, ["dibu martinez"]),
      p(24, "Enzo Fernandez", "Chelsea", 8, "Midfielder", "1.78 m", "76 kg", 25),
      p(25, "Facundo Medina", "Marseille", 14, "Defender", "1.84 m", "78 kg", 27),
      p(26, "Nahuel Molina", "Atletico Madrid", 16, "Defender", "1.75 m", "70 kg", 28),
    ],
  },
};

function p(number, name, club, clubNumber, position, height, weight, age, aliases = []) {
  return { number, name, club, clubNumber, position, height, weight, age, aliases };
}

const teamFilter = document.querySelector("#teamFilter");
const teamFlag = document.querySelector("#teamFlag");
const teamName = document.querySelector("#teamName");
const searchInput = document.querySelector("#searchInput");
const positionFilter = document.querySelector("#positionFilter");
const results = document.querySelector("#results");
const featuredPlayer = document.querySelector("#featuredPlayer");
const resultCount = document.querySelector("#resultCount");
const playerCount = document.querySelector("#playerCount");
const clubCount = document.querySelector("#clubCount");
const chips = [...document.querySelectorAll(".chip")];

const normalize = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

function currentTeam() {
  return teams[teamFilter.value];
}

function matchesPlayer(player, query) {
  if (!query) return true;

  const normalizedQuery = normalize(query).replace(/^#/, "");
  if (/^\d+$/.test(normalizedQuery)) {
    return String(player.number) === normalizedQuery;
  }

  const searchable = [
    player.name,
    player.position,
    player.club,
    `number ${player.number}`,
    `shirt ${player.number}`,
    `#${player.number}`,
    ...player.aliases,
  ]
    .map(normalize)
    .join(" ");

  return searchable.includes(normalizedQuery);
}

function answerLine(player) {
  return `${player.club} number ${player.clubNumber}`;
}

function playerDescription(player) {
  return `${player.height} | ${player.weight} | ${player.age} years old`;
}

function renderFeatured(player, team) {
  if (!player) {
    featuredPlayer.innerHTML = `
      <div class="empty-state">No player found for that search.</div>
    `;
    return;
  }

  featuredPlayer.innerHTML = `
    <div class="shirt" aria-label="${team.name} shirt number ${player.number}">${player.number}</div>
    <div>
      <h3>${player.name}</h3>
      <p class="answer">${answerLine(player)}</p>
      <p class="meta">${player.position} for ${team.name} | ${playerDescription(player)}</p>
    </div>
    <span class="position-pill">${player.position}</span>
  `;
}

function renderCards(list) {
  if (!list.length) {
    results.innerHTML = "";
    return;
  }

  results.innerHTML = list
    .map(
      (player) => `
        <article class="player-card">
          <div class="mini-shirt">${player.number}</div>
          <div>
            <h3>${player.name}</h3>
            <p class="answer">${answerLine(player)}</p>
            <p class="meta">${playerDescription(player)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function updateTeamChrome(team) {
  document.body.dataset.team = team.theme;
  teamFlag.src = team.flag;
  teamFlag.alt = `${team.name} flag`;
  teamName.textContent = `${team.name} national team`;

  team.quick.forEach(([query, label], index) => {
    chips[index].dataset.query = query;
    chips[index].textContent = label;
  });
}

function updateActiveChip(query) {
  chips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.query === query);
  });
}

function runSearch() {
  const team = currentTeam();
  const query = searchInput.value;
  const selectedPosition = positionFilter.value;
  const filtered = team.players.filter((player) => {
    const positionMatch =
      selectedPosition === "all" || player.position === selectedPosition;
    return positionMatch && matchesPlayer(player, query);
  });

  playerCount.textContent = team.players.length;
  clubCount.textContent = new Set(team.players.map((player) => player.club)).size;
  resultCount.textContent = filtered.length;
  renderFeatured(filtered[0], team);
  renderCards(filtered);
  updateActiveChip(query);
}

function switchTeam() {
  const team = currentTeam();
  searchInput.value = "";
  positionFilter.value = "all";
  updateTeamChrome(team);
  runSearch();
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    searchInput.value = chip.dataset.query;
    positionFilter.value = "all";
    runSearch();
    searchInput.focus();
  });
});

teamFilter.addEventListener("change", switchTeam);
searchInput.addEventListener("input", runSearch);
positionFilter.addEventListener("change", runSearch);

updateTeamChrome(currentTeam());
runSearch();
