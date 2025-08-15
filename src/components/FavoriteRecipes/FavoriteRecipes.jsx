import { useState, useEffect } from "react";
import { fetchFavorites } from "../../utils/favoriteRecipesApi.js";

import FilterMenu from "../FilterMenu/FilterMenu";
import SearchBar from "../SearchBar/SearchBar";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./FavoriteRecipes.css";

function FavoriteRecipes({
  onCardClick,
  favoriteRecipes,
  token,
  setFavoriteRecipes,
}) {
  const [filter, setFilter] = useState("recent");

  const sortedFavorites = [...favoriteRecipes].sort((a, b) => {
    switch (filter) {
      case "prep-time":
        return a.readyInMinutes - b.readyInMinutes;
      case "cost-per-serving":
        return a.pricePerServing - b.pricePerServing;
      case "likes":
        return b.aggregateLikes - a.aggregateLikes;
      case "recent":
      default:
        return new Date(b.savedAt) - new Date(a.savedAt);
    }
  });

  useEffect(() => {
    fetchFavorites(token)
      .then((data) => {
        setFavoriteRecipes(data);
      })
      .catch((err) => {
        console.error("Problem fetching favorite recipes:", err);
      });
  }, [token]);

  return (
    <section className="favorite-recipes">
      <div className="favorite-recipes__filters">
        <SearchBar />
        <FilterMenu filter={filter} onFilterSelect={setFilter} />
      </div>
      <ul className="favorite-recipes__list">
        {sortedFavorites.length === 0 ? (
          <>
            <p className="favorite-recipes__empty">
              No Recipes Currently Saved
            </p>
          </>
        ) : (
          sortedFavorites.map((favorite) => {
            return (
              <RecipeCard
                key={favorite._id}
                recipe={favorite}
                onCardClick={onCardClick}
                cardVariant="favorite"
              />
            );
          })
        )}
      </ul>
    </section>
  );
}

export default FavoriteRecipes;
