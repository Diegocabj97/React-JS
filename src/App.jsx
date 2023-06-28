import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// IMPORTS
import "./App.css";
import NavBarImport from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/header";
import ContainerIndex from "./Components/ContainerIndex/ContainerIndex";
import ContainerCarrito from "./Components/ContainerCarrito/ContainerCarrito";
import Cards from "./Components/card/card.jsx";

import CardList from "./Components/CardList/CardList.jsx";

// IMPORT PAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ErrorPage from "./Pages/ErrorPage";
import Category from "./Pages/Category/Category";
import SearchPage from "./Pages/SearchPage/SearchPage";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = (searchText) => {
    if (searchText) {
      fetch("./Productos.json")
        .then((response) => response.json())
        .then((products) => {
          const filteredProducts = products.filter(
            (product) => product.nombre && product.nombre.includes(searchText)
          );
          console.log("Productos filtrados:", filteredProducts);
          setProducts(filteredProducts);
        })
        .catch((error) => {
          console.error("Error al obtener los productos:", error);
        });
    } else {
      setProducts([]);
    }
  };
  const [counter, setCounter] = useState(0);
  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    setCounter(counter - 1);
  };
  return (
    <Router>
      <div className="App">
        <NavBarImport
          counter={counter}
          setCounter={setCounter}
          greeting="Flores Gamers"
          onSearch={handleSearch}
        />

        <ContainerCarrito></ContainerCarrito>
        <Header greeting="Flores Gamers!" />

        <ContainerIndex />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/ProductsPage"
            element={<ProductsPage counterUp={counterUp} />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Detail/:id"
            element={<DetailPage counterUp={counterUp} />}
          />
          <Route path="/Category/:categoryid" element={<Category />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/Search/:onSearch"
            element={<SearchPage onSearch={handleSearch} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
