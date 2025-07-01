import SearchIcon from "../../assets/search.svg";
import FilterMenu from "../FilterMenu/FilterMenu";
import "./FavoriteRecipes.css";

function FavoriteRecipes() {
  return (
    <section className="favorite-recipes">
      <div className="favorite-recipes__filters">
        {/* Add SearchBar Component vvv */}
        <div className="search-bar">
          <img
            className="search-bar__icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input
            className="search-bar__input"
            placeholder="Find A Recipe"
          ></input>
          <button className="search-bar__submit-button">SEARCH</button>
        </div>
        <FilterMenu />
      </div>
      {/* Add Favorite Recipe Card Component */}

      <div className="fave-recipe-card"></div>
    </section>
  );
}

export default FavoriteRecipes;
