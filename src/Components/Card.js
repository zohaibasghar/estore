import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const navigate = useNavigate();
  const productDes = (id) => {
    navigate("/productdes",{state:{id:id}});
  };
  return (
    <div className="col-md-3">
      <div
        className="card-sl my-2"
        onClick={() => {
          productDes(props.product.id);
        }}
      >
        <div className="card-image">
          <img src={props.product.image} alt={props.product.title} />
        </div>

        <Link className="card-action" to="/">
          ${props.product.price}
        </Link>
        <div className="card-heading truncate-2">{props.product.title}</div>
        <div className="card-text truncate-4">{props.product.description}</div>
        <Link to="/cart" className="card-button">
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default Card;
