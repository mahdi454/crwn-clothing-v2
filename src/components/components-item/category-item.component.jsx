import {BackgroundImage,CategoryContainer,CategoryBodyContainer} from "./category-item.styles.jsx";
import { useNavigate } from "react-router-dom";
const CategoryItem = ({ category }) => {
  const { title, imageUrl,route } = category;
const navigate=useNavigate();
const onNavigateHandler=()=>navigate(route)
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <CategoryBodyContainer>
        <h1>{title}</h1>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};
export default CategoryItem;
