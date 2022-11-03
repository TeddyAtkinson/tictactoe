function Player(playerTurn, playerSymbol) {
  this.playerTurn = playerTurn;
  this.playerSymbol = playerSymbol;
}

const player1 = new Player(true, 'X');
const player2 = new Player(false, 'O');

console.log(player1, player2);

Player.prototype.turn = function () {
  if (playerTurn) {
    Player.player1.playerTurn
  }
  else (playerTurn)
}

function xoInput() {

}

function winCon() {
  const $grid = $("#grid").children();
  if ()
}

window.addEventListener("load", function (event) {
  event.preventDefault();
  const grid = document.getElementById("grid");
  grid.addEventListener("click", xoInput);
});