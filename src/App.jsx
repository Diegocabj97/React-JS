import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// IMPORTS
import "./App.css";
import Header from "./Components/Header/header";
import ContainerIndex from "./Components/ContainerIndex/ContainerIndex";
import Cards from "./Components/card/card.jsx";
import { ProductsProvider } from "./Context/ProductsContext.jsx";
import CardList from "./Components/CardList/CardList.jsx";
import NavBarImport from "./Components/Navbar/Navbar.jsx";
import ContainerCarrito from "./Components/ContainerCarrito/ContainerCarrito";
import { CartProvider } from "./Context/CartContext.jsx";

// IMPORT PAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ErrorPage from "./Pages/ErrorPage";
import Category from "./Pages/Category/Category";
import SearchPage from "./Pages/SearchPage/SearchPage";

// ////////////////////////FIREBASE///////////////////////////

const App = () => {
 

  const [navButtonState, setNavButtonState] = useState(false);
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
  const [containerClass, setContainerClass] = useState("");
  const cambiarClaseContainer = () => {
    setContainerClass("");
  };
  const [counter, setCounter] = useState(0);
  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <ProductsProvider>
        <Router>
          <div className={navButtonState ? "App-dark" : "App-light"}>
            <CartProvider>
              <NavBarImport
                counter={counter}
                setCounter={setCounter}
                greeting="Flores Gamers"
                onSearch={handleSearch}
                toggleContainerClass={cambiarClaseContainer}
                setButtonState={setNavButtonState}
                setNavButtonState={navButtonState}
                className={navButtonState ? "bg-light" : "bg-light"}
              ></NavBarImport>

              <ContainerCarrito className={containerClass} />
            </CartProvider>
            <Header greeting="Flores Gamers!" />

            <ContainerIndex
              className={navButtonState ? "Nav-dark" : "Nav-light"}
            />

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
      </ProductsProvider>
    </div>
  );
};

export default App;
