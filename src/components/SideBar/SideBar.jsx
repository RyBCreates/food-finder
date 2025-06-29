import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__link">Favorite Recipes</li>
        <li className="sidebar__link">Shopping List</li>
        <li className="sidebar__link sidebar__link_bottom">Profile Settings</li>
      </ul>
    </div>
  );
}

export default SideBar;
