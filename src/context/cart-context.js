import { createContext, useReducer } from "react";

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

const INITIAL_STATE = {
   displayCart: false,
   cartProducts: [],
   productsCount: 0,
   productTotal: 0,
};

const cartReducer = (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case "SET_CART_ITEMS":
         return {
            ...state,
            ...payload,
         };
      case "TOGGLE_CART_OPEN":
         return {
            ...state,
            displayCart: payload,
         };
      default:
         throw new Error(`Unhandled type ${type} in userReducer`);
   }
};

export const CartContextProvider = ({ children }) => {
   const [
      { displayCart, cartProducts, productsCount, productTotal },
      dispatch,
   ] = useReducer(cartReducer, INITIAL_STATE);

   const updateCartItemsReducer = (newCartItems) => {
      const newCartCount = newCartItems.reduce(
         (total, product) => (total += product.quantity),
         0
      );
      const newCartTotal = newCartItems.reduce(
         (total, product) => total + product.quantity * product.price,
         0
      );
      dispatch({
         type: "SET_CART_ITEMS",
         payload: {
            cartProducts: newCartItems,
            productsCount: newCartCount,
            productTotal: newCartTotal,
         },
      });
   };

   const setDisplayCart = (bool) => {
      dispatch({
         type: "TOGGLE_CART_OPEN",
         payload: bool,
      });
   };

   const addItemToCart = (product) => {
      const newCartItems = updateItemArray(cartProducts, product);
      updateCartItemsReducer(newCartItems);
   };

   const removeItemFromCart = (product, removeAll) => {
      let newCartItems;
      if (removeAll || product.quantity === 1) {
         newCartItems = cartProducts.filter((item) => item.id !== product.id);
      } else {
         newCartItems = cartProducts.map((item) => {
            if (item.id === product.id) item.quantity--;
            return item;
         });
      }
      updateCartItemsReducer(newCartItems);
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
