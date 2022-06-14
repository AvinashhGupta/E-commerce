import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToremove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToremove.id
  );

  if (existingCartItem.id === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToremove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartFromItem: () => {},
  clearItemsFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price , 0
    );
    setCartTotal(newCartTotal)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeCartFromItem = (productToremove) => {
    setCartItems(removeCartItem(cartItems, productToremove));
  };

  const clearItemsFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeCartFromItem,
    clearItemsFromCart,
    cartItems,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
