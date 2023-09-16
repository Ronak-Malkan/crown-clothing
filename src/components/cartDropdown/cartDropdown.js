import "./cartDropdown.scss";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart-context";

import Button from "../button/button";
import CartItem from "../cartItem/cartItem";

const CartDropdown = () => {
   const { cartProducts } = useContext(CartContext);
   const navigate = useNavigate();

   return (
      <div className="cart-dropdown-container">
         <div className="cart-items">
            {cartProducts.map((product) => (
               <CartItem key={product.id} cartItem={product} />
            ))}
         </div>
         <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
      </div>
   );
};

export default CartDropdown;
