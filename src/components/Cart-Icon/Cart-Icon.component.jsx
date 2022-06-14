import {CartIconContainer, ShoppingIcon , ItemCount }  from "./cart-icon.styles.jsx";

import { useContext } from "react";
import {CartContext} from '../../contexts/Cart.context'
 

const CartIcon = () => {
const {isCartOpen ,setIsCartOpen, cartCount} = useContext(CartContext)  
const {carItems} = useContext(CartContext)

const ToggleisCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={ToggleisCartOpen}>
      <ShoppingIcon className="shopping-icon"/>
      <ItemCount >{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;