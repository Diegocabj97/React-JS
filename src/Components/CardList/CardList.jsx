import React, { useEffect, useState } from "react";
import Cards from "../card/card.jsx";
import "./CardList.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = ({ counter, setCounter, counterUp }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProducts(docs);
    };
    getProducts();
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
