import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import CartWidget from "../cart/CartWidget.jsx";
import { LinkContainer } from 'react-router-bootstrap'

const NavBarImport = ({greeting}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand >{greeting}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/ProductsPage">
            <Nav.Link className="NavItem" >
              Productos
            </Nav.Link>
            </LinkContainer>
           
           <LinkContainer to="/Category/VideoCards">
            <Nav.Link className="NavItem">
            Placas de video
            </Nav.Link>
           </LinkContainer>
           <LinkContainer to="/Category/Mouses">
            <Nav.Link className="NavItem">
            Mouses
            </Nav.Link>
           </LinkContainer>
          </Nav>
          <Nav>
            <NavDropdown
              title="Contacto"
              align="end"
              id="collasible-nav-dropdown"
            >
              <LinkContainer to="/Contacto">
              <NavDropdown.Item bg="dark" href="#action/3.1">
                Contactanos
              </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item bg="dark" href="#action/3.2">
                Soporte Técnico
              </NavDropdown.Item>
            </NavDropdown>

            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarImport;
