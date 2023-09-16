import { useState, createContext, useEffect } from "react";

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
   removeItemFromCart: () => {},
   productsCount: 0,
   productTotal: 0,
});

export const CartContextProvider = ({ children }) => {
   const [displayCart, setDisplayCart] = useState(false);
   const [cartProducts, setCardProducts] = useState([]);
   const [productsCount, setCount] = useState(0);
   const [productTotal, setTotal] = useState(0);

   useEffect(() => {
      const cartCount = cartProducts.reduce(
         (total, product) => (total += product.quantity),
         0
      );
      setCount(cartCount);
   }, [cartProducts]);

   useEffect(() => {
      const cartTotal = cartProducts.reduce(
         (total, product) => total + product.quantity * product.price,
         0
      );
      setTotal(cartTotal);
   }, [cartProducts]);

   const addItemToCart = (product) => {
      setCardProducts(updateItemArray(cartProducts, product));
   };

   const removeItemFromCart = (product, removeAll) => {
      if (removeAll || product.quantity === 1) {
         setCardProducts(cartProducts.filter((item) => item.id !== product.id));
      } else {
         setCardProducts(
            cartProducts.map((item) => {
               if (item.id === product.id) item.quantity--;
               return item;
            })
         );
      }
   };

   return (
      <CartContext.Provider
         value={{
            displayCart,
            setDisplayCart,
            cartProducts,
            addItemToCart,
            removeItemFromCart,
            productsCount,
            productTotal,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
