import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./cartElements.css";

const cartElements = () => {
  const { cart, setcart } = useContext(CartContext);
  const itemRemove = () => {
    return cart.map((product) => {
      return console.log("removido");
    });
  };
  return cart.map((product) => {
    return (
      <div className="cartItem" key={product.id}>
        <img className="cartItemImg" src={product.imagen} alt="product-card" />
        <h3 className="cartItemName">{product.nombre}</h3>
        <h4 className="cartItemPrice">{product.precio}$</h4>
        <button onClick={itemRemove} className="rmvBtn">
          removebtn
        </button>
      </div>
    );
  });
};

export default cartElements;
