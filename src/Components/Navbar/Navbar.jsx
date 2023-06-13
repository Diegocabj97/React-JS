import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import CartWidget from "../cart/CartWidget.jsx";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const NavBarImport = ({ greeting }) => {
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
              <LinkContainer to="/Category/VideoCards">
                <Nav.Link className="NavItem">Placas de video</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Category/Mouses">
                <Nav.Link className="NavItem">Mouses</Nav.Link>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav>
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

            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarImport;
