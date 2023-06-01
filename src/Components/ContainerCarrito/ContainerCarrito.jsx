import React from 'react'
import { Container } from 'react-bootstrap'
import './ContainerCarrito.css'
const ContainerCarrito = () => {
  return (
    <Container>
    <div className="container-cart-products hidden-cart">
      
      <div className="carrito">
        <h3>Carrito de compras</h3>
      </div>
      <div className="row-product hidden">
        
      </div>
      <div className="cart-total hidden">
      </div>
      
    </div>
    </Container>
  )
}

export default ContainerCarrito
