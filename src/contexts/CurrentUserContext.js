import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  updateUser: ({ username, avatar }) => {},
  handleLogin: ({ email, password }) => {},
  handleLogout: () => {},
});

export default CurrentUserContext;
