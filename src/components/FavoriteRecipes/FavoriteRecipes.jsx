import FilterMenu from "../FilterMenu/FilterMenu";
import SearchBar from "../SearchBar/SearchBar";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./FavoriteRecipes.css";

function FavoriteRecipes() {
  return (
    <section className="favorite-recipes">
      <div className="favorite-recipes__filters">
        <SearchBar />
        <FilterMenu />
      </div>
      <ul className="favorite-recipes__list">
        {/* <RecipeCard
          key={recipe._id}
          recipe={recipe}
          onCardClick={onCardClick}
        /> */}
      </ul>
    </section>
  );
}

export default FavoriteRecipes;
