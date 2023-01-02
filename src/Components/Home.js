import React from "react";
import Products from "./Products";
const Home = (props) => {
  

  return (
    <div className="container">
      {<Products category={props.category}/>}
    </div>
  );
};

export default Home;
