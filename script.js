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
  curacao: {
    name: "Curaçao",
    flag: "assets/curacao-flag.svg",
    theme: "curacao",
    quick: [
      ["", "All"],
      ["10", "#10"],
      ["bacuna", "Bacuna"],
      ["7", "#7"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Boy de Jong", "ADO Den Haag", 1, "Goalkeeper", "1.88 m", "84 kg", 31, ["de jong"]),
      p(2, "Cuco Martina", "NAC Breda", 2, "Defender", "1.85 m", "78 kg", 36, ["martina"]),
      p(3, "Miquel Nelom", "Sparta Rotterdam", 5, "Defender", "1.79 m", "74 kg", 35),
      p(4, "Darryl Lachman", "Perth Glory", 4, "Defender", "1.91 m", "85 kg", 36, ["lachman"]),
      p(5, "Vurnon Anita", "Al Wahda", 20, "Midfielder", "1.68 m", "66 kg", 37, ["anita"]),
      p(6, "Kevin Felida", "RKC Waalwijk", 6, "Midfielder", "1.84 m", "77 kg", 26),
      p(7, "Leandro Bacuna", "FC Groningen", 7, "Midfielder", "1.88 m", "82 kg", 34, ["bacuna"]),
      p(8, "Juninho Bacuna", "Birmingham City", 24, "Midfielder", "1.78 m", "74 kg", 28, ["j bacuna"]),
      p(9, "Charlison Benschop", "Al Faisaly", 9, "Forward", "1.91 m", "88 kg", 37, ["benschop"]),
      p(10, "Richairo Zivkovic", "Omonia", 99, "Forward", "1.85 m", "80 kg", 29, ["zivkovic"]),
      p(11, "Brandley Kuwas", "Al Jazira", 11, "Forward", "1.76 m", "72 kg", 33),
      p(12, "Jurien Gaari", "RKC Waalwijk", 2, "Defender", "1.78 m", "76 kg", 32, ["gaari"]),
      p(13, "Shermar Martina", "FC Emmen", 15, "Midfielder", "1.80 m", "75 kg", 29),
      p(14, "Jeremy Cijntje", "Helmond Sport", 8, "Midfielder", "1.73 m", "68 kg", 28, ["cijntje"]),
      p(15, "Kenji Gorre", "Vikingur Reykjavik", 11, "Forward", "1.73 m", "70 kg", 31, ["gorre"]),
      p(16, "Gervane Kastaneer", "Hapoel Tel Aviv", 9, "Forward", "1.86 m", "82 kg", 30, ["kastaneer"]),
      p(17, "Gevaro Nepomuceno", "Atletico Morelia", 17, "Forward", "1.76 m", "70 kg", 33),
      p(18, "Elson Hooi", "Bali United", 14, "Midfielder", "1.68 m", "65 kg", 34),
      p(19, "Anthony van den Hurk", "Cracovia", 9, "Forward", "1.87 m", "78 kg", 33, ["vandenhurk"]),
      p(20, "Rangelo Janga", "Astana", 32, "Forward", "1.88 m", "82 kg", 34, ["janga"]),
      p(21, "Michael Maria", "Helmond Sport", 5, "Defender", "1.80 m", "76 kg", 31),
      p(22, "Godfried Roemeratoe", "Hapoel Hadera", 8, "Midfielder", "1.82 m", "78 kg", 26, ["roemeratoe"]),
      p(23, "Jarchinio Antonia", "CD Castellon", 7, "Forward", "1.72 m", "68 kg", 35),
      p(24, "Shuremy Felomina", "FC Emmen", 18, "Midfielder", "1.78 m", "72 kg", 27),
      p(25, "Richonell Margaret", "Helmond Sport", 20, "Forward", "1.85 m", "80 kg", 25),
      p(26, "Quentin Jakoba", "Excelsior Maassluis", 1, "Goalkeeper", "1.90 m", "86 kg", 30, ["jakoba"]),
    ],
  },
  haiti: {
    name: "Haiti",
    flag: "assets/haiti-flag.svg",
    theme: "haiti",
    quick: [
      ["", "All"],
      ["9", "#9"],
      ["nazon", "Nazon"],
      ["pierrot", "Pierrot"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Johnny Placide", "Bastia", 30, "Goalkeeper", "1.83 m", "78 kg", 37, ["placide"]),
      p(2, "Carlens Arcus", "Paris FC", 22, "Defender", "1.76 m", "71 kg", 30, ["arcus"]),
      p(3, "Ricardo Ade", "FC Sheriff", 4, "Defender", "1.86 m", "82 kg", 34, ["ade"]),
      p(4, "Mechack Jerome", "El Paso Locomotive", 5, "Defender", "1.77 m", "73 kg", 36, ["jerome"]),
      p(5, "Djimy Alexis", "Hapoel Jerusalem", 3, "Defender", "1.83 m", "78 kg", 28, ["alexis"]),
      p(6, "Bryan Alceus", "Panserraikos", 6, "Midfielder", "1.79 m", "75 kg", 28),
      p(7, "Wilde-Donald Guerrier", "Al Dhaid", 7, "Forward", "1.76 m", "72 kg", 35, ["guerrier"]),
      p(8, "Leverton Pierre", "OKC Energy", 8, "Midfielder", "1.81 m", "77 kg", 27),
      p(9, "Duckens Nazon", "El Qadsia", 9, "Forward", "1.83 m", "76 kg", 32, ["nazon"]),
      p(10, "Derrick Etienne Jr.", "Atlanta United", 21, "Midfielder", "1.78 m", "70 kg", 29, ["etienne"]),
      p(11, "Frantzdy Pierrot", "Maccabi Haifa", 11, "Forward", "1.91 m", "84 kg", 31, ["pierrot"]),
      p(12, "Carnejy Antoine", "FCV Dender EH", 99, "Forward", "1.86 m", "80 kg", 33),
      p(13, "Garven Metusala", "Forge FC", 13, "Defender", "1.85 m", "79 kg", 26),
      p(14, "Zachary Herivaux", "Birmingham Legion", 14, "Midfielder", "1.86 m", "81 kg", 30, ["herivaux"]),
      p(15, "Jeppe Simonsen", "B36 Torshavn", 15, "Midfielder", "1.82 m", "74 kg", 29),
      p(16, "Bilal Hassan", "CD Municipal", 16, "Defender", "1.80 m", "75 kg", 25),
      p(17, "Louicius Don Deedson", "Le Mans", 17, "Forward", "1.77 m", "72 kg", 24, ["deedson"]),
      p(18, "Ronaldo Damus", "CSD Municipal", 18, "Forward", "1.88 m", "82 kg", 26),
      p(19, "Dutherson Clerveaux", "Avranches", 19, "Forward", "1.85 m", "77 kg", 27),
      p(20, "Fredler Christophe", "Racing FC", 20, "Midfielder", "1.78 m", "73 kg", 24),
      p(21, "Kevin Davy", "FC Versailles", 21, "Midfielder", "1.75 m", "69 kg", 26),
      p(22, "Francois Dulysse", "CS Moulien", 22, "Defender", "1.84 m", "80 kg", 30),
      p(23, "Joeffrey Jean Baptiste", "FC Progres", 23, "Defender", "1.82 m", "76 kg", 28),
      p(24, "Widler Petit-Frere", "Real Hope FA", 24, "Midfielder", "1.71 m", "65 kg", 23),
      p(25, "Sacha Desire", "Tempete FC", 25, "Goalkeeper", "1.86 m", "80 kg", 27),
      p(26, "Josue Duverger", "FC Emmen", 1, "Goalkeeper", "1.88 m", "83 kg", 26, ["duverger"]),
    ],
  },
  marrocos: {
    name: "Marrocos",
    flag: "assets/morocco-flag.svg",
    theme: "marrocos",
    quick: [
      ["", "All"],
      ["10", "#10"],
      ["ziyech", "Ziyech"],
      ["7", "#7"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Yassine Bounou", "Al Hilal", 37, "Goalkeeper", "1.92 m", "83 kg", 35, ["bono", "bounou"]),
      p(2, "Achraf Hakimi", "Paris Saint-Germain", 2, "Defender", "1.81 m", "73 kg", 27, ["hakimi"]),
      p(3, "Noussair Mazraoui", "Manchester United", 3, "Defender", "1.83 m", "77 kg", 28, ["mazraoui"]),
      p(4, "Sofyan Amrabat", "Fenerbahce", 4, "Midfielder", "1.85 m", "78 kg", 29, ["amrabat"]),
      p(5, "Nayef Aguerd", "West Ham United", 27, "Defender", "1.90 m", "84 kg", 30, ["aguerd"]),
      p(6, "Romain Saiss", "Al Shabab", 6, "Defender", "1.88 m", "80 kg", 36, ["saiss"]),
      p(7, "Hakim Ziyech", "Galatasaray", 22, "Forward", "1.80 m", "70 kg", 33, ["ziyech"]),
      p(8, "Azzedine Ounahi", "Marseille", 8, "Midfielder", "1.82 m", "72 kg", 26, ["ounahi"]),
      p(9, "Ayoub El Kaabi", "Olympiacos", 9, "Forward", "1.87 m", "83 kg", 32, ["el kaabi"]),
      p(10, "Brahim Diaz", "Real Madrid", 21, "Midfielder", "1.71 m", "66 kg", 26, ["brahim"]),
      p(11, "Youssef En-Nesyri", "Fenerbahce", 19, "Forward", "1.89 m", "80 kg", 28, ["ennesyri", "en-nesyri"]),
      p(12, "Munir Mohamedi", "Al Wehda", 12, "Goalkeeper", "1.92 m", "89 kg", 37, ["munir"]),
      p(13, "Bilal El Khannous", "Leicester City", 18, "Midfielder", "1.76 m", "69 kg", 22, ["el khannous"]),
      p(14, "Selim Amallah", "Real Valladolid", 14, "Midfielder", "1.86 m", "79 kg", 29, ["amallah"]),
      p(15, "Eliesse Ben Seghir", "AS Monaco", 18, "Forward", "1.78 m", "70 kg", 21, ["benseghir"]),
      p(16, "Yahya Attiat Allah", "Al Ahly", 16, "Defender", "1.76 m", "73 kg", 29, ["attiat allah"]),
      p(17, "Anass Zaroury", "Ajax", 17, "Forward", "1.76 m", "67 kg", 25, ["zaroury"]),
      p(18, "Osamah Sahraoui", "Lille", 5, "Forward", "1.86 m", "78 kg", 24, ["sahraoui"]),
      p(19, "Sofiane Boufal", "Al Rayyan", 10, "Forward", "1.75 m", "70 kg", 32, ["boufal"]),
      p(20, "Achraf Dari", "Al Ahly", 20, "Defender", "1.88 m", "83 kg", 27, ["dari"]),
      p(21, "Abdelhamid Sabiri", "Al Taawoun", 8, "Midfielder", "1.83 m", "77 kg", 29, ["sabiri"]),
      p(22, "Reda Tagnaouti", "Wydad Casablanca", 22, "Goalkeeper", "1.89 m", "85 kg", 30),
      p(23, "Mohamed Chibi", "Pyramids", 23, "Defender", "1.78 m", "73 kg", 30),
      p(24, "Ilias Chair", "Queens Park Rangers", 10, "Midfielder", "1.68 m", "62 kg", 28, ["chair"]),
      p(25, "Amine Adli", "Bayer Leverkusen", 21, "Midfielder", "1.74 m", "68 kg", 26, ["adli"]),
      p(26, "Chadi Riad", "Crystal Palace", 5, "Defender", "1.87 m", "81 kg", 22, ["riad"]),
    ],
  },
  korea: {
    name: "Korea",
    flag: "assets/korea-flag.svg",
    theme: "korea",
    quick: [
      ["", "All"],
      ["7", "#7"],
      ["son", "Son"],
      ["10", "#10"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Kim Seung-gyu", "Al Shabab", 1, "Goalkeeper", "1.87 m", "82 kg", 35, ["seunggyu"]),
      p(2, "Seol Young-woo", "Crvena Zvezda", 2, "Defender", "1.82 m", "76 kg", 26, ["youngwoo"]),
      p(3, "Kim Jin-su", "Jeonbuk Hyundai", 3, "Defender", "1.77 m", "73 kg", 34, ["jinsu"]),
      p(4, "Kim Min-jae", "Bayern Munich", 3, "Defender", "1.90 m", "86 kg", 29, ["minjae", "min-jae"]),
      p(5, "Jung Seung-hyun", "Al Wasl", 5, "Defender", "1.88 m", "83 kg", 32, ["seunghyun"]),
      p(6, "Hwang In-beom", "Feyenoord", 6, "Midfielder", "1.77 m", "70 kg", 29, ["inbeom", "in-beom"]),
      p(7, "Son Heung-min", "Tottenham Hotspur", 7, "Forward", "1.83 m", "78 kg", 33, ["sonny", "heungmin"]),
      p(8, "Paik Seung-ho", "Birmingham City", 8, "Midfielder", "1.80 m", "76 kg", 29, ["seungho"]),
      p(9, "Cho Gue-sung", "FC Midtjylland", 10, "Forward", "1.88 m", "82 kg", 28, ["guesung"]),
      p(10, "Lee Kang-in", "Paris Saint-Germain", 19, "Midfielder", "1.73 m", "68 kg", 25, ["kangin", "kang-in"]),
      p(11, "Hwang Hee-chan", "Wolverhampton", 11, "Forward", "1.77 m", "74 kg", 30, ["heechang", "hee-chan"]),
      p(12, "Jo Hyeon-woo", "Ulsan Hyundai", 12, "Goalkeeper", "1.89 m", "80 kg", 34, ["hyunwoo"]),
      p(13, "Lee Jae-sung", "Mainz 05", 7, "Midfielder", "1.80 m", "75 kg", 33, ["jaesung"]),
      p(14, "Kim Young-gwon", "Ulsan Hyundai", 19, "Defender", "1.83 m", "79 kg", 38, ["younggwon"]),
      p(15, "Song Min-kyu", "Jeonbuk Hyundai", 15, "Forward", "1.80 m", "72 kg", 26, ["minkyu"]),
      p(16, "Yang Hyun-jun", "Celtic", 13, "Forward", "1.81 m", "70 kg", 22, ["hyunjun"]),
      p(17, "Um Won-sang", "Ulsan Hyundai", 17, "Forward", "1.73 m", "68 kg", 26, ["wonsang"]),
      p(18, "Oh Hyeon-gyu", "Genk", 18, "Forward", "1.87 m", "79 kg", 25, ["hyungyu"]),
      p(19, "Lee Dong-kyung", "Gimcheon Sangmu", 19, "Midfielder", "1.80 m", "75 kg", 28, ["dongkyung"]),
      p(20, "Kwon Kyung-won", "Al Khaleej", 20, "Defender", "1.88 m", "87 kg", 34, ["kyungwon"]),
      p(21, "Park Yong-woo", "Al Ain", 21, "Midfielder", "1.76 m", "73 kg", 32, ["yongwoo"]),
      p(22, "Bae Jun-ho", "Stoke City", 22, "Midfielder", "1.80 m", "72 kg", 22, ["junho"]),
      p(23, "Kim Tae-hwan", "Jeonbuk Hyundai", 23, "Defender", "1.75 m", "68 kg", 35, ["taehwan"]),
      p(24, "Cho Yu-min", "Sharjah", 24, "Defender", "1.83 m", "78 kg", 29, ["yumin"]),
      p(25, "Hwang Ui-jo", "Alanyaspor", 9, "Forward", "1.84 m", "76 kg", 33, ["uijo"]),
      p(26, "Kim Jun-hong", "Jeonbuk Hyundai", 26, "Goalkeeper", "1.93 m", "86 kg", 26, ["junhong"]),
    ],
  },
  senegal: {
    name: "Senegal",
    flag: "assets/senegal-flag.svg",
    theme: "senegal",
    quick: [
      ["", "All"],
      ["10", "#10"],
      ["mane", "Mane"],
      ["19", "#19"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Edouard Mendy", "Al Ahli", 16, "Goalkeeper", "1.94 m", "87 kg", 34, ["mendy"]),
      p(2, "Ismail Jakobs", "Galatasaray", 2, "Defender", "1.75 m", "72 kg", 26, ["jakobs"]),
      p(3, "Kalidou Koulibaly", "Al Hilal", 3, "Defender", "1.86 m", "85 kg", 35, ["koulibaly"]),
      p(4, "Youssouf Sabaly", "Real Betis", 4, "Defender", "1.74 m", "70 kg", 33, ["sabaly"]),
      p(5, "Abdou Diallo", "Al Arabi", 5, "Defender", "1.85 m", "80 kg", 30, ["abdou diallo"]),
      p(6, "Idrissa Gueye", "Everton", 27, "Midfielder", "1.74 m", "71 kg", 36, ["idrissa gueye", "gueye"]),
      p(7, "Nampalys Mendy", "RC Lens", 14, "Midfielder", "1.67 m", "70 kg", 33, ["nampalys"]),
      p(8, "Cheikhou Kouyate", "Nottingham Forest", 8, "Midfielder", "1.91 m", "84 kg", 36, ["kouyate"]),
      p(9, "Iliman Ndiaye", "Everton", 10, "Forward", "1.80 m", "73 kg", 26, ["iliman"]),
      p(10, "Sadio Mane", "Al Nassr", 10, "Forward", "1.74 m", "76 kg", 34, ["mane", "sadio"]),
      p(11, "Boulaye Dia", "Salernitana", 18, "Forward", "1.80 m", "77 kg", 29, ["dia"]),
      p(12, "Seny Dieng", "Middlesbrough", 1, "Goalkeeper", "1.93 m", "84 kg", 31, ["dieng"]),
      p(13, "Pathe Ciss", "Rayo Vallecano", 21, "Midfielder", "1.86 m", "80 kg", 32, ["ciss"]),
      p(14, "Krepin Diatta", "AS Monaco", 23, "Forward", "1.75 m", "68 kg", 27, ["diatta"]),
      p(15, "Habib Diallo", "Al Shabab", 15, "Forward", "1.83 m", "75 kg", 32, ["habib diallo"]),
      p(16, "Pape Gueye", "Villarreal", 25, "Midfielder", "1.88 m", "82 kg", 27, ["pape gueye"]),
      p(17, "Ousmane Diomande", "Sporting CP", 26, "Defender", "1.84 m", "79 kg", 22, ["diomande"]),
      p(18, "Formose Mendy", "FC Lorient", 18, "Defender", "1.83 m", "78 kg", 25, ["formose"]),
      p(19, "Nicolas Jackson", "Chelsea", 15, "Forward", "1.87 m", "78 kg", 25, ["jackson"]),
      p(20, "Ismaila Sarr", "Crystal Palace", 7, "Forward", "1.85 m", "75 kg", 28, ["sarr"]),
      p(21, "Moussa Niakhate", "Lyon", 21, "Defender", "1.90 m", "84 kg", 30, ["niakhate"]),
      p(22, "Lamine Camara", "AS Monaco", 22, "Midfielder", "1.76 m", "68 kg", 22, ["lamine"]),
      p(23, "Abdoulaye Ndiaye", "Paris FC", 23, "Defender", "1.85 m", "80 kg", 24),
      p(24, "Mohamed Simakan", "RB Leipzig", 24, "Defender", "1.87 m", "82 kg", 26, ["simakan"]),
      p(25, "Aliou Badji", "FC Sion", 25, "Forward", "1.90 m", "85 kg", 27, ["badji"]),
      p(26, "Cheikh Sarr", "FC Nordsjaelland", 26, "Goalkeeper", "1.88 m", "81 kg", 24),
    ],
  },
  ivorycoast: {
    name: "Costa do Marfim",
    flag: "assets/ivorycoast-flag.svg",
    theme: "ivorycoast",
    quick: [
      ["", "All"],
      ["9", "#9"],
      ["haller", "Haller"],
      ["kessie", "Kessie"],
      ["goalkeeper", "Goalkeepers"],
    ],
    players: [
      p(1, "Yahia Fofana", "Angers", 1, "Goalkeeper", "1.87 m", "80 kg", 26, ["y fofana"]),
      p(2, "Serge Aurier", "Galatasaray", 24, "Defender", "1.76 m", "74 kg", 33, ["aurier"]),
      p(3, "Evan Ndicka", "Roma", 5, "Defender", "1.88 m", "81 kg", 26, ["ndicka"]),
      p(4, "Odilon Kossounou", "Atalanta", 3, "Defender", "1.91 m", "85 kg", 25, ["kossounou"]),
      p(5, "Wilfried Singo", "AS Monaco", 99, "Defender", "1.86 m", "78 kg", 25, ["singo"]),
      p(6, "Willy Boly", "Nottingham Forest", 30, "Defender", "1.95 m", "88 kg", 35, ["boly"]),
      p(7, "Franck Kessie", "Al Ahli", 8, "Midfielder", "1.83 m", "82 kg", 29, ["kessie"]),
      p(8, "Seko Fofana", "Al Nassr", 6, "Midfielder", "1.82 m", "76 kg", 31, ["seko fofana"]),
      p(9, "Sebastien Haller", "Borussia Dortmund", 9, "Forward", "1.90 m", "86 kg", 32, ["haller"]),
      p(10, "Wilfried Zaha", "Galatasaray", 14, "Forward", "1.80 m", "70 kg", 33, ["zaha"]),
      p(11, "Simon Adingra", "Brighton & Hove Albion", 24, "Forward", "1.76 m", "72 kg", 24, ["adingra"]),
      p(12, "Badra Ali Sangare", "Simba SC", 12, "Goalkeeper", "1.86 m", "79 kg", 35, ["sangare"]),
      p(13, "Hamed Traore", "AFC Bournemouth", 22, "Midfielder", "1.77 m", "71 kg", 26, ["hamed traore"]),
      p(14, "Jeremie Boga", "Nice", 7, "Forward", "1.72 m", "67 kg", 29, ["boga"]),
      p(15, "Christian Kouame", "Fiorentina", 99, "Forward", "1.85 m", "78 kg", 28, ["kouame"]),
      p(16, "Charles Foli", "Asante Kotoko", 16, "Goalkeeper", "1.88 m", "82 kg", 27),
      p(17, "Ghislain Konan", "Al Fateh", 17, "Defender", "1.76 m", "73 kg", 30, ["konan"]),
      p(18, "Jean-Philippe Krasso", "Red Star", 14, "Forward", "1.87 m", "81 kg", 28, ["krasso"]),
      p(19, "Nicolas Pepe", "Villarreal", 19, "Forward", "1.83 m", "73 kg", 31, ["pepe"]),
      p(20, "Abakar Sylla", "Strasbourg", 24, "Defender", "1.87 m", "79 kg", 23, ["sylla"]),
      p(21, "Ismael Diallo", "Hajduk Split", 21, "Defender", "1.80 m", "75 kg", 28, ["i diallo"]),
      p(22, "Jean-Daniel Akpa-Akpro", "Monza", 22, "Midfielder", "1.81 m", "77 kg", 33, ["akpa"]),
      p(23, "David Datro Fofana", "Chelsea", 43, "Forward", "1.83 m", "76 kg", 23, ["d fofana", "datro"]),
      p(24, "Oumar Diakite", "Stade de Reims", 22, "Forward", "1.85 m", "80 kg", 22, ["diakite"]),
      p(25, "Christopher Operi", "Le Havre", 25, "Defender", "1.82 m", "76 kg", 26),
      p(26, "Yves Bissouma", "Tottenham Hotspur", 38, "Midfielder", "1.82 m", "78 kg", 29, ["bissouma"]),
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
