import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// For Testing purposes vvv
import { mockRecipes } from "../../utils/mockRecipes";
// For Deployment vvv
import { fetchRandomRecipe } from "../../utils/Api/recipesApi.js";
import { addFavorite, deleteFavorite } from "../../utils/favoriteRecipesApi.js";
import {
  checkToken,
  getToken,
  login,
  register,
  updateProfile,
} from "../../utils/user.js";

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
import Preloader from "../Preloader/Preloader.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState("");

  const [cardVariant, setCardVariant] = useState("default");

  const [selectedCard, setSelectedCard] = useState(null);
  const [shoppingList, setShoppingList] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const [recipe1, setRecipe1] = useState(null);
  const [recipe2, setRecipe2] = useState(null);

  // Adjust the number here for testing purposes Set to 3 for Deployment
  const [passesLeft, setPassesLeft] = useState(3);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Open Login Modal
  const handleLoginClick = () => {
    setActiveModal("login");
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

  const handleSwitchAuthClick = () => {
    activeModal === "register"
      ? setActiveModal("login")
      : setActiveModal("register");
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

  // MOCK BACKEND CALL vvvv

  // IF OUT OF API CALLS, USE THIS FUNCTION
  const getRecipe = async () => {
    const randomIndex = Math.floor(Math.random() * mockRecipes.length);
    return Promise.resolve(mockRecipes[randomIndex]);
  };

  // MOCK BACKEND CALL^^^^

  // REAL API CALL (Use for deployment)
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
  const handleAddFavoriteRecipe = (recipe) => {
    if (!recipe) {
      console.error("No recipe provided!");
      return;
    }
    addFavorite(token, recipe)
      .then((data) => {
        setFavoriteRecipes([data, ...favoriteRecipes]);
        setCardVariant("favorite");
        alert("Recipe has been added to your Favorites Section");
      })
      .catch((err) => {
        console.error("Error adding to favorites:", err.message);
      });
  };

  const handleDeleteFavoriteRecipe = (recipe) => {
    const token = getToken();
    deleteFavorite(token, recipe).then(() => {
      setFavoriteRecipes((prevList) =>
        prevList.filter((item) => item._id !== recipe._id)
      );
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

  // Edit an Item from the Shopping List
  const handleEditShoppingListItemClick = (item) => {
    setEditItem(item);
    setActiveModal("add-item");
    handleShoppingListItemDelete(item.id);
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
      .catch((err) => {
        console.error("Error updating user:", err);
      });
  };

  // login user
  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then((data) => {
        setIsLoggedIn(true);
        return checkToken(data.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        navigate("/profile");
        closeModal();
      })
      .catch((err) => {
        console.error("Failed to log in", err);
      });
  };

  const token = getToken();

  // CHECK FOR TOKEN TO LOGIN USER
  useEffect(() => {
    if (token) {
      checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  // logout user
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/");
  };

  // Register a user
  const handleRegister = ({ email, password, username, avatar }) => {
    register({ email, password, username, avatar })
      .then(() => {
        login({ email, password });
      })
      .then((data) => {
        checkToken(data);
      })
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
        navigate("/profile");
        closeModal();
      })
      .catch((err) => {
        console.error("Failed to register:", err);
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        updateUser,
        handleLogin,
        handleLogout,
      }}
    >
      <div className="app">
        {isLoading ? (
          <div className="app__content">
            <Preloader />
          </div>
        ) : (
          <div className="app__content">
            <Header
              isLoggedIn={isLoggedIn}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    isLoggedIn={isLoggedIn}
                    handleLoginClick={handleLoginClick}
                    handleRegisterClick={handleRegisterClick}
                  />
                }
              />
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
                    handleLoginClick={handleLoginClick}
                    handleRegisterClick={handleRegisterClick}
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
                      token={token}
                      setFavoriteRecipes={setFavoriteRecipes}
                      handleDeleteFavoriteRecipe={handleDeleteFavoriteRecipe}
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
                      handleEditItemClick={handleEditShoppingListItemClick}
                      handleDeleteItemClick={handleShoppingListItemDelete}
                    />
                  }
                />
                <Route path="profile-settings" element={<ProfileSettings />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        )}

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
          editItem={editItem}
        />
      </div>
      <RegisterModal
        activeModal={activeModal}
        closeModal={closeModal}
        onRegister={handleRegister}
        handleSwitchAuthClick={handleSwitchAuthClick}
      />
      <LoginModal
        activeModal={activeModal}
        closeModal={closeModal}
        onLogin={handleLogin}
        handleSwitchAuthClick={handleSwitchAuthClick}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
