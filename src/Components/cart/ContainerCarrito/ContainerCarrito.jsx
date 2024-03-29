import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ContainerCarrito.css";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import CartElements from "../CartElements/cartElements";
import CloseCartBtn from "./CloseCartBtn";
const ContainerCarrito = () => {
  const { cart, containerClass } = useContext(CartContext);
  const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  const { toggleContainerClass } = useContext(CartContext);
  return cart.length > 0 ? (
    <Container className={containerClass}>
      <div>
        <div className="carrito">
          <div className="CartHeader">
            <h3>Carrito de compras</h3>
            <CloseCartBtn />
          </div>
          <CartElements />

          <h4>Total: ${total}</h4>
          <Link to="/PayCart">
            <button
              onClick={toggleContainerClass}
              className="endBuyBtn"
              variant="primary"
            >
              Finaliza tu compra!
            </button>
          </Link>
        </div>
      </div>
    </Container>
  ) : (
    <Container className={containerClass}>
      <div style={{ display: "flex" }}>
        <p
          style={{
            fontSize: 30,
            display: "flex",
            flexDirection: "end",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 5,
            border: "solid",
            margin: "10px",
            width: "100%",
          }}
        >
          El carrito esta vacio :(
        </p>
        <CloseCartBtn />
      </div>
    </Container>
  );
};

export default ContainerCarrito;
