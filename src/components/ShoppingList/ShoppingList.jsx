import "./ShoppingList.css";

function ShoppingList({ shoppingList }) {
  return (
    <section className="shopping-list">
      <div className="shopping-list__header">
        <h2 className="shopping-list__title">INGREDIENTS</h2>
        <button
          className="shopping-list__button shopping-list__button_add"
          type="button"
        >
          Add Item
        </button>
      </div>
      <ul className="shopping-list__list">
        {shoppingList.map((item, index) => (
          <li className="shopping-list__ingredient" key={index}>
            <input className="shopping-list__checkbox" type="checkbox"></input>
            <p className="shopping-list__ingredient-name">
              {item.amount} {item.name}
            </p>
          </li>
        ))}

        <li className="shopping-list__ingredient">
          <input className="shopping-list__checkbox" type="checkbox"></input>
          <p className="shopping-list__ingredient-name">Alfredo Sauce</p>
        </li>
        <li className="shopping-list__ingredient">
          <input className="shopping-list__checkbox" type="checkbox"></input>
          <p className="shopping-list__ingredient-name">Beef</p>
        </li>
      </ul>
      <button
        className="shopping-list__button shopping-list__button_clear"
        type="button"
      >
        Clear List
      </button>
    </section>
  );
}

export default ShoppingList;
