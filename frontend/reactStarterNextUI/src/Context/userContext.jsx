import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedUser, setloggedUser] = useState({});
  // console.log("From context", loggedUser);

  return (
    <userContext.Provider value={{ loggedUser, setloggedUser }}>
      {children}
    </userContext.Provider>
  );
};
