import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./navigation.styles.scss";
import CardIcon from "../../components/card-icon/card-icon-com";
import CardDropdown from "../../components/card-dropdown/card-drop-com";
import { createSignOut } from "../../utils/firebase/firebase-util";
import { useContext } from "react";
import { UserContext } from "../../context/user-cntext";
import { BagContext } from "../../context/bag-context";
const Navgetion = () => {
  const { currentUser } = useContext(UserContext);
  const { bagItem } = useContext(BagContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={createSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          )}
          <CardIcon />
        </div>

        {bagItem && <CardDropdown/>}
 
      </div>
      <Outlet />
    </>
  );
};
export default Navgetion;
