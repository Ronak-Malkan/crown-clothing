import {
   CartDropDownContainer,
   EmptyMessage,
   CartItems,
} from "./cartDropdown.styles";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart-context";

import Button from "../button/button";
import CartItem from "../cartItem/cartItem";

const CartDropdown = () => {
   const { cartProducts } = useContext(CartContext);
   const navigate = useNavigate();

   return (
      <CartDropDownContainer>
         <CartItems>
            {cartProducts.length ? (
               cartProducts.map((product) => (
                  <CartItem key={product.id} cartItem={product} />
               ))
            ) : (
               <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
         </CartItems>
         <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
      </CartDropDownContainer>
   );
};

export default CartDropdown;
