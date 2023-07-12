import { Container } from "react-bootstrap";
import "./ContainerCarrito.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import CartElements from "../CartElements/cartElements";
const ContainerCarrito = () => {
  const { cart, containerClass } = useContext(CartContext);
  const total = cart.reduce((acc, el) => acc + el.precio, 0);
  return cart.length > 0 ? (
    <Container className={containerClass}>
      <div>
        <div className="carrito">
          <h3>Carrito de compras</h3>
          <CartElements />

          <h4>Total: ${total}</h4>
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
          margin: "auto",
          border: "solid",
          width: "100%",
        }}
      >
        El carrito esta vacio
      </p>
    </Container>
  );
};

export default ContainerCarrito;
