import React, { useState } from "react";
import styles from "./ConnectFour.module.css";

type Player = "Red" | "Yellow";
type Board = (Player | null)[][];

const ROWS = 6;
const COLUMNS = 7;

const createEmptyBoard = (): Board => {
  return Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));
};

const ConnectFour: React.FC = () => {
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>("Red");
  const [winner, setWinner] = useState<Player | null>(null);

  const dropDisc = (column: number): void => {
    if (winner) return;

    const newBoard = board.map((row) => [...row]);

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][column]) {
        newBoard[row][column] = currentPlayer;
        setBoard(newBoard);
        checkWinner(newBoard, row, column);
        setCurrentPlayer(currentPlayer === "Red" ? "Yellow" : "Red");
        return;
      }
    }
  };

  const checkWinner = (board: Board, row: number, column: number): void => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];

    for (const [dx, dy] of directions) {
      let count = 1;

      for (let step = 1; step < 4; step++) {
        const newRow = row + step * dx;
        const newCol = column + step * dy;
        if (
          newRow >= 0 &&
          newRow < ROWS &&
          newCol >= 0 &&
          newCol < COLUMNS &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
        } else {
          break;
        }
      }

      for (let step = 1; step < 4; step++) {
        const newRow = row - step * dx;
        const newCol = column - step * dy;
        if (
          newRow >= 0 &&
          newRow < ROWS &&
          newCol >= 0 &&
          newCol < COLUMNS &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
        } else {
          break;
        }
      }

      if (count >= 4) {
        setWinner(currentPlayer);
        return;
      }
    }
  };

  const resetGame = (): void => {
    setBoard(createEmptyBoard());
    setCurrentPlayer("Red");
    setWinner(null);
  };

  return (
    <div className={styles.connectFour}>
      <h1 className={styles.h1}>Connect Four</h1>
      {winner ? (
        <h2 className={styles.winner}>{winner} Wins!</h2>
      ) : (
        <h2 className={styles.turn}>{currentPlayer}'s Turn</h2>
      )}
      <div className={styles.board}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`${styles.cell} ${cell ? styles[cell.toLowerCase()] : ""}`}
                onClick={() => dropDisc(colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button className={styles.reset} onClick={resetGame} disabled={!winner}>
        Reset
      </button>
    </div>
  );
};

export default ConnectFour;
