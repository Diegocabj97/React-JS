import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./PayCartPage.css";
import HandlePayment from "./HandlePayment";
import { Link } from "react-router-dom";

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
          <p>Precio: {product.precio}</p>
        </div>
      ))}
      <h3>El total de tu compra es de $:{total}</h3>
      <Link to={"/ThankYouPage"}>
      <HandlePayment />
      </Link>
    </div>
  ) : (
    <div className="payCart">
      <h1></h1>
      <h3 style={{ margin: "auto", textAlign: "center" }}>
        Tu carrito esta vacio!
      </h3>
    </div>
  );
};

export default PayCartPage;
