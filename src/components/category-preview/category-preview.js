import {
   CategoryPreviewContainer,
   Title,
   Preview,
} from "./category-preview.styles.js";
import ProductCard from "../productCard/productCard";

const CategoryPreview = ({ title, products }) => {
   return (
      <CategoryPreviewContainer>
         <h2>
            <Title to={`${title}`}>
               <span className="title">{title.toUpperCase()}</span>
            </Title>
         </h2>
         <Preview>
            {products
               .filter((_, index) => index < 4)
               .map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
         </Preview>
      </CategoryPreviewContainer>
   );
};

export default CategoryPreview;
