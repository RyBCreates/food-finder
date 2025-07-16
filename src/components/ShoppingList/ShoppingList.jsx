import Edit from "../../assets/edit-icon.svg";
import Delete from "../../assets/close-button.svg";
import "./ShoppingList.css";

function ShoppingList({
  shoppingList,
  handleClearListClick,
  handleAddItemClick,
  handleDeleteItemClick,
  handleEditItemClick,
}) {
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
          {shoppingList.map((item, index) => (
            <li className="shopping-list__ingredient" key={index}>
              <input className="shopping-list__checkbox" type="checkbox" />
              <p className="shopping-list__ingredient-name">
                {item.amount} {item.name}
              </p>
              <div className="shopping-list__actions">
                <button
                  className="shopping-list__button shopping-list__edit"
                  onClick={() => handleEditItemClick(index)}
                >
                  <img
                    className="shopping-list__edit-icon"
                    src={Edit}
                    alt="Edit icon"
                  ></img>
                </button>
                <button
                  className="shopping-list__button shopping-list__delete"
                  onClick={() => handleDeleteItemClick(index)}
                >
                  <img
                    className="shopping-list__delete-icon"
                    src={Delete}
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
