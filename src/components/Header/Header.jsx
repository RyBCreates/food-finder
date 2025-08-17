import { useContext } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.svg";
import logo from "../../assets/logo-placeholder.svg";
import Navbar from "../Navbar/Navbar";
import AuthButtons from "../AuthButtons/AuthButtons";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";

function Header({ isLoggedIn, handleLoginClick, handleRegisterClick }) {
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
              {currentUser?.username || "New User"}
            </p>
            <div className="header__avatar-wrapper">
              <img
                className={`header__avatar ${
                  currentUser?.avatar && currentUser.avatar !== ""
                    ? ""
                    : "header__avatar_default"
                }`}
                src={currentUser?.avatar || defaultAvatar}
                alt={currentUser?.username || "default avatar"}
              />
            </div>
          </Link>
        </div>
      ) : (
        <div className="header__menu">
          <Navbar />
          <AuthButtons
            handleRegisterClick={handleRegisterClick}
            handleLoginClick={handleLoginClick}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
