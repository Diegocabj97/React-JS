import React, { useState, useEffect } from "react";
import Card from "../card/card.jsx";
import "./CardList.css";
import { Link } from "react-router-dom";

const CardList = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("./Productos.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="Cards-List">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/detail/${product.id}`}>
              <Card data={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
