import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { mockRecipes } from "../../utils/mockRecipes";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Recipes from "../Recipes/Recipes";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Instructions from "../Instructions/Instructions";
import FavoriteRecipes from "../FavoriteRecipes/FavoriteRecipes";
import ShoppingList from "../ShoppingList/ShoppingList";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Footer from "../Footer/Footer";
import IngredientsModal from "../Modals/IngredientsModal/IngredientsModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [recipes, setRecipes] = useState([]);

  // Open modals
  const handleCardClick = (card) => {
    setActiveModal("ingredients");
    setSelectedCard(card);
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
              <Route index element={<Instructions />} />
              <Route path="instructions" element={<Instructions />} />
              <Route path="favorite-recipes" element={<FavoriteRecipes />} />
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
        />
      </div>
    </HashRouter>
  );
}

export default App;
