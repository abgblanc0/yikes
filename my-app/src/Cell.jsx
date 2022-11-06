import "./style.css";

var turno = true;
const player1 = "https://cdn-icons-png.flaticon.com/512/32/32341.png";
const player2 = "https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png";

function Cell() {
  return (
    <img
      className="cell"
      onClick={function check(e) {
        const btn = e.target;
        btn.src = turno ? player1 : player2;
        turno = !turno;
      }}
    ></img>
  );
}

export default Cell;
