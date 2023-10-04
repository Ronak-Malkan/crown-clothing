import { CartIconContainer, ShoppingIcon, ItemCount } from "./cartIcon.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CartIcon = () => {
   const { displayCart, setDisplayCart, productsCount } =
      useContext(CartContext);
   const toggleCart = () => {
      setDisplayCart(!displayCart);
   };

   return (
      <CartIconContainer onClick={toggleCart}>
         <ShoppingIcon className="shopping-icon" />
         <ItemCount>{productsCount}</ItemCount>
      </CartIconContainer>
   );
};

export default CartIcon;
