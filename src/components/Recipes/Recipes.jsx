import RecipeCard from "../RecipeCard/RecipeCard";
import "./Recipes.css";

function Recipes({
  onCardClick,
  handleAddFavoriteRecipe,
  handleKeep,
  recipe1,
  recipe2,
  passesLeft,
}) {
  return (
    <section className="recipes app__section">
      <h2 className="recipes__title">Recipes On The Menu Today</h2>
      <ul className="recipes__card-list">
        {recipe1 && recipe2 && (
          <div className="recipe-choice">
            <RecipeCard
              recipe={recipe1}
              onCardClick={onCardClick}
              handleAddFavoriteRecipe={handleAddFavoriteRecipe}
            />
            <button onClick={() => handleKeep(0)} disabled={passesLeft === 0}>
              Keep Left
            </button>

            <RecipeCard
              recipe={recipe2}
              onCardClick={onCardClick}
              handleAddFavoriteRecipe={handleAddFavoriteRecipe}
            />
            <button onClick={() => handleKeep(1)} disabled={passesLeft === 0}>
              Keep Right
            </button>

            <p>Passes left: {passesLeft}</p>
          </div>
        )}
        {/* {recipes.slice(0, 2).map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onCardClick={onCardClick}
              handleAddFavoriteRecipe={handleAddFavoriteRecipe}
            />
          );
        })} */}
      </ul>
    </section>
  );
}

export default Recipes;
