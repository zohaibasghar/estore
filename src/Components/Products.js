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

  
  return (
    <div className="row">
      {props.progress === 0
        ? products.map((product) => {
            return <Card product={product} key={product.id} />;
          })
        : props.category}
    </div>
  );
};

export default Products;
