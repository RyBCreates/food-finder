import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <Link to="/recipes">
          <li className="navbar__link">Recipes</li>
        </Link>
        <Link to="/about">
          <li className="navbar__link">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
