import RecipeCard from "../RecipeCard/RecipeCard";
import "./Recipes.css";

function Recipes({
  onCardClick,
  handleAddFavoriteRecipe,
  handlePass,
  recipe1,
  recipe2,
  passesLeft,
}) {
  return (
    <section className="recipes app__section">
      <h2 className="recipes__title">Recipes On The Menu Today</h2>
      <p className="recipes__passes">Passes left: {passesLeft}</p>
      <ul className="recipes__card-list">
        {recipe1 && recipe2 && (
          <>
            <RecipeCard
              recipe={recipe1}
              onCardClick={onCardClick}
              handleAddFavoriteRecipe={handleAddFavoriteRecipe}
              handlePass={handlePass}
              passesLeft={passesLeft}
            />

            <RecipeCard
              recipe={recipe2}
              onCardClick={onCardClick}
              handleAddFavoriteRecipe={handleAddFavoriteRecipe}
              handlePass={handlePass}
              passesLeft={passesLeft}
            />
          </>
        )}
      </ul>
    </section>
  );
}

export default Recipes;
