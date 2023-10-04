import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

import CheckoutItem from "../../components/checkoutItem/checkoutItem";

import {
   CheckoutContainer,
   CheckoutHeader,
   HeaderBlock,
   Total,
} from "./checkout.styles.js";

const Checkout = () => {
   const { cartProducts, productTotal } = useContext(CartContext);
   return (
      <CheckoutContainer>
         <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Remove</span>
            </HeaderBlock>
         </CheckoutHeader>
         {cartProducts.map((product) => (
            <CheckoutItem key={product.id} product={product} />
         ))}
         <Total>Total: ${productTotal}</Total>
      </CheckoutContainer>
   );
};

export default Checkout;
