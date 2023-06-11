import React from "react";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarImport from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/header";
import ContainerIndex from "./Components/ContainerIndex/ContainerIndex";
import ContainerCarrito from "./Components/ContainerCarrito/ContainerCarrito";

// Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Offers from "./Pages/Offers.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import Contact from "./Pages/Contact.jsx";

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

        <button onClick={counterUp}>Comprar</button>
        <button onClick={counterDown}>Devolver</button>
        <p>Contador:{counter}</p>
        <ContainerIndex />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Offers" element={<Offers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
