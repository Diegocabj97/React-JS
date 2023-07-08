import { useState, createContext, useEffect } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../Productos.json")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.log(error));
  }, []);
  return ( 
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
