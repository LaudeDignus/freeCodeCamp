const headCoach = document.getElementById("team-stats__head-coach");
const team = document.getElementById("team-stats__team");
const year = document.getElementById("team-stats__year");
const players = document.getElementById("player-cards");
const optionPlayer = document.getElementById("players");

const footballTeam = {
  team: "Dream Team",
  year: 2018,
  headCoach: "Mourinho",
  players: [
    {
      name: "Messi",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Ramos",
      position: "defender",
      isCaptain: true,
    },
    {
      name: "Ozil",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Nuer",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

headCoach.innerText = footballTeam.headCoach;
team.innerText = footballTeam.team;
year.innerText = footballTeam.year;
const allPlayers = createPlayerCard(footballTeam.players);

function createPlayerCard(players) {
  return players.map(
    (player) => `
    <div class="cards__player-card">
    <h2>${player.isCaptain ? "(Captain)" : ""} ${player.name}</h2>
    <p>Position: ${player.position}</p>
    </div>
    `
  );
}

players.innerHTML = allPlayers;

optionPlayer.addEventListener("change", (e) => {
  if (e.target.value == "all") {
    players.innerHTML = createPlayerCard(footballTeam.players);
  } else {
    const filterPlayer = footballTeam.players.filter(
      (player) => player.position === e.target.value
    );
    players.innerHTML = createPlayerCard(filterPlayer);
  }
});
