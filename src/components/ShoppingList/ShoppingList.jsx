import { useState } from "react";
import Edit from "../../assets/edit-icon.svg";
import DeleteDefault from "../../assets/delete-button/delete-button-default.svg";
import DeleteHover from "../../assets/delete-button/delete-button-hover.svg";
import "./ShoppingList.css";

function ShoppingList({
  shoppingList,
  handleClearListClick,
  handleAddItemClick,
  handleEditItemClick,
  handleDeleteItemClick,
}) {
  const [deleteHover, setDeleteHover] = useState(null);

  return (
    <section className="shopping-list">
      <div className="shopping-list__header">
        <h2 className="shopping-list__title">INGREDIENTS</h2>
        <button
          className="shopping-list__button shopping-list__button_add"
          type="button"
          onClick={handleAddItemClick}
        >
          Add Item
        </button>
      </div>
      {shoppingList.length === 0 ? (
        <p className="shopping-list__empty-message">
          You currently have no items in your shopping list!
        </p>
      ) : (
        <ul className="shopping-list__list">
          {shoppingList.map((item) => (
            <li className="shopping-list__ingredient" key={item.id}>
              <input className="shopping-list__checkbox" type="checkbox" />
              <p className="shopping-list__ingredient-name">
                {item.amount} {item.name}
              </p>
              <div className="shopping-list__actions">
                <button
                  className="shopping-list__button shopping-list__edit"
                  onClick={() => handleEditItemClick(item)}
                >
                  <img
                    className="shopping-list__edit-icon"
                    src={Edit}
                    alt="Edit icon"
                  ></img>
                </button>
                <button
                  className="shopping-list__button shopping-list__delete"
                  onClick={() => handleDeleteItemClick(item.id)}
                >
                  <img
                    onMouseEnter={() => setDeleteHover(item.id)}
                    onMouseLeave={() => setDeleteHover(null)}
                    className="shopping-list__delete-icon"
                    src={deleteHover === item.id ? DeleteHover : DeleteDefault}
                    alt="delete icon"
                  ></img>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button
        className="shopping-list__button shopping-list__button_clear"
        type="button"
        onClick={handleClearListClick}
      >
        Clear List
      </button>
    </section>
  );
}

export default ShoppingList;
