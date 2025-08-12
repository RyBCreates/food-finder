import "./Tutorial.css";

function Tutorial() {
  return (
    <section className="tutorial">
      <h1 className="tutorial__title">Welcome to Food Finder</h1>
      <p className="tutorial__intro">
        Here's a quick guide to help you get started:
      </p>
      <ul className="tutorial__steps">
        <li className="tutorial__step">
          <span className="tutorial__step_bold">Search Recipes:</span> Use the
          search bar on the Favorite Recipes page to find saved recipes by name.
        </li>
        <li className="tutorial__step">
          <span className="tutorial__step_bold">Save Favorites:</span> Click the
          "SAVE" button to save recipes to your favorites list.
        </li>
        <li className="tutorial__step">
          <span className="tutorial__step_bold">Create a Shopping List:</span>{" "}
          Add ingredients from any recipe to your shopping list.
        </li>
        <li className="tutorial__step">
          <span className="tutorial__step_bold">Plan Your Meals:</span> Use the
          upcoming calendar feature to organize weekly meals.
        </li>
      </ul>
      <p className="tutorial__footer">
        Ready? Head to the Recipes tab and start exploring!
      </p>
    </section>
  );
}

export default Tutorial;
