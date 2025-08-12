import { baseUrl } from "./constants";

export const registerUser = (username, email, password, avatar) => {
  fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password, avatar }),
  });

  if (!response.ok) {
  }
};
