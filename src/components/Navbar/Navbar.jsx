import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <Link to="/recipes" className="navbar__link-container">
          <li className="navbar__link">Recipes</li>
        </Link>
        <Link to="/about" className="navbar__link-container">
          <li className="navbar__link">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
