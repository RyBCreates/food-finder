import "./ShoppingList.css";

function ShoppingList() {
  return (
    <section className="shopping-list">
      <h2 className="shopping-list__title">INGREDIENTS</h2>
      <ul className="shopping-list__list">
        <li className="shopping-list__ingredient">
          <input className="shopping-list__checkbox" type="checkbox"></input>
          <p className="shopping-list__ingredient-name">Noodles</p>
        </li>
        <li className="shopping-list__ingredient">
          <input className="shopping-list__checkbox" type="checkbox"></input>
          <p className="shopping-list__ingredient-name">Alfredo Sauce</p>
        </li>
        <li className="shopping-list__ingredient">
          <input className="shopping-list__checkbox" type="checkbox"></input>
          <p className="shopping-list__ingredient-name">Beef</p>
        </li>
      </ul>
    </section>
  );
}

export default ShoppingList;
