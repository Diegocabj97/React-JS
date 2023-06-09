import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [containerClass, setContainerClass] = useState(
    "container-cart-products-hidden-cart"
  );

  const toggleContainerClass = () => {
    setContainerClass((containerClass) =>
      containerClass === "container-cart-products-show-cart"
        ? "container-cart-products-hidden-cart"
        : "container-cart-products-show-cart"
    );
  };

  return (
    <CartContext.Provider value={{ containerClass, toggleContainerClass, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
