import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.scss";

import CartIcon from "../../components/cartIcon/cartIcon";
import CartDropdown from "../../components/cartDropdown/cartDropdown";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user-context";
import { CartContext } from "../../context/cart-context";

import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
   const { user } = useContext(UserContext);
   const { cart } = useContext(CartContext);

   const signOut = async () => {
      await signOutUser();
   };

   return (
      <Fragment>
         <div className="navigation">
            <Link className="logo-container" to="/">
               <CrownLogo className="logo" />
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="/shop">
                  SHOP
               </Link>
               {user ? (
                  <span className="nav-link" onClick={signOut}>
                     SIGN OUT
                  </span>
               ) : (
                  <Link className="nav-link" to="/auth">
                     SIGN IN
                  </Link>
               )}
               <CartIcon />
            </div>
            {cart.display && <CartDropdown />}
         </div>
         <Outlet />
      </Fragment>
   );
};

export default Navigation;
