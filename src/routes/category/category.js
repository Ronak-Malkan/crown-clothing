import { CategoryTitle, CategoryContainer } from "./category.styles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";

import ProductCard from "../../components/productCard/productCard";

const Category = () => {
   console.log("category rendered");
   const { category } = useParams();
   const categoriesMap = useSelector(selectCategoriesMap);
   const [products, setProducts] = useState(categoriesMap[category]);

   useEffect(() => {
      console.log("category use effect fired");
      setProducts(categoriesMap[category]);
   }, [category, categoriesMap]);

   return (
      <Fragment>
         <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
         <CategoryContainer>
            {products &&
               products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
         </CategoryContainer>
      </Fragment>
   );
};

export default Category;
