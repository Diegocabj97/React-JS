import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [containerClass, setContainerClass] = useState(
    "container-cart-products-hidden-cart"
  );

  const toggleContainerClass = () => {
    setContainerClass((containerClass) =>
      containerClass === "container-cart-products-hidden-cart"
        ? "container-cart-products-show-cart"
        : "container-cart-products-hidden-cart"
    );
  };

  return (
    <CartContext.Provider value={{ containerClass, toggleContainerClass }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
