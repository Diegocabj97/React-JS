import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Cards from "../../Components/card/card";
import "./Category.css";
import { Link } from "react-router-dom";
import { auto } from "@popperjs/core";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext.jsx";

const Category = () => {
  const { products } = useContext(ProductsContext);
  let { categoryid } = useParams();
  let filteredProducts = products.filter((item) => {
    return item.categoria === categoryid;
  });

  return (
    <div className="CategoryItems">
      {filteredProducts.map((products) => {
        return (
          <Link to={`/detail/${products.id}`} key={products.id}>
            <div>
              <Cards product={products}></Cards>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
