import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

import {
   CheckoutItemContainer,
   ImageContainer,
   BaseSpan,
   Quantity,
   Arrow,
   Value,
   RemoveButton,
} from "./checkoutItem.styles.js";

const CheckoutItem = ({ product }) => {
   const { name, imageUrl, quantity, price } = product;

   const { addItemToCart, removeItemFromCart } = useContext(CartContext);

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
         </ImageContainer>
         <BaseSpan>{name}</BaseSpan>

         <Quantity>
            <Arrow onClick={() => removeItemFromCart(product, false)}>
               &#10094;
            </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => addItemToCart(product)}>&#10095;</Arrow>
         </Quantity>

         <BaseSpan>{price}</BaseSpan>
         <RemoveButton onClick={() => removeItemFromCart(product, true)}>
            &#10005;
         </RemoveButton>
      </CheckoutItemContainer>
   );
};

export default CheckoutItem;
