import React, { useState } from "react";
import { FullControl } from "../../../sound-players";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import Cell from "./Cell";
import GameOverlay from "./GameOverlay";
import Tile from "./Tile";
import MERGED from "../../../assets/sounds/effect_get_point.mp3";
import useSound from "use-sound";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());
  const [merged] = useSound(MERGED, { volume: 0.5 ,playbackRate: 3 });

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      merged()
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );

      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const resetGame = () => {
    setBoard(new Board());
  };

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile key={index} tile={tile} />;
    });

  return (
    <div>
      <FullControl test="asdfads" />
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          New Game
        </div>
        <div className="score-box">
          <div className="score-header">SCORE</div>
          <div className="score-text">{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  );
};

export default BoardView;
