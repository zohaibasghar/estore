import React from "react";
import {
  Explicit,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed ">
        <div className="footer-right">
          <a
            target="_blank"
            href="https://www.facebook.com/zohaibmehar123456"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            href="https://www.twitter.com/meharzohaib123"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
            <Linkedin />
          </a>
          <a
            target="_blank"
            href="https://www.github.com/zohaibasghar"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <Link className="link-1" to="/">
              Home
            </Link>

            <Link to="/electronics">Electronics</Link>

            <Link to="/Jewelery">Jewelery</Link>

            <Link to="/men">Men's Clothing</Link>

            <Link to="/women">Women's Clothing</Link>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact us</Link>
          </p>

          <p>
            <Explicit />
            -store &copy; 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
