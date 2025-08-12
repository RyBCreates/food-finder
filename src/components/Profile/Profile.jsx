import { useContext } from "react";
import { Outlet } from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.svg";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <section className="profile app__section">
      <div className="profile__user-info-container">
        <button type="button" className="profile__hamburger">
          |||
        </button>

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
