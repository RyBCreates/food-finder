import { baseUrl } from "./constants";

export const fetchFavorites = async (token) => {
  const res = await fetch(`${baseUrl}/favorites`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch favorites: ${res.status}`);
  }
  return res.json();
};

export const addFavorite = (token, recipe) => {
  return fetch(`${baseUrl}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
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
