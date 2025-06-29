import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile app__section">
      <div className="profile__user-info-container">
        <img className="profile__avatar" />
        <h2 className="profile__username">Ryan Bommarito</h2>
      </div>
      <div className="profile__content">
        <SideBar />
        <Outlet />
      </div>
    </section>
  );
}

export default Profile;
