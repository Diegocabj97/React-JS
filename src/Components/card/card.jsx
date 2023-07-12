import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import { ProductsContext } from "../../Context/ProductsContext";
import { CartContext } from "../../Context/CartContext";

function Cards({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const onAddProduct = (product) => {
    console.log(product);
    setCart([...cart, product]);
    
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
