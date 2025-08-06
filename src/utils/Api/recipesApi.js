export const fetchRandomRecipe = () => {
  return fetch(
    "https://api.spoonacular.com/recipes/random?number=1&apiKey=6e833ad0fd614157801f6b891d959b0d",
    {}
  )
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch recipes");
      return res.json();
    })
    .then((data) => {
      const recipe = data.recipes[0];
      console.log("Fetched recipes:", recipe);
      return recipe;
    });
};
