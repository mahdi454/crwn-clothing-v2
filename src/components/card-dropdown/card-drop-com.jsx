import "./card-drop.style.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CradItem key={item.id} cartItem={item} />
        ))}
      </div>
     
     <Button onClick={navgiateHandler}>Check out</Button>
     
    </div>
  )
};

export default CardDropdown;





