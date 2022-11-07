const player1 = "https://cdn-icons-png.flaticon.com/512/32/32341.png";
const player2 =
  "https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png";

function Cell({ turn, setTurn }) {
  return (
    <img
      className="cell"
      onClick={function check(e) {
        console.log(turn);
        const btn = e.target;
        if (btn.src === "") {
          btn.src = turn ? player1 : player2;
        }
        setTurn(!turn);
      }}
    ></img>
  );
}

export default Cell;
