import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";

function Cards({ product, counter, counterUp }) {

  return (
    <div>
      
        <Card>
          <Card.Img className="cardImg" variant="top" src={product.imagen} />
          <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>{product.descripcion}</Card.Text>
            <Button
              className="ComprarBtn"
              onClick={counterUp}
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
