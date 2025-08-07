import { formatPrice } from "../../utils/formatPrice";
import "./RecipeCard.css";

function RecipeCard({
  recipe,
  onCardClick,
  handleAddFavoriteRecipe,
  handleKeep,
  passesLeft,
}) {
  return (
    <li className="card" onClick={() => onCardClick(recipe)}>
      <img className="card__image" src={recipe.image} alt={recipe.title} />
      <div className="card__info">
        <div className="card__header">
          <h3 className="card__title">{recipe.title}</h3>
        </div>
        <div className="card__recipe-stats">
          <p className="card__stat">
            Prep Time:
            <span className="card__stat_bold">
              {` ${recipe.readyInMinutes}`} Min
            </span>
          </p>
          <p className="card__stat">
            Cost Per Serving ~{" "}
            <span className="card__stat_bold">
              ${`${formatPrice(recipe.pricePerServing)}`}
            </span>
          </p>
          <p className="card__stat">
            Likes -{" "}
            <span className="card__stat_bold">{recipe.aggregateLikes}</span>
          </p>
        </div>
      </div>
      <div className="card__buttons-container">
        <button
          className="card__save-button"
          onClick={(e) => {
            const userId = "64f55d3ea2ceff749c82031e";
            e.stopPropagation();
            handleAddFavoriteRecipe(userId, recipe);
          }}
        >
          SAVE
        </button>
        <button
          className="card__pass-button"
          onClick={(e) => {
            e.stopPropagation();
            handleKeep(0);
          }}
          disabled={passesLeft === 0}
        >
          PASS
        </button>
      </div>
    </li>
  );
}

export default RecipeCard;
