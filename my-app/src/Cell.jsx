const player1 = "https://cdn-icons-png.flaticon.com/512/32/32341.png";
const player2 =
  "https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png";
const gameState = ["", "", "", "", "", "", "", "", ""];
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
];

var win = false;

function Cell({ turn, setTurn }) {
  return (
    <img
      className="cell"
      alt=""
      onClick={function game(e) {
        if (!win) {
          const btn = e.target;
          if (btn.src === "") {
            btn.src = turn ? player1 : player2;
          }
          setTurn(!turn);
          Array.from(document.getElementById("board").children).forEach(
            (child, index) => {
              if (child.currentSrc === player1) gameState[index] = "o";
              if (child.currentSrc === player2) gameState[index] = "*";
            }
          );
          checkWin(turn);
        }
      }}
    ></img>
  );
}

function checkWin(turn) {
  for (let i = 0; i < winCondition.length; i++) {
    let pos1 = gameState[winCondition[i][0]];
    let pos2 = gameState[winCondition[i][1]];
    let pos3 = gameState[winCondition[i][2]];
    if (pos1 === pos2 && pos2 === pos3 && pos3 !== "") {
      win = !win;
      alert(turn ? "Has ganado Jugador 1 " : "Has ganado Jugador 2");
      let newbutton = document.createElement("button");
      let node = document.getElementById("root");
      newbutton.appendChild(document.createTextNode("Reiniciar"));
      newbutton.onclick = function () {
        document.location.reload();
      };
      node.appendChild(newbutton);
    }
  }
}
export default Cell;
