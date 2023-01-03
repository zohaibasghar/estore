import React from "react";
import Products from "./Products";
const Home = (props) => {
  

  return (
    <div className="container">
      {<Products category={props.category}  progress={props.progress}/>}
    </div>
  );
};

export default Home;
