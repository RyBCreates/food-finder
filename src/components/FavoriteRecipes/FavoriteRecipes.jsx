import FilterMenu from "../FilterMenu/FilterMenu";
import SearchBar from "../SearchBar/SearchBar";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./FavoriteRecipes.css";

function FavoriteRecipes({ onCardClick, favoriteRecipes }) {
  return (
    <section className="favorite-recipes">
      <div className="favorite-recipes__filters">
        <SearchBar />
        <FilterMenu />
      </div>
      <ul className="favorite-recipes__list">
        {favoriteRecipes.map((favorite) => {
          return (
            <RecipeCard
              key={favorite.id}
              recipe={favorite}
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default FavoriteRecipes;
