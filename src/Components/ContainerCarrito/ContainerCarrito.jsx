import { Container } from "react-bootstrap";
import "./ContainerCarrito.css";
import { useContext, useState } from "react";
import CartWidget from "../cart/CartWidget";
import { CartContext } from '../../Context/CartContext';
const ContainerCarrito = ({}) => {
  const { containerClass } = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(!false);
  const toggleIsFull = () => {
    setIsEmpty(!isEmpty);
  };

  return (
    <Container className={containerClass}>
      <div>
        <div className="carrito">
          <h3>Carrito de compras</h3>
          {isEmpty ? (
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
                width:"100%",
              }}
            >
              El carrito esta vacio
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="row-product hidden"></div>
        <div className="cart-total hidden"></div>
      </div>
    </Container>
  );
};

export default ContainerCarrito;
