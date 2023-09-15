import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CartIcon = () => {
   const { displayCart, setDisplayCart, productsCount } =
      useContext(CartContext);
   const toggleCart = () => {
      setDisplayCart(!displayCart);
   };

   return (
      <div className="cart-icon-container" onClick={toggleCart}>
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">{productsCount}</span>
      </div>
   );
};

export default CartIcon;
