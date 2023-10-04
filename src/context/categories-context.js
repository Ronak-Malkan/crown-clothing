import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext({
   categoriesMap: {},
});

export const CategoriesContextProvider = ({ children }) => {
   const [categoriesMap, setCategoriesMap] = useState({});

   useEffect(() => {
      const getCategoriesMap = async () => {
         const categoryMap = await getCategoriesAndDocuments();
         setCategoriesMap(categoryMap);
      };
      getCategoriesMap();
   });

   return (
      <CategoriesContext.Provider value={{ categoriesMap }}>
         {children}
      </CategoriesContext.Provider>
   );
};
