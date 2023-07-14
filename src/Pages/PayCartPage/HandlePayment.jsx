import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const HandlePayment = () => {
  const { setCart } = useContext(CartContext);

  const handlePayment = () => {
    setCart([]);
  };

  return (
    <button className="PayBtn" onClick={handlePayment}>
      Pagar
    </button>
  );
};

export default HandlePayment;
