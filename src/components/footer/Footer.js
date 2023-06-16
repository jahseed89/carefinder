import React from "react";
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <h1>CareFinder</h1>
        <p>CareFinder Plot 42, Akinza Street,</p>
        <p> Victoria island, Lagos</p>
        <p>+2349167351788</p>
      </div>
      <div className="footer-items"> 
        <h1>About Us</h1>
        <p>News & Media </p>
        <p>Contact Us</p>
      </div>
      <div className="footer-items">
        <h1>Quick Links</h1>
        <p>My Account </p>
        <p>Book an Pointment</p>
        <p>Library</p>
      </div>
    </div>
  );
};

export default Footer;
