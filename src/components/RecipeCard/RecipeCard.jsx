import "./RecipeCard.css";

function RecipeCard({ recipe, onCardClick }) {
  return (
    <li className="card" onClick={() => onCardClick(recipe)}>
      <img className="card__image" src={recipe.image} alt={recipe.title} />
      <div className="card__info">
        <h3 className="card__title">{recipe.title}</h3>
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
              ${`${recipe.pricePerServing}`}
            </span>
          </p>
          <p className="card__stat">
            Rating - <span className="card__stat_bold">5.0</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default RecipeCard;
