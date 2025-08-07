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
        {favoriteRecipes.length === 0 ? (
          <>
            <p className="favorite-recipes__empty">
              No Recipes Currently Saved
            </p>
          </>
        ) : (
          favoriteRecipes.map((favorite) => {
            return (
              <RecipeCard
                key={favorite._id}
                recipe={favorite}
                onCardClick={onCardClick}
                cardVariant="favorite"
              />
            );
          })
        )}
      </ul>
    </section>
  );
}

export default FavoriteRecipes;
