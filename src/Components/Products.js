import React, { useContext, useEffect } from "react";
import Card from "./Card";
import productsContext from "../context/Products/productContext";
const Products = (props) => {
  const context = useContext(productsContext);
  const { products, fetchProducts } = context;
  useEffect(() => {
    fetchProducts(props.category);
    // eslint-disable-next-line
  }, [props.category]);
  console.log(products);
  return (
    <div className="row">
      {products.map((product) => {
        return <Card product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
