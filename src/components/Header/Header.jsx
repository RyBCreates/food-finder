import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__menu">
        <Navbar />
        <div className="header__user-info">
          <p className="header__username">Ryan Bommarito</p>
          {/* Make avatar an image tag vvv */}
          <div className="header__avatar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
