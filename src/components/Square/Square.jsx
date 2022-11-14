import "./Square.scss";
import Cross from "../CrossAndCircle/Cross";
import Circle from "../CrossAndCircle/Circle";

function Square({ id, value, handleClick, board }) {
  return (
    <div id={id} onClick={() => handleClick(id)} className="square">
      <div
        className={
          id === board[0] || id === board[1] || id === board[2] ? "changed" : ""
        }
      >
        {value=="X" ? <Cross /> : value == "O" ? <Circle /> : null}
      </div>
    </div>
  );
}

export default Square;
