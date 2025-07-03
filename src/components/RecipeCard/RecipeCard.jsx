import Fettucine from "../../assets/recipe-images/fettucine-alfredo.jpeg";

import "./RecipeCard.css";

function RecipeCard({ recipe, onCardClick }) {
  return (
    <li className="card" onClick={() => onCardClick(recipe)}>
      <img className="card__image" src={Fettucine} alt="Fettucine Alfredo" />
      <div className="card__info">
        <h3 className="card__title">{recipe.name}</h3>
        <div className="card__recipe-stats">
          <p className="card__stat">
            Prep Time: <span className="card__stat_bold">20 Min</span>
          </p>
          <p className="card__stat">
            Cost Per Serving ~ <span className="card__stat_bold">$5.00</span>
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
