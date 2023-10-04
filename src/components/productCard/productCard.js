import {
   ProductCardContainer,
   Footer,
   Name,
   Price,
} from "./productCard.styles.js";

import { useContext } from "react";

import { CartContext } from "../../context/cart-context";

import Button, { buttonTypes } from "../button/button";

const ProductCard = ({ product }) => {
   const { name, price, imageUrl } = product;
   const { addItemToCart } = useContext(CartContext);

   const addProduct = () => addItemToCart(product);

   return (
      <ProductCardContainer>
         <img src={imageUrl} alt={`${name}`} />
         <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
         </Footer>
         <Button buttonType={buttonTypes.inverted} onClick={addProduct}>
            Add to cart
         </Button>
      </ProductCardContainer>
   );
};

export default ProductCard;
