import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import { CartContext } from "../../Context/CartContext";

function Cards({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const onAddProduct = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].cantidad += 1;
    } else {
      updatedCart.push({ ...product, cantidad: 1 });
    }

    setCart(updatedCart);
  };

  return (
    <div>
      <Card>
        <Card.Img className="cardImg" variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.descripcion}</Card.Text>
        
            <Button
              onClick={() => onAddProduct(product)}
              className="ComprarBtn"
              variant="primary"
            >
              Comprar
            </Button>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
