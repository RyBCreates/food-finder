import { baseUrl } from "./constants";

export const addFavorite = (userId, recipe) => {
  console.log("Add Favorite Backend hit:", userId, recipe);
  return fetch(`${baseUrl}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      recipe,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to add favorite");
      }
      return res.json();
    })
    .catch((err) => {
      console.error("Error adding favorite:", err);
    });
};
