import Cell from "./Cell";
import { useState } from "react";

function Tictac() {
  var [turn, setTurn] = useState(true);
  return (
    <>
      <div className="board">
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
        <Cell turn={turn} setTurn={setTurn} />
      </div>
      <center> Es el turno del Jugador {turn ? 1 : 2}</center>
    </>
  );
}

export default Tictac;
