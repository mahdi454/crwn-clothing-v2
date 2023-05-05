import {CartDropdownContainer,EmptyMessege,CartItems} from "./card-drop.style.jsx";
import Button from "../btn/btn-com";
import { useContext, React } from "react";
import {BagContext} from "../../context/bag-context";
import CradItem from "../card-item/card-item-com";
import { useNavigate } from "react-router-dom";
const CardDropdown = () => {
  const { cartItems } = useContext(BagContext);
const navgiate=useNavigate();
const navgiateHandler=()=>{
  navgiate('/checkout')
}

  return (
    <CartDropdownContainer>
      <CartItems>
        {
        cartItems.length  ? (   cartItems.map((item) => (
          <CradItem key={item.id} cartItem={item} />
        ))):(<EmptyMessege>Your cart is empty</EmptyMessege>)
     }
      </CartItems>
     
     <Button onClick={navgiateHandler}>Check out</Button>
     
    </CartDropdownContainer>
  )
};

export default CardDropdown;





