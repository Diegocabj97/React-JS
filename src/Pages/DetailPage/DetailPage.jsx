import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Cards from "../../Components/card/card";
const DetailPage = ({ setButtonState }) => {
  
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productFound = doc(db, "products", id);
        const docSnap = await getDoc(productFound);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("El producto no existe.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div
      className={setButtonState ? "ProductDetail-light" : "ProductDetail-dark"}
    >
      {product && <Cards product={product} className="CardDetail" />}

      <div className="ProductSpecs">
        <h1>Especificaciones del producto</h1>
        <hr></hr>
        <br></br>
        {product.Specs}
      </div>
    </div>
  );
};

export default DetailPage;
