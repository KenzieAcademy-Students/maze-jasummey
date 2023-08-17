const mazeMapSample = [
  // FOR TESTING PURPOSES ONLY. Don't use this map
  "WWWWWWW", // as one of the choices in your game.
  "S W   W",
  "W W W W",
  "W   W F",
  "WWWWWWW",
];

const mazeMap1 = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W   W",
  "W W W WWW WWWWW W WWW",
  "W W W  W      W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

const sokobanMapSample = [
  // FOR TESTING PURPOSES ONLY. Don't use this map
  " WWWWWW ", // as one of the choices in your game.
  " WO   WW",
  "WWW C  W",
  "WSX    W",
  "WWWWWWWW",
];

const sokobanMap1 = [
  "  WWWWW ",
  "WWW   W ",
  "WOSC  W ",
  "WWW COW ",
  "WOWWC W ",
  "W W O WW",
  "WC XCCOW",
  "W   O  W",
  "WWWWWWWW",
];

// Your Code Here.

// Select maze map based on user's choice
const mazeSelect = document.getElementById("mazeSelect");
const startButton = document.getElementById("startButton");
const mazeContainer = document.getElementById("maze");

let mazeLayout = mazeMap1;
let playerPosition = { row: 0, col: 0 };

function renderMaze() {
  mazeContainer.innerHTML = "";
  for (let row = 0; row < mazeLayout.length; row++) {
    for (let col = 0; col < mazeLayout[row].length; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      if (mazeLayout[row][col] === "W") {
        cell.classList.add("wall");
      } else if (mazeLayout[row][col] === " ") {
        cell.classList.add("floor");
      } else if (mazeLayout[row][col] === "S") {
        cell.classList.add("start");
        playerPosition.row = row;
        playerPosition.col = col;
      } else if (mazeLayout[row][col] === "F") {
        cell.classList.add("finish");
      }
      mazeContainer.appendChild(cell);
    }
  }
  updatePlayerPosition();
}

function updatePlayerPosition() {
  const playerCell =
    mazeContainer.children[
      playerPosition.row * mazeLayout[0].length + playerPosition.col
    ];
  playerCell.classList.add("player");
}

function removePlayerPosition() {
  const playerCell =
    mazeContainer.children[
      playerPosition.row * mazeLayout[0].length + playerPosition.col
    ];
  playerCell.classList.remove("player");
}

function movePlayer(direction) {
  const newRow = playerPosition.row + direction.row;
  const newCol = playerPosition.col + direction.col;

  if (
    newRow >= 0 &&
    newRow < mazeLayout.length &&
    newCol >= 0 &&
    newCol < mazeLayout[0].length &&
    mazeLayout[newRow][newCol] !== "W"
  ) {
    removePlayerPosition();
    playerPosition.row = newRow;
    playerPosition.col = newCol;
    updatePlayerPosition();

    if (mazeLayout[newRow][newCol] === "F") {
      displayWinMessage();
    }
  }
}

function displayWinMessage() {
  const message = document.createElement("div");
  message.textContent = "Congratulations! You've completed the maze!";
  message.style.color = "green";
  mazeContainer.appendChild(message);
}

startButton.addEventListener("click", () => {
  if (mazeSelect.value === "maze1") {
    mazeLayout = mazeMap1;
  } else if (mazeSelect.value === "maze2") {
    mazeLayout = mazeMap2;
  }
  renderMaze();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    movePlayer({ row: -1, col: 0 });
  } else if (event.key === "ArrowDown") {
    movePlayer({ row: 1, col: 0 });
  } else if (event.key === "ArrowLeft") {
    movePlayer({ row: 0, col: -1 });
  } else if (event.key === "ArrowRight") {
    movePlayer({ row: 0, col: 1 });
  }
});

renderMaze();
