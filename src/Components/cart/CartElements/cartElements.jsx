import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./cartElements.css";
import CloseButton from "react-bootstrap/CloseButton";
const cartElements = ({ counterdown }) => {
  const { cart, setCart } = useContext(CartContext);
  const removeItem = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };
  return cart.map((product) => {
    return (
      <div className="cartItem" key={product.id}>
        <img className="cartItemImg" src={product.imagen} alt="product-card" />
        <h3 className="cartItemName">{product.nombre}</h3>
        <h4 className="cartItemPrice">{product.precio}$</h4>

        <div>
          <CloseButton
            onClick={() => removeItem(product.id)}
            className="rmvBtn"
          >
            {counterdown}
          </CloseButton>
        </div>
      </div>
    );
  });
};

export default cartElements;
