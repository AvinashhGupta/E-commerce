import { Fragment, useContext } from "react";
import {Outlet} from 'react-router-dom'

import {NavigationConatiner, LogoContainer , NavLinks , NavLink} from "./Navigation.styles.jsx";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/Cart-Icon/Cart-Icon.component";
import CartDrodwon from "../../components/cart-dropdown/Cart-dropdown.component";

import { CartContext } from "../../contexts/Cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
         <NavigationConatiner>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
      {isCartOpen && <CartDrodwon/>}
      </NavigationConatiner>
      <Outlet /> 
    </Fragment>
  );
};

export default Navigation;
