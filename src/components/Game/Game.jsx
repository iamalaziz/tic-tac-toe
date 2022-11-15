import { useState } from "react";
import Board from "../Board/Board";
import Scores from "../Scores/Scores";
import "./Game.scss";

function Game() {
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });

  return (
    <div className="Game">
      <Board setScores={setScores} />
      <div>Hello</div>
      <Scores scores={scores} />
    </div>
  );
}

export default Game;
