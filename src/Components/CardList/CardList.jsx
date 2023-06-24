import React, { useState, useEffect } from "react";
import Cards from "../card/card.jsx";

import "./CardList.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const CardList = ({ counter, setCounter, counterUp }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./Productos.json")
      .then((response) => response.json())
      .then((product) => setProducts(product));
  }, []);
  return (
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
  );
};

export default CardList;
