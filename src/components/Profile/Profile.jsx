import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.svg";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile() {
  const { currentUser } = useContext(CurrentUserContext);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const navigate = useNavigate();

  const hamburgerToggle = () => {
    setIsHamburgerOpen((prev) => !prev);
  };

  return (
    <section className="profile app__section">
      <div className="profile__user-info-container">
        <button
          type="button"
          className="profile__hamburger"
          onClick={() => {
            hamburgerToggle();
          }}
        >
          |||
        </button>
        {isHamburgerOpen && (
          <div className="profile__hamburger-menu">
            <button
              type="button"
              className="profile__hamburger-option"
              onClick={() => {
                navigate("favorite-recipes");
                setIsHamburgerOpen(false);
              }}
            >
              Favorite Recipes
            </button>
            <button
              type="button"
              className="profile__hamburger-option"
              onClick={() => {
                navigate("shopping-list");
                setIsHamburgerOpen(false);
              }}
            >
              Shopping List
            </button>
            <button
              type="button"
              className="profile__hamburger-option"
              onClick={() => {
                navigate("profile-settings");
                setIsHamburgerOpen(false);
              }}
            >
              Profile Settings
            </button>
          </div>
        )}

        <div className="profile__avatar-wrapper">
          <img
            className="profile__avatar"
            src={currentUser?.avatar || defaultAvatar}
            alt={currentUser?.username || "default avatar"}
          />
        </div>
        <h2 className="profile__username">
          {currentUser?.username || "New User"}
        </h2>
      </div>
      <div className="profile__content">
        <div className="profile__sidebar-mobile">
          <SideBar />
        </div>

        <Outlet />
      </div>
    </section>
  );
}

export default Profile;
