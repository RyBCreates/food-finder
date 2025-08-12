import AuthButtons from "../AuthButtons/AuthButtons";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./Recipes.css";

function Recipes({
  onCardClick,
  handleAddFavoriteRecipe,
  handlePass,
  recipe1,
  recipe2,
  passesLeft,
  isLoggedIn,
  handleLoginClick,
  handleRegisterClick,
}) {
  return (
    <section className="recipes app__section">
      <h2 className="recipes__title">Recipes On The Menu Today</h2>
      {isLoggedIn ? (
        <>
          <p className="recipes__passes">Passes left: {passesLeft}</p>
          <ul className="recipes__card-list">
            {recipe1 && recipe2 && (
              <>
                <RecipeCard
                  recipe={recipe1}
                  onCardClick={onCardClick}
                  handleAddFavoriteRecipe={handleAddFavoriteRecipe}
                  handlePass={() => handlePass(0)}
                  passesLeft={passesLeft}
                />

                <RecipeCard
                  recipe={recipe2}
                  onCardClick={onCardClick}
                  handleAddFavoriteRecipe={handleAddFavoriteRecipe}
                  handlePass={() => handlePass(1)}
                  passesLeft={passesLeft}
                />
              </>
            )}
          </ul>
        </>
      ) : (
        <>
          <p>
            To Enjoy fresh new Recipes everyday, create an account or Sign in!
          </p>
          <AuthButtons
            handleLoginClick={handleLoginClick}
            handleRegisterClick={handleRegisterClick}
          />
        </>
      )}
    </section>
  );
}

export default Recipes;
