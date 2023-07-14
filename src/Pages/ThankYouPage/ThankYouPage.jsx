import React, { useContext } from "react";
import "./ThankYouPage.css"
import { CartContext } from "../../Context/CartContext";
export const HandlePayment = () => {
  const { setCart } = useContext(CartContext);
  return setCart([]);
};
const ThankyouPage = () => {
  <HandlePayment />
  return (
    <div>
      <h1 >Muchas Gracias por su compra!!</h1>
     
    </div>
  );
};
export default ThankyouPage;
