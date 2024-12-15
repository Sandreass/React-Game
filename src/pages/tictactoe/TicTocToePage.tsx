import React from "react";
import "./TicTocToePage.css";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";

const TicTocToePage = () => {
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game in <span>REACT</span>
      </h1>
      <div className="board"></div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default TicTocToePage;
