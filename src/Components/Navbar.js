import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./estorelogo.png";
import { Handbag, Person, Explicit } from "react-bootstrap-icons";

const Navbar = () => {
  const weblocation = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="estore" width={35} height={35} />
            <Explicit/>-Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    weblocation.pathname === "/electronics" ? "active" : ""
                  }`}
                  to="/electronics"
                >
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    weblocation.pathname === "/jewelery" ? "active" : ""
                  }`}
                  to="/jewelery"
                >
                  Jewelery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    weblocation.pathname === "/men" ? "active" : ""
                  }`}
                  to="/men"
                >
                  Men's clothing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    weblocation.pathname === "/women" ? "active" : ""
                  }`}
                  to="/women"
                >
                  Women's Clothing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    weblocation.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <div className="store-things">
              <Handbag size={25} className="cart-icon" />
              <span className="signed-person">
                <Person size={30} className="person-icon" /> Person Name
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
