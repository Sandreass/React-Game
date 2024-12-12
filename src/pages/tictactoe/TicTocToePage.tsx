import "./TicTocToePage.module.css";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";

const TicTocToePage = () => {
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game in <span>REACT</span>
        <div className="board"></div>
      </h1>
    </div>
  );
};

export default TicTocToePage;
