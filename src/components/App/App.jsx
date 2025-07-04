import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { mockRecipes } from "../../utils/mockRecipes";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Recipes from "../Recipes/Recipes";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Tutorial from "../Tutorial/Tutorial";
import FavoriteRecipes from "../FavoriteRecipes/FavoriteRecipes";
import ShoppingList from "../ShoppingList/ShoppingList";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Footer from "../Footer/Footer";
import IngredientsModal from "../Modals/IngredientsModal/IngredientsModal";
import InstructionsModal from "../Modals/InstructionsModal/InstructionsModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  // Open Ingredients Modal
  const handleCardClick = (card) => {
    setActiveModal("ingredients");
    setSelectedCard(card);
  };

  // Switch to and from Instructions Modal and Ingredients
  const handleSwitchClick = () => {
    activeModal === "ingredients"
      ? setActiveModal("instructions")
      : setActiveModal("ingredients");
  };

  // Close Modals(global)
  const closeModal = () => {
    setActiveModal("");
  };

  // MOCK GET RECIPES FUNCTION
  const getRecipes = () => {
    return Promise.resolve(mockRecipes);
  };

  // Get Recipe Cards
  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/recipes"
              element={
                <Recipes recipes={recipes} onCardClick={handleCardClick} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<Tutorial />} />
              <Route path="tutorial" element={<Tutorial />} />
              <Route
                path="favorite-recipes"
                element={
                  <FavoriteRecipes
                    recipes={recipes}
                    onCardClick={handleCardClick}
                  />
                }
              />
              <Route path="shopping-list" element={<ShoppingList />} />
              <Route path="profile-settings" element={<ProfileSettings />} />
            </Route>
          </Routes>
          <Footer />
        </div>
        <IngredientsModal
          activeModal={activeModal}
          closeModal={closeModal}
          card={selectedCard}
          handleSwitchClick={handleSwitchClick}
        />
        <InstructionsModal
          activeModal={activeModal}
          closeModal={closeModal}
          card={selectedCard}
          handleSwitchClick={handleSwitchClick}
        />
      </div>
    </HashRouter>
  );
}

export default App;
