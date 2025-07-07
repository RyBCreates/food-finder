import { useContext } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.svg";
import Navbar from "../Navbar/Navbar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";

function Header() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__menu">
        <Navbar />
        <Link className="header__user-info" to="/profile">
          <p className="header__username">{currentUser?.name}</p>
          <div className="header__avatar-wrapper">
            <img
              className="header__avatar"
              src={currentUser?.avatar || defaultAvatar}
              alt={currentUser?.name || "default avatar"}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
