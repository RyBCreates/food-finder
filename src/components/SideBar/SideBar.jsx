import { Link } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <Link to="favorite-recipes" className="sidebar__link-container">
          <li className="sidebar__link">Favorite Recipes</li>
        </Link>
        <Link to="shopping-list" className="sidebar__link-container">
          <li className="sidebar__link">Shopping List</li>
        </Link>
        <Link to="profile-settings" className="sidebar__link-container">
          <li className="sidebar__link">Profile Settings</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
