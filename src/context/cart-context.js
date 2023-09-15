import { useState, createContext } from "react";

const updateItemArray = (cartProducts, product) => {
   let cardProductExists = false;
   let cartProductsCopy = cartProducts.map((prod) => {
      if (prod.id === product.id) {
         prod.quantity++;
         cardProductExists = true;
      }
      return prod;
   });
   if (!cardProductExists) {
      product.quantity = 1;
      cartProductsCopy.push(product);
   }
   return cartProductsCopy;
};

export const CartContext = createContext({
   displayCart: false,
   setDisplayCart: () => {},
   cartProducts: [],
   addItemToCart: () => {},
   productsCount: 0,
});

export const CartContextProvider = ({ children }) => {
   const [displayCart, setDisplayCart] = useState(false);
   const [cartProducts, setCardProducts] = useState([]);
   const [productsCount, setCount] = useState(0);

   const addItemToCart = (product) => {
      setCount(productsCount + 1);
      setCardProducts(updateItemArray(cartProducts, product));
   };

   return (
      <CartContext.Provider
         value={{
            displayCart,
            setDisplayCart,
            cartProducts,
            addItemToCart,
            productsCount,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
