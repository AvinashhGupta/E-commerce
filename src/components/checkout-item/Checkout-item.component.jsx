import "./checkout-item.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearItemsFromCart, addItemToCart, removeCartFromItem } = useContext(CartContext);

  const clearCartItemHandler = () => clearItemsFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeCartFromItem(cartItem)


  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
       <div className="arrow" onClick={removeItemHandler}>
           &#10094;
      </div> 
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={addItemHandler}>
           &#10095;
      </div> 
   
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearCartItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
