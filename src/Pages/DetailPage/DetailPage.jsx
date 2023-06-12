import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import "/src/Components/card/card.css";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetch(`/Productos.json`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [id]);
  console.log([product.id]);
  return (
    <Card>
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default DetailPage;
