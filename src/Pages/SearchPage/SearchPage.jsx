import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Components/card/card";
import { Link } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = ({ counter, setCounter, counterUp }) => {
  const [product, setProduct] = useState([]);
  let { onSearch } = useParams();
  let filteredProducts = product.filter((item) => {
    const productName = item.nombre.toLowerCase();
    const searchValue = onSearch.toLowerCase();
    return productName.includes(searchValue);
  });
  useEffect(() => {
    fetch(`/Productos.json`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [onSearch]);

  return (
    <div className="SearchItems">
      {filteredProducts.map((product) => {
        return (
          <Link to={`/detail/${product.id}`} key={product.id}>
            <div>
              <Cards product={product}></Cards>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default SearchPage;
