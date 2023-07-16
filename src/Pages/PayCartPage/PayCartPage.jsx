import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Form, Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import "./PayCartPage.css";
import ThxMsg from "./ThxMsg";
const initialState = {
  name: "",
  lastname: "",
  Email: "",
};
const PayCartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const FinalizarPago = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Compras Recibidas"), {
      values,
    });
    setPurchaseID(docRef.id);
    console.log(docRef.id);
    setValues(initialState);
    setCart([]);
  };
  const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  return total > 0 ? (
    <div className="payCart">
      <h1>Termina tu compra!</h1>
      {cart.map((product) => (
        <div className="BuyItem" key={product.id}>
          <h3>{product.nombre}</h3>
          <img src={product.imagen} alt="" />
          <p>Precio: ${product.precio}</p>
          <p>Cantidad: {product.cantidad}</p>
        </div>
      ))}
      <h3>El total de tu compra es de $:{total}</h3>
      <h2>Escriba sus datos para finalizar la compra!</h2>
      <div>
        <Form className="BuyForm d-flex" onSubmit={FinalizarPago}>
          <Form.Control
            type="input"
            placeholder="Escriba su nombre"
            name="name"
            value={values.name}
            onChange={handleOnChange}
            className="me-2"
            aria-label="Search"
          />
          <Form.Control 
            type="input"
            placeholder="Apellido"
            name="lastname"
            value={values.lastname}
            onChange={handleOnChange}
            className="me-2"
            aria-label="Search"
          />
          <Form.Control
            type="input"
            placeholder="Telefono"
            name="Telefono"
            value={values.phone}
            onChange={handleOnChange}
            className="me-2"
            aria-label="Search"
          />
          <Form.Control
            type="input"
            placeholder="Email"
            name="Email"
            value={values.Email}
            onChange={handleOnChange}
            className="me-2"
            aria-label="Search"
          />
          <Form.Control
            type="input"
            placeholder="Vuelva a ingresar su Email"
            name="Email"
            value={values.Email}
            onChange={handleOnChange}
            className="me-2"
            aria-label="Search"
          />

          <Button type="submit" onClick={FinalizarPago} variant="danger">
            Finalizar Compra
          </Button>
        </Form>
      </div>
    </div>
  ) : (
    <div className="payCart">
      {purchaseID ? (
        <div>
          <ThxMsg purchaseID={purchaseID} />
          <Link to="/">
            <Button>Volver al Inicio</Button>
          </Link>
        </div>
      ) : ( 
        <div>
          <h3 style={{ margin: "auto", textAlign: "center" }}>
            Tu carrito esta vacio!
          </h3>
          <Link to="/">
            <Button>Volver al Inicio</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PayCartPage;
