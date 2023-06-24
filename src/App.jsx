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

const App = () => {
  
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
        />

        <ContainerCarrito></ContainerCarrito>
        <Header greeting="Flores Gamers!" />

        <ContainerIndex />
        
        <Routes>
          <Route path="/" element={<HomePage counter={counter} counterUp={counterUp}/>} />
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;