import React, { useContext } from "react";
import "./productDes.css";
import { useLocation } from "react-router-dom";
import productsContext from "../context/Products/productContext";
import { HeartFill } from "react-bootstrap-icons";
const ProductDes = (props) => {
  const context = useContext(productsContext);
  const { products } = context;
  const location = useLocation();
  const product = products.filter((e) => {
    return e.id === location.state.id ? e : null;
  });
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={product[0].image} alt="product " />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <img src={product[0].image} alt="product" />
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product[0].title}</h3>
                <div className="rating">
                  <span className="review-no">{product[0].rating.count} reviews</span>
                </div>
                <p className="product-description">
                {product[0].description}
                </p>
                <h4 className="price">
                  current price: <span>${product[0].price}</span>
                </h4>
                <p className="vote">
                  <strong>{100-product[0].rating.rate}%</strong> of buyers enjoyed this product!{" "}
                  <strong>({Math.floor(product[0].rating.count/product[0].rating.rate)} votes) </strong>
                </p>
                <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="small">
                    s
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    m
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    l
                  </span>
                  <span className="size" data-toggle="tooltip" title="xtra large">
                    xl
                  </span>
                </h5>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">
                    add to cart
                  </button>
                  <button className="like btn btn-default mx-2" type="button">
                    <HeartFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDes;
