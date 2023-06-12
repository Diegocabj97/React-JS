import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Cards from "../../Components/card/card";
import './Category.css'
import { auto } from "@popperjs/core";

const Category = () => {
  const [product, setProduct] = useState([]);
  let { categoryid } = useParams();
  let filteredProducts = product.filter((item) => {
    return item.categoria === categoryid;
  });
  useEffect(() => {
    fetch(`/Productos.json`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [categoryid]);

  return (
    <div className="CategoryItems">
      {filteredProducts.map((product) => {
        return (
          <div key={product.id}>
            <Cards product={product}></Cards>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
