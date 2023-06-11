import React, { useState, useEffect } from "react";
import Card from "../card/card.jsx";
import "./CardList.css";

const CardList = () => {
  const [products, setProducts] = useState([]);

  console.log("Productos", products);

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
              <Card data ={product}/>
            </div>
          );
        })}
  </div>
    
   
  );
};

export default CardList;
