import FilterMenu from "../FilterMenu/FilterMenu";
import SearchBar from "../SearchBar/SearchBar";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./FavoriteRecipes.css";

function FavoriteRecipes({ recipes, onCardClick }) {
  return (
    <section className="favorite-recipes">
      <div className="favorite-recipes__filters">
        <SearchBar />
        <FilterMenu />
      </div>
      <ul className="favorite-recipes__list">
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default FavoriteRecipes;
