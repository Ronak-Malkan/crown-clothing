import { createContext, useState, useEffect } from "react";

import {
   onAuthStateChangedListener,
   createUserDocumentForAuth,
} from "../utils/firebase/firebase";

export const UserContext = createContext({
   user: null,
   setUser: () => null,
});

export const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         if (user) {
            createUserDocumentForAuth(user);
         }
         setUser(user);
      });
      return unsubscribe;
   }, []);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};
