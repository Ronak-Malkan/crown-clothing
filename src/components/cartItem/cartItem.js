import { CartItemContainer, ItemDetails } from "./cartItem.styles.js";

const CartItem = ({ cartItem }) => {
   const { name, imageUrl, price, quantity } = cartItem;
   return (
      <CartItemContainer>
         <img src={imageUrl} alt={`${name}`} />
         <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">
               {quantity} x ${price}
            </span>
         </ItemDetails>
      </CartItemContainer>
   );
};

export default CartItem;
