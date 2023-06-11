import React from "react";
import CardList from "/src/Components/cardList/cardList.jsx";

const ProductsPage = () => {
  return (
    <div>
      <h2>Productos más buscados</h2>
      <div className="Cards-Container">
        <CardList />
      </div>
    </div>
  );
};

export default ProductsPage;
