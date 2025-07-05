import Plus from "../../assets/plus-icon.svg";

import "./Ingredient.css";

function Ingredient({ ingredient, handleAddIngredientClick }) {
  return (
    <li className="ingredient">
      <button
        className="modal__plus-button"
        onClick={() =>
          handleAddIngredientClick(
            ingredient.name,
            `${ingredient.amount} ${ingredient.unit}`
          )
        }
      >
        <img className="modal__plus-icon" src={Plus} alt="plus icon" />
      </button>
      {/* Change this to use {ingredient.original} */}
      <p className="ingredient__name">
        <span className="ingredient__amount">
          {`${ingredient.amount} ${ingredient.unit} `}
        </span>
        {ingredient.name}
      </p>
    </li>
  );
}

export default Ingredient;
