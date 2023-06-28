import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import CartWidget from "../cart/CartWidget.jsx";
import { LinkContainer } from "react-router-bootstrap";
import SearchForm from "./SearchForm.jsx";

const NavBarImport = ({ greeting, onSearch, counter, setCounter, value }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>{greeting}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/ProductsPage">
              <Nav.Link className="NavItem">Todos los Productos</Nav.Link>
            </LinkContainer>
            <NavDropdown
              className="dropdown"
              title="Categorías"
              align="start"
              id="collasible-nav-dropdown"
              bg="dark"
            >
              <LinkContainer to="/Category/Procesadores">
                <Nav.Link className="NavItem">Procesadores</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Category/VideoCards">
                <Nav.Link className="NavItem">Placas de video</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Category/Monitores">
                <Nav.Link className="NavItem">Monitores</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Category/Auriculares">
                <Nav.Link className="NavItem">Auriculares</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Category/Almacenamiento">
                <Nav.Link className="NavItem">Almacenamiento</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Category/Fuentes de poder">
                <Nav.Link className="NavItem">Fuentes de poder</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Category/Teclados">
                <Nav.Link className="NavItem">Teclados</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Category/Mouses">
                <Nav.Link className="NavItem">Mouses</Nav.Link>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
            <SearchForm value={value} onSearch={onSearch} />
            <NavDropdown
              className="dropdown"
              title="Contacto"
              align="end"
              id="collasible-nav-dropdown"
              bg="dark"
            >
              <LinkContainer to="/Contacto">
                <Nav.Link className="NavItem">Contactanos</Nav.Link>
              </LinkContainer>
              <Nav.Link className="NavItem">Soporte Técnico</Nav.Link>
            </NavDropdown>

            <CartWidget counter={counter} setCounter={setCounter} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarImport;
