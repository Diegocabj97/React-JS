import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './Navbar.css'
import CartIcon from '../cart/CartWidget.jsx'

const NavBarImport = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
          <Navbar.Brand href="#home">Flores Baires</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='NavItem' href="#features">Productos</Nav.Link>
              <Nav.Link className='NavItem' href="#pricing">Ofertas</Nav.Link>
              
          </Nav>
          <Nav>
          
            <NavDropdown title="Contacto" align='end' id="collasible-nav-dropdown">
                <NavDropdown.Item bg="dark" href="#action/3.1">Contactanos</NavDropdown.Item>
                <NavDropdown.Item bg="dark" href="#action/3.2">
                  Soporte Técnico
                </NavDropdown.Item>
              </NavDropdown>

            <CartIcon
            
            />


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarImport