import React, { useContext } from "react";
import productsContext from "../context/Products/productContext";
const Carousel = () => {
  // const context =
  useContext(productsContext);
  // const { products } = context;
  // console.log(products[0])
  const pics = [534, 536, 543, 654, 845, 24, 654, 45];
  const picsLinks = pics.map((e) => {
    return `https://picsum.photos/id/${e}/800`;
  });
  const randomPic = () => {
    return picsLinks[Math.floor(Math.random() * pics.length)];
  };
  return (
    <div className="container">
      <div id="mainPageAd" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainPageAd"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#mainPageAd"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#mainPageAd"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={randomPic()}
              className="d-block w-100"
              alt={randomPic()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Happy new year</h5>
              <p>
                Avail amazing discounts on this new year
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={randomPic()}
              className="d-block w-100"
              alt={randomPic()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Winter sale</h5>
              <p>
                Flat 50% off on entire winter collection
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={randomPic()}
              className="d-block w-100"
              alt={randomPic()}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Off Season Sale</h5>
              <p>
                upto 70% off on off season stock
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainPageAd"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainPageAd"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
