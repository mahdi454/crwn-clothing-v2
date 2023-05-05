import { CartIconContainer, ShoppingIcon, ItemCount } from "./card-icon.style";
import { useContext } from "react";
import { BagContext } from "../../context/bag-context";
const CardIcon = () => {
  const { bagItem, setBagItem, items } = useContext(BagContext);

  const taggleHandler = () => setBagItem(!bagItem);
  return (
    <CartIconContainer>
      <ShoppingIcon onClick={taggleHandler} />
      <ItemCount>{items}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
