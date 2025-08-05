import { formatPrice } from "../../utils/formatPrice";
import unliked from "../../assets/like-button/default-like.svg";
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
          <button
            className="card__like-button"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleAddFavoriteRecipe(recipe);
            }}
          >
            <img
              className="card__like-icon"
              src={unliked}
              alt="like button"
            ></img>
          </button>
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
            Rating - <span className="card__stat_bold">5.0</span>
          </p>
        </div>
      </div>
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
    </li>
  );
}

export default RecipeCard;
