import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <NavLink
          to="favorite-recipes"
          className={({ isActive }) =>
            `sidebar__link-container ${isActive ? "active" : ""}`
          }
        >
          <li className="sidebar__link">Favorite Recipes</li>
        </NavLink>

        <NavLink
          to="shopping-list"
          className={({ isActive }) =>
            `sidebar__link-container ${isActive ? "active" : ""}`
          }
        >
          <li className="sidebar__link">Shopping List</li>
        </NavLink>

        <NavLink
          to="profile-settings"
          className={({ isActive }) =>
            `sidebar__link-container ${isActive ? "active" : ""}`
          }
        >
          <li className="sidebar__link">Profile Settings</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
