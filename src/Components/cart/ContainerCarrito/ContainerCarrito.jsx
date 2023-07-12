import { Container } from "react-bootstrap";
import "./ContainerCarrito.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import CartElements from "../CartElements/cartElements";
const ContainerCarrito = () => {
  
  const { cart, containerClass } = useContext(CartContext);
  
  return cart.length > 0 ? (
    <Container className={containerClass}>
      <div>
        <div className="carrito">
          <h3>Carrito de compras</h3>
          <CartElements />
        </div>
        <div className="row-product hidden"></div>
        <div className="cart-total hidden"></div>
      </div>
    </Container>
  ) : (
    <p
      style={{
        fontSize: 30,
        display: "flex",
        flexDirection: "end",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 5,
        border: 1,
        border: "solid",
        marginTop: 90,
        width: "100%",
      }}
    >
      El carrito esta vacio
    </p>
  );
};

export default ContainerCarrito;
