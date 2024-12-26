import { NavLink } from "react-router-dom";
import games from "../../assets/games.svg";


const NavBar = () => {
  return (
    <header>
      <div></div>
      <nav>
        <NavLink to="/">
          <img src={games} alt="game logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/tictictoe">TicTocToe</NavLink>
          </li>
          <li>
            <NavLink to="/connectfour">ConnectFour</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;