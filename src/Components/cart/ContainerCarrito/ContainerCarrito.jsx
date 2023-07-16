import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ContainerCarrito.css";
import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../../../Context/CartContext";
import CartElements from "../CartElements/cartElements";

const ContainerCarrito = () => {
  const { cart, containerClass } = useContext(CartContext);
  const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
 

  return cart.length > 0 ? (
    <Container className={containerClass}>
      <div>
        <div className="carrito">
          <h3>Carrito de compras</h3>
          <CartElements />

          <h4>Total: ${total}</h4>
          <Link to="/PayCart">
            <button className="endBuyBtn" variant="primary">
              Finaliza tu compra!
            </button>
          </Link>
        </div>
      </div>
    </Container>
  ) : (
    <Container className={containerClass}>
      <p
        style={{
          fontSize: 30,
          display: "flex",
          flexDirection: "end",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: 5,
          border: 1,
          margin: "10px",
          border: "solid",
          width: "100%",
        }}
      >
        El carrito esta vacio :(
      </p>
    </Container>
  );
};

export default ContainerCarrito;
