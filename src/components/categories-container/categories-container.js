import "./categories-container.scss";
import CategoryContainer from "../category-container/category-container";

const CategoriesContainer = ({ categories }) => {
   return (
      <div className="categories-container">
         {categories.map((category) => {
            return <CategoryContainer category={category} key={category.id} />;
         })}
      </div>
   );
};

export default CategoriesContainer;
