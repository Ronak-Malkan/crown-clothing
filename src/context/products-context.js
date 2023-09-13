import { createContext, useState } from "react";
import Shop_Data from "../shop-data.json";

export const ProductsContext = createContext({
   products: [],
});

export const ProductContextProvider = ({ children }) => {
   const [products, setProducts] = useState(Shop_Data);

   return (
      <ProductsContext.Provider value={{ products }}>
         {children}
      </ProductsContext.Provider>
   );
};
