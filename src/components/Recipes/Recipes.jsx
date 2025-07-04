import RecipeCard from "../RecipeCard/RecipeCard";
import "./Recipes.css";

function Recipes({ onCardClick, recipes }) {
  return (
    <section className="recipes app__section">
      <h2 className="recipes__title">Recipes On The Menu Today</h2>
      <ul className="recipes__card-list">
        {/* May be able to refactor the slice when connecting the API */}
        {recipes.slice(0, 2).map((recipe) => {
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

export default Recipes;
