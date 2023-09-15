import "./cartDropdown.scss";

import { useContext } from "react";

import { CartContext } from "../../context/cart-context";

import Button from "../button/button";
import CartItem from "../cartItem/cartItem";

const CartDropdown = () => {
   const { cartProducts } = useContext(CartContext);

   return (
      <div className="cart-dropdown-container">
         <div className="cart-items">
            {cartProducts.map((product) => (
               <CartItem key={product.id} cartItem={product} />
            ))}
         </div>
         <Button>GO TO CHECKOUT</Button>
      </div>
   );
};

export default CartDropdown;
