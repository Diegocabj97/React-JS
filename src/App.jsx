import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTS
import "./App.css";
import Header from "./Components/Header/header";
import ContainerIndex from "./Components/ContainerIndex/ContainerIndex";
import { ProductsProvider } from "./Context/ProductsContext.jsx";
import NavBarImport from "./Components/Navbar/Navbar.jsx";
import ContainerCarrito from "./Components/cart/ContainerCarrito/ContainerCarrito";
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
import PayCartPage from "./Pages/PayCartPage/PayCartPage";

// ////////////////////////FIREBASE///////////////////////////

const App = () => {
  const [ButtonState, setButtonState] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
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
    <div>
      <CartProvider>
        <ProductsProvider>
          <Router>
            <div className={ButtonState ? "App-dark" : "App-light"}>
              <NavBarImport
                counter={counter}
                setCounter={setCounter}
                greeting="Flores Gamers"
                onSearch={handleSearch}
                setButtonState={setButtonState}
              ></NavBarImport>

              <ContainerCarrito />

              <Header greeting="Flores Gamers!" />

              <ContainerIndex setButtonState={ButtonState}></ContainerIndex>

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/ProductsPage"
                  element={<ProductsPage counterUp={counterUp} />}
                />
                <Route path="/PayCart" element={<PayCartPage />} />
                <Route path="/Contact" element={<Contact />} />
                <Route
                  path="/Detail/:id"
                  element={
                    <DetailPage
                      counterUp={counterUp}
                      setButtonState={ButtonState}
                    />
                  }
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
      </CartProvider>
    </div>
  );
};

export default App;
