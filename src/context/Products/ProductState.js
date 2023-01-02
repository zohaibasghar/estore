import { useState } from "react";
import productsContext from "./productContext";

const ProductsState = (props) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async (category) => {
    props.setProgress(0)
    if (category) {
      if (category === "men") {
        category = "men's%20clothing";
      }
      else if(category==='women'){
        category= 'women\'s%20clothing'
      }
      props.setProgress(30)
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      ).catch((err) => {
        console.log(err);
      });
      props.setProgress(50)
      const json = await response.json();
      props.setProgress(70)
      setProducts(json);
      props.setProgress(100)
    } else {
      props.setProgress(30)
      const response = await fetch(`https://fakestoreapi.com/products`).catch(
        (err) => {
          console.log(err);
        }
      );
      props.setProgress(50)
      const json = await response.json();
      props.setProgress(70)
      setProducts(json);
      props.setProgress(100)
    }
  };
  return (
    <productsContext.Provider value={{ products, fetchProducts }}>
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsState;
