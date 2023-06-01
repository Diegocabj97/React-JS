import React from 'react'
import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarImport from "./Components/Navbar/Navbar.jsx";
import ContainerCarrito from './Components/ContainerCarrito/ContainerCarrito.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';


class App extends React.Component {
  render(){
    return (    
        <div>
          <NavBarImport />
          <ContainerCarrito/>
          <ItemListContainer  greeting = "Flores Baires!"/>
        </div>
    )
  }
}

export default App

