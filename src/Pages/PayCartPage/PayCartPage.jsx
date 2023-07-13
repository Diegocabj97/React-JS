import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./PayCartPage.css";

const PayCartPage = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, el) => acc + el.precio, 0);
  return total > 0 ? (
    <div className="payCart">
      <h1>Termina tu compra!</h1>
      {cart.map((product) => (
        <div className="BuyItem" key={product.id}>
          <h3>{product.nombre}</h3>
          <img src={product.imagen} alt="" />
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio: {product.precio}</p>
        </div>
      ))}
      <h3>El total de tu compra es de $:{total}</h3>{" "}
      <Link className="PayBtn" to="/">
        <button className="PayBtn">Pagar</button>
      </Link>
    </div>
  ) : (
    <div className="payCart">
      <h1></h1><h3 style={{ margin: "auto", textAlign: "center" }}>
        Tu carrito esta vacio!
      </h3>
    </div>
  );
};

export default PayCartPage;
