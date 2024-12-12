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
      </nav>
    </header>
  );
};

export default NavBar;
