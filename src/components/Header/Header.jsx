import { useContext } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.svg";
import logo from "../../assets/logo-placeholder.svg";
import Navbar from "../Navbar/Navbar";
import AuthButtons from "../AuthButtons/AuthButtons";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";

function Header({ isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="food finder logo"></img>
      </Link>
      {isLoggedIn ? (
        <div className="header__menu">
          <Navbar />
          <Link className="header__user-info" to="/profile">
            <p className="header__username">
              {currentUser?.name || "New User"}
            </p>
            <div className="header__avatar-wrapper">
              <img
                className="header__avatar"
                src={currentUser?.avatar || defaultAvatar}
                alt={currentUser?.name || "default avatar"}
              />
            </div>
          </Link>
        </div>
      ) : (
        <div className="header__menu">
          <Navbar />
          <AuthButtons />
        </div>
      )}
    </header>
  );
}

export default Header;
