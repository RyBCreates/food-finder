import { useState } from "react";
import Plus from "../../assets/plus-icon.svg";

import "./Ingredient.css";

function Ingredient({ ingredient, handleAddIngredientClick }) {
  const [itemAdded, setItemAdded] = useState(false);

  return (
    <li className="ingredient">
      <button
        className={
          itemAdded ? "modal__plus-button_hidden" : "modal__plus-button"
        }
        onClick={() => {
          handleAddIngredientClick(
            ingredient.name,
            `${ingredient.amount} ${ingredient.unit}`
          );
          setItemAdded(true);
        }}
      >
        <img className="modal__plus-icon" src={Plus} alt="plus icon" />
      </button>
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
