import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div style={{display:"flex", justifyContent:"center", margin:"100px", fontSize:"20px"}}>Bienvenidos a {greeting}</div>
  )
}

export default ItemListContainer