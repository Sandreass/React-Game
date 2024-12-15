import React, { useState } from "react";
import "./TicTocToePage.css";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";

type GameData = string[];

const initialData: GameData = ["", "", "", "", "", "", "", "", ""];

const TicTocToePage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const [lock, setLock] = useState<boolean>(false);

  const [data, setData] = useState<GameData>([...initialData]);

  const toggle = (e: React.MouseEvent<HTMLDivElement>, num: number): void => {
    if (lock || data[num] !== "") {
      return;
    }

    const newData = [...data];
    if (count % 2 === 0) {
      e.currentTarget.innerHTML = `<img src='${cross_icon}' alt='X' />`;
      newData[num] = "X";
    } else {
      e.currentTarget.innerHTML = `<img src='${circle_icon}' alt='O' />`;
      newData[num] = "O";
    }

    setData(newData);
    setCount(count + 1);
  };

  const resetGame = (): void => {
    setData([...initialData]);
    setCount(0);
    setLock(false);

    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <h1 className="title">
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
