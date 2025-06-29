import { HashRouter, Routes, Route } from "react-router-dom";

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
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
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
      </div>
    </HashRouter>
  );
}

export default App;
