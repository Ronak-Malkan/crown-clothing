import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

import CheckoutItem from "../../checkoutItem/checkoutItem";

import "./checkout.scss";

const Checkout = () => {
   const { cartProducts, productTotal } = useContext(CartContext);
   console.log(cartProducts);
   return (
      <div className="checkout-container">
         <div className="checkout-header">
            <div className="header-block">
               <span>Product</span>
            </div>
            <div className="header-block">
               <span>Description</span>
            </div>
            <div className="header-block">
               <span>Quantity</span>
            </div>
            <div className="header-block">
               <span>Price</span>
            </div>
            <div className="header-block">
               <span>Remove</span>
            </div>
         </div>
         {cartProducts.map((product) => (
            <CheckoutItem key={product.id} product={product} />
         ))}
         <span className="total">Total: ${productTotal}</span>
      </div>
   );
};

export default Checkout;
