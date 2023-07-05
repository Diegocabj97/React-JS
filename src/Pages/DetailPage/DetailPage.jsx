import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import Specs from "./Specs";
const DetailPage = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`/Productos.json`)
      .then((response) => response.json())
      .then((product) =>
        setProduct(product.find((product) => product.id === id))
      );
  }, [id]);

  return (
    <div
      className="ProductSpecs"
      style={{
        display: "flex",
        margin: "auto",
        width: "80%",
        justifyContent: "space-between",
      }}
    >
      <Card className="CardDetail">
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>

          <Card.Text></Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>Especificaciones del producto</h1>

        <p>{Specs}</p>
      </div>
    </div>
  );
};

export default DetailPage;
