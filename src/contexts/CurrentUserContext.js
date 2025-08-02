import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  updateUser: ({ name, avatar }) => {},
  handleLogin: ({ email, password }) => {},
  handleLogout: () => {},
});

export default CurrentUserContext;
