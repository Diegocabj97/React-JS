import React from "react";
import CardList from "../../Components/CardList/CardList";
import "./ProductsPage.css"
const ProductsPage = ({counter,setCounter,counterUp}) => {
  return (
    <div>
     
      <h2>Productos más buscados</h2>
      <CardList counter={counter} setCounter={setCounter} counterUp={counterUp} />
    
    </div>
  );
};

export default ProductsPage;
