import React, { useState, useRef } from "react";
import "./TicTocToePage.css";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";

type GameData = string[];
type Player = "X" | "O";

const initialData: GameData = ["", "", "", "", "", "", "", "", ""];

const TicTocToePage: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [lock, setLock] = useState<boolean>(false);
  const [data, setData] = useState<GameData>([...initialData]);
  const titleRef = useRef<{ innerHTML: string }>({ innerHTML: "" });

  const toggle = (e: React.MouseEvent<HTMLDivElement>, num: number): void => {
    if (lock || data[num] !== "") {
      return;
    }

    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = "X";
      e.currentTarget.innerHTML = `<img src='${cross_icon}' alt='X' />`;
    } else {
      newData[num] = "O";
      e.currentTarget.innerHTML = `<img src='${circle_icon}' alt='O' />`;
    }

    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const resetGame = (): void => {
    setLock(false);
    setData([...initialData]);
    if (titleRef.current) {
      titleRef.current.innerHTML = `Tic Tac Toe Game in <span>REACT</span>`;
    }
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
  };

  const checkWin = (currentData: GameData): void => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        currentData[a] &&
        currentData[a] === currentData[b] &&
        currentData[a] === currentData[c]
      ) {
        won(currentData[a] as Player);
        return;
      }
    }
  };

  const won = (winner: Player): void => {
    setLock(true);
    if (winner === "X") {
      titleRef.current.innerHTML = `Success: <img src=${cross_icon}> Wins`;
    } else {
      titleRef.current.innerHTML = `Success: <img src=${circle_icon}> Wins`;
    }
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef as React.RefObject<HTMLHeadingElement>}>
        Tic Tac Toe Game in <span>REACT</span>
      </h1>
      
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTocToePage;