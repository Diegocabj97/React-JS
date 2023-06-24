import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Cards from "../../Components/card/card.jsx";


const HomePage = ({counter, setCounter, counterUp}) => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch("./Productos.json")
      .then((response) => response.json())
      .then((products) => {
        const filteredProducts = products.filter(
          (product) => product.nombre && product.nombre.includes(value)
        );
        console.log("Productos filtrados:", filteredProducts);

        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  };

  return (
    <div>
      Buscador de Productos
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Escriba el tipo de producto"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={handleSearch} type="submit" variant="danger">
          Buscar
        </Button>
      </Form>
      <Container className="Cards-List">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/detail/${product.id}`}>
                <Cards
                  counter={counter}
                  setCounter={setCounter}
                  counterUp={counterUp}
                  product={product}
                />
              </Link>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default HomePage;
