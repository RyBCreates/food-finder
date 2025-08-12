import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { mockRecipes } from "../../utils/mockRecipes";
import { fetchRandomRecipe } from "../../utils/Api/recipesApi.js";
import { addFavorite } from "../../utils/favoriteRecipesApi.js";

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
import LoginModal from "../Modals/LoginModal/LoginModal.jsx";
import RegisterModal from "../Modals/RegisterModal/RegisterModal.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import "./App.css";

function App() {
  // CHANGE THIS ONCE USER AUTH IS ADDED
  const userId = "64f55d3ea2ceff749c82031e";

  const [activeModal, setActiveModal] = useState("");

  const [cardVariant, setCardVariant] = useState("default");

  const [selectedCard, setSelectedCard] = useState(null);
  const [shoppingList, setShoppingList] = useState([]);

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const [recipe1, setRecipe1] = useState(null);
  const [recipe2, setRecipe2] = useState(null);

  // Adjust the number here for testing purposes Set to 3 for Deployment
  const [passesLeft, setPassesLeft] = useState(3);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // CHECK FOR TOKEN TO LOGIN USER
  // useEffect(() => {
  //   try {
  //     setIsLoggedIn(true);
  //   } catch (err) {
  //     console.error("Could not log user in", err);
  //   }
  // }, []);

  // Open Login Modal
  const handleLoginClick = () => {
    // setActiveModal("login");
    setIsLoggedIn(true);
  };

  // Open Register Modal
  const handleRegisterClick = () => {
    setActiveModal("register");
  };

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

  const updateProfile = ({ name, avatar }) => {
    return Promise.resolve({ name, avatar });
  };

  // IF OUT OF API CALLS, USE THIS FUNCTION
  const getRecipe = async () => {
    const randomIndex = Math.floor(Math.random() * mockRecipes.length);
    return Promise.resolve(mockRecipes[randomIndex]);
  };

  // MOCK BACKEND CALLS ^^^^

  // REAL API CALLS
  // const getRecipe = async () => {
  //   return await fetchRandomRecipe();
  // };

  // Get Initial Recipe Cards
  useEffect(() => {
    const loadInitialRecipes = async () => {
      try {
        const first = await getRecipe();
        let second = await getRecipe();

        while (second.id === first.id) {
          second = await getRecipe();
        }
        setRecipe1(first);
        setRecipe2(second);
      } catch (err) {
        console.error("Failed to load initial recipes:", err);
      }
    };

    if (!recipe1 && !recipe2) {
      loadInitialRecipes();
    }
  }, []);

  // Pass/Skip Recipe Card
  const handlePass = async (keepIndex) => {
    if (passesLeft <= 0) return;

    let newRecipe;
    do {
      newRecipe = await getRecipe();
    } while (newRecipe.id === recipe1?.id || newRecipe.id === recipe2?.id);

    if (keepIndex === 0) {
      setRecipe1(newRecipe);
    } else if (keepIndex === 1) {
      setRecipe2(newRecipe);
    }

    setPassesLeft((p) => p - 1);
  };

  // Add Recipe to Favorites
  const handleAddFavoriteRecipe = (userId, recipe) => {
    addFavorite(userId, recipe).then((data) => {
      setFavoriteRecipes([data, ...favoriteRecipes]);
      setCardVariant("favorite");
    });
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
  const updateUser = ({ username, avatar }) => {
    return updateProfile({ username, avatar })
      .then(() => {
        setCurrentUser((prev) => ({
          ...prev,
          username,
          avatar,
        }));
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  // login user
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("The user has been set to Logged In:", isLoggedIn);
  };

  // logout user
  const handleLogout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
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
            <Header
              isLoggedIn={isLoggedIn}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
            />
            <Routes>
              <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
              <Route
                path="/recipes"
                element={
                  <Recipes
                    onCardClick={handleCardClick}
                    handleAddFavoriteRecipe={handleAddFavoriteRecipe}
                    handlePass={handlePass}
                    recipe1={recipe1}
                    recipe2={recipe2}
                    passesLeft={passesLeft}
                    cardVariant={cardVariant}
                    isLoggedIn={isLoggedIn}
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
                      favoriteRecipes={favoriteRecipes}
                      onCardClick={handleCardClick}
                      cardVariant={cardVariant}
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
        <RegisterModal activeModal={activeModal} closeModal={closeModal} />
        <LoginModal activeModal={activeModal} closeModal={closeModal} />
      </CurrentUserContext.Provider>
    </HashRouter>
  );
}

export default App;
