import { useContext } from "react";
import { CartContext } from "../context/cart-context";

import "./checkoutItem.scss";

const CheckoutItem = ({ product }) => {
   const { name, imageUrl, quantity, price } = product;

   const { addItemToCart, removeItemFromCart } = useContext(CartContext);

   return (
      <div className="checkout-item-container">
         <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
         </div>
         <span className="name">{name}</span>

         <span className="quantity">
            <div
               className="arrow"
               onClick={() => removeItemFromCart(product, false)}
            >
               &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItemToCart(product)}>
               &#10095;
            </div>
         </span>

         <span className="price">{price}</span>
         <div
            className="remove-button"
            onClick={() => removeItemFromCart(product, true)}
         >
            &#10005;
         </div>
      </div>
   );
};

export default CheckoutItem;
