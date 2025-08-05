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
import AddItemModal from "../Modals/AddItemModal/AddItemModal.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [shoppingList, setShoppingList] = useState([]);

  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const [recipe1, setRecipe1] = useState(null);
  const [recipe2, setRecipe2] = useState(null);
  const [passesLeft, setPassesLeft] = useState(25);

  const [currentUser, setCurrentUser] = useState({});

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

  // Open Add Item Modal
  const handleAddItemClick = () => {
    setActiveModal("add-item");
  };

  // Close Modals(global)
  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") closeModal();
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // MOCK BACKEND CALLS vvvv

  // MOCK GET RECIPES FUNCTION
  const getRecipes = () => {
    return Promise.resolve(mockRecipes);
  };

  //
  const updateProfile = ({ name, avatar }) => {
    return Promise.resolve({ name, avatar });
  };

  const fetchNewRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return Promise.resolve(recipes[randomIndex]);
  };

  // MOCK BACKEND CALLS ^^^^

  // Get Initial Recipe Cards
  useEffect(() => {
    const loadInitialRecipes = async () => {
      const recipe1 = await fetchNewRecipe();
      const recipe2 = await fetchNewRecipe();
      setRecipe1(recipe1);
      setRecipe2(recipe2);
    };

    if ((!recipe1 && !recipe2) || recipe1 === recipe2) {
      loadInitialRecipes();
    }
  }, [recipe1, recipe2]);

  // Get Recipe Info
  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  // Add Recipe to Favorites
  const handleAddFavoriteRecipe = (recipe) => {
    const newFavorite = { recipe };

    return setFavoriteRecipes([newFavorite, ...favoriteRecipes]);
  };

  // Add Ingredients from Ingredient Modal to Shopping List
  const handleAddIngredientClick = (name, amount) => {
    const newIngredient = { id: crypto.randomUUID(), name, amount };
    const alreadyExists = shoppingList.some((item) => {
      return (
        item.name.toLowerCase() === name.toLowerCase() && item.amount === amount
      );
    });
    if (alreadyExists) return;
    setShoppingList([newIngredient, ...shoppingList]);
  };

  // Clear Shopping List
  const handleClearListClick = () => {
    setShoppingList([]);
  };

  // Delete an individual Item in the Shopping List
  const handleShoppingListItemDelete = (itemToDelete) => {
    setShoppingList((prevList) =>
      prevList.filter((item) => item.id !== itemToDelete)
    );
  };

  // Update user info
  const updateUser = ({ name, avatar }) => {
    return updateProfile({ name, avatar })
      .then(() => {
        setCurrentUser((prev) => ({
          ...prev,
          name,
          avatar,
        }));
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  // login user
  const handleLogin = () => {};

  // logout user
  const handleLogout = () => {};

  // Pass/Skip Recipe Card
  const handleKeep = (keepIndex) => {
    if (keepIndex === 0 && passesLeft > 0) {
      fetchNewRecipe().then((newRecipe) => {
        if (newRecipe !== recipe1 || recipe2) setRecipe1(newRecipe);
        setPassesLeft((p) => p - 1);
      });
    } else if (keepIndex === 1 && passesLeft > 0) {
      fetchNewRecipe().then((newRecipe) => {
        if (newRecipe !== recipe1 || recipe2) setRecipe2(newRecipe);
        setPassesLeft((p) => p - 1);
      });
    }
  };

  return (
    <HashRouter>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          updateUser,
          handleLogin,
          handleLogout,
        }}
      >
        <div className="app">
          <div className="app__content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/recipes"
                element={
                  <Recipes
                    recipes={recipes}
                    onCardClick={handleCardClick}
                    handleAddFavoriteRecipe={handleAddFavoriteRecipe}
                    handleKeep={handleKeep}
                    recipe1={recipe1}
                    recipe2={recipe2}
                    passesLeft={passesLeft}
                  />
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
                      favoriteRecipes={favoriteRecipes}
                      onCardClick={handleCardClick}
                    />
                  }
                />
                <Route
                  path="shopping-list"
                  element={
                    <ShoppingList
                      shoppingList={shoppingList}
                      handleClearListClick={handleClearListClick}
                      handleAddItemClick={handleAddItemClick}
                      handleDeleteItemClick={handleShoppingListItemDelete}
                    />
                  }
                />
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
            handleAddIngredientClick={handleAddIngredientClick}
          />
          <InstructionsModal
            activeModal={activeModal}
            closeModal={closeModal}
            card={selectedCard}
            handleSwitchClick={handleSwitchClick}
          />
          <AddItemModal
            activeModal={activeModal}
            closeModal={closeModal}
            handleAddIngredientClick={handleAddIngredientClick}
          />
        </div>
      </CurrentUserContext.Provider>
    </HashRouter>
  );
}

export default App;
