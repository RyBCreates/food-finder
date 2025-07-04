import { formatPrice } from "../../../utils/formatPrice";
import Close from "../../../assets/close-button.svg";
import RightArrow from "../../../assets/right-arrow.svg";
import Ingredient from "../../Ingredient/Ingredient";
import "./IngredientsModal.css";
import "../Modals.css";

function IngredientsModal({
  activeModal,
  closeModal,
  card,
  handleSwitchClick,
}) {
  return (
    <div className={`modal ${activeModal === "ingredients" && "modal_opened"}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img className="modal__close-icon" src={Close} alt="close icon" />
        </button>
        <h2 className="modal__recipe-title">{card?.title || "Recipe"}</h2>
        <div className="modal__recipe-stats">
          <p className="modal__recipe-stat">
            Prep Time:{" "}
            <span className="modal__recipe-stat_bold">
              {card?.readyInMinutes} Min
            </span>
          </p>
          <p className="modal__recipe-stat">
            Cost Per Serving ~{" "}
            <span className="modal__recipe-stat_bold">
              ${formatPrice(card?.pricePerServing)}
            </span>
          </p>
          <p className="modal__recipe-stat">
            Rating - <span className="modal__recipe-stat_bold">5.0</span>
          </p>
        </div>
        <div className="modal__ingredients-header">
          <h3 className="modal__ingredients-title">Ingredients</h3>
          <p className="modal__ingredients-description">
            (Click the plus icon to add ingredients to your shopping list)
          </p>
        </div>
        <ol className="modal__ingredients-list">
          {card?.extendedIngredients?.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient} />
          ))}
        </ol>
        <button
          className="modal__switch-button modal__switch-button_ingredients"
          type="button"
          onClick={handleSwitchClick}
        >
          Checkout the Recipe
          <img
            className="modal__arrow_right"
            src={RightArrow}
            alt="Right Arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default IngredientsModal;
