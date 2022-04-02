//                                              0  1  2
//                                              3  4  5
//                                              6  7  8
//  Tris win
//  048
//  246
//  036
//  147
//  258
//  012
//  345
//  678
// -----------------------------------------Variabili

// Genera array dei box div box[Giocatore][posizione div]
//giocatore 1 = [1][posizione div]
//giocatore 2 = [2][posizione div]

let table = new Array(9);
let clone = [...table];

// -1 represents empty cell
for (let i = 0; i < 9; i++) table[i] = -1;

let restartBtn = document.getElementById("restartBtn");
let numCells = 9;
var username = sessionStorage.getItem("username");
var color = sessionStorage.getItem("colore");

document.getElementById("user").innerText = username;

document.body.style.backgroundColor = color;

function playerWin() {
  document.getElementById("labelTurni").innerText =
    "Vincitore Giocatore:" + turn;
}

const indexCheck = (table, player, index) => table[index] == player;

function horizontalCheck(table, player) {
  let isPlayerWin = false;
  let check = (index) => indexCheck(table, player, index);

  for (let i = 0; i < 9 && !isPlayerWin; i += 3) {
    isPlayerWin = check(i) && check(i + 1) && check(i + 2);
  }

  return isPlayerWin;
}

function verticalCheck(table, player) {
  let isPlayerWin = false;
  let check = (index) => indexCheck(table, player, index);

  for (let i = 0; i < 3 && !isPlayerWin; i++) {
    isPlayerWin = check(i) && check(i + 3) & check(i + 6);
  }

  return isPlayerWin;
}

const diagonalsCheck = [
  (table, player) =>
    indexCheck(table, player, 0) &&
    indexCheck(table, player, 4) &&
    indexCheck(table, player, 8),
  (table, player) =>
    indexCheck(table, player, 0) &&
    indexCheck(table, player, 4) &&
    indexCheck(table, player, 6),
];

/*
function diagonalsCheck(table, player) {
  let check = (index) => indexCheck(table, player, index);

  return (check(0) && check(4) && check(8)) ||
         (check(2) && check(4) && check(6));
}
*/

let checks = [horizontalCheck, verticalCheck].concat(diagonalsCheck);

const checkWin = (table, player) =>
  checks.reduce((isWin, check) => isWin || check(table, player), false);

// Cambio turno fra players
function playerClick(cell) {
  document.getElementById("labelTurni").innerText =
    color + "Turno del Giocatore:"; //Cambio label turni

  table[cell] = 1;

  playerOne(cell);

  if (checkWin(table, 1)) {
    playerWin();
  }

  const moves = [];

  for (let i = 0; i < 9; i++) {
    if (table[i] == -1) {
      moves.push({
        score: IA(table, i, opponent),
        move: i,
      });
    }
  }

  let bestMove = moves.reduce((a, b) => (a.score > b.score ? a : b), {
    score: -Infinity,
    move: -1,
  });

  const { move } = bestMove

  table[move] = 2;

  playerTwo(move);
}

function moveIA(win, color) {
  document.getElementById(win).style.backgroundColor = color;
}

var player = 1;
var opponent = 2;

function IA(table, move, player) {
  return 1;
}

function checkSpam(casellaCliccata) {
  for (i = 0; i < numCells; i++) {
    document.getElementById(casellaCliccata).onclick = "";
  }
}

//  Ogni player scrive su una cella e non può ricliccaci se già selezionata
function playerOne(cell) {
  checkSpam(cell);
  writeCell(cell, 1);
}

function playerTwo(cell) {
  checkSpam(cell);
  writeCell(cell, 2);
}

// Al click scrive una X/O nelle celle
function writeCell(cell, player) {
  if (player == 1) {
    document.getElementById(cell).innerText = "X";
  } else {
    document.getElementById(cell).innerText = "O";
  }
}

// Al click del button restart, azzera il gioco
restartBtn.addEventListener("click", function () {
  for (i = 0; i < numCells; i++) {
    document.getElementById(i).innerHTML = "";
  }
  boxRestart();
});
