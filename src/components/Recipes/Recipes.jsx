import RecipeCard from "../RecipeCard/RecipeCard";
import "./Recipes.css";

function Recipes() {
  return (
    <section className="recipes app__section">
      <h2 className="recipes__title">Recipes On The Menu Today</h2>
      <ul className="recipes__card-list">
        <RecipeCard />
        <li className="card">
          <img className="card__image" />
          <div className="card__info">
            <h3 className="card__title">CHIPOTLE BURGER</h3>
            <div className="card__recipe-stats">
              <p className="card__stat">
                Prep Time: <span className="card__stat_bold">30 Min</span>
              </p>
              <p className="card__stat">
                Cost Per Serving ~{" "}
                <span className="card__stat_bold">$9.00</span>
              </p>
              <p className="card__stat">
                Rating - <span className="card__stat_bold">4.8</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Recipes;
