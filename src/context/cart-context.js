import { useState, createContext } from "react";

export const CartContext = createContext({
   cart: null,
   setCart: () => null,
});

export const CartContextProvider = ({ children }) => {
   const [cart, setCart] = useState({ display: false, products: [] });
   return (
      <CartContext.Provider value={{ cart, setCart }}>
         {children}
      </CartContext.Provider>
   );
};
