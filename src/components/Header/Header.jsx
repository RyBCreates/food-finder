import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__menu">
        {/* Make NavBar Component vvv */}
        <div className="navbar">
          <p className="navbar__link">Recipes</p>
          <p className="navbar__link">About</p>
        </div>
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
