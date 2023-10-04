import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import {
   NavigationContainer,
   NavLinks,
   NavLink,
   LogoContainer,
} from "./navigation.style";

import CartIcon from "../../components/cartIcon/cartIcon";
import CartDropdown from "../../components/cartDropdown/cartDropdown";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import { UserContext } from "../../context/user-context";
import { CartContext } from "../../context/cart-context";

import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
   const { user } = useContext(UserContext);
   const { displayCart } = useContext(CartContext);

   const signOut = async () => {
      await signOutUser();
   };

   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to="/">
               <CrownLogo className="logo" />
            </LogoContainer>
            <NavLinks>
               <NavLink to="/shop">SHOP</NavLink>
               {user ? (
                  <NavLink as="span" onClick={signOut}>
                     SIGN OUT
                  </NavLink>
               ) : (
                  <NavLink to="/auth">SIGN IN</NavLink>
               )}
               <CartIcon />
            </NavLinks>
            {displayCart && <CartDropdown />}
         </NavigationContainer>
         <Outlet />
      </Fragment>
   );
};

export default Navigation;
