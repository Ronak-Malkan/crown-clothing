import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CartIcon = () => {
   const { cart, setCart } = useContext(CartContext);

   const displayCart = () => {
      setCart({ ...cart, display: !cart.display });
   };

   return (
      <div className="cart-icon-container" onClick={displayCart}>
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">0</span>
      </div>
   );
};

export default CartIcon;
