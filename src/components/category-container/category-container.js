import { useNavigate } from "react-router-dom";
import {
   CategoryItemContainer,
   BackgroundImage,
   Body,
} from "./category-container.styles";

const CategoryContainer = ({ category }) => {
   const navigate = useNavigate();

   const onNavigateHandler = () => navigate(category.route);

   return (
      <CategoryItemContainer onClick={onNavigateHandler}>
         <BackgroundImage imageUrl={category.imageUrl} />
         <Body>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
         </Body>
      </CategoryItemContainer>
   );
};

export default CategoryContainer;
