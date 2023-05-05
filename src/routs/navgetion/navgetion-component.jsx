import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./navigation.styles.jsx";
import CardIcon from "../../components/card-icon/card-icon-com";
import CardDropdown from "../../components/card-dropdown/card-drop-com";
import { createSignOut } from "../../utils/firebase/firebase-util";
import { useContext } from "react";
import { UserContext } from "../../context/user-cntext";
import { BagContext } from "../../context/bag-context";
import {
  LogoContainer,
  NavLinksContainer,
  Navigation,
  NavLink,
} from "./navigation.styles.jsx";
const Navgetion = () => {
  const { currentUser } = useContext(UserContext);
  const { bagItem } = useContext(BagContext);

  return (
    <>
      <Navigation>
        <LogoContainer to="/">
          <img className="logo" src={logo} alt="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={createSignOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/sign-in">Sign In</NavLink>
          )}
          <CardIcon />
        </NavLinksContainer>

        {bagItem && <CardDropdown />}
      </Navigation>
      <Outlet />
    </>
  );
};
export default Navgetion;
