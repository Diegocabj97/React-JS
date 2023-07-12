import React from "react";
import CardList from "../../Components/CardList/CardList";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { ProductsProvider } from "../../Context/ProductsContext";
import "./ProductsPage.css";
const ProductsPage = () => {
  return (
    <ProductsProvider>
      <div>
        <h2>Productos más buscados</h2>
        <CardList />
      </div>
    </ProductsProvider>
  );
};

export default ProductsPage;
