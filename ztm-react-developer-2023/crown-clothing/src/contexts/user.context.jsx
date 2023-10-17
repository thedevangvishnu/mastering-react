import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedHandler,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// the actual value we want to store and access across component-tree
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// the actual component that would wrap the entire app and allow UserContent to be accessed
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHandler((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
