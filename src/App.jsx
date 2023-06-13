import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTS
import "./App.css";
import NavBarImport from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/header";
import ContainerIndex from "./Components/ContainerIndex/ContainerIndex";
import ContainerCarrito from "./Components/ContainerCarrito/ContainerCarrito";

// IMPORT PAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ErrorPage from "./Pages/ErrorPage";
import Category from "./Pages/Category/Category";

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    setCounter(counter - 1);
  };
  return (
    <Router>
      <div className="App">
        <NavBarImport greeting="Flores Gamers" />
        <ContainerCarrito></ContainerCarrito>
        <Header greeting="Flores Gamers!" />

        <ContainerIndex />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Detail/:id" element={<DetailPage />} />
          <Route path="/Category/:categoryid" element={<Category />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
